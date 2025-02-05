import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const filters = [
  { id: "categories", label: "Categories" },
  { id: "size", label: "Select Size" },
  { id: "color", label: "Select Color" },
  { id: "price", label: "Pricing Range" },
  { id: "rating", label: "Select Rating" },
]

export default function FilterSection() {
  return (
    <div className="w-64 space-y-4">
      <div className="flex justify-between items-center bg-[#2a2a2a] p-4 rounded-lg">
        <span className="font-medium">Filter</span>
        <Button variant="secondary" size="sm" className="bg-indigo-600 hover:bg-indigo-700">
          Reset
        </Button>
      </div>

      {filters.map((filter) => (
        <button
          key={filter.id}
          className="w-full flex items-center justify-between p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors"
        >
          <span>{filter.label}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      ))}
    </div>
  )
}

