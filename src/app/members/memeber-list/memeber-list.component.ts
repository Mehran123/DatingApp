import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_models/members';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-memeber-list',
  templateUrl: './memeber-list.component.html',
  styleUrls: ['./memeber-list.component.css']
})
export class MemeberListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }
}
