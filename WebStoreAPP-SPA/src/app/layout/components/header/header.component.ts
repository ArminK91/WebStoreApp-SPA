import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../_models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';

    constructor(private translate: TranslateService, public router: Router) {
     
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        // let userData = JSON.parse(localStorage.getItem('currentUser'));
        // this.userName = userData.firstName.toString() + " " + userData.lastName.toString();
        // console.log("Uradio: ", userData);
        // console.log("Uradio: ", this.userName);
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

     userName: any = "";

    ngOnInit() {

        this.getUserData();
    }

    getUserData(): void{
        let userData = JSON.parse(localStorage.getItem('currentUser'));
        this.userName = userData.firstName.toString() + " " + userData.lastName.toString();
        console.log("Uradio: ", userData);
        console.log("Uradio: ", this.userName);

    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
