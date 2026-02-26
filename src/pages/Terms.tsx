import { Link } from "react-router-dom";

const Terms = () => (
  <div className="pt-32 pb-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Terms of Service</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p><strong>Last Updated:</strong> January 2025</p>
        <p>These Terms of Service govern your use of the Regiuson Marine Services website and any services engaged through it.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">1. Services</h2>
        <p>Regiuson Marine provides maritime security, vessel support, and related marine services across Nigerian waters. All services are subject to separate service agreements and operational terms.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">2. Quote Requests</h2>
        <p>Quote requests submitted through this website are subject to review and confirmation by our operations team. Submission of a quote request does not constitute a binding agreement.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">3. Limitation of Liability</h2>
        <p>While we strive for accuracy, information on this website is provided for general purposes. Operational details, pricing, and availability are subject to change without notice.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">4. Intellectual Property</h2>
        <p>All content, branding, and materials on this website are the property of Regiuson Marine Services and may not be reproduced without written consent.</p>
        
        <h2 className="font-display text-xl font-semibold text-foreground">5. Governing Law</h2>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
      </div>
      <div className="mt-8">
        <Link to="/" className="text-sm text-primary hover:underline">← Back to Home</Link>
      </div>
    </div>
  </div>
);

export default Terms;
