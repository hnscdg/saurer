import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcFooterComponent } from './spc-footer.component';

describe('SpcFooterComponent', () => {
  let component: SpcFooterComponent;
  let fixture: ComponentFixture<SpcFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpcFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
