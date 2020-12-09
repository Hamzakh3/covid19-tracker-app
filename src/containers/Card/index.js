// import { useEffect, useState } from 'react'
import CustomizeCard from '../../components/CustomizeCard'
import style from './card.module.css'



const Card = ({data, country}) => {
    return (
        <div class={style.cardContainer}>
            {data.length ? data.map((item) => {
                // console.log(item)
                return (
                    <CustomizeCard cardData={item} country={country}/>
                )
            }) :
                'loading'
            }
        </div>
    )
}
export default Card
