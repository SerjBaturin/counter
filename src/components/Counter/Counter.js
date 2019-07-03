import React from 'react'
import { connect } from 'react-redux'
import './Counter.sass'


class Counter extends React.Component {
  
  plusOne() {
    this.props.dispatch({
      type: 'INCREASE'
    })
  }

  minusOne() {
    this.props.dispatch({
      type: 'DECREASE'
    })
  }

  render() {

    return (
      <div className="counter">
        <h1>{this.props.counter}</h1>
        <button onClick={() => this.plusOne()}>Plus</button>
        <button onClick={() => this.minusOne()}>Minus</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(Counter)