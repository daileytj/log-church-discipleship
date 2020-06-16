import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Assessment } from '../assessment/assessment.component';
import { Router } from '@angular/router';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-completed-assessment',
  templateUrl: './completed-assessment.component.html',
  styleUrls: ['./completed-assessment.component.scss']
})
export class CompletedAssessmentComponent implements OnInit {
  drawerOpen: boolean;
  isAssessmentComplete: boolean;
  assessment: Assessment = {
    bibleStudyLevel: null,
    prayerLevel: null,
    serviceLevel: null,
    givingLevel: null,
    evangelismLevel: null
  }

  constructor(public router: Router, public drawerService: DrawerService, public changeDetectorService: ChangeDetectorRef) { }

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

    if(!this.assessment.bibleStudyLevel || !this.assessment.prayerLevel || !this.assessment.serviceLevel || !this.assessment.givingLevel || !this.assessment.evangelismLevel) {
      this.isAssessmentComplete = false;
    } else {
      this.isAssessmentComplete = true;
    }

    this.drawerOpen = this.drawerService.getDrawerOpen();
    this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
      this.drawerOpen = res;
      this.changeDetectorService.detectChanges();
    });
  }

  openDrawer() {
    this.drawerService.setDrawerOpen(true);
  }

  retakeAssessment() {
    localStorage.clear();
    this.router.navigate(['/assessment']);
  }

}
