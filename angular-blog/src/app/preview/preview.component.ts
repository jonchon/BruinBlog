import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post, BlogService } from '../blog.service';

import { Parser, HtmlRenderer } from 'commonmark';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
	private post: Post;
	private formatted_body: string;
	private formatted_title: string;

	constructor(private blogService: BlogService,
				private route: ActivatedRoute,
				private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe(() => this.showPreview());
	}

	showPreview()  {
		let postid = Number(this.route.snapshot.paramMap.get('id'));
		console.log(postid);
		this.post = this.blogService.getPost(this.blogService.username, postid);

		let reader = new Parser();
		let writer = new HtmlRenderer();

		if (this.post != null){
			let body_parse = reader.parse(this.post.body);
			let title_parse = reader.parse(this.post.title);

			this.formatted_body = writer.render(body_parse);
			this.formatted_title = writer.render(title_parse);
		}
	}
	
	goBack() {
		this.router.navigate(['/edit/'+this.post.postid]);
	}
}
