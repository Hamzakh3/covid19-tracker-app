let apiUrl = 'https://covid19.mathdro.id/api'


export const allData = async (country) => {
    let changeUrl = apiUrl

    if(country && country !== 'Global'){

        changeUrl = `${apiUrl}/countries/${country}`
        // console.log(country)

    }

    const apiData = await fetch(changeUrl)
    const data = await apiData.json()
    // console.log(data)

    const modifiedData = [{
            data: data.confirmed.detail,
            value: data.confirmed.value,
            keyTxt: 'Confirmed',
            lastDate:data.lastUpdate,
            infoMessage:'Number of Cases are infected due to Covid-19',
            color:'red'

        },
        {
            data: data.recovered.detail,
            value: data.recovered.value,
            keyTxt: 'Recovered',
            lastDate:data.lastUpdate,
            infoMessage:'Number of Cases are Recovered from Covid-19',
            color:'green'

        },
        {
            data: data.deaths.detail,
            value: data.deaths.value,
            keyTxt: 'Deaths',
            lastDate:data.lastUpdate,
            infoMessage:'Number of Cases are death cause by Covid-19',
            color:'orange'
            
        }]
    return modifiedData

}

export const dailyData = async () => {
    const apiData = await fetch(`${apiUrl}/daily`)
    const data = await apiData.json()
    
    const modifiedData = data.map((item)=>{
        return {
            confirmed : item.confirmed.total,
            deaths : item.deaths.total,
            date : item.reportDate

        }
    })
    return modifiedData

}

export const countries = async () => {
    const apiData = await fetch(`${apiUrl}/countries`)
    const data = await apiData.json()
    return data.countries
}
