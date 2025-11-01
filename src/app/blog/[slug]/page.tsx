import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
  
  return mdxFiles.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 15: params is always a Promise
  const resolvedParams = await params;
  const blogDir = path.join(process.cwd(), "src/app/blog");
  const filePath = path.join(blogDir, `${resolvedParams.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <article className="prose prose-gray max-w-3xl mx-auto py-32 px-6">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title || resolvedParams.slug}</h1>
        {data.date && (
          <p className="text-gray-500 text-sm mb-4">{data.date}</p>
        )}
        {data.tags && Array.isArray(data.tags) && data.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {data.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-cyan-50 text-cyan-700 text-xs font-medium px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-cyan-700 prose-pre:bg-gray-900 prose-pre:text-gray-100">
        <MDXRemote 
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: "wrap",
                    properties: { className: ["anchor-link"] },
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}

