import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

interface Service { id: string; title: string; desc: string; features: string[]; benefits: string[]; }

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CtaBannerComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesPageComponent implements OnInit {
  currentService: Service | null = null;

  services: Service[] = [
    {
      id: 'b2b-email-list',
      title: 'B2B Email List Development',
      desc: 'Build highly targeted email lists of business professionals and decision-makers across industries. Our comprehensive B2B email database helps you reach the right audience with precision targeting.',
      features: [
        'Industry-specific segmentation',
        'Job title and seniority filtering',
        'Company size targeting',
        'Geographic location options',
        'Verified email addresses',
        'Regular database updates'
      ],
      benefits: [
        'Higher deliverability rates',
        'Better engagement metrics',
        'Cost-effective lead generation',
        'Scalable marketing campaigns',
        'Reduced bounce rates'
      ]
    },
    {
      id: 'email-appending',
      title: 'Email Appending Services',
      desc: 'Enhance your existing contact database by adding verified email addresses to incomplete records. Our email appending service matches your data with our comprehensive B2B database to fill gaps.',
      features: [
        'High match rates (up to 85%)',
        'Multiple data source integration',
        'Real-time validation',
        'Custom matching algorithms',
        'Bulk processing capabilities',
        'Quality assurance checks'
      ],
      benefits: [
        'Complete contact profiles',
        'Improved campaign reach',
        'Better customer insights',
        'Enhanced CRM data',
        'Increased marketing ROI'
      ]
    },
    {
      id: 'data-appending',
      title: 'Data Appending Solutions',
      desc: 'Enrich your customer and prospect data with additional business intelligence. Add phone numbers, job titles, company information, and more to create comprehensive contact profiles.',
      features: [
        'Phone number appending',
        'Job title enrichment',
        'Company data enhancement',
        'Social media profiles',
        'Technology stack data',
        'Firmographic information'
      ],
      benefits: [
        '360-degree customer view',
        'Personalized marketing',
        'Better lead scoring',
        'Improved sales intelligence',
        'Enhanced segmentation'
      ]
    },
    {
      id: 'data-enrichment',
      title: 'Data Enrichment Services',
      desc: 'Transform your raw data into actionable business intelligence. Our data enrichment process adds valuable context and insights to help you make better marketing and sales decisions.',
      features: [
        'Intent data integration',
        'Behavioral analytics',
        'Firmographic data',
        'Technographic information',
        'Social media intelligence',
        'Real-time data updates'
      ],
      benefits: [
        'Data-driven decision making',
        'Predictive lead scoring',
        'Account-based marketing',
        'Personalized outreach',
        'Competitive intelligence'
      ]
    },
    {
      id: 'data-validation',
      title: 'Data Validation & Verification',
      desc: 'Ensure the accuracy and reliability of your B2B contact data. Our validation services check, correct, and verify email addresses, phone numbers, and other contact information.',
      features: [
        'Email address validation',
        'Phone number verification',
        'Address standardization',
        'Duplicate detection',
        'Data hygiene maintenance',
        'Compliance checking'
      ],
      benefits: [
        'Improved deliverability',
        'Better sender reputation',
        'Reduced marketing waste',
        'Enhanced data quality',
        'Regulatory compliance'
      ]
    },
    {
      id: 'direct-dials',
      title: 'Direct Dial Phone Lists',
      desc: 'Access verified business phone numbers for direct outreach. Our direct dial database provides accurate, up-to-date phone numbers of key decision-makers and business professionals.',
      features: [
        'Verified phone numbers',
        'DNC compliance',
        'Area code targeting',
        'Business line identification',
        'Mobile vs landline data',
        'Regular updates'
      ],
      benefits: [
        'Direct sales outreach',
        'Higher connection rates',
        'Personalized cold calling',
        'Lead qualification',
        'Sales team efficiency'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.currentService = this.services.find(s => s.id === id) || null;
      } else {
        this.currentService = null; // Show overview
      }
    });
  }
}
