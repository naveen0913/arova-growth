import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-our-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-process.component.html',
  styleUrls: ['./our-process.component.scss']
})
export class OurProcessComponent {
  steps = [
    { n:'01', icon:'💬', title:'Client Requirements', desc:'We listen carefully, brainstorm your exact requirements, and define the scope of data needed for your campaigns.' },
    { n:'02', icon:'🗄️', title:'Data Compilation',   desc:'We compile and customize databases specifically according to your needs, industry standards, and target audience.' },
    { n:'03', icon:'🔍', title:'Authentication',      desc:'All data is triple-verified and validated for authenticity, accuracy, and compliance with global data regulations.' },
    { n:'04', icon:'🚚', title:'Delivery & Support',  desc:'We deliver clean, ready-to-use data within 2-3 business days with ongoing support for any post-delivery queries.' },
  ];
}
