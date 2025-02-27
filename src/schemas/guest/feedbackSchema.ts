import { z } from "zod";
import { extendZod, zId, zUUID } from "@zodyac/zod-mongoose";

// Mở rộng Zod với các tính năng của Mongoose
extendZod(z); 

export const FeedbackSchema = z.object({
   
    CustomerID: zId("Customer"), // ID của khách hàng
    ProductID: zUUID(), // ID của sản phẩm
    Rating: z.number().min(1).max(5), // Đánh giá từ 1 đến 5 sao
    Comment: z.string().optional(), // Bình luận có thể không bắt buộc
    CreatedAt: z.date().default(new Date()), // Ngày tạo
    UpdatedAt: z.date().default(new Date()), // Ngày cập nhật
});

// Schema update với ID
export const zFeedbackSchemaUpdate = FeedbackSchema.extend({
    _id: zUUID(),
});

// Kiểu TypeScript
export type Feedback = z.infer<typeof FeedbackSchema>;
