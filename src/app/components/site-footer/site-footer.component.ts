import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent {
  year = new Date().getFullYear();
  cols = [
    {
      head: 'Data Solutions',
      links: [
        { label: 'Healthcare Email List', path: '/data-solutions?tab=healthcare' },
        { label: 'Technology Users List', path: '/data-solutions?tab=technology' },
        { label: 'C-Level Executives', path: '/data-solutions?tab=clevels' },
        { label: 'International Email List', path: '/data-solutions?tab=international' },
        { label: 'Industry Email List', path: '/data-solutions?tab=industry' },
        { label: 'Professionals List', path: '/data-solutions?tab=professionals' }
      ]
    },
    {
      head: 'Services',
      links: [
        { label: 'B2B Email List', path: '/services/b2b-email-list' },
        { label: 'Email Appending', path: '/services/email-appending' },
        { label: 'Data Appending', path: '/services/data-appending' },
        { label: 'Data Enrichment', path: '/services/data-enrichment' },
        { label: 'Data Validation', path: '/services/data-validation' },
        { label: 'Direct Dials', path: '/services/direct-dials' }
      ]
    },
    {
      head: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms of Service', path: '/terms-of-service' }
      ]
    },
    {
      head: 'Knowledge',
      links: [
        { label: 'Case Studies', path: '/case-study' },
        { label: 'White Papers', path: '/white-paper' }
      ]
    },
  ];
  socials = [
    { name: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', url: 'https://linkedin.com/company/arovagrowth' },
    { name: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', url: 'https://twitter.com/arovagrowth' },
    { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', url: 'https://facebook.com/arovagrowth' },
    { name: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z M10 15.5l5.19-3L10 9v6.5z', url: 'https://youtube.com/@arovagrowth' },
  ];

  bottomLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
  ];
}
