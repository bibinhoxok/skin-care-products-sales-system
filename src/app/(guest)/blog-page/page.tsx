"use client"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Table of contents data - also used as tags
const categories = [
  { id: "all", title: "Tất Cả Bài Viết" },
  { id: "daKho", title: "Da Khô" },
  { id: "daDau", title: "Da Dầu" },
  { id: "quyTrinhDuongDaToi", title: "Quy Trình Dưỡng Da Tối" },
  { id: "quyTrinhDuongDaSang", title: "Quy Trình Dưỡng Da Sáng" },
  { id: "tayTrang", title: "Tẩy Trang" },
  { id: "suaRuaMat", title: "Sữa Rửa Mặt" },
  { id: "tayTeBaoChet", title: "Tẩy Tế Bào Chết" },
  { id: "toner", title: "Toner" },
  { id: "dieuTriMun", title: "Điều Trị Mụn" },
  { id: "dieuTriTham", title: "Điều Trị Thâm" },
  { id: "serum", title: "Serum" },
  { id: "dauDuong", title: "Dầu Dưỡng" },
  { id: "kemDuong", title: "Kem Dưỡng" },
  { id: "kemChongNang", title: "Kem Chống Nắng" },
]

// Sample blog post data with tags matching the table of contents and YouTube videos
const blogPosts = [
  {
    id: 1,
    title: "Quy Trình Chăm Sóc Da Cơ Bản Cho Người Mới Bắt Đầu",
    excerpt:
      "Hướng dẫn chi tiết về quy trình chăm sóc da cơ bản dành cho người mới, giúp bạn xây dựng thói quen chăm sóc da đúng cách từ đầu.",
    date: "15/03/2024",
    readTime: "8 phút",
    author: "Minh Tâm",
    tags: ["quyTrinhDuongDaSang", "quyTrinhDuongDaToi", "suaRuaMat", "toner"],
    videoId: "d-FBqUloHq8", // YouTube video ID
  },
  {
    id: 2,
    title: "Cách Chọn Kem Chống Nắng Phù Hợp Với Từng Loại Da",
    excerpt:
      "Tìm hiểu cách chọn kem chống nắng phù hợp với từng loại da khác nhau, từ da khô, da dầu đến da hỗn hợp và da nhạy cảm.",
    date: "10/03/2024",
    readTime: "6 phút",
    author: "Thu Hà",
    tags: ["kemChongNang", "daKho", "daDau"],
    videoId: "d-FBqUloHq8", // YouTube video ID
  },
  {
    id: 3,
    title: "Bí Quyết Trị Mụn Hiệu Quả Với Các Sản Phẩm Tự Nhiên",
    excerpt:
      "Khám phá các phương pháp trị mụn hiệu quả bằng các sản phẩm tự nhiên, an toàn và dễ tìm trong nhà bếp của bạn.",
    date: "05/03/2024",
    readTime: "7 phút",
    author: "Thanh Thảo",
    tags: ["dieuTriMun", "serum", "daDau"],
    videoId: "d-FBqUloHq8", // YouTube video ID
  },
  {
    id: 4,
    title: "Cách Chăm Sóc Da Trong Mùa Đông Khô Hanh",
    excerpt:
      "Những mẹo hữu ích giúp bảo vệ và dưỡng ẩm cho làn da của bạn trong những tháng mùa đông khô hanh và lạnh giá.",
    date: "01/03/2024",
    readTime: "5 phút",
    author: "Hoàng Anh",
    tags: ["daKho", "kemDuong", "dauDuong"],
    videoId: "d-FBqUloHq8", // YouTube video ID
  },
  {
    id: 5,
    title: "Hướng Dẫn Tẩy Trang Đúng Cách Cho Từng Loại Da",
    excerpt:
      "Tìm hiểu cách tẩy trang hiệu quả và an toàn cho từng loại da, giúp loại bỏ hoàn toàn lớp trang điểm và bụi bẩn.",
    date: "25/02/2024",
    readTime: "6 phút",
    author: "Lan Anh",
    tags: ["tayTrang", "suaRuaMat"],
    videoId: "MihWtTw3Lk4", // YouTube video ID
  },
  {
    id: 6,
    title: "Cách Sử Dụng Toner Hiệu Quả Trong Quy Trình Chăm Sóc Da",
    excerpt:
      "Khám phá vai trò quan trọng của toner trong quy trình chăm sóc da và cách sử dụng đúng để đạt hiệu quả tối ưu.",
    date: "20/02/2024",
    readTime: "5 phút",
    author: "Minh Ngọc",
    tags: ["toner", "quyTrinhDuongDaSang", "quyTrinhDuongDaToi"],
    videoId: "MihWtTw3Lk4", // YouTube video ID
  },
  {
    id: 7,
    title: "Bí Quyết Trị Thâm Mụn Hiệu Quả Tại Nhà",
    excerpt: "Những phương pháp trị thâm mụn hiệu quả mà bạn có thể thực hiện tại nhà với các nguyên liệu dễ tìm.",
    date: "15/02/2024",
    readTime: "7 phút",
    author: "Thanh Tâm",
    tags: ["dieuTriTham", "dieuTriMun", "serum"],
    videoId: "MihWtTw3Lk4", // YouTube video ID
  },
  {
    id: 8,
    title: "Cách Tẩy Tế Bào Chết An Toàn Cho Da Nhạy Cảm",
    excerpt:
      "Hướng dẫn cách tẩy tế bào chết nhẹ nhàng và an toàn cho làn da nhạy cảm, giúp da sáng mịn mà không gây kích ứng.",
    date: "10/02/2024",
    readTime: "6 phút",
    author: "Hà Linh",
    tags: ["tayTeBaoChet", "daKho"],
    videoId: "MihWtTw3Lk4", // YouTube video ID
  },
]

// Featured post with YouTube video
const featuredPost = {
  id: 0,
  title: "5 Bước Chăm Sóc Da Buổi Tối Hiệu Quả",
  excerpt: "Khám phá quy trình 5 bước chăm sóc da buổi tối giúp làn da của bạn được phục hồi và tái tạo trong khi ngủ.",
  date: "20/03/2024",
  readTime: "10 phút",
  author: "Ngọc Linh",
  tags: ["quyTrinhDuongDaToi", "tayTrang", "suaRuaMat", "toner", "serum", "kemDuong"],
  videoId: "d-FBqUloHq8", // YouTube video ID
}

// YouTube Video Component
const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  )
}

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("all")
  const [visiblePosts, setVisiblePosts] = useState(4) // Initially show 4 posts

  // Filter posts based on active tag
  const filteredPosts = activeTag === "all" ? blogPosts : blogPosts.filter((post) => post.tags.includes(activeTag))

  // Check if featured post should be shown based on active tag
  const showFeaturedPost = activeTag === "all" || featuredPost.tags.includes(activeTag)

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 4) // Show 4 more posts
  }

  // Get the posts to display (limited by visiblePosts)
  const postsToDisplay = filteredPosts.slice(0, visiblePosts)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                Blog - Chia Sẻ Kiến Thức Chăm Sóc Da
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Khám phá những bài viết về chăm sóc da tự nhiên và các mẹo làm đẹp hữu ích.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.slice(0, 6).map((category) => (
                <Button
                  key={category.id}
                  variant={activeTag === category.id ? "default" : "outline"}
                  className={`rounded-full ${activeTag === category.id ? "bg-black text-white" : ""}`}
                  onClick={() => {
                    setActiveTag(category.id)
                    setVisiblePosts(4) // Reset visible posts when changing tag
                  }}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar with Table of Contents */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
  <div className="sticky top-8">
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-black">Mục Lục & Danh Mục</h2>
      <Separator className="my-4" />
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => {
                  setActiveTag(category.id)
                  setVisiblePosts(4) // Reset visible posts when changing tag
                }}
                className={`text-left w-full transition-colors flex items-center ${
                  activeTag === category.id
                    ? "text-black font-medium"
                    : "text-gray-700 hover:text-black"
                } ${
                  category.id === "all" ? "text-xl font-extrabold text-black" : ""
                }`}
              >
                <ArrowRight
                  className={`h-3 w-3 mr-2 ${
                    activeTag === category.id ? "text-black" : "text-gray-400"
                  }`}
                />
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
</aside>


          {/* Main Content */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-black">
                {activeTag === "all"
                  ? "Bài Viết Mới Nhất"
                  : `Bài Viết Về ${categories.find((c) => c.id === activeTag)?.title}`}
              </h2>
              <p className="text-gray-500">{filteredPosts.length} bài viết</p>
            </div>

            {/* Featured Post - only show if it matches the active tag */}
            {showFeaturedPost && (
              <div className="mb-12">
                <Card className="overflow-hidden border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="space-y-4">
                      <Badge className="bg-black text-white hover:bg-gray-800">Nổi Bật</Badge>
                      <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                      <p className="text-gray-600">{featuredPost.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="cursor-pointer"
                            onClick={() => {
                              setActiveTag(tag)
                              setVisiblePosts(4)
                            }}
                          >
                            {categories.find((c) => c.id === tag)?.title}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                      </div>
                      
                    </div>
                    <div>
                      <YouTubeVideo videoId={featuredPost.videoId} />
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {filteredPosts.length > 0 ? (
              <>
                {/* Blog Posts Grid */}
                {/* Blog Posts Grid */}
<div className="grid gap-8 md:grid-cols-2">
{postsToDisplay.map((post) => (
  <Card key={post.id} className="overflow-hidden border-gray-200 transition-all hover:shadow-md">
    <div className="p-4">
      <YouTubeVideo videoId={post.videoId} />
    </div>
    <CardContent className="p-6 pt-2">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="cursor-pointer"
            onClick={() => {
              setActiveTag(tag);
              setVisiblePosts(4);
            }}
          >
            {categories.find((c) => c.id === tag)?.title}
          </Badge>
        ))}
      </div>
      <h3 className="font-semibold text-xl mb-2 line-clamp-2 hover:text-gray-700 cursor-pointer">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {post.date}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {post.readTime}
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-6 pt-0 flex justify-between items-center">
      <div className="flex items-center text-sm">
        <User className="h-4 w-4 mr-1" />
        {post.author}
      </div>
      {/* ✅ Bọc nút "Đọc tiếp" trong <Link> để chuyển trang */}
      <Link href={`/blog-page/post/${post.id}`} passHref>
        <Button variant="ghost" size="sm" className="text-black hover:text-gray-700">
          Đọc Tiếp
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
))}
</div>


                {/* Load More Button - only show if there are more posts to load */}
                {postsToDisplay.length < filteredPosts.length && (
                  <div className="flex justify-center mt-12">
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-gray-100"
                      onClick={loadMorePosts}
                    >
                      Xem Thêm Bài Viết
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Không có bài viết nào trong danh mục này.</p>
                <Button
                  variant="outline"
                  className="mt-4 border-black text-black hover:bg-gray-100"
                  onClick={() => {
                    setActiveTag("all")
                    setVisiblePosts(4)
                  }}
                >
                  Xem Tất Cả Bài Viết
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      
    </div>
  )
}

