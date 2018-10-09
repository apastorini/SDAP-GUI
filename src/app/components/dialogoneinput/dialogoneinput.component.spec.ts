import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoneinputComponent } from './dialogoneinput.component';

describe('DialogoneinputComponent', () => {
  let component: DialogoneinputComponent;
  let fixture: ComponentFixture<DialogoneinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoneinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoneinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
