import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarTransaccionComponent } from './generar-transaccion.component';

describe('GenerarTransaccionComponent', () => {
  let component: GenerarTransaccionComponent;
  let fixture: ComponentFixture<GenerarTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
