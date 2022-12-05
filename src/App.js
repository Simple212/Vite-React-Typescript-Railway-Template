import React from 'react';
import './App.css';
import Main1 from './Components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect} from 'react'
import Main2 from './Components/main2';
import Main3 from './Components/main3';
import 'clipboard'
 
class App extends React.Component{
  constructor(){
    super()
    this.state={
      address_23:'',
      value2:'',
      value3:"LTC",
      value4:"BTC",
      value5:'ltc',
      value6:"btc",
      value10:'lite',
      value11:'bit',
      from:'ltc',
      to:'btc',
      show:'none',
      show1:'none',
      liverate:'',
      address:'',
      rec_address:"",
      final_from:'',
      final_to:'',
      moveahead:'no',
      status:'',
      final_value19:'',
      txn_id:'',
      moveahead2:''
    }
  }

  changevalue = ()=>{
    this.setState({
      value2:'receive',

    })
  }

  reverse1= ()=>{
    this.setState({
      value3:this.state.value4,
      value4:this.state.value3,
      value5:this.state.value6,
      value6:this.state.value5,
      value10:this.state.value11,
      value11:this.state.value10,
      from:this.state.to,
      to:this.state.from
    })
  }

  changetodoge1 = ()=>{
    this.setState({
      value3:'DOGE',
      value5:'doge',
      value10:'doge',
      from:'doge'
    })
  }

  changetoltc13 = ()=>{
    this.setState({
      from:'ltc',
      to : 'doge',
      value3:'LTC',
      value5:'ltc',
      value10:'lite'
    })
  }

  changetodoge2 = ()=>{
    this.setState({
      value4:'DOGE',
      value6:'doge',
      value11:'doge',
      from:'ltc',
      to:'doge'
    })
  }
  changetodoge23 = ()=>{
    this.setState({
      value4:'DOGE',
      value6:'doge',
      value11:'doge',
      from:'btc',
      to:'doge'
    })}

dogevalidation = (event2)=>{
  const value100=event2.target.value
  this.setState({
    rec_address:value100
  })
  if (value100[0]!='D') {
    this.setState({
      show:'block',
      moveahead:'no'
    })
  }
  if (value100[0]=='D') {
    this.setState({
      show:'none',
      moveahead:'yes'
    })
  }
  if (value100[0]==null) {
    this.setState({
      show:'none',
      moveahead:'no'
    })
  }
}

btcvalidation = (event2)=>{
  const value100=event2.target.value
  this.setState({
    rec_address:value100
  })
  if (value100[0]!='3' && value100[0]!='1' && (value100[0]!='b' && value100[1]!='c') ) {
    this.setState({
      show:'block',
      moveahead:'no'
    })
  }
  if (value100[0]=='3' || value100[0]=='1' || (value100[0]=='b' && value100[1]=='c') ) {
    this.setState({
      show:'none',
      moveahead:'yes'

    })
  }
  if (value100[0]==null) {
    this.setState({
      show:'none',
      moveahead:'no'
    })
  }
}

ltcvalidation = (event2)=>{
  const value100=event2.target.value
    this.setState({
    rec_address:value100
  })
  if (value100[0]!='L' && value100[0]!='M') {
    this.setState({
      show:'block',
      moveahead:'no'
    })
  }
  if (value100[0]=='L' || value100[0]=='M' || value100[0]=='l' || value100[0]=='l'  ) {
    this.setState({
      show:'none',
      moveahead:'yes'
    })
  }
  if (value100[0]==null) {
    this.setState({
      show:'none',
      moveahead:'no'
    })
  }
}

  changetoltc1 = ()=>{
    this.setState({
      value3:'LTC',
      value5:'ltc',
      value10:'lite',
      from:'ltc',
      to:'btc'
    })
  }

  changetoltc2 = ()=>{
    this.setState({
      from:'doge',
      to:'ltc',
      value4:'LTC',
      value6:'ltc',
      value11:'lite',
    })
  }


   changetoltc23 = ()=>{
    this.setState({
      from:'btc',
      to:'ltc',
      value4:'LTC',
      value6:'ltc',
      value11:'lite',
    })
  }


  changetobtc1 = ()=>{
    this.setState({
      from:'btc',
      to:'ltc'
    })
  }

  changetobtc11 = ()=>{
    this.setState({
      from:'btc',
      to:'ltc',
      value3:'BTC',
      value5:'btc',
      value10:'bit',
    })
  }


  changetobtc120 = ()=>{
    this.setState({
      from:'btc',
      to:'doge',
      value3:'BTC',
      value5:'btc',
      value10:'bit'
    })
  }

  changetobtc2 = ()=>{
    this.setState({
      from : "doge",
      to : "btc",
      value4:'BTC',
      value6:'btc',
      value11:'bit',
    })
    }

    changetobtc23 = ()=>{
      this.setState({
        from : "ltc",
        to : "btc",
        value4:'BTC',
        value6:'btc',
        value11:'bit',
      })
      }

      calltofinal = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:'',
            moveahead2:'no'
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          
          this.setState({
            address:data50.first2,
            address23:data50.first2
          })
          
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
         var value202 = this.state.from
         var value203 = this.state.to
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'ltc',
              to30:'btc'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
        }
      },20000)

    })
      }

      calltofinal1 = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:''
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          this.setState({
            address:data50.first2
          })
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'doge',
              to30:'ltc'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
            
        }
      },20000)
        })
      }

      calltofinal2 = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:''
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          this.setState({
            address:data50.first2
          })
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'doge',
              to30:'btc'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
            
        }
      },20000)
        })
      }

      calltofinal3 = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:''
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          this.setState({
            address:data50.first2
          })
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'ltc',
              to30:'doge'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
            
        }
      },20000)
        })
      }

      calltofinal4 = ()=>{

        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:''
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          this.setState({
            address:data50.first2
          })
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'btc',
              to30:'ltc'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
            
        }
      },20000)
        })
      }

      calltofinal5 = ()=>{
        
        const second2 = ()=>{
          this.setState({
            status:'final',
            final_from:'',
            final_to:'',
            from:'',
            to:''
          })
        }

        var value156
        if (this.state.moveahead=='yes') {
          this.setState({
            final_from:"ltc",
            final_to:"btc",
            from:'',
            to:''
          })
          value156='https://rich-tan-lovebird-coat.cyclic.app/address'
        }
        if (this.state.moveahead=='no'){
          this.setState({
            show1:'block'
          })
          value156=''
        }

        fetch(`${value156}`,{
          'method':'post',
          'headers':{'Content-type':'application/json'},
          'body': JSON.stringify({
            input:this.state.value3
          })
        }).then(res => res.json()).then(data50 => {
          this.setState({
            address:data50.first2
          })
         var  value200 = this.state.rec_address
         var value201 = this.state.value5
        let Interval_id = setInterval(
        async function first(){
        const value =await fetch(`https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance`)
        console.log(`Working https://api.blockcypher.com/v1/${value201}/main/addrs/${data50.first2}/balance `)
        const final_value= await value.json()
        if (final_value.unconfirmed_balance!=0){
          fetch("https://rich-tan-lovebird-coat.cyclic.app/withdraw",{
            'method':'post',
            'headers':{'Content-type':'application/json'},
            'body': JSON.stringify({
              amount:final_value.unconfirmed_balance,
              address:value200,
              from30:'btc',
              to30:'doge'
            })
          }).then(res3 => res3.json()).then(res23 => {
            console.log(res23.a)
          })
          setTimeout(() => {
            second2()
          }, 13000)
            clearInterval(Interval_id)
            
        }
      },20000)
        })
      }

      hide2 = ()=>{
        this.setState({
            show1:'none'
        })
      }

      hide2 = ()=>{
        this.setState({
            show1:'none'
        })
      }

      home = ()=>{
        this.setState({
          value2:'',
          value3:"LTC",
          value4:"BTC",
          value5:'ltc',
          value6:"btc",
          value10:'lite',
          value11:'bit',
          from:'ltc',
          to:'btc',
          show:'none',
          show1:'none',
          liverate:'',
          address:'',
          rec_address:"",
          final_from:'',
          final_to:'',
          moveahead:'no',
          status:'',
          final_value19:'',
          txn_id:''
      })
      }

  render(){
    return(
      <div>
        {this.state.from=='ltc' && this.state.to=='btc'
        ?<div>
                    <Main1 change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show} value1500={this.state.show1}  from1={'litecoin'} to1={'btc'} value74={'none'} value75={'none'} value76={'block'} value71={'none'} value72={'none'} value73={'block'} call={this.calltofinal} value1006={this.hide2}  backtohome={this.home}/>

                          {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
        </div>
        :<div>
          {this.state.from=='ltc' && this.state.to=='doge'
          ?<div>
                    <Main1 change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc120}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc23} event1={this.dogevalidation} value500={this.state.show} value1500={this.state.show1}  from1={'litecoin'} to1={'doge'} value74={'block'} value75={'none'} value76={'none'} value71={'block'} value72={'none'} value73={'none'} value1006={this.hide2}  call={this.calltofinal3} backtohome={this.home}/>
                                  {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.from=='btc' && this.state.to=='ltc'
          ?<div>
                    <Main1 change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge23} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.ltcvalidation} value500={this.state.show}  from1={'bitcoin'} to1={'ltc'} value74={'none'} value75={'none'} value76={'block'} value71={'none'} value72={'none'} value73={'block'} call={this.calltofinal4}  value1500={this.state.show1} value1006={this.hide2} backtohome={this.home}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='btc' && this.state.to=='doge'
          ?<div>
                    <Main1 change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc13} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge23} changetoltc4={this.changetoltc23} changetobtc4={this.changetobtc2} event1={this.dogevalidation} value500={this.state.show} from1={'bitcoin'} to1={'doge'} value74={'none'} value75={'block'} value76={'none'} value73={'none'} value71={'none'} value72={'block'} value1006={this.hide2} value1500={this.state.show1} call={this.calltofinal5} backtohome={this.home}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='doge' &&this.state.to=='btc'
          ?<div>
                    <Main1 change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc1}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.btcvalidation} value500={this.state.show}  from1={'dogecoin'} to1={'btc'} value74={'none'} value75={'block'} value76={'none'}  value71={'none'} vlaue72={'block'} value73={'none'} value1006={this.hide2}value1500={this.state.show1}  call={this.calltofinal2} backtohome={this.home}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
        <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{ this.state.from=='doge' &&this.state.to=='ltc'
          ?<div>
                    <Main1 change1={this.changevalue} value2 ={this.state.value2} value3={this.state.value3} value4={this.state.value4} value5={this.state.value5} value6={this.state.value6} reverse={this.reverse1} value10={this.state.value10} value11={this.state.value11} changetodoge={this.changetodoge1} changetoltc={this.changetoltc1} changetobtc={this.changetobtc11}  changetodoge4={this.changetodoge2} changetoltc4={this.changetoltc2} changetobtc4={this.changetobtc2} event1={this.ltcvalidation} value500={this.state.show} from1={'dogecoin'} to1={'ltc'} value74={'block'} value75={'none'} value76={'none'} value72={'none'}  value73={'none'}  value71={'block'} value1006={this.hide2}  value1500={this.state.show1} call={this.calltofinal1} backtohome={this.home}/>
                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.final_from=='ltc' &&this.state.final_to=='btc'
          ?<div>
                                <Main2 value10={this.state.value10} value5={this.state.value5} value11={this.state.value11}  value6={this.state.value6} value3={this.state.value3} value1005={this.state.address} final56={this.state.rec_address} backtohome2={this.home}  final90={this.calltofinal}/>
                                                                              {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}
          </div>
          :<div>{this.state.status=='final'
          ?<div>
                                  
                                  <Main3 value10={this.state.value10} value5={this.state.value5} value11={this.state.value11}  value6={this.state.value6} value3={this.state.value3} value1005={this.state.address} final56={this.state.rec_address} call2home={this.home} value19={this.state.final_value19} />
                                                                                {/* Footer begins */}
      <Row className='row1 d-flex justify-content-center align-items-center'>
        <Col className='col-md-12 d-flex justify-content-center align-items-center'>
            <p className='b text-white text-center tc mt-4'>bitBarter © 2022</p>
        </Col>
      </Row>
      {/* Footer ends */}

          </div>
          :<div>Server Error (Request NOT FOUND)</div>
          }</div>
          }</div>
            }</div>
          }</div>
            }

          </div>
          }</div>
          }
        </div>
      }
      </div>
    )
  }
}

export default App;
