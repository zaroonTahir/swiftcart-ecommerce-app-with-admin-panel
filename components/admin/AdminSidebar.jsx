'use client'

import { usePathname } from "next/navigation"
import { HomeIcon, ShieldCheckIcon, StoreIcon, TicketPercentIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { assets } from "@/assets/assets"

const AdminSidebar = () => {
    const pathname = usePathname()

    const sidebarLinks = [
        { name: 'Dashboard', href: '/admin', icon: HomeIcon },
        { name: 'Stores', href: '/admin/stores', icon: StoreIcon },
        { name: 'Approve Store', href: '/admin/approve', icon: ShieldCheckIcon },
        { name: 'Coupons', href: '/admin/coupons', icon: TicketPercentIcon },
    ]

    return (
        <div className="inline-flex h-full flex-col gap-5 border-r border-gray-800 bg-gray-900 text-gray-300 sm:min-w-60">
            {/* Admin Info */}
            <div className="flex flex-col gap-3 justify-center items-center pt-8 max-sm:hidden">
                <Image
                    className="w-14 h-14 rounded-full border-2 border-green-500 shadow-md"
                    src={assets.gs_logo}
                    alt="Admin Logo"
                    width={80}
                    height={80}
                />
                <p className="text-gray-100 font-semibold">Hi, GreatStack</p>
            </div>

            {/* Sidebar Links */}
            <div className="max-sm:mt-6 flex flex-col gap-1">
                {sidebarLinks.map((link, index) => {
                    const isActive = pathname === link.href
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            className={`relative flex items-center gap-3 p-2.5 rounded-md transition-all duration-300
                                ${isActive
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'}
                            `}
                        >
                            <link.icon size={18} className="sm:ml-5" />
                            <p className="max-sm:hidden">{link.name}</p>
                            {isActive && (
                                <span className="absolute bg-green-400 right-0 top-1.5 bottom-1.5 w-1 sm:w-1.5 rounded-l"></span>
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminSidebar
