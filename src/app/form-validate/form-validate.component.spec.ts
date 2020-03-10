import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormValidateComponent } from './form-validate.component';

describe('FormValidateComponent', () => {
  let component: FormValidateComponent;
  let fixture: ComponentFixture<FormValidateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
