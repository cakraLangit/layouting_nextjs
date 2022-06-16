import Image from "next/image"
import { useState } from 'react';
const data=[
    {
      text:"Premium",
      href:"/",
      hover:false,
      active:false
  },
    {
      text:"Support",
      href:"/",
      hover:false,
      active:false
    },
    {
      text:"Download",
      href:"/",
      hover:false,
      active:false
    },
    {
      text:"|",
      hover:true,
      underline:true
    },
    {
      text:"Sign Up",
      href:"/",
      active:true
    },
    {
      text:"Log In",
      href:"/",
      hover:false,
      active:false
    }
  ]

export default function Navbar() {
  const[canvas,setCanvas]=useState()

  return (
      <div className='bg-black h-20 '>
    <div className="navbar container mx-auto px-10">
    <div className="flex  w-2/12 lg:4/12 items-center py-2  ">
    <Image
       alt='Logo'
       src='/icon.png'
       width={45}
       height={45}
       className="bg-black"   
      />
      <a className="ml-4 normal-case text-2xl font-bold  hidden lg:flex pb-2  text-white">Spotify</a>
    </div>
    <div className="flex  w-10/12 lg:8/12 justify-end">
    {data.map(({text,href,active,hover,underline})=> (  
      <ul key={text} className="  flex-row hidden lg:flex  py-3">
        <li className="mr-4">
        <a className=
         {`pb-1 link-underline link-underline-black text-xl font-medium  hover:secondary  transition duration-0 hover:duration-200
         ${active ? "text-secondary " : "text-white"} 
         ${hover ? "hover:text-white" : "hover:text-secondary"} 
         ${underline ? "link-underline-none link-underline-black-none" : "link-underline link-underline-black "}`}
         href={href}> 
         {text} 
        </a>
        </li> 
     </ul>
       ) )}
      <button className="-mx-2 sm:mx-0 lg:hidden btn btn-square bg-black hover:bg-black">
       <Image
       src="/menu.svg"
       width={40}
       height={40}
       alt="hambuger-menu"
       />
     </button>
    </div>
  </div>
  </div>
  )
}
