import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import { IIdentityData } from 'src/domains';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    constructor(private toastrService: ToastrService) { }

    provjeriPodatak(key: string, alijas: string) {
        let postoji = false;
        for (let i = 0; i < localStorage.length; i++) {

            const k = localStorage.key(i);
            if (k.includes(`${alijas}-${key}/`) && k.startsWith(alijas)) {
                if (new Date().getTime() - parseInt(localStorage.key(i).split('/')[1], 10) < 3600000) {
                    postoji = true;
                } else {
                    localStorage.removeItem(k);
                    postoji = false;
                }
            }
        }
        return postoji;
    }

    spasiPodatak(key: String, alijas: string, podatak: string) {
        try {
            localStorage.setItem(`${alijas}-${key}/${new Date().getTime()}`, podatak);
        } catch (e) {
            if (e == DOMException.QUOTA_EXCEEDED_ERR) {
                this.toastrService.warning(`Local storage je pun, ${key} nije spašen!`);
              }
        }
    }

    dajPodatak(key: string, alijas: string) {
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k.includes(`${alijas}-${key}/`) && k.startsWith(alijas)) {
                return localStorage.getItem(k);
            }
        }

    }

    // dajProfil() {
    //     return JSON.parse(localStorage.getItem("oidc.user:https://identity.bbi.com.ba/:apsRetailImpl")) as IIdentityData;
    // }
}
