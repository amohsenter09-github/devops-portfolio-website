
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string; // external GitHub or article
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 hover:shadow-sm transition-all duration-200 bg-white dark:bg-slate-800">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
      <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-gray-200 dark:border-gray-600 px-2 py-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700">
            {t}
          </span>
        ))}
      </div>
      {project.link ? (
        <a href={project.link} className="mt-4 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline">View Repo</a>
      ) : null}
    </article>
  );
}
