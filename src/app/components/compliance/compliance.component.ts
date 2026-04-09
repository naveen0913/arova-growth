import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent {
  badges = [
    { label: 'GDPR',              color: '#2563eb', bg: '#eff6ff', icon: '🇪🇺', desc: 'EU Data Protection' },
    { label: 'CAN-SPAM',          color: '#16a34a', bg: '#f0fdf4', icon: '📧', desc: 'Email Compliance' },
    { label: 'CCPA',              color: '#d97706', bg: '#fffbeb', icon: '🇺🇸', desc: 'California Privacy' },
    { label: 'HIPAA',             color: '#dc2626', bg: '#fef2f2', icon: '🏥', desc: 'Healthcare Privacy' },
    { label: 'PDPA',              color: '#7c3aed', bg: '#f5f3ff', icon: '🔏', desc: 'Personal Data Act' },
    { label: 'ISO 27001',         color: '#0891b2', bg: '#ecfeff', icon: '🛡️', desc: 'Info Security' },
    { label: 'ePrivacy Directive',color: '#059669', bg: '#ecfdf5', icon: '🔒', desc: 'EU ePrivacy' },
    { label: 'CASL',              color: '#ea580c', bg: '#fff7ed', icon: '🍁', desc: 'Canada Anti-Spam' },
  ];
}
