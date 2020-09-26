import requests
from pprint import pprint
from bs4 import BeautifulSoup

ROOT_URL = 'https://www.nike.com/kr'

response = requests.get(f'{ROOT_URL}/launch', headers={
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) '
    'AppleWebKit/537.36 (KHTML, like Gecko) '
    'Chrome/85.0.4183.121 Safari/537.36',
})
soup = BeautifulSoup(response.text, 'html.parser')

launch_items = soup.find_all('a', class_='comingsoon')
drawable_items = []

for launch_item in launch_items:
  soldout_button = launch_item.find('span', class_='btn-soldout')
  if (soldout_button and soldout_button.text == 'THE DRAW 진행예정'):
    launch_item_image = launch_item.find('img', class_='img-component')

    drawable_items.append({
      'title': launch_item.attrs['title'],
      'theme': launch_item_image.attrs['alt'],
      'image': launch_item_image.attrs['data-src'],
      'href': ROOT_URL + launch_item.attrs['href'],
    })

pprint(drawable_items)
