/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TootlipComponent } from './tootlip.component';

describe('TootlipComponent', () => {
  let component: TootlipComponent;
  let fixture: ComponentFixture<TootlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TootlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
