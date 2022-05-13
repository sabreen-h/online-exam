import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfRolesComponent } from './prof-roles.component';

describe('ProfRolesComponent', () => {
  let component: ProfRolesComponent;
  let fixture: ComponentFixture<ProfRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
