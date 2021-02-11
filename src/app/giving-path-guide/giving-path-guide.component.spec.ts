import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingPathGuideComponent } from './giving-path-guide.component';

describe('GivingPathGuideComponent', () => {
  let component: GivingPathGuideComponent;
  let fixture: ComponentFixture<GivingPathGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingPathGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingPathGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
