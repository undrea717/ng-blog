import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
  }

}
