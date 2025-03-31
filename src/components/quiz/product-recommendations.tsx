"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface ProductRecommendationsProps {
  skinType: string
  onRestart: () => void
}

export default function ProductRecommendations({ skinType, onRestart }: ProductRecommendationsProps) {
  const skinTypeInfo = {
    normal: {
        description:
          "Da của bạn cân bằng tốt - không quá dầu cũng không quá khô. Lỗ chân lông nhỏ, kết cấu mịn màng và hiếm khi bị mụn hoặc kích ứng.",
        image: "/placeholder.svg?height=200&width=200",
        morning: [
          "Sữa rửa mặt dịu nhẹ",
          "Nước hoa hồng cấp ẩm",
          "Kem dưỡng ẩm nhẹ",
          "Kem chống nắng phổ rộng SPF 30+",
        ],
        evening: [
          "Sữa rửa mặt dịu nhẹ",
          "Nước hoa hồng cấp ẩm",
          "Tinh chất chứa chất chống oxy hóa",
          "Kem dưỡng ẩm nhẹ",
        ],
        products: [
          {
            name: "CeraVe Hydrating Facial Cleanser",
            description: "Sữa rửa mặt dịu nhẹ, cấp ẩm mà không làm khô da",
            price: "$15",
            image: "/placeholder.svg?height=200&width=200&text=CeraVe",
          },
          {
            name: "Paula's Choice Skin Balancing Pore-Reducing Toner",
            description: "Cân bằng da và giúp thu nhỏ lỗ chân lông",
            price: "$21",
            image: "/placeholder.svg?height=200&width=200&text=Paula's+Choice",
          },
          {
            name: "Neutrogena Hydro Boost Water Gel",
            description: "Kem dưỡng ẩm dạng gel nhẹ với axit hyaluronic",
            price: "$19",
            image: "/placeholder.svg?height=200&width=200&text=Neutrogena",
          },
          {
            name: "La Roche-Posay Anthelios Light Fluid SPF 60",
            description: "Kem chống nắng nhẹ, không gây nhờn rít",
            price: "$30",
            image: "/placeholder.svg?height=200&width=200&text=La+Roche-Posay",
          },
        ],
      },
      dry: {
        description:
          "Da của bạn thường cảm thấy căng, đặc biệt là sau khi rửa mặt. Có thể bị bong tróc, xuất hiện vùng da thô ráp, và nếp nhăn dễ thấy hơn do thiếu độ ẩm.",
        image: "/placeholder.svg?height=200&width=200",
        morning: [
          "Sữa rửa mặt dạng kem hoặc dầu",
          "Nước hoa hồng cấp ẩm (không cồn)",
          "Tinh chất cấp ẩm với axit hyaluronic",
          "Kem dưỡng ẩm dày",
          "Dầu dưỡng da mặt (tùy chọn)",
          "Kem chống nắng phổ rộng SPF 30+",
        ],
        evening: [
          "Sữa rửa mặt dạng kem hoặc dầu",
          "Nước hoa hồng cấp ẩm",
          "Tinh chất cấp ẩm",
          "Kem dưỡng ẩm ban đêm",
          "Dầu dưỡng da mặt",
        ],
        products: [
          {
            name: "Kiehl's Ultra Facial Cream",
            description: "Kem dưỡng ẩm sâu giúp da ẩm mượt suốt 24 giờ",
            price: "$32",
            image: "/placeholder.svg?height=200&width=200&text=Kiehl's",
          },
          {
            name: "First Aid Beauty Ultra Repair Cream",
            description: "Dưỡng ẩm mạnh mẽ cho da khô, nhạy cảm",
            price: "$34",
            image: "/placeholder.svg?height=200&width=200&text=First+Aid+Beauty",
          },
          {
            name: "The Ordinary Hyaluronic Acid 2% + B5",
            description: "Tinh chất cấp ẩm giúp giữ nước cho da",
            price: "$7",
            image: "/placeholder.svg?height=200&width=200&text=The+Ordinary",
          },
          {
            name: "Weleda Skin Food",
            description: "Kem dưỡng siêu dày cho làn da rất khô",
            price: "$19",
            image: "/placeholder.svg?height=200&width=200&text=Weleda",
          },
        ],
      },
      oily: {
        description:
          "Da của bạn tiết nhiều dầu, khiến bề mặt luôn bóng nhờn. Bạn có thể có lỗ chân lông to và dễ bị mụn đầu đen, mụn trứng cá.",
        image: "/placeholder.svg?height=200&width=200",
        morning: [
          "Sữa rửa mặt dạng gel hoặc tạo bọt",
          "Nước hoa hồng không cồn",
          "Kem dưỡng ẩm nhẹ, không chứa dầu",
          "Kem chống nắng không chứa dầu SPF 30+",
        ],
      
        evening: [
            "Gel rửa mặt hoặc sữa rửa mặt tạo bọt",
            "Toner tẩy tế bào chết chứa BHA/axit salicylic",
            "Kem dưỡng ẩm nhẹ, không chứa dầu",
            "Sản phẩm trị mụn tại chỗ (nếu cần)",
          ],
          products: [
            {
              name: "La Roche-Posay Effaclar Purifying Foaming Gel",
              description: "Sữa rửa mặt thanh lọc dành cho da dầu",
              price: "$23",
              image: "/placeholder.svg?height=200&width=200&text=La+Roche-Posay",
            },
            {
              name: "Paula's Choice 2% BHA Liquid Exfoliant",
              description: "Giúp làm sạch lỗ chân lông và giảm dầu thừa",
              price: "$30",
              image: "/placeholder.svg?height=200&width=200&text=Paula's+Choice",
            },
            {
              name: "Neutrogena Oil-Free Moisturizer",
              description: "Dưỡng ẩm nhẹ, không chứa dầu",
              price: "$12",
              image: "/placeholder.svg?height=200&width=200&text=Neutrogena",
            },
            {
              name: "Innisfree No Sebum Mineral Powder",
              description: "Kiểm soát bóng dầu suốt cả ngày",
              price: "$8",
              image: "/placeholder.svg?height=200&width=200&text=Innisfree",
            },
          ],
          
          combination: {
            description:
              "Da của bạn có đặc điểm hỗn hợp - thường bị nhờn ở vùng chữ T (trán, mũi, cằm) và bình thường đến khô ở má và các khu vực khác trên mặt.",
            image: "/placeholder.svg?height=200&width=200",
            morning: [
              "Sữa rửa mặt tạo bọt dịu nhẹ",
              "Toner cân bằng da",
              "Kem dưỡng ẩm dạng gel nhẹ",
              "Kem chống nắng không dầu SPF 30+",
            ],
            evening: [
              "Sữa rửa mặt tạo bọt dịu nhẹ",
              "Toner cân bằng da",
              "Serum dưỡng ẩm",
              "Kem dưỡng ẩm nhẹ (nhiều hơn ở vùng da khô)",
              "Sản phẩm trị mụn cho vùng da dầu (nếu cần)",
            ],
            products: [
              {
                name: "Cetaphil Daily Facial Cleanser",
                description: "Sữa rửa mặt dịu nhẹ không làm khô da",
                price: "$14",
                image: "/placeholder.svg?height=200&width=200&text=Cetaphil",
              },
              {
                name: "Klairs Supple Preparation Facial Toner",
                description: "Toner dưỡng ẩm và cân bằng da",
                price: "$22",
                image: "/placeholder.svg?height=200&width=200&text=Klairs",
              },
              {
                name: "Clinique Dramatically Different Moisturizing Gel",
                description: "Kem dưỡng dạng gel nhẹ giúp cân bằng da hỗn hợp",
                price: "$29",
                image: "/placeholder.svg?height=200&width=200&text=Clinique",
              },
              {
                name: "Origins Clear Improvement Active Charcoal Mask",
                description: "Mặt nạ than hoạt tính giúp kiểm soát dầu và làm sạch lỗ chân lông",
                price: "$26",
                image: "/placeholder.svg?height=200&width=200&text=Origins",
              },
            ],
          },
          
          sensitive: {
            description:
              "Da của bạn dễ bị kích ứng với các sản phẩm hoặc yếu tố môi trường, gây đỏ, ngứa, nóng rát hoặc phát ban. Bạn có thể gặp các tình trạng như rosacea hoặc eczema.",
            image: "/placeholder.svg?height=200&width=200",
            morning: [
              "Sữa rửa mặt dịu nhẹ, không chứa hương liệu",
              "Toner dịu nhẹ, không chứa cồn (tuỳ chọn)",
              "Kem dưỡng ẩm không chứa hương liệu với thành phần làm dịu",
              "Kem chống nắng khoáng chất SPF 30+",
            ],
            evening: [
              "Sữa rửa mặt dịu nhẹ, không chứa hương liệu",
              "Toner dịu nhẹ, không chứa cồn (tuỳ chọn)",
              "Kem dưỡng ẩm không chứa hương liệu với thành phần làm dịu",
              "Dầu dưỡng da giúp làm dịu da (tuỳ chọn)",
            ],
            products: [
              {
                name: "Vanicream Gentle Facial Cleanser",
                description: "Sữa rửa mặt dịu nhẹ không chứa các thành phần gây kích ứng",
                price: "$9",
                image: "/placeholder.svg?height=200&width=200&text=Vanicream",
              },
              {
                name: "Avène Thermal Spring Water",
                description: "Xịt khoáng giúp làm dịu và giảm kích ứng da",
                price: "$14",
                image: "/placeholder.svg?height=200&width=200&text=Avène",
              },
              {
                name: "La Roche-Posay Toleriane Double Repair Face Moisturizer",
                description: "Kem dưỡng ẩm không chứa hương liệu dành cho da nhạy cảm",
                price: "$20",
                image: "/placeholder.svg?height=200&width=200&text=La+Roche-Posay",
              },
              {
                name: "EltaMD UV Clear Broad-Spectrum SPF 46",
                description: "Kem chống nắng khoáng chất dịu nhẹ dành cho da nhạy cảm",
                price: "$37",
                image: "/placeholder.svg?height=200&width=200&text=EltaMD",
              },
            ],
          },
          
    },
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-800">Kết quả loại da của bạn</CardTitle>
          <CardDescription className="text-lg">Dựa trên câu trả lời của bạn, loại da của bạn là:</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 capitalize">{skinType} Skin</h2>
            <p className="text-lg max-w-2xl mx-auto">
              {skinTypeInfo[skinType as keyof typeof skinTypeInfo].description}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800">Quy trình chăm sóc da cá nhân của bạn</CardTitle>
          <CardDescription>Thực hiện theo lịch trình này để có kết quả tốt nhất cho bạn {skinType} skin type</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="morning">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="morning">Lịch trình buổi sáng </TabsTrigger>
              <TabsTrigger value="evening">Lịch trình buổi chiều</TabsTrigger>
            </TabsList>
            <TabsContent value="morning" className="mt-6">
              <ol className="space-y-4">
                {skinTypeInfo[skinType as keyof typeof skinTypeInfo].morning.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="text-lg">{step}</div>
                  </li>
                ))}
              </ol>
            </TabsContent>
            <TabsContent value="evening" className="mt-6">
              <ol className="space-y-4">
                {skinTypeInfo[skinType as keyof typeof skinTypeInfo].evening.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="text-lg">{step}</div>
                  </li>
                ))}
              </ol>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
  <CardHeader>
    <CardTitle className="text-2xl font-bold text-purple-800">Sản phẩm được đề xuất</CardTitle>
    <CardDescription>Những sản phẩm này là lý tưởng cho bạn {skinType} skin type</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid gap-6 sm:grid-cols-2">
      {skinTypeInfo[skinType as keyof typeof skinTypeInfo].products.map((product, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <Link href={`/product/}`} className="relative w-full sm:w-1/3 h-40">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover cursor-pointer" />
            </Link>
            <div className="p-6 flex-1">
              <div className="flex flex-col h-full">
                <div>
                  <Link href={`/product/`}>
                    <h3 className="font-semibold text-lg hover:text-purple-700 cursor-pointer">{product.name}</h3>
                  </Link>
                  <p className="text-muted-foreground mt-1">{product.description}</p>
                </div>
                <div className="text-lg font-bold text-purple-700 mt-auto pt-2">{product.price}</div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </CardContent>
</Card>

      <div className="flex justify-center">
        <Button onClick={onRestart} className="bg-purple-700 hover:bg-purple-800">
          <CheckCircle2 className="mr-2 h-4 w-4" /> Làm lại bài kiểm tra
        </Button>
      </div>
    </div>
  )
}

