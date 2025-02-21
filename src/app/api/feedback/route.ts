import { connectDB } from '@/lib/mongodb';
import FeedbackModel from '@/models/feedback';
import { FeedbackSchema } from '@/schemas/guest/feedbackSchema';
import { NextRequest, NextResponse } from 'next/server';

// Lấy tất cả feedback
export const GET = async () => {
    try {
        await connectDB();
        const feedbacks = await FeedbackModel.find({}, 'FeedbackID Date CustomerID ProductID Rating Comment');
        return NextResponse.json(feedbacks, { status: 200 });
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

// Thêm feedback mới
export const POST = async (req: NextRequest) => {
    try {
        await connectDB(); // Đảm bảo kết nối DB trước khi xử lý dữ liệu

        const bodyText = await req.text(); // Đọc raw text của request trước khi parse JSON
        let data;
        try {
            data = JSON.parse(bodyText); // Parse JSON thủ công để bắt lỗi
        } catch (parseError) {
            return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
        }

        // Validate dữ liệu đầu vào
        const feedback = FeedbackSchema.safeParse(data);
        if (!feedback.success) {
            return NextResponse.json({ error: feedback.error.format() }, { status: 400 });
        }

        // Lưu vào database
        const newFeedback = await FeedbackModel.create(feedback.data);

        return NextResponse.json(newFeedback, { status: 201 });
    } catch (error) {
        console.error("Error saving feedback:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
