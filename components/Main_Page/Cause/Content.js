import Image from "next/image"
export default function Content({img,text,title,center}) {
  return (
   <>
   <div className="shadow-2xl pt-5 rounded-xl flex  flex-col" key={text} data-aos="fade-up" data-aos-offset="190" data-aos-easing="ease-in-sine" data-aos-duration="600" >        
        
        <Image
           src={img}
           width={180}
           height={180}
           alt='card rounded'
           className="mb-4"  
           />
           <h1 className={`mt-4 font-bold text-2xl text-black ${center ? 'text-center' : '' }`}>{text}</h1>
         <p className="  p-4 mb-3 text-base text-black text-center">{title}</p>
    </div>  
   </>
  )
}
