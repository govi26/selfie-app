// Importing react and external libraries
import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { Button } from 'antd';
import 'antd/es/button/style/css';

// Importing styles
import './Camera.scss';

export default class Camera extends Component {
  render() {
    return <div className="camera-container">
      <h2>Camera</h2>
      <Webcam
        audio={false}
        ref={this._setRef}
        screenshotFormat="image/jpeg"
      />
      <Button
        icon="camera"
        shape="circle"
        type="primary"
        onClick={this._capture}
      />
    </div>
  }

  /**
   * Capture image
   */
  _capture = () => {
    const imageData = this.webcam.getScreenshot();
    this.props.history.push({
      pathname: '/upload',
      state: { imageData }
    })
  };

  /**
   * set a reference to the camera section
   */
  _setRef = webcam => {
    this.webcam = webcam;
  };
}
