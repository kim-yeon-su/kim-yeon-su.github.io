"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{8678:function(e,t,n){var a=n(7294);n(1082);t.Z=function(e){e.location,e.title;var t=e.children;return a.createElement("div",{className:"global-wrapper"},a.createElement("main",null,t))}},9357:function(e,t,n){var a=n(7294),r=n(1082),l=function(e){var t,n,l,i=e.description,c=(e.lang,e.title),o=e.children,m=(0,r.useStaticQuery)("2246895633").site,s=i||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?c+" | "+d:c),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter.username)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:s}),o)};l.defaultProps={description:""},t.Z=l},4982:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(7294),r=n(1082),l=n(8678),i=n(9357),c=function(e){var t=e.data.markdownRemark;return a.createElement(i.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=function(e){var t,n=e.data,i=n.previous,c=n.next,o=n.site,m=n.markdownRemark,s=e.location,d=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(l.Z,{location:s,title:d},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},m.frontmatter.title),a.createElement("p",null,m.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),a.createElement("hr",null)),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,i&&a.createElement(r.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),a.createElement("li",null,c&&a.createElement(r.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-db284f2bdfd571ce4acc.js.map