"use client";

// ASCII Art Diagrams Component
export function ASCIIArtDiagrams() {
  return (
    <div className="space-y-6">
      {/* AWS Multi-Account Architecture */}
      <div className="code-block">
        <h3 className="text-green-300 mb-4 font-bold">AWS Multi-Account Architecture</h3>
        <pre>{`
┌─────────────────────────────────────────────────────────────────┐
│                        AWS Organizations                        │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Management     │  │  Production     │  │  Staging        │  │
│  │  Account        │  │  Account        │  │  Account        │  │
│  │                 │  │                 │  │                 │  │
│  │  ┌───────────┐  │  │  ┌───────────┐  │  │  ┌───────────┐  │  │
│  │  │IAM Center │  │◄─┤  │EKS Cluster │  │◄─┤  │EKS Cluster │  │  │
│  │  └───────────┘  │  │  └───────────┘  │  │  └───────────┘  │  │
│  │                 │  │                 │  │                 │  │
│  │  ┌───────────┐  │  │  ┌───────────┐  │  │  ┌───────────┐  │  │
│  │  │CloudTrail │  │◄─┤  │RDS DB     │  │◄─┤  │RDS DB     │  │  │
│  │  └───────────┘  │  │  └───────────┘  │  │  └───────────┘  │  │
│  │                 │  │                 │  │                 │  │
│  │  ┌───────────┐  │  │  ┌───────────┐  │  │  ┌───────────┐  │  │
│  │  │Config     │  │◄─┤  │ALB        │  │◄─┤  │CI/CD      │  │  │
│  │  └───────────┘  │  │  └───────────┘  │  │  └───────────┘  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
        `}</pre>
      </div>

      {/* Kubernetes Microservices */}
      <div className="code-block">
        <h3 className="text-blue-300 mb-4 font-bold">Kubernetes Microservices with ArgoCD</h3>
        <pre>{`
┌─────────────────────────────────────────────────────────────────┐
│                        Git Repository                           │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Application   │  │   Helm Charts   │  │   K8s Manifests│  │
│  │   Code          │  │                 │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        ArgoCD                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Application   │  │   Application   │  │   Application   │  │
│  │   Set           │  │   Set           │  │   Set           │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Kubernetes Cluster                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   API Gateway   │  │   User Service  │  │  Order Service  │  │
│  │   (Kong/Istio)  │  │   (Node.js)     │  │   (Java)        │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │ Payment Service │  │ Notification    │  │   Database      │  │
│  │   (Python)      │  │   Service       │  │   (PostgreSQL)  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
        `}</pre>
      </div>

      {/* CI/CD Pipeline */}
      <div className="code-block">
        <h3 className="text-yellow-300 mb-4 font-bold">CI/CD Pipeline Flow</h3>
        <pre>{`
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Code   │───▶│  Build  │───▶│  Test   │───▶│ Security│───▶│ Deploy  │
│ Commit  │    │ Docker  │    │ Unit    │    │ Scan    │    │ ArgoCD  │
│ GitHub  │    │ Image   │    │ Tests   │    │ Trivy   │    │ Helm    │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
     │              │              │              │              │
     ▼              ▼              ▼              ▼              ▼
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ Git     │    │ Docker  │    │ Jest    │    │ Trivy   │    │ EKS     │
│ Webhook │    │ Buildx  │    │ Coverage│    │ Reports │    │ Cluster │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
        `}</pre>
      </div>

      {/* Observability Stack */}
      <div className="code-block">
        <h3 className="text-purple-300 mb-4 font-bold">Observability Stack</h3>
        <pre>{`
┌─────────────────────────────────────────────────────────────────┐
│                    Application Layer                           │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   API   │  │   User  │  │  Order  │  │Payment  │            │
│  │Gateway  │  │Service  │  │Service  │  │Service  │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Observability Layer                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │Prometheus│  │ Grafana │  │ Jaeger  │  │ELK Stack│            │
│  │ Metrics  │  │Dashboards│ │ Tracing │  │ Logging │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
└─────────────────────────────────────────────────────────────────┘
        `}</pre>
      </div>
    </div>
  );
}

// SVG Graphics Component
export function SVGDiagrams() {
  return (
    <div className="space-y-8">
      {/* AWS Architecture SVG */}
      <div className="professional-card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AWS Multi-Account Architecture</h3>
        <svg viewBox="0 0 800 400" className="w-full h-auto">
          {/* Management Account */}
          <rect x="50" y="50" width="200" height="300" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" rx="8"/>
          <text x="150" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Management Account</text>
          <rect x="70" y="100" width="160" height="40" fill="#60A5FA" rx="4"/>
          <text x="150" y="125" textAnchor="middle" fill="white" fontSize="12">IAM Identity Center</text>
          <rect x="70" y="150" width="160" height="40" fill="#60A5FA" rx="4"/>
          <text x="150" y="175" textAnchor="middle" fill="white" fontSize="12">CloudTrail</text>
          <rect x="70" y="200" width="160" height="40" fill="#60A5FA" rx="4"/>
          <text x="150" y="225" textAnchor="middle" fill="white" fontSize="12">Config Rules</text>

          {/* Production Account */}
          <rect x="300" y="50" width="200" height="300" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8"/>
          <text x="400" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Production Account</text>
          <rect x="320" y="100" width="160" height="40" fill="#34D399" rx="4"/>
          <text x="400" y="125" textAnchor="middle" fill="white" fontSize="12">EKS Cluster</text>
          <rect x="320" y="150" width="160" height="40" fill="#34D399" rx="4"/>
          <text x="400" y="175" textAnchor="middle" fill="white" fontSize="12">RDS Database</text>
          <rect x="320" y="200" width="160" height="40" fill="#34D399" rx="4"/>
          <text x="400" y="225" textAnchor="middle" fill="white" fontSize="12">Application LB</text>

          {/* Staging Account */}
          <rect x="550" y="50" width="200" height="300" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" rx="8"/>
          <text x="650" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Staging Account</text>
          <rect x="570" y="100" width="160" height="40" fill="#A78BFA" rx="4"/>
          <text x="650" y="125" textAnchor="middle" fill="white" fontSize="12">EKS Cluster</text>
          <rect x="570" y="150" width="160" height="40" fill="#A78BFA" rx="4"/>
          <text x="650" y="175" textAnchor="middle" fill="white" fontSize="12">RDS Database</text>
          <rect x="570" y="200" width="160" height="40" fill="#A78BFA" rx="4"/>
          <text x="650" y="225" textAnchor="middle" fill="white" fontSize="12">CI/CD Pipeline</text>

          {/* Connection Lines */}
          <line x1="250" y1="200" x2="300" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="500" y1="200" x2="550" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280"/>
            </marker>
          </defs>
        </svg>
      </div>

      {/* Kubernetes Architecture SVG */}
      <div className="professional-card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kubernetes Microservices</h3>
        <svg viewBox="0 0 800 500" className="w-full h-auto">
          {/* Git Repository */}
          <rect x="50" y="50" width="150" height="100" fill="#F59E0B" stroke="#D97706" strokeWidth="2" rx="8"/>
          <text x="125" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Git Repository</text>
          <text x="125" y="100" textAnchor="middle" fill="white" fontSize="12">Application Code</text>
          <text x="125" y="115" textAnchor="middle" fill="white" fontSize="12">Helm Charts</text>
          <text x="125" y="130" textAnchor="middle" fill="white" fontSize="12">K8s Manifests</text>

          {/* ArgoCD */}
          <rect x="300" y="50" width="150" height="100" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8"/>
          <text x="375" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ArgoCD</text>
          <text x="375" y="100" textAnchor="middle" fill="white" fontSize="12">Application Sets</text>
          <text x="375" y="115" textAnchor="middle" fill="white" fontSize="12">GitOps Sync</text>
          <text x="375" y="130" textAnchor="middle" fill="white" fontSize="12">Multi-Environment</text>

          {/* Kubernetes Cluster */}
          <rect x="550" y="50" width="200" height="100" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" rx="8"/>
          <text x="650" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Kubernetes Cluster</text>
          <text x="650" y="100" textAnchor="middle" fill="white" fontSize="12">EKS Production</text>
          <text x="650" y="115" textAnchor="middle" fill="white" fontSize="12">Microservices</text>
          <text x="650" y="130" textAnchor="middle" fill="white" fontSize="12">Auto-scaling</text>

          {/* Microservices */}
          <rect x="100" y="250" width="120" height="80" fill="#EF4444" stroke="#DC2626" strokeWidth="2" rx="8"/>
          <text x="160" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">API Gateway</text>
          <text x="160" y="290" textAnchor="middle" fill="white" fontSize="10">Kong/Istio</text>
          <text x="160" y="305" textAnchor="middle" fill="white" fontSize="10">Load Balancer</text>

          <rect x="250" y="250" width="120" height="80" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" rx="8"/>
          <text x="310" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">User Service</text>
          <text x="310" y="290" textAnchor="middle" fill="white" fontSize="10">Node.js</text>
          <text x="310" y="305" textAnchor="middle" fill="white" fontSize="10">Authentication</text>

          <rect x="400" y="250" width="120" height="80" fill="#F59E0B" stroke="#D97706" strokeWidth="2" rx="8"/>
          <text x="460" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Order Service</text>
          <text x="460" y="290" textAnchor="middle" fill="white" fontSize="10">Java Spring</text>
          <text x="460" y="305" textAnchor="middle" fill="white" fontSize="10">Business Logic</text>

          <rect x="550" y="250" width="120" height="80" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8"/>
          <text x="610" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Payment Service</text>
          <text x="610" y="290" textAnchor="middle" fill="white" fontSize="10">Python</text>
          <text x="610" y="305" textAnchor="middle" fill="white" fontSize="10">Payment Processing</text>

          {/* Database */}
          <rect x="300" y="400" width="120" height="80" fill="#6B7280" stroke="#4B5563" strokeWidth="2" rx="8"/>
          <text x="360" y="425" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Database</text>
          <text x="360" y="440" textAnchor="middle" fill="white" fontSize="10">PostgreSQL</text>
          <text x="360" y="455" textAnchor="middle" fill="white" fontSize="10">Multi-AZ</text>

          {/* Connection Lines */}
          <line x1="200" y1="100" x2="300" y2="100" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
          <line x1="450" y1="100" x2="550" y2="100" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
          <line x1="650" y1="150" x2="160" y2="250" stroke="#6B7280" strokeWidth="2"/>
          <line x1="650" y1="150" x2="310" y2="250" stroke="#6B7280" strokeWidth="2"/>
          <line x1="650" y1="150" x2="460" y2="250" stroke="#6B7280" strokeWidth="2"/>
          <line x1="650" y1="150" x2="610" y2="250" stroke="#6B7280" strokeWidth="2"/>
          <line x1="310" y1="330" x2="360" y2="400" stroke="#6B7280" strokeWidth="2"/>
          <line x1="460" y1="330" x2="360" y2="400" stroke="#6B7280" strokeWidth="2"/>
          <line x1="610" y1="330" x2="360" y2="400" stroke="#6B7280" strokeWidth="2"/>

          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280"/>
            </marker>
          </defs>
        </svg>
      </div>

      {/* CI/CD Pipeline SVG */}
      <div className="professional-card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">CI/CD Pipeline Flow</h3>
        <svg viewBox="0 0 800 200" className="w-full h-auto">
          {/* Pipeline Steps */}
          <rect x="50" y="50" width="120" height="80" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" rx="8"/>
          <text x="110" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1. Code Commit</text>
          <text x="110" y="90" textAnchor="middle" fill="white" fontSize="10">GitHub/GitLab</text>
          <text x="110" y="105" textAnchor="middle" fill="white" fontSize="10">Webhook Trigger</text>

          <rect x="200" y="50" width="120" height="80" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8"/>
          <text x="260" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">2. Build & Test</text>
          <text x="260" y="90" textAnchor="middle" fill="white" fontSize="10">Docker Build</text>
          <text x="260" y="105" textAnchor="middle" fill="white" fontSize="10">Unit Tests</text>

          <rect x="350" y="50" width="120" height="80" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" rx="8"/>
          <text x="410" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3. Security Scan</text>
          <text x="410" y="90" textAnchor="middle" fill="white" fontSize="10">Trivy Scanner</text>
          <text x="410" y="105" textAnchor="middle" fill="white" fontSize="10">Vulnerability Check</text>

          <rect x="500" y="50" width="120" height="80" fill="#F59E0B" stroke="#D97706" strokeWidth="2" rx="8"/>
          <text x="560" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">4. Deploy</text>
          <text x="560" y="90" textAnchor="middle" fill="white" fontSize="10">ArgoCD Sync</text>
          <text x="560" y="105" textAnchor="middle" fill="white" fontSize="10">Helm Charts</text>

          <rect x="650" y="50" width="120" height="80" fill="#EF4444" stroke="#DC2626" strokeWidth="2" rx="8"/>
          <text x="710" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">5. Monitor</text>
          <text x="710" y="90" textAnchor="middle" fill="white" fontSize="10">Prometheus</text>
          <text x="710" y="105" textAnchor="middle" fill="white" fontSize="10">Grafana</text>

          {/* Connection Lines */}
          <line x1="170" y1="90" x2="200" y2="90" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead3)"/>
          <line x1="320" y1="90" x2="350" y2="90" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead3)"/>
          <line x1="470" y1="90" x2="500" y2="90" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead3)"/>
          <line x1="620" y1="90" x2="650" y2="90" stroke="#6B7280" strokeWidth="3" markerEnd="url(#arrowhead3)"/>

          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead3" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#6B7280"/>
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}
