import { z } from 'zod';
import { extendZod, zId } from "@zodyac/zod-mongoose";
import { AddressSchema } from './customerSchema';

// Extend zod with the zId and zUUID functions (!!important)
extendZod(z); 

// Define the schema (!!important)
export const OrderSchema = z.object({
    promotion_id: z.optional(z.array(zId("Promotion"))),
    customer_id:  zId("Customer"),
    order_date: z.date().default(new Date()), 
    total_amount: z.number().min(0),
    discounted_amount: z.number().min(0),
    final_amount: z.number().min(0),
    shippingAddress: AddressSchema,
    status: z.enum(["pending","delivering", "completed", "cancelled"]),
    payment_method: z.enum(["cash", "credit_card", "debit_card"]),
    //default value will be generated by mongoose
    createdAt: z.date().default(new Date()), 
    updatedAt: z.date().default(new Date()),
});


// Define the schema with the ID (!!important)
export const zOrderSchemaUdate = OrderSchema.extend({
    _id: zId(), //default value will be generated by mongoose
})

export type Order = z.infer<typeof zOrderSchemaUdate>;