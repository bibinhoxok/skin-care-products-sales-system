"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Printer, Send } from "lucide-react"

export default function SimpleInvoice() {
  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="max-w-4xl mx-auto border-2 border-gray-700 ">
        <CardHeader>
          <div className="flex justify-between items-center mb-8">
          <div className="space-y-2">
  <div className="flex gap-4">
    <span className="text-black">Date</span>
    <span>May 22, 2021</span>
  </div>
  <div className="flex gap-4">
    <span className="text-black">Transaction id:</span>
    <span>#18414</span>
  </div>
</div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">From:</h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium">eBazar Shop</p>
                <p>111 Berkeley Rd</p>
                <p>STREET ON THE FOSSE, Poland</p>
                <p>Email: info@ebazar.com</p>
                <p>Phone: +44 888 666 3333</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">To:</h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium">Dianalove</p>
                <p>45 Larissa Court</p>
                <p>Victoria, BIRDWOODTON</p>
                <p>Email: Dianalove@gmail.com</p>
                <p>Phone: +66 243 456 789</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-16 text-black">#</TableHead>
      <TableHead className="text-black">ITEM</TableHead>
      <TableHead className="text-black">DESCRIPTION</TableHead>
      <TableHead className="text-right text-black">ITEM COST</TableHead>
      <TableHead className="text-right text-black">PRODUCTS ITEM</TableHead>
      <TableHead className="text-right text-black">TOTAL</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="text-black">1</TableCell>
      <TableCell className="text-black">Rado Watch</TableCell>
      <TableCell className="text-black">Men Watch for Gold Color</TableCell>
      <TableCell className="text-right text-black">$330.00</TableCell>
      <TableCell className="text-right text-black">1</TableCell>
      <TableCell className="text-right text-black">$330.00</TableCell>
    </TableRow>
  </TableBody>
</Table>


          <div className="mt-8 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$330.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax(18%)</span>
              <span>$59.40</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$389.00</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="font-semibold">Terms & Condition</h3>
            <p className="text-sm text-muted-foreground">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
  <Send className="mr-2 h-4 w-4" />
  Send Invoice
</Button>

        </CardFooter>
      </Card>
    </div>
  )
}

