import React from 'react'

export default function NameDisplay(name) {
    if (!name){
   throw new Error  ("Name is required dfhdh")   
    }
  return (
    <div>{name}</div>
  )
}
