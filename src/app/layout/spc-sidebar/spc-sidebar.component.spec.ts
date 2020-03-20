import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcSidebarComponent } from './spc-sidebar.component';

describe('SpcSidebarComponent', () => {
  let component: SpcSidebarComponent;
  let fixture: ComponentFixture<SpcSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpcSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
