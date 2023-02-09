import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../common/container/Container'
const BlogPage = () => {
  return (
    <section>
      <Container>
        <h1>
          BlogPage
        </h1>

        <Link to='/'>Back home</Link>
      </Container>
    </section>
  )
}

export default BlogPage