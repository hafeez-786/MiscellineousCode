import React from 'react';
import './Main.css';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux'
import { anotherName } from './actions/myaction'

const App = (props) => {
  const mywish = props.mywish.map(item => {
    return <h2 style={{textAlign: "center"}} key={item}>{item}</h2>
  })
  console.log(mywish)
  return (
    <div>
      <Header />
      <div className="mg-top-bottom">
        <h1>I am App Component</h1>
        <h1>My name is {props.myname}</h1>
        {mywish}
        <button className="btn btn-primary"
          onClick={() => { props.changeName() }}>Change Name</button>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //changeName: (name) => {dispatch({type: "CHANGE_NAME",payload: name})}
    changeName: (name) => { dispatch(anotherName(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);