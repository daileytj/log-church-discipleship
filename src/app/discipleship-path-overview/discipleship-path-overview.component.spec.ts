import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipleshipPathOverviewComponent } from './discipleship-path-overview.component';

describe('DiscipleshipPathOverviewComponent', () => {
  let component: DiscipleshipPathOverviewComponent;
  let fixture: ComponentFixture<DiscipleshipPathOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscipleshipPathOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscipleshipPathOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
