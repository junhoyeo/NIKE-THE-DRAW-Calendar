import requests
from bs4 import BeautifulSoup

ROOT_URL = 'https://www.nike.com'


def get_request(path='/kr'):
    response = requests.get(ROOT_URL + path, headers={
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) '
        'AppleWebKit/537.36 (KHTML, like Gecko) '
        'Chrome/85.0.4183.121 Safari/537.36',
    })
    soup = BeautifulSoup(response.text, 'html.parser')
    return soup
