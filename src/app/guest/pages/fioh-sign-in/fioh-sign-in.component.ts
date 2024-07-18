import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { CusCheckBoxComponent } from '../../../shared/components/cus-check-box/cus-check-box.component';
import { CommonModule } from '@angular/common';
import { FbgComponent } from '../../../shared/components/fbg/fbg.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestService } from '../../../services.service';

@Component({
  selector: 'app-fioh-sign-in',
  standalone: true,
  templateUrl: './fioh-sign-in.component.html',
  styleUrl: './fioh-sign-in.component.scss',
  imports: [
    AuthLayoutComponent,
    CusCheckBoxComponent,
    CommonModule,
    FbgComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class FiohSignInComponent implements OnInit {
  signUpForm: FormGroup;
  logs = [];
  submitted: boolean = false;
  error: string;
  constructor(private route: Router, private request: RequestService) {}

  // This is a template driven approach
  // onSubmit(form: NgForm) {
  //   const value = form.value;
  //   const l = { email: value.email, password: value.pwd };
  //   this.logs.push(l);
  //   console.log(this.logs);
  //   form.reset();
  // }

  fiohBtns = [
    { imageSrc: 'assets/images/google.png', text: 'Continue with Facbeook' },
    { imageSrc: 'assets/images/facebook.svg', text: 'Continue with Google' },
  ];

  signFbg(index: number) {
    index == 0 ? this.route.navigateByUrl('') : this.route.navigateByUrl('');
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pwd: new FormControl(null, Validators.required),
    });
    this.error = 'Email or password incorrect';
  }
  // reactive form approach
  onSubmit() {
    if (this.signUpForm.invalid) return;
    this.submitted = true;
    const body = {
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('pwd').value,
    };
    this.request
      .onLogin(body)
      .subscribe()
      .add(() => {
        this.signUpForm.reset();
        this.submitted = false;
      });
  }
}
