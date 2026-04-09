import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  features = [
    { icon:'💰', title:'Cost-Effective',    desc:'Premium data that delivers maximum ROI without burning your marketing budget.' },
    { icon:'🎯', title:'Accuracy First',    desc:'95%+ accuracy guaranteed — our watchword is precision, not approximation.' },
    { icon:'🛠️', title:'Customization',     desc:'Fully tailored databases built exclusively around your brand and campaign needs.' },
    { icon:'📊', title:'Increased ROI',     desc:'Our verified data consistently helps clients skyrocket their return on investments.' },
    { icon:'🔄', title:'Regular Updates',   desc:'Data refreshed every 90 days to filter out inactive and undeliverable records.' },
    { icon:'📞', title:'Communication',     desc:'Zero spam policy — engage via phone, email, direct mail, fax, and more.' },
    { icon:'🔗', title:'CRM-Compatible',    desc:'Data formatted for seamless import into Salesforce, HubSpot, and all major CRMs.' },
    { icon:'⚖️', title:'Legitimate Data',  desc:'100% compliant with GDPR, CAN-SPAM, CCPA, HIPAA, and all global data laws.' },
    { icon:'⚡', title:'Timely Delivery',   desc:'Your verified, ready-to-use data delivered within 2-3 business days, always.' },
  ];
}
