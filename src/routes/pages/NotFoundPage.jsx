import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../common/container/Container'

const NotFoundPage = () => {
  return (
    <section>
      <Container>
        <h1>
          NotFoundPage
        </h1>

        <Link to='/'>Back home</Link>
      </Container>
    </section>
  )
}

export default NotFoundPage