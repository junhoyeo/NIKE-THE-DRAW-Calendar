from time import sleep as delay
from pprint import pprint
from get_drawable_items import get_drawable_items
from get_calendar_for_item import get_calendar_for_item

if __name__ == '__main__':
  drawable_items = get_drawable_items()
  delay(0.1)

  for item in drawable_items:
    calendar = get_calendar_for_item(item['href'])
    item['calendar'] = calendar
    delay(0.25)

  pprint(drawable_items)
