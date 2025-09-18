import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "SwiftCart. - Admin",
    description: "SwiftCart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
