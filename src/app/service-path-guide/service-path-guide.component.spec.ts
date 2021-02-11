import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePathGuideComponent } from './service-path-guide.component';

describe('ServicePathGuideComponent', () => {
  let component: ServicePathGuideComponent;
  let fixture: ComponentFixture<ServicePathGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePathGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePathGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
