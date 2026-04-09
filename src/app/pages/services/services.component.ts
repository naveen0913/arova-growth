import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  template: `
    <section class="page-section services-page">
      <div class="container">
        <h1>Services</h1>
        <p>Explore the B2B data services that drive lead generation, outreach, and customer acquisition.</p>
        <ul>
          <li>B2B Email List Development</li>
          <li>Email Appending</li>
          <li>Data Appending</li>
          <li>Data Enrichment</li>
          <li>Data Validation</li>
          <li>Direct Dials</li>
        </ul>
      </div>
    </section>
    <app-cta-banner></app-cta-banner>
  `
})
export class ServicesPageComponent {}
