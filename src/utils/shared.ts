import { Assessment } from "../app/assessment/assessment.component";

export const isAssessmentComplete = (): boolean => {
  const assessment: Assessment = {
    bibleStudyLevel: null,
    prayerLevel: null,
    serviceLevel: null,
    givingLevel: null,
    invitingLevel: null
  }

  if (localStorage.getItem('bibleStudyLevel')) {
    assessment.bibleStudyLevel = +localStorage.getItem('bibleStudyLevel');
  };

  if (localStorage.getItem('prayerLevel')) {
    assessment.prayerLevel = +localStorage.getItem('prayerLevel');
  };

  if (localStorage.getItem('serviceLevel')) {
    assessment.serviceLevel = +localStorage.getItem('serviceLevel');
  };

  if (localStorage.getItem('givingLevel')) {
    assessment.givingLevel = +localStorage.getItem('givingLevel');
  };

  if (localStorage.getItem('invitingLevel')) {
    assessment.invitingLevel = +localStorage.getItem('invitingLevel');
  };

  if(!assessment.bibleStudyLevel || !assessment.prayerLevel || !assessment.serviceLevel || !assessment.givingLevel || !assessment.invitingLevel) {
    return false;
  } else {
    return true;
  }
}