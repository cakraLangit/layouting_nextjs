// import {motion} from "framer-motion"
import Image from "next/image";
export default function HeroSection({ img, text1, text2, text3, button }) {

  return (
    <>  
      <div className="lg:w-4/12  hidden lg:flex" >
        <Image data-aos="fade-up" src={img} className="max-w-sm rounded-2xl border-transparent shadow-2xl "  width={400} height={600} alt="hand-phone"/>
      </div>
      <div data-aos="fade-" className="  md:ml-5 lg:ml-10 w-full lg:w-8/12 flex-col text-white  lg:px-10  px-5 md:-my-20 ">

        <p className="lg:text-6xl md:text-7xl sm:text-6xl text-4xl  lg:font-black font-bold  md:leading-tight lg:leading-normal ">
          {text1}
          <br />
          {text2}
          <br />
          {text3}
        </p>
        {/* <button className=" hidden sm:flex  mb-10  h-16 sm:h-14 lg:h-10 px-20 sm:px-14 lg:px-10 btn  rounded-full w-4/12 lg:w-5/12  bg-white border-transparent text-black hover:bg-white ">
          {button}
        </button> */}
        <button className=" mt-4 sm:flex  btn  border-transparent font-bold   py-1 px-0.5 lg:py-3 lg:px-6 rounded-full bg-white  w-8/12 sm:w-4/12  text-black text-sm font-bold hover:bg-white hover:scale-1.5">
        {button}
      </button>
      </div>
    </>
  );
}
