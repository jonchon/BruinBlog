(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n\tbackground-image: url('royce.jpg');\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tposition: absolute;\r\n\tmin-width: 100%;\r\n\tmin-height: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tfont-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \r\n\tfont-size: 24px; \r\n\tfont-style: normal; \r\n\tfont-variant: normal; \r\n\tfont-weight: 700;\r\n\tline-height: 26.4px;\r\n}\r\n\r\n.right {\r\n\tposition: absolute;\r\n\twidth: calc(100% - 240px);\r\n\tright: 0;\r\n\theight: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQ0FBc0M7Q0FDdEMsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsT0FBTztDQUNQLFFBQVE7Q0FDUiw4RkFBOEY7Q0FDOUYsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQiwwQkFBMEI7Q0FDMUIsU0FBUztDQUNULGFBQWE7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcm95Y2UuanBnJyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bWluLXdpZHRoOiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0Zm9udC1mYW1pbHk6IFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiUGFsYXRpbm8gTFQgU1REXCIsIEdlb3JnaWEsIHNlcmlmOyBcclxuXHRmb250LXNpemU6IDI0cHg7IFxyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDsgXHJcblx0Zm9udC12YXJpYW50OiBub3JtYWw7IFxyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bGluZS1oZWlnaHQ6IDI2LjRweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"main\">\r\n\t<div style=\"display: flex;\">\r\n\t\t<div style=\"width: 240px;\">\r\n\t\t\t<app-list></app-list>\r\n\t\t</div>\r\n\t\t<div class=\"right\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MeanBlog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogService = /** @class */ (function () {
    function BlogService(router) {
        this.router = router;
        this.posts = [];
        this.nextPostID = 0;
        if (document.cookie) {
            this.username = this.parseJWT(document.cookie);
            console.log(this.username);
            this.fetchPosts(this.username);
        }
    }
    BlogService.prototype.fetchPosts = function (username) {
        var url = 'http://localhost:3000/api/' + username;
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
        request.open('GET', url, false);
        request.send(null);
        var data = request.responseText;
        this.posts = JSON.parse(data);
        for (var i = 0; i < this.posts.length; i++) {
            this.posts[i].created = new Date(this.posts[i].created);
            this.posts[i].modified = new Date(this.posts[i].modified);
        }
        if (this.posts.length != 0)
            this.nextPostID = this.posts[this.posts.length - 1].postid + 1;
        else
            this.nextPostID = 1;
        return;
    };
    BlogService.prototype.getPosts = function (username) {
        return this.posts;
    };
    BlogService.prototype.getPost = function (username, id) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid == id) {
                this.currentPost = this.posts[i];
                return this.posts[i];
            }
        }
        return null;
    };
    BlogService.prototype.newPost = function (username) {
        var _this = this;
        var newPost = {
            postid: this.nextPostID,
            title: '',
            body: '',
            created: new Date(),
            modified: new Date()
        };
        var body = {
            "body": "",
            "title": ""
        };
        var newLength = this.posts.push(newPost);
        var url = 'http://localhost:3000/api/' + username + '/' + String(this.nextPostID);
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(function (response) {
            if (response.status == 201) {
                _this.nextPostID += 1;
            }
            else {
                alert('Error creating new post at server');
                _this.posts.splice(newLength - 1, 1);
                _this.router.navigate(['/']);
            }
        });
        return newPost;
    };
    BlogService.prototype.updatePost = function (username, post) {
        var _this = this;
        var findPost = this.getPost(username, post.postid);
        if (findPost == null)
            return;
        var body = {
            "body": post.body,
            "title": post.title
        };
        var url = 'http://localhost:3000/api/' + username + '/' + String(post.postid);
        fetch(url, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(function (response) {
            if (response.status == 200)
                return;
            else {
                alert('Error updating post at server');
                _this.router.navigate(['/edit/' + String(post.postid)]);
            }
        });
    };
    BlogService.prototype.deletePost = function (username, postid) {
        var _this = this;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid == postid) {
                this.posts.splice(i, 1);
                var url = 'http://localhost:3000/api/' + username + '/' + String(postid);
                fetch(url, { method: "DELETE" })
                    .then(function (response) {
                    if (response.status == 204)
                        return;
                    else {
                        alert('Error deleting post at server');
                        _this.router.navigate(['/']);
                        return;
                    }
                });
            }
        }
        return;
    };
    BlogService.prototype.parseJWT = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var json = JSON.parse(atob(base64));
        return json['usr'];
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n\tborder-radius: 4px;\r\n\tpadding: 12px 15px;\r\n\tbox-sizing: border-box;\r\n\tbackground-color: #2c2d2d;\r\n\tcolor: white;\r\n}\r\n\r\ntextarea {\r\n\twidth: 100%;\r\n\theight: calc(100% - 25px);\r\n\tdisplay: inline-block;\r\n\tborder-radius: 4px;\r\n\tpadding: 12px 15px;\r\n\tbox-sizing: border-box;\r\n\tresize: none;\r\n\tbackground-color: #2c2d2d;\r\n\tcolor: white;\r\n}\r\n\r\n.edit_box {\r\n\tposition:absolute;\r\n\twidth: 500px;\r\n\theight: 100%;\r\n\tleft: 50%;\r\n\tmargin-left: -250px;\r\n    background-color: rgba(255,255,255, 0.5);\r\n\ttext-align: center;\r\n\tpadding: 0 10px 0 10px;\r\n}\r\n\r\n#title {\r\n\tposition: static;\r\n\tpadding: 5px 0 5px 0;\r\n\theight: 70px;\r\n}\r\n\r\n#body {\r\n\tposition: static;\r\n\theight: calc(100vh - 190px);\r\n}\r\n\r\n#dates {\r\n\tfont-size: 15px;\r\n\theight: 60px;\r\n}\r\n\r\n#buttons {\r\n\theight: 50px;\r\n}\r\n\r\nbutton {\r\n\tbackground-color: #597182;\r\n\tpadding: 10px 24px;\r\n\tcursor: pointer;\r\n\tcolor: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsYUFBYTtDQUNiLFVBQVU7Q0FDVixvQkFBb0I7SUFDakIseUNBQXlDO0NBQzVDLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQiw0QkFBNEI7Q0FDNUI7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiOztBQUVEO0NBQ0MsYUFBYTtDQUNiOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBhZGRpbmc6IDEycHggMTVweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyYzJkMmQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHBhZGRpbmc6IDEycHggMTVweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHJlc2l6ZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZDJkO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVkaXRfYm94IHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR3aWR0aDogNTAwcHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuXHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdHBhZGRpbmc6IDVweCAwIDVweCAwO1xyXG5cdGhlaWdodDogNzBweDtcclxufVxyXG5cclxuI2JvZHkge1xyXG5cdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTkwcHgpO1xyXG59XHJcblxyXG4jZGF0ZXMge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbiNidXR0b25zIHtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzU5NzE4MjtcclxuXHRwYWRkaW5nOiAxMHB4IDI0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"post\" class=\"edit_box\">\r\n\t<div id=\"title\">\r\n\t\t<label>Title:\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"post.title\" placeholder=\"title\">\r\n\t\t</label>\r\n\t</div>\r\n\t<div id=\"body\">\r\n\t\t<label>Body:\r\n\t\t\t<textarea [(ngModel)]=\"post.body\" placeholder=\"body\">\r\n\t\t\t</textarea>\r\n\t\t</label>\r\n\t</div>\r\n\t<div id=\"dates\"> \r\n\t\t{{\"Modified: \" + post.modified}}<br>\r\n\t\t{{\"Created: \" + post.created}}\r\n\t</div>\r\n\t<div id=\"buttons\">\r\n\t\t<button (click)=\"onDelete()\">Delete</button>&nbsp;\r\n\t\t<button (click)=\"onSave()\">Save</button>&nbsp;\r\n\t\t<button (click)=\"onPreview()\">Preview</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, blogService, location) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.blogService = blogService;
        this.location = location;
        this.location.onPopState(function () {
            _this.onExit();
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        /*
        this.postid = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log(this.postid)

        this.post=this.blogService.getPost(this.blogService.username,this.postid);
        console.log(this.post)*/
        var _this = this;
        this.route.paramMap.subscribe(function () { return _this.getPost(); });
    };
    EditComponent.prototype.onExit = function () {
        console.log('leaving');
        this.blogService.updatePost(this.blogService.username, this.post);
    };
    EditComponent.prototype.getPost = function () {
        console.log('test');
        if (this.post) {
            this.blogService.updatePost(this.blogService.username, this.post);
        }
        var postid = this.route.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(this.blogService.username, parseInt(postid));
    };
    EditComponent.prototype.onSave = function () {
        this.blogService.updatePost(this.blogService.username, this.post);
        this.post.modified = new Date();
    };
    EditComponent.prototype.onDelete = function () {
        //console.log(this.post)
        this.blogService.deletePost(this.blogService.username, this.post.postid);
        this.router.navigate(['/']);
    };
    EditComponent.prototype.onPreview = function () {
        this.router.navigate(['/preview/' + this.post.postid]);
        this.onExit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "onExit", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n\tborder: 0;\r\n\theight: 1px;\r\n\tbackground-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.9), rgba(0,0,0,0));\r\n}\r\n\r\nul {\r\n\tlist-style-type: none;\r\n}\r\n\r\n.post_container {\r\n\tposition: fixed;\r\n\theight: 100%;\r\n\twidth: 200px;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tpadding-left: 20px;\r\n\tpadding-right: 20px;\r\n\ttext-align: center;\r\n\tbackground-color: rgba(162, 180, 196, 0.5);\r\n}\r\n\r\n.post_top {\r\n\tposition:fixed;\r\n\twidth: 200px;\r\n\theight: 163px;\r\n}\r\n\r\n.post_bottom {\r\n\tposition: absolute;\r\n\theight: calc(100% - 163px);\r\n\tbottom: 0;\r\n\twidth: 200px;\r\n\toverflow-y: scroll;\r\n\tleft: 0;\r\n\tpadding: 0 20px 0 20px;\r\n}\r\n\r\n.post_box {\r\n\tposition: relative;\r\n\tleft: -40px;\r\n\theight: 60px;\r\n\tline-height: 60px;\r\n\twidth: 200px;\r\n\tborder-style: solid;\r\n\tborder-color: #9a9ca0;\r\n\tborder-width: 1px;\r\n\ttext-align: center;\r\n\tbackground-color: #7bb7ad;\r\n\ttransition: 0.2s;\r\n}\r\n\r\n.post_box.selected {\r\n\tleft: -30px;\r\n\tbackground-color: #5f758e;\r\n}\r\n\r\n.post_box:hover {\r\n\tleft: -30px;\r\n}\r\n\r\n.id_post {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\twidth: 50px;\r\n\tbackground-color: #99b7ff;\r\n\ttext-align: center;\r\n\tborder-right: 1px solid #7b94d1;\r\n}\r\n\r\n.title_post {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\theight: 30px;\r\n\twidth: 150px;\r\n\ttext-align: left;\r\n\tline-height: 30px;\r\n\tborder-bottom: 1px solid #7b94d1;\r\n}\r\n\r\n.created_post {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\theight: 30px;\r\n\tbottom: 0;\r\n\twidth: 150px;\r\n\ttext-align: left;\r\n\tline-height: 30px;\r\n\tfont-size: 16px;\r\n\tbackground-color: #5f758e;\r\n\tz-index: 5;\r\n}\r\n\r\n.edit {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 250px;\r\n\theight: 700px;\r\n\twidth: 500px;\r\n\ttext-align: center;\r\n\tbackground-color: purple;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n}\r\n\r\nbutton {\r\n    background-color: #7a698c;\r\n    border: none;\r\n    color: white;\r\n    padding: 20px 0px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    height: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLDBGQUEwRjtDQUMxRjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsYUFBYTtDQUNiLE9BQU87Q0FDUCxRQUFRO0NBQ1IsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsMkNBQTJDO0NBQzNDOztBQUVEO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLFVBQVU7Q0FDVixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUix1QkFBdUI7Q0FDdkI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixRQUFRO0NBQ1IsYUFBYTtDQUNiLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGdDQUFnQztDQUNoQzs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsYUFBYTtDQUNiLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGlDQUFpQztDQUNqQzs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsYUFBYTtDQUNiLFVBQVU7Q0FDVixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWDs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsWUFBWTtDQUNaLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6Qjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7O0FBR0Q7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwuOSksIHJnYmEoMCwwLDAsMCkpO1xyXG59XHJcblxyXG51bCB7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ucG9zdF9jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MiwgMTgwLCAxOTYsIDAuNSk7XHJcbn1cclxuXHJcbi5wb3N0X3RvcCB7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdGhlaWdodDogMTYzcHg7XHJcbn1cclxuXHJcbi5wb3N0X2JvdHRvbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGhlaWdodDogY2FsYygxMDAlIC0gMTYzcHgpO1xyXG5cdGJvdHRvbTogMDtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdGxlZnQ6IDA7XHJcblx0cGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuLnBvc3RfYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bGVmdDogLTQwcHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1jb2xvcjogIzlhOWNhMDtcclxuXHRib3JkZXItd2lkdGg6IDFweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzdiYjdhZDtcclxuXHR0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4ucG9zdF9ib3guc2VsZWN0ZWQge1xyXG5cdGxlZnQ6IC0zMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1Zjc1OGU7XHJcbn1cclxuXHJcbi5wb3N0X2JveDpob3ZlciB7XHJcblx0bGVmdDogLTMwcHg7XHJcbn1cclxuXHJcbi5pZF9wb3N0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzk5YjdmZjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzdiOTRkMTtcclxufVxyXG5cclxuLnRpdGxlX3Bvc3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0d2lkdGg6IDE1MHB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Yjk0ZDE7XHJcbn1cclxuXHJcbi5jcmVhdGVkX3Bvc3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHdpZHRoOiAxNTBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWY3NThlO1xyXG5cdHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDI1MHB4O1xyXG5cdGhlaWdodDogNzAwcHg7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhNjk4YztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\t\r\n\t<div class=\"post_container\">\r\n\t\t<div class=\"post_top\">\r\n\t\t\t<h1>Posts</h1>\r\n\t\t\t<button (click)=\"newPost()\">New Post</button><hr>\r\n\t\t</div>\r\n\t\t<div class=\"post_bottom\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li *ngFor=\"let post of posts\">\r\n\t\t\t\t\t<a routerLink=\"/edit/{{post.postid}}\" (click)=\"navigateAway(post.postid)\">\r\n\t\t\t\t\t\t<div class=\"post_box\" [class.selected]=\"post === selected\">\r\n\t\t\t\t\t\t\t<div class=\"id_post\">&nbsp;{{post.postid}}</div>\r\n\t\t\t\t\t\t\t<div class=\"title_post\">&nbsp;{{post.title}}</div>\r\n\t\t\t\t\t\t\t<div class=\"created_post\">&nbsp;{{post.created | date: 'MM/dd/yyyy HH:mm:ss'}} </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(route, router, blogService) {
        this.route = route;
        this.router = router;
        this.blogService = blogService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.posts = this.blogService.getPosts(this.blogService.username);
        //this.route.paramMap.subscribe(() => this.autoSave());
        //console.log(this.posts);
    };
    /*
    autoSave(){
        console.log('@@@@@@@@@@@')
        if(this.blogService.currentPost){
            this.blogService.updatePost(this.blogService.username,this.blogService.currentPost);
        }
    }*/
    ListComponent.prototype.newPost = function () {
        this.navigateAway(null);
        var newPost = this.blogService.newPost(this.blogService.username);
        this.posts = this.blogService.getPosts(this.blogService.username);
        this.router.navigate(['/edit/' + newPost.postid.toString()]);
    };
    ListComponent.prototype.navigateAway = function (postid) {
        if (this.blogService.currentPost) {
            this.blogService.updatePost(this.blogService.username, this.blogService.currentPost);
        }
        //console.log(this.blogService.username);
        //console.log(postid);
        this.selected = this.blogService.getPost(this.blogService.username, postid);
        //console.log(this.selected);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#preview {\r\n\twidth: auto;\r\n\theight: calc(100vh - 170px);\r\n\tposition: relative;\r\n\tborder-style: inset;\r\n\tborder: 2px 2px 2px 2px;\r\n\ttext-align: left;\r\n\toverflow-y: scroll;\r\n\tbackground-color: white;\r\n}\r\n\r\n#preview::-webkit-scrollbar {\r\n    -webkit-appearance: vertical;\r\n}\r\n\r\n#preview::-webkit-scrollbar:vertical {\r\n    width: 11px;\r\n}\r\n\r\n#preview::-webkit-scrollbar-thumb {\r\n    border-radius: 8px;\r\n    border: 2px solid black;\r\n    background-color: rgba(0,0,0,.5);\r\n}\r\n\r\n#preview::-webkit-scrollbar-track { \r\n    background-color: #fff; \r\n    border-radius: 8px; \r\n}\r\n\r\n#center_wide {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    background-color: rgba(255,255,255, 0.5);\r\n    display: inline-block;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#title {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 130px;\r\n}\r\n\r\nbutton {\r\n    z-index: 1;\r\n    position: fixed;\r\n    background-color: #597182;\r\n    border: none;\r\n    color: white;\r\n    text-align: left;\r\n    padding: 15px 32px;\r\n    font-size: 24px;\r\n    width: 100px;\r\n    left: 250px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton span {\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n}\r\n\r\nbutton span:before {\r\n    content: '\\00AB';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    left: -20px;\r\n    margin-left: -15px;\r\n    transition: .5s;\r\n}\r\n\r\nbutton:hover span {\r\n    padding-left: 5px;\r\n}\r\n\r\nbutton:hover span:before {\r\n    opacity: 1;\r\n    left: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osNEJBQTRCO0NBQzVCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsd0JBQXdCO0NBQ3hCOztBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxRQUFRO0NBQ1giLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmV2aWV3IHtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzBweCk7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcblx0Ym9yZGVyOiAycHggMnB4IDJweCAycHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNwcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4jcHJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xyXG4gICAgd2lkdGg6IDExcHg7XHJcbn1cclxuXHJcbiNwcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG59XHJcblxyXG4jcHJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyBcclxufSBcclxuXHJcbiNjZW50ZXJfd2lkZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NzE4MjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBsZWZ0OiAyNTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuYnV0dG9uIHNwYW46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXDAwQUInO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIgc3BhbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHNwYW46YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\r\n\t<button (click)=\"goBack()\"><span>Edit</span></button>\r\n\t<div id=\"center_wide\">\r\n\t\t<div id=\"title\">\r\n\t\t\t<h1>Preview</h1>\r\n\t\t\t<hr>\r\n\t\t\t<p [innerHTML]=\"formatted_title\"></p>\r\n\t\t</div>\r\n\t\t<div id=\"preview\">\r\n\t\t\t<p [innerHTML]=\"formatted_body\"></p>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function () { return _this.showPreview(); });
    };
    PreviewComponent.prototype.showPreview = function () {
        var postid = Number(this.route.snapshot.paramMap.get('id'));
        console.log(postid);
        this.post = this.blogService.getPost(this.blogService.username, postid);
        var reader = new commonmark__WEBPACK_IMPORTED_MODULE_3__["Parser"]();
        var writer = new commonmark__WEBPACK_IMPORTED_MODULE_3__["HtmlRenderer"]();
        if (this.post != null) {
            var body_parse = reader.parse(this.post.body);
            var title_parse = reader.parse(this.post.title);
            this.formatted_body = writer.render(body_parse);
            this.formatted_title = writer.render(title_parse);
        }
    };
    PreviewComponent.prototype.goBack = function () {
        this.router.navigate(['/edit/' + this.post.postid]);
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/project4/MeanBlog/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map