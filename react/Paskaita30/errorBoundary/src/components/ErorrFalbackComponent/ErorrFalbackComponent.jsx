import React from 'react'

export default function erorrFalbackComponent({error,resetErrorBoundary}) {
  return (
    <div><p>Something went wrong:</p>
    <p>{error.message}</p>
    </div>
  )
}
