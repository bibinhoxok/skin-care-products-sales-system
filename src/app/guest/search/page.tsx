import FeaturedProducts from "@/app/components/featurer-products"
import FilterSection from "@/app/components/filter"
import { Search, Bell, Grid, ListIcon } from "lucide-react"


export default function Page() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative flex-1 max-w-md">
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg py-2 px-4 pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-medium">John Quinn</div>
              <div className="text-sm text-gray-400">Admin Profile</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Filters */}
        <FilterSection />

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Products</h1>
            <div className="flex gap-2">
              <button className="p-2 rounded bg-[#2a2a2a] text-gray-400">
                <Grid className="w-5 h-5" />
              </button>
              <button className="p-2 rounded bg-indigo-600">
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  )
}

