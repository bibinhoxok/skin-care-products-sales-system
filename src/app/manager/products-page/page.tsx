"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Eye, Plus, Trash2, ArrowLeft, Search } from "lucide-react"

// Define interfaces for our types
interface Product {
  id: number
  name: string
  category: string
  price: string
  stock: number
  sold: number
  image: string
}

interface NewProduct {
  name: string
  category: string
  price: string
  stock: string
  sold: string
  image: string
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Sữa rửa mặt dịu nhẹ",
    category: "Chăm sóc da",
    price: "200,000đ",
    stock: 20,
    sold: 15,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Kem dưỡng ẩm chuyên sâu",
    category: "Chăm sóc da",
    price: "350,000đ",
    stock: 10,
    sold: 25,
    image: "/placeholder.svg?height=200&width=200",
  },
]

const initialCategories = ["Tất cả", "Chăm sóc da", "Trang điểm"]

const ProductsPage = () => {
  const [categories, setCategories] = useState<string[]>(initialCategories)
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả")
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [showPopup, setShowPopup] = useState(false)
  const [showCategoryPopup, setShowCategoryPopup] = useState(false)
  const [newCategory, setNewCategory] = useState("")
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    category: "Chăm sóc da",
    price: "",
    stock: "",
    sold: "",
    image: "",
  })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("default")

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || newProduct.stock === "" || newProduct.sold === "") {
      alert("Vui lòng nhập đầy đủ thông tin!")
      return
    }

    const formattedPrice = newProduct.price.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
    const newProductEntry: Product = {
      ...newProduct,
      id: products.length + 1,
      price: formattedPrice,
      stock: Number(newProduct.stock),
      sold: Number(newProduct.sold),
    }

    setProducts([...products, newProductEntry])
    setShowPopup(false)
    setNewProduct({ name: "", category: "Chăm sóc da", price: "", stock: "", sold: "", image: "" })
  }

  const handleDeleteProduct = () => {
    if (!selectedProduct) return
    setProducts(products.filter((product) => product.id !== selectedProduct.id))
    setSelectedProduct(null)
  }

  const handleUpdateProduct = () => {
    if (!selectedProduct) return
    const updatedProducts = products.map((product) => (product.id === selectedProduct.id ? selectedProduct : product))
    setProducts(updatedProducts)
    setIsEditing(false)
  }

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory])
      setNewCategory("")
      setShowCategoryPopup(false)
    } else {
      alert("Danh mục đã tồn tại hoặc không hợp lệ!")
    }
  }

  const sortedAndFilteredProducts = useMemo(() => {
    let result =
      selectedCategory === "Tất cả" ? products : products.filter((product) => product.category === selectedCategory)

    if (searchTerm) {
      result = result.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    switch (sortBy) {
      case "price-asc":
        return result.sort(
          (a, b) => Number.parseInt(a.price.replace(/\D/g, "")) - Number.parseInt(b.price.replace(/\D/g, "")),
        )
      case "price-desc":
        return result.sort(
          (a, b) => Number.parseInt(b.price.replace(/\D/g, "")) - Number.parseInt(a.price.replace(/\D/g, "")),
        )
      case "stock-asc":
        return result.sort((a, b) => a.stock - b.stock)
      case "stock-desc":
        return result.sort((a, b) => b.stock - a.stock)
      case "sold-asc":
        return result.sort((a, b) => a.sold - b.sold)
      case "sold-desc":
        return result.sort((a, b) => b.sold - a.sold)
      default:
        return result
    }
  }, [products, selectedCategory, searchTerm, sortBy])

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-4">
        <div className="container mx-auto relative">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="absolute left-4 top-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-4xl font-bold mb-6 text-center">
            <Sparkles className="inline-block mr-2" /> Quản lý sản phẩm
          </h1>
          <div className="flex justify-center space-x-4 mb-4 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`mb-2 ${
                  selectedCategory === category ? "bg-white text-purple-500" : "bg-transparent text-white border-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex justify-end space-x-2">
            <Button className="bg-white text-purple-500 hover:bg-gray-100" onClick={() => setShowCategoryPopup(true)}>
              <Plus className="mr-2 h-4 w-4" /> Thêm danh mục
            </Button>
            <Button className="bg-white text-purple-500 hover:bg-gray-100" onClick={() => setShowPopup(true)}>
              <Plus className="mr-2 h-4 w-4" /> Thêm sản phẩm
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-8">
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Mặc định</SelectItem>
              <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
              <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
              <SelectItem value="stock-asc">Tồn kho: Thấp đến cao</SelectItem>
              <SelectItem value="stock-desc">Tồn kho: Cao đến thấp</SelectItem>
              <SelectItem value="sold-asc">Đã bán: Thấp đến cao</SelectItem>
              <SelectItem value="sold-desc">Đã bán: Cao đến thấp</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedAndFilteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg border border-gray-200">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Danh mục: {product.category}</p>
                <p className="text-lg font-bold">{product.price}</p>
                <p className="text-sm text-gray-600">Còn lại: {product.stock} sản phẩm</p>
                <p className="text-sm text-gray-600 mb-4">Đã bán: {product.sold} sản phẩm</p>
                <Button
                  className="w-full bg-purple-500 text-white hover:bg-purple-600"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Eye className="mr-2 h-4 w-4" /> Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Thêm sản phẩm mới</h2>
            <input
              type="text"
              placeholder="Tên sản phẩm"
              className="border p-2 w-full mb-2"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Giá (VD: 200,000)"
              className="border p-2 w-full mb-2"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                })
              }
            />
            <input
              type="number"
              placeholder="Số lượng tồn kho"
              className="border p-2 w-full mb-2"
              value={newProduct.stock}
              onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            />
            <input
              type="number"
              placeholder="Số lượng đã bán"
              className="border p-2 w-full mb-2"
              value={newProduct.sold}
              onChange={(e) => setNewProduct({ ...newProduct, sold: e.target.value })}
            />
            <select
              className="border p-2 w-full mb-2"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            >
              {categories
                .filter((c) => c !== "Tất cả")
                .map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowPopup(false)}>
                Hủy
              </Button>
              <Button className="bg-purple-500 text-white hover:bg-purple-600" onClick={handleAddProduct}>
                Thêm
              </Button>
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Chi tiết sản phẩm</h2>
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="border p-2 w-full mb-2"
                  value={selectedProduct.name}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                />
                <select
                  className="border p-2 w-full mb-2"
                  value={selectedProduct.category}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                >
                  {categories
                    .filter((c) => c !== "Tất cả")
                    .map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  className="border p-2 w-full mb-2"
                  value={selectedProduct.price}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                />
                <input
                  type="number"
                  className="border p-2 w-full mb-2"
                  value={selectedProduct.stock}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, stock: Number(e.target.value) })}
                />
                <input
                  type="number"
                  className="border p-2 w-full mb-2"
                  value={selectedProduct.sold}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, sold: Number(e.target.value) })}
                />
              </>
            ) : (
              <>
                <p>
                  <strong>Tên:</strong> {selectedProduct.name}
                </p>
                <p>
                  <strong>Danh mục:</strong> {selectedProduct.category}
                </p>
                <p>
                  <strong>Giá:</strong> {selectedProduct.price}
                </p>
                <p>
                  <strong>Còn lại:</strong> {selectedProduct.stock} sản phẩm
                </p>
                <p>
                  <strong>Đã bán:</strong> {selectedProduct.sold} sản phẩm
                </p>
              </>
            )}
            <div className="flex justify-end space-x-2 mt-4">
              {isEditing ? (
                <>
                  <Button className="bg-green-600 text-white hover:bg-green-700" onClick={handleUpdateProduct}>
                    Lưu
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Hủy
                  </Button>
                </>
              ) : (
                <>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => setIsEditing(true)}>
                    Chỉnh sửa
                  </Button>
                  <Button className="bg-red-600 text-white hover:bg-red-700" onClick={handleDeleteProduct}>
                    <Trash2 className="mr-2 h-4 w-4" /> Xóa sản phẩm
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                    Đóng
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {showCategoryPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Thêm danh mục mới</h2>
            <input
              type="text"
              placeholder="Tên danh mục"
              className="border p-2 w-full mb-4"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowCategoryPopup(false)}>
                Hủy
              </Button>
              <Button className="bg-purple-500 text-white hover:bg-purple-600" onClick={handleAddCategory}>
                Thêm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsPage

