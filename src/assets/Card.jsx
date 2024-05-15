import React from 'react'

function Card({data}) {
    console.log(data)
  return (
    <div className='card'>
        <img src={data.image} alt="" />
        <div className="title">{data.title}</div>
        <div className="desc">{data.description}</div>
        <input type="button" value={data.btn} className='btn'/>

    </div>
  )
}

export default Card