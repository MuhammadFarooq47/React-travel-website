(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{27:function(e,a,t){},66:function(e,a,t){e.exports=t(82)},71:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),s=t(35),i=(t(71),t(4)),o=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,s=o.includes(r)?r:o[0],u=m.includes(c)?c:m[0];return l.a.createElement(i.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(77);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),m=o[0],E=o[1],d=function(){return r(!1)},p=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:d},"DFX TRAVLERS",l.a.createElement("i",{class:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:d},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:d},"Products")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:d},"Services")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:d},"Sign Up"))),m&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(27),t(78);var d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(i.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var p=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these EPIC Destinations!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(d,{src:"https://source.unsplash.com/1600x900/?code,jungle",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),l.a.createElement(d,{src:"https://source.unsplash.com/1600x900/?code,islands",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(d,{src:"https://source.unsplash.com/1600x900/?code,atlantic-ocean",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(d,{src:"https://source.unsplash.com/1600x900/?code,football-top",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),l.a.createElement(d,{src:"https://source.unsplash.com/1600x900/?code,desert",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})))))};t(79);var b=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"ADVENTURE AWAITS"),l.a.createElement("p",null,"What are you waiting for?"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"WATCH TRAILER ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(80);var h=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/"},"Testimonials"),l.a.createElement(i.b,{to:"/"},"Careers"),l.a.createElement(i.b,{to:"/"},"Investors"),l.a.createElement(i.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Destinations"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(i.b,{to:"/"},"Submit Video"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},"DFX TRAVLERS",l.a.createElement("i",{class:"fab fa-typo3"}))),l.a.createElement("small",{class:"website-rights"},"DFX TRAVLERS \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement(h,null))},v=t(7);function g(){return l.a.createElement("h1",{className:"services"},"SERVICES")}var N=t(22),x=t(103),k=t(3),y=t(105),S=t(106),w=t(107),O=t(108),_=t(109),C=t(112),T=t(113),j=t(111),A=t(46),R=t(45),I=t(24),P=t.n(I),z=t(25),F=t.n(z),D=t(26),L=t.n(D),U=t(23),V=t.n(U),W=t(104),H=t(84),B=t(110),J=Object(x.a)((function(e){return{root:{flexGrow:1}}})),Y={children:l.a.ReactNode};function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=e.children,t=J();return l.a.createElement(B.a,{width:"100vw",height:"100vh"},l.a.createElement(W.a,{container:!0,justify:"center",alignItems:"center",style:{width:"100%",height:"100%"}},l.a.createElement(B.a,{className:t.root,p:10},a)))}var M=Object(x.a)((function(e){return{root:{maxWidth:500,minHeight:500},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:R.a[500]}}}));function X(){var e=M(),a=l.a.useState(!1),t=Object(s.a)(a,2),n=t[0],r=t[1],c=function(){r(!n)};return l.a.createElement(G,null,l.a.createElement(W.a,{container:!0,direction:"column",spacing:2},l.a.createElement(W.a,{item:!0,xs:12},l.a.createElement(W.a,{container:!0,justify:"space-between",alignItems:"center",spacing:2},l.a.createElement(W.a,{item:!0,xs:12,sm:4},l.a.createElement(H.a,null,l.a.createElement(B.a,{width:"100%",height:500},l.a.createElement(y.a,{className:e.root},l.a.createElement(S.a,{avatar:l.a.createElement(T.a,{"aria-label":"recipe",className:e.avatar},"R"),action:l.a.createElement(j.a,{"aria-label":"settings"},l.a.createElement(V.a,null)),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),l.a.createElement(w.a,{className:e.media,image:"https://source.unsplash.com/1600x900/?code,food",title:"Paella dish"}),l.a.createElement(O.a,null,l.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),l.a.createElement(_.a,{disableSpacing:!0},l.a.createElement(j.a,{"aria-label":"add to favorites"},l.a.createElement(P.a,null)),l.a.createElement(j.a,{"aria-label":"share"},l.a.createElement(F.a,null)),l.a.createElement(j.a,{className:Object(k.a)(e.expand,Object(N.a)({},e.expandOpen,n)),onClick:c,"aria-expanded":n,"aria-label":"show more"},l.a.createElement(L.a,null))),l.a.createElement(C.a,{in:n,timeout:"auto",unmountOnExit:!0},l.a.createElement(O.a,null)))))),l.a.createElement(W.a,{item:!0,xs:12,sm:4},l.a.createElement(H.a,null,l.a.createElement(B.a,{width:"100%",height:500},l.a.createElement(y.a,{className:e.root},l.a.createElement(S.a,{avatar:l.a.createElement(T.a,{"aria-label":"recipe",className:e.avatar},"R"),action:l.a.createElement(j.a,{"aria-label":"settings"},l.a.createElement(V.a,null)),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),l.a.createElement(w.a,{className:e.media,image:"https://source.unsplash.com/1600x900/?code,products",title:"Paella dish"}),l.a.createElement(O.a,null,l.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),l.a.createElement(_.a,{disableSpacing:!0},l.a.createElement(j.a,{"aria-label":"add to favorites"},l.a.createElement(P.a,null)),l.a.createElement(j.a,{"aria-label":"share"},l.a.createElement(F.a,null)),l.a.createElement(j.a,{className:Object(k.a)(e.expand,Object(N.a)({},e.expandOpen,n)),onClick:c,"aria-expanded":n,"aria-label":"show more"},l.a.createElement(L.a,null))),l.a.createElement(C.a,{in:n,timeout:"auto",unmountOnExit:!0},l.a.createElement(O.a,null)))))),l.a.createElement(W.a,{item:!0,xs:12,sm:4},l.a.createElement(H.a,null,l.a.createElement(B.a,{width:"100%",height:500},l.a.createElement(y.a,{className:e.root},l.a.createElement(S.a,{avatar:l.a.createElement(T.a,{"aria-label":"recipe",className:e.avatar},"R"),action:l.a.createElement(j.a,{"aria-label":"settings"},l.a.createElement(V.a,null)),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),l.a.createElement(w.a,{className:e.media,image:"https://source.unsplash.com/1600x900/?code,sweets",title:"Paella dish"}),l.a.createElement(O.a,null,l.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),l.a.createElement(_.a,{disableSpacing:!0},l.a.createElement(j.a,{"aria-label":"add to favorites"},l.a.createElement(P.a,null)),l.a.createElement(j.a,{"aria-label":"share"},l.a.createElement(F.a,null)),l.a.createElement(j.a,{className:Object(k.a)(e.expand,Object(N.a)({},e.expandOpen,n)),onClick:c,"aria-expanded":n,"aria-label":"show more"},l.a.createElement(L.a,null))),l.a.createElement(C.a,{in:n,timeout:"auto",unmountOnExit:!0},l.a.createElement(O.a,null))))))))),l.a.createElement(W.a,{container:!0,direction:"column",spacing:2},l.a.createElement(W.a,{item:!0,xs:12},l.a.createElement(W.a,{container:!0,justify:"space-between",alignItems:"center",spacing:2},l.a.createElement(W.a,{item:!0,xs:12,sm:4},l.a.createElement(H.a,null,l.a.createElement(B.a,{width:"100%",height:500},l.a.createElement(y.a,{className:e.root},l.a.createElement(S.a,{avatar:l.a.createElement(T.a,{"aria-label":"recipe",className:e.avatar},"R"),action:l.a.createElement(j.a,{"aria-label":"settings"},l.a.createElement(V.a,null)),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),l.a.createElement(w.a,{className:e.media,image:"https://source.unsplash.com/1600x900/?code,products",title:"Paella dish"}),l.a.createElement(O.a,null,l.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),l.a.createElement(_.a,{disableSpacing:!0},l.a.createElement(j.a,{"aria-label":"add to favorites"},l.a.createElement(P.a,null)),l.a.createElement(j.a,{"aria-label":"share"},l.a.createElement(F.a,null)),l.a.createElement(j.a,{className:Object(k.a)(e.expand,Object(N.a)({},e.expandOpen,n)),onClick:c,"aria-expanded":n,"aria-label":"show more"},l.a.createElement(L.a,null))),l.a.createElement(C.a,{in:n,timeout:"auto",unmountOnExit:!0},l.a.createElement(O.a,null)))))),l.a.createElement(W.a,{item:!0,xs:12,sm:4},l.a.createElement(H.a,null,l.a.createElement(B.a,{width:"100%",height:500},l.a.createElement(y.a,{className:e.root},l.a.createElement(S.a,{avatar:l.a.createElement(T.a,{"aria-label":"recipe",className:e.avatar},"R"),action:l.a.createElement(j.a,{"aria-label":"settings"},l.a.createElement(V.a,null)),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),l.a.createElement(w.a,{className:e.media,image:"https://source.unsplash.com/1600x900/?code,sweets",title:"Paella dish"}),l.a.createElement(O.a,null,l.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),l.a.createElement(_.a,{disableSpacing:!0},l.a.createElement(j.a,{"aria-label":"add to favorites"},l.a.createElement(P.a,null)),l.a.createElement(j.a,{"aria-label":"share"},l.a.createElement(F.a,null)),l.a.createElement(j.a,{className:Object(k.a)(e.expand,Object(N.a)({},e.expandOpen,n)),onClick:c,"aria-expanded":n,"aria-label":"show more"},l.a.createElement(L.a,null))),l.a.createElement(C.a,{in:n,timeout:"auto",unmountOnExit:!0},l.a.createElement(O.a,null)))))),l.a.createElement(W.a,{item:!0,xs:12,sm:4},l.a.createElement(H.a,null,l.a.createElement(B.a,{width:"100%",height:500},l.a.createElement(y.a,{className:e.root},l.a.createElement(S.a,{avatar:l.a.createElement(T.a,{"aria-label":"recipe",className:e.avatar},"R"),action:l.a.createElement(j.a,{"aria-label":"settings"},l.a.createElement(V.a,null)),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),l.a.createElement(w.a,{className:e.media,image:"https://source.unsplash.com/1600x900/?code,food",title:"Paella dish"}),l.a.createElement(O.a,null,l.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),l.a.createElement(_.a,{disableSpacing:!0},l.a.createElement(j.a,{"aria-label":"add to favorites"},l.a.createElement(P.a,null)),l.a.createElement(j.a,{"aria-label":"share"},l.a.createElement(F.a,null)),l.a.createElement(j.a,{className:Object(k.a)(e.expand,Object(N.a)({},e.expandOpen,n)),onClick:c,"aria-expanded":n,"aria-label":"show more"},l.a.createElement(L.a,null))),l.a.createElement(C.a,{in:n,timeout:"auto",unmountOnExit:!0},l.a.createElement(O.a,null))))))))))}function K(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"products"},"PRODUCTS"),l.a.createElement(X,null))}function q(){return l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var Q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(E,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",exact:!0,component:f}),l.a.createElement(v.a,{path:"/products",component:K}),l.a.createElement(v.a,{path:"/services",component:g}),l.a.createElement(v.a,{path:"/sign-up",component:q}))))};c.a.render(l.a.createElement(Q,null),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e64938d9.chunk.js.map