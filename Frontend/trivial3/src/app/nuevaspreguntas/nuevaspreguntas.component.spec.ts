import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaspreguntasComponent } from './nuevaspreguntas.component';

describe('NuevaspreguntasComponent', () => {
  let component: NuevaspreguntasComponent;
  let fixture: ComponentFixture<NuevaspreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaspreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaspreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
