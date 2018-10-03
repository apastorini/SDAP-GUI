import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmasterValidationComponent } from './webmaster-validation.component';

describe('WebmasterValidationComponent', () => {
  let component: WebmasterValidationComponent;
  let fixture: ComponentFixture<WebmasterValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebmasterValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmasterValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
