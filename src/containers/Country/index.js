import { useState, useEffect } from 'react'
import styles from './country.module.css'
import {countries} from '../../API'

export default (props) => {
const [countryNames, setCountryNames] = useState([])
// const [countryName, setCountryName] = useState('')

    useEffect(()=>{
        (async () => {
            setCountryNames(await countries())
        })()
    },[])
    // console.log(countryNames)

    return (

        <div>
            <h4>Select for Specific Country Report </h4>
            <select className={styles.picker} onChange={(e)=>{props.getCountry(e.target.value)}}>
                <option value={'Global'}>{`Global`}</option>
                {countryNames.map((item)=>{
                return(
                    <option value={item.name}>{item.name}</option>
                )    
                
                })}
            </select>
        </div>
    )
}

