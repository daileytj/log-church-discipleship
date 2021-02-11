import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblePathGuideComponent } from './bible-path-guide.component';

describe('BiblePathGuideComponent', () => {
  let component: BiblePathGuideComponent;
  let fixture: ComponentFixture<BiblePathGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblePathGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblePathGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
