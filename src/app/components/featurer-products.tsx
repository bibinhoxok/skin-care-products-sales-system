import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Hydrating Serum", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Gentle Cleanser", price: 24.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Moisturizing Cream", price: 39.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Exfoliating Scrub", price: 34.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-lg font-semibold mt-2">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

