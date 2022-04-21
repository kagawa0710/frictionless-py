(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{161:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,b=s["".concat(o,".").concat(m)]||s[m]||d[m]||a;return t?i.a.createElement(b,p(p({ref:n},c),{},{components:t})):i.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(161)),o=["components"],p={title:"Pipeline Guide"},l={unversionedId:"guides/framework/pipeline-guide",id:"guides/framework/pipeline-guide",isDocsHomePage:!1,title:"Pipeline Guide",description:"A pipeline is a metadata object having one of these types:",source:"@site/../docs/guides/framework/pipeline-guide.md",slug:"/guides/framework/pipeline-guide",permalink:"/docs/guides/framework/pipeline-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/pipeline-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1650525662,formattedLastUpdatedAt:"4/21/2022",sidebar:"guides",previous:{title:"Report Guide",permalink:"/docs/guides/framework/report-guide"},next:{title:"Status Guide",permalink:"/docs/guides/framework/status-guide"}},c=[{value:"Creating Pipeline",id:"creating-pipeline",children:[]},{value:"Running Pipeline",id:"running-pipeline",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A pipeline is a metadata object having one of these types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"resource"),Object(a.b)("li",{parentName:"ul"},"package"),Object(a.b)("li",{parentName:"ul"},"others (depending on custom plugins you use)")),Object(a.b)("h2",{id:"creating-pipeline"},"Creating Pipeline"),Object(a.b)("p",null,"For resource and package types it's basically the same functionality as we have seen above but written declaratively. So let's just run the same resource transformation as we did in the ",Object(a.b)("inlineCode",{parentName:"p"},"Tranforming Resource")," section:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Pipeline, transform, steps\n\npipeline = Pipeline({\n    'tasks': [\n        {\n            'type': 'resource',\n            'source': {'path': 'data/transform.csv'},\n            'steps': [\n                {'code': 'table-normalize'},\n                {'code': 'table-melt', 'fieldName': 'name'}\n            ]\n        }\n    ]\n})\n")),Object(a.b)("h2",{id:"running-pipeline"},"Running Pipeline"),Object(a.b)("p",null,"Let's run this pipeline:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"status = transform(pipeline)\npprint(status.task.target.schema)\npprint(status.task.target.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"{'fields': [{'name': 'name', 'type': 'string'},\n            {'name': 'variable'},\n            {'name': 'value'}]}\n[{'name': 'germany', 'variable': 'id', 'value': 1},\n {'name': 'germany', 'variable': 'population', 'value': 83},\n {'name': 'france', 'variable': 'id', 'value': 2},\n {'name': 'france', 'variable': 'population', 'value': 66},\n {'name': 'spain', 'variable': 'id', 'value': 3},\n {'name': 'spain', 'variable': 'population', 'value': 47}]\n")))}s.isMDXComponent=!0}}]);