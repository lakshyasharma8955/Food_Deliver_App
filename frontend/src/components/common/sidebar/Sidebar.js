// import React from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import { BsPerson } from 'react-icons/bs';
// import {TbTruckReturn} from "react-icons/tb"
// import {MdOutlineFavorite,MdHelp} from "react-icons/md";
// import {FaGoogleWallet} from "react-icons/fa"

// const SidebarContent = ({  isOpen, onClose  }) => {
//   return (
//     <div
//       className={
//         isOpen
//           ? 'fixed top-0 left-0 w-[260px] h-screen bg-white z-10 duration-300'
//           : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
//       }
//     >
//       <AiOutlineClose
//         size={20}
//         onClick={onClose}
//         className='absolute right-4 top-4 cursor-pointer'
//       />
//       <h2 className='text-1xl p-4 ml-[-180px]'>
//         Yum<span className='text-orange-700 font-bold'>Eats</span>
//       </h2>
//       <nav>
//         <ul className='flex flex-col p-4 text-gray-900'>
//           <li className='text-xl py-4 flex'>
//             <BsPerson size={20} className='mr-4 text-white bg-black rounded-full' />
//             My Account
//           </li>
//           <li className='text-xl py-4 flex'>
//             <TbTruckReturn size={20} className='mr-4 text-white bg-black rounded-full' />
//             Delivery
//           </li>
//           <li className='text-xl py-4 flex'>
//             <MdOutlineFavorite size={20} className='mr-4 text-white bg-black rounded-full' />
//             My Favourite
//           </li>
//           <li className='text-xl py-4 flex'>
//             <FaGoogleWallet size={20} className='mr-4 text-white bg-black rounded-full' />
//             My Wallet
//           </li>
//           <li className='text-xl py-4 flex'>
//             <MdHelp size={20} className='mr-4 text-white bg-black rounded-full' />
//             Help
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SidebarContent;


import React from 'react'
import {AiOutlineClose} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {TbTruckReturn} from "react-icons/tb";
import {MdOutlineFavorite, MdHelp} from "react-icons/md";
import {FaGoogleWallet} from "react-icons/fa";

function Sidebar({isOpen,onClose}) {
  return (
    <div>
       <div className=
    {
      isOpen ? 'fixed top-0 left-0 w-[260px] h-screen bg-white z-10 duration-300'
      : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
    }
    >
      <AiOutlineClose
       size={20}
       onClick={onClose}
        className='absolute right-4 top-4 cursor-pointer' />
      <h2 className='text-lg p-4 ml-[-180px]'>Yum<span className='text-orange-700 font-bold'>Eats</span></h2>
      <nav>
        <ul className='flex flex-col p-4 text-gray-900'>
          <li className='text-lg py-4 flex'>
            <BsPerson size={20} className='mr-4 text-white bg-black rounded-full'/>
            My Account
          </li>
          <li className='text-lg py-4 flex'>
            <TbTruckReturn size={20} className='mr-4 text-white bg-black rounded-full'/>
           Delivery
          </li>
          <li className='text-lg py-4 flex'>
            <MdOutlineFavorite size={20} className='mr-4 text-white bg-black rounded-full'/>
            My Favourite
          </li>
          <li className='text-lg py-4 flex'>
            <FaGoogleWallet size={20} className='mr-4 text-white bg-black rounded-full'/>
            My Wallet
          </li>
          <li className='text-lg py-4 flex'>
            <MdHelp size={20} className='mr-4 text-white bg-black rounded-full'/>
            Help
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Sidebar