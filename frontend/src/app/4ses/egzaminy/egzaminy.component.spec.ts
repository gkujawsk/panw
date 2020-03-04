import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgzaminyComponent } from './egzaminy.component';

describe('EgzaminyComponent', () => {
  let component: EgzaminyComponent;
  let fixture: ComponentFixture<EgzaminyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgzaminyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgzaminyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
