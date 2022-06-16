import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Hero from '../components/Main_Page/Hero'
import Cause from '../components/Main_Page/Cause'
import WhyPage from '../components/Main_Page/WhyPage'
import Faq from '../components/Main_Page/Faq'

export default function Home() {
  return (
   <>
   <div className='bg-white h-screen'>
   <Layout>
     <Hero/>
     <Cause/>
     <WhyPage/>

      <div className='bg-white min-h-max py-10'>
      <h1 className="overflow-hidden  -mt-5
            lg:text-6xl md:text-7xl sm:text-6xl text-4xl  
            lg:font-black font-bold  md:leading-tight lg:leading-normal 
            text-center text-black"> Got questions? 
        </h1>
      <div className='container mx-auto px-10  mt-5'>
      <Faq/>
     </div>
     </div>
   </Layout>
   </div>
   </>
  )
}
