import { Component, OnInit, Input ,OnChanges, OnDestroy } from '@angular/core';
import { Post, BlogService } from '../blog.service'
import { Router, ActivatedRoute  } from '@angular/router';
import { PlatformLocation } from '@angular/common' 
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	postid: number;
	post: Post;

	constructor(private route: ActivatedRoute,
  				private router: Router,
  				private blogService: BlogService,
  				private location: PlatformLocation) {
		this.location.onPopState(()=>{
			this.onExit();
		})
	}



	ngOnInit() {
		/*
		this.postid = parseInt(this.route.snapshot.paramMap.get('id'));
		console.log(this.postid)

		this.post=this.blogService.getPost(this.blogService.username,this.postid);
		console.log(this.post)*/



		this.route.paramMap.subscribe(() => this.getPost());
	}

	@HostListener('window:beforeunload')
	onExit() {
		console.log('leaving')
		this.blogService.updatePost(this.blogService.username,this.post);
	}

	getPost() {
		console.log('test')
		if(this.post){
			this.blogService.updatePost(this.blogService.username,this.post);
		}
		let postid = this.route.snapshot.paramMap.get('id')
		this.post = this.blogService.getPost(this.blogService.username,parseInt(postid));
	}

	onSave() {
		this.blogService.updatePost(this.blogService.username,this.post);
		this.post.modified=new Date();
	}

	onDelete(){
		//console.log(this.post)
		this.blogService.deletePost(this.blogService.username,this.post.postid);
		this.router.navigate(['/']);
	}

	onPreview(){
		this.router.navigate(['/preview/'+this.post.postid]);
		this.onExit();
	}



}
