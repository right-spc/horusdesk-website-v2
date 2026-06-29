import { SEOHead } from '@/components/layout/SEOHead';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Horus Desk',
  url: 'https://horusdesk.com',
  logo: 'https://horusdesk.com/logo.png',
  sameAs: [
  'https://www.linkedin.com/company/right-space-llc',
  'https://www.facebook.com/horusdesk',
],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'privacy@horusdesk.com',
    availableLanguage: 'English',
  },
};

export function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Horus Desk"
        description="Learn how Right Space LLC collects, uses, discloses, and safeguards your information when you use Horus Desk AI, Teams, and Studio services."
        canonicalUrl="https://horusdesk.com/privacy-policy"
        ogTitle="Privacy Policy | Horus Desk"
        ogDescription="Learn how Right Space LLC collects, uses, discloses, and safeguards your information when you use Horus Desk AI, Teams, and Studio services."
        ogUrl="https://horusdesk.com/privacy-policy"
        ogImage="https://horusdesk.com/og-default.png"
        jsonLd={organizationSchema}
      />
      <main id="main-content" className="bg-navy pt-[120px] pb-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#94A3B8] mb-12">
            Last Updated: June 2026
          </p>

          <div className="prose prose-invert max-w-none">
            <Section title="Introduction & Regulatory Scope">
              <p>
                Right Space LLC, an Egyptian limited liability company operating as Horus Desk (&quot;Horus Desk,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), provides AI-powered receptionist services, managed customer support and sales teams, and custom software development. This Privacy Policy explains how we collect, use, disclose, and safeguard information.
              </p>
              <p>
                <strong>Important Notice Regarding Corporate Status:</strong> Right Space LLC is currently in the process of registration with competent authorities in the Arab Republic of Egypt. This Privacy Policy is binding notwithstanding our pending registration status. Any subsequent changes to our corporate name shall not affect the validity of this Policy or our obligations hereunder.
              </p>
              <p><strong>Scope:</strong> This Policy applies to:</p>
              <ul>
                <li>Visitors to horusdesk.com and demos.horusdesk.com</li>
                <li>Business customers using our Service (&quot;Account Holders&quot;)</li>
                <li>End-users whose communications are processed through our Service (&quot;End-Users&quot;)</li>
                <li>Employees and contractors managed through our Managed Teams service</li>
                <li>Clients of our Software Studio custom development services</li>
                <li>All jurisdictions globally</li>
              </ul>
              <p>
                <strong>Data Geography:</strong> Business operations and AI training oversight occur in Cairo, Egypt. Data storage and AI processing infrastructure are located in the United States. By using our Service, you consent to these cross-border transfers.
              </p>
            </Section>

            <Section title="Services Overview">
              <p>Horus Desk operates three distinct service lines:</p>
              <ul>
                <li><strong>AI Agent:</strong> An AI-powered receptionist that handles website chat and email, qualifies leads, books meetings, and escalates complex inquiries. This service processes communications between Account Holders and their customers.</li>
                <li><strong>Managed Teams:</strong> Fully managed customer support and sales teams based in Cairo, Egypt. This service involves recruiting, training, and supervising agents who handle communications on behalf of Account Holders. This service processes employee data, team communications, and performance metrics.</li>
                <li><strong>Software Studio:</strong> Custom web application, mobile development, and AI integration services. This service involves building bespoke software, which requires access to business workflows, technical specifications, and in some cases, third-party system credentials.</li>
              </ul>
              <p>This Privacy Policy applies to all three service lines. Specific data collection practices vary by service and are detailed below.</p>
            </Section>

            <Section title="Information We Collect">
              <h3>A. Account Holder Information (You, the Business Customer)</h3>
              <p>Applies to all services.</p>
              <ul>
                <li><strong>Identity:</strong> Name, business name, business address, email, phone number</li>
                <li><strong>Account:</strong> OAuth 2.0 tokens (Google/Microsoft), account credentials</li>
                <li><strong>Payment:</strong> Billing address, transaction records. Full payment card details are processed by PayPal; we do not store complete card numbers or banking information</li>
                <li><strong>Business Data:</strong> Knowledge base content, FAQ scripts, pricing information, brand voice guidelines, escalation protocols, booking links</li>
                <li><strong>Technical:</strong> IP address, browser type, device identifiers, cookies, usage analytics</li>
                <li><strong>Communications:</strong> Support tickets, email correspondence</li>
              </ul>

              <h3>B. End-User Information (Your Customers)</h3>
              <p>Applies to AI Agent and Managed Teams services. When you connect your email, install our chat widget, or engage our managed teams, we process:</p>
              <ul>
                <li><strong>Contact:</strong> Name, email, phone, company name — Lead identification and routing</li>
                <li><strong>Communication Content:</strong> Email subject/body, attachments, chat transcripts, call recordings — AI analysis, response generation, and quality assurance</li>
                <li><strong>Metadata:</strong> Timestamps, email headers, IP addresses (for security), device type, browser language, time zone — Spam detection, security, service optimization</li>
                <li><strong>Lead Qualification:</strong> Budget, timeline, authority indicators, service requirements — Automated or manual qualification per your instructions</li>
              </ul>

              <h3>C. Employee Data (Managed Teams Service Only)</h3>
              <ul>
                <li><strong>Identity:</strong> Name, national ID, contact information, educational background</li>
                <li><strong>Employment Records:</strong> Role, shift schedule, performance metrics, training completion, quality assurance scores</li>
                <li><strong>Communications:</strong> Internal team messages, coaching notes, escalation records</li>
                <li><strong>Payroll:</strong> Banking information for salary disbursement (processed through secure third-party payroll providers)</li>
              </ul>

              <h3>D. Project Data (Software Studio Service Only)</h3>
              <ul>
                <li><strong>Business Logic:</strong> Workflow descriptions, process documentation, business rules, form structures</li>
                <li><strong>Technical Specifications:</strong> API documentation, integration requirements, database schemas, architecture decisions</li>
                <li><strong>Credentials:</strong> Third-party API keys, OAuth tokens, and system access credentials (provided by you for integration purposes)</li>
                <li><strong>Source Code:</strong> All code written during the project, including proprietary business logic</li>
                <li><strong>Testing Data:</strong> Sample data sets used for development and QA (provided by you or generated for testing)</li>
              </ul>

              <h3>E. Automatically Collected Information</h3>
              <ul>
                <li>Server logs and error reports</li>
                <li>Response usage metrics (for billing and service tier enforcement)</li>
                <li>Security event logs (retained permanently in non-identifying form)</li>
              </ul>
            </Section>

            <Section title="Legal Basis for Processing">
              <p><strong>For Account Holders (B2B Relationship):</strong></p>
              <ul>
                <li><strong>Contractual Necessity:</strong> Processing required to deliver the Service per our Terms of Service</li>
                <li><strong>Consent:</strong> Explicit consent obtained during OAuth authorization and account creation</li>
                <li><strong>Legitimate Interests:</strong> Service improvement, fraud prevention, security</li>
              </ul>

              <p><strong>For End-Users (Processed on Your Behalf — AI Agent and Managed Teams):</strong></p>
              <p>You, the Account Holder, act as the Data Controller for End-User data. We act as your Data Processor. Legal bases include:</p>
              <ul>
                <li><strong>Legitimate Interest:</strong> Your legitimate business interest in customer service automation and support</li>
                <li><strong>Consent:</strong> End-user consent when they initiate contact</li>
                <li><strong>Contractual Necessity:</strong> To fulfill the inquiry</li>
              </ul>
              <p><strong>Your Obligation:</strong> You must maintain a privacy policy disclosing our role as processor and obtain necessary consents from your customers before their data enters our system.</p>

              <p><strong>For Employee Data (Managed Teams):</strong></p>
              <p>We act as a Data Processor on behalf of the Account Holder for employee data related to managed team operations. Legal bases include:</p>
              <ul>
                <li><strong>Contractual Necessity:</strong> To provide staffing and management services</li>
                <li><strong>Legitimate Interest:</strong> To ensure quality, security, and compliance of the workforce</li>
                <li><strong>Consent:</strong> For background checks and training enrollment</li>
              </ul>

              <p><strong>For Project Data (Software Studio):</strong></p>
              <p>We process project data as a Data Processor under a software development agreement. Legal bases include:</p>
              <ul>
                <li><strong>Contractual Necessity:</strong> To build and deliver the custom software</li>
                <li><strong>Legitimate Interest:</strong> To maintain code quality and project security</li>
              </ul>
            </Section>

            <Section title="How We Use Information">
              <p><strong>Service Provision (All Services):</strong></p>
              <ul>
                <li>Configure and train AI models on your business knowledge base (AI Agent)</li>
                <li>Process and respond to end-user inquiries via email and chat (AI Agent and Managed Teams)</li>
                <li>Qualify leads per your specified criteria (AI Agent and Managed Teams)</li>
                <li>Escalate urgent matters to your designated contacts (AI Agent and Managed Teams)</li>
                <li>Recruit, train, and supervise support and sales agents (Managed Teams)</li>
                <li>Build, deploy, and maintain custom software (Software Studio)</li>
                <li>Generate usage reports and analytics</li>
              </ul>

              <p><strong>Billing & Administration (All Services):</strong></p>
              <ul>
                <li>Process payments through PayPal</li>
                <li>Send usage threshold alerts as you approach plan limits</li>
                <li>Manage subscription status and renewal notifications</li>
                <li>Maintain financial records for 7 years (legal compliance)</li>
              </ul>

              <p><strong>Security & Optimization (All Services):</strong></p>
              <ul>
                <li>Detect spam, fraud, and security threats</li>
                <li>Monitor service performance and error rates</li>
                <li>Improve AI accuracy using your knowledge base only — not third-party AI training</li>
              </ul>

              <p><strong>Legal Compliance (All Services):</strong></p>
              <ul>
                <li>Respond to valid legal requests from courts or regulatory authorities</li>
                <li>Enforce our Terms of Service</li>
                <li>Protect rights, property, or safety of Horus Desk, our customers, or the public</li>
              </ul>
            </Section>

            <Section title="Artificial Intelligence & Automated Processing">
              <p><strong>AI System Disclosure (AI Agent Service):</strong></p>
              <ul>
                <li><strong>Provider:</strong> Anthropic (Claude)</li>
                <li><strong>Location:</strong> United States</li>
                <li><strong>Process:</strong> Natural language analysis, intent classification, response generation</li>
                <li><strong>Human Access:</strong> Our Cairo-based staff accesses customer data only for technical support when explicitly requested by you, and for system maintenance, updates, and debugging</li>
                <li><strong>Training:</strong> Anthropic does not use your customer data to train or improve its base models</li>
              </ul>

              <p><strong>Automated Decision-Making (AI Agent and Managed Teams):</strong></p>
              <p>Our systems make automated decisions regarding:</p>
              <ul>
                <li>Response appropriateness and content</li>
                <li>Lead qualification scores</li>
                <li>Spam detection and filtering</li>
                <li>Escalation routing</li>
                <li>Initial agent assignment (Managed Teams)</li>
              </ul>
              <p>These decisions do not produce legal effects or significant impacts on end-users without human intervention. Final business decisions remain with you.</p>
            </Section>

            <Section title="Data Sharing & Subprocessors">
              <p>We do not sell, rent, or trade personal information. We share data only with:</p>

              <p><strong>Core Service Providers:</strong></p>
              <ul>
                <li>Anthropic (United States) — AI processing and NLP</li>
                <li>Supabase (United States, N. California) — Database hosting, storage</li>
                <li>PayPal (United States) — Payment processing, subscription management</li>
                <li>Calendly (United States) — Scheduling infrastructure</li>
                <li>Google (United States) — OAuth authentication, Gmail integration</li>
                <li>Microsoft (United States) — OAuth authentication, Outlook integration</li>
              </ul>

              <p><strong>Managed Teams Specific:</strong></p>
              <ul>
                <li>Secure payroll providers (Egypt) — Salary disbursement for managed agents</li>
                <li>Background check services (Egypt) — Employment verification for managed agents</li>
              </ul>

              <p><strong>Software Studio Specific:</strong></p>
              <ul>
                <li>Hosting providers (AWS, Vercel) — Deployment and infrastructure for custom builds</li>
                <li>Third-party API providers — Only when explicitly required for your integration</li>
              </ul>

              <p><strong>Legal & Safety Disclosures:</strong></p>
              <ul>
                <li>Courts, law enforcement, or regulatory bodies when required by valid legal process</li>
                <li>To protect our rights, safety, or property, or that of our users</li>
                <li>In connection with a merger, acquisition, or asset sale (with notice to you)</li>
              </ul>

              <p><strong>Third-Party Limitations:</strong> We are not responsible for the privacy practices of third-party services beyond our contractual data protection agreements with them. We encourage review of their respective privacy policies.</p>
            </Section>

            <Section title="International Data Transfers">
              <p><strong>Processing Locations:</strong></p>
              <ul>
                <li><strong>Egypt (Cairo):</strong> Business operations, quality assurance, customer support, agent management</li>
                <li><strong>United States:</strong> Data storage (Supabase), AI processing (Anthropic), payment processing (PayPal)</li>
              </ul>
              <p><strong>Transfer Safeguards:</strong> Standard Contractual Clauses (SCCs) are in place with subprocessors where required. By using our Service, you explicitly consent to transfers to Egypt and the United States, which may have different data protection standards than your jurisdiction.</p>
            </Section>

            <Section title="Data Retention & Deletion">
              <p><strong>Conversation Content (Emails, Chat Transcripts, Call Recordings — AI Agent and Managed Teams):</strong></p>
              <ul>
                <li><strong>Default Retention:</strong> 1 year from date of creation, then automatic permanent deletion</li>
                <li><strong>Configurable:</strong> You may request retention periods between 3 days (minimum) and 1 year</li>
                <li><strong>Immediate Deletion:</strong> Available upon verified request within 3 business days</li>
                <li><strong>Backup Purging:</strong> Backups containing deleted data are purged within 30 days of deletion request</li>
              </ul>

              <p><strong>Employee Data (Managed Teams):</strong></p>
              <ul>
                <li><strong>Active Engagement:</strong> Retained for duration of the managed team contract</li>
                <li><strong>Post-Termination:</strong> Personnel records retained per Egyptian labor law requirements; performance data deleted within 30 days of contract end unless legally required</li>
              </ul>

              <p><strong>Project Data (Software Studio):</strong></p>
              <ul>
                <li><strong>Active Project:</strong> Retained for duration of development and any active maintenance period</li>
                <li><strong>Post-Delivery:</strong> Source code and documentation returned to you or retained per your maintenance agreement</li>
                <li><strong>Credentials:</strong> All third-party API keys and access tokens are deleted from our systems within 7 days of project handoff unless ongoing maintenance is contracted</li>
              </ul>

              <p><strong>Account Holder Data (Business Information — All Services):</strong></p>
              <ul>
                <li><strong>Active Accounts:</strong> Retained for duration of subscription</li>
                <li><strong>Post-Termination:</strong> Deleted or returned within 30 days per your instructions, except for billing and financial records</li>
              </ul>

              <p><strong>Payment & Billing Records (All Services):</strong></p>
              <ul>
                <li><strong>Retention:</strong> At least 7 years (financial compliance); may be retained longer or indefinitely as required for legal, tax, or auditing purposes</li>
                <li><strong>Content:</strong> Transaction IDs, amounts, dates, billing addresses. We do not retain full payment card numbers</li>
              </ul>

              <p><strong>Non-Identifying Metadata (All Services):</strong></p>
              <ul>
                <li><strong>Retention:</strong> Permanent</li>
                <li><strong>Content:</strong> Message counts, timestamps, IP addresses (anonymized), response usage statistics, system logs</li>
                <li><strong>Purpose:</strong> Billing accuracy, fraud prevention, service optimization, security analysis</li>
                <li><strong>Nature:</strong> Does not include message content or personal identifiers</li>
              </ul>
            </Section>

            <Section title="Your Privacy Rights">
              <p>We respect your rights under applicable privacy laws (GDPR, CCPA, and others):</p>
              <ul>
                <li><strong>Access</strong> — Request copies of your data — Email privacy@horusdesk.com</li>
                <li><strong>Correction</strong> — Request correction of inaccurate data — Email privacy@horusdesk.com</li>
                <li><strong>Deletion</strong> — Request deletion of personal data — Email privacy@horusdesk.com with &quot;Deletion Request&quot;</li>
                <li><strong>Objection</strong> — Object to processing based on legitimate interests — Email privacy@horusdesk.com with basis for objection</li>
                <li><strong>Withdraw Consent</strong> — Revoke OAuth access — Via Google/Microsoft security settings (terminates Service)</li>
                <li><strong>Data Portability</strong> — Request export of your data in a machine-readable format — Email privacy@horusdesk.com with &quot;Portability Request&quot;</li>
              </ul>
              <p><strong>Response Time:</strong> We respond to verified requests within 3 business days. Complex requests may require up to 10 days, with notification of extension.</p>
              <p><strong>Verification:</strong> We verify identity using account credentials, email confirmation, or business documentation to prevent unauthorized access.</p>
              <p><strong>Retention Exceptions:</strong> We may deny deletion requests where retention is required by law (billing records, active legal holds) or for security investigations.</p>
            </Section>

            <Section title="Security Measures">
              <p>We implement defense-in-depth security:</p>
              <ul>
                <li><strong>Access Controls:</strong> OAuth 2.0 authentication, two-factor authentication, role-based access controls, encrypted credential vault for Software Studio project access</li>
                <li><strong>Encryption:</strong> Industry-standard encryption in transit; AES-256 encryption at rest</li>
                <li><strong>Monitoring:</strong> Automated threat detection, permanent retention of non-identifying metadata for security analysis, access logging with anomaly detection</li>
                <li><strong>Personnel:</strong> Background checks for Cairo-based staff, confidentiality agreements (NDAs), regular security training</li>
                <li><strong>Infrastructure:</strong> Supabase SOC 2 Type II compliant infrastructure, regular security audits and penetration testing</li>
              </ul>
              <p><strong>Breach Notification:</strong> In the event of a data breach affecting personal information, we will notify affected Account Holders within 72 hours via email, providing remediation steps and breach scope details.</p>
            </Section>

            <Section title="Cookies & Tracking Technologies">
              <p><strong>Types Used:</strong></p>
              <ul>
                <li><strong>Essential</strong> — Website functionality, chat widget operation, authentication — Session to 30 days</li>
                <li><strong>Preferences</strong> — Language settings, accessibility options — 1 year</li>
                <li><strong>Analytics</strong> — Website usage patterns (anonymized IP) — 2 years</li>
              </ul>
            </Section>

            <Section title="Children's Privacy">
              <p>Our Service is not directed to children under 18 years of age. We do not knowingly collect personal information from children.</p>
              <p>If you believe a child has provided personal information through our Service, contact us immediately at privacy@horusdesk.com. We will delete such information within 72 hours of verification.</p>
              <p>Account Holders warrant that they will not use our Service to collect data from children under 13 (or under 16 in the EU) without appropriate parental consent mechanisms.</p>
            </Section>

            <Section title="Data Processing Agreement (DPA)">
              <p>For enterprise and custom-plan customers processing personal data of EU residents (GDPR) or California residents (CCRA), we offer a Data Processing Agreement (DPA) that supplements this Privacy Policy.</p>
              <ul>
                <li><strong>Available for:</strong> Enterprise-level engagements across all three service lines (AI Agent, Managed Teams, Software Studio)</li>
                <li><strong>Request:</strong> Email privacy@horusdesk.com with &quot;DPA Request&quot;</li>
              </ul>
              <p>The DPA includes Standard Contractual Clauses (SCCs) for international transfers, technical and organizational security measures, and audit rights.</p>
            </Section>

            <Section title="Changes to This Privacy Policy">
              <p>We may update this Policy periodically. Material changes affecting your rights or our data practices will be notified via:</p>
              <ul>
                <li>Email to registered account holders (30 days advance notice)</li>
                <li>Website banner notification upon login</li>
                <li>Updated &quot;Last Updated&quot; date at the top of this document</li>
              </ul>
              <p><strong>Continued Use:</strong> Your continued use of the Service after changes constitutes acceptance. If you disagree with material changes, you must terminate your account before the effective date.</p>
              <p><strong>Previous Versions:</strong> Available upon request for 6 months after update.</p>
            </Section>

            <Section title="Dispute Resolution & Complaints">
              <p>We are committed to resolving privacy concerns in good faith:</p>
              <ul>
                <li><strong>Internal Resolution:</strong> Contact our Privacy Officer at privacy@horusdesk.com. We will investigate and respond within 3 business days.</li>
                <li><strong>Payment-Related Privacy Disputes:</strong> For disputes involving payment data processing, contact support@horusdesk.com. We will attempt resolution within 3 business days. If unsatisfied, you may escalate through PayPal&apos;s Resolution Center.</li>
                <li><strong>Egyptian Consumer Protection Agency:</strong> If unresolved, file a formal complaint with the Egyptian Consumer Protection Agency (CPA). Website: cpa.gov.eg/en-us/Complaints/Complaint-Filing. Hotline: +2019588. We cooperate fully with the CPA and abide by their resolutions regarding consumer complaints.</li>
                <li><strong>Judicial Remedies:</strong> If administrative resolution fails, disputes shall be governed by the laws of the Arab Republic of Egypt and subject to the exclusive jurisdiction of competent courts in Egypt, subject to your mandatory local jurisdictional rights where applicable.</li>
                <li><strong>No Class Actions:</strong> By using our Service, you agree to resolve disputes on an individual basis only.</li>
                <li><strong>No Third-Party Beneficiaries:</strong> This Privacy Policy creates no enforceable rights in any person not a party to it. Only Account Holders (and their End-Users exercising rights through the Account Holder) may enforce these provisions.</li>
              </ul>
            </Section>

            <Section title="Compliance With Local Laws">
              <p>We provide services globally but are headquartered in Egypt. We cannot guarantee compliance with every jurisdiction&apos;s specific privacy requirements.</p>
              <p><strong>Your Responsibility:</strong> You are responsible for ensuring your use of our Service (including collection of End-User data) complies with all applicable local laws, including but not limited to:</p>
              <ul>
                <li>General Data Protection Regulation (GDPR) if serving EU residents</li>
                <li>California Consumer Privacy Act (CCPA/CPRA) if serving California residents</li>
                <li>Personal Information Protection and Electronic Documents Act (PIPEDA) for Canadian users</li>
                <li>Local data localization requirements</li>
              </ul>
              <p>If you require specific contractual or technical modifications for local compliance, notify us at legal@horusdesk.com. We will assess feasibility but make no guarantee that all requests can be accommodated.</p>
            </Section>

            <Section title="Contact Information">
              <p><strong>Data Controller:</strong></p>
              <p>
                Right Space LLC<br />
                Attn: Privacy Officer<br />
                30B Asmaa Fahmi, Al Golf, Nasr City<br />
                Cairo Governorate 4451422<br />
                Arab Republic of Egypt
              </p>
              <ul>
                <li>Email: privacy@horusdesk.com</li>
                <li>Support: support@horusdesk.com</li>
                <li>Legal: legal@horusdesk.com</li>
              </ul>
              <p><strong>Response Time:</strong> We acknowledge receipt of privacy-related inquiries within 72 hours and provide substantive responses within 10 business days.</p>
            </Section>

            <Section title="Definitions">
              <ul>
                <li><strong>&quot;Account Holder&quot; or &quot;Client&quot;:</strong> Business entity or individual subscribing to Horus Desk services</li>
                <li><strong>&quot;End-User&quot;:</strong> Customer or prospect of the Account Holder whose communications are processed through our AI Agent or Managed Teams services</li>
                <li><strong>&quot;Employee Data&quot;:</strong> Information about individuals employed or managed through our Managed Teams service</li>
                <li><strong>&quot;Project Data&quot;:</strong> Business and technical information provided for Software Studio custom development</li>
                <li><strong>&quot;Personal Information&quot; or &quot;Personal Data&quot;:</strong> Any information relating to an identified or identifiable natural person</li>
                <li><strong>&quot;Processing&quot;:</strong> Any operation performed on personal data (collection, storage, use, disclosure, deletion)</li>
                <li><strong>&quot;Service&quot;:</strong> Horus Desk platform including AI Agent, Managed Teams, and Software Studio services</li>
              </ul>
            </Section>
          </div>
        </div>
      </main>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-medium text-white mb-4">{title}</h2>
      <div className="text-[#94A3B8] space-y-4 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
