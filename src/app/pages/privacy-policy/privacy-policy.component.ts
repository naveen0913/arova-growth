import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-section privacy-page">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 14, 2026</p>

        <div class="policy-content">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>

          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy[at]arovagrowth.com.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .privacy-page {
      padding: 80px 0;
      .container { max-width: 800px; }
      h1 { font-size: 36px; margin-bottom: 10px; }
      p:first-of-type { color: var(--slate); margin-bottom: 40px; }
      .policy-content {
        h2 { font-size: 24px; margin: 30px 0 15px 0; }
        p { line-height: 1.6; margin-bottom: 20px; }
      }
    }
  `]
})
export class PrivacyPolicyComponent {}