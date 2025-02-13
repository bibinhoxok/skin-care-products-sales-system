import { z } from "zod";
import { extendZod, zId, zUUID } from "@zodyac/zod-mongoose";

extendZod(z); // Mở rộng Zod với các hàm từ @zodyac/zod-mongoose

export const OrderSchema = z.object({
  userId: zUUID(), // ID của khách hàng, tham chiếu đến Customer
  products: z.array(
    z.object({
      productId: zUUID(), // ID sản phẩm
      quantity: z.number().min(1), // Số lượng phải >= 1
      unitPrice: z.number().min(0), // Giá tại thời điểm đặt hàng
    })
  ),
  totalAmount: z.number().min(0), // Tổng số tiền của đơn hàng
  status: z
    .enum(["pending", "confirmed", "shipped", "delivered", "canceled"])
    .default("pending"),
  paymentMethod: z.enum(["credit_card", "paypal", "bank_transfer", "cod"]), // Phương thức thanh toán
  shippingAddress: z.object({
    provinceId: z.string().optional(),
    districtId: z.string().optional(),
    communeId: z.string().optional(),
    detail: z.string().min(5), // Địa chỉ chi tiết
  }),
  createdAt: z.date().default(new Date()), // Thời gian tạo đơn hàng
  updatedAt: z.date().default(new Date()), // Thời gian cập nhật đơn hàng
});

// Schema có _id
export const zOrderSchemaUpdate = OrderSchema.extend({
  _id: zUUID(), // ID đơn hàng, do MongoDB sinh ra
});

export type Order = z.infer<typeof OrderSchema>;
