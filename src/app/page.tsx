
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Amr Fathy</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
              <a href="#skills" className="text-white hover:text-purple-300 transition-colors">Skills</a>
              <a href="#projects" className="text-white hover:text-purple-300 transition-colors">Projects</a>
              <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              DevOps Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building scalable cloud infrastructure, automating deployments, and bridging the gap between development and operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View My Work
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                Passionate DevOps Engineer with expertise in cloud infrastructure, CI/CD pipelines, and automation. 
                I specialize in AWS, Kubernetes, Docker, and Infrastructure as Code practices.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                With experience in building scalable, secure, and efficient systems that enable teams to deliver 
                software faster and more reliably.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full">AWS Certified</span>
                <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full">Kubernetes</span>
                <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full">Docker</span>
                <span className="bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full">Terraform</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-300">Projects Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-gray-300">Uptime Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Platforms</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>AWS</span>
                  <span>Expert</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Azure</span>
                  <span>Advanced</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>GCP</span>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Containerization</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Docker</span>
                  <span>Expert</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Kubernetes</span>
                  <span>Advanced</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Helm</span>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Infrastructure as Code</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Terraform</span>
                  <span>Expert</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>CloudFormation</span>
                  <span>Advanced</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Ansible</span>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Designed and implemented a hybrid cloud solution using AWS and Azure with automated failover capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">AWS</span>
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">Azure</span>
                <span className="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-sm">Terraform</span>
              </div>
              <a href="#" className="text-purple-300 hover:text-purple-200 font-semibold">View Details →</a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Kubernetes CI/CD Pipeline</h3>
              <p className="text-gray-300 mb-4">
                Built a complete GitOps workflow with ArgoCD, Jenkins, and Kubernetes for automated deployments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">Kubernetes</span>
                <span className="bg-red-600/20 text-red-300 px-2 py-1 rounded text-sm">Jenkins</span>
                <span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-sm">ArgoCD</span>
              </div>
              <a href="#" className="text-purple-300 hover:text-purple-200 font-semibold">View Details →</a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Observability</h3>
              <p className="text-gray-300 mb-4">
                Implemented comprehensive monitoring stack with Prometheus, Grafana, and ELK for full observability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-sm">Prometheus</span>
                <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">Grafana</span>
                <span className="bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded text-sm">ELK Stack</span>
              </div>
              <a href="#" className="text-purple-300 hover:text-purple-200 font-semibold">View Details →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let&apos;s Work Together</h2>
          <p className="text-gray-300 text-lg mb-8">
            Ready to transform your infrastructure and accelerate your development workflow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:amr@example.com" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="https://linkedin.com/in/amrfathy" 
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Amr Fathy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
