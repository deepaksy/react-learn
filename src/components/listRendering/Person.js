import React from 'react'

function Person(props) {
    const {id,name,age,skill}=props.person
  return (
    <h1 key={id}>Hello, I am {name}, {age} years old. I know {skill}.</h1>
  )
}

export default Person