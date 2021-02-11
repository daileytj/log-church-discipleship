import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitingPathGuideComponent } from './inviting-path-guide.component';

describe('InvitingPathGuideComponent', () => {
  let component: InvitingPathGuideComponent;
  let fixture: ComponentFixture<InvitingPathGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitingPathGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitingPathGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
