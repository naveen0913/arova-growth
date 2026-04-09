import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: 'data-solutions',
        loadComponent: () => import('./components/data-solutions/data-solutions.component').then((m) => m.DataSolutionsComponent)
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesPageComponent)
      },
      {
        path: 'resources',
        loadComponent: () => import('./pages/resources/resources.component').then((m) => m.ResourcesPageComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactPageComponent)
      },
      {
        path: 'our-process',
        loadComponent: () => import('./components/our-process/our-process.component').then((m) => m.OurProcessComponent)
      },
      {
        path: 'why-us',
        loadComponent: () => import('./components/why-us/why-us.component').then((m) => m.WhyUsComponent)
      },
      {
        path: 'compliance',
        loadComponent: () => import('./components/compliance/compliance.component').then((m) => m.ComplianceComponent)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ]
};
