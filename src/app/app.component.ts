import {Component,Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from "./core/models/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    public loginForm: FormGroup;
    @Input()
    public users: Array<UserModel> = [];

    constructor() {
        this.loginForm = new FormGroup({
            'personName': new FormControl('', [Validators.required,
                Validators.maxLength(10),
                Validators.minLength(3),
                Validators.pattern(/^[a-zA-Z]+$/)]),
            'personSurname': new FormControl('', [Validators.required,
                Validators.maxLength(10),
                Validators.minLength(3),
                Validators.pattern(/^[a-zA-Z]+$/)]),
            'personAge': new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern(/(^([1-9]\d?)?$)/)]),
            'personGender': new FormControl('', [Validators.required]),
            'personPassword': new FormControl('', [Validators.required, Validators.minLength(5)]),
            'icon':new FormControl(),
            'personEmail': new FormControl('', [Validators.required,
                Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
        });

        ;
    }

    public submitForm(): void {
        this.users.push(this.loginForm.getRawValue());
        console.log(this.users);
        this.loginForm.reset();
    }
}


