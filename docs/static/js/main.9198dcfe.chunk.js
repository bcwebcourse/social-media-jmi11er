(this["webpackJsonpsocial-media-jmi11er"]=this["webpackJsonpsocial-media-jmi11er"]||[]).push([[0],[,,function(e,t,a){e.exports={topInfo:"Post_topInfo__1p8U5",profPic:"Post_profPic__3EB6i",postPic:"Post_postPic__1nVbS",likesNComments:"Post_likesNComments__3fp1i",likeCount:"Post_likeCount__2HW9H",caption:"Post_caption__epNw6",comment:"Post_comment__1cYeu",timePosted:"Post_timePosted__1qBvZ",addComment:"Post_addComment__aGSqH"}},function(e,t,a){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},,function(e,t,a){e.exports={navbar:"Navbar_navbar__31-FB"}},,function(e,t,a){e.exports={App:"App_App__2s_Fq","App-logo":"App_App-logo__1OUG0","App-logo-spin":"App_App-logo-spin__3jj4e","App-header":"App_App-header__3TyHG","App-link":"App_App-link__1zUGJ",content:"App_content__1dlDM"}},,,function(e,t,a){e.exports={header:"Header_header__3mObx"}},,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),s=a.n(r),i=(a(21),a(6)),l=a(1),c=a(7),m=a.n(c),u=a(10),d=a.n(u),p=function(e){return"/social-media-jmi11er"+e};var f=function(){return o.a.createElement("div",{className:d.a.header},o.a.createElement("div",null,o.a.createElement("button",null,o.a.createElement("img",{src:p("/assets/camera.svg"),alt:"Camera"}))),o.a.createElement("div",null,o.a.createElement("button",null,o.a.createElement("img",{src:p("/assets/logo.png"),alt:"Logo"}))),o.a.createElement("div",null,o.a.createElement("button",null,o.a.createElement("img",{src:p("/assets/message.svg"),alt:"Message"}))))},g=a(2),h=a.n(g);var v=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),c=Object(l.a)(i,2),m=c[0],u=c[1];return o.a.createElement("div",null,o.a.createElement("div",{className:h.a.topInfo},o.a.createElement("img",{className:h.a.profPic,src:p(e.user.photo),alt:"profPic"}),o.a.createElement("b",null,e.user.id)),o.a.createElement("div",null,o.a.createElement("img",{className:h.a.postPic,src:p(e.post.photo),alt:"postPic"})),o.a.createElement("div",{className:h.a.likesNComments},o.a.createElement("button",null,e.likes.self?o.a.createElement("img",{src:p("/assets/unlike.svg"),alt:"Unlike Action",onClick:function(){console.log("unlike"),e.onLike(e.post.id)}}):o.a.createElement("img",{src:p("/assets/like.svg"),alt:"Like Action",onClick:function(){console.log("like"),e.onUnlike(e.post.id)}})),o.a.createElement("button",{onClick:function(e){return u(!m)}},o.a.createElement("img",{src:p("/assets/comment.svg"),alt:"Comment Action"}))),o.a.createElement("div",{className:h.a.likeCount},o.a.createElement("b",null,e.likes.count," likes")),o.a.createElement("div",{className:h.a.caption},o.a.createElement("b",null,e.post.userId)," ",e.post.desc),e.comments.map((function(e){return o.a.createElement("div",{key:e.datetime,className:h.a.comment},o.a.createElement("b",null,e.userId)," ",e.text)})),m&&o.a.createElement("form",{className:h.a.addComment,onSubmit:function(t){e.onComment(e.post.id,r),s(""),u(!1),t.preventDefault()}},o.a.createElement("input",{type:"text",placeholder:"Add a comment\u2026",value:r,onChange:function(e){return s(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Post")),o.a.createElement("div",{className:h.a.timePosted},function(e){var t=Math.floor((new Date-new Date(e))/1e3),a=Math.floor(t/31556926);return a>=1?a+" years":(a=Math.floor(t/2592e3))>=1?a+" months":(a=Math.floor(t/86400))>=1?a+" days":(a=Math.floor(t/3600))>=1?a+" hours":(a=Math.floor(t/60))>=1?a+" minutes":Math.floor(t)+" seconds"}(e.post.datetime)," ago"))};var E=function(e){var t=e.store;function a(e){return t.users.find((function(t){return t.id===e.userId}))}function n(e){return t.comments.filter((function(t){return t.postId===e.id}))}function r(e){var a=t.likes.filter((function(t){return t.postId===e.id}));return{self:a.some((function(e){return e.userId===t.currentUserId})),count:a.length}}return o.a.createElement("div",null,t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(t){return o.a.createElement(v,{key:t.id,user:a(t),post:t,comments:n(t),likes:r(t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment})})))},b=a(5),_=a.n(b);var k=function(e){function t(t){e.onNavChange&&e.onNavChange(t)}return o.a.createElement("nav",{className:_.a.navbar},o.a.createElement("div",{className:_.a.navItem},o.a.createElement("button",{onClick:function(e){return t("home")}},o.a.createElement("img",{src:p("/assets/home.svg"),alt:"Home"}))),o.a.createElement("div",{className:_.a.navItem},o.a.createElement("button",{onClick:function(e){return t("explore")}},o.a.createElement("img",{src:p("/assets/explore.svg"),alt:"Explore"}))),o.a.createElement("div",{className:_.a.navItem},o.a.createElement("button",{onClick:function(e){return t("newpost")}},o.a.createElement("img",{src:p("/assets/newpost.svg"),alt:"New Post"}))),o.a.createElement("div",{className:_.a.navItem},o.a.createElement("button",{onClick:function(e){return t("activity")}},o.a.createElement("img",{src:p("/assets/like.svg"),alt:"Like"}))),o.a.createElement("div",{className:_.a.navItem},o.a.createElement("button",{onClick:function(e){return t("profile")}},o.a.createElement("img",{src:p("/assets/profile.svg"),alt:"Profile"}))))};var I=function(){return o.a.createElement("div",null,"Explore")},D=a(3),w=a.n(D),j=a(11),y=a(12),N=a(14),O=a(13),P=a(4),C=a(15),A=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(N.a)(this,Object(O.a)(t).call(this,e))).handleDragEnter=a.handleDragEnter.bind(Object(P.a)(a)),a.handleDrop=a.handleDrop.bind(Object(P.a)(a)),a.handleDragOver=a.handleDragOver.bind(Object(P.a)(a)),a.handleDragLeave=a.handleDragLeave.bind(Object(P.a)(a)),a}return Object(C.a)(t,e),Object(y.a)(t,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=o.a.Children.only(this.props.children);return o.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),t}(n.PureComponent);var T=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(""),c=Object(l.a)(i,2),m=c[0],u=c[1],d=Object(n.useState)(null),p=Object(l.a)(d,2),f=p[0],g=p[1],h=Object(n.useState)(""),v=Object(l.a)(h,2),E=v[0],b=v[1];return o.a.createElement("div",null,o.a.createElement("div",{className:w.a.photo},f?o.a.createElement("img",{src:f,alt:"New Post"}):o.a.createElement("div",{className:w.a.message},"Drop your image"),o.a.createElement(A,{onDragEnter:function(e){s(!0)},onDragLeave:function(e){s(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var a=new FileReader;a.onloadend=function(e){g(e.target.result)},a.readAsDataURL(t)}}s(!1)}}},o.a.createElement("div",{className:[w.a.dropArea,r?w.a.dragging:null].join(" ")}))),o.a.createElement("div",{className:w.a.desc},o.a.createElement("textarea",{value:m,onChange:function(e){u(e.target.value)}})),o.a.createElement("div",{className:w.a.error},E),o.a.createElement("div",{className:w.a.actions},o.a.createElement("button",{onClick:function(){e.cancelPost()}},"Cancel"),o.a.createElement("button",{onClick:function(t){t.preventDefault(),e.addPost(f,m),b("")}},"Share")))};var S=function(){return o.a.createElement("div",null,"Activity")};var x=function(){return o.a.createElement("div",null,"Profile")},L={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var Z=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),a=0;a<1e7&&!((new Date).getTime()-t>e);a++);}(1),e?e+t:t};var U=function(){var e=Object(n.useState)("home"),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(L),c=Object(l.a)(s,2),u=c[0],d=c[1];function p(e){var t={userId:u.currentUserId,postId:e,datetime:(new Date).toISOString()};d(Object(i.a)({},u,{likes:u.likes.concat(t)}))}function g(e){d(Object(i.a)({},u,{likes:u.likes.filter((function(t){return!(t.userId===u.currentUserId&&t.postId===e)}))}))}function h(e,t){var a={userId:u.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};d(Object(i.a)({},u,{comments:u.comments.concat(a)}))}function v(e,t){console.log(e,"PHOTO");var a={id:Z("post"),userId:u.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};console.log(a,"newPOST"),console.log(u.posts),d(Object(i.a)({},u,{posts:u.posts.concat(a)})),r("home")}function b(){r("home")}return o.a.createElement("div",{className:m.a.container},o.a.createElement(f,null),o.a.createElement("main",{className:m.a.content},function(e){return"home"===e?(console.log(e),o.a.createElement(E,{store:u,onUnlike:p,onLike:g,onComment:h})):"explore"===e?(console.log(e),o.a.createElement(I,null)):"newpost"===e?(console.log(e),o.a.createElement(T,{store:u,addPost:v,cancelPost:b})):"activity"===e?(console.log(e),o.a.createElement(S,null)):(console.log(e),o.a.createElement(x,null))}(a)),o.a.createElement(k,{onNavChange:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.9198dcfe.chunk.js.map