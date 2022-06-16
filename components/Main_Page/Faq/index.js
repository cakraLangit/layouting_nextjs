import Image from "next/image"
import React, { useState } from 'react';
import   { TableOne,TableTwo,TableThree,TableFour} from"./Table";
export default function index({title,src}) {
  return (
    <>    
        <TableOne
          title="How do I create a playlist?"
          src="/faq_arrow.svg"
        />
         <TableTwo
          title="How do I activate Data Saver mode?"
          src="/faq_arrow.svg"
        />
         <TableThree
          title="Is it only possible to shuffle play music?"
          src="/faq_arrow.svg"
        />
         <TableFour
          title="Where can I find Podcasts?"
          src="/faq_arrow.svg"
        />
    </>
  
  )
}
