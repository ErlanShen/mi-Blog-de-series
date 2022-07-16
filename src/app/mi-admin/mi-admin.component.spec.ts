import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAdminComponent } from './mi-admin.component';

describe('MiAdminComponent', () => {
  let component: MiAdminComponent;
  let fixture: ComponentFixture<MiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
