import { SEOHead } from '@/components/layout/SEOHead';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Horus Desk',
  url: 'https://horusdesk.com',
  logo: 'https://horusdesk.com/logo.png',
  sameAs: [
    'https://twitter.com/horusdesk',
    'https://linkedin.com/company/horusdesk',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'legal@horusdesk.com',
    availableLanguage: 'English',
  },
};

export function TermsOfServicePage() {
  return (
    <>
      <SEOHead
        title="Terms of Service | Horus Desk"
        description="Read the legally binding agreement for using Horus Desk AI Agent, Managed Teams, and Software Studio services. Updated June 2026."
        canonicalUrl="https://horusdesk.com/terms-of-service"
        ogTitle="Terms of Service | Horus Desk"
        ogDescription="Read the legally binding agreement for using Horus Desk AI Agent, Managed Teams, and Software Studio services. Updated June 2026."
        ogUrl="https://horusdesk.com/terms-of-service"
        ogImage="https://horusdesk.com/og-home.png"
        jsonLd={organizationSchema}
      />
      <main id="main-content" className="bg-navy pt-[120px] pb-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <p className="text-xs font-medium tracking-wider uppercase text-[#64FFDA] mb-4">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
            Terms of Service
          </h1>
          <p className="text-[#94A3B8] mb-12">
            Last Updated: June 2026
          </p>

          <div className="prose prose-invert max-w-none">
            <Section title="Acceptance of Terms">
              <p>
                Welcome to Horus Desk. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Right Space LLC, an Egyptian limited liability company operating as Horus Desk (&quot;Horus Desk,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of our services (the &quot;Service&quot;).
              </p>
              <ul>
                <li>By creating an account, signing up for a demo, making a payment, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</li>
                <li>If you do not agree, you must not use the Service.</li>
                <li>These Terms apply to all visitors, users, and others who access or use our Services.</li>
              </ul>
              <p>
                <strong>Important Notice Regarding Registration:</strong> Right Space LLC is currently in the process of registration with the competent authorities in Egypt. These Terms are binding notwithstanding the pending registration status. During this process, the company name may be changed to complete registration; however, any such change shall not affect the validity or enforceability of these Terms, and all obligations and rights herein shall transfer to the registered entity.
              </p>
            </Section>

            <Section title="Description of Services">
              <p>Horus Desk operates three distinct service lines:</p>
              <ul>
                <li><strong>AI Agent:</strong> An AI-powered receptionist that monitors your business email and website chat to respond to customer inquiries, qualify leads, book meetings, and escalate urgent matters.</li>
                <li><strong>Managed Teams:</strong> Fully managed customer support and sales teams based in Cairo, Egypt, recruited, trained, and supervised to handle communications on your behalf.</li>
                <li><strong>Software Studio:</strong> Custom web application, mobile development, and AI integration services built entirely from scratch without third-party or no-code tools.</li>
              </ul>

              <h3>Service Components by Line</h3>

              <p><strong>AI Agent:</strong></p>
              <ul>
                <li><strong>Email Monitoring:</strong> AI-powered responses to customer emails via OAuth connection</li>
                <li><strong>Website Chat:</strong> Embeddable chat widget for your website</li>
                <li><strong>Lead Qualification:</strong> Automated collection of budget, timeline, and authority information</li>
                <li><strong>Appointment Booking:</strong> Collection of prospect information and calendar integration</li>
                <li><strong>Reporting:</strong> Analytics portal and usage reports</li>
              </ul>

              <p><strong>Managed Teams:</strong></p>
              <ul>
                <li>Recruitment and onboarding of support and sales agents</li>
                <li>Training on your product, tone, and escalation rules</li>
                <li>Daily supervision and quality assurance</li>
                <li>Performance reviews and coaching</li>
                <li>Scale up or down monthly</li>
              </ul>

              <p><strong>Software Studio:</strong></p>
              <ul>
                <li>Custom web and mobile application development</li>
                <li>AI integration and workflow automation</li>
                <li>Technical blueprint and discovery</li>
                <li>Deployment, hosting, and maintenance options</li>
                <li>Full source code ownership transferred to you</li>
              </ul>

              <p><strong>Service-Specific Agreements:</strong></p>
              <p>
                While these Terms apply to all Horus Desk services generally, Managed Teams and Software Studio engagements are governed by specific signed agreements executed between you and Horus Desk, including but not limited to Statements of Work, Service Agreements, and Master Services Agreements. In the event of any conflict or inconsistency between these general Terms of Service and the terms of a signed agreement specific to Managed Teams or Software Studio, the signed agreement shall prevail and govern for that engagement.
              </p>

              <p><strong>Current Limitations (AI Agent):</strong></p>
              <ul>
                <li>WhatsApp, SMS, phone answering, and social media messaging are not yet supported</li>
                <li>Direct CRM integration may require custom development via Software Studio</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any service (or any part thereof) at any time with 30 days notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation.
              </p>

              <p><strong>Demo Accounts and Fictional Content:</strong></p>
              <p>
                We offer demonstration accounts at demos.horusdesk.com. All business names, logos, customer data, and scenarios displayed in these demos are entirely fictional and created by our team for demonstration purposes only. Any resemblance to real businesses, persons, or trademarks is purely coincidental and unintentional. These demos do not represent real businesses, actual customer data, or live service environments. If you believe any demo content inadvertently infringes upon your trademark or business name, please contact us immediately at legal@horusdesk.com, and we will promptly review and remove the content if necessary.
              </p>
            </Section>

            <Section title="Account Registration & Requirements">
              <p><strong>Eligibility:</strong></p>
              <ul>
                <li>You must be at least 18 years old or the legal age of your country and capable of forming a binding contract.</li>
                <li>By using the Service, you represent and warrant that you meet these requirements.</li>
              </ul>

              <p><strong>Account Setup:</strong></p>
              <ul>
                <li>You must provide accurate, current, and complete information during registration.</li>
                <li>You are responsible for maintaining the security of your account credentials.</li>
                <li>You must notify us immediately of any unauthorized access or security breach.</li>
                <li>We reserve the right to suspend accounts with false or misleading information immediately and without prior notice.</li>
              </ul>

              <p><strong>OAuth Authorization (AI Agent):</strong></p>
              <p>
                If you authorize us to access your Gmail/Microsoft 365 accounts via OAuth 2.0, it will be for the sole purpose of reading and sending emails on your behalf. You understand that:
              </p>
              <ul>
                <li>We cannot and will not delete your emails or change your email settings</li>
                <li>You may revoke this access at any time via your Google/Microsoft security settings, though this will terminate the email monitoring service</li>
                <li>We do not store your email passwords</li>
              </ul>

              <p><strong>Widget Installation (AI Agent):</strong></p>
              <p>You agree to either:</p>
              <ul>
                <li>(a) install the JavaScript widget code on your website yourself with our guidance, or</li>
                <li>(b) provide temporary developer access to your website for our team to install the widget.</li>
              </ul>
              <p>
                You are responsible for ensuring you have the right to modify your website and that the widget installation complies with your platform&apos;s terms of service.
              </p>

              <p><strong>Managed Teams Engagement:</strong></p>
              <p>
                You agree to provide accurate job requirements, training materials, and escalation protocols. You may review final candidates before we hire. You agree to a proof-of-concept period as specified in your service agreement.
              </p>

              <p><strong>Software Studio Engagement:</strong></p>
              <p>
                You agree to provide business requirements, technical specifications, and necessary third-party access credentials for integration. You agree to a discovery and blueprint phase before development begins. All project terms, timelines, and deliverables are specified in a separate Statement of Work.
              </p>
            </Section>

            <Section title="Payment Terms">
              <p><strong>Pricing:</strong></p>
              <ul>
                <li>All pricing is quoted at the time of signup or as specified in your service agreement.</li>
                <li>We offer monthly and annual billing options where applicable.</li>
                <li>Custom pricing applies to Managed Teams and Software Studio engagements based on scope and requirements.</li>
              </ul>

              <p><strong>Payment Processing:</strong></p>
              <p>
                All payments are processed through PayPal, direct bank transfer, or Upwork (for Software Studio projects). We do not store your credit card details or bank information on our servers, nor do we have access to such information. We will send payment reminders via email prior to your due date. It is your sole responsibility to complete payment by the due date. By making a payment, you agree to the terms and privacy policies of the respective payment processor in addition to these Terms.
              </p>

              <p><strong>Billing:</strong></p>
              <ul>
                <li>Payment reminders sent via email before due date</li>
                <li>Payment must be completed by the due date to avoid late payment procedures</li>
                <li>Monthly plans: Billed in advance each month</li>
                <li>Annual plans: Billed once per year</li>
                <li>Payment due dates are fixed upon signup and cannot be changed</li>
                <li>You are responsible for all applicable taxes, currency conversion fees, international wire fees, and bank charges imposed by your financial institution</li>
              </ul>

              <p><strong>No Refunds Policy:</strong></p>
              <ul>
                <li><strong>Monthly Plans:</strong> No refunds for partial months. If you cancel, service continues until the end of your current billing period.</li>
                <li><strong>Annual Plans:</strong> If cancelled, you may receive a refund for unused paid months calculated pro-rata, subject to the terms of your specific agreement.</li>
                <li><strong>Setup Fees:</strong> Non-refundable unless the Service is non-functional due to our error for more than 7 days after onboarding.</li>
                <li><strong>Add-on Credits:</strong> Non-refundable once purchased, but never expire as long as subscription remains active.</li>
              </ul>

              <p><strong>Late Payment:</strong></p>
              <p>If payment is not received by the due date:</p>
              <ul>
                <li>You have a grace period to complete payment as specified in your agreement</li>
                <li>After the grace period, service may be suspended</li>
                <li>After extended non-payment, account termination may occur with loss of accrued credits</li>
                <li><strong>Reactivation:</strong> Requires payment of all outstanding amounts and may require a new setup fee</li>
              </ul>

              <p><strong>Fee Increases:</strong></p>
              <p>
                We may increase fees for existing customers only after providing 60 days written notice. Fee increases do not apply to annual plans already paid in full until renewal.
              </p>
            </Section>

            <Section title="Service Usage & Limitations">
              <p><strong>AI Agent Response Limits:</strong></p>
              <ul>
                <li>Base plan includes a specified number of AI responses per month</li>
                <li>Usage warnings sent at designated thresholds</li>
                <li>Service may pause for new conversations at the limit until additional credits are purchased</li>
                <li>Unused base credits may roll over subject to your plan terms</li>
                <li>Add-on credits never expire while subscription remains active and paid on time</li>
              </ul>

              <p><strong>Managed Teams Scope:</strong></p>
              <ul>
                <li>Agent hours, roles, and responsibilities are defined in your service agreement</li>
                <li>Scale-up or scale-down requests require notice as specified in your agreement</li>
                <li>Performance standards and SLAs are defined per client</li>
              </ul>

              <p><strong>Software Studio Scope:</strong></p>
              <ul>
                <li>Deliverables, timelines, and fixed prices are defined in the Statement of Work</li>
                <li>Change requests outside the agreed scope may incur additional fees</li>
                <li>Source code ownership transfers to you upon final payment unless otherwise agreed</li>
              </ul>

              <p><strong>Acceptable Use:</strong></p>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Process illegal, fraudulent, or harmful content</li>
                <li>Violate any applicable laws, including anti-spam regulations (CAN-SPAM, CASL, etc.)</li>
                <li>Impersonate any person or misrepresent your affiliation with any entity</li>
                <li>Upload viruses, malware, or malicious code</li>
                <li>Attempt to reverse engineer, decompile, or extract source code</li>
                <li>Use the Service to build a competing product</li>
                <li>Process protected health information (PHI) unless you have executed a Business Associate Agreement (BAA) with us (separate agreement required)</li>
              </ul>

              <p><strong>AI Behavior & Limitations (AI Agent):</strong></p>
              <p>You acknowledge that:</p>
              <ul>
                <li>The Service uses artificial intelligence which may occasionally generate incorrect, incomplete, or inappropriate responses</li>
                <li>While we strive for accuracy, we do not guarantee 100% accuracy in AI responses</li>
                <li>You are responsible for reviewing AI interactions periodically via the analytics portal</li>
                <li>We will correct AI behavior by updating your knowledge base within 24 hours of notification of errors, but we are not liable for damages resulting from AI mistakes</li>
                <li>Certain complex or sensitive inquiries trigger automatic human escalation</li>
              </ul>
            </Section>

            <Section title="Data Privacy & Client Obligations">
              <p><strong>Data Ownership:</strong></p>
              <p>
                You retain all rights to your business data and your customers&apos; data. We claim no ownership over your content. Upon termination, we will return or delete your data per your instructions within 30 days, except for metadata retained for billing and optimization purposes as described in our Privacy Policy.
              </p>

              <p><strong>Your Privacy Policy Obligations:</strong></p>
              <p>
                As a condition of using our Service, you are responsible for ensuring your website maintains a privacy policy that complies with applicable laws (CCPA, GDPR if applicable, etc.). We strongly recommend that your privacy policy disclose that you use Horus Desk to process customer communications, that data may be transferred to and processed in Egypt and the United States, and that artificial intelligence is used to respond to inquiries. You must obtain all necessary consents from your customers for us to process their data on your behalf. You indemnify us against any claims arising from your failure to provide adequate privacy disclosures to your customers.
              </p>

              <p><strong>Compliance with Local Laws:</strong></p>
              <p>
                You acknowledge that we provide services globally and are not familiar with the specific laws of every jurisdiction. It is your sole responsibility to ensure that your use of our Service complies with all applicable laws, regulations, and requirements in your jurisdiction. If you determine that modifications are needed for compliance, you may notify us at legal@horusdesk.com to determine if such changes are feasible. However, notifying us does not guarantee that changes will be made.
              </p>

              <p><strong>Data Processing:</strong></p>
              <p>
                We act as a Data Processor (or Service Provider under CCPA) regarding your customers&apos; personal data. You act as the Data Controller. Our data processing activities are governed by our Privacy Policy. Data Processing Agreements (DPAs) are available for enterprise-level engagements across all three service lines upon request.
              </p>

              <p><strong>Third-Party Services:</strong></p>
              <p>
                The Service integrates with third-party services including Anthropic (AI processing), Supabase (data storage), Google (OAuth/email), Microsoft (OAuth/email), Calendly (scheduling), PayPal (payments), Telnyx (voice), and others. Each has their own privacy policies and terms governing their services. We are not responsible for the privacy practices or service availability of these third parties.
              </p>

              <p><strong>Security:</strong></p>
              <p>
                We implement industry-standard security measures including OAuth 2.0 authentication, encryption in transit and at rest, and access controls. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="Intellectual Property">
              <p><strong>Our IP:</strong></p>
              <p>
                Right Space LLC retains all rights, title, and interest in and to the Service platform, including all software, algorithms, AI models, interfaces, graphics, designs, and documentation. You receive no ownership rights, only a limited license to use the Service per these Terms.
              </p>

              <p><strong>Your IP:</strong></p>
              <p>
                You retain all rights to your business content, trademarks, and customer data. You grant us a limited, non-exclusive license to use your content solely to provide the Service (including training our AI on your knowledge base and responding to your customers).
              </p>

              <p><strong>Software Studio IP:</strong></p>
              <p>
                Custom software built for you under a Software Studio engagement is governed by the specific Statement of Work. Unless otherwise agreed, full source code ownership transfers to you upon final payment. We retain the right to use general methodologies, frameworks, and non-proprietary techniques developed during the project.
              </p>

              <p><strong>Feedback:</strong></p>
              <p>
                Any feedback, suggestions, or feature requests you provide may be used by us without restriction or compensation to you.
              </p>
            </Section>

            <Section title="Confidentiality">
              <ul>
                <li>We agree to keep your business information, customer data, knowledge base content, and project specifications confidential.</li>
                <li>We will not disclose your data to third parties except as necessary to provide the Service (subprocessors listed in Privacy Policy) or as required by law.</li>
                <li>You agree to keep confidential any proprietary information about our Service, pricing, and technology that is not publicly available.</li>
              </ul>
            </Section>

            <Section title="Term, Termination & Suspension">
              <p><strong>Term:</strong></p>
              <p>
                These Terms begin when you sign up and continue until terminated by either party.
              </p>

              <p><strong>Termination by You:</strong></p>
              <ul>
                <li>You may cancel your subscription at any time via email to support@horusdesk.com or by ceasing to make payments.</li>
                <li>For annual plans, you may also request cancellation and refund calculation via email.</li>
                <li>Cancellation takes effect at the end of your current billing period (monthly) or upon confirmation of refund calculation (annual).</li>
              </ul>

              <p><strong>Termination by Us:</strong></p>
              <p>We may suspend or terminate your account immediately if:</p>
              <ul>
                <li>You violate these Terms or applicable laws</li>
                <li>You fail to pay amounts due after the grace period</li>
                <li>Your use poses a security risk or harms other users</li>
                <li>You engage in fraudulent or abusive behavior</li>
              </ul>

              <p><strong>Upon Termination:</strong></p>
              <ul>
                <li>Your access to the Service ceases immediately</li>
                <li>We will delete or return your message content and customer data within 30 days per your instructions</li>
                <li>Billing records, transaction history, and other financial data required for legal/tax compliance will be retained for at least 7 years as described in our Privacy Policy</li>
                <li>Sections 6 (Data), 7 (IP), 10 (Disclaimer), 11 (Limitation of Liability), 12 (Indemnification), and 13 (Governing Law) survive termination</li>
              </ul>
            </Section>

            <Section title="Disclaimers">
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p>WE DO NOT WARRANT THAT:</p>
              <ul>
                <li>The Service will be uninterrupted, timely, secure, or error-free</li>
                <li>The AI responses will be accurate, complete, or appropriate for all contexts</li>
                <li>The Service will meet your specific requirements or expectations</li>
              </ul>
              <p>
                YOU ACKNOWLEDGE THAT AI TECHNOLOGY HAS INHERENT LIMITATIONS AND THAT HUMAN OVERSIGHT IS RECOMMENDED FOR CRITICAL BUSINESS DECISIONS.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL HORUS DESK, RIGHT SPACE LLC, OUR DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul>
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>AI errors, missed leads, or incorrect responses</li>
              </ul>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO LIABILITY, OR FIVE HUNDRED US DOLLARS ($500), WHICHEVER IS GREATER.
              </p>
              <p>
                THESE LIMITATIONS APPLY WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
            </Section>

            <Section title="Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless Horus Desk, Right Space LLC, and their respective officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees) arising from:
              </p>
              <ul>
                <li>Your use of and access to the Service</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Your failure to maintain adequate privacy disclosures or obtain necessary consents from your customers</li>
                <li>Any claim that your content or your customers&apos; content caused damage to a third party</li>
                <li>Any illegal or fraudulent activity conducted through your account</li>
              </ul>
              <p>
                This defense and indemnification obligation survives these Terms and your use of the Service.
              </p>
            </Section>

            <Section title="Governing Law & Dispute Resolution">
              <p><strong>Governing Law:</strong></p>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the Arab Republic of Egypt, without regard to its conflict of law provisions.
              </p>

              <p><strong>Dispute Resolution:</strong></p>
              <p>
                We are committed to resolving disputes amicably. Any dispute, controversy, or claim arising out of or relating to these Terms, including formation, interpretation, breach, termination, or validity thereof, shall be resolved as follows:
              </p>
              <ul>
                <li>
                  <strong>Step 1 — Good Faith Negotiation:</strong> You must first contact us at legal@horusdesk.com with a detailed description of your complaint. We will attempt to resolve the dispute within 7 days of receiving your notice.
                </li>
                <li>
                  <strong>Payment-Specific Disputes:</strong> If your dispute relates to payments, you may contact support@horusdesk.com instead. We will attempt to resolve payment disputes within 3 business days. If you are unsatisfied with our resolution, you may file a dispute through PayPal&apos;s Resolution Center.
                </li>
                <li>
                  <strong>Step 2 — Egyptian Consumer Protection Agency:</strong> If we cannot resolve the dispute through good faith negotiation (or PayPal resolution for payment disputes), you may file a formal complaint with the Egyptian Consumer Protection Agency (CPA):
                  <ul>
                    <li>Website: https://cpa.gov.eg/en-us/Complaints/Complaint-Filing</li>
                    <li>Hotline: +2019588</li>
                  </ul>
                  We agree to abide by the resolutions and decisions of the Egyptian Consumer Protection Agency regarding consumer complaints.
                </li>
              </ul>

              <p><strong>PayPal Dispute Prohibition:</strong></p>
              <p>
                You agree that any payment-related disputes will be conducted only through the mechanisms described above. Initiating a PayPal claim or bank dispute directly, bypassing the above steps, constitutes a material breach of these Terms and grounds for immediate account termination with forfeiture of all credits and fees paid.
              </p>

              <p><strong>No Class Actions:</strong></p>
              <p>
                You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
              </p>

              <p><strong>Jurisdiction:</strong></p>
              <p>
                You agree that the Egyptian Consumer Protection Agency and the competent courts in Egypt have exclusive jurisdiction over any disputes not resolved through the above process.
              </p>

              <p><strong>No Third-Party Beneficiaries:</strong></p>
              <p>
                These Terms do not create any rights enforceable by any person not a party to these Terms, and no third-party beneficiary rights are created hereby. Only the parties to these Terms (you and Right Space LLC) may enforce them.
              </p>
            </Section>

            <Section title="Modifications to Terms">
              <ul>
                <li>We reserve the right to modify or replace these Terms at any time.</li>
                <li>If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.</li>
                <li>Material changes include changes to pricing, payment terms, liability limitations, or governing law.</li>
                <li>What constitutes a material change will be determined at our sole discretion.</li>
                <li>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</li>
              </ul>
            </Section>

            <Section title="General Provisions">
              <p><strong>Entire Agreement:</strong></p>
              <p>
                These Terms, together with our Privacy Policy, constitute the general framework for all Horus Desk services. For Managed Teams and Software Studio, the signed Statement of Work or Service Agreement applicable to your specific engagement supplements these Terms. In case of conflict, the signed agreement prevails. These documents collectively constitute the entire agreement between you and Horus Desk, superseding any prior agreements.
              </p>

              <p><strong>Severability:</strong></p>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall remain in full force and effect.
              </p>

              <p><strong>Waiver:</strong></p>
              <p>
                No waiver of any provision of these Terms shall be effective unless in writing and signed by the party granting the waiver. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <p><strong>Assignment:</strong></p>
              <p>
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction, including in connection with a merger, acquisition, or sale of assets.
              </p>

              <p><strong>Force Majeure:</strong></p>
              <p>
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials, or failures of third-party service providers (including internet service providers, cloud hosting providers, or AI service providers).
              </p>

              <p><strong>Notices:</strong></p>
              <p>
                All notices to us must be sent to legal@horusdesk.com or our Cairo business address. Notices to you will be sent to the email address associated with your account.
              </p>

              <p><strong>Third-Party Beneficiaries:</strong></p>
              <p>
                These Terms do not create any third-party beneficiary rights except as expressly provided herein.
              </p>
            </Section>

            <Section title="Contact Information">
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                <strong>Right Space LLC</strong><br />
                Attn: Legal Department<br />
                30B Asmaa Fahmi, Al Golf, Nasr City<br />
                Cairo Governorate 4451422<br />
                Arab Republic of Egypt
              </p>
              <ul>
                <li>Email: legal@horusdesk.com</li>
                <li>Support: support@horusdesk.com</li>
                <li>Privacy: privacy@horusdesk.com</li>
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
