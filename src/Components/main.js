import React from "react";  
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './main1.css'

const Main1= ({reverse,value2,change1,value3,value4,value5,value6,value7,value10,value11,changetodoge,changetoltc,changetobtc,changetodoge4,changetoltc4,changetobtc4,event1,value500,from1,to1,value71,value72,value73,value74,value75,value76,call,value1500,value1006,backtohome})=>{
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);
    const [lgShow2, setLgShow2] = useState('');
    const [lgShow5, setLgShow5] = useState('');
    const [isActive, setActive] = useState("false");
    const [isActive2, setActive2] = useState("false");
    const [isActive3, setActive3] = useState("false");

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${from1}&vs_currencies=${to1}`).then(res => res.json()).then(data20 => {
            if (from1=='litecoin' && to1=='btc') {
                setLgShow5(data20.litecoin.btc)
            }
            if(from1=='litecoin' && to1=='doge'){
				setLgShow5('797.23')
            }
            if (from1=='dogecoin' && to1=='btc') {
                setLgShow5(data20.dogecoin.btc)
            }
            if(from1=='dogecoin' && to1=='ltc'){
                setLgShow5('0.0013')
            }
            if (from1=='bitcoin' && to1=='doge') {
				setLgShow5('1,66,110.78')
            }
            if (from1=='bitcoin'&& to1=='ltc'){
                setLgShow5(data20.bitcoin.ltc)
            }


        })
    },[])

    const ToggleClass = () => {
      setActive(!isActive); 
     };
    const ToggleClass2 = () => {
      setActive(!isActive); 
     };

     const ToggleClass3 = () => {
        setActive2(!isActive2); 
       };
      const ToggleClass4 = () => {
        setActive2(!isActive2); 
       };

       const ToggleClass5 = () => {
        setActive3(!isActive3); 
       };
      const ToggleClass6 = () => {
        setActive3(!isActive3); 
       };

       const rec =()=>{
        value2='RECEIVE'
       }

  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return(
        <div>

                <Navbar bg="light" expand="lg" className='navbar1'>
                    <Container>
                        <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center mt-1">
                            <img src={require('./logo.png')} alt='bitbarter_logo' className='img25' onClick={backtohome} />
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
            <Container>
            <Row>
                <Col className='col-md-12 text-black'>
                <Button className='btn1 b text-black shadow-3'>Variable rate</Button>
                </Col>
            </Row>

            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
                <p className='b text-black para1'>1 <span className='title1'>{value3}</span> = <span className='value'></span>{lgShow5} <span className='title2'>{value4}</span></p>
                </Col>
            </Row>

            <Row className='mt-3 justify-content-center align-items-center'>
            <Col className='col-md-5 text-center tc col10' onClick={() => {
                setLgShow(true)
                setLgShow2('SEND')
            }}>
                <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3">
                    <img src={`https://cryptologos.cc/logos/${value10}coin-${value5}-logo.png`}/>
                    <h3 className='b text-black send_r mt-4 mb-1'>YOU SEND</h3>
                    <p className='b text-black'>{value3}</p>
                </article>
                </Col>

                <Col className='col-sm-2 tc text-center col13'>

                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-right text-black svg1" viewBox="0 0 16 16" onClick={reverse}>
                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                </Col>

                <Col className='col-md-5 text-center tc col10' onClick={() => {
                    setLgShow3(true)
                    setLgShow2('RECEIVE')
                }}>
                <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3">
                    <img src={`https://cryptologos.cc/logos/${value11}coin-${value6}-logo.png`}/>
                    <h3 className='b text-black send_r mt-4 mb-1'>YOU RECEIVE</h3>
                    <p className='b text-black'>{value4}</p>
                </article>
                </Col>
            </Row>

            <Row className='mt-3'>
            <Col className='col-md-12 text-black'>
                <p className='b text-black para10'>Receiving address</p>
                </Col>
            </Row>


            <Row className='mt-0'>
            <Col className='col-md-12 text-black'>
            <input id="name" className="input_address b  text-center tc input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder={`Your ${value4} Address`} onChange={event1} onFocus={value1006} />
            <p className='b text-red text-center tc para3000' style={{'display':`${value500}`}} >Please Enter a Valid {value4} address</p>
            <p className='b text-red text-center tc para3000' style={{'display':`${value1500}`}} >Please Enter a address</p>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='col-md-12 text-black'>
                <Button className='btn2 b text-black shadow-3' onClick={call}>EXCHANGE</Button>
                </Col>
            </Row>

            <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
            <Row>
                <Col className='col-md-12 tc text-center'>
                    <h3 className='b text-black'>YOU {lgShow2} </h3>
                </Col>
            </Row>

            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para300 mt-4">Choose your</p>
                </Col>
            </Row>

            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para200 mt-4">Crypto to {lgShow2}</p>
                </Col>
            </Row>

            <Row className='justify-content-center align-items-center'>

                <Col className='col-md-3 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col21' onMouseEnter={ToggleClass} onMouseLeave={ToggleClass2} onClick={changetobtc} style={{'display':`${value71}`}}>
                    <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' width={'90px'}/>
                    <h4 className={isActive ? "notwhite1" : "white1"}>BTC</h4>
                    <p className={isActive ? "notwhite2" : "white2"}>Bitcoin</p>
                </Col>

                <Col className='col-md-3 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col22' onMouseEnter={ToggleClass3} onMouseLeave={ToggleClass4} onClick={changetoltc} style={{'display':`${value72}`}}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png' width={'90px'}/>
                    <h4 className={isActive2 ? "notwhite3" : "white3"}>LTC</h4>
                    <p className={isActive2 ? "notwhite4" : "white4"}>Litecoin</p>
                </Col>

                <Col className='col-md-3 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col23' onMouseEnter={ToggleClass5} onMouseLeave={ToggleClass6} onClick={changetodoge} style={{'display':`${value73}`}}>
                    <img src='https://cryptologos.cc/logos/dogecoin-doge-logo.png' width={'90px'}/>
                    <h4 className={isActive3 ? "notwhite5" : "white5"}>DOGE</h4>
                    <p className={isActive3 ? "notwhite6" : "white6"}>Dogecoin</p>
                </Col>

            </Row>

        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={lgShow3}
        onHide={() => setLgShow3(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
            <Row>
                <Col className='col-md-12 tc text-center'>
                    <h3 className='b text-black'>YOU {lgShow2} </h3>
                </Col>
            </Row>

            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para300 mt-4">Choose your</p>
                </Col>
            </Row>

            <Row>
                <Col className='col-md-12 tc text-center'>
                    <p className="b text-black tc text-center para200 mt-4">Crypto to {lgShow2}</p>
                </Col>
            </Row>

            <Row className='justify-content-center align-items-center'>

                <Col className='col-md-3 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col21' onMouseEnter={ToggleClass} onMouseLeave={ToggleClass2} onClick={changetobtc4} style={{'display':`${value74}`}}>
                    <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' width={'90px'}/>
                    <h4 className={isActive ? "notwhite1" : "white1"}>BTC</h4>
                    <p className={isActive ? "notwhite2" : "white2"}>Bitcoin</p>
                </Col>

                <Col className='col-md-3 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col22' onMouseEnter={ToggleClass3} onMouseLeave={ToggleClass4} onClick={changetoltc4} style={{'display':`${value75}`}}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/2048px-LTC-400.png' width={'90px'}/>
                    <h4 className={isActive2 ? "notwhite3" : "white3"}>LTC</h4>
                    <p className={isActive2 ? "notwhite4" : "white4"}>Litecoin</p>
                </Col>

                <Col className='col-md-3 tc text-center shadow-5 pt-5 pb-5 me-4 ms-4 mt-4 mb-4 col20 col23' onMouseEnter={ToggleClass5} onMouseLeave={ToggleClass6} onClick={changetodoge4} style={{'display':`${value76}`}}>
                    <img src='https://cryptologos.cc/logos/dogecoin-doge-logo.png' width={'90px'}/>
                    <h4 className={isActive3 ? "notwhite5" : "white5"}>DOGE</h4>
                    <p className={isActive3 ? "notwhite6" : "white6"}>Dogecoin</p>
                </Col>

            </Row>

        </Modal.Body>
      </Modal>
    </Container>
            </article>
            </div>
            </article>
        </div>
    )
}

export default Main1
