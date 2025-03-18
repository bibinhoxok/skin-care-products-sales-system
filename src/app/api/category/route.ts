import { connectDB } from '@/lib/mongodb';
import CategoryModel from "@/models/category";
import { SortOrder } from 'mongoose';
 
const GET = async (req: Request) => {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);
        const id = searchParams.get('id');
        const search = searchParams.get('search') || '';
        const sortOrder = (searchParams.get('sortOrder') || 'desc') as SortOrder;

        const skip = (page - 1) * limit;

        if (id) {
            const category = await CategoryModel.findById(id);
            if (!category) {
                return new Response(JSON.stringify({ message: "Category not found" }), {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            return new Response(JSON.stringify(category), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const query = search
            ? {
                name: { $regex: search, $options: 'i' },
            }
            : {};

        const totalDocs = await CategoryModel.countDocuments(query);
        const categories = await CategoryModel.find(query)
            .sort({ createdAt: sortOrder })
            .skip(skip)
            .limit(limit);

        return new Response(JSON.stringify({
            data: categories,
            page,
            limit,
            totalPages: Math.ceil(totalDocs / limit),
            totalDocs,
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (e) {
        return new Response(JSON.stringify({ message: (e as Error).message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export { GET }
