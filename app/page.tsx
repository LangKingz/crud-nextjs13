import Link from 'next/link';
import React from 'react'


export default function page() {
  return (
    <div className='py-10 px-10' style={{
      // border: '1px solid black',
      height: '100vh',
      width: '80vw',
      position: 'relative',
      left: '10%',
      marginTop: '10%',
      justifyItems: 'center',
    }}>
      <div className="container justify-center">
        <Link className='btn btn-primary' href='/products'>Klik Main CRUD</Link>
      </div>
    </div>
  )
}
