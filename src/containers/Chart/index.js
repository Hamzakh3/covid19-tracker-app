import { useState, useEffect } from 'react'
import { dailyData } from '../../API'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import styles from './chart.module.css'

const Chart = ({ cardsData, country }) => {
    const [chartData, setChartData] = useState([])
    // console.log(cardsData.map((item) => item.value))
    useEffect(() => {
        (async () => {
            const fetchData = await dailyData()
            // console.log(await fetchData)
            setChartData(fetchData)
        })()

    }, [])
    const LineChart = () => {
        return <Line

            data={{
                labels: chartData.map(({ date }) => date),

                datasets: [{
                    data: chartData.map(({ confirmed }) => confirmed),
                    label: 'Confirmed',
                    borderColor: 'red',
                    fill: true

                },
                {
                    data: chartData.map(({ deaths }) => deaths),
                    label: 'deaths',
                    borderColor: 'orange',
                    fill: true
                }]
            }

            }


        />
    }
    // console.log(cardsData)
    const BarChart = () => {
        return <Bar
            data={{
                labels: cardsData.map((item) => item.keyTxt),
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: ['rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,165,0,0.5)'],
                        borderColor: ['rgba(255,0,0,1)', 'rgba(0,255,0,1)', 'rgba(255,165,0,1)'],
                        borderWidth: 2,
                        data: cardsData.map((item) => item.value)
                    }

                ]
            }}
            options={{
                title: {
                    display: true,
                    text: `Current Covid-19 Situation in ${country}`,
                    fontSize: 22
                },
                legend: {
                    display: false,
                    position: 'right'
                },

            }}
        />

    }


    return (


        <div className={styles.chart}>
            {country !== 'Global' ? cardsData && BarChart() : cardsData && LineChart()}

        </div>
    )
}

export default Chart