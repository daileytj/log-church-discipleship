import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from '../drawer.service';

export interface Assessment {
  bibleStudyLevel: number;
  prayerLevel: number;
  serviceLevel: number;
  givingLevel: number;
  invitingLevel: number;
}

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  drawerOpen: boolean;
  isAssessmentStarted = false;
  selectedBibleAnswer: string;
  selectedPrayerAnswer: string;
  selectedServiceAnswer: string;
  selectedGivingAnswer: string;
  selectedInvitingAnswer: string;
  assessment: Assessment = {
    bibleStudyLevel: null,
    prayerLevel: null,
    serviceLevel: null,
    givingLevel: null,
    invitingLevel: null
  }

  constructor(public router: Router, public drawerService: DrawerService, public changeDetectorService: ChangeDetectorRef) { }

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

    if (localStorage.getItem('invitingLevel')) {
      this.selectedInvitingAnswer = localStorage.getItem('invitingLevel');
      this.assessment.invitingLevel = +this.selectInvitingAnswer;
    };

    if (this.selectedBibleAnswer && this.selectedPrayerAnswer && this.selectedServiceAnswer && this.selectedGivingAnswer && this.selectedInvitingAnswer) {
      this.completeAssessment();
    }

    this.drawerOpen = this.drawerService.getDrawerOpen();
    this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
      this.drawerOpen = res;
      this.changeDetectorService.detectChanges();
    });
  }

  startAssessment() {
    this.isAssessmentStarted = true;
  }

  selectBibleAnswer(id: string) {
    this.selectedBibleAnswer = id;
    this.assessment = { ...this.assessment, bibleStudyLevel: +id }
    localStorage.setItem('bibleStudyLevel', this.assessment.bibleStudyLevel.toString())
  }

  selectPrayerAnswer(id: string) {
    this.selectedPrayerAnswer = id;
    this.assessment = { ...this.assessment, prayerLevel: +id }
    localStorage.setItem('prayerLevel', this.assessment.prayerLevel.toString())
  }

  selectServiceAnswer(id: string) {
    this.selectedServiceAnswer = id;
    this.assessment = { ...this.assessment, serviceLevel: +id }
    localStorage.setItem('serviceLevel', this.assessment.serviceLevel.toString())
  }

  selectGivingAnswer(id: string) {
    this.selectedGivingAnswer = id;
    this.assessment = { ...this.assessment, givingLevel: +id }
    localStorage.setItem('givingLevel', this.assessment.givingLevel.toString())
  }

  selectInvitingAnswer(id: string) {
    this.selectedInvitingAnswer = id;
    this.assessment = { ...this.assessment, invitingLevel: +id }
    localStorage.setItem('invitingLevel', this.assessment.invitingLevel.toString())
  }

  completeAssessment() {
    this.router.navigate(['/completed-assessment']);
  }

  openDrawer() {
    this.drawerService.setDrawerOpen(true);
  }

}
