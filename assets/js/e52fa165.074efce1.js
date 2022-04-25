(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return f}));var r=a(3),n=a(7),i=(a(0),a(161)),o=["components"],l={title:"Layout Guide"},s={unversionedId:"guides/framework/layout-guide",id:"guides/framework/layout-guide",isDocsHomePage:!1,title:"Layout Guide",description:"The Layout concept give us an ability to manage table header and pick/skip arbitrary fields and rows from the raw data stream.",source:"@site/../docs/guides/framework/layout-guide.md",slug:"/guides/framework/layout-guide",permalink:"/docs/guides/framework/layout-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/layout-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1650870496,formattedLastUpdatedAt:"4/25/2022",sidebar:"guides",previous:{title:"Field Guide",permalink:"/docs/guides/framework/field-guide"},next:{title:"Detector Guide",permalink:"/docs/guides/framework/detector-guide"}},c=[{value:"Layout Usage",id:"layout-usage",children:[]},{value:"Layout Options",id:"layout-options",children:[{value:"Header",id:"header",children:[]},{value:"Header Rows",id:"header-rows",children:[]},{value:"Header Join",id:"header-join",children:[]},{value:"Header Case",id:"header-case",children:[]},{value:"Pick/Skip Fields",id:"pickskip-fields",children:[]},{value:"Limit/Offset Fields",id:"limitoffset-fields",children:[]},{value:"Pick/Skip Rows",id:"pickskip-rows",children:[]},{value:"Limit/Offset Rows",id:"limitoffset-rows",children:[]}]}],d={toc:c};function f(e){var t=e.components,a=Object(n.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Layout concept give us an ability to manage table header and pick/skip arbitrary fields and rows from the raw data stream."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"cat data/matrix.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csv"},"f1,f2,f3,f4\n11,12,13,14\n21,22,23,24\n31,32,33,34\n41,42,43,44\n")),Object(i.b)("h2",{id:"layout-usage"},"Layout Usage"),Object(i.b)("p",null,"The Layout class instance are accepted by many classes and functions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Resource"),Object(i.b)("li",{parentName:"ul"},"describe"),Object(i.b)("li",{parentName:"ul"},"extract"),Object(i.b)("li",{parentName:"ul"},"validate"),Object(i.b)("li",{parentName:"ul"},"and more")),Object(i.b)("p",null,"You just need to create a Layout instance using desired options and pass to the classed and function from above."),Object(i.b)("h2",{id:"layout-options"},"Layout Options"),Object(i.b)("p",null,"Let's list all the available Layout options with simple usage examples:"),Object(i.b)("h3",{id:"header"},"Header"),Object(i.b)("p",null,"It's a boolean flag which defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"True")," indicating whether the data has a header row or not. In the following example the header row will be treated as a data row:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource, Layout\n\nlayout = Layout(header=False)\nwith Resource('data/capital-3.csv', layout=layout) as resource:\n  pprint(resource.header.labels)\n  pprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[]\n[{'field1': 'id', 'field2': 'name'},\n {'field1': '1', 'field2': 'London'},\n {'field1': '2', 'field2': 'Berlin'},\n {'field1': '3', 'field2': 'Paris'},\n {'field1': '4', 'field2': 'Madrid'},\n {'field1': '5', 'field2': 'Rome'}]\n")),Object(i.b)("h3",{id:"header-rows"},"Header Rows"),Object(i.b)("p",null,"If header is ",Object(i.b)("inlineCode",{parentName:"p"},"True")," which is default, this parameters indicates where to find the header row or header rows for a multiline header. Let's see on example how the first two data rows can be treated as a part of a header:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource, Layout\n\nlayout = Layout(header_rows=[1, 2, 3])\nwith Resource('data/capital-3.csv', layout=layout) as resource:\n  pprint(resource.header)\n  pprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['id 1 2', 'name London Berlin']\n[{'id 1 2': 3, 'name London Berlin': 'Paris'},\n {'id 1 2': 4, 'name London Berlin': 'Madrid'},\n {'id 1 2': 5, 'name London Berlin': 'Rome'}]\n")),Object(i.b)("h3",{id:"header-join"},"Header Join"),Object(i.b)("p",null,"If there are multiple header rows which is managed by ",Object(i.b)("inlineCode",{parentName:"p"},"header_rows")," parameter, we can set a string to be a separator for a header's cell join operation. Usually it's very handy for some \"fancy\" Excel files. For the sake of simplicity, we will show on a CSV file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource, Layout\n\nlayout = Layout(header_rows=[1, 2, 3], header_join='/')\nwith Resource('data/capital-3.csv', layout=layout) as resource:\n  pprint(resource.header)\n  pprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['id/1/2', 'name/London/Berlin']\n[{'id/1/2': 3, 'name/London/Berlin': 'Paris'},\n {'id/1/2': 4, 'name/London/Berlin': 'Madrid'},\n {'id/1/2': 5, 'name/London/Berlin': 'Rome'}]\n")),Object(i.b)("h3",{id:"header-case"},"Header Case"),Object(i.b)("p",null,"By default a header is validated in a case sensitive mode. To disable this behaviour we can set the ",Object(i.b)("inlineCode",{parentName:"p"},"header_case")," parameter to ",Object(i.b)("inlineCode",{parentName:"p"},"False"),". This option is accepted by any Layout and a dialect can be passed to ",Object(i.b)("inlineCode",{parentName:"p"},"extract"),", ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," and other functions. Please note that it doesn't affect a resulting header it only affects how it's validated:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource, Schema, Field, Layout\n\nlayout = Layout(header_case=False)\nschema = Schema(fields=[Field(name=\"ID\"), Field(name=\"NAME\")])\nwith Resource('data/capital-3.csv', layout=layout, schema=schema) as resource:\n  print(f'Header: {resource.header}')\n  print(f'Valid: {resource.header.valid}')  # without \"header_case\" it will have 2 errors\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Header: ['ID', 'NAME']\nValid: True\n")),Object(i.b)("h3",{id:"pickskip-fields"},"Pick/Skip Fields"),Object(i.b)("p",null,"We can pick and skip arbitrary fields based on a header row. These options accept a list of field numbers, a list of strings or a regex to match. All the queries below do the same thing for this file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(pick_fields=[2, 3])))\nprint(extract('data/matrix.csv', layout=Layout(skip_fields=[1, 4])))\nprint(extract('data/matrix.csv', layout=Layout(pick_fields=['f2', 'f3'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_fields=['f1', 'f4'])))\nprint(extract('data/matrix.csv', layout=Layout(pick_fields=['<regex>f[23]'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_fields=['<regex>f[14]'])))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'f2': 12, 'f3': 13}, {'f2': 22, 'f3': 23}, {'f2': 32, 'f3': 33}, {'f2': 42, 'f3': 43}]\n[{'f2': 12, 'f3': 13}, {'f2': 22, 'f3': 23}, {'f2': 32, 'f3': 33}, {'f2': 42, 'f3': 43}]\n[{'f2': 12, 'f3': 13}, {'f2': 22, 'f3': 23}, {'f2': 32, 'f3': 33}, {'f2': 42, 'f3': 43}]\n[{'f2': 12, 'f3': 13}, {'f2': 22, 'f3': 23}, {'f2': 32, 'f3': 33}, {'f2': 42, 'f3': 43}]\n[{'f2': 12, 'f3': 13}, {'f2': 22, 'f3': 23}, {'f2': 32, 'f3': 33}, {'f2': 42, 'f3': 43}]\n[{'f2': 12, 'f3': 13}, {'f2': 22, 'f3': 23}, {'f2': 32, 'f3': 33}, {'f2': 42, 'f3': 43}]\n")),Object(i.b)("h3",{id:"limitoffset-fields"},"Limit/Offset Fields"),Object(i.b)("p",null,"There are two options that provide an ability to limit amount of fields similar to SQL's directives:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(limit_fields=2)))\nprint(extract('data/matrix.csv', layout=Layout(offset_fields=2)))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'f1': 11, 'f2': 12}, {'f1': 21, 'f2': 22}, {'f1': 31, 'f2': 32}, {'f1': 41, 'f2': 42}]\n[{'f3': 13, 'f4': 14}, {'f3': 23, 'f4': 24}, {'f3': 33, 'f4': 34}, {'f3': 43, 'f4': 44}]\n")),Object(i.b)("h3",{id:"pickskip-rows"},"Pick/Skip Rows"),Object(i.b)("p",null,"It's alike the field counterparts but it will be compared to the first cell of a row. All the queries below do the same thing for this file but take into account that when picking we need to also pick a header row. In addition, there is special value ",Object(i.b)("inlineCode",{parentName:"p"},"<blank>")," that matches a row if it's completely blank:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=[1, 3, 4])))\nprint(extract('data/matrix.csv', layout=Layout(skip_rows=[2, 5])))\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=['f1', '21', '31'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_rows=['11', '41'])))\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=['<regex>(f1|[23]1)'])))\nprint(extract('data/matrix.csv', layout=Layout(skip_rows=['<regex>[14]1'])))\nprint(extract('data/matrix.csv', layout=Layout(pick_rows=['<blank>'])))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'f1': 21, 'f2': 22, 'f3': 23, 'f4': 24}, {'f1': 31, 'f2': 32, 'f3': 33, 'f4': 34}]\n[{'f1': 21, 'f2': 22, 'f3': 23, 'f4': 24}, {'f1': 31, 'f2': 32, 'f3': 33, 'f4': 34}]\n[{'f1': 21, 'f2': 22, 'f3': 23, 'f4': 24}, {'f1': 31, 'f2': 32, 'f3': 33, 'f4': 34}]\n[{'f1': 21, 'f2': 22, 'f3': 23, 'f4': 24}, {'f1': 31, 'f2': 32, 'f3': 33, 'f4': 34}]\n[{'f1': 21, 'f2': 22, 'f3': 23, 'f4': 24}, {'f1': 31, 'f2': 32, 'f3': 33, 'f4': 34}]\n[{'f1': 21, 'f2': 22, 'f3': 23, 'f4': 24}, {'f1': 31, 'f2': 32, 'f3': 33, 'f4': 34}]\n[]\n")),Object(i.b)("h3",{id:"limitoffset-rows"},"Limit/Offset Rows"),Object(i.b)("p",null,"This is a quite popular option used to limit amount of rows to read:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import extract, Layout\n\nprint(extract('data/matrix.csv', layout=Layout(limit_rows=2)))\nprint(extract('data/matrix.csv', layout=Layout(offset_rows=2)))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'f1': 11, 'f2': 12, 'f3': 13, 'f4': 14}, {'f1': 21, 'f2': 22, 'f3': 23, 'f4': 24}]\n[{'f1': 31, 'f2': 32, 'f3': 33, 'f4': 34}, {'f1': 41, 'f2': 42, 'f3': 43, 'f4': 44}]\n")))}f.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=d(a),u=r,b=f["".concat(o,".").concat(u)]||f[u]||p[u]||i;return a?n.a.createElement(b,l(l({ref:t},c),{},{components:a})):n.a.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);