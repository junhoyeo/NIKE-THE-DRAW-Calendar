import api

def get_calendar_for_item(item_href):
  soup = api.get_request(item_href)

  description_wrapper = soup.find('span', class_='uk-text-bold')
  calendar = '\n'.join([
    paragraph.text
    for paragraph in description_wrapper.find_all('p')
  ])

  return calendar
