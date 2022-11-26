import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormareselvaComponent } from './formareselva.component';

describe('FormareselvaComponent', () => {
  let component: FormareselvaComponent;
  let fixture: ComponentFixture<FormareselvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormareselvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormareselvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
