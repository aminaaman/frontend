import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import kbtu from '../images/kbtu.jpg'


class Home extends Component {
    render() {
        
        return (
            <Container>
            <img 
                className="d-block w-75 ml-auto mr-auto mt-5"
                src={ kbtu }
                alt="KBTU"
            />
            <br></br>
            <figcaption className="figure-caption text-center" style={{fontSize: '30px'}}>Plagiarism and submission checking system of KBTU</figcaption>
            </Container>
          
        )
    }
}
export default Home;