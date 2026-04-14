import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NavLink { label: string; path: string; queryParams?: { [key: string]: any }; }
interface NavItem { label: string; id: string; links: NavLink[]; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);
  openDrop = signal('');

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  setDrop(id: string) { this.openDrop.set(id); }
  clearDrop() { this.openDrop.set(''); }
  toggleMenu() { this.menuOpen.update(v => !v); }
  toggleMobDrop(id: string) { 
    this.openDrop.update(v => v === id ? '' : id); 
  }
  close() {
    this.menuOpen.set(false); this.openDrop.set('');
  }

  navItems: NavItem[] = [
    {
      id: 'company',
      label: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        // { label: 'Client Testimonials', path: '/resources' },
      ]
    },
    {
      id: 'data',
      label: 'Data Solutions',
      links: [
        { label: 'Healthcare Email List', path: '/data-solutions', queryParams: { tab: 'healthcare' } },
        { label: 'Technology Users List', path: '/data-solutions', queryParams: { tab: 'technology' } },
        { label: 'Industry Email List', path: '/data-solutions', queryParams: { tab: 'industry' } },
        { label: 'International Email List', path: '/data-solutions', queryParams: { tab: 'international' } },
        { label: 'C-Level Executives', path: '/data-solutions', queryParams: { tab: 'clevels' } },
        { label: 'Professionals List', path: '/data-solutions', queryParams: { tab: 'professionals' } }
      ]
    },
    {
      id: 'services',
      label: 'Services',
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
      id: 'knowledge',
      label: 'Knowledge',
      links: [
        { label: 'Case Studies', path: '/case-study' },
        // { label: 'Infographics', path: '/resources' },
        { label: 'White Papers', path: '/white-paper' },
      ]
    }
  ];
}
