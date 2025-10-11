import Container from "@/components/Container";

export default function About() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">About</h1>
      
      <div className="mt-6 max-w-4xl">
        <p className="text-gray-700 leading-7 mb-6">
          I&apos;m Amr Fathy, a Senior DevOps Engineer & AWS Solutions Architect with over 15 years of experience 
          in building scalable cloud infrastructure and automating complex enterprise systems. Based in Leipzig, Germany, 
          I specialize in AWS, Kubernetes, Terraform, and GitOps practices.
        </p>
        
        <p className="text-gray-700 leading-7 mb-6">
          Throughout my career, I&apos;ve led major replatforming initiatives for companies like AVIV Group, EPAM Systems, 
          and Cybrid Technology. I&apos;ve successfully migrated legacy systems to cloud-native architectures, implemented 
          comprehensive CI/CD pipelines, and achieved 99.9% uptime across multiple production environments.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Core Expertise</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>AWS:</strong> EKS, ECS, EC2, RDS, VPC, S3, IAM/OIDC, KMS, CloudFront</li>
              <li>• <strong>Automation:</strong> Terraform, AWS CDK, ArgoCD, GitHub Actions, CircleCI, Jenkins</li>
              <li>• <strong>Observability:</strong> Datadog, Prometheus, Grafana, Loki, Tempo, CloudWatch</li>
              <li>• <strong>Security:</strong> IAM hardening, Secrets Manager, container hardening</li>
              <li>• <strong>Programming:</strong> Python, Bash, PowerShell, SQL</li>
              <li>• <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Elastic Stack</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Key Achievements</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Led migration of $300M+ monthly transaction systems</li>
              <li>• Achieved 99.9% uptime across production environments</li>
              <li>• Reduced incidents by 30% through optimization</li>
              <li>• Mentored DevOps engineer interns</li>
              <li>• Processed $300M+ monthly royalty payments</li>
              <li>• Designed multi-account AWS architectures</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Professional Philosophy</h2>
          <p className="text-gray-700 leading-7">
            I believe my purpose in life—shaped by rich personal and professional experiences—is to keep learning, 
            to support others, and to lead with empathy and tolerance. I&apos;m passionate about building reliable, 
            secure, and scalable systems that enable teams to deliver software faster and more efficiently.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Notable Clients & Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>• Schneider Electric</div>
            <div>• Bose Corporation</div>
            <div>• Knab Bank</div>
            <div>• Dayton Power & Light</div>
            <div>• Hudson Energy</div>
            <div>• Green Mountain Energy</div>
            <div>• EOG Resources</div>
            <div>• Direct Energy</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
