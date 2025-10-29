
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string; // external GitHub or article
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-6">
      <div className="md:min-h-[220px] flex flex-col">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2">{project.title}</h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed flex-grow">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm">
              {t}
            </span>
          ))}
        </div>
        {project.link ? (
          <a href={project.link} className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200 transition-colors">View Repo</a>
        ) : null}
      </div>
    </article>
  );
}
