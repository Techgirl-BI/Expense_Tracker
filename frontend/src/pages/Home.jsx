import React from 'react';
import graph from "../assets/graph1.jpg";

const Home = () => {
  return (
    <div className='flex'>
      <div className='w-2/3'>
        <img src={graph} alt="Graph" className='w-full h-full object-cover' style={{ maxHeight: '80vh' }} />
      </div>
      <div className='mx-20'>
        <h1 className='text-4xl font-bold mb-4'>Keep Track of your income & Expenses</h1>
        <p className='mb-2'>View all your income and expenses flow from your team in one dashboard</p>
        <p>Track Your Performance</p>
      </div>
    </div>
  );
}

export default Home;
