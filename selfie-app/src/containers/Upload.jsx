// Importing react and external libraries
import React, { Component } from 'react';
import {
  Button,
  message,
  Spin
} from 'antd';
import 'antd/es/button/style/css';
import 'antd/es/message/style/css';
import 'antd/es/spin/style/css';

// Importing styles
import './Upload.scss';

const URL = 'http://localhost:5000/api/upload';
export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDimension: {},
      showRetry: false,
      spinLoading: true
    };
  }

  componentDidMount() {
    this._uploadFile(this.props.history.location.state.imageData);
  }

  render() {
    const {
      imageDimension,
      showRetry,
      spinLoading
    } = this.state;

    const dimension = Object.keys(imageDimension).length > 0
      ? imageDimension
      : null;

    return <div className="upload-container">
      {<img alt="selfie" src={this.props.history.location.state.imageData} />}
      {dimension && <h3>{`Pixels = ${dimension.width}X${dimension.height}`}</h3>}
      <Spin spinning={spinLoading} tip="Uploading..." />
      {showRetry && <Button onClick={this._onRetryandler}>Retry</Button>}
    </div>;
  }

  /**
   * Handle retry button click
   * go back to camera page
   */
  _onRetryandler = () => {
    this.props.history.goBack();
  }

  /**
   * Upload file
   * have a delay of 2 seconds to show te upload animation
   */
  _uploadFile = async (imgData) => {
    // delay of 2 seconds to show te upload animation
    setTimeout(async () => {
      let state = { showRetry: true, spinLoading: false };
      const res = await fetch(
        URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ imgData })
        }
      );

      // check if no error in the response
      if ([200, 201].indexOf(res.status) !== -1) {
        state = {
          imageDimension: await res.json(),
          ...state
        };
      } else {
        message.error('File upload failed.');
      }
      this.setState({ ...state });
    }, 2000);
  }
}