import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})

export class PostListComponent implements OnInit, OnDestroy{

  posts: Post[] = [];
  /*
  ! : Properties are defined by prefixing instance variables with the @Prop() decorator from the vue-property-decorator package.
  Because the --strictPropertyInitialization option is on, we need to tell TypeScript that Vue will initialize our properties by appending a ! to them.
  This tells TypeScript "hey, relax, someone else is going to assign this property a value."
  This is new in typescript and can happen a lot
  */
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}

  // Basic initiallization
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  // Remove subscription and prevent memory leak
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
