import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerPathGuideComponent } from './prayer-path-guide.component';

describe('PrayerPathGuideComponent', () => {
  let component: PrayerPathGuideComponent;
  let fixture: ComponentFixture<PrayerPathGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerPathGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerPathGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
