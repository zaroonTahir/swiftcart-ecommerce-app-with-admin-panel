'use client'
import Link from "next/link"

const StoreNavbar = () => {
    return (
        <div className="flex items-center justify-between px-12 py-3 border-b border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors duration-300">
            <Link href="/" className="relative text-4xl font-semibold text-gray-100">
                <span className="text-green-500">swift</span>cart
                <span className="text-green-500 text-5xl leading-0">.</span>
                <p className="absolute text-xs font-semibold -top-1 -right-11 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-600">
                    Store
                </p>
            </Link>
            <div className="flex items-center gap-3">
                <p className="text-gray-300">Hi, Seller</p>
            </div>
        </div>
    )
}

export default StoreNavbar
