import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Hero from '../components/Main_Page/Hero'
import Cause from '../components/Main_Page/Cause'

export default function Home() {
  return (
   <>
   <Layout>
     <Hero/>
     <Cause/>
   </Layout>
   </>
  )
}
