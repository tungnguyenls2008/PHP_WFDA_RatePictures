import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate-model',
  templateUrl: './rate-model.component.html',
  styleUrls: ['./rate-model.component.scss']
})
export class RateModelComponent implements OnInit {
  rating = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  displayRating() {
    if (this.rating === 0) {
      return 'Please pick your rate!';
    } else if (this.rating === 1 || this.rating === 2 || this.rating === 3) {
      return 'This can be better!';
    } else if (this.rating === 4 || this.rating === 5 || this.rating === 6) {
      return 'This one is ok, i guess';
    } else if (this.rating === 7 || this.rating === 8 || this.rating === 9) {
      return 'This one is great!';
    } else {
      return 'This is Gorgeous!';
    }
  }
}
