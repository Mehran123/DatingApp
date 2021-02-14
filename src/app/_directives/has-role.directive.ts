import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasRole]', //*appHasRole
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  user: User;
  constructor(
    private viewContainterRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accoutService: AccountService
  ) {
    this.accoutService.currentUser$.pipe(take(1)).subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    if(!this.user?.roles || this.user == null){
      this.viewContainterRef.clear();
      return;
    }

    if(this.user?.roles.some(r=>this.appHasRole.includes(r))){
      this.viewContainterRef.createEmbeddedView(this.templateRef);
    } else{
      
    }
  }
}
