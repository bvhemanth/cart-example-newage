import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInteractionComponent } from './table-interaction.component';

describe('TableInteractionComponent', () => {
  let component: TableInteractionComponent;
  let fixture: ComponentFixture<TableInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
