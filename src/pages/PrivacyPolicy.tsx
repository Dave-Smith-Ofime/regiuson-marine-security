import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <div className="pt-32 pb-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p><strong>Last Updated:</strong> January 2025</p>
        <p>Regiuson Marine Services ("we", "us", "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard data provided through our website and services.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">1. Information We Collect</h2>
        <p>We may collect personal information including: name, email address, phone number, company details, vessel information, and service requirements when you submit forms, request quotes, or contact us.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
        <p>We use collected information to: respond to service inquiries, process quote requests, coordinate maritime operations, comply with regulatory requirements, and improve our services.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">3. Data Protection</h2>
        <p>We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction, in accordance with the Nigeria Data Protection Regulation (NDPR) and international best practices.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">4. Data Retention</h2>
        <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">5. Your Rights</h2>
        <p>You have the right to access, rectify, or request deletion of your personal data. To exercise these rights, contact us at regiusonmarineservices@yahoo.com.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">6. Contact</h2>
        <p>For privacy-related inquiries, please contact our Data Protection Officer at regiusonmarineservices@yahoo.com or call +234 816 970 3636.</p>
      </div>
      <div className="mt-8">
        <Link to="/" className="text-sm text-primary hover:underline">← Back to Home</Link>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
