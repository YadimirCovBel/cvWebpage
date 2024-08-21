import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements AfterViewInit {
  @ViewChild('cvContainer') cvContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.adjustFontSize();
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
