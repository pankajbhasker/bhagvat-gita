import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseListingComponent } from './verselisting.component';

describe('VerseListingComponent', () => {
  let component: VerseListingComponent;
  let fixture: ComponentFixture<VerseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
