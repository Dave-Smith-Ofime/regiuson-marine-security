import { Link } from "react-router-dom";

const Disclaimer = () => (
  <div className="pt-32 pb-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Disclaimer</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p><strong>Last Updated:</strong> January 2025</p>
        <p>The information contained on this website is for general information purposes only. Regiuson Marine Services makes every effort to keep the information up to date and correct, but makes no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.</p>
        <p>Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage including, without limitation, indirect or consequential loss or damage arising from the use of this website.</p>
        <p>Through this website you may be able to link to other websites which are not under the control of Regiuson Marine Services. We have no control over the nature, content, and availability of those sites.</p>
        <p>Every effort is made to keep the website up and running smoothly. However, Regiuson Marine Services takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
      </div>
      <div className="mt-8">
        <Link to="/" className="text-sm text-primary hover:underline">← Back to Home</Link>
      </div>
    </div>
  </div>
);

export default Disclaimer;
