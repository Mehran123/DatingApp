import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Member } from "../_models/members";
import { MemberService } from '../_services/member.service';
import { MessageService } from '../_services/message.service';

@Injectable({
    providedIn: 'root'
})

export class MemeberDetailedResolver implements Resolve<Member> {
    constructor(private memeberService: MemberService){

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Member> {
        return this.memeberService.getMember(route.paramMap.get('username'));
    }

}

