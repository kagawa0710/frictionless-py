(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(8),r=(n(0),n(161)),i=["components"],l={title:"Contributing"},c={unversionedId:"development/contributing",id:"development/contributing",isDocsHomePage:!1,title:"Contributing",description:"We welcome contributions from anyone! Please read the following guidelines, and feel free to reach out to us if you have questions. Thanks for your interest in helping make Frictionless awesome!",source:"@site/../docs/development/contributing.md",slug:"/development/contributing",permalink:"/docs/development/contributing",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/development/contributing.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1626443714,formattedLastUpdatedAt:"7/16/2021",sidebar:"development",previous:{title:"Authors",permalink:"/docs/development/authors"},next:{title:"What's Next?",permalink:"/docs/development/whats-next"}},s=[{value:"General Guidelines",id:"general-guidelines",children:[]},{value:"Docs Contribution",id:"docs-contribution",children:[]},{value:"Code Contribution",id:"code-contribution",children:[]},{value:"Release Process",id:"release-process",children:[]}],b={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We welcome contributions from anyone! Please read the following guidelines, and feel free to reach out to us if you have questions. Thanks for your interest in helping make Frictionless awesome!"),Object(r.b)("h2",{id:"general-guidelines"},"General Guidelines"),Object(r.b)("p",null,"We use Github as a code and issues hosting platform. To report a bug or propose a new feature, please open an issue. For pull requests, we would ask you initially create an issue and then create a pull requests linked to this issue."),Object(r.b)("h2",{id:"docs-contribution"},"Docs Contribution"),Object(r.b)("p",null,"To contribute to the documentation, please find an article in the ",Object(r.b)("inlineCode",{parentName:"p"},"docs")," folder and update its contents. These sections can be edited manually:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs/guides")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs/tutorials"))),Object(r.b)("p",null,"Some documentation is auto-generated (for more information see ",Object(r.b)("inlineCode",{parentName:"p"},"docs/build.py"),"). Here is a list of auto-generated sections (excluding ",Object(r.b)("inlineCode",{parentName:"p"},"overview/whats-next")," docs):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs/references")," (from the codebase's docstrings)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs/development")," (from the repository root's docs)")),Object(r.b)("p",null,"You can test this documentation using ",Object(r.b)("a",{parentName:"p",href:"https://livemark.frictionlessdata.io"},"Livemark"),". Livemark in a sync mode executes Python and Bash codeblocks in Markdown and writes the results back. Here is a quick example:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Run ",Object(r.b)("inlineCode",{parentName:"p"},"livemark")," against an article only if you consider the article to be a trusted source.It will execute codeblocks marked by the ",Object(r.b)("inlineCode",{parentName:"p"},"script")," header.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"livemark sync docs/guides/basic-examples.md --diff # get the diff\nlivemark sync docs/guides/basic-examples.md --print # print the doc\nlivemark sync docs/guides/basic-examples.md # update inline\n")),Object(r.b)("p",null,"It's possible to run this documentation portal locally. This requires Node.js 12+ installed on your computer, and can be run with the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd portal\nnpm install\nnpm start\n")),Object(r.b)("p",null,"Alternatively, you can run the documentation portal with Docker. With\nboth Docker and Docker Compose installed on the system, first build the docker container with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker build --rm -t frictionless-docs .\n")),Object(r.b)("p",null,"then, every time you want to run the documentation portal locally, run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker-compose up\n")),Object(r.b)("p",null,"then open http://localhost:3000 on a web browser to see the portal."),Object(r.b)("p",null,"To update a reference in ",Object(r.b)("inlineCode",{parentName:"p"},"docs/references")," and some other auto-generated documents please update the codebase docstrings or root documents. For more information about auto-generated documentation see ",Object(r.b)("inlineCode",{parentName:"p"},"docs/build.py"),"."),Object(r.b)("h2",{id:"code-contribution"},"Code Contribution"),Object(r.b)("p",null,"Frictionless is a Python3.6+ framework, and it uses some common Python tools for the development process:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"testing: ",Object(r.b)("inlineCode",{parentName:"li"},"pytest")),Object(r.b)("li",{parentName:"ul"},"linting: ",Object(r.b)("inlineCode",{parentName:"li"},"pylama")),Object(r.b)("li",{parentName:"ul"},"formatting: ",Object(r.b)("inlineCode",{parentName:"li"},"black")),Object(r.b)("li",{parentName:"ul"},"type checking: ",Object(r.b)("inlineCode",{parentName:"li"},"mypy")," (under construction)")),Object(r.b)("p",null,"You also need ",Object(r.b)("inlineCode",{parentName:"p"},"git")," to work on the project, and ",Object(r.b)("inlineCode",{parentName:"p"},"make")," is recommended. After cloning the repository, we recommend creating a virtual environment and installing the dependencies by following this code:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"this will install a ",Object(r.b)("inlineCode",{parentName:"p"},"git commit")," hook running the tests")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'python3.8 -m venv .python\nsource .python/bin/activate\npip install wheel\nmake install\nalias "frictionless=python -m frictionless"\n')),Object(r.b)("p",null,"Then you can run various make commands:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make docs")," - build the docs"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make format")," - format source code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make install")," - install the dependencies (we did before)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make lint")," - lint the project"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make release")," - release a new version"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make test")," - run the tests"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"make test-ci")," - run the tests (including integration)")),Object(r.b)("p",null,"We also recommend running underlying commands like ",Object(r.b)("inlineCode",{parentName:"p"},"pytest")," or ",Object(r.b)("inlineCode",{parentName:"p"},"pylama")," to speed up the development process, though this is optional."),Object(r.b)("h2",{id:"release-process"},"Release Process"),Object(r.b)("p",null,"To release a new version:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"check that you have push access to the ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch"),Object(r.b)("li",{parentName:"ul"},"update ",Object(r.b)("inlineCode",{parentName:"li"},"frictionless/assets/VERSION")," following the SemVer standard"),Object(r.b)("li",{parentName:"ul"},"add changes to ",Object(r.b)("inlineCode",{parentName:"li"},"CHANGELOG.md")," if it's not a patch release (major or micro)"),Object(r.b)("li",{parentName:"ul"},"run ",Object(r.b)("inlineCode",{parentName:"li"},"make release")," which create a release commit and tag and push it to Github"),Object(r.b)("li",{parentName:"ul"},"an actual release will happen on the Travis CI platform after running the tests")))}u.isMDXComponent=!0}}]);