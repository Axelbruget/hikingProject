import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingInProgressPage } from './hiking-in-progress.page';

describe('HikingInProgressPage', () => {
  let component: HikingInProgressPage;
  let fixture: ComponentFixture<HikingInProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikingInProgressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingInProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
