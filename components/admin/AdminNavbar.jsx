'use client'
import Link from "next/link"

const AdminNavbar = () => {
    return (
        <div className="flex items-center justify-between px-12 py-3 border-b border-gray-800 bg-gray-900 text-gray-200 shadow-md transition-all">
            {/* Logo */}
            <Link href="/" className="relative text-4xl font-semibold text-white">
                <span className="text-green-500">swift</span>cart
                <span className="text-green-500 text-5xl leading-0">.</span>
                <p className="absolute text-xs font-semibold -top-1 -right-14 px-3 py-0.5 rounded-full flex items-center gap-2 text-white bg-green-600 shadow">
                    Admin
                </p>
            </Link>

            {/* Greeting */}
            <div className="flex items-center gap-3">
                <p className="text-gray-300">Hi, <span className="font-semibold text-green-400">Admin</span></p>
            </div>
        </div>
    )
}

export default AdminNavbar
