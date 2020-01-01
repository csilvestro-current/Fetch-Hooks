import React, { Component } from 'react'
import './App.css'
import Routes from './components/Routes'

//React Router
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={styles.container}>
          <Nav />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App

const styles = {
  container: {
      backgroundColor: 'lightgray',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
  }
}
