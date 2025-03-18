
import { model, models } from "mongoose";
import { zodSchema } from "@zodyac/zod-mongoose";
import { OrderDetailSchema } from "@/schemas/orderDetailSchema";

const schema = zodSchema(OrderDetailSchema);
const OrderDetailModel = models.OrderDetail || model("OrderDetail", schema ) 
export default OrderDetailModel

