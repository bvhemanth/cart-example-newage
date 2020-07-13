import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccartComponent } from './dynamiccart.component';

describe('DynamiccartComponent', () => {
  let component: DynamiccartComponent;
  let fixture: ComponentFixture<DynamiccartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
