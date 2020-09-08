import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    constructor(private serviceSrv: ServiceService) {}

    ngOnInit() {}
    submit(form: NgModel) {
        if (form.valid) {
            console.log(form.value);
            this.serviceSrv.search(form.value).subscribe(res => {
                console.log(res);
            }, err => {
                console.log(err);
            });
        }
    }
}
