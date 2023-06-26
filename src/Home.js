import React, { useState } from 'react'
import './Body.scss'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Food from './images/food.jpg'
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

localStorage.setItem('siva',JSON.stringify([]));

const Home = () => {


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

let ssa= JSON.parse(localStorage.getItem('value'))
console.log('ssa',ssa);
    
const [state,setState]=useState(ssa)
 console.log('Home',state);

  const addCard=(i)=>{
    let ss=ssa[i]
    let t=JSON.parse(localStorage.getItem('siva'));
    t.push(ss);
    localStorage.removeItem('siva');
    localStorage.setItem("siva",JSON.stringify(t))
  }
  
  return (
    <>
      <div className='card form1'>
      <Link to={'/Form'}>Add card</Link>
      <div className='container'>
        <div className='row'>
        {state.map((value,index)=>{
        return <div  key={index} className='col-3 card-item'>
              <Card>
            <CardHeader/>
            <CardMedia/>
            <img src={Food}></img>
            <CardContent>
            <h2>{value.name} </h2>
              <Typography variant="body2" color="text.secondary">
                  <h4>*{value.rating}</h4>
                  <h3>.</h3>
                  <h3>{value.minutes}MIN</h3>
                  <h3>.</h3>
                  <h3>{value.rupee}FOR TWO</h3>
              </Typography>
             </CardContent>
            <CardActions disableSpacing>
                <IconButton> 
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite  style={{color:'red'}}/>} />
                </IconButton>
                <IconButton >
                  <ShareIcon />
                </IconButton>
                <IconButton >
                  < AddShoppingCartIcon onclick={()=>addCard(index)}/>
                </IconButton>
                <IconButton >
                  < AddCircleIcon/>
                </IconButton>
            </CardActions>
          </Card>      
          </div>
            })}
        </div>
      </div>
    </div>
    </>
)}

export default Home
