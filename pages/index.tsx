import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
// import Table from '../components/Table'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='p-6 bg-emerald-50'>
        <CreateForm />
        {/* <Table /> */}
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>questions</th>
            <th>asked</th>
          </tr>
        </thead>
        <tbody>
          <td>1</td>
          <td>dkdkd</td>
          <td>fafa</td>
          </tbody>
        </table>

        
        
      </main>
      <Footer />
      
    </div>
  )
}

export default Home
