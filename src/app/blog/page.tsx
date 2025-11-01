import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import BlogPostCard from "@/components/BlogPostCard";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

export default async function BlogPage() {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  
  let posts: BlogPost[] = [];
  
  try {
    if (!fs.existsSync(blogDir)) {
      return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-600">No blog posts found.</p>
          </div>
        </main>
      );
    }

    const allPosts = fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith(".mdx") && file !== "page.tsx")
      .map((filename): BlogPost | null => {
        try {
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
        } catch (error) {
          console.error(`Error reading file ${filename}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null);
    
    posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading blog directory:", error);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
