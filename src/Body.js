import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Body.scss'
import Food from './images/food.jpg'

// const array=[];
 
const Body = () => {

  const arr =[{
    name:'Ananth veg Restaurent',
    rating:'*4.0',
    dot:'.',
    min:'39 MINS',
    rupee:'$799 FOR TWO'
  },
  {
    name:'Priya veg Restaurent',
    rating:'*4.0',
    dot:'.',
    min:'39 MINS',
    rupee:'$799 FOR TWO'
  },
  {
    name:'Dharsan veg Restaurent',
    rating:'*4.0',
    dot:'.',
    min:'39 MINS',
    rupee:'$799 FOR TWO'
  },
  {
    name:'Dharsan veg Restaurent',
    rating:'*4.0',
    dot:'.',
    min:'39 MINS',
    rupee:'$799 FOR TWO'
  }
]
//  array.push(arr);
 localStorage.setItem('details',JSON.stringify(arr));
 console.log('array',arr);
  return (
    <>
    
    {/* <div className='card'>
      <div className='container'>
        <div className='row'>
        {arr.map((value,index)=>{
        return <div  key={index} className='col-4 card-item'>
              <Card>
            <CardHeader/>
            <CardMedia/>
            <img src={Food}></img>
            <CardContent>
            <h2>{value.name} </h2>
              <Typography variant="body2" color="text.secondary">
                  <h4>{value.rating}</h4>
                  <h3>{value.dot}</h3>
                  <h3>{value.min}</h3>
                  <h3>{value.dot}</h3>
                  <h3>{value.rupee}</h3>
              </Typography>
             </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
                <IconButton >
                  <ShareIcon />
                </IconButton>
                <IconButton >
                  < AddShoppingCartIcon/>
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
    </div> */}
    </>
  )
}
export default Body