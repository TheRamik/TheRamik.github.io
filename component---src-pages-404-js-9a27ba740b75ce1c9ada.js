(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(161),o=a(163);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},155:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},158:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,a){"use strict";var n=a(155),r=a(4),i=a.n(r),o=a(0),l=a.n(o),c=a(172),s=a.n(c),u={color:"white",display:"inline-block",margin:"0 0.5rem",padding:"0.25rem",textDecoration:"none"},m=function(e){var t=e.children,a=e.to;return l.a.createElement(n.a,{to:a,style:u},t)},d=a(157),p=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"#333",textAlign:"center"}},l.a.createElement("div",{style:{margin:"0 auto",padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",null,l.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),l.a.createElement(s.a,{pinStart:90,style:{webkitTransition:"all .5s ease-in-out",mozTransition:"all .5s ease-in-out",oTransition:"all .5s ease-in-out",transition:"all .5s ease-in-out",background:"#333",marginBottom:"1.45rem",textAlign:"center"}},l.a.createElement(m,{to:"/about-me/"},l.a.createElement(d.d,null)," ABOUT ME"),l.a.createElement(m,{to:"/blog/"},l.a.createElement(d.g,null)," BLOG"),l.a.createElement(m,{to:"/projects/"},l.a.createElement(d.e,null)," PROJECTS"),l.a.createElement(m,{to:"/hobbies/"},l.a.createElement(d.b,null)," HOBBIES"),l.a.createElement(m,{to:"/resume/"},l.a.createElement(d.a,null)," RESUME"))))};p.propTypes={siteTitle:i.a.string},p.defaultProps={siteTitle:""};t.a=p},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i={color:"white",display:"inline-block",margin:"0 0.5rem",padding:"0.25rem",textDecoration:"none",textAlign:"center"},o=function(e){var t=e.children,a=e.href,n=e.title;return r.a.createElement("a",{href:a,style:i,title:n,target:"_blank",rel:"noopener noreferrer"},t)},l=a(157);t.a=function(e){var t=e.siteAuthor;return r.a.createElement("footer",{style:{textAlign:"center"}},r.a.createElement("div",{style:{background:"#333",marginTop:"1.45rem",marginBottom:"1.45rem",margin:"0 auto",maxWidth:2e3,padding:"1.45rem 1.0875rem"}},r.a.createElement(o,{href:"https://www.linkedin.com/in/rickytham",title:"LinkedIn"},r.a.createElement(l.f,{size:28})),r.a.createElement(o,{href:"https://github.com/TheRamik/",title:"Github"},r.a.createElement(l.c,{size:28}))),r.a.createElement("div",{style:{marginTop:"1.45rem",marginBottom:"1.45rem"}},"Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org",title:"GatsbyJS",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),r.a.createElement("p",null,"Created by ",t," © ",(new Date).getFullYear()," ")))}},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(155),s=a(159),u=a(160),m=(a(173),a(167)),d=a.n(m),p=function(e){var t=e.children;return i.a.createElement(c.b,{query:"4293929885",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:"1.45rem",marginBottom:"1.45rem"}},i.a.createElement("main",null,t)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:d.a.center},i.a.createElement(c.a,{to:"/"},"Go back to the homepage")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(u.a,{siteAuthor:e.site.siteMetadata.author}))},data:n})};p.propTypes={children:l.a.node.isRequired},t.a=p},162:function(e){e.exports={data:{site:{siteMetadata:{title:"RICKY THAM",author:"Ricky Tham"}}}}},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(176),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"RICKY THAM",description:"My Web Portfolio",author:"Ricky Tham"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-9a27ba740b75ce1c9ada.js.map