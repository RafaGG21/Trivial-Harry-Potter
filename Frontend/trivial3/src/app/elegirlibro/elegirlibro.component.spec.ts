import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirlibroComponent } from './elegirlibro.component';

describe('ElegirlibroComponent', () => {
  let component: ElegirlibroComponent;
  let fixture: ComponentFixture<ElegirlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirlibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
