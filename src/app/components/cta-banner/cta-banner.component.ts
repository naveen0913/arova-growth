import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.scss']
})
export class CtaBannerComponent {
  private http = inject(HttpClient);

  name    = signal('');
  email   = signal('');
  company = signal('');
  service = signal('');
  sent    = signal(false);
  message = signal('');

  isLoading = signal(false);

  onSubmit() {

    if (!this.name().trim()) {
      alert('Please enter Full Name');
      return;
    }

    if (!this.email().trim()) {
      alert('Please enter Work Email');
      return;
    }

    const payload = {
      fullName: this.name(),
      workEmail: this.email(),
      companyName: this.company(),
      serviceInterestedIn: this.service(),
      message: this.message()
    };

    this.isLoading.set(true);

    this.http.post(
      'https://api.arovagrowth.com/api/quote/send',
      payload,
      {
        responseType: 'text'
      }
    ).subscribe({
      next: (response: string) => {

        this.isLoading.set(false);

        if (response === '200') {

          alert('Your quote request has been submitted successfully.');

          // Reset Form
          this.name.set('');
          this.email.set('');
          this.company.set('');
          this.service.set('');
          this.message.set('');

          this.sent.set(true);

        } else {
          alert('Failed to send quote request.');
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        console.error(error);
        alert('Something went wrong. Please try again later.');
      }
    });
  }
  
}
