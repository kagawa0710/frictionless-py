(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||l;return n?i.a.createElement(d,s(s({ref:t},c),{},{components:n})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},177:function(e,t,n){"use strict";var a=n(0),i=n(178);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},178:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},189:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(177),r=n(163),s=n(59),o=n.n(s);var c=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(l.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,g=Object(a.useState)(s),v=g[0],O=g[1],j=a.Children.toArray(e.children),y=[];if(null!=u){var N=h[u];null!=N&&N!==v&&b.some((function(e){return e.value===N}))&&O(N)}var w=function(e){var t=e.target,n=y.indexOf(t),a=j[n].props.value;O(a),null!=u&&(f(u,a),setTimeout((function(){var e,n,a,i,l,r,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,l=e.right,r=window,s=r.innerHeight,c=r.innerWidth,n>=0&&l<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.a.tabItemActive),setTimeout((function(){return t.classList.remove(o.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},190:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),l=(n(0),n(161)),r=n(189),s=n(190),o=["components"],c={title:"Quick Start",prepare:["cp data/invalid.csv invalid.csv"],cleanup:["rm invalid.csv"]},p={unversionedId:"guides/quick-start",id:"guides/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Let's get started with Frictionless! We will learn how to install and use the framework. The simple example below will showcase the framework's basic functionality. For an introduction to the concepts behind the Frictionless Framework, please read the Frictionless Introduction.",source:"@site/../docs/guides/quick-start.md",slug:"/guides/quick-start",permalink:"/docs/guides/quick-start",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/quick-start.md",version:"current",lastUpdatedBy:"Augusto Herrmann",lastUpdatedAt:1654752772,formattedLastUpdatedAt:"6/9/2022",sidebar:"guides",previous:{title:"Introduction",permalink:"/docs/guides/introduction"},next:{title:"Basic Examples",permalink:"/docs/guides/basic-examples"}},b=[{value:"Installation",id:"installation",children:[{value:"Troubleshooting",id:"troubleshooting",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],u={toc:b};function m(e){var t=e.components,n=Object(i.a)(e,o);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Let's get started with Frictionless! We will learn how to install and use the framework. The simple example below will showcase the framework's basic functionality. For an introduction to the concepts behind the Frictionless Framework, please read the ",Object(l.b)("a",{parentName:"p",href:"/docs/guides/introduction"},"Frictionless Introduction"),"."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The framework requires Python3.6+. Versioning follows the ",Object(l.b)("a",{parentName:"p",href:"https://semver.org/"},"SemVer Standard"),".")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"pip install frictionless\npip install frictionless[sql] # to install a core plugin (optional)\npip install 'frictionless[sql]' # for zsh shell\n")),Object(l.b)("p",null,"The framework supports CSV, Excel, and JSON formats by default. The second command above installs a plugin for SQL support. There are plugins for SQL, Pandas, HTML, and others (check the ",Object(l.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/references/plugins-reference"},"list of Frictionless Framework plugins and their status"),"). Usually, you don't need to think about it in advance\u2013frictionless will display a useful error message about a missing plugin with installation instructions."),Object(l.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(l.b)("p",null,"Did you have an error installing Frictionless? Here are some dependencies and common errors:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pip: command not found"),". Please see the ",Object(l.b)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/installing/"},"pip docs")," for help installing pip."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.python.org/3/using/mac.html"},"Installing Python help (Mac)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.python.org/3/using/windows.html"},"Installing Python help (Windows)"))),Object(l.b)("p",null,"Still having a problem? Ask us for help on our ",Object(l.b)("a",{parentName:"p",href:"https://discord.com/invite/j9DNFNw"},"Discord")," chat or open an ",Object(l.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/frictionless-py/issues"},"issue"),". We're happy to help!"),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"The framework can be used:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"as a Python library"),Object(l.b)("li",{parentName:"ul"},"as a command-line interface"),Object(l.b)("li",{parentName:"ul"},"as a restful API server (for advanced use cases)")),Object(l.b)("p",null,"For instance, all the examples below do the same thing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import extract\nrows = extract('data/table.csv')\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless extract data/table.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text",metastring:'title="API"',title:'"API"'},"[POST] /extract {\"source': 'data/table.csv\"}\n")),Object(l.b)("p",null,"All these interfaces are as much alike as possible regarding naming conventions and the way you interact with them. Usually, it's straightforward to translate, for instance, Python code to a command-line call. Frictionless provides code completion for Python and the command-line, which should help to get useful hints in real time. You can find the API reference ",Object(l.b)("a",{parentName:"p",href:"/docs/references/api-reference"},"here"),"."),Object(l.b)("p",null,"Arguments conform to the following naming convention:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"for Python interfaces, they are snake_cased, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"missing_values")),Object(l.b)("li",{parentName:"ul"},"within dictionaries or JSON objects, they are camelCased, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"missingValues")),Object(l.b)("li",{parentName:"ul"},"in the command line, they use dashes, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"--missing-values"))),Object(l.b)("p",null,"To get the documentation for a command-line interface just use the ",Object(l.b)("inlineCode",{parentName:"p"},"--help")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless --help\nfrictionless describe --help\nfrictionless extract --help\nfrictionless validate --help\nfrictionless transform --help\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Download ",Object(l.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/invalid.csv"},Object(l.b)("inlineCode",{parentName:"a"},"invalid.csv")),' to reproduce the examples (right-click and "Save link as"). For more examples, please take a look at the ',Object(l.b)("a",{parentName:"p",href:"/docs/guides/basic-examples"},"Basic Examples")," article.")),Object(l.b)("p",null,"We will take a very messy data file:"),Object(l.b)(r.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"cat invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="invalid.csv"',title:'"invalid.csv"'},"id,name,,name\n1,english\n1,english\n\n2,german,1,2,3\n"))),Object(l.b)(s.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"with open('invalid.csv') as file:\n    print(file.read())\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="invalid.csv"',title:'"invalid.csv"'},"id,name,,name\n1,english\n1,english\n\n2,german,1,2,3\n")))),Object(l.b)("p",null,"First of all, let's use ",Object(l.b)("inlineCode",{parentName:"p"},"describe")," to infer the metadata directly from the tabular data. We can then edit and save it to provide others with useful information about the data:"),Object(l.b)(r.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"frictionless describe invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# --------\n# metadata: invalid.csv\n# --------\n\nencoding: utf-8\nformat: csv\nhashing: md5\nname: invalid\npath: invalid.csv\nprofile: tabular-data-resource\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: name\n      type: string\n    - name: field3\n      type: integer\n    - name: name2\n      type: integer\nscheme: file\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This output is in ",Object(l.b)("a",{parentName:"p",href:"https://yaml.org/"},"YAML"),", it is a default Frictionless output format."))),Object(l.b)(s.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"from pprint import pprint\nfrom frictionless import describe\n\nresource = describe('invalid.csv')\npprint(resource)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"{'encoding': 'utf-8',\n 'format': 'csv',\n 'hashing': 'md5',\n 'name': 'invalid',\n 'path': 'invalid.csv',\n 'profile': 'tabular-data-resource',\n 'schema': {'fields': [{'name': 'id', 'type': 'integer'},\n                       {'name': 'name', 'type': 'string'},\n                       {'name': 'field3', 'type': 'integer'},\n                       {'name': 'name2', 'type': 'integer'}]},\n 'scheme': 'file'}\n")))),Object(l.b)("p",null,"Now that we have inferred a table schema from the data file (e.g., expected format of the table, expected type of each value in a column, etc.), we can use ",Object(l.b)("inlineCode",{parentName:"p"},"extract")," to read the normalized tabular data from the source CSV file:"),Object(l.b)(r.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"frictionless extract invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# ----\n# data: invalid.csv\n# ----\n\n==  =======  ======  =====\nid  name     field3  name2\n==  =======  ======  =====\n 1  english\n 1  english\n\n 2  german        1      2\n==  =======  ======  =====\n"))),Object(l.b)(s.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"from pprint import pprint\nfrom frictionless import extract\n\nrows = extract('invalid.csv')\npprint(rows)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[{'id': 1, 'name': 'english', 'field3': None, 'name2': None},\n {'id': 1, 'name': 'english', 'field3': None, 'name2': None},\n {'id': None, 'name': None, 'field3': None, 'name2': None},\n {'id': 2, 'name': 'german', 'field3': 1, 'name2': 2}]\n")))),Object(l.b)("p",null,"Last but not least, let's get a validation report. This report will help us to identify and fix all the errors present in the tabular data, as comprehensive information is provided for every problem:"),Object(l.b)(r.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate invalid.csv\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'# -------\n# invalid: invalid.csv\n# -------\n\n===  =====  ===============  ====================================================================================\nrow  field  code             message\n===  =====  ===============  ====================================================================================\n         3  blank-label      Label in the header in field at position "3" is blank\n         4  duplicate-label  Label "name" in the header at position "4" is duplicated to a label: at position "2"\n  2      3  missing-cell     Row at position "2" has a missing cell in field "field3" at position "3"\n  2      4  missing-cell     Row at position "2" has a missing cell in field "name2" at position "4"\n  3      3  missing-cell     Row at position "3" has a missing cell in field "field3" at position "3"\n  3      4  missing-cell     Row at position "3" has a missing cell in field "name2" at position "4"\n  4         blank-row        Row at position "4" is completely blank\n  5      5  extra-cell       Row at position "5" has an extra value in field at position "5"\n===  =====  ===============  ====================================================================================\n'))),Object(l.b)(s.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate(\'invalid.csv\')\npprint(report.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"[[None, 3, 'blank-label'],\n [None, 4, 'duplicate-label'],\n [2, 3, 'missing-cell'],\n [2, 4, 'missing-cell'],\n [3, 3, 'missing-cell'],\n [3, 4, 'missing-cell'],\n [4, None, 'blank-row'],\n [5, 5, 'extra-cell']]\n")))),Object(l.b)("p",null,"Now that we have all this information:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"we can clean up the table to ensure the data quality"),Object(l.b)("li",{parentName:"ul"},"we can use the metadata to describe and share the dataset"),Object(l.b)("li",{parentName:"ul"},"we can include the validation into our workflow to guarantee the validity"),Object(l.b)("li",{parentName:"ul"},"and much more: don't hesitate and read the following sections of the documentation!")))}m.isMDXComponent=!0}}]);