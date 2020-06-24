import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-rate-resource',
  templateUrl: './rate-resource.component.html',
  styleUrls: ['./rate-resource.component.scss']
})
export class RateResourceComponent implements OnInit {
  images = [
    {
      id: 1,
      url: '../assets/images/0001.jpg',
      rate: 5,
      active: 'active'
    }
    ,
    {
      id: 2,
      url: '../assets/images/0002.jpg',
      rate: 2,
      active: ''
    },
    {
      id: 3,
      url: '../assets/images/0003.jpg',
      rate: 7,
      active: ''
    },
    {
      id: 4,
      url: '../assets/images/0004.jpg',
      rate: 3,
      active: ''
    },
    {
      id: 5,
      url: '../assets/images/0005.jpg',
      rate: 9,
      active: ''
    }
  ];
  count: number;

  showNavigationArrows = false;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor() { }

  ngOnInit(): void {
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

  nextImage(event) {
    console.log(event.current);
  }

  onSlide(event) {
    const imageIndex = parseInt(event.current.replace('slideId_', ''), 10);
    this.images.forEach(image => {
      if (image.id === imageIndex) {
        this.count = image.rate;
        console.log(this.count);
      }
    });
  }
}
