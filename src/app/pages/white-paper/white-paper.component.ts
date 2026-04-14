import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaBannerComponent } from "../../components/cta-banner/cta-banner.component";

@Component({
  selector: 'app-white-paper',
  standalone: true,
  imports: [CommonModule, CtaBannerComponent],
  templateUrl: './white-paper.component.html',
  styleUrls: ['./white-paper.component.scss']
})
export class WhitePaperComponent {

}