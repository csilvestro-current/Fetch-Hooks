import React, { Component } from 'react'
//React Router
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav style={styles.container}>
        <NavLink to="/Newsfeed" style={styles.a}>Newsfeed</NavLink>
        <NavLink to="/Messages" style={styles.a}>Messages</NavLink>
        <NavLink to="/Watch" style={styles.a}>Watch</NavLink>
        <NavLink to="/Profile" style={styles.a}>Profile</NavLink>
        <NavLink to="/Store" style={styles.a}>Store</NavLink>
      </nav>
    );
  }
}
export default Nav

const styles = {
  container: {
    display: 'flex',
    background: 'teal',
    justifyContent: 'space-around',
    padding: 20,
    fontWeight: 900,
    fontSize: '1.5em',
  },
  a: {
    // display: "flex",
    // flex: "1",
    // justifyContent: "center",
    // alignItems: "center",
    // width: "50px",
    // height: "50px",
    // borderLeft: "solid 1px #cccccc",
    // textDecoration: 'none',
    // "&:link": {
    //   background: "#efefef",
    //   color: 'white'
    // },
    // "&:visited": {
    //   borderRight: "solid 1px #cccccc",
    //   color: 'white'
    // },
    // "&:focus": {
    //   background: "#efefef"
    // },
    // "&:hover": {
    //   borderRight: "solid 1px #cccccc"
    // },
    // "&:active": {
    //   borderRight: "solid 1px #cccccc"
    // },
  }
}