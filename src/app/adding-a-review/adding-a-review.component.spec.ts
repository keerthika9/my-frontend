import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAReviewComponent } from './adding-a-review.component';

describe('AddingAReviewComponent', () => {
  let component: AddingAReviewComponent;
  let fixture: ComponentFixture<AddingAReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingAReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingAReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
