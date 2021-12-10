import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesTotalesComponent } from './likes-totales.component';

describe('LikesTotalesComponent', () => {
  let component: LikesTotalesComponent;
  let fixture: ComponentFixture<LikesTotalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesTotalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
