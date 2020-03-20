import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Error403Component } from './error403.component';

describe('Error403Component', () => {
  let component: Error403Component;
  let fixture: ComponentFixture<Error403Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Error403Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});