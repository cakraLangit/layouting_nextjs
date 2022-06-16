import {answereOne,answereTwo,answereThree,answereFour} from './Data_Answere'

export  function TableAnswereOne() {
  return (
    <div className=" border-4 p-5 border-black  border-[1px] flex flex-col text-black">
        <p className="mb-2"> Playlists are a great way to save collections of music, either for your own listening or to share.</p> 
        <p className="mb-4">To create one:</p>
        <ol   className="list-decimal ml-4">
        {answereOne.map((data)=>(
            <li key={data.text}>{data.text}</li>            
        ))}
        </ol>
                   
    </div>
  )
}

export  function TableAnswereTwo() {
    return (
      <div className=" border-4 p-5 border-black  border-[1px] flex flex-col text-black">
          <ol className="list-decimal ml-4">
          {answereTwo.map((data)=>(
         
            <li>{data.text}</li>   
                
        ))}   
         </ol>                
      </div>
    )
  }

export  function TableAnswereThree() {
    return (
      <div className=" border-4 p-5 border-black  border-[1px] flex flex-col text-black">
          <ul className="list-none">
          {answereThree.map((data)=>(
         
            <li>{data.text}</li>   
             
        ))}   
          </ul>            
      </div>
    )
  }

export  function TableAnswereFour() {
    return (
      <div className=" border-4 p-5 border-black  border-[1px] flex flex-col text-black">
          <ul className="list-none">
          {answereFour.map((data)=>(
            <li>{data.text}</li>    
         ))}         
          </ul>            
      </div>
    )
  }