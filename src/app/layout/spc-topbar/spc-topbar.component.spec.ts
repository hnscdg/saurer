import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcTopbarComponent } from './spc-topbar.component';

describe('SpcTopbarComponent', () => {
  let component: SpcTopbarComponent;
  let fixture: ComponentFixture<SpcTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpcTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
