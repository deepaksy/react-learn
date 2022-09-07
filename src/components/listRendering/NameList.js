import React from 'react'
import Person from './Person'

function NameList() {
    const personList=[
        {
            id:1,
            name:'Bruce',
            age:21,
            skill:"Angular"
        },
        {
            id:2,
            name:'Clark',
            age:22,
            skill:"Vue"
        },
        {
            id:3,
            name:'Diana',
            age:23,
            skill:"Flutter"
        },
        {
            id:4,
            name:'Foggy',
            age:24,
            skill:"React"
        },

    ]
    const nameList= personList.map((person,i)=>{
        return <Person key={i} person={person}></Person>
    })
  return (
    <div>
        {nameList}
    </div>
  )
}

export default NameList