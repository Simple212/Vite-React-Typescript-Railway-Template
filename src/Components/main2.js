import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './main2.css'

const Main2 =({value10,value5,value11,value6,value3,value1005,value1009,final56,backtohome2,final90})=>{

    return(
        <div>

                            <Navbar bg="light" expand="lg" className='navbar1'>
                            <Container>
                            <Navbar.Brand href="#home">
                            <img src={require('./logo.png')} alt='bitbarter_logo' className='img25'  onClick={backtohome2}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>Wallets <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Icon_green_lamp_on.svg/512px-Icon_green_lamp_on.svg.png'  className='ms-2' width={'15px'}/>
                        <span className="b span45 d-flex justify-content-center align-items-center">Working</span>
                        </Nav.Link>
                            <Nav.Link href="#home" className='d-flex justify-content-center align-items-center navlink'>System Stauts <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Icon_green_lamp_on.svg/512px-Icon_green_lamp_on.svg.png' className='ms-2' width={'15px'}/>
                            <span className="b span45 d-flex justify-content-center align-items-center">Working</span></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        <article className="vh-100 dt w-100 bg-dark-pink">
        <div className="dtc v-mid tc white ph3 ph4-l">
        <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3">
        <Container fluid>

            <Row className='d-flex justify-content-center align-items-center'>

                <Col className='col-md-2 m-0'>
                    <img src={`https://cryptologos.cc/logos/${value10}coin-${value5}-logo.png`} width={'45px'} />
                </Col>

                <Col className='col-md-2  m-0'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-right text-black" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>

                </Col>

                <Col className='col-md-2 m-0'>
                    <img src={`https://cryptologos.cc/logos/${value11}coin-${value6}-logo.png`}  width={'45px'} />
                </Col>

            </Row>

            <Row className='d-flex justify-content-center align-items-center mt-4'>

                <Col className='col-md-12'>
                    <h3 className='b text-black text-center h3_send'>Please send {value3} </h3>
                    <p className="b text-black text-center para2005">to the following address.....</p>
                </Col>xz

            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12'>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${value1005}`} />
                <input type='text' className='b text-black mt-4 mb-4 w-90 tc p-3' value={value1005} disabled />
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center' onLoad={final90}>
                <Col className='col-md-12'>
                <h3 className='b text-black text-center h3_rec'>Receiving Address ... </h3>
                <p className="b  text-black text-center para2006">{final56}</p>
                </Col>
            </Row>

        </Container>
        </article>
        </div>
        </article>
    </div>
    )
}  

export default Main2
