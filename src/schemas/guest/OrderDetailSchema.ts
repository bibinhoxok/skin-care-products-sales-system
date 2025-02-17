import { z } from "zod";
import { extendZod, zId, zUUID } from "@zodyac/zod-mongoose";

extendZod(z); // Mở rộng Zod với các hàm từ @zodyac/zod-mongoose

export const OrderDetailSchema = z.object({
  orderId: zUUID(), // ID của đơn hàng, tham chiếu đến Orders
  productId: zUUID(), // ID của sản phẩm, tham chiếu đến Products
  quantity: z.number().min(1), // Số lượng sản phẩm, tối thiểu là 1
  unitPrice: z.number().min(0), // Giá của sản phẩm tại thời điểm đặt hàng
  subtotal: z.number().min(0).optional(), // Tổng tiền cho sản phẩm (quantity * unitPrice)
  createdAt: z.date().default(new Date()), // Thời gian tạo chi tiết đơn hàng
  updatedAt: z.date().default(new Date()), // Thời gian cập nhật chi tiết đơn hàng
});

// Schema có _id
export const zOrderDetailSchemaUpdate = OrderDetailSchema.extend({
  _id: zUUID(), // ID chi tiết đơn hàng, do MongoDB sinh ra
});

export type OrderDetail = z.infer<typeof OrderDetailSchema>;
