import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from './redux'

function iceCreamContainer(props) {
  return (
    <div>
        <h2>Number of iceCream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)