import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';
import FeedbackForm from './FeedbackForm';


class Index extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
        <Header />
        <FeedbackForm />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))