import { Component, OnInit } from '@angular/core';
import { Footer } from '../../models/footer';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  externalLinks: Footer[] = []

  constructor(
    private footer: FooterService
  ) { }

  ngOnInit(): void {
    this.externalLinks = this.footer.externalLinks
  }
}
