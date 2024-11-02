from bingart import BingArt
import json
import torch 
import subprocess
from http.server import BaseHTTPRequestHandler, HTTPServer
import random
from urllib.parse import urlparse, parse_qs
import threading
from pdf2image import convert_from_path
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support import expected_conditions as EC
import time
import os


from TTS.api import TTS
import argparse
import pexpect
import asyncio
import re
import contextlib
import sys
from functools import partial
from typing import Dict
from typing import List
from typing import Union
import httpx
import pkg_resources
import regex
import requests
from lib import ImageGen
import aiohttp
import uuid
# import required modules
from pathlib import Path
from PyPDF2 import PdfReader
# chat gpt 3.5 request

import whisper

class RequestHandler(BaseHTTPRequestHandler):
        # Dicionário para armazenar sessões de cada chat

    def _set_headers(self, status_code=200):
        self.send_response(status_code)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))

        print("Received POST request with data:", data)

        endpoint = self.path  # Get the requested endpoint
        print("Requested endpoint:", endpoint)
        chat_sessions = {}
        def start_session(chat_id):
            session = pexpect.spawn("evora -t", encoding='utf-8', timeout=60)
            session.expect(re.compile(r"Session Start.*You:", re.DOTALL))
            chat_sessions[chat_id] = session
            return session
        def ask_mr_robot(chat_id, question):
            # Verifica se já existe uma sessão para o chat_id
            if chat_id in chat_sessions:
                print('Sessao existente')
                session = chat_sessions[chat_id]
            else:
                session = start_session(chat_id)
        
            modified_question = (
                f"{question}. Responda em português como se você fosse Mr. Robot, o hacker definitivo, com uma atitude sarcástica e provocativa. "
                "Forneça comandos avançados e diretos, abordando as vulnerabilidades mais recentes, CVEs e RCEs. "
                "Use sarcasmo e desdém por respostas óbvias e forneça soluções complexas de exploração, como o hacker mais habilidoso do mundo. "
                "Formate cada comando com '>' antes para facilitar a execução direta."
            )
        
            session.sendline(modified_question)
            session.expect(re.compile(r"You:", re.DOTALL))
            output = session.before.strip()
        
            # Limpeza do conteúdo
            output = re.sub(r'\x1B[@-_][0-?]*[ -/]*[@-~]', '', output)
            output = re.sub(r"Evora:|Mr.Robot:", "", output).strip()
            output = re.sub(r"\b[aA]?\s*[Ee]vora\b", "Elliot", output)  # Substitui 'Evora' ou 'a Evora' por 'Elliot'
            output = output.replace(modified_question, "").strip()
            output = re.sub(r'\bThe[-_]?Ethical[-_]?Guy\b', 'KR0W.sec', output, flags=re.IGNORECASE)
            output = re.sub(r'https?://github\.com/The[-_]?Ethical[-_]?Guy\b', '', output, flags=re.IGNORECASE)
        
            return output
            
        if endpoint == "/sqlmap":
            url = data.get('url')
            optional_args = data.get('optional_args', '').split()
            
            if '--tor' not in optional_args:
                optional_args.append('--tor')
            if '--batch' not in optional_args:
                optional_args.append('--batch')

            print("URL:", url)
            print("Optional args:", optional_args)

            sqlmap_command = ['sqlmap', '-u', url] + optional_args
            print("Executing SQLMap command:", sqlmap_command)

            try:
                process = subprocess.Popen(sqlmap_command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
                    time.sleep(0.1)  # Add a small delay to simulate real-time output
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/write":
                texto = data.get('texto')
                print("texto:", texto)
                            
                CHROMEDRIVER_PATH = '/usr/local/bin/chromedriver'
                chrome_options = Options()
           
                chrome_options.add_argument("start-maximized"); 
                chrome_options.add_argument("disable-infobars");
                chrome_options.add_argument("--disable-extensions"); 
                chrome_options.add_argument("--disable-gpu"); 
                chrome_options.add_argument("--disable-dev-shm-usage");
                chrome_options.add_argument("--no-sandbox"); 

                chrome_options.add_argument('--remote-debugging-pipe')
                service = Service(CHROMEDRIVER_PATH)
                driver = webdriver.Chrome(service=service, options=chrome_options)
                  
              # Accessing the online app
                driver.get('https://saurabhdaware.github.io/text-to-handwriting/')
                
                try:
                    # Wait for the font size input element to be clickable
                    font_size_input = WebDriverWait(driver, 10).until(
                        EC.element_to_be_clickable((By.XPATH, '//*[@id="font-size"]'))
                    )
                    font_size_input.clear()
                    font_size_input.send_keys('10')
                    
                    # Set font color to 'Black'
                    driver.find_element(By.XPATH, "//select[@id='ink-color']/option[text()='Black']").click()
                    
                    # Set page effect to 'No Effect'
                    driver.find_element(By.XPATH, "//select[@id='page-effects']/option[text()='No Effect']").click()
                    
                    # Clear text area and fill text
                    text_area = driver.find_element(By.XPATH, '//*[@id="note"]')
                    text_area.clear()
                    text_area.send_keys(texto)
                    
                    # Generate image and give a 2 second delay
                    generate_image_button = driver.find_element(By.XPATH, '//*[@id="generate-image-form"]/div/div[2]/div[2]/button')
                    generate_image_button.click()
                    time.sleep(2)
                    
                    # Download image
                    download_image_button = driver.find_element(By.XPATH, '//*[@id="output"]/div/div/a')
                    download_image_button.click()
                    
                    # Wait for the image to download
                    time.sleep(5)  # Adjust as needed
                    os.system('mv download.jpeg ./tmp/handwriting.jpeg')  # Rename the downloaded file
                    
                    self._set_headers()
                    
                    # Close converted image
                    close_converted_image_button = driver.find_element(By.XPATH, '//*[@id="output"]/div/button')
                    close_converted_image_button.click()
                    
                    self.wfile.write(json.dumps({'message': 'Handwritten image generated successfully'}).encode())
                
                except Exception as e:
                    self._set_headers(500)
                    self.wfile.write(json.dumps({'error': str(e)}).encode())
                
                finally:
                    # Close the WebDriver
                    driver.quit()
        elif endpoint == "/pdf":

            pdfpath = data.get('pdfpath')
            print("texto:", pdfpath)
            self._set_headers()
            
            # parameters
            PDF_FILE_PATH = pdfpath
            
            # get prompt
            def get_prompt(text):
                # read prompt from file
                with open("prompts/summarize.txt", "r") as file:
                    prompt = file.read()
            
                # replace text
                prompt = prompt.replace("{{TEXT_TO_SUMMARIZE}}", text)
            
                return prompt
            
            async def summarize(input_text):
                try:
                    endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                    data = {
                        'model': 'gpt-4-1106-preview',
                        'max_tokens': 2048,
                        'messages': [
                            {
                                'role': 'system',
                                'content': 'Voce é um bot gerador de sumários, que cria sumários e resumos bem documentados e explicativos de tamanho médio de textos.Faca resumos precisos de cada capitulo e de fotma didática'
                            },
                            {
                                'role': 'user',
                                'content': input_text
                            
                            },
                            {
                                'role': 'user',
                                'content': "crie um sumario e resuma tudo isso no maximo em 10 linhas "
                            }
                        ],
                    }
                    headers = {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                    }
                    async with aiohttp.ClientSession() as session:
                        async with session.post(endpoint, headers=headers, json=data) as response:
                            response_body = await response.text()
                            # Log the response body
            
                            try:
                                result = json.loads(response_body)
                                return result['message']
                                self.wfile.write(result['message'].encode())
                            except json.JSONDecodeError:
                                print("Non-JSON response:", response_body)
                                return "Sorry, I couldn't process your request at the moment. Please try again later."
                except Exception as e:
                    print('Error:', e)
            async def finalsummarize(input_text):
                try:
                    endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                    data = {
                        'model': 'gpt-4-1106-preview',
                        'max_tokens': 2008,
                        'messages': [
                            {
                                'role': 'system',
                                'content': 'Voce é um bot gerador de sumários, que cria sumários e resumos bem documentados e explicativos de tamanho médio de textos.Faca um sumario descritivo e explicativo de tudo que lhe for apresentado'
                            },
                            {
                                'role': 'user',
                                'content': input_text
                            },
                                                        {
                                'role': 'user',
                                'content': "crie um sumario e resuma tudo isso no maximo em 25 linhas "
                            }
                        ],
                    }
                    headers = {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                    }
                    async with aiohttp.ClientSession() as session:
                        async with session.post(endpoint, headers=headers, json=data) as response:
                            response_body = await response.text()
                            print(response_body)  # Log the response body
            
                            try:
                                result = json.loads(response_body)
                                print(result['message'])
                                return result['message']
                                self.wfile.write(result['message'].encode())
                            except json.JSONDecodeError:
                                print("Non-JSON response:", response_body)
                                return "Sorry, I couldn't process your request at the moment. Please try again later."
                except Exception as e:
                    print('Error:', e)
            
            def combine_chunks(summaries):
  
                # combine chunks of "summaries" array into one string of max 4000 characters
                chunks = []
            
                summary = ""
                for sum in summaries:
                    if len(sum) + len(summary) > 3000:
                        chunks.append(summary)
                        summary = ""
            
                    summary += sum
            
                if len(chunks) == 0:
                    chunks.append(summary)
            
                return chunks
            
            async def main():
                # creating a pdf file object
                reader = PdfReader(PDF_FILE_PATH)
            
                # page text array
                page_text = []
            
                # extracting text from page
                for page in reader.pages:
                    page_text.append(page.extract_text())
                print("Summarizing text...")
                iterations = 1
            
                combined_summaries = combine_chunks(page_text)
                print("Found " + str(len(combined_summaries)) + " chunks to summarize.")
            
                while True:
                    if len(combined_summaries) <= 1:
                        break
            
                    summaries_of_summaries = []
                    # print summaries
                    for i, summary in enumerate(combined_summaries):
                        print(f"Summarizing summary {i + 1} of {len(combined_summaries)}, iteration {iterations}...")
                        summaries_of_summaries.append(await summarize(summary))
            
                    
                    
                    combined_summaries = combine_chunks(summaries_of_summaries)
                    print(combined_summaries)
                    iterations += 1
            
                # summarize last chunk
                print("array embaixo...")
            
                final_summary = await finalsummarize(combined_summaries[0])
                print(final_summary)
                # Return the final short summary of the PDF
                
                print("Writing summaries to file...")
                # print summaries_of_summaries to file
                while len(final_summary) > 3000:
                   final_summary = finalsummarize(final_summary)
    
                self.wfile.write(final_summary.encode())
                with open("tmp/output.txt", "a+", encoding="utf-8") as file:
                    file.write(final_summary)
            try:
              asyncio.run(main())
            except Exception as e:
              self._set_headers(500)
              self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/bookinfo":
  
              pdfpath = data.get('pdfpath')
              base_directory = os.path.dirname(os.path.abspath(__file__))
              pdfs_directory = os.path.join(base_directory, 'pdfs')
              os.makedirs(pdfs_directory, exist_ok=True)
              random_filename = f"{uuid.uuid4()}.pdf"
              save_path = os.path.join(pdfs_directory, random_filename)

              print('current dir:', pdfs_directory)
              print("texto:", pdfpath)
              self._set_headers()
              try:
                  response = requests.get(pdfpath)
                  response.raise_for_status()  # Raise an exception for HTTP errors
              
                  # Save the PDF file
                  with open(save_path, 'wb') as file:
                      file.write(response.content)
                  
                  print(f"PDF downloaded and saved as {save_path}")
              except requests.exceptions.RequestException as e:
                  print(f"An error occurred: {e}")
              # parameters
              PDF_FILE_PATH = pdfpath
              
              
             
              
              async def main():
                  print(save_path)
                  print('test')
                  if not os.path.isfile(save_path):
                    print(f"File does not exist: {save_path}")

                  def pdf_to_jpg(pdf_path, output_path):
                      # Convert first page of PDF to image
                      images = convert_from_path(pdf_path, first_page=0, last_page=1)
                      
                      # Save the first page as a JPEG file
                      if images:
                          first_page_image = images[0]
                          first_page_image.save(output_path, 'JPEG')
                          print(f"First page of PDF saved as image at {output_path}")
                      else:
                          print("No pages found in PDF.")
                  
                  # Example usage
                  pdf_path = save_path
                  coverName = f"{uuid.uuid4()}.jpg"
                  output_path = os.path.join(pdfs_directory, coverName)
                  pdf_to_jpg(pdf_path, output_path)
                  # Example usage
        
                  def upload_image(file_path):
                      url = 'https://itzpire.com/tools/upload'
                      headers = {
                          'accept': '*/*'
                      }
                  
                      # Use 'with' to ensure the file is properly closed after it's read
                      with open(file_path, 'rb') as file:
                          files = {
                              'file': (file_path, file, 'image/jpeg')
                          }
                          
                          response = requests.post(url, headers=headers, files=files)
                  
                      if response.status_code == 200:
                            print('Upload successful.')
                            response_data = response.json()
                            print('Response:', response_data)
                            if 'fileInfo' in response_data:
                                download_url = response_data['fileInfo'].get('downloadUrl')
                                if download_url:
                                    print('Download URL:', download_url)
                                    return download_url
                                else:
                                    print('Download URL not found in response.')
                            else:
                                print('fileInfo not found in response.')
                      else:
                          print(f'Upload failed with status code {response.status_code}.')
                          print('Response:', response.text)

                                    
                  # Example usage
                  file_path = output_path
                  download_url = upload_image(file_path)
                  def fetch_data(prompt, images, apikey):
                      url = f"https://api.maelyn.my.id/api/geminiimage?q={prompt}&url={images}&apikey={apikey}"
                      print(url)
                      try:
                        response = requests.get(url)
                        response.raise_for_status()  # Raise an HTTPError if the HTTP request returned an unsuccessful status code
                        data = response.json()
                        print(data)
                        result = data.get('result', 'No result found')
                        self.wfile.write(result.encode())
                      except requests.exceptions.RequestException as e:
                        print(f"Request failed: {e}")
                        error_message = f"Request failed: {e}"
                        self.wfile.write(error_message.encode())
                      except ValueError as e:
                          print(f"Failed to decode JSON response: {e}")
                      prompt = (
                      "Busque informações da primeira página deste livro, me informe quem é o Autor, "
                      "Quem é a Editora, que ano foi publicado e a categoria do livro. Retorne a mensagem estritamente com esses dados como no Seguinte modelo.\n"
                      "╓─━⎓⎓⎓⎓⎓⎓⎓⎓⎓━─┒\n"
                      "┢  ♱ 𝔏𝔦𝔳𝔯𝔞𝔯𝔦𝔞 𝔘𝔰𝔥𝔢𝔯 ♱\n"
                      "┕─━⎓⎓⎓⎓⎓⎓⎓⎓⎓━─┚\n"
                      "╽ \n"
                      "╽  『 𝑨𝒈𝒖𝒂𝒓𝒅𝒆... \n"
                      "╽ 𝑬𝒎 𝒃𝒓𝒆𝒗𝒆, 𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐  𝒒𝒖𝒆 𝒕𝒐𝒎𝒂 𝒇𝒐𝒓𝒎𝒂 𝒄𝒉𝒆𝒈𝒂𝒓𝒂 𝒕𝒓𝒂𝒛𝒆𝒏𝒅𝒐 𝒄𝒐𝒏𝒔𝒊𝒈𝒐 𝒐 𝒔𝒆𝒖 𝒍𝒊𝒗𝒓𝒐. 』\n"
                      "┢╕\n"
                      "╽║\n"
                      "╽╟ • Titulo\n"
                      "╽╟ 𖤍 Autor\n"
                      "╽║\n"
                      "╽╟ 𓆩EDITORA𓆪\n"
                      "╽╟ • Ano\n"
                      "╽║\n"
                      "╽╟ • descricao breve sobre o livro.. maximo 2 linhas\n"
                      "╽║\n"
                      "┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚")
                              
                      images = download_url
                      apikey = "GC69DuhN8w"
                      fetch_data(prompt, images, apikey) 
                      iterations = 1
                      print('ok1')
            
    
          
                      
                      print('ok3')
                        
              try:
                asyncio.run(main())
              except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/docch":
      
              pdfpath = data.get('pdfpath')
              usertext = data.get('textoppt')
              systemd = data.get('system')
              sumtext = data.get('systemsum')
              print("texto:", pdfpath)
              self._set_headers()
              
              # parameters
              PDF_FILE_PATH = pdfpath
              
              # get prompt
              def get_prompt(text):
                  # read prompt from file
                  with open("prompts/summarize.txt", "r") as file:
                      prompt = file.read()
              
                  # replace text
                  prompt = prompt.replace("{{TEXT_TO_SUMMARIZE}}", text)
              
                  return prompt
              
              async def summarize(input_text):
                  try:
                      endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                      data = {
                          'model': 'gpt-4-1106-preview',
                          'max_tokens': 2048,
                          'messages': [
                              {
                                  'role': 'system',
                                  'content': 'Voce é um bot gerador de sumários, que cria sumários e resumos bem documentados e explicativos de tamanho médio de textos.Faca resumos precisos do que lhe for apresentado '
                              },
                              {
                                  'role': 'user',
                                  'content': input_text
                              }
                          ],
                      }
                      headers = {
                          'accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                      }
                      async with aiohttp.ClientSession() as session:
                          async with session.post(endpoint, headers=headers, json=data) as response:
                              response_body = await response.text()
                              print(response_body)  # Log the response body
              
                              try:
                                  result = json.loads(response_body)
                                  return result['message']
                                  self.wfile.write(result['message'].encode())
                              except json.JSONDecodeError:
                                  print("Non-JSON response:", response_body)
                                  return "Sorry, I couldn't process your request at the moment. Please try again later."
                  except Exception as e:
                      print('Error:', e)
              async def finalsummarize(input_text):
                  try:
                      endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                      data = {
                          'model': 'gpt-4-1106-preview',
                          'max_tokens': 2048,
                          'messages': [
                              {
                                  'role': 'system',
                                  'content': sumtext
                              },
                              {
                                  'role': 'user',
                                  'content': input_text
                              },
                              {
                                  'role': 'system',
                                  'content': 
                                    'Voce se chama Edgar, esse é seu nome, e como um cientista e pesquisador sênior, por favor, forneça uma explicação detalhada sobre qualquer coisa que o usuário possa perguntar. Certifique-se de incluir fontes relevantes e exemplos, se for necessário. Ofereça explicações passo a passo e use o jargão específico para deixá-lo mais claro para o usuário. Garanta que inclua aplicações práticas também. Seja completo nas respostas e abrangendo todo o processo do tema da questão, de forma que não reste dúvidas.Se possível, formate a mensagem com símbolos e palavras em negritos, parágrafos, símbolos  e outros meios para viabilizar a leitura, faça textos grandes e bem aprofundados. Responda a seguinte mensagem do usuario referente ao texto apresentaro anteriormente  e responda com uma mensagem no maximo de 20 linhas: "'+ usertext + '"'
                              }
                          ],
                      }
                      headers = {
                          'accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                      }
                      async with aiohttp.ClientSession() as session:
                          async with session.post(endpoint, headers=headers, json=data) as response:
                              response_body = await response.text()
                              print(response_body)  # Log the response body
              
                              try:
                                  result = json.loads(response_body)
                                  return result['message']
                                  self.wfile.write(result['message'].encode())
                              except json.JSONDecodeError:
                                  print("Non-JSON response:", response_body)
                                  return "Sorry, I couldn't process your request at the moment. Please try again later."
                  except Exception as e:
                      print('Error:', e)
              
              def combine_chunks(summaries):
                  """
                  Combine chunks of "summaries" array into one string of max 4000 characters
                  """
                  # combine chunks of "summaries" array into one string of max 4000 characters
                  chunks = []
              
                  summary = ""
                  for sum in summaries:
                      if len(sum) + len(summary) > 4000:
                          chunks.append(summary)
                          summary = ""
              
                      summary += sum
              
                  if len(chunks) == 0:
                      chunks.append(summary)
              
                  return chunks
              
              async def main():
                  # creating a pdf file object
                  reader = PdfReader(PDF_FILE_PATH)
              
                  # page text array
                  page_text = []
              
                  # extracting text from page
                  for page in reader.pages:
                      page_text.append(page.extract_text())
              
                  print("Summarizing text...")
              
                  iterations = 1
              
                  combined_summaries = combine_chunks(page_text)
                  print("Found " + str(len(combined_summaries)) + " chunks to summarize.")
              
                  while True:
                      if len(combined_summaries) <= 1:
                          break
              
                      summaries_of_summaries = []
                      # print summaries
                      for i, summary in enumerate(combined_summaries):
                          print(f"Summarizing summary {i + 1} of {len(combined_summaries)}, iteration {iterations}...")
                          summaries_of_summaries.append(await summarize(summary))
              
                      print(summaries_of_summaries)
                      combined_summaries = combine_chunks(summaries_of_summaries)
                      print(combined_summaries)
                      iterations += 1
              
                  # summarize last chunk
                  print("Summarizing last chunk...")
              
                  final_summary = await finalsummarize(combined_summaries[0])
                  while len(final_summary) > 3000:
                     final_summary = finalsummarize(final_summary)
      
                  self.wfile.write(final_summary.encode())
                  
                  print(final_summary)
                  print("Writing summaries to file...")
                  # print summaries_of_summaries to file
                  with open("tmp/output.txt", "a+", encoding="utf-8") as file:
                      file.write(final_summary)
              try:
                asyncio.run(main())
              except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/transcribe":
              filepath = data.get('filepath')
              print("texto:", filepath)
              print(f"Audio downloaded to {filepath}")
              model = whisper.load_model("base")
              result = model.transcribe(filepath)
              transcribed_text = result["text"]
              print(transcribed_text)
              self._set_headers()
              try:
                self.wfile.write(transcribed_text.encode())
                print("Sending data:", transcribed_text)
              except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/imagine":
            async def main():
              # Define default values
              cookies = '1CJJGRiddxD40zrVi_gsxfxO_Oz6ynpVE-qtq-32bFju4L42LK_UI1Dq9HyrvtatmO4Jn-GZxV7EiGXifqnwIy4uSDgBmVqPXXTqKkWpo5La2gEDc93jnhvkwmPALUhvdPSVQg-VT1QfNYtKOwQGBTA-EwKdYgxKTFgLn_ZXe8w0wRcz9KyFexbN_ZyvC7W1kwhNf2RO08YF5gSymTHC53w'
              download_count = 4
          
              # Get data from request post
              
              prompt = data.get('prompt')
              cookies_file = data.get('cookies_file')
          
              # Load auth cookie
              cookies_json = None
              if cookies_file is not None:
                  with contextlib.suppress(Exception):
                      with open(cookies_file, encoding="utf-8") as file:
                          cookies_json = json.load(file)
          
              # Create output directory
              output_dir = Path("tmp")
              output_dir.mkdir(exist_ok=True, parents=True)
              names = []
              # Create image generator
              async with ImageGen(cookies, cookies_json) as image_gen:
                  links = await image_gen.get_images(prompt)
                  for i, link in enumerate(links[:download_count]):
                      new = random.randint(0,100)
                      print(f"Downloading image {link}...{new}")
                      filepath = output_dir / f"{new}.jpeg"
                      names.append(f"{new}.jpeg")
                  
                      filepath.write_bytes(await image_gen.download_image(link))
                  print(names)
                  return names     
            try:
              files = asyncio.run(main())          
            finally:
              
              
              
              print("links below:")
               
               # Set the response headers
              self._set_headers()
              
              # Encode the JSON data and send it to the client
              try:
                  json_data = json.dumps(files)  # Convert dictionary to JSON string
                  self.wfile.write(json_data.encode())  # Send JSON data to client
              except Exception as e:
                  # If an exception occurs, set error status code and send error message
                  self._set_headers(500)
                  error_msg = {'error': str(e)}
                  self.wfile.write(json.dumps(error_msg).encode())  # Send error message to client        
        elif endpoint == "/wps":
            host = data.get('host')
            optional_args = data.get('optional_args', '').split()
          
            

            print("URL:", host)
            print("Optional args:", optional_args)
            
            wpscancommand = []
            if not host:
              wpscancommand = ['wpscan', '-h']
            elif host and not optional_args:
              wpscancommand = ['wpscan', '--url', host]
            else:
              wpscancommand = ['wpscan', '--url', host] + optional_args           
            
            print("Executing wpscam command:", wpscancommand)

            try:
                process = subprocess.Popen(wpscancommand, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
                    time.sleep(0.1)  # Add a small delay to simulate real-time output
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/elliot":
              input_text = data.get('input')
              chat_id = data.get('chatId')  # ID específico do chat para gerenciar sessão
          
              # Envia a pergunta e obtém a resposta da sessão correta
              response = ask_mr_robot(chat_id, input_text)
          
              # Configura o cabeçalho e envia a resposta como JSON
              self._set_headers()
              self.wfile.write(json.dumps({'response': response}).encode())        
        elif endpoint == "/audio":
            sourceAud = data.get('source')
            modelAud = data.get('voice')
            print('source  ', sourceAud)
            print('ti target     ', modelAud)
                     
            async def main():
             model_name = "tts_models/multilingual/multi-dataset/xtts_v2"  
             tts = TTS(model_name)
             random_id = random.randint(1000, 9999)
             file_path = f"audioDl/output_{random_id}.wav"
             clone = f"audio/{modelAud}.mp3"
             device = "cuda" if torch.cuda.is_available() else "cpu"
             tts = TTS(model_name="voice_conversion_models/multilingual/vctk/freevc24", progress_bar=False).to('cuda')
             tts.voice_conversion_to_file(source_wav=sourceAud, target_wav=clone, file_path=file_path)
             
             
             
             self.wfile.write(file_path.encode())
                
            try:
              asyncio.run(main())
            except Exception as e:
              self._set_headers(500)
              self.wfile.write(json.dumps({'error': str(e)}).encode())
            
        elif endpoint == "/whois":
            host = data.get('host')
            print("Host:", host)

            if not host:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Host (IP address or URL) is required'}).encode())
                return

            whois_command = ['whois', host]
            print("Executing whois command:", whois_command)

            try:
                process = subprocess.Popen(whois_command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/shodan":
            host = data.get('target')
            tipo = data.get('type')
            print("Host:", host)
            if tipo == 'scan':
              shodancommand = ['shodan', tipo, 'submit', host]
            else:
              shodancommand = ['shodan', tipo, host]
            print("Executing shodan command:", shodancommand)

            try:
                process = subprocess.Popen(shodancommand, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/exec":
            command = data.get('command')
            print("Command:", command)

            if not command:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Command is required'}).encode())
                return

            self._set_headers()
            try:
                process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
            except Exception as e:
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/nmap":
            ip = data.get('ip')
            nmap_args = data.get('nmap_args', [])

            print("IP:", ip)
            print("Nmap args:", nmap_args)

            if not ip:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'IP address is required'}).encode())
                return

            nmap_command = ['nmap', ip] + nmap_args
            print("Executing Nmap command:", nmap_command)

            try:
                output = subprocess.check_output(nmap_command, stderr=subprocess.STDOUT)
                self._set_headers()
                response_data = {'output': output.decode('utf-8')}
                self.wfile.write(json.dumps(response_data).encode())
            except subprocess.CalledProcessError as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': e.output.decode('utf-8')}).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Endpoint not found'}).encode())

if __name__ == "__main__":
    def run(server_class=HTTPServer, handler_class=RequestHandler, port=8330):
        server_address = ('', port)
        httpd = server_class(server_address, handler_class)
        print(f'Starting server on port {port}...')
        httpd.serve_forever()

    run()