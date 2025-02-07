import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Customer {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  phone: string;
  address: string;
}

async function getCustomer(id: string): Promise<Customer | undefined> {
  // This is a placeholder for actual data fetching
  // In a real application, you would fetch this data from an API or database
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  const customers = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "active" as "active",
      phone: "123-456-7890",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@example.com",
      status: "inactive" as "inactive",
      phone: "098-765-4321",
      address: "456 Oak Ave, Somewhere, USA",
    },
  ];
  return customers.find((c) => c.id === id);
}

export default async function CustomerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const customer = await getCustomer(params.id);

  if (!customer) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/customers" passHref>
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Customers
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{customer.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p>{customer.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Phone</h3>
              <p>{customer.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Address</h3>
              <p>{customer.address}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <Badge
                variant={customer.status === "active" ? "default" : "secondary"}
              >
                {customer.status}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
