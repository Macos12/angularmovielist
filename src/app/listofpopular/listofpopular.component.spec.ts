import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpopularComponent } from './listofpopular.component';

describe('ListofpopularComponent', () => {
  let component: ListofpopularComponent;
  let fixture: ComponentFixture<ListofpopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofpopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
