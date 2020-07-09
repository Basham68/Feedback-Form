import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';
import FeedbackForm from './FeedbackForm';


class Index extends Component {
  componentDidMount()  {
    axios.get('http://localhost:8000/api/feedback')
    .then(res=>{
      console.log(res)

     })

    }
  
  

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