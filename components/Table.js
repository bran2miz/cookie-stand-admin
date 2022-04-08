
export default function Table({storeList}) {
  return(
    <div className = "p-3 text-center">  
    <p className='mt-6'>{"{"}&quot;location&quot;:{storeList.location},&quot;minCustomers&quot;:{storeList.min},&quot;maxCustomers&quot;:{storeList.max},&quot;avgCookies&quot;:{storeList.avg}{"}"}
    </p>
    </div>
  )
  }
