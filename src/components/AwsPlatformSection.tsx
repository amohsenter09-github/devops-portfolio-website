'use client';

import { motion } from 'framer-motion';
import AnimatedAwsInfra from '@/components/AnimatedAwsInfra';
import MermaidDiagram from '@/components/MermaidDiagram';

export default function AwsPlatformSection() {
  return (
    <section className="py-20 md:py-32 w-full flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* ===== DESCRIPTION - Left Side with Vertical Animation ===== */}
          <motion.div
            className="lg:w-1/3 flex-shrink-0 pt-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                This architecture illustrates a fully automated AWS cloud platform built with{' '}
                <strong className="text-gray-900">Terraform</strong> and managed through a{' '}
                <strong className="text-gray-900">GitOps workflow</strong> using{' '}
                <strong className="text-gray-900">ArgoCD</strong>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                The design spans multiple AWS accounts —{' '}
                <strong className="text-gray-900">Production</strong>,{' '}
                <strong className="text-gray-900">Staging</strong>,{' '}
                <strong className="text-gray-900">Sandbox</strong>, and{' '}
                <strong className="text-gray-900">Operations</strong> — each isolated by dedicated VPCs, IAM boundaries, and encrypted storage for maximum security and compliance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Core components include{' '}
                <strong className="text-gray-900">Amazon EKS clusters</strong> running Bottlerocket nodes,{' '}
                <strong className="text-gray-900">Aurora PostgreSQL</strong>,{' '}
                <strong className="text-gray-900">ElastiCache Redis</strong>, and{' '}
                <strong className="text-gray-900">CloudFront</strong> for global delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Security and governance are enforced through{' '}
                <strong className="text-gray-900">AWS WAF</strong>,{' '}
                <strong className="text-gray-900">GuardDuty</strong>, and{' '}
                <strong className="text-gray-900">Secrets Manager</strong>, while observability is powered by{' '}
                <strong className="text-gray-900">Prometheus</strong>,{' '}
                <strong className="text-gray-900">Grafana</strong>,{' '}
                <strong className="text-gray-900">Loki</strong>, and{' '}
                <strong className="text-gray-900">CloudWatch</strong>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm">
                The entire platform is provisioned via modular{' '}
                <strong className="text-gray-900">Terraform code</strong>, following AWS best practices for automation, reusability, and least-privilege access — delivering a scalable, resilient, and operations-ready foundation for modern applications.
              </p>
            </motion.div>
          </motion.div>

          {/* ===== DIAGRAM CARD ===== */}
          <div className="flex-1 p-4 bg-white pt-20">
            <AnimatedAwsInfra />
          </div>
        </div>

        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />

        {/* ===== MERMAID DIAGRAM SECTION ===== */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-12">
          {/* Description for Mermaid Diagram */}
          <motion.div
            className="lg:w-1/3 flex-shrink-0 pt-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                This architecture represents a <strong className="text-gray-900">production-ready, AWS-native CDC pipeline</strong> designed for 
                real-time data ingestion, processing, and analytics. The design follows a <strong className="text-gray-900">streaming-first approach</strong>, 
                enabling high-throughput data movement from sources through processing layers to final analytics and delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                <strong className="text-gray-900">Change Data Capture (CDC)</strong> initiates from the <strong className="text-gray-900">CDC Source</strong>, capturing changes 
                from applications like <strong className="text-gray-900">AWS S3 Application</strong>. The CDC stream flows into <strong className="text-gray-900">Stream Platform</strong> 
                (Kafka or Kinesis) and <strong className="text-gray-900">CDC Target</strong>, providing a resilient, scalable messaging layer that decouples producers from consumers 
                and enables real-time data processing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                The <strong className="text-gray-900">Data Ingest Processing</strong> layer serves as the central hub for real-time data ingestion and transformation. 
                It receives streams from both the Stream Platform and CDC Target, performs initial processing, and routes data to <strong className="text-gray-900">Batch Processing</strong> 
                for complex transformations and to <strong className="text-gray-900">Data Warehousing</strong> (S3 and Redshift) for persistent storage. This dual-path approach 
                enables both real-time and batch processing patterns, optimizing for different use cases and latency requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm">
                The <strong className="text-gray-900">analytics and delivery layer</strong> extracts value from processed data: <strong className="text-gray-900">Business Metrics</strong> 
                provide insights from the data warehouse, <strong className="text-gray-900">Data Product Delivery</strong> serves curated datasets to downstream consumers, and 
                <strong className="text-gray-900">Real-time Analytics</strong> enable immediate insights from streaming data. This architecture ensures <strong className="text-gray-900">end-to-end data flow</strong>, 
                from source capture through processing to actionable business intelligence, all built on AWS native services.
              </p>
            </motion.div>
          </motion.div>

          {/* Mermaid Diagram Card */}
          <div className="flex-1 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <MermaidDiagram
                chart={`graph TB

    subgraph "AWS Native CDC Pipeline"

        subgraph "Sources"

            CDCSOURCE[CDC Source]

            S3APP[AWS S3 Application]

        end

        

        subgraph "Streaming & Ingestion"

            STREAMPLATFORM[Stream Platform<br/>Kafka, Kinesis]

            CDCTARGET[CDC Target<br/>Kafka, Kinesis]

        end

        

        subgraph "Processing"

            DATAINGEST[Data Ingest Processing]

            BATCHPROC[Batch Processing]

        end

        

        subgraph "Data Warehouse"

            DATAWAREHOUSE[Data Warehousing<br/>S3, Redshift]

        end

        

        subgraph "Analytics & Delivery"

            BUSINESSMETRICS[Business Metrics]

            DATAPRODUCT[Data Product Delivery]

            REALTIME[Real-time Analytics]

        end

    end



    CDCSOURCE -.->|CDC| S3APP

    STREAMPLATFORM -.->|Stream| DATAINGEST

    CDCTARGET -.->|CDC Stream| DATAINGEST

    DATAINGEST -.->|Process| BATCHPROC

    DATAINGEST -.->|Ingest| DATAWAREHOUSE

    DATAWAREHOUSE -.->|Query| BUSINESSMETRICS

    BUSINESSMETRICS -.->|Deliver| DATAPRODUCT

    DATAPRODUCT -.->|Analytics| REALTIME`}
                title="AWS Native CDC Pipeline Architecture"
              />
            </motion.div>
          </div>
        </div>
        
        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />

        {/* ===== AWS NATIVE MLOPS PIPELINE SECTION ===== */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-12">
          {/* Description for MLOps Pipeline Diagram */}
          <motion.div
            className="lg:w-1/3 flex-shrink-0 pt-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                This architecture represents a <strong className="text-gray-900">comprehensive, production-grade MLOps pipeline</strong> built entirely on AWS native services. 
                The design follows <strong className="text-gray-900">MLOps best practices</strong> for model lifecycle management, from experimentation and training 
                to deployment and continuous monitoring, ensuring reproducibility, scalability, and operational excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                The pipeline begins with <strong className="text-gray-900">SageMaker Studio</strong>, providing collaborative Jupyter notebooks and integrated development 
                environments for data scientists. <strong className="text-gray-900">SageMaker Experiments</strong> automatically tracks every training run, capturing 
                hyperparameters, metrics, and artifacts to enable reproducible experiments. The <strong className="text-gray-900">training layer</strong> supports distributed 
                training jobs, automated hyperparameter tuning, and AutoML capabilities, allowing teams to optimize model performance efficiently.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                <strong className="text-gray-900">Model management</strong> is handled through <strong className="text-gray-900">SageMaker Model Registry</strong>, which provides 
                version control, approval workflows, and model lineage tracking. Model artifacts are stored in <strong className="text-gray-900">S3</strong>, while container images 
                are managed in <strong className="text-gray-900">ECR</strong>, enabling consistent deployment across environments. The <strong className="text-gray-900">deployment layer</strong> 
                offers multiple serving options: real-time endpoints for low-latency inference, batch transform for large-scale predictions, and serverless APIs via 
                Lambda and API Gateway for cost-effective, event-driven inference.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                <strong className="text-gray-900">Monitoring and governance</strong> are critical for production ML systems: <strong className="text-gray-900">CloudWatch</strong> 
                captures real-time metrics, logs, and performance indicators. <strong className="text-gray-900">SageMaker Clarify</strong> analyzes model predictions for 
                bias, fairness, and explainability, ensuring ethical AI practices. <strong className="text-gray-900">SageMaker Model Monitor</strong> continuously detects 
                data drift and concept drift, automatically triggering retraining workflows when models degrade.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm">
                The <strong className="text-gray-900">orchestration layer</strong> coordinates the entire ML lifecycle: <strong className="text-gray-900">SageMaker Pipelines</strong> 
                define reusable ML workflows with built-in data processing, training, and validation steps. <strong className="text-gray-900">Step Functions</strong> orchestrates 
                complex multi-step workflows across services, while <strong className="text-gray-900">EventBridge</strong> enables event-driven automation, triggering 
                pipelines based on model drift alerts, scheduled retraining, or data availability events. This architecture ensures <strong className="text-gray-900">automated, 
                scalable, and reliable ML operations</strong> from development to production.
              </p>
            </motion.div>
          </motion.div>

          {/* MLOps Pipeline Diagram Card */}
          <div className="flex-1 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <MermaidDiagram
                chart={`graph TB

    subgraph "AWS Native MLOps Pipeline"

        subgraph "Data & Features"

            S3DATA[S3 Data Lake<br/>Training Data]

            S3FEATURE[S3 Feature Store<br/>Parquet/CSV]

        end

        

        subgraph "Development & Experimentation"

            SAGEMAKER[SageMaker Studio<br/>Notebooks]

            SMEXPERIMENT[SageMaker Experiments<br/>Tracking]

        end

        

        subgraph "Training & Optimization"

            SMTRAIN[SageMaker Training Jobs<br/>Distributed Training]

            SMTUNING[SageMaker Hyperparameter<br/>Tuning Jobs]

            SMAUTO[SageMaker AutoML<br/>Autopilot]

        end

        

        subgraph "Model Management"

            SMREGISTRY[SageMaker Model Registry<br/>Versioning]

            ECR[ECR<br/>Container Registry]

            S3MODEL[S3 Model Artifacts]

        end

        

        subgraph "Deployment & Serving"

            SMENDPOINT[SageMaker Real-time<br/>Endpoints]

            SMBATCH[SageMaker Batch<br/>Transform]

            LAMBDA[Lambda + API Gateway<br/>Serverless API]

        end

        

        subgraph "Monitoring & Governance"

            CWMETRICS[CloudWatch<br/>Metrics & Logs]

            SMCLARIFY[SageMaker Clarify<br/>Bias/Explainability]

            SMDRIFT[SageMaker Model Monitor<br/>Drift Detection]

        end

        

        subgraph "Orchestration"

            SMPIPELINE[SageMaker Pipelines<br/>ML Workflows]

            STEP[Step Functions<br/>Orchestration]

            EVENT[EventBridge<br/>Event-driven]

        end

    end

    S3DATA -->|Training Data| SAGEMAKER

    SAGEMAKER -->|Experiments| SMEXPERIMENT

    SMEXPERIMENT -->|Training Jobs| SMTRAIN

    SMTRAIN -->|Hyperparameter Tuning| SMTUNING

    SMTUNING -->|Model Artifacts| S3MODEL

    S3MODEL -->|Register Model| SMREGISTRY

    SMREGISTRY -->|Container Image| ECR

    SMREGISTRY -->|Deploy| SMENDPOINT

    SMENDPOINT -->|Real-time Inference| LAMBDA

    SMREGISTRY -->|Batch Jobs| SMBATCH

    SMENDPOINT -->|Monitoring| CWMETRICS

    CWMETRICS -->|Bias Analysis| SMCLARIFY

    SMCLARIFY -->|Drift Detection| SMDRIFT

    SMDRIFT -->|Retrain Trigger| EVENT

    EVENT -->|Orchestrate| SMPIPELINE

    SMPIPELINE -->|Coordinate| STEP

    STEP -->|Execute| SMTRAIN`}
                title="AWS Native MLOps Pipeline Architecture"
              />
            </motion.div>
          </div>
        </div>
        
        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />
        
        {/* ===== ANIMATED REDIRECTION BUTTON - Positioned under description ===== */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="lg:w-1/3 flex-shrink-0">
            <motion.div
              className="inline-flex items-center gap-3 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/blog"
                className="relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-cyan-700 rounded-lg transition-all duration-500 border border-cyan-200/40 shadow-sm hover:shadow-md hover:border-cyan-300/60"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Soft glowing effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-cyan-400/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative text-sm md:text-base text-cyan-700 font-semibold font-mono tracking-tight">
                  view_tech_details
                  <motion.span
                    className="text-cyan-500 ml-0.5"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    |
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
}

