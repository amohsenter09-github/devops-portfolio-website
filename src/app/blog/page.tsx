import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";

export default async function BlogPage() {
  // Sort by date (newest first)
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  if (posts.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-32 px-6 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">No blog posts found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 md:py-24 w-full flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-10">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
