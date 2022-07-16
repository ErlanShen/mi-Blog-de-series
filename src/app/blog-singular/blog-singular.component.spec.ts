import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingularComponent } from './blog-singular.component';

describe('BlogSingularComponent', () => {
  let component: BlogSingularComponent;
  let fixture: ComponentFixture<BlogSingularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
