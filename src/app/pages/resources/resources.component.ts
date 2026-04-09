import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-resources-page',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  template: `
    <section class="page-section resources-page">
      <div class="container">
        <h1>Knowledge & Resources</h1>
        <p>Access our case studies, white papers, infographics, podcasts, and webinars for B2B data intelligence.</p>
        <ul>
          <li>Case Studies</li>
          <li>Infographics</li>
          <li>White Papers</li>
          <li>Podcasts</li>
          <li>Videos & Webinars</li>
        </ul>
      </div>
    </section>
    <app-cta-banner></app-cta-banner>
  `
})
export class ResourcesPageComponent {}
