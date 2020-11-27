import React, { Component } from 'react';
import axios from 'axios';
import axiosJsonpAdapter from 'axios-jsonp';

const ZIPCLOUD_ENDPOINT = 'https://zipcloud.ibsnet.co.jp/api/search';

class Zip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      address3: '',
      message: ''
    };
  }
  handleOnChangeZipCode(e) {
    axios
    .get(ZIPCLOUD_ENDPOINT, {
      adapter: axiosJsonpAdapter,
      params: {
        zipcode: e.target.value
      }
    })
    .then((results) => {
      // console.log(results);
      if(results.data.status !== 200) throw results;
    // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
      console.log(results);
      const data = results.data;
      const result = data.results[0];
      const address1 = result.address1;
      const address2 = result.address2;
      const address3 = result.address3;
      this.setState({
        address1: address1,
        address2: address2,
        address3: address3,
        message: ''
      });
    })
    .catch((error) => {
      const message  = JSON.stringify(error, null, 2);
      this.setState({
        address1: '',
        address2: '',
        address3: '',
        message: message
      });
    });
  }

  render() {
    return (
      <div className="app">
        <div class="form_text">
          <input
            value={this.state.zipcode}
            onChange={ e => this.handleOnChangeZipCode(e)} 
            type="text"
            placeholder="郵便番号を入力"
          />
        </div>
        <p class="zipcode_result">{this.state.address1}{this.state.address2}{this.state.address3}</p>
        <p class="zipcode_message">{this.state.message}</p>
      </div>
    );
  }
}

export default Zip;