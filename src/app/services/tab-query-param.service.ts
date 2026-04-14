import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabQueryParamService {
  private activeTab = signal<string>('');

  constructor(private route: ActivatedRoute, private router: Router) {}

  initialize(defaultTab: string, validTabs: string[]) {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab && validTabs.includes(tab)) {
        this.activeTab.set(tab);
      } else {
        this.activeTab.set(defaultTab);
        this.updateQueryParam();
      }
    });
  }

  getActiveTab() {
    return this.activeTab;
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
    this.updateQueryParam();
  }

  private updateQueryParam() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: this.activeTab() },
      queryParamsHandling: 'merge'
    });
  }
}