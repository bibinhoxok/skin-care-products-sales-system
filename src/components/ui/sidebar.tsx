"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className="fixed top-4 left-4 z-50 bg-black text-white hover:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 mt-16">
          <h2 className="text-2xl font-bold mb-4">Danh mục</h2>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => {
                setSelectedCategory(category)
                setIsOpen(false)
              }}
              className={`w-full justify-start mb-2 ${
                selectedCategory === category ? "bg-black text-white hover:bg-gray-800" : "text-black hover:bg-gray-100"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

