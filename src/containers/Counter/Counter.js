import React from 'react'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 }
        })
        break
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 }
        })
        break
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value }
        })
        break
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value }
        })
        break
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="افزایش"
          clicked={this.props.onIncrement}
        />
        <CounterControl
          label="کاهش"
          clicked={this.props.onDecrement}
        />
        <CounterControl
          label="افزودن ۲"
          clicked={this.props.onAdd}
        />
        <CounterControl
          label="کاهش ۲"
          clicked={this.props.onDec}
        />
        <div>
        <button onClick = {this.props.onResult}>Store </button>
        {this.props.storeResult.map((item)=>{
          return<p key={item}>{item}</p>
        })}
        </div>
      </div>
    )
  }
}
const mapStateToprops = (state)=>{
  return {
    ctr :  state.counter , 
    storeResult : state.result
  } 
}
const mapDispatchToprops = (dispatch)=>{
  return {
    onIncrement :()=>dispatch({type : 'INCREMENT'}),
    onDecrement : ()=>dispatch({type : "DECREMENT"}),
    onDec : ()=>dispatch({type : "ONDEC" , value : 2}),
    onAdd : ()=> dispatch({type : "ONADD", value : 2}),
    onResult : ()=>dispatch({ type: "RESULT"})
    
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Counter)
