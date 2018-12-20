import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	posts: Post[];
	selected: Post;

	constructor(private route: ActivatedRoute,private router: Router,private blogService: BlogService) { }

	ngOnInit() {
		this.posts = this.blogService.getPosts(this.blogService.username);
		//this.route.paramMap.subscribe(() => this.autoSave());
		//console.log(this.posts);
	}
	/*
	autoSave(){
		console.log('@@@@@@@@@@@')
		if(this.blogService.currentPost){
			this.blogService.updatePost(this.blogService.username,this.blogService.currentPost);
		}
	}*/

	newPost():void {
		this.navigateAway(null);
		let newPost= this.blogService.newPost(this.blogService.username);
		this.posts = this.blogService.getPosts(this.blogService.username);
		this.router.navigate(['/edit/'+newPost.postid.toString()])
	}

	navigateAway(postid: number) {
		if(this.blogService.currentPost){
			this.blogService.updatePost(this.blogService.username,this.blogService.currentPost);
		}
		//console.log(this.blogService.username);
		//console.log(postid);
		this.selected = this.blogService.getPost(this.blogService.username, postid);
		//console.log(this.selected);
	}
}
