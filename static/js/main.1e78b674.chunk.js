(this["webpackJsonpsocial-media-jmi11er"]=this["webpackJsonpsocial-media-jmi11er"]||[]).push([[0],{10:function(e,t,a){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},14:function(e,t,a){e.exports={navbar:"Navbar_navbar__31-FB"}},16:function(e,t,a){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},23:function(e,t,a){e.exports={App:"App_App__2s_Fq","App-logo":"App_App-logo__1OUG0","App-logo-spin":"App_App-logo-spin__3jj4e","App-header":"App_App-header__3TyHG","App-link":"App_App-link__1zUGJ",content:"App_content__1dlDM"}},24:function(e,t,a){e.exports={header:"Header_header__3mObx"}},32:function(e,t,a){e.exports=a(43)},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),s=a.n(r),l=(a(37),a(2)),i=a(9),c=a(23),m=a.n(c),u=a(24),d=a.n(u),p=function(e){return"/social-media-jmi11er"+e};var f=function(){return o.a.createElement("div",{className:d.a.header},o.a.createElement("div",null,o.a.createElement("button",null,o.a.createElement("img",{src:p("/assets/camera.svg"),alt:"Camera"}))),o.a.createElement("div",null,o.a.createElement("button",null,o.a.createElement("img",{src:p("/assets/logo.png"),alt:"Logo"}))),o.a.createElement("div",null,o.a.createElement("button",null,o.a.createElement("img",{src:p("/assets/message.svg"),alt:"Message"}))))},g=a(14),v=a.n(g);var h=function(e){return o.a.createElement("nav",{className:v.a.navbar},o.a.createElement("div",{className:v.a.navItem},o.a.createElement(l.b,{to:"/"},o.a.createElement("img",{src:p("/assets/home.svg"),alt:"Home"}))),o.a.createElement("div",{className:v.a.navItem},o.a.createElement(l.b,{to:"/explore"},o.a.createElement("img",{src:p("/assets/explore.svg"),alt:"Explore"}))),o.a.createElement("div",{className:v.a.navItem},o.a.createElement(l.b,{to:"/newpost"},o.a.createElement("img",{src:p("/assets/newpost.svg"),alt:"New Post"}))),o.a.createElement("div",{className:v.a.navItem},o.a.createElement(l.b,{to:"/activity"},o.a.createElement("img",{src:p("/assets/like.svg"),alt:"Like"}))),o.a.createElement("div",{className:v.a.navItem},o.a.createElement(l.b,{to:"/profile"},o.a.createElement("img",{src:p("/assets/profile.svg"),alt:"Profile"}))))},E=a(6),_=a(5),b=a.n(_);var w=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),c=Object(E.a)(i,2),m=c[0],u=c[1];return o.a.createElement("div",null,o.a.createElement("div",{className:b.a.topInfo},o.a.createElement("img",{className:b.a.profPic,src:p(e.user.photo),alt:"profPic"}),o.a.createElement(l.b,{className:b.a.username,key:e.user.id,to:"/profile/".concat(e.user.id)},o.a.createElement("b",null,e.user.id))),o.a.createElement("div",null,o.a.createElement("img",{className:b.a.postPic,src:p(e.post.photo),alt:"postPic"})),o.a.createElement("div",{className:b.a.likesNComments},o.a.createElement("button",null,e.likes.self?o.a.createElement("img",{src:p("/assets/unlike.svg"),alt:"Unlike Action",onClick:function(){console.log("unlike"),e.onLike(e.post.id)}}):o.a.createElement("img",{src:p("/assets/like.svg"),alt:"Like Action",onClick:function(){console.log("like"),e.onUnlike(e.post.id)}})),o.a.createElement("button",{onClick:function(e){return u(!m)}},o.a.createElement("img",{src:p("/assets/comment.svg"),alt:"Comment Action"}))),o.a.createElement("div",{className:b.a.likeCount},o.a.createElement("b",null,e.likes.count," likes")),o.a.createElement("div",{className:b.a.caption},o.a.createElement("b",null,e.post.userId)," ",e.post.desc),e.comments.map((function(e){return o.a.createElement("div",{key:e.datetime,className:b.a.comment},o.a.createElement("b",null,e.userId)," ",e.text)})),m&&o.a.createElement("form",{className:b.a.addComment,onSubmit:function(t){e.onComment(e.post.id,r),s(""),u(!1),t.preventDefault()}},o.a.createElement("input",{type:"text",placeholder:"Add a comment\u2026",value:r,onChange:function(e){return s(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Post")),o.a.createElement("div",{className:b.a.timePosted},function(e){var t=Math.floor((new Date-new Date(e))/1e3),a=Math.floor(t/31556926);return a>=1?a+" years":(a=Math.floor(t/2592e3))>=1?a+" months":(a=Math.floor(t/86400))>=1?a+" days":(a=Math.floor(t/3600))>=1?a+" hours":(a=Math.floor(t/60))>=1?a+" minutes":Math.floor(t)+" seconds"}(e.post.datetime)," ago"))},I=a(11),k={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var P=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),a=0;a<1e7&&!((new Date).getTime()-t>e);a++);}(1),e?e+t:t},j=Object(n.createContext)();var O=function(e){var t=Object(n.useState)((function(){return JSON.parse(window.localStorage.getItem("store"))||k})),a=Object(E.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){window.localStorage.setItem("store",JSON.stringify(r))}),[r]),o.a.createElement(j.Provider,{value:Object(I.a)({},r,{addComment:function(e,t){var a={userId:r.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};s(Object(I.a)({},r,{comments:r.comments.concat(a)}))},addLike:function(e){s(Object(I.a)({},r,{likes:r.likes.filter((function(t){return!(t.userId===r.currentUserId&&t.postId===e)}))}))},removeLike:function(e){var t={userId:r.currentUserId,postId:e,datetime:(new Date).toISOString()};s(Object(I.a)({},r,{likes:r.likes.concat(t)}))},addPost:function(e,t){console.log(e,"PHOTO");var a={id:P("post"),userId:r.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};console.log(a,"newPOST"),console.log(r.posts),s(Object(I.a)({},r,{posts:r.posts.concat(a)}))},addFollower:function(e,t){var a={userId:e,followerId:t};s(Object(I.a)({},r,{followers:r.followers.concat(a)}))},removeFollower:function(e,t){s(Object(I.a)({},r,{followers:r.followers.filter((function(a){return!(a.userId===e&&a.followerId===t)}))}))}})},e.children)};var N=function(e){var t=Object(n.useContext)(j),a=t.posts,r=t.users,s=t.comments,l=t.likes,c=t.currentUserId,m=t.addComment,u=t.addLike,d=t.removeLike,p=Object(i.g)().postId,f=void 0===p?a:a.filter((function(e){return e.id===p}));function g(e){return r.find((function(t){return t.id===e.userId}))}function v(e){return s.filter((function(t){return t.postId===e.id}))}function E(e){var t=l.filter((function(t){return t.postId===e.id}));return{self:t.some((function(e){return e.userId===c})),count:t.length}}return o.a.createElement("div",null,f.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(e){return o.a.createElement(w,{key:e.id,user:g(e),post:e,comments:v(e),likes:E(e),onLike:u,onUnlike:d,onComment:m})})),o.a.createElement(h,null))};var D=function(){return o.a.createElement("div",null,"Explore",o.a.createElement(h,null))},y=a(10),C=a.n(y),T=a(27),x=a(28),A=a(30),S=a(29),L=a(13),Z=a(31),U=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(A.a)(this,Object(S.a)(t).call(this,e))).handleDragEnter=a.handleDragEnter.bind(Object(L.a)(a)),a.handleDrop=a.handleDrop.bind(Object(L.a)(a)),a.handleDragOver=a.handleDragOver.bind(Object(L.a)(a)),a.handleDragLeave=a.handleDragLeave.bind(Object(L.a)(a)),a}return Object(Z.a)(t,e),Object(x.a)(t,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=o.a.Children.only(this.props.children);return o.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),t}(n.PureComponent);var B=function(e){var t=Object(n.useContext)(j).addPost,a=Object(n.useState)(!1),r=Object(E.a)(a,2),s=r[0],l=r[1],c=Object(n.useState)(""),m=Object(E.a)(c,2),u=m[0],d=m[1],p=Object(n.useState)(null),f=Object(E.a)(p,2),g=f[0],v=f[1],h=Object(n.useState)(""),_=Object(E.a)(h,2),b=_[0],w=_[1],I=Object(i.f)();return o.a.createElement("div",null,o.a.createElement("div",{className:C.a.photo},g?o.a.createElement("img",{src:g,alt:"New Post"}):o.a.createElement("div",{className:C.a.message},"Drop your image"),o.a.createElement(U,{onDragEnter:function(e){l(!0)},onDragLeave:function(e){l(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var a=new FileReader;a.onloadend=function(e){v(e.target.result)},a.readAsDataURL(t)}}l(!1)}}},o.a.createElement("div",{className:[C.a.dropArea,s?C.a.dragging:null].join(" ")}))),o.a.createElement("div",{className:C.a.desc},o.a.createElement("textarea",{value:u,onChange:function(e){d(e.target.value)}})),o.a.createElement("div",{className:C.a.error},b),o.a.createElement("div",{className:C.a.actions},o.a.createElement("button",{onClick:function(){I.goBack()}},"Cancel"),o.a.createElement("button",{onClick:function(e){e.preventDefault(),t(g,u),w(""),I.push("/")}},"Share")))};var H=function(){return o.a.createElement("div",null,"Activity",o.a.createElement(h,null))},F=a(8),J=a.n(F),M=a(16),q=a.n(M);var G=function(e){return o.a.createElement("div",{className:q.a.square},o.a.createElement("div",{className:q.a.content},o.a.createElement("img",{className:q.a.image,src:p(e.photo),alt:"Post Thumbnail"})))};var W=function(e){var t=Object(n.useContext)(j),a=t.posts,r=t.users,s=t.followers,c=t.currentUserId,m=t.addFollower,u=t.removeFollower,d=Object(i.g)().userId,f=void 0===d?c:d,g=r.filter((function(e){return e.id===f}))[0],v=a.filter((function(e){return e.userId===f})),E=s.filter((function(e){return e.userId===f})).length,_=s.filter((function(e){return e.followerId===f})).length,b=s.some((function(e){return e.userId===f&&e.followerId===c}));return o.a.createElement("div",null,o.a.createElement("div",{className:J.a.topinfo},o.a.createElement("img",{className:J.a.profPic,src:p(g.photo),alt:"profPic"}),o.a.createElement("b",{className:J.a.username},g.id),b?o.a.createElement("button",{className:J.a.unfollowBtn,onClick:function(){console.log("unfollow"),u(f,c)}},"Unfollow"):o.a.createElement("button",{className:J.a.followBtn,onClick:function(){console.log("follow"),m(f,c)}},"Follow")),o.a.createElement("div",{className:J.a.bio},o.a.createElement("b",null,g.name),o.a.createElement("br",null),g.bio),o.a.createElement("div",{className:J.a.info},o.a.createElement("p",null,v.length," posts"),o.a.createElement("p",null,E," followers"),o.a.createElement("p",null,_," following")),o.a.createElement("div",{className:J.a.posts},v.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(e){return o.a.createElement(l.b,{key:e.id,to:"/".concat(e.id)},o.a.createElement(G,{photo:e.photo}))}))),o.a.createElement(h,null))};var z=function(){return o.a.createElement(l.a,{basename:"/social-media-jmi11er"},o.a.createElement(O,null,o.a.createElement("div",null,o.a.createElement(f,null)),o.a.createElement("div",{className:m.a.content},o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/profile/:userId?"},o.a.createElement(W,null)),o.a.createElement(i.a,{path:"/activity"},o.a.createElement(H,null)),o.a.createElement(i.a,{path:"/explore"},o.a.createElement(D,null)),o.a.createElement(i.a,{path:"/newpost"},o.a.createElement(B,null)),o.a.createElement(i.a,{path:"/:postId?"},o.a.createElement(N,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={topInfo:"Post_topInfo__1p8U5",username:"Post_username__2AcAa",profPic:"Post_profPic__3EB6i",postPic:"Post_postPic__1nVbS",likesNComments:"Post_likesNComments__3fp1i",likeCount:"Post_likeCount__2HW9H",caption:"Post_caption__epNw6",comment:"Post_comment__1cYeu",timePosted:"Post_timePosted__1qBvZ",addComment:"Post_addComment__aGSqH"}},8:function(e,t,a){e.exports={topInfo:"Profile_topInfo__2HHnY",profPic:"Profile_profPic__z73Wl",username:"Profile_username__2qUJK",bio:"Profile_bio__3BO67",info:"Profile_info__3Vv7X",posts:"Profile_posts__rwx78",followBtn:"Profile_followBtn__Ntles",unfollowBtn:"Profile_unfollowBtn__1rlHm"}}},[[32,1,2]]]);
//# sourceMappingURL=main.1e78b674.chunk.js.map