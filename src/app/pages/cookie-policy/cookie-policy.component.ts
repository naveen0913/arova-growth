import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-section cookie-page">
      <div class="container">
        <h1>Cookie Policy</h1>
        <p>Last updated: April 14, 2026</p>

        <div class="policy-content">
          <h2>What Are Cookies</h2>
          <p>Cookies are small text files that are stored on your computer or mobile device when you visit our website.</p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies to improve your browsing experience, analyze site traffic, and personalize content.</p>

          <h2>Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at privacy[at]arovagrowth.com.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cookie-page {
      padding: 80px 0;
      .container { max-width: 800px; }
      h1 { font-size: 36px; margin-bottom: 10px; }
      p:first-of-type { color: var(--slate); margin-bottom: 40px; }
      .policy-content {
        h2 { font-size: 24px; margin: 30px 0 15px 0; }
        p { line-height: 1.6; margin-bottom: 20px; }
        ul { margin-bottom: 20px; }
        li { margin-bottom: 10px; line-height: 1.6; }
        strong { color: var(--navy); }
      }
    }
  `]
})
export class CookiePolicyComponent {}