import { hours } from "../hours";
import { delete_icon } from '../public/icon'

export default function ReportTable({stands, deleteStand }) {
    if (stands && stands.length == 0) {
        return (
            <h2 className="w-8/12 mx-auto mt-5 text-2xl font-medium text-center">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <table className="w-8/12 px-3 pb-2 mx-auto my-5 text-sm bg-green-400">
                <thead>
                    <tr>
                        <th className="border border-black">Location</th>
                        {hours.map(hour => <th key={hour} className="border border-black">{hour}</th>)}
                        <th className="border border-black">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {stands.map((stand) => (
                        <CookieStandRow key={stand.id} report={stand} deleteStand={deleteStand} />
                    ))}
                    <tr>
                        <td className="font-bold text-center border border-black">Totals</td>
                        {hours.map(hour => <td key={hour} className="font-bold text-center border border-black">N/A</td>)}
                        <td className="font-bold text-center border border-black">N/A</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function CookieStandRow({ report, deleteStand }) {

    function handleDelete() {
        deleteStand(report.id);
    }

    if (report.hourly_sales.length == 0) {
        report.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <>
        <tr>
            
            <td className="flex justify-between p-2 pl-4 font-medium text-center bg-green-200 border border-black">{report.location}
            <div className="pr-2" onDelete={handleDelete}>
                {delete_icon}
                </div>        
            </td>
            {report.hourly_sales.map((slot, index) => <td key={index} className="text-center bg-green-200 border border-black">{slot}</td>)}
            <td className="font-medium text-center bg-green-200 border border-black">{report.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
        </>
    );
}