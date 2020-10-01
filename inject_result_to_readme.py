from datetime import datetime
from render_row_from_item import render_table_header

START_TAG = '<!-- DRAW CALENDAR: START -->\n'
END_TAG = '\n<!-- DRAW CALENDAR: END -->'
README_PATH = './README.md'

def get_timestamp():
  return datetime.today().strftime('%Y.%m.%d')

def inject_result_to_readme(injected_content):
  with open(README_PATH) as readme:
    readme_content = readme.read()
    start_index = readme_content.find(START_TAG)
    end_index = readme_content.find(END_TAG)

    timestamp = get_timestamp()
    updated_content = (readme_content[0:start_index]
      + START_TAG + '\n'
      + f'> 👟 Updated Draws at {timestamp}‼️\n\n'
      + injected_content
      # + END_TAG + '\n'
      + readme_content[end_index:])

  with open(README_PATH, 'w') as readme:
    readme.write(updated_content)
