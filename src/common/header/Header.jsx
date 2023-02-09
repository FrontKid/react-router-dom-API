import React from 'react'
import Container from '../../common/container/Container';
import NavBar from '../nav/NavBar'

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <NavBar />
      </Container>
    </header>
  )
}

export default Header