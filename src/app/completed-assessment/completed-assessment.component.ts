import { Component, OnInit } from "@angular/core";
import { Assessment } from "../assessment/assessment.component";
import { Router } from "@angular/router";
import { isAssessmentComplete } from "../../utils/shared";
import * as Colors from "@pxblue/colors";

@Component({
  selector: "app-completed-assessment",
  templateUrl: "./completed-assessment.component.html",
  styleUrls: ["./completed-assessment.component.scss"],
})
export class CompletedAssessmentComponent implements OnInit {
  drawerOpen: boolean;
  isAssessmentComplete: boolean;
  assessment: Assessment = {
    bibleStudyLevel: null,
    prayerLevel: null,
    serviceLevel: null,
    givingLevel: null,
    invitingLevel: null,
  };
  colors = Colors;

  constructor(public router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("bibleStudyLevel")) {
      this.assessment.bibleStudyLevel = +localStorage.getItem(
        "bibleStudyLevel"
      );
    }

    if (localStorage.getItem("prayerLevel")) {
      this.assessment.prayerLevel = +localStorage.getItem("prayerLevel");
    }

    if (localStorage.getItem("serviceLevel")) {
      this.assessment.serviceLevel = +localStorage.getItem("serviceLevel");
    }

    if (localStorage.getItem("givingLevel")) {
      this.assessment.givingLevel = +localStorage.getItem("givingLevel");
    }

    if (localStorage.getItem("invitingLevel")) {
      this.assessment.invitingLevel = +localStorage.getItem("invitingLevel");
    }

    this.isAssessmentComplete = isAssessmentComplete();
  }

  navigate(id: string) {
    switch (id) {
      case "overview":
        this.router.navigate(["overview"]);
        break;
      case "bible-path-guide":
        this.router.navigate(["bible-path-guide"]);
        break;
      case "prayer-path-guide":
        this.router.navigate(["prayer-path-guide"]);
        break;
      case "service-path-guide":
        this.router.navigate(["service-path-guide"]);
        break;
      case "giving-path-guide":
        this.router.navigate(["giving-path-guide"]);
        break;
      case "inviting-path-guide":
        this.router.navigate(["inviting-path-guide"]);
      default:
    }
  }

  retakeAssessment() {
    localStorage.clear();
    this.router.navigate(["/assessment"]);
  }
}
