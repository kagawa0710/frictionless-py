(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(161)),i=["components"],c={title:"Pandas Tutorial",sidebar_label:"Pandas"},l={unversionedId:"tutorials/formats/pandas-tutorial",id:"tutorials/formats/pandas-tutorial",isDocsHomePage:!1,title:"Pandas Tutorial",description:"This functionality requires an experimental pandas plugin. Read More",source:"@site/../docs/tutorials/formats/pandas-tutorial.md",slug:"/tutorials/formats/pandas-tutorial",permalink:"/docs/tutorials/formats/pandas-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/tutorials/formats/pandas-tutorial.md",version:"current",lastUpdatedBy:"Edgar Z. Alvarenga",lastUpdatedAt:1653653806,formattedLastUpdatedAt:"5/27/2022",sidebar_label:"Pandas",sidebar:"tutorials",previous:{title:"ODS Tutorial",permalink:"/docs/tutorials/formats/ods-tutorial"},next:{title:"SPSS Tutorial",permalink:"/docs/tutorials/formats/spss-tutorial"}},s=[{value:"Reading Data",id:"reading-data",children:[]},{value:"Writing Data",id:"writing-data",children:[]},{value:"Configuring Data",id:"configuring-data",children:[]}],u={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(o.b)("inlineCode",{parentName:"p"},"pandas")," plugin. ",Object(o.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(o.b)("p",null,"Frictionless supports reading and writing Pandas dataframes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"pip install frictionless[pandas]\npip install 'frictionless[pandas]' # for zsh shell\n")),Object(o.b)("h2",{id:"reading-data"},"Reading Data"),Object(o.b)("p",null,"You can read a Pandas dataframe:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Resource\n\nresource = Resource(df)\npprint(resource.read_rows())\n")),Object(o.b)("h2",{id:"writing-data"},"Writing Data"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(o.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(o.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(o.b)("p",null,"You can write a dataset to Pandas:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource('data/table.csv')\ndf = resource.to_pandas()\n")),Object(o.b)("h2",{id:"configuring-data"},"Configuring Data"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"PandasDialect"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#pandas"},"Pandas Dialect"))))}p.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return a?n.a.createElement(f,c(c({ref:t},s),{},{components:a})):n.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);