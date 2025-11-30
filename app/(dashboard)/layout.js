import Navbar from '@/components/Navbar'
import MobileSidebar from '@/components/MobileSidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <MobileSidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

