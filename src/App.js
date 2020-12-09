import { useEffect, useState } from 'react'
import Card from './containers/Card'
import Country from './containers/Country'
import Chart from './containers/Chart'
import style from './app.module.css'
import { allData } from './API'
import covid from './assets/covid-19.png'


function App() {
  const [country, setCountry] = useState('Global')
  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      const data = await allData()
      setCardsData(data)
      // console.log(data)
    }
    fetchApi()

  },[])


  const getCountry = async (countryValue) => {
    const data = await allData(countryValue)
    setCardsData(data)
    // console.log(data)
    setCountry(countryValue)
    // console.log(countryValue)

  }
  return (
    <>
      <h1 className={style.heading}>
        <img src={covid} width='40' alt='Covid-19/'> </img> <p>COVID 19 TRACKING APP</p>
    </h1>
      <div className={style.container}>

        <div className={style.cards}>
          <Card data={cardsData} country={country} />
        </div>
        <div className={style.content}>
          <Country getCountry={getCountry}/>
          <Chart cardsData={cardsData} country={country}/>
        </div>

      </div>
    </>
  );
}

export default App;
