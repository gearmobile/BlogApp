import {Component, OnInit, inject} from "@angular/core";
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "BlogApp";

  authService = inject(AuthService);

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
