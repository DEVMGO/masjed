import React from 'react'
import { HiOutlineQueueList } from 'react-icons/hi2';

const SidebarHome = () => {
  return (
    <div className='w-full flex items-center justify-start flex-col res5:flex-row'>
      <div className='w-full flex items-center justify-start flex-col p-3 rounded-xl bg-neutral-900 res5:m-1 shadow-3xl'>
        <div className='w-full flex items-start justify-start flex-col'>
          <h5 className='w-full flex items-center justify-start text-base text-khaki py-3 mb-2 border-b border-b-white'><HiOutlineQueueList className='ml-2' /> اخبار</h5>
          <ul className='w-full flex items-start justify-start flex-col text-white'>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 1</li>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 2</li>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 3</li>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 4</li>
          </ul>
        </div>
      </div>
      
      
      <div className='w-full flex items-center justify-start flex-col p-3 rounded-xl bg-neutral-900 mt-6 res5:m-1 shadow-3xl'>
        <div className='w-full flex items-start justify-start flex-col'>
          <h5 className='w-full flex items-center justify-start text-base text-khaki py-3 mb-2 border-b border-b-white'><HiOutlineQueueList className='ml-2' /> آرشیو</h5>
          <ul className='w-full flex items-start justify-start flex-col text-white'>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 1</li>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 2</li>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 3</li>
            <li className='w-full p-4 text-white text-xs hover:bg-black cursor-pointer rounded-md'>اخبار تستی 4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarHome