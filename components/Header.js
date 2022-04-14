import Link from "next/link";


export default function Header({ user, logout }) {
    return (
        <header className="flex items-center px-5 py-2 bg-emerald-400 justify-evenly">
          <h1 className="inline-block text-3xl font-bold">Cookie Stand Admin</h1>
          <div className="flex items-center">
            <p className="px-5 py-1 text-black rounded-lg bg-emerald-100 ">{user}</p>
            <button onClick={logout} className="px-3 py-1 m-2 text-white rounded-lg bg-emerald-600">Logout</button>
            <Link href='/overview'>
            <a>
              <button className="inline-block px-2 py-0 bg-gray-100 rounded">Overview</button></a>
            </Link>
          </div>
        </header>
  )
}