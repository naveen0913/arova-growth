import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  template: `
    <section class="page-section contact-page">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Ready to boost your B2B pipeline? Reach out and let's build your next data-driven campaign.</p>
        <dl>
          <dt>Email</dt>
          <dd><a href="mailto:info@arovagrowth.com">infoarovagrowth.com</a></dd>
          <dt>Phone</dt>
          <dd><a href="tel:+18002248308">+1 (800) 224-8308</a></dd>
        </dl>
      </div>
    </section>
    <app-cta-banner></app-cta-banner>
  `
})
export class ContactPageComponent {}
