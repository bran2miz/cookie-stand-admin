import Header from "../components/Header"
import Footer from "../components/Footer"
import CreateForm from "../components/CreateForm"

import { hours } from '../hours'
import { useState } from 'react'
import useResource from '../hooks/useResource'
import ReportTable from '../components/ReportTable'

export default function CookieStandAdmin({ user, logout }) {

    const { resources, deleteResource } = useResource();


    const standsCount = resources ? resources.length : 0;
  
    return (
      <>

        <Header user={user} logout={logout}/>
  
        <main className="p-6 bg-emerald-50">
  
          <CreateForm />
          <ReportTable hours={hours} stands={resources || []} deleteStand={deleteResource} />
          

  
        </main>
  
        <Footer totalLocations={standsCount}/>
      </>
    )
  }