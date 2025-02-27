
import { CustomerSchema } from "@/schemas/customers/customerSchema";
import { model, models } from "mongoose";
import { zodSchema } from "@zodyac/zod-mongoose";
import { PaymentSchema } from "@/schemas/guest/PaymentSchema";


const schema = zodSchema(PaymentSchema);
const CustomerModel = models.Customer || model("Customer", schema ) 
export default CustomerModel
