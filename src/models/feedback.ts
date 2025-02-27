import { FeedbackSchema } from "@/schemas/guest/feedbackSchema";
import { model, models } from "mongoose";
import { zodSchema } from "@zodyac/zod-mongoose";

const schema = zodSchema(FeedbackSchema);
const FeedbackModel = models.Feedback || model("Feedback", schema);
export default FeedbackModel;
