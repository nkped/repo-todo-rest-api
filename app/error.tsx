'use client'
import React from 'react'
import Link from 'next/link'


const error = ({error, reset}: { error: Error; reset: () => void }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
      <br/>
      <Link href='/'>Back to Home</Link>
    </div>
  )
}

export default error