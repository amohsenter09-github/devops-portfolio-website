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
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                This diagram illustrates a <strong className="text-gray-900">complete AWS-native CDC (Change Data Capture) pipeline</strong> 
                for real-time data ingestion, transformation, and analytics, built entirely on AWS services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                The architecture uses <strong className="text-gray-900">AWS DMS (Database Migration Service)</strong> to capture changes from 
                Aurora PostgreSQL via Write-Ahead Logs, streams them through <strong className="text-gray-900">Kinesis Data Streams</strong> 
                or <strong className="text-gray-900">MSK (Managed Streaming for Kafka)</strong> for real-time processing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Data transformation is handled by <strong className="text-gray-900">AWS Glue Streaming ETL</strong> with Spark, 
                <strong className="text-gray-900">Lambda functions</strong> for lightweight processing, and <strong className="text-gray-900">AppFlow</strong> 
                for SaaS integrations. Processed data flows into <strong className="text-gray-900">S3 Data Lake</strong> (Parquet/ORC format) 
                and <strong className="text-gray-900">Amazon Redshift</strong> for analytics.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed text-sm">
                Query and analytics are powered by <strong className="text-gray-900">Athena</strong> for serverless S3 queries, 
                <strong className="text-gray-900">QuickSight</strong> for BI dashboards, and <strong className="text-gray-900">Redshift Spectrum</strong> 
                for querying S3 data. Governance is enforced through <strong className="text-gray-900">Lake Formation</strong> and 
                <strong className="text-gray-900">Glue Catalog</strong>, with <strong className="text-gray-900">CloudWatch</strong> providing 
                comprehensive monitoring across the entire pipeline.
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
                chart={`graph TB

    subgraph "AWS Native CDC Pipeline"

        subgraph "Source Database"

            AURORA[Aurora PostgreSQL<br/>Source DB]

            DMS[DMS Task<br/>CDC Replication]

        end

        

        subgraph "Streaming & Processing"

            KINESIS[Kinesis Data Streams<br/>Real-time]

            FIREHOSE[Kinesis Firehose<br/>Delivery]

            MSK[MSK Cluster<br/>Kafka Alternative]

        end

        

        subgraph "ETL & Transformation"

            GLUESTREAMING[Glue Streaming ETL<br/>Spark]

            LAMBDA[Lambda Functions<br/>Processing]

            APPFLOW[AppFlow<br/>SaaS Integration]

        end

        

        subgraph "Data Warehouse & Lake"

            REDSHIFT[Redshift<br/>Data Warehouse]

            S3DATA[S3 Data Lake<br/>Parquet/ORC]

            S3STAGE[S3 Staging<br/>Raw Data]

        end

        

        subgraph "Query & Analytics"

            ATHENA[Athena<br/>Serverless Query]

            QUICKSIGHT[QuickSight<br/>BI & Analytics]

            REDSHIFTSPECTRUM[Redshift Spectrum<br/>S3 Query]

        end

        

        subgraph "Governance & Monitoring"

            CWMONITOR[CloudWatch<br/>Monitoring]

            LAKEFORMATION[Lake Formation<br/>Governance]

            GLUECATALOG[Glue Catalog<br/>Metadata]

        end

    end



    AURORA -->|Write-Ahead Logs| DMS

    DMS -->|CDC Stream| KINESIS

    KINESIS -->|Real-time Processing| GLUESTREAMING

    GLUESTREAMING -->|Transform Data| FIREHOSE

    FIREHOSE -->|Load to| S3DATA

    S3DATA -->|COPY Command| REDSHIFT

    KINESIS -->|Direct Processing| LAMBDA

    LAMBDA -->|Write to| S3STAGE

    MSK -->|Kafka Streams| GLUESTREAMING

    

    S3DATA -->|Register Tables| GLUECATALOG

    GLUECATALOG -->|Govern Access| LAKEFORMATION

    S3DATA -->|Query via| ATHENA

    REDSHIFT -->|BI Analytics| QUICKSIGHT

    REDSHIFT -->|Query S3| REDSHIFTSPECTRUM

    

    AURORA -->|Metrics| CWMONITOR

    KINESIS -->|Metrics| CWMONITOR

    DMS -->|Replication Metrics| CWMONITOR`}
                title="AWS Native CDC Pipeline Architecture"
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

