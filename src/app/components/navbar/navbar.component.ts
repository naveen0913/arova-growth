import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NavLink { label: string; path: string; }
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
  toggleMobDrop(id: string) { this.openDrop.update(v => v === id ? '' : id); }
  close() {
    this.menuOpen.set(false); this.openDrop.set('');
  }

  navItems: NavItem[] = [
    {
      id: 'company',
      label: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Client Testimonials', path: '/resources' },
        { label: 'Our Team', path: '/about' }
      ]
    },
    {
      id: 'data',
      label: 'Data Solutions',
      links: [
        { label: 'Healthcare Email List', path: '/data-solutions' },
        { label: 'Technology Users List', path: '/data-solutions' },
        { label: 'Industry Email List', path: '/data-solutions' },
        { label: 'International Email List', path: '/data-solutions' },
        { label: 'C-Level Executives', path: '/data-solutions' },
        { label: 'Professionals List', path: '/data-solutions' }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      links: [
        { label: 'B2B Email List', path: '/services' },
        { label: 'Email Appending', path: '/services' },
        { label: 'Data Appending', path: '/services' },
        { label: 'Data Enrichment', path: '/services' },
        { label: 'Data Validation', path: '/services' },
        { label: 'Direct Dials', path: '/services' }
      ]
    },
    {
      id: 'knowledge',
      label: 'Knowledge',
      links: [
        { label: 'Case Studies', path: '/resources' },
        { label: 'Infographics', path: '/resources' },
        { label: 'White Papers', path: '/resources' },
        { label: 'Podcasts', path: '/resources' },
        { label: 'Videos & Webinars', path: '/resources' }
      ]
    }
  ];
}
