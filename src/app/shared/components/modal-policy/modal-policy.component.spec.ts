import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPolicyComponent } from './modal-policy.component';

describe('ModalPolicyComponent', () => {
  let component: ModalPolicyComponent;
  let fixture: ComponentFixture<ModalPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
