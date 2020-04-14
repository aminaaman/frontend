import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import about from '../images/about.png'


class About extends Component {
    render() {
        return (
            <Container>
                <div>
                    <br></br>
                    <br></br>
                    <h4>Why do we use it?</h4>
                    <br></br>
                    <p>
                    It is a long established fact that a reader will be distracted by <br></br>
                    the readable content of a page when looking at its layout. The point <br></br>
                    of using Lorem Ipsum is that it has a more-or-less normal distribution <br></br>
                    of letters, as opposed to using 'Content here, content here', making <br></br>
                    it look like readable English. Many desktop publishing packages and <br></br>
                    web page editors now use Lorem Ipsum as their default model text, <br></br>
                    and a search for 'lorem ipsum' will uncover many web sites still <br></br>
                    in their infancy. Various versions have evolved over the years, <br></br>
                    sometimes by accident, sometimes on purpose (injected humour <br></br>
                    and the like).
                    </p>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '803.25px',
                    height: '450px',
                    left: '414px',
                    top: '80px'
                }}>
                    <img
                      className="d-block w-100"
                      src={ about }
                      alt="About"
                    />
                </div>
            </Container>
        )
    }
}
export default About;