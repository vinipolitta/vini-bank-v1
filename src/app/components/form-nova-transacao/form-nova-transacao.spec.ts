import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovaTransacao } from './form-nova-transacao';

describe('FormNovaTransacao', () => {
  let component: FormNovaTransacao;
  let fixture: ComponentFixture<FormNovaTransacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNovaTransacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNovaTransacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
