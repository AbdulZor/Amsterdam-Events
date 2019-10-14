import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SessionService} from "../../../services/session/session.service";

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css']
})
export class SignOnComponent implements OnInit {
  email: string;
  password: string;

  @ViewChild("formElement", {static: false}) editForm: NgForm;

  constructor(private SessionService: SessionService) {}

  ngOnInit() {
  }

  onLogin() {
    this.SessionService.signOn(this.email, this.password);
  }

}
