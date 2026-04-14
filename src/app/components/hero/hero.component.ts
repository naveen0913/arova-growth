import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  words = ['Lead Generation','Demand Generation','Sales Development','Account Based Marketing','Multi-channel Marketing','Event Marketing'];
  idx = 0;
  typed = '';
  private ticker: any;
  private typer: any;

  ngOnInit() { this.start(); this.ticker = setInterval(() => { this.idx=(this.idx+1)%this.words.length; this.start(); }, 3400); }
  ngOnDestroy() { clearInterval(this.ticker); clearInterval(this.typer); }
  private start() {
    this.typed = ''; let i = 0;
    clearInterval(this.typer);
    this.typer = setInterval(() => { if(i<this.words[this.idx].length) this.typed=this.words[this.idx].slice(0,++i); else clearInterval(this.typer); }, 55);
  }

  clients = ['Cigna','McKesson','KPMG','Oracle','IBM','Deloitte','SAP','UHC','Pfizer','Salesforce','Microsoft','AstraZeneca'];
  metrics = [
    { n:'7M+', l:'B2B Contacts' },
    { n:'1M+', l:'Decision Makers' },
    { n:'1.5M+',  l:'C-Level Contacts' },
    { n:'95%+',  l:'Data Accuracy' },
  ];
}
