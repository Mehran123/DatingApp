import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/_models/members';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-memeber-details',
  templateUrl: './memeber-details.component.html',
  styleUrls: ['./memeber-details.component.css']
})
export class MemeberDetailsComponent implements OnInit {
  member : Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions=[
      {
        width:'500px',
        height: '500px',
        imagePercent:100,
        thumbnailsColumns:4,
        imageAnimation:NgxGalleryAnimation.Slide,
        preview:false
      }
    ]
  }

  getImages() : NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.member?.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return imageUrls;
  }

  loadMember(){
    var memb = this.memberService.getMember(this.route.snapshot.paramMap.get('username'));
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member=>{
      this.member = member;
      this.galleryImages = this.getImages();
    })
  }
}
