import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-who-we-serve',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-we-serve.component.html',
  styleUrls: ['./who-we-serve.component.scss']
})
export class WhoWeServeComponent {
  cards = [
    { icon: '🚀', title: 'Lead Generation',       desc: 'Generate qualified leads and convert them to loyal customers with pinpoint data precision.' },
    { icon: '📈', title: 'Sales Development',      desc: 'Improve sales engagement to win customers like never before using verified contact data.' },
    { icon: '📣', title: 'Multichannel Marketing', desc: 'Launch 10X faster campaigns across email, phone, and direct mail to reach your audience.' },
    { icon: '🧑‍💼', title: 'Talent Acquisition',   desc: 'Starting out or scaling up — find your ideal candidate with our professional database.' },
    { icon: '🎪', title: 'Event Marketing',        desc: 'Build perfect attendee lists for Conferences, Expos, Trade Shows, and Webinars.' },
    { icon: '📍', title: 'Account Based Marketing',desc: 'Target high-value accounts precisely with company-level and contact-level data segments.' },
  ];
}
