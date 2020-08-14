import React from "react";
import "../style/add_item.less";

class AddItem extends React.Component {
  state = {
    itemName: '',
    itemPrice: '',
    itemUnit: '',
    itemUrl: '',
  }

  render() {
    return (
      <div className={'add_item_div'}>
        <h1>添加商品</h1>

        <form className={'add_item_form'} onSubmit={this.onSubmit}>
          <div className={'add_item_input_div'}>
            <label>*名称:</label>
            <input type={'text'} placeholder={'名称'}/>
          </div>

          <div className={'add_item_input_div'}>
            <label>*价格</label>
            <input type={'text'} placeholder={'价格'}/>
          </div>

          <div className={'add_item_input_div'}>
            <label>*</label>
            <label>单位</label>
            <input type={'text'} placeholder={'单位'}/>
          </div>

          <div className={'add_item_input_div'}>
            <label>*</label>
            <label>图片</label>
            <input type={'text'} placeholder={'图片'}/>
          </div>

          <input type={'submit'} value={'提交'}/>
        </form>
      </div>
    );
  }

  onSubmit = () => {
    const POST_URL = '/item';
    new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', POST_URL, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      }
      xhr.send();
    });
  }
}

export default AddItem;