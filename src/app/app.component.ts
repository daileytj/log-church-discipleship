import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { DrawerNavItem } from "@pxblue/angular-components";
import { DrawerService } from "./drawer.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "log-church-discipleship";
  drawerOpen: boolean;
  selectedItemId: string;
  pageTitle: string;

  constructor(
    public router: Router,
    public drawerService: DrawerService,
    public changeDetectorService: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.drawerOpen = this.drawerService.getDrawerOpen();
    this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
      this.drawerOpen = res;
      this.changeDetectorService.detectChanges();
    });

    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
          if(value.url === '/'){
            this.setActive('overview');
            this.pageTitle = 'Discipleship Path Overview'
          } else
            {
              this.setActive(value.url.replace("/", ""));
              this.pageTitle = this.getPageTitle(this.selectedItemId);
            }
      }
    });
  }

  openDrawer() {
    this.drawerService.setDrawerOpen(true);
  }

  closeDrawer() {
    this.drawerService.setDrawerOpen(false);
  }

  setActive(id: string): void {
    id === 'completed-assessment' ? this.setActive('assessment') : this.selectedItemId = id;
  }

  getPageTitle(id: string): string {
    switch (id) {
      case "assessment":
        return "Discipleship Path"
      case "completed-assessment":
        return "Assessment Results"
      case "overview":
        return "Discipleship Path Overview"
      case "bible-path-guide":
        return "Bible Path Guide"
      case "prayer-path-guide":
        return "Prayer Path Guide"
      case "service-path-guide":
        return "Service Path Guide"
      case "giving-path-guide":
        return "Giving Path Guide"
      case "inviting-path-guide":
        return "Inviting Path Guide"
    }
  }

  navigate(id: string) {
    switch (id) {
      case "assessment":
        this.router.navigate(["assessment"]);
        break;
      case "completed-assessment":
        this.router.navigate(["completed-assessment"]);
        break;
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
}
