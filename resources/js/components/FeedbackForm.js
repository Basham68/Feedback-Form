import React, { Component } from 'react'
import Answer from './Answer';
import Container from '@material-ui/core/Container';
import SimpleSelect from './SimpleSelect';
import Button from '@material-ui/core/Button';
import axios from 'axios';



class FeedbackForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            branches: [],
            stores: [],
            questions:[]
        }
     }

    componentDidMount()  {
        axios.get('http://localhost:8000/api/feedback')
        .then(res=>{
            this.setState({
                branches: res.data.branches,
                stores: res.data.stores,
                questions: res.data.questions
            })
        })
    }

    


render(){
    return(
        <Container maxWidth="sm">
            <form>
                <p>{this.state.questions}</p>
            </form>
        </Container>
    )
    }
}

export default FeedbackForm
