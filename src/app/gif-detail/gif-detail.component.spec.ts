import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifDetailComponent } from './gif-detail.component';

describe('GifDetailComponent', () => {
  let component: GifDetailComponent;
  let fixture: ComponentFixture<GifDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifDetailComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
