import { connectDB } from '@/lib/mongodb';
import CustomerModel from "@/models/customer";
import { CustomerSchema } from '@/schemas/customers/customerSchema';


// Path: api/customer/[id]
//get customer by id
const GET = async (
    request: Request,
    { params }: { params: Promise<{ name: string }> }
  ) => {
    try {
        const name = (await params).name
        await connectDB();
        const customers =  await CustomerModel.findOne({name: { '$regex': name, $options: 'i' }}); //ref: https://www.youtube.com/watch?v=DZBGEVgL2eE Mongoose Crash Course - Beginner Through Advanced
        if (!customers) {
            return new Response("Customer not found", { status: 404 })
        }
        return new Response(JSON.stringify(customers))
        
    } catch (e) {
        return new Response((e as Error).message, { status: 500 })
    }
}