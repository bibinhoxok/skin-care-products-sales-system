"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface QuizQuestionsProps {
  onComplete: (skinType: string) => void
}

export default function QuizQuestions({ onComplete }: QuizQuestionsProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions = [
    {
        question: "Sau khi rửa mặt, da bạn cảm thấy như thế nào?",
        options: [
          { value: "dry", label: "Căng và khô" },
          { value: "normal", label: "Thoải mái và cân bằng" },
          { value: "oily", label: "Vẫn còn hơi nhờn" },
          { value: "combination", label: "Căng ở một số vùng, nhờn ở vùng khác" },
          { value: "sensitive", label: "Bị kích ứng hoặc hơi rát" },
        ],
      },
      {
        question: "Da bạn trông như thế nào vào giữa ngày?",
        options: [
          { value: "dry", label: "Bong tróc hoặc cảm thấy căng" },
          { value: "normal", label: "Trông giống như buổi sáng" },
          { value: "oily", label: "Bóng nhờn, đặc biệt là ở vùng chữ T" },
          { value: "combination", label: "Nhờn vùng chữ T nhưng má bình thường/khô" },
          { value: "sensitive", label: "Xuất hiện mẩn đỏ hoặc kích ứng" },
        ],
      },
      {
        question: "Bạn thường bị mụn bao lâu một lần?",
        options: [
          { value: "dry", label: "Hiếm khi, nhưng có thể có những vùng da khô" },
          { value: "normal", label: "Thỉnh thoảng, nhưng hết nhanh" },
          { value: "oily", label: "Thường xuyên, đặc biệt ở vùng chữ T" },
          { value: "combination", label: "Chủ yếu ở vùng chữ T" },
          { value: "sensitive", label: "Khi dùng sản phẩm mới hoặc lúc căng thẳng" },
        ],
      },
      {
        question: "Lỗ chân lông của bạn trông như thế nào?",
        options: [
          { value: "dry", label: "Gần như không thấy" },
          { value: "normal", label: "Nhìn thấy được nhưng không to" },
          { value: "oily", label: "To và dễ nhận thấy" },
          { value: "combination", label: "To ở vùng chữ T, ít thấy hơn ở má" },
          { value: "sensitive", label: "Thay đổi, nhưng đôi khi có mẩn đỏ xung quanh" },
        ],
      },
      {
        question: "Da bạn phản ứng như thế nào với sản phẩm mới?",
        options: [
          { value: "dry", label: "Thường cảm thấy khô hơn hoặc căng" },
          { value: "normal", label: "Thường thích nghi tốt, không gặp vấn đề" },
          { value: "oily", label: "Có thể tiết nhiều dầu hơn hoặc nổi mụn" },
          { value: "combination", label: "Phản ứng khác nhau ở từng vùng" },
          { value: "sensitive", label: "Thường gây đỏ, rát hoặc kích ứng" },
        ],
      },
      {
        question: "Bạn cảm thấy da mình thế nào vào mùa đông?",
        options: [
          { value: "dry", label: "Rất khô, đôi khi bong tróc" },
          { value: "normal", label: "Không thay đổi nhiều" },
          { value: "oily", label: "Vẫn tiết dầu như bình thường" },
          { value: "combination", label: "Má khô nhưng vùng chữ T vẫn nhờn" },
          { value: "sensitive", label: "Dễ bị kích ứng hoặc đỏ hơn" },
        ],
      },
      {
        question: "Bạn có thường xuyên cảm thấy da bị kích ứng không?",
        options: [
          { value: "dry", label: "Thỉnh thoảng, khi thời tiết hanh khô" },
          { value: "normal", label: "Hiếm khi bị kích ứng" },
          { value: "oily", label: "Không thực sự, chỉ có dầu nhiều" },
          { value: "combination", label: "Chỉ ở một số vùng nhất định" },
          { value: "sensitive", label: "Rất thường xuyên, nhất là khi thay đổi sản phẩm" },
        ],
      },
      {
        question: "Bạn có hay dùng giấy thấm dầu không?",
        options: [
          { value: "dry", label: "Không bao giờ cần dùng" },
          { value: "normal", label: "Rất ít khi dùng" },
          { value: "oily", label: "Dùng nhiều lần mỗi ngày" },
          { value: "combination", label: "Chỉ dùng cho vùng chữ T" },
          { value: "sensitive", label: "Không dùng vì sợ kích ứng" },
        ],
      },
      {
        question: "Khi bạn cười hoặc nói chuyện, da bạn có cảm thấy căng không?",
        options: [
          { value: "dry", label: "Có, và đôi khi còn nứt nẻ" },
          { value: "normal", label: "Không, cảm thấy bình thường" },
          { value: "oily", label: "Không, da mình luôn đủ độ ẩm" },
          { value: "combination", label: "Chỉ ở một số vùng như má" },
          { value: "sensitive", label: "Có, và đôi khi còn bị đỏ" },
        ],
      },
      {
        question: "Khi trang điểm, bạn gặp vấn đề gì với lớp nền?",
        options: [
          { value: "dry", label: "Bị mốc, bong tróc hoặc không bám tốt" },
          { value: "normal", label: "Lớp nền bám tốt cả ngày" },
          { value: "oily", label: "Nhanh bị xuống tông và bóng dầu" },
          { value: "combination", label: "Bị trôi ở vùng chữ T nhưng má vẫn khô" },
          { value: "sensitive", label: "Một số sản phẩm làm da mình bị kích ứng" },
        ],
      },
    ]
  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentStep]: answer }
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Determine skin type based on most frequent answer
      const answerCounts: Record<string, number> = {}
      Object.values(newAnswers).forEach((value) => {
        answerCounts[value] = (answerCounts[value] || 0) + 1
      })

      let maxCount = 0
      let determinedSkinType = ""

      Object.entries(answerCounts).forEach(([type, count]) => {
        if (count > maxCount) {
          maxCount = count
          determinedSkinType = type
        }
      })

      onComplete(determinedSkinType)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-purple-800">Khám phá loại da của bạn</CardTitle>
        <CardDescription className="text-lg">
        Trả lời một vài câu hỏi để nhận được khuyến nghị chăm sóc da cá nhân
        </CardDescription>
        <Progress value={(currentStep / questions.length) * 100} className="h-2 mt-4" />
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-6">{questions[currentStep].question}</h2>
          <RadioGroup className="space-y-4">
            {questions[currentStep].options.map((option, index) => (
              <div key={index} className="flex items-center">
                <RadioGroupItem
                  id={`option-${index}`}
                  value={option.value}
                  checked={answers[currentStep] === option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex flex-1 items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Question {currentStep + 1} of {questions.length}
        </div>
        {currentStep < questions.length - 1 && (
          <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={!answers[currentStep]}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

