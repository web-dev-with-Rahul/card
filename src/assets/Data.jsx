import React from 'react'
import Card from './Card'

function Data() {
    let obj1={
        image:"https://images.pexels.com/photos/630763/sun-burst-forest-light-630763.jpeg?auto=compress&cs=tinysrgb&w=800",
        title:"Sunburst Forest Light",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam id est laborum.",
        btn:"Submit"
    }
    let obj2={
        image:"https://images.pexels.com/photos/3823/leaf-leaves-autumn-beech.jpg?auto=compress&cs=tinysrgb&w=800",
        title:"Leaves Autumn Beech",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam id est laborum.",
        btn:"cLICK"

    }
    let obj3={
        image:"https://images.pexels.com/photos/18933067/pexels-photo-18933067/free-photo-of-beech-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=800",
        title:"TtREE FOREST",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam id est laborum.",
        btn:"Read More"
    }
  return (
    <div>
<Card data={obj1}/>
<Card data={obj2}/>
<Card data={obj3}/>
    </div>
  )
}

export default Data