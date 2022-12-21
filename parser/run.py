import json
from pprint import pprint
from time import sleep as delay
from get_drawable_items import get_drawable_items
from get_calendar_for_item import get_calendar_for_item
from render_row_from_item import render_row_from_item, render_table_header
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

    updated = False
    if len(drawable_items):
        updated = True
        markdown = render_table_header() + markdown
    else:
        markdown = '**현재 진행중인 THE DRAW가 없습니다!**\n'

    if updated:
        inject_result_to_readme(markdown)
        with open('../app/src/mockups/sneakers.json', 'w') as product_file:
            json.dump(drawable_items, product_file, ensure_ascii=False, indent=2)
            product_file.write('\n')
    pprint(drawable_items)
    print('👟 Updated Draws!')
