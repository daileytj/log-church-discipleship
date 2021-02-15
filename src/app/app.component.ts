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
          value.url === '/' ? this.setActive('overview') : this.setActive(value.url.replace("/", ""));
      }
    });
  }

  closeDrawer() {
    this.drawerService.setDrawerOpen(false);
  }

  setActive(id: string): void {
    id === 'completed-assessment' ? this.setActive('assessment') : this.selectedItemId = id;
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
