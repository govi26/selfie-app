// Importing react and external libraries
import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/es/button/style/css';

// Importing styles
import './index.scss';


export default class CameraApp extends Component {
  render() {
    return <div className="app-container">
      <Button
        shape="circle"
        type="primary"
        onClick={this._handleOnclick}
      >Take a selfie!
      </Button>
    </div>;
  }

  /**
   * Handle button click
   */
  _handleOnclick = () => {
    this.props.history.push('/camera');
  }
}