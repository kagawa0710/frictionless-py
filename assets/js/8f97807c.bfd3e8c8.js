(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(161)),a=["components"],s={title:"Working in Python"},c={unversionedId:"tutorials/working-in-python",id:"tutorials/working-in-python",isDocsHomePage:!1,title:"Working in Python",description:"Frictionless Framework is a Python framework so it's naturally to be used within a Python programming environment.",source:"@site/../docs/tutorials/working-in-python.md",slug:"/tutorials/working-in-python",permalink:"/docs/tutorials/working-in-python",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/tutorials/working-in-python.md",version:"current",lastUpdatedBy:"Emmanuel Lopez",lastUpdatedAt:1650091226,formattedLastUpdatedAt:"4/16/2022",sidebar:"tutorials",previous:{title:"Tutorials Overview",permalink:"/docs/tutorials/tutorials-overview"},next:{title:"Working with CLI",permalink:"/docs/tutorials/working-with-cli"}},l=[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[{value:"Core",id:"core",children:[]},{value:"Plugins",id:"plugins",children:[]}]},{value:"Debug",id:"debug",children:[]},{value:"Errors",id:"errors",children:[]},{value:"Hints",id:"hints",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Frictionless Framework is a Python framework so it's naturally to be used within a Python programming environment."),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"To install the package please follow the ",Object(i.b)("a",{parentName:"p",href:"/docs/guides/quick-start"},"Quick Start")," guide."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("p",null,"The package in Python is exposed as a single module called ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless"),"."),Object(i.b)("h3",{id:"core"},"Core"),Object(i.b)("p",null,"After installation you can import and use it to access the core functionality:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"import frictionless\n\nfrictionless.Schema\nfrictionless.Resource\nfrictionless.Package\n# etc\n")),Object(i.b)("p",null,"Another option is to used named import:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Schema, Resource, Package\n\nSchema\nResource\nPackage\n# etc\n")),Object(i.b)("p",null,"Frictionless has a reach API including high-level functions and classes. You can find a full list in the ",Object(i.b)("a",{parentName:"p",href:"/docs/references/api-reference"},"API Reference"),"."),Object(i.b)("h3",{id:"plugins"},"Plugins"),Object(i.b)("p",null,"Frictionless ships with more than dozen builtin plugins. Usually you don't need to use them directly as it will be inferred and handled automatically, but, in some cases, you need to import their classes. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless.plugins.csv import CsvDialect\n\nCsvDialect\n")),Object(i.b)("h2",{id:"debug"},"Debug"),Object(i.b)("p",null,"All the metadata classes inherit from the ",Object(i.b)("inlineCode",{parentName:"p"},"dict")," type so you can just print it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nresource = Resource('data/table.csv')\nresource.infer()\npprint(resource)\n# Prints metadata dict i.e. path, schema, etc\n")),Object(i.b)("p",null,"For tabular resource you can also use the ",Object(i.b)("inlineCode",{parentName:"p"},"resource.to_view()")," function for pretty-printing tables:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nresource = Resource('data/table.csv')\npprint(resource.to_view())\n# Prints a pretty-formatted data table\npprint(resource.read_rows())\n# Of course, you can always just use `resource.read_rows()` or other reading functions:\n")),Object(i.b)("h2",{id:"errors"},"Errors"),Object(i.b)("p",null,"Frictionless uses a unifed error tree but there is only one exception ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless.FrictionlessException")," so you need to catch this one and analyze an attached error:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource, FrictionlessException\n\ntry:\n    resource = Resource('bad.csv')\nexcept FrictionlessException as exception:\n    pprint(exception.error)\n    # Prints the SchemaError metadata in this case\n")),Object(i.b)("p",null,"If you got some other exception using the Frictionless codebase it might be a bug so please report it to the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py/issues"},"Issue Tracker"),"."),Object(i.b)("h2",{id:"hints"},"Hints"),Object(i.b)("p",null,"Working with Frictionless in some modern Code Editor or interactive Notebook you can use code hints/completion capability. For example, there are many transform steps available, to find a right one just start typing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import steps\n\nsteps.table_<TAB>\n# Code completion will show the list of available table steps\n")),Object(i.b)("p",null,"The same works for class' and functions' arguments:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Resource\n\nResource('data/table.csv, <TAB>\n# Code completion will show the list of available arguments steps\n")))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);