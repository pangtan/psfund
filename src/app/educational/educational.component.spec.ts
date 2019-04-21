import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalComponent } from './educational.component';
import {describe, expect} from "@angular/core/testing/src/testing_internal";

describe('EducationalComponent', () => {
  let component: EducationalComponent;
  let fixture: ComponentFixture<EducationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
