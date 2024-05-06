import React from 'react'
import { months } from '../App'


export default function Statistics({
    month, 
    stats
}) {
  
  
    return (
    <div>
        
        <h3>Statistics - {months[month-1]}</h3>
    
        <div className='stats-box'>
            <StatsRow name={"Total sale :  "} value={stats.totalSaleAmount}/>
            <StatsRow name={"Total sold item :  "} value={stats.totalNumberOfSoldItems}/>
            <StatsRow name={"Total not sold item :  "} value={stats.totalNumberOfNotSoldItems}/>
        </div>
    </div>
  )
}

function StatsRow({
    name, value
}) {
    return <div>
        <label>{name}</label>
        <label>{value}</label>
    </div>
    
}