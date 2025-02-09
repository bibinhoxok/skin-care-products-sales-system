
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@mui/material"
import { Download, Send, Trash2 } from "lucide-react"

const invoices = [
  {
    id: 1,
    name: "Ryan MacLeod",
    product: "Ke Arrow Silicon",
    address: "2211 Jones Avenue,Winston Salem FL 27107",
    amount: "$5500",
    date: "23 Feb, 2021",
  },
  {
    id: 2,
    name: "Penelope Stewart",
    product: "Kronos Minimalist",
    address: "3154 Sampson Street,Aurora CT 80014",
    amount: "$433",
    date: "14 Apr, 2021",
  },
  {
    id: 3,
    name: "Diane Slater",
    product: "Mechanical Watch",
    address: "49 Stamford Road. West Chicago, IL 60185",
    amount: "$255",
    date: "16 Mar, 2021",
  },
  {
    id: 4,
    name: "Amy Mills",
    product: "Engraved Black Alloy",
    address: "2698 Northumberland. Melbourne, FL 32904",
    amount: "$555",
    date: "17 Mar, 2021",
  },
]

export default function InvoiceList() {
  return (
    <div className="space-y-4">
      {invoices.map((invoice) => (
        <Card key={invoice.id} className="bg-white-900 border-gray-800 ">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border border-gray-700">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center text-lg font-semibold">
                  {invoice.name[0]}
                </div>
              </Avatar>
              <div>
                <h3 className="font-semibold">{invoice.name}</h3>
                <p className="text-sm text-black">{invoice.product}</p>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-black">{invoice.address}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{invoice.amount}</p>
              <p className="text-sm text-black">Date on: {invoice.date}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="border-gray-700">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-red-900/20 hover:text-red-500">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

