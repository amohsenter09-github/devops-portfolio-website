import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-3 text-gray-600 max-w-3xl">
        Selected work across AWS, Kubernetes, GitOps, CI/CD, and Observability. Public links below; private work
        is summarized as case studies.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  );
}
