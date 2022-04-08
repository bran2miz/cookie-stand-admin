import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import Table from '../components/Table'
import Footer from '../components/Footer'
import {hours} from '../hours'
import {useState} from 'react'

export default function CookieStandAdmin() {

  const [storeList, setStoreList] = useState({})
  

  function handleCreate(event) {
    event.preventDefault();
    
    const storeList = {
      location:event.target.location.value,
      min_cust_per_hour:event.target.min_cust_per_hour.value,
      max_cust_per_hour:event.target.max_cust_per_hour.value,
      avg_cookies_per_sale: event.target.avg_cookies_per_sale.value,
    }

    setStoreList(storeList)
  }
  
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='p-6 bg-emerald-50'>
        <CreateForm handleCreate={handleCreate} />
        <Table storeList={storeList} /> 
      </main>
      <Footer />
      
    </div>
  )
}

