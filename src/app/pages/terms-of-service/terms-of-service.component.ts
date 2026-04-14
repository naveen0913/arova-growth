import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-section terms-page">
      <div class="container">
        <h1>Terms of Service</h1>
        <p>Last updated: April 14, 2026</p>

        <div class="policy-content">
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using Arova Growth's services, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2>Use License</h2>
          <p>Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.</p>

          <h2>User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>

          <h2>Service Modifications</h2>
          <p>We reserve the right to modify or discontinue our services at any time without notice.</p>

          <h2>Contact Information</h2>
          <p>Questions about the Terms of Service should be sent to us at legal[at]arovagrowth.com.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .terms-page {
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
export class TermsOfServiceComponent {}