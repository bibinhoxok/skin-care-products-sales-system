import { notFound } from "next/navigation"
import Link from "next/link"

const blogPosts = {
  "importance-of-sunscreen": {
    title: "The Importance of Sunscreen",
    content:
      "Sunscreen is a crucial part of any skincare routine. It protects your skin from harmful UV rays, which can cause premature aging, sunburn, and even skin cancer. Here are some key points to remember:\n\n1. Apply sunscreen daily, even on cloudy days.\n2. Use a broad-spectrum sunscreen that protects against both UVA and UVB rays.\n3. Choose a sunscreen with at least SPF 30.\n4. Reapply every 2 hours, or more frequently if swimming or sweating.\n5. Don't forget often-missed areas like your ears, neck, and the backs of your hands.",
  },
  "hydration-is-key": {
    title: "Hydration is Key",
    content:
      "Keeping your skin hydrated is essential for maintaining a healthy, glowing complexion. Here's why hydration matters and how to achieve it:\n\n1. Hydrated skin looks plumper and more youthful.\n2. Proper hydration helps maintain your skin's protective barrier.\n3. Drink plenty of water throughout the day.\n4. Use a hydrating serum containing ingredients like hyaluronic acid.\n5. Apply a moisturizer appropriate for your skin type.\n6. Consider using a humidifier in dry environments.\n7. Eat water-rich foods like cucumbers and watermelon.",
  },
  "night-time-skincare-routine": {
    title: "Night-time Skincare Routine",
    content:
      "Your night-time skincare routine is crucial for skin rejuvenation. Here's a step-by-step guide to the perfect evening routine:\n\n1. Double cleanse: Start with an oil-based cleanser to remove makeup and sunscreen, followed by a water-based cleanser.\n2. Tone: Use a gentle, alcohol-free toner to balance your skin's pH.\n3. Apply treatments: This is the time for serums targeting specific concerns like anti-aging or acne.\n4. Eye cream: Gently pat on an eye cream to hydrate and protect the delicate eye area.\n5. Moisturize: Lock in hydration with a night cream suitable for your skin type.\n6. Optional: Use a facial oil for extra nourishment if your skin is dry.\n7. Get enough sleep: Aim for 7-9 hours of quality sleep for optimal skin regeneration.",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </p>
            </div>
          </div>
          <Link href="/" className="mt-8 inline-block text-sm font-medium text-blue-600 hover:text-blue-500">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </main>
  )
}

