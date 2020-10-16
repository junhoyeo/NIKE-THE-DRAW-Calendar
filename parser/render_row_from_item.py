from api import ROOT_URL


def render_table_header():
    return (
        '| 사진 | 제품명 | 응모 일정 |\n'
        '| --- | ---- | ------- |\n'
    )


def render_column_from_calendar(item_calendar):
    return '<br />'.join([
        line if is_not_first_line else f'<strong>{line}</strong>'
        for is_not_first_line, line in enumerate(item_calendar)
    ])


def render_row_from_item(item):
    rendered_calendar = render_column_from_calendar(item['calendar'])
    url_to_item = ROOT_URL + item['href']

    return (
        f"| <img src=\"{item['image']}\" width=\"256\" /> "
        f"| <a href=\"{url_to_item}\"><strong>{item['title']}</strong><br /></a>"
        f" \"{item['theme']}\" "
        f'| {rendered_calendar} |'
    )
