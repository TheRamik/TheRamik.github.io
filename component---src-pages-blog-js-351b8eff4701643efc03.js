(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);var n=a(205),r=a(0),i=a.n(r),l=a(155),o=a(161),c=a(163),s=a(206),m=a.n(s);t.default=function(){var e=n.data;return i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Blog"}),i.a.createElement("h1",null,"Blog"),i.a.createElement("hr",null),i.a.createElement("ol",{className:m.a.posts},e.allMarkdownRemark.edges.map(function(e){return i.a.createElement("li",{className:m.a.post},i.a.createElement(l.a,{to:"/blog/"+e.node.fields.slug},i.a.createElement("h2",null,e.node.frontmatter.title),i.a.createElement("p",null,e.node.frontmatter.date)))})))}},155:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(156);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},156:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},158:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,a){"use strict";var n=a(155),r=a(4),i=a.n(r),l=a(0),o=a.n(l),c=a(172),s=a.n(c),m={color:"white",display:"inline-block",margin:"0 0.5rem",padding:"0.25rem",textDecoration:"none"},d=function(e){var t=e.children,a=e.to;return o.a.createElement(n.a,{to:a,style:m},t)},u=a(157),p=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"#333",textAlign:"center"}},o.a.createElement("div",{style:{margin:"0 auto",padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",null,o.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement(s.a,{pinStart:90,style:{webkitTransition:"all .5s ease-in-out",mozTransition:"all .5s ease-in-out",oTransition:"all .5s ease-in-out",transition:"all .5s ease-in-out",background:"#333",marginBottom:"1.45rem",textAlign:"center"}},o.a.createElement(d,{to:"/about-me/"},o.a.createElement(u.d,null)," ABOUT ME"),o.a.createElement(d,{to:"/blog/"},o.a.createElement(u.g,null)," BLOG"),o.a.createElement(d,{to:"/projects/"},o.a.createElement(u.e,null)," PROJECTS"),o.a.createElement(d,{to:"/hobbies/"},o.a.createElement(u.b,null)," HOBBIES"),o.a.createElement(d,{to:"/resume/"},o.a.createElement(u.a,null)," RESUME"))))};p.propTypes={siteTitle:i.a.string},p.defaultProps={siteTitle:""};t.a=p},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i={color:"white",display:"inline-block",margin:"0 0.5rem",padding:"0.25rem",textDecoration:"none",textAlign:"center"},l=function(e){var t=e.children,a=e.href,n=e.title;return r.a.createElement("a",{href:a,style:i,title:n,target:"_blank",rel:"noopener noreferrer"},t)},o=a(157);t.a=function(e){var t=e.siteAuthor;return r.a.createElement("footer",{style:{textAlign:"center"}},r.a.createElement("div",{style:{background:"#333",marginTop:"1.45rem",marginBottom:"1.45rem",margin:"0 auto",maxWidth:2e3,padding:"1.45rem 1.0875rem"}},r.a.createElement(l,{href:"https://www.linkedin.com/in/rickytham",title:"LinkedIn"},r.a.createElement(o.f,{size:28})),r.a.createElement(l,{href:"https://github.com/TheRamik/",title:"Github"},r.a.createElement(o.c,{size:28}))),r.a.createElement("div",{style:{marginTop:"1.45rem",marginBottom:"1.45rem"}},"Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org",title:"GatsbyJS",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),r.a.createElement("p",null,"Created by ",t," © ",(new Date).getFullYear()," ")))}},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(155),s=a(159),m=a(160),d=(a(173),a(167)),u=a.n(d),p=function(e){var t=e.children;return i.a.createElement(c.b,{query:"4293929885",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:"1.45rem",marginBottom:"1.45rem"}},i.a.createElement("main",null,t)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:u.a.center},i.a.createElement(c.a,{to:"/"},"Go back to the homepage")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(m.a,{siteAuthor:e.site.siteMetadata.author}))},data:n})};p.propTypes={children:o.a.node.isRequired},t.a=p},162:function(e){e.exports={data:{site:{siteMetadata:{title:"RICKY THAM",author:"Ricky Tham"}}}}},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(176),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},164:function(e){e.exports={data:{site:{siteMetadata:{title:"RICKY THAM",description:"My Web Portfolio",author:"Ricky Tham"}}}}},205:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Learning Modern Web Application on AWS",date:"2019-05-10"},fields:{slug:"aws-mysfits"}}},{node:{frontmatter:{title:"Creating the Great Gatsby Project",date:"2019-04-04"},fields:{slug:"gatsby"}}},{node:{frontmatter:{title:"React",date:"2019-04-02"},fields:{slug:"react"}}},{node:{frontmatter:{title:"Disneyland 2017",date:"2017-12-20"},fields:{slug:"disney"}}},{node:{frontmatter:{title:"NorCal Trip 2017",date:"2017-12-09"},fields:{slug:"sfChinatown"}}},{node:{frontmatter:{title:"Canada Trip 2015",date:"2015-09-13"},fields:{slug:"canadaTrip"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-351b8eff4701643efc03.js.map