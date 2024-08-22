import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, AfterViewInit {
  @ViewChild('cvContainer') cvContainer!: ElementRef;
  cvData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadJsonData();
  }

  ngAfterViewInit(): void {
    this.adjustFontSize();
  }

  loadJsonData() {
    this.http.get('assets/cv-content.json').subscribe(data => {
      this.cvData = data;
    });
  }

  adjustFontSize() {
    const container = this.cvContainer.nativeElement;
    const maxFontSize = 16; // Maximum font size in pixels
    const minFontSize = 10; // Minimum font size in pixels
    const maxHeight = 27.94 * 37.795275591; // Maximum height in pixels (27.94 cm * 37.795275591 DPI)

    let fontSize = maxFontSize;
    container.style.fontSize = `${fontSize}px`;

    while (container.scrollHeight > maxHeight && fontSize > minFontSize) {
      fontSize--;
      container.style.fontSize = `${fontSize}px`;
    }
  }
}
