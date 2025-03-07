import Header from '@/components/Dashboard/Header'
import Sidebar from '@/components/Dashboard/Sidebar'
import PortfolioValueTracker from '@/components/Portfolio/PortfolioValueTracker'

export default function PortfolioValuePage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-800 to-gray-900 text-black">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-black via-gray-800 to-gray-900">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-white text-3xl font-medium">Portfolio Value Tracker</h3>
            <div className="mt-8">
              <PortfolioValueTracker />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

