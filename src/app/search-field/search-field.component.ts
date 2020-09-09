import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { ADD_GIFS } from '../store/actions';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    constructor(
        private serviceSrv: ServiceService,
        private ngRedux: NgRedux<IAppState>) {}

    ngOnInit() {}
    submit(form: NgModel) {
        if (form.valid) {
            this.serviceSrv.search(form.value).subscribe(({data: gifList}) => {
                this.ngRedux.dispatch({type: ADD_GIFS, gifList});
            }, err => {
                console.log(err);
            });
        }
    }
}
