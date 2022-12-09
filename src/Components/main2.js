import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@finastra/circular-progress';
import './main2.css'

const Main2 =({value10,value5,value11,value6,value3,value1005,value1009,final56,backtohome2,final90})=>{
	const [lgShow51, setLgShow51] = useState('');

	
	useEffect(() => {
		let value178 = Math.random(0,100)
		fetch(`https://api.hashify.net/hash/md4/hex?value=${value178}`).then(res3 => res3.json()).then( res5 => {
			let value1056 = res5.Digest
			let final_value1056 = value1056.slice(0, 10)
			setLgShow51(final_value1056)
		})
	},[])

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
        
        <Row className='d-flex justify-content-center align-items-center mt-0'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center flex-column'>
        <h3 className='b text-black text-center'>Order ID</h3>
        <h6 className="b text-black text-center">{lgShow51}</h6>
        </Col>xz
        
        </Row>

            <Row className='d-flex justify-content-center align-items-center'>

                <Col className='col-md-2 m-0'>
                    <img src={`https://cryptologos.cc/logos/${value10}-${value5}-logo.png`} width={'45px'} />
                </Col>

                <Col className='col-md-2  m-0'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-right text-black" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>

                </Col>

                <Col className='col-md-2 m-0'>
                    <img src={`https://cryptologos.cc/logos/${value11}-${value6}-logo.png`}  width={'45px'} />
                </Col>

            </Row>

            <Row className='d-flex justify-content-center align-items-center mt-4'>

                <Col className='col-md-12'>
                    <h3 className='b text-black text-center h3_send'>Please send {value3} </h3>
                    <p className="b text-black text-center para2005">to the following address.....</p>
                </Col>xz

            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12 d-flex justify-content-center align-items-center flex-row'>
                <input type='text' className='b text-black mt-0 mb-4 w-100 tc p-3' value={value1005} disabled />

                <Button variant="" className="btn mb-4" onClick={() => {navigator.clipboard.writeText(value1005)}}>
                <img src={require('./clipboard_copy_icon_152888.png')} width={'35px'}/>
                    </Button>

                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12'>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${value1005}`} />
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='col-md-12'>
                <p className='b text-black text-center mt-2 mb-2'>Awaiting Payment....</p>
                <fds-circular-progress indeterminate="true"></fds-circular-progress>
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
