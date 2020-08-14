import React from "react";
import Item from "./Item";

class ShopStore extends React.Component {
  state = {
    items: [
      /*{
        itemName: 'cola1',
        itemPrice: 1,
        itemUnit: '瓶',
        itemUrl: 'https://d2wvksc3i53c0p.cloudfront.net/media/catalog/product/cache/2/image/85e4522595efc69f496374d01ef2bf13/1/1/11777.jpg',
      },
      {
        itemName: 'cola2',
        itemPrice: 1,
        itemUnit: '瓶',
        itemUrl: 'https://d2wvksc3i53c0p.cloudfront.net/media/catalog/product/cache/2/image/85e4522595efc69f496374d01ef2bf13/1/1/11777.jpg',
      },
      {
        itemName: 'cola3',
        itemPrice: 1,
        itemUnit: '瓶',
        itemUrl: 'https://d2wvksc3i53c0p.cloudfront.net/media/catalog/product/cache/2/image/85e4522595efc69f496374d01ef2bf13/1/1/11777.jpg',
      },
      {
        itemName: 'cola4',
        itemPrice: 1,
        itemUnit: '瓶',
        itemUrl: 'https://d2wvksc3i53c0p.cloudfront.net/media/catalog/product/cache/2/image/85e4522595efc69f496374d01ef2bf13/1/1/11777.jpg',
      },*/
    ],
  }

  render() {
    return (
      <div className={'shop_store_div'}>
        <div className={'shop_store_display_div'}>
          {this.state.items.map(item => {
            return (
              <Item key={item.itemName} itemData={item}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopStore;