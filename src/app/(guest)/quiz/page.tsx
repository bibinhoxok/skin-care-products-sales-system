"use client"

import ProductRecommendations from "@/components/quiz/product-recommendations"
import QuizQuestions from "@/components/quiz/quiz-questions"
import { useState } from "react"

export default function SkinTypeQuiz() {
  const [skinType, setSkinType] = useState<string | null>(null)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleQuizComplete = (determinedSkinType: string) => {
    setSkinType(determinedSkinType)
    setQuizComplete(true)
  }

  const restartQuiz = () => {
    setSkinType(null)
    setQuizComplete(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {!quizComplete ? (
          <QuizQuestions onComplete={handleQuizComplete} />
        ) : (
          <ProductRecommendations skinType={skinType as string} onRestart={restartQuiz} />
        )}
      </div>
    </div>
  )
}

