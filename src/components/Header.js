import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>TODOList</h1>
      </header>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header

/*
function Header(){
  return (
    <header>
      <h1>TODOList</h1>
    </header>
  )
}*/