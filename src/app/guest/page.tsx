import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="w-full px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center mr-6">
              <h1 className="text-3xl font-semibold font-serif">
                Happy<span className="text-pink-500 text-4xl font-bold">Essence</span>
              </h1>
              <div className="text-xs text-gray-400">Luxe</div>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="hover:underline">SkinStore</a>
              <a href="#" className="hover:underline">HappyEssence Spa</a>
              <a href="#" className="hover:underline">Blog làm đẹp</a>
              <a href="#" className="hover:underline">Từ điển về da</a>
              <a href="#" className="hover:underline">Testimonial</a>
              <a href="#" className="hover:underline">Thương hiệu</a>
              <a href="#" className="hover:underline">Deal Hời</a>
            </nav>
            <div className="flex items-center space-x-4">
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm" 
                className="py-1 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="relative">
                <Image src="/cart-icon.svg" alt="Giỏ hàng" width={24} height={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </button>
              <button>
                <Image src="/user-icon.svg" alt="Đăng nhập" width={24} height={24} />
              </button>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-6">
                <a href="#" className="text-xs hover:underline">Liên hệ</a>
                <a href="#" className="text-xs hover:underline">Về chúng tôi</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Đón Năm Mới Săn Sale Sập Giá</h2>
          <p className="text-lg text-gray-700 mb-6">Quà tặng hấp dẫn - Voucher khủng - Freeship toàn quốc</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md p-4 rounded">
              <Image src="/product1.jpg" alt="Product 1" width={200} height={200} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">Sản phẩm A</h3>
              <p className="text-gray-600 mt-2">Giảm giá 30%</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded">
              <Image src="/product2.jpg" alt="Product 2" width={200} height={200} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">Sản phẩm B</h3>
              <p className="text-gray-600 mt-2">Quà tặng kèm</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded">
              <Image src="/product3.jpg" alt="Product 3" width={200} height={200} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">Sản phẩm C</h3>
              <p className="text-gray-600 mt-2">Freeship toàn quốc</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded">
              <Image src="/product4.jpg" alt="Product 4" width={200} height={200} className="mx-auto" />
              <h3 className="text-xl font-bold mt-4">Sản phẩm D</h3>
              <p className="text-gray-600 mt-2">Bảo hành 1 năm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white text-black p-4 rounded">
              <Image src="/product1.jpg" alt="Product 1" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-bold mt-2">Bộ Sưu Tập Mặt Nạ Emmié</h3>
              <p className="text-red-500 font-bold">235.000đ</p>
              <p className="line-through text-gray-600">649.000đ</p>
              <p className="text-gray-700">Bộ Sưu Tập Kỷ Niệm Tết 2025 - Át Tỷ Với Phối Mask Microfiber Tiện</p>
              <button className="mt-2 text-blue-600 underline">Thiết Kế Độc Quyền</button>
            </div>
            <div className="bg-white text-black p-4 rounded">
              <Image src="/product2.jpg" alt="Product 2" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-bold mt-2">Mặt Nạ Dưỡng Ẩm Làm Dịu B5</h3>
              <p className="text-red-500 font-bold">249.000đ</p>
              <p className="line-through text-gray-600">590.000đ</p>
              <p className="text-gray-700">Làm dịu da mụn, phục hồi da nhạy cảm và cải thiện kết cấu da</p>
              <button className="mt-2 text-blue-600 underline">Cấp Ẩm Và Làm Sáng Da</button>
            </div>
            <div className="bg-white text-black p-4 rounded">
              <Image src="/product3.jpg" alt="Product 3" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-bold mt-2">Máy Triệt Lông IPL MAX</h3>
              <p className="text-red-500 font-bold">3.290.000đ</p>
              <p className="line-through text-gray-600">4.990.000đ</p>
              <p className="text-gray-700">Công nghệ IPL, Công nghệ Hàn Băng</p>
              <button className="mt-2 text-blue-600 underline">Cấp Ẩm Và Làm Sáng Da</button>
            </div>
            <div className="bg-white text-black p-4 rounded">
              <Image src="/product4.jpg" alt="Product 4" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-bold mt-2">Máy Triệt Lông IPL PRO</h3>
              <p className="text-red-500 font-bold">2.490.000đ</p>
              <p className="line-through text-gray-600">2.990.000đ</p>
              <p className="text-gray-700">600.000 xung ánh sáng công nghệ tiên tiến</p>
              <button className="mt-2 text-blue-600 underline">Cấp Ẩm Và Làm Sáng Da</button>
            </div>
            <div className="bg-white text-black p-4 rounded">
              <Image src="/product5.jpg" alt="Product 5" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-bold mt-2">Mặt Nạ Sinh Học Cao Cấp</h3>
              <p className="text-red-500 font-bold">249.000đ</p>
              <p className="line-through text-gray-600">590.000đ</p>
              <p className="text-gray-700">Nuôi dưỡng, làm trắng & trẻ hóa làn da từ bên trong</p>
              <button className="mt-2 text-blue-600 underline">Cấp Ẩm Và Làm Sáng Da</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 happySkin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
