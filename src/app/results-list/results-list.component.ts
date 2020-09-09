import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IGif } from '../models/gif.model';
import { IAppState } from '../store/store';
import { VIEW_GIF } from '../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @select() gifList$: Observable<IGif[]>;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router) {}
  ngOnInit() {}

  viewGif(gif: IGif) {
    this.ngRedux.dispatch({type: VIEW_GIF, gif});
    this.router.navigate(['/gif-detail/' + gif.id]);
  }

}
