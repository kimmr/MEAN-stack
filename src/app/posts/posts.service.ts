import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // allows to pass data around

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // Arrays are reference type-> copying the address pointing at the object, not the object itself
    // javascript/typescript feature: spread operator ...
    // this creates new array with old objects-> creating a new exact copy of the objects
    return [...this.posts];
  }

  // To retrieve updated posts since posts are private
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title,
                        content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
