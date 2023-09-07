import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <section>
      <h2 style={{textAlign:"center",marginTop:"50px"}}>Welcome to Product pages</h2>
      <div>
        <Products/>
      </div>
    </section>
  )
}

export default Home