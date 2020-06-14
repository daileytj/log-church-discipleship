import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DrawerNavItem } from '@pxblue/angular-components';
import { DrawerService } from './drawer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'log-church-discipleship';
  drawerOpen: boolean;
  selectedItemId: string;

  bibleStudyGuideLinks: DrawerNavItem[] = [
    {
      title: 'Bible Study Guides',
      items: [
        { title: 'Bible Study 101' },
        { title: 'Bible Study 201' },
        { title: 'Bible Study 301' },
        { title: 'Bible Study 401' }
      ]
    }
  ];

  prayerGuideLinks: DrawerNavItem[] = [
    {
      title: 'Prayer Guides',
      items: [
        { title: 'Prayer 101' },
        { title: 'Prayer 201' },
        { title: 'Prayer 301' },
        { title: 'Prayer 401' }
      ]
    }
  ];

  serviceGuideLinks: DrawerNavItem[] = [
    {
      title: 'Service Guides',
      items: [
        { title: 'Service 101' },
        { title: 'Service 201' },
        { title: 'Service 301' },
        { title: 'Service 401' }
      ]
    }
  ];

  givingGuideLinks: DrawerNavItem[] = [
    {
      title: 'Giving Guides',
      items: [
        { title: 'Giving 101' },
        { title: 'Giving 201' },
        { title: 'Giving 301' },
        { title: 'Giving 401' }
      ]
    }
  ];

  evangelismGuideLinks: DrawerNavItem[] = [
    {
      title: 'Evangelism Guides',
      items: [
        { title: 'Evangelism 101' },
        { title: 'Evangelism 201' },
        { title: 'Evangelism 301' },
        { title: 'Evangelism 401' }
      ]
    }
  ];

  constructor(public router: Router, public drawerService: DrawerService, public changeDetectorService: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.drawerOpen = this.drawerService.getDrawerOpen();
    this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
      this.drawerOpen = res;
      this.changeDetectorService.detectChanges();
    });
  }

  closeDrawer() {
    this.drawerService.setDrawerOpen(false);
  }

  setActive(id: string): void {
    this.selectedItemId = id;
}

  navigate(id: string) {
    switch (id) {
      case 'Assessment':
        this.router.navigate(['assessment']);
        break;
      case 'Assessment Results':
        this.router.navigate(['completed-assessment']);
    }
  } 
}
