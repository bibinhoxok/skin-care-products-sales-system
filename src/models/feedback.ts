
import { model, models } from "mongoose";
import { zodSchema } from "@zodyac/zod-mongoose";
import { FeedbackSchema } from "@/schemas/feedbackSchema";

const schema = zodSchema(FeedbackSchema);
const FeedbackModel = models.Feedback || model("Feedback", schema ) 
export default FeedbackModel

