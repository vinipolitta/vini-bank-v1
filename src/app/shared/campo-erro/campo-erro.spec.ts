import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoErro } from './campo-erro';

describe('CampoErro', () => {
  let component: CampoErro;
  let fixture: ComponentFixture<CampoErro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoErro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoErro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
