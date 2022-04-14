// import Head from 'next/head';
// import Image from 'next/image';
// import Header from '../components/Header';
// import CreateForm from '../components/CreateForm';
// import ReportTable from '../components/ReportTable';
// import Footer from '../components/Footer';
// import {hours} from '../hours';
// import {useState} from 'react';
// import { homedir } from 'os';
// import { useAuth } from '../contexts/auth';
// import useResource from '../hooks/useResource';

// export default function Home() {
//   const {user} = useAuth();

//   return (
//     <div>
//       {user ? <CookieStandAdmin /> : <LoginForm />}
//     </div>
//   )
// }

// function CookieStandAdmin() {

//   const[reports, setStandList] = useState([]);

//   function handleAddStandList(report) {
//     setStandList([...reports, report])
//   }
  
//   return (
//     <div className="">
//       <Head>
//         <title>Cookie Stand Admin</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Header />
//       <main className='p-6 bg-emerald-50'>
//         <CreateForm handleAddStandList={handleAddStandList} hours={hours}/>
//         <ReportTable hours={hours} reports={reports}/> 
//       </main>
//       <Footer totalLocations={reports}/>
      
//     </div>
//   )
// }

// function LoginForm() {
//   const {login} = useAuth();

//   async function handleSubmit(event) {
//     event.preventDefault();

//     login(event.target.username.value, event.target.password.value)
//   }
//   return (
//     <div className="w-8/12 m-3 mx-auto border-2 border-solid p-7 rounded-xl bg-emerald-300 border-emerald-500">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <label className="block m-2 mt-0 font-bold text-center" htmlFor="username">USER NAME</label>
//           <input className="block w-full p-2 m-2 mx-auto" type="text" name="username" placeholder="User Name"></input>
          
//           <label className="block m-2 mt-5 font-bold text-center" htmlFor="password">PASSWORD</label>
//           <input className="block w-full p-2 m-2 mx-auto" type="password" name="password" placeholder="Password"></input>

//           <button className="block w-full p-4 mx-auto mt-12 rounded bg-emerald-500">SIGN IN</button>
//         </fieldset>
//       </form>
//     </div>
//   )
// }



import axios from "axios"
import Head from "next/head"
import { useState } from "react"
import CookieStandAdmin from "../components/CookieStandAdmin"
import LoginForm from "../components/LoginForm"
import { useAuth } from '../contexts/auth'


export default function Home() {

  const { user, login, logout } = useAuth();

  const [userName, setUserName] = useState(false);

  async function handleLogin(username, password) {

    setUserName(username)
    login(username, password)
  }

  function handleLogout() {
    logout()
    setUserName(false)
  }

  return (
    <>
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
  
      { userName ? <CookieStandAdmin user={userName} logout={handleLogout} /> : <LoginForm onLogin={handleLogin}/> }
    </>
  )
}

