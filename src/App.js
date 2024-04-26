import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Line } from 'react-chartjs-2';

const GraphComponent = ({ data }) => {
  return <Line data={data} />;
};

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numbers, setNumbers] = useState([]);

  const handleDateChange = (date, setter) => {
    setter(date);
  };

  const handleNumberChange = (event) => {
    setNumbers([...numbers, parseInt(event.target.value)]);
  };

  const data = {
    labels: numbers.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Numbers',
        data: numbers,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h1>Enter Numbers and Dates</h1>
      <input type="number" onChange={handleNumberChange} />
      <DatePicker selected={startDate} onChange={(date) => handleDateChange(date, setStartDate)} />
      <DatePicker selected={endDate} onChange={(date) => handleDateChange(date, setEndDate)} />
      <GraphComponent data={data} />
    </div>
  );
};








