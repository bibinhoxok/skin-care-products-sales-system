import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Order {
  id: string;
  date: string;
  total: number;
  status: "pending" | "shipped" | "delivered";
}

async function getCustomerOrders(customerId: string): Promise<Order[]> {
  // This is a placeholder for actual data fetching
  // In a real application, you would fetch this data from an API or database
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
  return [
    { id: "1", date: "2023-05-01", total: 125.0, status: "delivered" },
    { id: "2", date: "2023-05-15", total: 75.5, status: "shipped" },
    { id: "3", date: "2023-05-30", total: 250.0, status: "pending" },
  ];
}

export default async function CustomerOrders({
  customerId,
}: {
  customerId: string;
}) {
  const orders = await getCustomerOrders(customerId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "delivered"
                        ? "default"
                        : order.status === "shipped"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
