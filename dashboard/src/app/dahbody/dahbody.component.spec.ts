import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahbodyComponent } from './dahbody.component';

describe('DahbodyComponent', () => {
  let component: DahbodyComponent;
  let fixture: ComponentFixture<DahbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DahbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DahbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
