from time import sleep as delay
from get_drawable_items import get_drawable_items
from get_calendar_for_item import get_calendar_for_item
from render_row_from_item import render_row_from_item
from inject_result_to_readme import inject_result_to_readme

if __name__ == '__main__':
  drawable_items = get_drawable_items()
  delay(0.1)

  markdown = ''
  for item in drawable_items:
    calendar = get_calendar_for_item(item['href'])
    item['calendar'] = calendar
    delay(0.25)
    rendered_markdown = render_row_from_item(item)
    markdown += rendered_markdown + '\n'

  inject_result_to_readme(markdown)
