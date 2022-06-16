
import Image from "next/image"
import React, { useState } from 'react';
import{  TableAnswereOne,TableAnswereTwo,TableAnswereThree,TableAnswereFour} from'./TableAnswere'
export  function TableOne({title,src}) {
    const [faqOne, setFaqOne] = useState(false)
    const clickHandleOne=()=>{
      setFaqOne(!faqOne)
    }    
    return (
        <>
        <div className="border-4 p-5  border-black  border-[1px] flex ">
          <div className=" flex justify-start flex-col w-6/12 ">
             <p className=" text-black flex">{title}</p>
          </div>
          <div className="flex justify-end w-6/12 ">
            <Image
            src={src}
            width={20}
            height={20}
            alt="faq_arrow"
            onClick={clickHandleOne}
            className={
              faqOne ? 'rotate-180  duration-500 cursor-pointer ' :'rotate-0 cursor-pointer duration-500'
            }
            />
          </div>
        </div>
           {
             faqOne &&(
                <TableAnswereOne/>      
             )
           } 
        </>
    )
}

export  function TableTwo({title,src}) {
    const [faqTwo, setFaqTwo] = useState(false)
    const clickHandleTwo=()=>{
        setFaqTwo(!faqTwo)
      }
    return (
      <>
      <div className="border-4 p-5 border-black  border-[1px] flex ">
          <div className=" flex justify-start flex-col w-6/12">
             <p className=" text-black flex">{title}</p>
          </div>
          <div className="flex justify-end w-6/12 ">
            <Image
            src={src}
            width={20}
            height={20}
            alt="faq_arrow"
            onClick={clickHandleTwo}
            className={
              faqTwo ? 'rotate-180 duration-500 cursor-pointer' :'rotate-0  duration-500 cursor-pointer'
            }
            />
          </div>
        </div>
           {
             faqTwo &&(
                <TableAnswereTwo/>     
             )
           } 
      </>
    )
  }
export  function TableThree({title,src}) {
    const [faqThree, setFaqThree] = useState(false)
    const clickHandleThree=()=>{
        setFaqThree(!faqThree)
      }
    return (
      <>
      <div className="border-4 p-5 border-black  border-[1px] flex ">
          <div className=" flex justify-start flex-col w-6/12">
             <p className=" text-black flex">{title}</p>
          </div>
          <div className="flex justify-end w-6/12  ">
            <Image
            src={src}
            width={20}
            height={20}
            alt="faq_arrow"
            onClick={clickHandleThree}
            className={
              faqThree ? 'rotate-180 duration-500 cursor-pointer' :'rotate-0 duration-500 cursor-pointer'
            }
            />
          </div>
        </div>
           {
             faqThree &&(
               <TableAnswereThree/>    
             )
           } 
      </>
    )
  }
export  function TableFour({title,src}) {
    const [faqFour, setFaqFour] = useState(false)
    const clickHandleFour=()=>{
        setFaqFour(!faqFour)
      }
    return (
      <>
      <div className="border-4 p-5 border-black  border-[1px] flex ">
          <div className=" flex justify-start flex-col w-6/12">
             <p className=" text-black flex">{title}</p>
          </div>
          <div className="flex justify-end w-6/12  ">
            <Image
            src={src}
            width={20}
            height={20}
            alt="faq_arrow"
            onClick={clickHandleFour}
            className={
              faqFour ? 'rotate-180 duration-500 cursor-pointer' :'rotate-0 duration-500 cursor-pointer'
            }
            />
          </div>
        </div>
           {
             faqFour &&(
                <TableAnswereFour/>     
             )
           } 
      </>
    )
  }
  
  
  