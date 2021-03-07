import api


def get_drawable_items():
    soup = api.get_request(
        '/kr/launch?type=upcoming&activeDate=date-filter:AFTER')

    launch_items = soup.find_all('div', class_='product-card')
    # print(launch_items)
    drawable_items = []

    for launch_item in launch_items:
        soldout_button = launch_item.find('a', class_='ncss-btn-primary-dark')
        print(soldout_button)
        if (soldout_button and soldout_button.text.strip() == 'THE DRAW 진행예정'):
            launch_item_information = launch_item.find(
                'a', class_='comingsoon')
            launch_item_image = launch_item.find('img', class_='img-component')

            drawable_items.append({
                'title': launch_item_information.attrs['title'],
                'theme': launch_item_image.attrs['alt'],
                'image': launch_item_image.attrs['data-src'],
                'href': launch_item_information.attrs['href'],
            })

    return drawable_items
