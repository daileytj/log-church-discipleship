import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRippleModule } from '@angular/material/core';
import { SpacerModule, DrawerModule, InfoListItemModule } from '@pxblue/angular-components';
import { CompletedAssessmentComponent } from './completed-assessment/completed-assessment.component'; 
import { MatIconModule } from '@angular/material/icon';
import { BiblePathGuideComponent } from './bible-path-guide/bible-path-guide.component';
import { PrayerPathGuideComponent } from './prayer-path-guide/prayer-path-guide.component';
import { ServicePathGuideComponent } from './service-path-guide/service-path-guide.component';
import { GivingPathGuideComponent } from './giving-path-guide/giving-path-guide.component';
import { InvitingPathGuideComponent } from './inviting-path-guide/inviting-path-guide.component';
import { DiscipleshipPathOverviewComponent } from './discipleship-path-overview/discipleship-path-overview.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentComponent,
    CompletedAssessmentComponent,
    BiblePathGuideComponent,
    PrayerPathGuideComponent,
    ServicePathGuideComponent,
    GivingPathGuideComponent,
    InvitingPathGuideComponent,
    DiscipleshipPathOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatStepperModule,
    MatRippleModule,
    SpacerModule,
    DrawerModule,
    MatIconModule,
    MatDividerModule,
    InfoListItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
