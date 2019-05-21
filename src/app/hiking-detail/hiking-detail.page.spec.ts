import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingDetailPage } from './hiking-detail.page';

describe('HikingDetailPage', () => {
  let component: HikingDetailPage;
  let fixture: ComponentFixture<HikingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikingDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
