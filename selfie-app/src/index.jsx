// Importing react and external libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing containers
import CameraApp from 'containers';

// Importing Components
import Camera from 'containers/Camera.jsx';
import Upload from 'containers/Upload.jsx';

// Importing styles
import './index.scss';

const App = () => {
  return <Router>
    <Fragment>
      <Switch>
        <Route path="/" exact component={CameraApp}></Route>
        <Route path="/camera" component={Camera}></Route>
        <Route path="/upload" component={Upload}></Route>
      </Switch>
    </Fragment>
  </Router>
}

ReactDOM.render(<App />, document.getElementById('root'));