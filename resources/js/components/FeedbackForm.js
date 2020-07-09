import React, { Component } from 'react'
import Answer from './Answer';
import Container from '@material-ui/core/Container';
import SimpleSelect from './SimpleSelect';
import Button from '@material-ui/core/Button';
//import axios from 'axios';



class FeedbackForm extends Component {
    // state = {
    //     branches:[ ],
    //     stores : [ ],
    //     questions: [ ]
    // }
    // componentDidMount()  {
    //     axios.get('http://localhost:8000/api/feedback')
    //     .then(res=>{
    //       console.log(res);
    //       this.setState({
    //           branches: res
    //       })

    //     })
    //   }

render(){
    // const {branches} = this.state;

    return(

        <Container maxWidth="sm">
        <SimpleSelect  />
        <Answer/>
        
         <Button variant="contained" color="primary">Submit</Button>
        </Container>
      
    )
    }
}

export default FeedbackForm
