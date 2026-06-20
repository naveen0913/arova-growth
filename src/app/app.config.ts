import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
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
        path: 'services/:id',
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
        path: 'white-paper',
        loadComponent: () => import('./pages/white-paper/white-paper.component').then((m) => m.WhitePaperComponent)
      },
      {
        path: 'case-study',
        loadComponent: () => import('./pages/case-study/case-study.component').then((m) => m.CaseStudyComponent)
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent)
      },
      {
        path: 'terms-of-service',
        loadComponent: () => import('./pages/terms-of-service/terms-of-service.component').then((m) => m.TermsOfServiceComponent)
      },
      {
        path: 'cookie-policy',
        loadComponent: () => import('./pages/cookie-policy/cookie-policy.component').then((m) => m.CookiePolicyComponent)
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
