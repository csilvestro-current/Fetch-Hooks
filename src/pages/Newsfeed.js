import React, { Component } from 'react'

class Newsfeed extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>Newsfeed</h1>
      </div>
    )
  }
}
export default Newsfeed
        
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: 'gray'
  }
}