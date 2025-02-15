import { model, models } from "mongoose";
import { zodSchema } from "@zodyac/zod-mongoose";
import { zOrderDetailSchemaUpdate } from "@/schemas/OrderDetailSchema";

const schema = zodSchema(zOrderDetailSchemaUpdate);
const OrderDetailModel = models.OrderDetail || model("OrderDetail", schema);
export default OrderDetailModel;
