import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../header/Header'
import Container from '../container/Container'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Container>
        <footer>Hello 2023</footer>
      </Container>
    </>
  )
}

export default Layout