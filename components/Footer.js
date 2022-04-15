

// export default function Footer({totalLocations}) {
//   return (
//       <footer className="px-5 py-3 bg-emerald-500">
//           <p className="text-sm text-center">{totalLocations} Locations World Wide</p>
//       </footer>
// )
// }

export default function Footer({ stores }) {
  return (
      <footer className="p-4 mt-1 bg-green-400">
          <p className="flex items-center justify-center text-lg font-medium">{stores && stores.length} Locations World Wide</p>
      </footer>
  );
}