export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-4 py-16 mt-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: 26 Jan, 2026
        </p>

        {/* 1. Introduction */}
        <PolicySection title="1. Introduction">
          <p>
            This Privacy Policy explains how <strong>StreeDhana</strong>, a
            financial literacy and investor awareness platform promoted by
            <strong> NextStep Financials Service Private Limited</strong>
            (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;), collects, uses, processes, stores, and protects
            personal data of users (&ldquo;you&rdquo;, &ldquo;your&rdquo;) in
            accordance with the <b>Digital Personal Data Protection Act, 2023
            (&ldquo;DPDP Act&rdquo;),</b> and other applicable laws of India.
          </p>
          <p>
            StreeDhana is committed to safeguarding your privacy and ensuring
            lawful, fair, and transparent handling of personal data.
          </p>
        </PolicySection>

        {/* 2. Platform Ownership */}
        <PolicySection title="2. Platform Ownership & Technology Management">
          <p>
            The website, Android application, and iOS application (collectively referred to as the “Platform”) are owned by StreeDhana, promoted by NextStep Financials Service Private Limited.
          </p>
          <p>
            The Platform is developed, hosted, maintained, and technically managed by Mindfinness Enterprises Private Limited, a third-party technology service provider engaged by StreeDhana.
          </p>
          <p>
            For the purposes of the Digital Personal Data Protection Act, 2023:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              NextStep Financials Service Private Limited (StreeDhana) acts as the {" "}
              <strong>Data Fiduciary</strong>
            </li>
            <li>
              Mindfinness Enterprises Private Limited acts as the{" "}
              <strong>Data Processor</strong>
            </li>
          </ul>

          <p>
            Mindfinness Enterprises Private Limited:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processes personal data only on documented instructions of StreeDhana</li>
            <li>Does not own, control, sell, or independently use user data</li>
            <li>Is contractually bound by <strong>confidentiality, security, and data protection obligations</strong></li>
            <li>Implements appropriate technical and organisational safeguards as required under law</li>
          </ul>

          <p>
           All rights of users (“Data Principals”) under applicable data protection laws are exercisable against {" "}
           <strong>StreeDhana / NextStep Financials Service Private Limited.</strong>
          </p>
        </PolicySection>

        {/* 3. Applicability */}
        <PolicySection title="3. Applicability">
            <p>This Privacy Policy applies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visitors to the StreeDhana website</li>
            <li>Users of the Android and iOS applications</li>
            <li>
              Participants in financial literacy programs, tools, calculators,
              and awareness initiatives
            </li>
          </ul>
          <p>
            By accessing or using the Platform, you consent to the collection and
            processing of your personal data as described in this Policy.
          </p>
        </PolicySection>
    
        {/* 4. Personal Data */}
        <PolicySection title="4. Personal Data We Collect">
        <p>We may collect the following categories of personal data:</p>
          <p><strong>a) Basic Personal Information</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>City and state</li>
          </ul>

          <p className="mt-4">
            <strong>b) Financial & Profile Information (voluntarily provided)</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Income range</li>
            <li>Financial goals</li>
            <li>Risk appetite</li>
            <li>Investment experience</li>
          </ul>

          <p className="mt-4">
            <strong>c) KYC Information (where legally required)</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>PAN</li>
            <li>Aadhaar (masked / as permitted by law)</li>
            <li>Bank account details (for transaction facilitation only)</li>
          </ul>

          <p className="mt-4">
            <strong>d) Technical & Usage Data</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address</li>
            <li>Device and browser details</li>
            <li>App and website usage data</li>
          </ul>
          <p>We collect only such data as is necessary for the stated purposes.</p>
        </PolicySection>

        {/* 5. Purpose */}
        <PolicySection title="5. Purpose of Data Collection">
        <p>Your personal data is collected and processed for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Financial literacy and investor awareness initiatives</li>
            <li>Goal planning and risk profiling (indicative and educational)</li>
            <li>User onboarding and account management</li>
            <li>KYC and regulatory compliance (SEBI / AMFI / AML)</li>
            <li>Platform communication and updates</li>
            <li>Security, analytics, and improvement</li>
            <li>Legal and regulatory obligations</li>
          </ul>
          <p>Personal data is processed only for lawful purposes and to the extent consented to or permitted by law.</p>
        </PolicySection>

        {/* 6. Consent */}
        <PolicySection title="6. Consent Under DPDP Act, 2023">
          <p>
            By using the Platform or submitting your information, you provide free, specific, informed, unconditional, and unambiguous consent for processing your personal data.
          </p>
          <p>
            You may withdraw consent at any time by contacting us, subject to statutory or regulatory data-retention obligations.
          </p>
        </PolicySection>

        {/* 7. Sharing */}
        <PolicySection title="7. Sharing of Personal Data">
          <p>We do not sell or trade your personal data.</p>
          <p>Data may be shared only with:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>AMFI-registered Mutual Fund Distributors</li>
            <li>SEBI-regulated intermediaries</li>
            <li>Technology partners including Mindfinness Enterprises</li>
            <li>Government or regulatory authorities when required</li>
          </ul>
        </PolicySection>

        {/* 8. Retention */}
        <PolicySection title="8. Data Storage & Retention">
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal data is stored on secure servers, primarily within India or as permitted under Indian law</li>
            <li>Data is retained only for as long as necessary to fulfil the stated purposes or comply with legal/regulatory requirements</li>
            <li>Upon completion of purpose or lawful withdrawal of consent, data is securely deleted or anonymised</li>
            
          </ul>
        </PolicySection>

        {/* 9. Security */}
        <PolicySection title="9. Data Security Safeguards">
            <p>We implement reasonable security safeguards including:</p>
               <ul className="list-disc pl-6 space-y-2">
                 <li>Encryption and access controls</li>
                 <li>Secure hosting environments</li>
                 <li>Periodic security assessments</li>
               </ul>
            <p>While we take all reasonable precautions, no digital system is completely immune to risks.</p>
        </PolicySection>

        {/* 10. Rights */}
        <PolicySection title="10. Your Rights as a Data Principal">
         <p>Under the DPDP Act, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and correction of personal data</li>
            <li>Request correction or updating of inaccurate data</li>
            <li>Withdraw consent (subject to legal obligations)</li>
            <li>RequestErasure of personal data</li>
            <li>Nominate another person to exercise your rights</li>
            <li>Seek grievance redressal</li>
          </ul>
          <p>Requests will be addressed within timelines prescribed under applicable law.</p>
        </PolicySection>

        {/* 11. Children */}
        <PolicySection title="11. Children’s Data">
          <p>
            We do not knowingly collect personal data of children below <strong>18 years</strong>
            without verifiable parental consent.
          </p>
        </PolicySection>

        {/* 12. Cookies */}
        <PolicySection title="12. Cookies & Tracking Technologies">
          <p>
            The Platform may use cookies or similar technologies to enhance user experience and analyse usage patterns. You may disable cookies through browser or device settings; however, some features may be affected.
          </p>
        </PolicySection>

        {/* 13. Grievance */}
        <PolicySection title="13. Grievance Redressal">
          <p>In accordance with the DPDP Act, a Grievance Officer has been appointed.</p>
          <p><strong>Grievance Officer</strong></p>
          <p>StreeDhana – NextStep Financials Service Private Limited</p>
          <p>📧 Email: contact@streedhana.com</p>
          <p>If a grievance is not resolved, users may approach the Data Protection Board of India, as notified under the DPDP Act.</p>
        </PolicySection>

        {/* 14. Updates */}
        <PolicySection title="14. Policy Updates">
          <p>
            This Privacy Policy may be updated from time to time to reflect changes in law, regulations, or platform practices. Updated versions will be published on the Platform. Continued use constitutes acceptance.
          </p>
        </PolicySection>

        {/* 15. Governing Law */}
        <PolicySection title="15. Governing Law">
          <p>
            This Privacy Policy shall be governed by and construed in accordance with the laws of India, including the Digital Personal Data Protection Act, 2023.
          </p>
        </PolicySection>

        {/* Disclaimer */}
        <div className="mt-12 p-6 border rounded-xl bg-muted/30">
          <h2 className="text-lg font-semibold mb-2">
            Regulatory Disclaimer
          </h2>
          <p className="text-sm ">
            StreeDhana is a financial literacy and investor awareness platform. Tools and illustrations are indicative and for educational purposes only. Mutual fund investments are subject to market risks. Please read all scheme related documents carefully.
          </p>
        </div>
      </section>
    </main>
  );
}

/* Reusable Section Component */
function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
