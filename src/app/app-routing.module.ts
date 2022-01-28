import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssessmentComponent } from "./assessment/assessment.component";
import { BiblePathGuideComponent } from "./bible-path-guide/bible-path-guide.component";
import { CompletedAssessmentComponent } from "./completed-assessment/completed-assessment.component";
import { DiscipleshipPathOverviewComponent } from "./discipleship-path-overview/discipleship-path-overview.component";
import { FAQComponent } from "./faq/faq.component";
import { GivingPathGuideComponent } from "./giving-path-guide/giving-path-guide.component";
import { InvitingPathGuideComponent } from "./inviting-path-guide/inviting-path-guide.component";
import { PrayerPathGuideComponent } from "./prayer-path-guide/prayer-path-guide.component";
import { ServicePathGuideComponent } from "./service-path-guide/service-path-guide.component";

const routes: Routes = [
  { path: "overview", component: DiscipleshipPathOverviewComponent },
  { path: "assessment", component: AssessmentComponent },
  { path: "completed-assessment", component: CompletedAssessmentComponent },
  { path: "faq", component: FAQComponent },
  { path: "bible-path-guide", component: BiblePathGuideComponent },
  { path: "prayer-path-guide", component: PrayerPathGuideComponent },
  { path: "service-path-guide", component: ServicePathGuideComponent },
  { path: "giving-path-guide", component: GivingPathGuideComponent },
  { path: "inviting-path-guide", component: InvitingPathGuideComponent },
  { path: "", component: DiscipleshipPathOverviewComponent },
  { path: "**", component: DiscipleshipPathOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
