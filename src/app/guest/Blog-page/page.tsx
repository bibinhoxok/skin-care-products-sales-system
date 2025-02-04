import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6" />
          <span className="sr-only">Chăm Sóc Da Glow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/shop">
            Cửa Hàng
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/guest/blog-page">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dictionary">
            Từ Điển
          </Link>
          <div className="relative">
            <input
              type="text"
              className="text-sm px-4 py-1 border rounded-md focus:outline-none focus:ring"
              placeholder="Tìm kiếm..."
            />
          </div>
          <Link href="/cart" className="flex items-center justify-center">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Giỏ Hàng</span>
          </Link>
          <Link href="/login" className="flex items-center justify-center">
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
                  Blog - Chia Sẻ Kiến Thức Chăm Sóc Da
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Khám phá những bài viết về chăm sóc da tự nhiên và các mẹo làm đẹp hữu ích.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Thêm bảng mục lục */}
      <section className="w-full py-4 bg-white">
          <div className="container px-4 md:px-6 flex justify-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 text-center">Mục Lục</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="#daKho" className="text-blue-500 hover:underline">
                    Da Khô
                  </a>
                </li>
                <li>
                  <a href="#daDau" className="text-blue-500 hover:underline">
                    Da Dầu
                  </a>
                </li>
                <li>
                  <a href="#quyTrinhDuongDaToi" className="text-blue-500 hover:underline">
                    Quy Trình Dưỡng Da Tối
                  </a>
                </li>
                <li>
                  <a href="#quyTrinhDuongDaSang" className="text-blue-500 hover:underline">
                    Quy Trình Dưỡng Da Sáng
                  </a>
                </li>
                <li>
                  <a href="#tayTrang" className="text-blue-500 hover:underline">
                    Tẩy Trang
                  </a>
                </li>
                <li>
                  <a href="#suaRuaMat" className="text-blue-500 hover:underline">
                    Sữa Rửa Mặt
                  </a>
                </li>
                <li>
                  <a href="#tayTeBaoChet" className="text-blue-500 hover:underline">
                    Tẩy Tế Bào Chết
                  </a>
                </li>
                <li>
                  <a href="#toner" className="text-blue-500 hover:underline">
                    Toner
                  </a>
                </li>
                <li>
                  <a href="#dieuTriMun" className="text-blue-500 hover:underline">
                    Điều Trị Mụn
                  </a>
                </li>
                <li>
                  <a href="#dieuTriTham" className="text-blue-500 hover:underline">
                    Điều Trị Thâm
                  </a>
                </li>
                <li>
                  <a href="#serum" className="text-blue-500 hover:underline">
                    Serum
                  </a>
                </li>
                <li>
                  <a href="#dauDuong" className="text-blue-500 hover:underline">
                    Dầu Dưỡng
                  </a>
                </li>
                <li>
                  <a href="#kemDuong" className="text-blue-500 hover:underline">
                    Kem Dưỡng
                  </a>
                </li>
                <li>
                  <a href="#kemChongNang" className="text-blue-500 hover:underline">
                    Kem Chống Nắng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Các bài viết blog */}
        <section className="w-full py-12 bg-white flex justify-center items-center">
          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-6 text-black">
              Bài Viết Mới Nhất
            </h2>
            <div className="space-y-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col mb-8">
                  <Image
                    src={`/placeholder.svg?height=180&width=180`}
                    alt={`Bài Viết Blog ${i}`}
                    className="rounded-lg object-cover w-full aspect-square mb-4 cursor-pointer"
                    width={150}
                    height={150}
                  />
                  <h3 className="font-semibold text-xl mb-2 cursor-pointer">
                    Bài Viết Blog {i}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Bài viết blog {i} chia sẻ kiến thức về cách chăm sóc da đúng cách. Chúng tôi sẽ hướng dẫn bạn các bước chăm sóc da hàng ngày để đạt được làn da khỏe mạnh và mịn màng.
                    <br /><br />
                    <strong>Các mẹo chăm sóc da:</strong>
                    <ul className="list-disc pl-6">
                      <li>Rửa mặt đúng cách 2 lần mỗi ngày.</li>
                      <li>Dưỡng ẩm để giữ cho da mềm mại.</li>
                      <li>Chống nắng mỗi ngày để bảo vệ da khỏi tia UV.</li>
                    </ul>
                    <br />
                    Ngoài ra, chế độ ăn uống và sinh hoạt lành mạnh cũng đóng vai trò quan trọng trong việc duy trì làn da đẹp.
                  </p>
                </div>
              ))}
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
