import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import Table from '../components/Table'
import Footer from '../components/Footer'
import {hours} from '../hours'
import {useState} from 'react'

export default function CookieStandAdmin() {

  const [storeList, setStoreList] = useState([])
  

  function handleCreate(location, min_cust_per_hour, max_cust_per_hour, avg_cookies_per_sale) {
    
    const newStore = {
      location,
      min_cust_per_hour:min_cust_per_hour,
      max_cust_per_hour:max_cust_per_hour,
      avg_cookies_per_sale: avg_cookies_per_sale,
      id: storeList
    }

    setStoreList([...storeList, newStore])
  }
  
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='p-6 bg-emerald-50'>
        <CreateForm onCreate={handleCreate} />
        <Table hours={hours} storeList={storeList} /> 
      </main>
      <Footer />
      
    </div>
  )
}

