"use client"; // ✅ Bật Client Component

import { useParams, notFound } from "next/navigation";
import blogPosts from "@/data/blogPost";

// ✅ Component hiển thị video YouTube
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
  );
};

// ✅ Trang chi tiết bài viết (Chuyển thành Client Component)
export default function PostDetail() {
  const params = useParams(); // ✅ Lấy `params` từ hook
  const postId = params?.id;

  // Tìm bài viết theo ID
  const post = blogPosts.find((p) => p.id.toString() === postId);

  // Nếu không tìm thấy bài viết, hiển thị trang 404
  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Tiêu đề & Thông tin bài viết */}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="text-gray-600 mt-2 flex gap-4">
        <span>🗓 {post.date}</span>
        <span>⏳ {post.readTime}</span>
        <span>✍ {post.author}</span>
      </div>

      {/* Video */}
      <div className="mt-6">
        <YouTubeVideo videoId={post.videoId} />
      </div>

      {/* Nội dung chi tiết theo từng danh mục */}
      <div className="mt-6 text-lg leading-7 text-gray-800 space-y-4">
        {post.details.skinTypes && (
          <div>
            <h2 className="text-xl font-semibold">👩‍⚕️ Loại Da Phù Hợp:</h2>
            <p>{post.details.skinTypes.join(", ")}</p>
          </div>
        )}

        {post.details.steps && (
          <div>
            <h2 className="text-xl font-semibold">📌 Quy Trình Chăm Sóc:</h2>
            <ul className="list-disc pl-6 space-y-2">
              {post.details.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {post.details.recommendations && (
          <div>
            <h2 className="text-xl font-semibold">💡 Lời Khuyên:</h2>
            <ul className="list-disc pl-6 space-y-2">
              {post.details.recommendations.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
