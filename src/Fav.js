

import React from 'react'

const Fav = () => {
    let d=JSON.parse(localStorage.getItem('siva'));
  return (
    <div>
      {d.map((e)=><h1>{e.name}</h1>)}
    </div>
  )
}

export default Fav
