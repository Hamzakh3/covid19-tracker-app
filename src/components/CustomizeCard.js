import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Countup from 'react-countup';
import style from '../containers/Card/card.module.css'



export default function ImgMediaCard({cardData, country}) {
  // console.log(cardData)
  const {color} = cardData
  // console.log(color)
  return (
    <>
      {cardData ? 
      <Card className={style.root} style={{borderColor:color}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3" style={{color:color}}>
            {cardData.keyTxt}
          </Typography>
          <Typography variant="body2" component="p" style={{color:color, fontWeight:'bolder', fontSize:16}}>
            <Countup 
            start={0}
            end={cardData.value}
            separator=','
            duration={2}
            
            />
            <Typography style={{color:'whitesmoke'}}>
              {`${country ? cardData.infoMessage + ' in ' + country: cardData.infoMessage}`}
            </Typography>
            
          </Typography>
          <Typography style={{color:'whitesmoke'}}>
            {new Date(cardData.lastDate).toDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    :
    <h2>Loading...</h2> }
    </>
  );
}