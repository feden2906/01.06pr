import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.router.getCurrentNavigation()?.extras.state as Post;
    })
  }
}
