import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab { id: string; label: string; title: string; desc: string; items: string[]; accent: string; }

@Component({
  selector: 'app-data-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-solutions.component.html',
  styleUrls: ['./data-solutions.component.scss']
})
export class DataSolutionsComponent {
  active = signal('healthcare');

  tabs: Tab[] = [
    { id: 'healthcare', label: 'Healthcare', accent: '#10b981',
      title: 'Healthcare Email List',
      desc: 'Connect with verified healthcare professionals, administrators, and decision-makers across hospitals, clinics, and medical organizations globally.',
      items: ['Physicians Email List','Cardiologists Email List','Dentist Email List','Hospital CEO Email List','Neurologists Email List','Nurse Mailing List','Pediatrician Email List','Pharmaceutical Email List','Psychologists Email List','Therapist Email List','Oncologist Email List','Surgeon Email List'] },
    { id: 'technology', label: 'Technology', accent: '#6366f1',
      title: 'Technology Users Email List',
      desc: 'Target companies based on the specific software, tools, and technologies they actively use — for smarter technographic-driven marketing.',
      items: ['Salesforce CRM Users','SAP Users Email List','Oracle Users Email List','HubSpot Customers List','AWS Users Email List','Microsoft Azure List','IBM Users Email List','Workday Customers List','NetSuite Users List','Zoho CRM Users List','QuickBooks Users','Slack Customers List'] },
    { id: 'professionals', label: 'Professionals', accent: '#f59e0b',
      title: 'Professional Email List',
      desc: 'Access direct contacts of skilled professionals and specialists across diverse roles, functions, and experience levels across every major industry.',
      items: ['Accountants Email List','Architects Email List','Attorney Email List','Auditors Email List','Contractors Email List','HR Email List','Insurance Agents List','Investor Email List','Engineers Email List','Recruiters Email List','Financial Advisors','Real Estate Agents'] },
    { id: 'clevels', label: 'C-Level', accent: '#8b5cf6',
      title: 'C-Level Executives Email List',
      desc: 'Reach top-level executives and key decision-makers who drive strategic, financial, and operational decisions within Fortune 500 and mid-market companies.',
      items: ['CEO Mailing List','CFO Mailing List','CTO Mailing List','COO Email List','CIO Mailing List','CMO Mailing List','CHRO Email List','CDO Email List','CSO Mailing List','CNO Email List','CPO Email List','CXO Email List'] },
    { id: 'international', label: 'International', accent: '#ec4899',
      title: 'International Email List',
      desc: 'Expand your global reach with country-specific and region-based contacts from businesses worldwide, covering 150+ countries across every continent.',
      items: ['USA Business Email List','UK Business Email List','Canada Email List','Australia Email List','Germany Business List','France Business List','UAE Dubai Email List','Singapore Email List','Japan Business List','European Business List','Brazil Business List','Middle East Email List'] },
    { id: 'industry', label: 'Industry', accent: '#14b8a6',
      title: 'Industry-Specific Email List',
      desc: 'Engage businesses across specific industries with deeply segmented contact data tailored precisely to your niche market needs and verticals.',
      items: ['Agriculture Email List','Automotive Industry','Aviation Email List','Biotechnology List','Hotels Email List','Manufacturing Email List','Real Estate List','Retail Email List','Travel Agents List','Beauty Industry List','Construction Email List','Finance Industry List'] },
  ];

  get cur(): Tab { return this.tabs.find(t => t.id === this.active())!; }
}
