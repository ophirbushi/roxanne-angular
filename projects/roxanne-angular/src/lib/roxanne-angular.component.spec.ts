import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoxanneAngularComponent } from './roxanne-angular.component';

describe('RoxanneAngularComponent', () => {
  let component: RoxanneAngularComponent;
  let fixture: ComponentFixture<RoxanneAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoxanneAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoxanneAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
