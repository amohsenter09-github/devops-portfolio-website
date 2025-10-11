
import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/siteConfig";

export default function Home() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-4xl md:text-5xl font-bold">{site.hero.title}</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">{site.hero.subtitle}</p>
        <div className="mt-8 flex gap-3">
          <Link className="rounded-lg bg-black px-5 py-3 text-white" href="/projects">View Projects</Link>
          <Link className="rounded-lg border px-5 py-3" href="/about">About</Link>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-12 border-t">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">{site.experience.years}</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">{site.experience.companies.length}</div>
            <div className="text-sm text-gray-600">Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">{site.experience.projects}</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">{site.experience.uptime}</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Core Technologies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Cloud & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">AWS</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">EKS</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Kubernetes</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Docker</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">RDS</span>
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Automation & IaC</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Terraform</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">CDK</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">ArgoCD</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">GitHub Actions</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Jenkins</span>
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Monitoring & Security</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Prometheus</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Grafana</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Datadog</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">IAM</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">OIDC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold mb-6">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">AVIV Group Replatforming</h3>
            <p className="text-sm text-gray-600 mb-3">
              Led complete migration from on-prem to AWS EKS with Terraform modules and AWS CDK. 
              Built automated CI/CD pipelines and achieved 99.9% uptime.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">AWS</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">EKS</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Terraform</span>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Cybrid Multi-Account AWS</h3>
            <p className="text-sm text-gray-600 mb-3">
              Architected secure multi-account AWS infrastructure with EKS (Bottlerocket), 
              GitOps (ArgoCD), and comprehensive observability stack.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">AWS</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">ArgoCD</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Bottlerocket</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/projects" className="text-blue-600 hover:underline">
            View All Projects →
          </Link>
        </div>
      </section>
    </Container>
  );
}
