import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/members';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { UserParams } from 'src/app/_models/user-params';
import { AccountService } from 'src/app/_services/account.service';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-memeber-list',
  templateUrl: './memeber-list.component.html',
  styleUrls: ['./memeber-list.component.css']
})
export class MemeberListComponent implements OnInit {
  // members$: Observable<Member[]>;
  members: Member[];
  pagination: Pagination;
  userParams: UserParams;
  user: User;
  // selectedGender: string;

  // genderList =[{value:'all', display: 'Any'},{value:'male', display: 'Males'}, {value:'female', display: ['Females']}];
  genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];

  constructor(private fb:FormBuilder, private memberService: MemberService) { 
    this.userParams = this.memberService.getUserParams();
    // this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
    //   this.user = user;   
    //   //  this.user.selectedGender =  user.gender == 'Famel' ? 'Males' : 'Females';
    //   // this.user.selectedGender = this.selectedGender;
    //   this.userParams = new UserParams(user);
    // })
  }

  ngOnInit(): void {
    
    this.loadMembers();
    // this.members$ = this.memberService.getMembers();
  }

  loadMembers(){
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMembers(this.userParams).subscribe(response =>{
      this.members = response.result;
      this.pagination = response.pagination;
    });
  }

  pageChanged(event: any){
    this.userParams.pageNumber= event.page;
    this.memberService.setUserParams(this.userParams);
    this.loadMembers();
  }

  restFilters(){
    // this.userParams = new UserParams(this.user)
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }
}
