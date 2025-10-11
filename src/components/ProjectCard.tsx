
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string; // external GitHub or article
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border p-5 hover:shadow-sm transition">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="mt-2 text-gray-600">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border px-2 py-1 text-xs text-gray-600">{t}</span>
        ))}
      </div>
      {project.link ? (
        <a href={project.link} className="mt-4 inline-block text-sm text-blue-600 hover:underline">View Repo</a>
      ) : null}
    </article>
  );
}
