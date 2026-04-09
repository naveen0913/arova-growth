import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.scss']
})
export class CtaBannerComponent {
  name    = signal('');
  email   = signal('');
  company = signal('');
  service = signal('');
  sent    = signal(false);

  onSubmit() {
    if (this.name() && this.email()) { this.sent.set(true); }
  }
}
