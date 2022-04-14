// import useResource from "../hooks/useResource";
// import { useAuth } from "../contexts/auth";


// export default function CreateForm({hours}) {

//   const {user} = useAuth();

//   const {createAResource} = useResource();


//   function handleCreate(event) {
//     event.preventDefault();
    
//     let hourChart = [];
//     let max_cust_per_hour = parseInt(event.target.max_cust_per_hour.value)
//     let min_cust_per_hour = parseInt(event.target.min_cust_per_hour.value);
//     let avg_cookies_per_sale = parseFloat(event.target.avg_cookies_per_sale.value);

//     for (let hour in hours) {
//       let hourChartData = Math.round((
//         Math.random() * (max_cust_per_hour - min_cust_per_hour) + min_cust_per_hour) * avg_cookies_per_sale
//       );
//       hourChart.push(hourChartData)
//     }

//     let storeList = {
//       owner: null,
//       max_cust_per_hour,
//       min_cust_per_hour,
//       avg_cookies_per_sale,
//       location: event.target.location.value,
//       hourly_sales: JSON.stringify(hourChart),
//     };
//     createAResource(report)
//     }
  
//   return(
//     <>
//     <form onSubmit={handleCreate} className="w-11/12 px-3 pb-2 mx-auto text-sm rounded-lg bg-emerald-300">
//       <h2 className="p-3 text-xl font-bold text-center">Create Cookie Stand</h2>
//         <div className="flex m-2">
//           <label className="pr-2">Location</label>
//           <input name="location" type="text" className="flex-grow" required></input>
//         </div>

//         <div className="flex mt-5">
//           <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
//           <label className="block mx-auto text-center">
//             Minimum Customers per Hour
//           </label>
//           <input name="min_cust_per_hour" type="text"  className="w-full"></input>
//         </div>
//         <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
//           <label className="block mx-auto text-center">
//             Maximum Customers per Hour
//           </label>
//           <input name="max_cust_per_hour" type="text" className="w-full"></input>
//         </div>
//         <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
//           <label className="block text-center">Average Cookies per Sale</label>
//           <input name="avg_cookies_per_sale" type="text"
//           className="w-full">

//           </input>
//         </div>
//         <div className="flex items-center justify-center w-1/4 p-2 mx-1 my-2 bg-emerald-500">
//           <button className="w-1/4 mx-1 bg-emerald-500" type="submit">
//           Create
//           </button>
//         </div>
//       </div>
//     </form>
//   </>
// )
// }

import useResource from '../hooks/useResource'
import { useAuth } from '../contexts/auth'


export default function CreateForm(props) {
    const { user } = useAuth();
    const { createResource } = useResource();

    function handleSubmit(event) {
      event.preventDefault();

      const stand = {
        location: event.target.location.value,
        minimum_customers_per_hour: parseInt(event.target.minimum_customers_per_hour.value),
        maximum_customers_per_hour: parseInt(event.target.maximum_customers_per_hour.value),
        average_cookies_per_sale: parseFloat(event.target.average_cookies_per_sale.value),
        owner: user.id,
      }
      createResource(stand)
      // props.onCreate(event.target.location.value, event.target.min.value, event.target.max.value, event.target.avg.value)
    }

    return (
      <form onSubmit={handleSubmit} className="w-8/12 px-10 pt-5 pb-3 mx-auto text-sm border-2 border-solid rounded-lg bg-emerald-200 border-emerald-400">
      <div className="flex items-end">
        <div className="block w-2/3 m-2">
          <label className="block w-full p-1 pr-2 font-bold text-center">ADD LOCATION</label>
          <input name="location" type="text" className="block w-full p-2 mt-2" placeholder="Cookie Stand Location" required></input>
        </div>
        <div className="flex items-center justify-center w-1/3 h-12 p-2 my-2 ml-10 rounded bg-emerald-500">
          <button className="w-full mx-1 bg-emerald-500" type="submit">
            CREATE STAND
          </button>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="w-1/3 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto font-bold text-center">
            MINIMUM CUSTOMERS PER HOUR
          </label>
          <input name="minimum_customers_per_hour" type="text" className="w-full p-2 mt-2" defaultValue="0"></input>
        </div>
        <div className="w-1/3 p-2 mx-10 my-2 rounded bg-emerald-200">
          <label className="block mx-auto font-bold text-center">
            MAXIMUM CUSTOMERS PER HOUR
          </label>
          <input name="maximum_customers_per_hour" type="text" className="w-full p-2 mt-2" defaultValue="0"></input>
        </div>
        <div className="w-1/3 p-2 mx-1 my-2 font-bold rounded bg-emerald-200">
          <label className="block text-center">AVERAGE COOKIES PER SALE</label>
          <input
            name="average_cookies_per_sale"
            type="text"
            className="w-full p-2 mt-2"
            defaultValue="0"
          ></input>
        </div>
      </div>
    </form>
  );
}
