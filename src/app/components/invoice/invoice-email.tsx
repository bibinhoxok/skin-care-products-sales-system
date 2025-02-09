"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InvoiceEmail() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <Card className="max-w-3xl mx-auto bg-card border-2 border-gray-700">
        <CardHeader className="space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">$389.00 Paid</h1>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-xl">Thanks for using eBazar.</h2>
            <div className="text-sm text-black">
              <p>Attn: Dianalove Winston Salem FL 27107 Email: Dianalove@gmail.com</p>
              <p>Phone: +88 123 456 789</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
          <TableHeader>
  <TableRow>
    <TableHead className="text-black">Description</TableHead>
    <TableHead className="text-right text-black">Amount</TableHead>
  </TableRow>
</TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Rado Watch</TableCell>
                <TableCell className="text-right">$ 330.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1 Year Product Warranty</TableCell>
                <TableCell className="text-right">$ 10.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Production Transportation</TableCell>
                <TableCell className="text-right">$ 49.00</TableCell>
              </TableRow>
              <TableRow className="font-medium">
                <TableCell>Total</TableCell>
                <TableCell className="text-right">$389.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex-col space-y-4 text-center text-sm text-muted-foreground">
          <a href="#" className="hover:underline">
            View in browser
          </a>
          <p>PXL Inc. 47 Aurora St. South West, CT 06074</p>
          <p>
            Questions? Email{" "}
            <a href="mailto:info@pixelwibes.com" className="hover:underline">
              info@pixelwibes.com
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

