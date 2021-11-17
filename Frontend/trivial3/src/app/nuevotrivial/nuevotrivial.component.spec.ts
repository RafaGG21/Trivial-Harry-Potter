import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevotrivialComponent } from './nuevotrivial.component';

describe('NuevotrivialComponent', () => {
  let component: NuevotrivialComponent;
  let fixture: ComponentFixture<NuevotrivialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevotrivialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevotrivialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
