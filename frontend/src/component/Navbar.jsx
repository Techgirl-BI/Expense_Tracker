import React from 'react';

const Navbar = () => {
  return (
    <div className='h-20'>
      <ul className='flex py-3 ml-32'>
        <li className='text-blue-700 p-2'>Home</li>
        <li className='text-blue-700 p-2 border-2 px-2 hover:bg-amber-300 rounded border-amber-300 mx-4'>New Expense</li>
        <li className='text-blue-700 p-2 border-2 border-blue-500 rounded hover:bg-blue-500'>New Income</li>
        <li className='text-black p-2 border-2 mr-6 rounded relative left-2/4 hover:bg-gray-500'>Sign In</li>
        <li className='text-white hover:bg-blue-600 bg-blue-700 p-2 border-2 mr-6 rounded relative left-2/4'>Sign Out</li>
      </ul>
    </div>
  );
}

export default Navbar;
