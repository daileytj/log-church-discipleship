import { Component, OnInit } from '@angular/core';
import { Assessment } from '../assessment/assessment.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-assessment',
  templateUrl: './completed-assessment.component.html',
  styleUrls: ['./completed-assessment.component.scss']
})
export class CompletedAssessmentComponent implements OnInit {
  assessment: Assessment = {
    bibleStudyLevel: null,
    prayerLevel: null,
    serviceLevel: null,
    givingLevel: null,
    evangelismLevel: null
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('bibleStudyLevel')) {
      this.assessment.bibleStudyLevel = +localStorage.getItem('bibleStudyLevel');
    };

    if (localStorage.getItem('prayerLevel')) {
      this.assessment.prayerLevel = +localStorage.getItem('prayerLevel');
    };

    if (localStorage.getItem('serviceLevel')) {
      this.assessment.serviceLevel = +localStorage.getItem('serviceLevel');
    };

    if (localStorage.getItem('givingLevel')) {
      this.assessment.givingLevel = +localStorage.getItem('givingLevel');
    };

    if (localStorage.getItem('evangelismLevel')) {
      this.assessment.evangelismLevel = +localStorage.getItem('evangelismLevel');
    };
  }

  retakeAssessment() {
    localStorage.clear();
    this.router.navigate(['/assessment']);
  }

}
