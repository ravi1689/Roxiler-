/* eslint-disable react/style-prop-object */
import TransactionsTable from './components/TransactionsTable';


import './App.css';
import BarChart from './components/BarChart';
import { useEffect, useState } from 'react';
import Statistics from './components/Statistics';



export const months = [ "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",]


function App() {

  const [data, setData] = useState({
    transactions: [],
    statistics: {},
    barChart: []
  });

  

  const [barChartData, setBarChartData] = useState([])

  const [month, setMonth] = useState(3);

  useEffect(() => {
    if (month) {
      fetch("http://localhost:3009/api/combined-data?month=" + month)
        .then(resp => resp.json()).then(resposne => {
          console.log({ resposne })
          setData(resposne)
        }).catch(err => console.error(err))
    }

  }, [month])


 return (
    <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

      <h2 className='transactionheading'>Transactions Dashboard</h2>
      <div className='search-month-selector-container'>
      <input
          className='inputsearch'
          type="search"
          placeholder="Search transactions"
          
         
        />

      <select  className="selectmonth" onChange={e => {
        setMonth(e.target.value)
      }} value={month}>
        <option disabled  >Select a month</option>
       {months.map((monthName, index)=> <option value={index+1}>{monthName}</option>)}

      </select>
      </div>
      
      
      <TransactionsTable transactions={data.transactions} />

      <Statistics month={month} stats={data.statistics} />

      <BarChart data={data.barChart} />
    </div>
  );
}

export default App;