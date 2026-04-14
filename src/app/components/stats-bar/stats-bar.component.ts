import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss']
})
export class StatsBarComponent {
  stats = [
    { icon: '👥', value: '7M+', label: 'B2B Contacts' },
    { icon: '🎯', value: '1M+', label: 'Decision Makers' },
    { icon: '🏆', value: '1.5M+',  label: 'C-Level Contacts' },
    { icon: '📊', value: '80+',   label: 'Data Fields' },
    { icon: '🌍', value: '5+',   label: 'Global Regulations' },
    { icon: '✅', value: '95%+',  label: 'Data Accuracy' },
  ];
}
