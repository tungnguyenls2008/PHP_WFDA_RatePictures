import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rate-resource',
  templateUrl: './rate-resource.component.html',
  styleUrls: ['./rate-resource.component.scss']
})
export class RateResourceComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor() { }

  ngOnInit(): void {
  }
  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(slideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  startCarousel() {
    this.carousel.cycle();
  }

  pauseCarousel() {
    this.carousel.pause();
  }

  moveNext() {
    this.carousel.next();
  }

  getPrev() {
    this.carousel.prev();
  }

  goToSlide(slide) {
    this.carousel.select(slide);
  }

}
