import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCookiesComponent } from './modal-cookies.component';

describe('ModalCookiesComponent', () => {
  let component: ModalCookiesComponent;
  let fixture: ComponentFixture<ModalCookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
