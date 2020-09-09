import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IGif } from '../models/gif.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.css']
})
export class GifDetailComponent implements OnInit {
  @select() gif$: Observable<IGif>;
  constructor() {}

  ngOnInit() {
  }

}
