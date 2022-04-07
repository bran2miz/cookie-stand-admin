

export default function CreateForm() {

return(
<form
      className="w-11/12 px-3 pb-2 mx-auto text-sm rounded-lg bg-emerald-300"
      
    >
      <h2 className="p-3 text-xl text-center">Create Cookie Stand</h2>

      <div className="flex m-2">
        <label className="pr-2">Location</label>
        <input id="location" type="text" className="flex-grow" required></input>
      </div>

      <div className="flex mt-5">
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-300">
          <label className="block mx-auto text-center">
            Minimum Customers per Hour
          </label>
          <input id="min_cust_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-300">
          <label className="block mx-auto text-center">
            Maximum Customers per Hour
          </label>
          <input id="max_cust_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-300">
          <label className="block text-center">Average Cookies per Sale</label>
          <input
            id="avg_cookies_per_sale"
            type="text"
            className="w-full"
          ></input>
        </div>
        <div className="flex items-center justify-center w-1/4 p-2 mx-1 my-2 bg-emerald-500">
          <button className="w-1/4 mx-1 bg-emerald-500" type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
)
}