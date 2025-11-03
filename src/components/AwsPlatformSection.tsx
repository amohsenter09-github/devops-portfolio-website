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
            className="lg:w-1/3 flex-shrink-0"
            style={{ paddingTop: '80px' }}
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
          <div className="flex-1 p-4 bg-white" style={{ paddingTop: '80px' }}>
            <AnimatedAwsInfra />
          </div>
        </div>

        {/* ===== SECTION DIVIDER ===== */}
        <div className="max-w-5xl mx-auto my-20 border-t border-gray-200" />

        {/* ===== MERMAID DIAGRAM SECTION ===== */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-12">
          {/* Description for Mermaid Diagram */}
          <motion.div
            className="lg:w-1/3 flex-shrink-0"
            style={{ paddingTop: '80px' }}
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
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Data Platform Architecture</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                This diagram illustrates a <strong className="text-gray-900">real-time data ingestion and processing platform</strong> built on AWS, 
                integrating multiple microservices, SaaS vendors, and a modern data stack.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                The architecture uses <strong className="text-gray-900">Debezium CDC</strong> to capture changes from Aurora Postgres databases, 
                streams them through <strong className="text-gray-900">Kafka/MSK</strong>, and loads data into <strong className="text-gray-900">Snowflake</strong> 
                via Snowpipe Streaming.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                <strong className="text-gray-900">Temporal workers</strong> orchestrate DLT ingestion jobs for vendor APIs 
                (HubSpot, Google Ads, LinkedIn Ads, Chargebee, Modern Treasury), while a <strong className="text-gray-900">Webhook Gateway</strong> 
                receives real-time events from SaaS providers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm">
                Data flows through <strong className="text-gray-900">RAW_BRONZE → REFINED_SILVER → MARTS_GOLD</strong> layers in Snowflake, 
                transformed via <strong className="text-gray-900">dbt</strong>, and visualized in <strong className="text-gray-900">Sigma dashboards</strong> 
                for analytics and business intelligence.
              </p>
            </motion.div>
          </motion.div>

          {/* Mermaid Diagram Card */}
          <div className="flex-1" style={{ paddingTop: '80px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <MermaidDiagram
                chart={`flowchart LR
  subgraph "EKS (staging)"
    TW[Temporal workers]
    DLT1["DLT container\\n(source=HubSpot/Ads/CB/MT)"]
  end
  subgraph MSK
    DBZ[Debezium on MSK Connect]
    K[(Kafka topics)]
    SNKS[[Snowflake Kafka Sink/Snowpipe Streaming]]
  end
  subgraph Vendors
    MT[Modern Treasury API]
    HS[HubSpot API]
    ADS[Google/LinkedIn Ads]
    CB[Chargebee API]
    WH[Webhook Gateway]
  end
  PG[(Aurora Postgres svc_*)]

  PG--WAL-->DBZ-->K-->SNKS-->RAW[(Snowflake RAW_BRONZE)]
  TW--schedule-->DLT1-->RAW
  WH--Temporal signal-->TW
  MT--API pull-->DLT1
  HS--API pull-->DLT1
  ADS--API pull-->DLT1
  CB--API pull-->DLT1
  RAW-->SILVER[(REFINED_SILVER via dbt)]-->GOLD[(MARTS_GOLD)]-->SIGMA`}
                title="Data Pipeline Architecture"
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

