// import React, { useState } from 'react'
// import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose} from "react-icons/ai";
// import {BsFillCartFill, BsPerson} from "react-icons/bs"
// import {TbTruckReturn} from "react-icons/tb";
// import {FaGoogleWallet} from "react-icons/fa"
// import {MdHelp, MdOutlineFavorite} from "react-icons/md"

// const TopNavbar = () => {
//   const [sidebar,setSideBar] = useState(false);
//   console.log(sidebar);
//   return (
//     <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
//     <div className="flex items-center">
//         <div className="cursor-pointer" onClick={()=>setSideBar(!sidebar)}>
//         <AiOutlineMenu size={20}/>
//         </div>
//         <h1 className='text-2xl sm:text-2xl lg:text-2xl px-2'>Yum
//             <span>Eats</span>
//         </h1>
//         <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
//             <p className='bg-orange-700 text-white rounded-full p-2 sm:text-1xl text-bold'>Free</p>
//             <p className='p-2 text-bold sm:text-1xl'>Delivery</p>
//         </div>
//     </div>
//     <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
//         <AiOutlineSearch size={20}/>
//         <input
//          className='bg-transparent p-2 h-10 w-full focus:outline-none'
//          type='text'
//          placeholder='Search Meals'
//          />
//     </div>
//     <button className='bg-orange-700 text-white hidden md:flex items-center px-3 py-1 rounded-full'>
//     <BsFillCartFill size={15}/> Cart
//     </button>
//   {
//      sidebar ? 
//      (
//       <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div>
//      ) 
//      :
//      ("")}
//     <div className=
//     {
//       sidebar ? 'fixed top-0 left-0 w-[260px] h-screen bg-white z-10 duration-300'
//       : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
//     }
//     >
//       <AiOutlineClose size={20} onClick={() => setSideBar(!sidebar)} className='absolute right-4 top-4 cursor-pointer' />
//       <h2 className='text-1xl p-4 ml-[-180px]'>Yum<span className='text-orange-700 font-bold'>Eats</span></h2>
//       <nav>
//         <ul className='flex flex-col p-4 text-gray-900'>
//           <li className='text-xl py-4 flex'>
//             <BsPerson size={20} className='mr-4 text-white bg-black rounded-full'/>
//             My Account
//           </li>
//           <li className='text-xl py-4 flex'>
//             <TbTruckReturn size={20} className='mr-4 text-white bg-black rounded-full'/>
//            Delivery
//           </li>
//           <li className='text-xl py-4 flex'>
//             <MdOutlineFavorite size={20} className='mr-4 text-white bg-black rounded-full'/>
//             My Favourite
//           </li>
//           <li className='text-xl py-4 flex'>
//             <FaGoogleWallet size={20} className='mr-4 text-white bg-black rounded-full'/>
//             My Wallet
//           </li>
//           <li className='text-xl py-4 flex'>
//             <MdHelp size={20} className='mr-4 text-white bg-black rounded-full'/>
//             Help
//           </li>
//         </ul>
//       </nav>
//     </div>
//     </div>
//   )
// }

// export default TopNavbar







import React, { useState } from 'react';
import Sidebar from "../sidebar/Sidebar"
import { AiOutlineMenu,AiOutlineSearch} from "react-icons/ai";
import {BsFillCartFill} from "react-icons/bs"
import {MdOutlineDeliveryDining} from "react-icons/md"

const TopNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={() => setSidebar(!sidebar)}>
        <AiOutlineMenu size={20}/>
        </div>
        <h1 className='text-lg sm:text-2xl lg:text-2xl px-2'>
          Yum<span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 pt-0 pb-0 text-[14px]'>
          <p className='bg-orange-700 text-white rounded-full p-1 sm:text-1xl font-bold'><MdOutlineDeliveryDining size={20}  /></p>
          <p className='p-2 pl-1 font-bold sm:text-1xl'>Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ml-auto mr-auto">
         <AiOutlineSearch size={20}/>
         <input
          className='bg-transparent p-2 h-10 w-full focus:outline-none'
          type='text'
          placeholder='Search Meals'
          />
    </div>
    <button className='bg-orange-700 text-white hidden md:flex items-center px-3 py-1 rounded-full ml-auto'>
       <BsFillCartFill size={15}/> Cart
     </button>
      {sidebar ? (
        <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
        onClick={()=>setSidebar(!sidebar)}
        ></div>
         
      ) : (
        ''
      )}
         {/* Pass data to the Sidebar component */}
         <Sidebar isOpen={sidebar} onClose={() => setSidebar(!sidebar)} />
    </div>
  );
};  

export default TopNavbar;





