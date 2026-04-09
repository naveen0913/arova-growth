import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsBarComponent } from '../../components/stats-bar/stats-bar.component';
import { WhoWeServeComponent } from '../../components/who-we-serve/who-we-serve.component';
import { DataSolutionsComponent } from '../../components/data-solutions/data-solutions.component';
import { OurProcessComponent } from '../../components/our-process/our-process.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { ComplianceComponent } from '../../components/compliance/compliance.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    StatsBarComponent,
    WhoWeServeComponent,
    DataSolutionsComponent,
    OurProcessComponent,
    WhyUsComponent,
    ComplianceComponent,
    CtaBannerComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-stats-bar></app-stats-bar>
    <app-who-we-serve></app-who-we-serve>
    <app-data-solutions></app-data-solutions>
    <app-our-process></app-our-process>
    <app-why-us></app-why-us>
    <app-compliance></app-compliance>
    <app-cta-banner></app-cta-banner>
  `
})
export class HomeComponent {}
