import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rate-model',
  templateUrl: './rate-model.component.html',
  styleUrls: ['./rate-model.component.scss']
})
export class RateModelComponent implements OnInit {
  @Input() selected = 0;
  @Output() newStart = new EventEmitter();
  hovered = 0;
  readonly: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  displayRating(value) {
    if (isNaN(value ) || value === 0) {
      return 'Please pick your rate!';
    } else if (value === 1 || value === 2 || value === 3) {
      return 'This can be better!';
    } else if (value === 4 || value === 5 || value === 6) {
      return 'This one is ok I guess...';
    } else if (value === 7 || value === 8 || value === 9) {
      return 'This one is great!';
    } else {
      return 'Exceptionally Beautiful!';
    }
  }

  rate() {
      console.log(123);
  }
}
