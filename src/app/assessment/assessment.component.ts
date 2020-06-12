import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Assessment {
  bibleStudyLevel: number;
  prayerLevel: number;
  serviceLevel: number;
  givingLevel: number;
  evangelismLevel: number;
}

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  isAssessmentStarted = false;
  selectedBibleAnswer: string;
  selectedPrayerAnswer: string;
  selectedServiceAnswer: string;
  selectedGivingAnswer: string;
  selectedEvangelismAnswer: string;
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
      this.selectedBibleAnswer = localStorage.getItem('bibleStudyLevel');
      this.assessment.bibleStudyLevel = +this.selectBibleAnswer;
    };

    if (localStorage.getItem('prayerLevel')) {
      this.selectedPrayerAnswer = localStorage.getItem('prayerLevel');
      this.assessment.prayerLevel = +this.selectPrayerAnswer;
    };

    if (localStorage.getItem('serviceLevel')) {
      this.selectedServiceAnswer = localStorage.getItem('serviceLevel');
      this.assessment.serviceLevel = +this.selectedServiceAnswer;
    };

    if (localStorage.getItem('givingLevel')) {
      this.selectedGivingAnswer = localStorage.getItem('givingLevel');
      this.assessment.givingLevel = +this.selectGivingAnswer;
    };

    if (localStorage.getItem('evangelismLevel')) {
      this.selectedEvangelismAnswer = localStorage.getItem('evangelismLevel');
      this.assessment.evangelismLevel = +this.selectEvangelismAnswer;
    };

    if(this.selectedBibleAnswer && this.selectedPrayerAnswer && this.selectedServiceAnswer && this.selectedGivingAnswer && this.selectedEvangelismAnswer) {
      this.completeAssessment();
    }
  }

  startAssessment() {
    this.isAssessmentStarted = true;
  }

  selectBibleAnswer(id: string) {
    this.selectedBibleAnswer = id;
    this.assessment = {...this.assessment, bibleStudyLevel: +id}
    localStorage.setItem('bibleStudyLevel', this.assessment.bibleStudyLevel.toString())
  }

  selectPrayerAnswer(id: string) {
    this.selectedPrayerAnswer = id;
    this.assessment = {...this.assessment, prayerLevel: +id}
    localStorage.setItem('prayerLevel', this.assessment.prayerLevel.toString())
  }

  selectServiceAnswer(id: string) {
    this.selectedServiceAnswer = id;
    this.assessment = {...this.assessment, serviceLevel: +id}
    localStorage.setItem('serviceLevel', this.assessment.serviceLevel.toString())
  }

  selectGivingAnswer(id: string) {
    this.selectedGivingAnswer = id;
    this.assessment = {...this.assessment, givingLevel: +id}
    localStorage.setItem('givingLevel', this.assessment.givingLevel.toString())
  }

  selectEvangelismAnswer(id: string) {
    this.selectedEvangelismAnswer = id;
    this.assessment = {...this.assessment, evangelismLevel: +id}
    localStorage.setItem('evangelismLevel', this.assessment.evangelismLevel.toString())
  }

  completeAssessment() {
    this.router.navigate(['/completed-assessment']);
  }

}
