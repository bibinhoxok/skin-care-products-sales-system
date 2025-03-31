import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "@/components/home-page/featured-products";
import { DisplayedProducts } from "@/components/home-page/displayed-products";
import Link from "next/link";

export const metadata = {
  title: "Trang chủ",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/images/anh-nen2.jpeg')] bg-cover bg-center">
          <div className="px-4 md:px-6">
            <div className="flex flex-col bg-white bg-opacity-90 backdrop:blur-lg py-5 items-center space-y-4 text-center">
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

       {/* Wrapper chung */}
<section className="w-full py-12 flex justify-center items-center">
{/* Container chính */}
<div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
  
  {/* Sản phẩm nổi bật (Bên trái) */}
  <div className="border border-gray-300 rounded-lg p-4 bg-black w-full md:w-3/4">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-6 text-white">
      Sản Phẩm Nổi Bật
    </h2>
    <FeaturedProducts />
  </div>

  {/* Banner Quiz (Bên phải) - Đẩy sang phải */}
  <div className="bg-gray-900 text-white px-8 py-6 rounded-lg shadow-lg w-full md:w-1/4 ml-4">
    <h3 className="text-lg font-semibold text-center">Bạn có thực sự hiểu rõ làn da của mình?</h3>
    <p className="text-sm text-center mt-2 text-gray-300">
      Hãy làm bài quiz nhanh để biết loại da của bạn và cách chăm sóc phù hợp!
    </p>
    <div className="flex justify-center mt-3">
      <Link href="/quiz">
        <Button className="bg-white text-gray-900 hover:bg-gray-300">Bắt đầu Quiz</Button>
      </Link>
    </div>
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
        <section className="w-full py-12 flex justify-center items-center">
          <div className="border border-gray-300 rounded-lg p-4 bg-black max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-6 text-white">
              Tất Cả Sản Phẩm
            </h2>
            <DisplayedProducts />
          </div>
        </section>
      </main>
    </div>
  );
}
