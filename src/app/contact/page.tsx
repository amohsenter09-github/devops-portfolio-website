import Container from "@/components/Container";
import { site } from "@/lib/siteConfig";

export default function Contact() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Contact</h1>
      
      <div className="mt-6 max-w-4xl">
        <p className="text-gray-700 leading-7 mb-8">
          Ready to transform your infrastructure and accelerate your development workflow? 
          I&apos;d love to discuss how my expertise in AWS, Kubernetes, and DevOps automation 
          can help your organization achieve its goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <a href={`mailto:${site.contact.email}`} className="text-blue-600 hover:underline">
                  {site.contact.email}
                </a>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <a href={`tel:${site.contact.phone}`} className="text-blue-600 hover:underline">
                  {site.contact.phone}
                </a>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">{site.contact.location}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">LinkedIn</h3>
                <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/amrfathy
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4" action="https://formspree.io/f/your-id" method="POST">
              <div>
                <input 
                  className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div>
                <input 
                  className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div>
                <input 
                  className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" 
                  name="subject" 
                  placeholder="Subject" 
                />
              </div>
              <div>
                <textarea 
                  className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" 
                  name="message" 
                  placeholder="How can I help you with your DevOps needs?" 
                  rows={4}
                  required 
                />
              </div>
              <button 
                className="w-full rounded bg-black px-4 py-3 text-white hover:bg-gray-800 transition-colors" 
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">What I Can Help With</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <ul className="space-y-2">
              <li>• AWS Infrastructure Design & Migration</li>
              <li>• Kubernetes & Container Orchestration</li>
              <li>• CI/CD Pipeline Implementation</li>
              <li>• Infrastructure as Code (Terraform, CDK)</li>
            </ul>
            <ul className="space-y-2">
              <li>• Observability & Monitoring Setup</li>
              <li>• Security & Compliance Implementation</li>
              <li>• Legacy System Modernization</li>
              <li>• DevOps Process Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
