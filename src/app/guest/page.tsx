import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, ShoppingCart, User } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6" />
          <span className="sr-only">Chăm Sóc Da Glow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cửa Hàng
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Từ Điển
          </Link>
          <div className="relative">
            <input
              type="text"
              className="text-sm px-4 py-1 border rounded-md focus:outline-none focus:ring"
              placeholder="Tìm kiếm..."
            />
          </div>
          <Link href="#" className="flex items-center justify-center">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Giỏ Hàng</span>
          </Link>
          <Link href="#" className="flex items-center justify-center">
            <User className="h-5 w-5" />
            <span className="sr-only">Đăng Nhập</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-[url('/background-image.jpg')] bg-cover bg-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Làn Da Rạng Rỡ, Tự Nhiên
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Khám phá dòng sản phẩm chăm sóc da tự nhiên của chúng tôi để có làn da khỏe mạnh và rạng ngời.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Mua Ngay</Button>
                <Button variant="outline">Tìm Hiểu Thêm</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center mt-4">
          <div className="w-2/3 relative mb-2">
            <Image
              src="/images/anh-nen2.jpeg"
              alt="Sản phẩm nổi bật"
              className="w-full h-[500px] object-cover rounded-lg"
              width={6000}
              height={2000}
            />
          </div>
        </div>

        {/* Sản phẩm nổi bật */}
        <section className="w-full py-12 bg-gray-50 flex justify-center items-center">
          <div className="border border-gray-300 rounded-lg p-4 bg-black max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-6 text-white">
              Sản Phẩm Nổi Bật
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="flex-shrink-0 w-full bg-white">
                  <CardContent className="p-3">
                    <Image
                      src={`/placeholder.svg?height=180&width=180`}
                      alt={`Sản Phẩm Nổi Bật ${i}`}
                      className="rounded-lg object-cover w-full aspect-square mb-4 cursor-pointer"
                      width={150}
                      height={150}
                    />
                    <h3 className="font-semibold text-md mb-2 cursor-pointer">
                      Sản Phẩm Nổi Bật {i}
                    </h3>
                    <p className="text-xs text-gray-400 mb-4">
                      Mô tả ngắn gọn về sản phẩm nổi bật {i}.
                    </p>
                    <Button className="w-full text-sm">Thêm Vào Giỏ</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center mt-4">
          <div className="w-2/3 relative mb-4">
            <Image
              src="/images/anh-nen5.jpeg"
              alt="Sản phẩm nổi bật"
              className="w-full h-[500px] object-cover rounded-lg"
              width={6000}
              height={2000}
            />
          </div>
        </div>

        {/* Phần hiển thị tất cả sản phẩm */}
        <section className="w-full py-12 bg-white flex justify-center items-center">
          <div className="border border-gray-300 rounded-lg p-4 bg-black max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-6 text-white">
              Tất Cả Sản Phẩm
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} className="flex-shrink-0 w-full bg-white">
                  <CardContent className="p-3">
                    <Image
                      src={`/placeholder.svg?height=180&width=180`}
                      alt={`Sản Phẩm ${i}`}
                      className="rounded-lg object-cover w-full aspect-square mb-4 cursor-pointer"
                      width={150}
                      height={150}
                    />
                    <h3 className="font-semibold text-md mb-2 cursor-pointer">
                      Tên Sản Phẩm {i}
                    </h3>
                    <p className="text-xs text-gray-400 mb-4">
                      Mô tả ngắn gọn về sản phẩm {i}.
                    </p>
                    <Button className="w-full text-sm">Thêm Vào Giỏ</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Về Chúng Tôi"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width={600}
                height={400}
              />
              <div className="flex flex-col justify-center space-y-4 text-white">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Về Chúng Tôi</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Chúng tôi tin tưởng vào sức mạnh của thiên nhiên trong việc cải thiện làn da. Các sản phẩm của chúng tôi
                  được chế tác cẩn thận, chỉ sử dụng các thành phần tự nhiên tốt nhất để nuôi dưỡng và tái tạo làn da của bạn.
                </p>
                <Button className="w-fit">Tìm Hiểu Thêm Về Chúng Tôi</Button>
              </div>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
          <p className="text-xs text-gray-300 dark:text-gray-400">© 2024 Chăm Sóc Da Glow. Mọi quyền được bảo lưu.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-300 hover:underline underline-offset-4" href="#">
              Điều Khoản Dịch Vụ
            </Link>
            <Link className="text-xs text-gray-300 hover:underline underline-offset-4" href="#">
              Chính Sách Bảo Mật
            </Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}
