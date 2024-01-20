import React from 'react'
import { connect } from 'react-redux'
import { buyShawarma } from './redux'

function ShawarmaContainer(props) {
  return (
    <div>
        <h2>Number of shawarma - {props.numOfShawarma}</h2>
        <button onClick={props.buyShawarma}>Buy Shawarma</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfShawarma: state.shawarma.numOfShawarma
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyShawarma: () => dispatch(buyShawarma())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShawarmaContainer)