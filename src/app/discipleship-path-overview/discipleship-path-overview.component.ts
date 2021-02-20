import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isAssessmentComplete } from '../../utils/shared';

@Component({
  selector: 'app-discipleship-path-overview',
  templateUrl: './discipleship-path-overview.component.html',
  styleUrls: ['./discipleship-path-overview.component.scss']
})
export class DiscipleshipPathOverviewComponent implements OnInit {
  isAssessmentComplete: boolean;
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.isAssessmentComplete = isAssessmentComplete();
  }

  navigateToAssessment() {
    this.router.navigate(["assessment"]);
  }
}
