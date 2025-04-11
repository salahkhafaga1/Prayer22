import { useEffect, useState } from 'react'

import './App.css'
import Prayer from './components/Prayer'

function App() {
  const cities =[
    {name:"الجزايرلي",value:"Alexandria"},
    {name:"القاهرة",value:"Cairo"},
    {name:"طنطا",value:"Tanta"},
    {name:"المنصوره",value:"Mansoura"}
  ]
  const [prayerstimes,setprayerstimes] =useState({})
  const [Prayerdate,setprayerDate] =useState({})
  const [City,setcity] =useState('Cairo')
  useEffect(()=>{
    const fetchprayertimes=async ()=>{
      try {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${City}`);
        const data = await response.json();
        setprayerstimes(data.data.timings)
        console.log(data.data.date.gregorian)
        setprayerDate(data.data.date.gregorian)
        console.log(data)

      }
      catch (error) {
        console.log(error)
      }
      
    }
    fetchprayertimes()
  },[City])
  return (
    <>
      
      <section>
        
        <div className='container'>
        <h1 className='salah'>مواقيت الصلاة في الجزايرلي وبعض المدن</h1>
          <div className='topsec'>
            <div className='city'>
              <h1>المدينة</h1>
              <select  onChange={(event)=>setcity(event.target.value)}>
                {
                  cities.map((city)=>(
                    <option key={city.value} value={city.value} >
                      {city.name}
                      

                    </option>

                  ))
                }
                
              </select>
              

            </div>
            <div className='date'>
              <h1>اليوم</h1>
              <h3>{Prayerdate.date}</h3>
            </div>

          </div>
          
          <Prayer name="الفجر" time={prayerstimes.Fajr}/>
          <Prayer name="الظهر" time={prayerstimes.Dhuhr}/>
          <Prayer name="العصر" time={prayerstimes.Asr}/>
          <Prayer name="المغرب" time={prayerstimes.Maghrib }/>
          <Prayer name="العشاء" time={prayerstimes.Isha}/>
          
        </div>
      </section>
      <hr />
      
    </>
  )
}

export default App
