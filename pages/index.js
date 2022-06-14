import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Hero from '../components/Main_Page/Hero'
import Cause from '../components/Main_Page/Cause'
import WhyPage from '../components/Main_Page/WhyPage'
import Table from '../components/Main_Page/Table'

export default function Home() {
  return (
   <>
   <div className='bg-white h-screen'>
   <Layout>
     <Hero/>
     <Cause/>
     <WhyPage/>
     <Table/>
   </Layout>
   </div>
   </>
  )
}
