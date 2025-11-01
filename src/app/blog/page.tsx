import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  
  const posts: BlogPost[] = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx") && file !== "page.tsx")
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || "Untitled Post",
        description: data.description || "",
        date: data.date || "Unknown Date",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="min-h-screen bg-white text-gray-800 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-cyan-700 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              <p className="mt-3 text-gray-600">{post.description}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cyan-50 text-cyan-700 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
