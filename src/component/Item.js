import React from "react";
import '../style/item.less';

class Item extends React.Component {
  render() {
    let itemData = this.props.itemData;
    return (
      <div className={'item_div'}>
        <img className={'item_img'} src={itemData.itemUrl} alt={'item image'}/>
        <label className={'item_name_label'}>{itemData.itemName}</label>
        <label className={'item_price_label'}>单价: {itemData.itemPrice} 元 / {itemData.itemUnit}</label>
        <button className={'add_item_to_order_button'}>+</button>
      </div>
    );
  }
}

export default Item;