import { Injectable } from '@angular/core';
import { Router  } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

//Service used by list and edit components to interact with back-end/posts database
export class BlogService {
	currentPost: Post;
	private posts: Post[] = [];
	private nextPostID: number;
	username: string;

	constructor(private router: Router) {
		this.nextPostID=0;
		if(document.cookie){
			this.username = this.parseJWT(document.cookie)
			console.log(this.username);
			this.fetchPosts(this.username);
		}
	}

	//Populates array in this class that will be used locally by edit and list component
	fetchPosts(username: string): void{
		let url = 'http://localhost:3000/api/' + username;
		/*
		//Asynchronous way (not working completely)
	  	fetch(url,{
	  		method: "GET"
	  	})
	  	.then( response => {
	  		return response.json();
		  	})
	  		.then( data => {
			  	for(let i=0;i<data.length;i++){
			  		let currentPost = data[i];
			  		this.nextPostID = Math.max(this.nextPostID,data[i].postid);
			  		this.posts.push(data[i]);
			  	}
			  	this.nextPostID+=1;
			  	return
		  	})
		  	*/

		//Synchronous way (working)
		var request = new XMLHttpRequest();
		request.open('GET',url,false)
		request.send(null)

	  	let data = request.responseText
	  	this.posts = JSON.parse(data)
	  	for(let i=0;i<this.posts.length;i++){
	  		this.posts[i].created=new Date(this.posts[i].created)
	  		this.posts[i].modified=new Date(this.posts[i].modified)
	  	}
	  	if(this.posts.length!=0)
	  		this.nextPostID = this.posts[this.posts.length-1].postid+1
	  	else
	  		this.nextPostID=1
	  	return
	}

	getPosts(username: string) : Post[] {
		return this.posts
	}

	getPost(username: string, id: number): Post {
		for(let i=0;i<this.posts.length;i++){
			if(this.posts[i].postid==id){
				this.currentPost=this.posts[i];
				return this.posts[i];
			}
		}
		return null

	}
	
	//Makes request to back-end to create a new post
	newPost(username: string): Post {
		let newPost : Post = {
			postid: this.nextPostID,
			title: '',
			body: '',
			created : new Date(),
			modified: new Date()
		}
		
		let body = {
			"body": "",
			"title": ""
		}
		let newLength=this.posts.push(newPost);
		let url = 'http://localhost:3000/api/' + username + '/' + String(this.nextPostID);
		fetch(url, {
			method: "POST",
			headers: {
	      		'Accept': 'application/json',
	      		'Content-Type': 'application/json'
	    	},
	    	body: JSON.stringify(body)
		}).then(response => {
			if (response.status==201){
				this.nextPostID+=1;
			}
			else{
				alert('Error creating new post at server');
				this.posts.splice(newLength-1,1);
				this.router.navigate(['/']);
			}
			
		})
		return newPost;
	}

	//Makes request to back-end to update a post
	updatePost(username: string, post: Post): void {
		let findPost = this.getPost(username,post.postid);
		if (findPost==null)
			return
		let body = {
			"body": post.body,
			"title": post.title
		}
		let url = 'http://localhost:3000/api/' + username + '/'+ String(post.postid);
		fetch(url, {
				method: "PUT",
				headers: {
		      		'Accept': 'application/json',
		      		'Content-Type': 'application/json'
		    	},
		    	body: JSON.stringify(body)
			}).then(response => {
				if (response.status==200)
					return;
				else{
					alert('Error updating post at server');
					this.router.navigate(['/edit/'+String(post.postid)]);
				}
			});
	}
	//Makes request to back-end to delete a post
	deletePost(username: string, postid: number): void {
		for(let i=0;i<this.posts.length;i++){
			if(this.posts[i].postid==postid){
				this.posts.splice(i,1);
				let url = 'http://localhost:3000/api/' + username + '/'+ String(postid);
						fetch(url, {method: "DELETE"})
							.then(response => {
								if (response.status==204)
									return;
								else{
									alert('Error deleting post at server');
									this.router.navigate(['/']);
									return;
								}
							});				

			}
		}
		return

	}

	//extracts username from JWT cookie
	parseJWT(token): string {
		let base64Url = token.split('.')[1];
		let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		let json = JSON.parse(atob(base64));
		return json['usr'];
	}
}



export class Post {
	postid: number;
	created: Date;
	modified: Date;
	title: string;
	body: string;
}
