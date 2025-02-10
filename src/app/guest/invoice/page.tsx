"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import InvoiceList from "@/app/components/invoice/invoice-list";
import SimpleInvoice from "@/app/components/invoice/invoice-simple";
import InvoiceEmail from "@/app/components/invoice/invoice-email";
import Header from "@/app/components/header";


export default function InvoicesPage() {
  const [activeTab, setActiveTab] = useState("simple"); // Mặc định là Simple Invoice

  return (
   
    <div className="min-h-screen bg-black-950 text-white-200">
         <Header/>
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Invoices</h1>
          <div className="flex gap-2">
          <Button
  variant="outline"
  className={`bg-transparent text-black-200 border-gray-700 hover:bg-purple-700 ${activeTab === "list" ? "bg-white-800" : ""}`}
  onClick={() => setActiveTab("list")}
>
  Invoice List
</Button>
<Button
  variant="outline"
  className={`bg-transparent text-black-200 border-gray-700 hover:bg-purple-700 ${activeTab === "simple" ? "bg-white-800" : ""}`}
  onClick={() => setActiveTab("simple")}
>
  Simple Invoice
</Button>
<Button
  variant="outline"
  className={`bg-transparent text-black-200 border-gray-700 hover:bg-purple-700 ${activeTab === "email" ? "bg-white-800" : ""}`}
  onClick={() => setActiveTab("email")}
>
  Email Invoice
</Button>


</div>

        </div>
      </header>

      <main className="container mx-auto p-6">
        {activeTab === "simple" && <SimpleInvoice />}
        {activeTab === "list" && <InvoiceList />}
        {activeTab === "email" && <InvoiceEmail />}
      </main>
    </div>
  );
}
