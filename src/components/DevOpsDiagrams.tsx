"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  SiKubernetes, 
  SiAmazon, 
  SiDocker, 
  SiGithub, 
  SiPrometheus,
  SiGrafana,
  SiArgo,
  SiPostgresql,
  SiTerraform
} from "react-icons/si";

interface DiagramProps {
  title: string;
  children: React.ReactNode;
}

function Diagram({ title, children }: DiagramProps) {
  return (
    <div className="glass-card mb-8">
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-white text-center">
          {title}
        </h3>
        <div className="flex justify-center">
          {children}
      </div>
      </div>
    </div>
  );
}

export default function DevOpsDiagrams() {
  const [activeDiagram, setActiveDiagram] = useState("enterprise-gitops");

  const diagrams = {
    "app-of-apps": (
      <Diagram title="App of Apps Pattern - Multicluster GitOps">
        <div className="w-full max-w-6xl">
          {/* Git Repository */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">Git</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Git Repository</h4>
              <p className="text-white/80 text-sm">app-of-apps-chart/<br/>values.yaml</p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-8 bg-white/40"></div>
          </div>

          {/* ArgoCD App of Apps */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h4 className="font-semibold text-white mb-2">ArgoCD</h4>
              <p className="text-white/80 text-sm">App of Apps Controller<br/>Multicluster Management</p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-8 bg-white/40"></div>
          </div>

          {/* Clusters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Minikube Cluster */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h4 className="font-semibold text-white mb-4 text-center">Minikube Cluster</h4>
              <div className="space-y-4">
                {/* Prometheus */}
                <div className="bg-white/5 border border-white/10 rounded p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-orange-500/30 rounded flex items-center justify-center mr-3">
                      <span className="text-orange-300 text-xs font-bold">P</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-white text-sm">Prometheus</h6>
                      <p className="text-white/70 text-xs">v9.7.4</p>
                    </div>
                  </div>
                  <div className="text-white/60 text-xs">
                    • Metrics Collection<br/>
                    • Service Discovery<br/>
                    • Alerting Rules
                  </div>
                </div>

                {/* Sample App */}
                <div className="bg-white/5 border border-white/10 rounded p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-green-500/30 rounded flex items-center justify-center mr-3">
                      <span className="text-green-300 text-xs font-bold">N</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-white text-sm">Sample App</h6>
                      <p className="text-white/70 text-xs">nginx-chart</p>
                    </div>
                  </div>
                  <div className="text-white/60 text-xs">
                    • Web Application<br/>
                    • Load Balancer<br/>
                    • Health Checks
                  </div>
                </div>
              </div>
            </div>

            {/* GKE Cluster */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h4 className="font-semibold text-white mb-4 text-center">GKE Cluster</h4>
              <div className="space-y-4">
                {/* Prometheus */}
                <div className="bg-white/5 border border-white/10 rounded p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-orange-500/30 rounded flex items-center justify-center mr-3">
                      <span className="text-orange-300 text-xs font-bold">P</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-white text-sm">Prometheus</h6>
                      <p className="text-white/70 text-xs">v9.7.4</p>
                    </div>
                  </div>
                  <div className="text-white/60 text-xs">
                    • Metrics Collection<br/>
                    • Service Discovery<br/>
                    • Alerting Rules
                  </div>
                </div>

                {/* Sample App */}
                <div className="bg-white/5 border border-white/10 rounded p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-green-500/30 rounded flex items-center justify-center mr-3">
                      <span className="text-green-300 text-xs font-bold">N</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-white text-sm">Sample App</h6>
                      <p className="text-white/70 text-xs">nginx-chart</p>
                    </div>
                  </div>
                  <div className="text-white/60 text-xs">
                    • Web Application<br/>
                    • Load Balancer<br/>
                    • Health Checks
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values.yaml Configuration */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-white mb-3 text-center">values.yaml Configuration</h5>
            <div className="bg-black/20 rounded p-3 text-xs font-mono text-white/80">
              <div className="text-green-400">clusters:</div>
              <div className="ml-4 text-blue-400">- name: minikube</div>
              <div className="ml-8 text-yellow-400">destinationServer: https://kubernetes.default.svc</div>
              <div className="ml-8 text-blue-400">apps:</div>
              <div className="ml-12 text-purple-400">prometheus: enabled: true, version: &quot;9.7.4&quot;</div>
              <div className="ml-12 text-purple-400">sampleApp: enabled: true, branch: HEAD</div>
              <div className="ml-4 text-blue-400">- name: gke</div>
              <div className="ml-8 text-yellow-400">destinationServer: https://[KUBERNETES_MASTER_IP]</div>
              <div className="ml-8 text-blue-400">apps:</div>
              <div className="ml-12 text-purple-400">prometheus: enabled: true, version: &quot;9.7.4&quot;</div>
              <div className="ml-12 text-purple-400">sampleApp: enabled: true, branch: HEAD</div>
            </div>
          </div>
        </div>
      </Diagram>
    ),

    "multicluster": (
      <Diagram title="Multicluster GitOps Architecture">
        <div className="w-full max-w-6xl">
          {/* Central ArgoCD */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h4 className="font-semibold text-white mb-2">ArgoCD Hub</h4>
              <p className="text-white/80 text-sm">Central GitOps Controller<br/>Multicluster Management<br/>RBAC & Security</p>
            </div>
          </div>

          {/* Clusters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Development Cluster */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 font-bold text-sm">DEV</span>
                </div>
                <h5 className="font-semibold text-white">Development</h5>
                <p className="text-white/70 text-xs">Local/Minikube</p>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Prometheus</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Sample App</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Dev Tools</span>
                </div>
              </div>
            </div>

            {/* Staging Cluster */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-400 font-bold text-sm">STG</span>
                </div>
                <h5 className="font-semibold text-white">Staging</h5>
                <p className="text-white/70 text-xs">GKE Regional</p>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Prometheus</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Sample App</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Testing Tools</span>
                </div>
              </div>
            </div>

            {/* Production Cluster */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-400 font-bold text-sm">PROD</span>
                </div>
                <h5 className="font-semibold text-white">Production</h5>
                <p className="text-white/70 text-xs">GKE Multi-Zone</p>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Prometheus</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Sample App</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* RBAC & Security */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h5 className="font-semibold text-white mb-4 text-center">RBAC & Security</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-400 font-bold text-sm">SA</span>
                </div>
                <p className="text-white/80 text-xs">ServiceAccount</p>
                <p className="text-white/60 text-xs">argocd-manager</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-red-400 font-bold text-sm">CR</span>
                </div>
                <p className="text-white/80 text-xs">ClusterRole</p>
                <p className="text-white/60 text-xs">argocd-manager-role</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-400 font-bold text-sm">CRB</span>
                </div>
                <p className="text-white/80 text-xs">ClusterRoleBinding</p>
                <p className="text-white/60 text-xs">argocd-manager-role-binding</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 font-bold text-sm">TLS</span>
                </div>
                <p className="text-white/80 text-xs">TLS Certificates</p>
                <p className="text-white/60 text-xs">Secure Communication</p>
              </div>
            </div>
          </div>
        </div>
      </Diagram>
    ),
    argocd: (
      <Diagram title="ArgoCD GitOps Implementation">
        <div className="w-full max-w-5xl">
          {/* Terraform Infrastructure Management */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <SiTerraform className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Infrastructure as Code</h4>
              <p className="text-white/80 text-sm">All Infrastructure Deployed by Terraform<br/>EKS, RDS, ECR, ALB, Route53, VPC</p>
            </div>
          </div>

          {/* GitOps Flow */}
     <div className="space-y-8">
            {/* Git Repository */}
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">Git</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Git Repository</h4>
                <p className="text-white/80 text-sm">Kubernetes Manifests<br/>Helm Charts<br/>Kustomize</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-white/40"></div>
      </div>

          {/* ArgoCD */}
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h4 className="font-semibold text-white mb-2">ArgoCD</h4>
                <p className="text-white/80 text-sm">GitOps Controller<br/>Continuous Sync<br/>Health Monitoring</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-white/40"></div>
            </div>

            {/* EKS Cluster with Microservices */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h4 className="font-semibold text-white mb-4 text-center">AWS EKS Cluster</h4>
              
              {/* Namespaces */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-400 font-bold text-sm">Prod</span>
                  </div>
                  <p className="text-white/80 text-xs">Production</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-400 font-bold text-sm">Stag</span>
                  </div>
                  <p className="text-white/80 text-xs">Staging</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-400 font-bold text-sm">Dev</span>
                  </div>
                  <p className="text-white/80 text-xs">Development</p>
                </div>
              </div>

          {/* Microservices */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                  <div className="w-8 h-8 bg-purple-500/30 rounded flex items-center justify-center mx-auto mb-1">
                    <span className="text-purple-300 text-xs font-bold">API</span>
                  </div>
                  <p className="text-white/70 text-xs">API Gateway</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                  <div className="w-8 h-8 bg-blue-500/30 rounded flex items-center justify-center mx-auto mb-1">
                    <span className="text-blue-300 text-xs font-bold">AUTH</span>
                  </div>
                  <p className="text-white/70 text-xs">Auth Service</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                  <div className="w-8 h-8 bg-green-500/30 rounded flex items-center justify-center mx-auto mb-1">
                    <span className="text-green-300 text-xs font-bold">USER</span>
                  </div>
                  <p className="text-white/70 text-xs">User Service</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                  <div className="w-8 h-8 bg-orange-500/30 rounded flex items-center justify-center mx-auto mb-1">
                    <span className="text-orange-300 text-xs font-bold">PAY</span>
                  </div>
                  <p className="text-white/70 text-xs">Payment Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Diagram>
    ),

    microservices: (
      <Diagram title="Microservices Architecture on EKS">
        <div className="w-full max-w-6xl">
          {/* Terraform Infrastructure Management */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <SiTerraform className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Infrastructure as Code</h4>
              <p className="text-white/80 text-sm">All Infrastructure Deployed by Terraform<br/>EKS, RDS, ECR, ALB, Route53, VPC</p>
            </div>
          </div>

          {/* EKS Cluster Overview */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-white mb-4 text-center">AWS EKS Cluster Architecture</h4>
            
            {/* Node Groups */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-400 font-bold">Worker</span>
                </div>
                <p className="text-white/80 text-sm">Worker Nodes</p>
                <p className="text-white/60 text-xs">t3.medium</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 font-bold">Spot</span>
                </div>
                <p className="text-white/80 text-sm">Spot Instances</p>
                <p className="text-white/60 text-xs">Cost Optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-400 font-bold">GPU</span>
                </div>
                <p className="text-white/80 text-sm">GPU Nodes</p>
                <p className="text-white/60 text-xs">ML Workloads</p>
              </div>
            </div>
          </div>

          {/* Microservices Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side - Core Services */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white text-center mb-4">Core Services</h5>
              
              {/* API Gateway */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-500/30 rounded flex items-center justify-center mr-3">
                    <span className="text-purple-300 font-bold text-sm">API</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white">API Gateway</h6>
                    <p className="text-white/70 text-xs">Kong / AWS ALB</p>
                  </div>
                </div>
                <div className="text-white/60 text-xs">
                  • Rate Limiting<br/>
                  • Authentication<br/>
                  • Load Balancing
                </div>
              </div>

              {/* Auth Service */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500/30 rounded flex items-center justify-center mr-3">
                    <span className="text-blue-300 font-bold text-sm">AUTH</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white">Auth Service</h6>
                    <p className="text-white/70 text-xs">JWT / OAuth2</p>
                  </div>
                </div>
                <div className="text-white/60 text-xs">
                  • User Authentication<br/>
                  • Token Management<br/>
                  • RBAC
                </div>
              </div>

              {/* User Service */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-500/30 rounded flex items-center justify-center mr-3">
                    <span className="text-green-300 font-bold text-sm">USER</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white">User Service</h6>
                    <p className="text-white/70 text-xs">Node.js / Python</p>
                  </div>
                </div>
                <div className="text-white/60 text-xs">
                  • User Management<br/>
                  • Profile Data<br/>
                  • Preferences
                </div>
              </div>
            </div>

            {/* Right Side - Business Services */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white text-center mb-4">Business Services</h5>
              
              {/* Payment Service */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-500/30 rounded flex items-center justify-center mr-3">
                    <span className="text-orange-300 font-bold text-sm">PAY</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white">Payment Service</h6>
                    <p className="text-white/70 text-xs">Stripe / PayPal</p>
                  </div>
                </div>
                <div className="text-white/60 text-xs">
                  • Payment Processing<br/>
                  • Billing<br/>
                  • Refunds
                </div>
              </div>

              {/* Notification Service */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-500/30 rounded flex items-center justify-center mr-3">
                    <span className="text-yellow-300 font-bold text-sm">NOTIF</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white">Notification Service</h6>
                    <p className="text-white/70 text-xs">SNS / SES</p>
                  </div>
                </div>
                <div className="text-white/60 text-xs">
                  • Email Notifications<br/>
                  • SMS Alerts<br/>
                  • Push Notifications
                </div>
              </div>

              {/* Analytics Service */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-500/30 rounded flex items-center justify-center mr-3">
                    <span className="text-red-300 font-bold text-sm">ANAL</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-white">Analytics Service</h6>
                    <p className="text-white/70 text-xs">Kafka / Kinesis</p>
                  </div>
                </div>
                <div className="text-white/60 text-xs">
                  • Event Streaming<br/>
                  • Data Processing<br/>
                  • Metrics Collection
                </div>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h5 className="font-semibold text-white text-center mb-4">Data Layer</h5>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-500/30 rounded flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-300 font-bold text-sm">RDS</span>
                </div>
                <p className="text-white/80 text-xs">PostgreSQL</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-500/30 rounded flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-300 font-bold text-sm">Redis</span>
                </div>
                <p className="text-white/80 text-xs">Cache</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-500/30 rounded flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-300 font-bold text-sm">S3</span>
                </div>
                <p className="text-white/80 text-xs">Object Storage</p>
              </div>
            </div>
          </div>
        </div>
      </Diagram>
    ),

    gitops: (
      <Diagram title="Complete GitOps Workflow">
        <div className="w-full max-w-4xl">
          {/* Terraform Infrastructure Management */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <SiTerraform className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Infrastructure as Code</h4>
              <p className="text-white/80 text-sm">All Infrastructure Deployed by Terraform<br/>EKS, RDS, ECR, ALB, Route53, VPC</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Step 1 - Developer */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500/30 border border-blue-500/50 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-300 font-bold">1</span>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <h4 className="font-semibold text-white">Developer Push</h4>
                <p className="text-sm text-white/80">Code changes pushed to Git repository</p>
                <div className="mt-2 text-xs text-white/60">
                  • Feature branch → Main branch<br/>
                  • Kubernetes manifests updated<br/>
                  • Helm charts versioned
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-6 bg-white/40"></div>
            </div>
            
             {/* Step 2 - CI/CD */}
             <div className="flex items-center">
               <div className="w-12 h-12 bg-green-500/30 border border-green-500/50 rounded-full flex items-center justify-center mr-4">
                 <span className="text-green-300 font-bold">2</span>
               </div>
               <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                 <div className="flex items-center mb-2">
                   <SiTerraform className="w-5 h-5 text-purple-400 mr-2" />
                   <h4 className="font-semibold text-white">CI/CD Pipeline</h4>
                 </div>
                 <p className="text-sm text-white/80">GitHub Actions builds and tests</p>
                 <div className="mt-2 text-xs text-white/60">
                   • Docker image build<br/>
                   • Security scanning<br/>
                   • Push to ECR
                 </div>
               </div>
             </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-6 bg-white/40"></div>
      </div>

            {/* Step 3 - ArgoCD */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500/30 border border-purple-500/50 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-300 font-bold">3</span>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <h4 className="font-semibold text-white">ArgoCD Sync</h4>
                <p className="text-sm text-white/80">GitOps controller detects changes</p>
                <div className="mt-2 text-xs text-white/60">
                  • Monitors Git repository<br/>
                  • Compares desired vs actual state<br/>
                  • Deploys to EKS cluster
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-6 bg-white/40"></div>
            </div>
            
            {/* Step 4 - EKS */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-500/30 border border-orange-500/50 rounded-full flex items-center justify-center mr-4">
                <span className="text-orange-300 font-bold">4</span>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <h4 className="font-semibold text-white">EKS Deployment</h4>
                <p className="text-sm text-white/80">Microservices deployed to Kubernetes</p>
                <div className="mt-2 text-xs text-white/60">
                  • Rolling updates<br/>
                  • Health checks<br/>
                  • Auto-scaling
                </div>
              </div>
            </div>
          </div>
        </div>
      </Diagram>
    ),

    "enterprise-gitops": (
      <Diagram title="Enterprise GitOps Architecture - Kustomize + ArgoCD">
        <div className="w-full max-w-7xl">
          {/* Terraform Infrastructure Management */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <SiTerraform className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Infrastructure as Code</h4>
              <p className="text-white/80 text-sm">Entire Infrastructure Deployed by Terraform<br/>EKS, RDS, ECR, ALB, Route53, VPC</p>
            </div>
          </div>

          {/* Git Repository Section */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">Git</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Kubernetes Applications Repository</h4>
              <p className="text-white/80 text-sm">Kustomize Base + Overlays<br/>Enterprise/k8s-applications.git</p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-8 bg-white/40"></div>
          </div>

          {/* ArgoCD Hub */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                <SiArgo className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">ArgoCD Hub</h4>
              <p className="text-white/80 text-sm">Operations Environment<br/>argocd.enterprise.build<br/>Image Updater Enabled</p>
              <div className="mt-2 flex items-center justify-center">
                <SiTerraform className="w-4 h-4 text-purple-400 mr-1" />
                <span className="text-white/60 text-xs">Infrastructure as Code</span>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-8 bg-white/40"></div>
          </div>

          {/* AWS Accounts & EKS Clusters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Sandbox */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-400 font-bold text-sm">SB</span>
                </div>
                <h5 className="font-semibold text-white">Sandbox</h5>
                <p className="text-white/70 text-xs">ca-central-1</p>
                <p className="text-white/60 text-xs">EKS Cluster</p>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">identity-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">finance-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">dashboard-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">+ 9 more services</span>
                </div>
              </div>
            </div>

            {/* Staging */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-400 font-bold text-sm">STG</span>
                </div>
                <h5 className="font-semibold text-white">Staging</h5>
                <p className="text-white/70 text-xs">ca-central-1</p>
                <p className="text-white/60 text-xs">EKS Cluster</p>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">identity-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">finance-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">dashboard-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">+ 9 more services</span>
                </div>
              </div>
            </div>

            {/* Production */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-400 font-bold text-sm">PROD</span>
                </div>
                <h5 className="font-semibold text-white">Production</h5>
                <p className="text-white/70 text-xs">ca-central-1</p>
                <p className="text-white/60 text-xs">EKS Cluster</p>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">identity-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">finance-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">dashboard-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">+ 9 more services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Microservices Architecture */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-6">
            <h5 className="font-semibold text-white mb-4 text-center">Enterprise Microservices Architecture</h5>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* API Services */}
              <div className="space-y-2">
                <h6 className="font-semibold text-white text-sm text-center mb-2">API Services</h6>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">identity-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">finance-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">org-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">events-service</span>
                </div>
              </div>

              {/* Internal Services */}
              <div className="space-y-2">
                <h6 className="font-semibold text-white text-sm text-center mb-2">Internal Services</h6>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">accounts-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">identity-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">keys-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">files-service</span>
                </div>
              </div>

              {/* Integration Services */}
              <div className="space-y-2">
                <h6 className="font-semibold text-white text-sm text-center mb-2">Integration Services</h6>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">exchange-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">transfers-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">orchestrator-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">notifications-service</span>
                </div>
              </div>

              {/* Portal Services */}
              <div className="space-y-2">
                <h6 className="font-semibold text-white text-sm text-center mb-2">Portal Services</h6>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">dashboard-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">payments-service</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-2 text-center">
                  <span className="text-white/80 text-xs">ingress</span>
                </div>
              </div>
            </div>
          </div>

          {/* AWS Infrastructure with Logging */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <SiTerraform className="w-6 h-6 text-purple-400 mr-2" />
              <h5 className="font-semibold text-white text-center">AWS Infrastructure (Deployed by Terraform)</h5>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SiKubernetes className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-white/80 text-xs">EKS Clusters</p>
                <p className="text-white/60 text-xs">ca-central-1</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SiPostgresql className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-white/80 text-xs">Aurora PostgreSQL</p>
                <p className="text-white/60 text-xs">Multi-AZ</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SiDocker className="w-8 h-8 text-orange-400" />
                </div>
                <p className="text-white/80 text-xs">Container Registry</p>
                <p className="text-white/60 text-xs">AWS ECR Registry</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SiAmazon className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white/80 text-xs">Application Load Balancer</p>
                <p className="text-white/60 text-xs">External DNS</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SiGithub className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-white/80 text-xs">Git Repository</p>
                <p className="text-white/60 text-xs">GitHub/GitLab</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/40 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SiArgo className="w-8 h-8 text-orange-400" />
                </div>
                <p className="text-white/80 text-xs">GitOps Controller</p>
                <p className="text-white/60 text-xs">Image Updater</p>
              </div>
            </div>
          </div>

        </div>
      </Diagram>
    ),
    monitoring: (
      <Diagram title="Observability Stack">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-3 gap-6">
            {/* Prometheus */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500/20 border border-orange-500/40 rounded-lg flex items-center justify-center mx-auto mb-3">
                <SiPrometheus className="w-10 h-10 text-orange-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Prometheus</h4>
              <p className="text-sm text-white/80">Metrics Collection</p>
              <div className="mt-3 space-y-1">
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <p className="text-xs text-white/60">CPU, Memory, Network</p>
              </div>
            </div>
            
            {/* Grafana */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mx-auto mb-3">
                <SiGrafana className="w-10 h-10 text-blue-300" />
              </div>
              <h4 className="font-semibold text-white mb-2">Grafana</h4>
              <p className="text-sm text-white/80">Dashboards</p>
              <div className="mt-3 space-y-1">
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <p className="text-xs text-white/60">Visualization</p>
              </div>
            </div>
            
            {/* Jaeger */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-300 font-bold text-2xl">J</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Jaeger</h4>
              <p className="text-sm text-white/80">Distributed Tracing</p>
              <div className="mt-3 space-y-1">
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
                <p className="text-xs text-white/60">Request Flow</p>
              </div>
            </div>
          </div>
        </div>
      </Diagram>
    )
  };

  return (
    <div className="w-full">
      {/* Diagram Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
          {Object.keys(diagrams).map((key) => (
            <button
              key={key}
              onClick={() => setActiveDiagram(key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeDiagram === key
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {key === 'enterprise-gitops' ? 'Enterprise GitOps' :
               key === 'app-of-apps' ? 'App of Apps' : 
               key === 'multicluster' ? 'Multicluster' :
               key === 'argocd' ? 'ArgoCD' : 
               key === 'microservices' ? 'Microservices' :
               key === 'gitops' ? 'GitOps Flow' :
               key === 'monitoring' ? 'Monitoring' : key}
            </button>
          ))}
        </div>
      </div>

      {/* Active Diagram */}
      <motion.div
        key={activeDiagram}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {diagrams[activeDiagram as keyof typeof diagrams]}
      </motion.div>
    </div>
  );
}