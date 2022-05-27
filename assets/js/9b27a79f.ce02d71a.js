(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(161)),c=["components"],s={title:"Schema Guide",cleanup:["rm schema.json","rm schema.yaml"]},o={unversionedId:"guides/framework/schema-guide",id:"guides/framework/schema-guide",isDocsHomePage:!1,title:"Schema Guide",description:"The Table Schema is a core Frictionless Data concept meaning a metadata information regarding tabular data source. You can read Table Schema Spec for more information.",source:"@site/../docs/guides/framework/schema-guide.md",slug:"/guides/framework/schema-guide",permalink:"/docs/guides/framework/schema-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/schema-guide.md",version:"current",lastUpdatedBy:"Edgar Z. Alvarenga",lastUpdatedAt:1653653806,formattedLastUpdatedAt:"5/27/2022",sidebar:"guides",previous:{title:"Resource Guide",permalink:"/docs/guides/framework/resource-guide"},next:{title:"Field Guide",permalink:"/docs/guides/framework/field-guide"}},l=[{value:"Creating Schema",id:"creating-schema",children:[]},{value:"Describing Schema",id:"describing-schema",children:[]},{value:"Field Management",id:"field-management",children:[]},{value:"Saving Descriptor",id:"saving-descriptor",children:[]},{value:"Reading Cells",id:"reading-cells",children:[]},{value:"Writing Cells",id:"writing-cells",children:[]}],m={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Table Schema is a core Frictionless Data concept meaning a metadata information regarding tabular data source. You can read ",Object(i.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/table-schema/"},"Table Schema Spec")," for more information."),Object(i.b)("h2",{id:"creating-schema"},"Creating Schema"),Object(i.b)("p",null,"Let's create a table schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema, describe\n\nschema = describe('data/table.csv', type='schema') # from a resource path\nschema = Schema('data/schema.json') # from a descriptor path\nschema = Schema({'fields': {'name': 'id', 'type': 'integer'}}) # from a descriptor\n")),Object(i.b)("p",null,"As you can see it's possible to create a schema providing different kinds of sources which will be detector to have some type automatically (e.g. whether it's a dict or a path). It's possible to make this step more explicit:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema, Field\n\nschema = Schema(fields=[Field(name='id', type='string')]) # from fields\nschema = Schema(descriptor='data/schema.json') # from a descriptor\n")),Object(i.b)("h2",{id:"describing-schema"},"Describing Schema"),Object(i.b)("p",null,"The specs support some additional schema's metadata:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema, Resource\n\npackage = Schema(\n    fields=[Field(name='id', type='string')],\n    missing_values=['na'],\n    primary_key=['id'],\n    # foreign_keys\n)\n")),Object(i.b)("p",null,"If you have created a schema, for example, from a descriptor you can access this properties:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema\n\nschema = Schema('data/schema.json')\nschema.missing_values\nschema.primary_key\n# and others\n")),Object(i.b)("p",null,"And edit them:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema\n\nschema = Schema('data/schema.json')\nschema.missing_values.append('-')\n# and others\n")),Object(i.b)("h2",{id:"field-management"},"Field Management"),Object(i.b)("p",null,"The Schema class provides useful methods to manage fields:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema, Field\n\nschema = Schema('data/schema.json')\nprint(schema.fields)\nprint(schema.field_names)\nschema.add_field(Field(name='name', type='string'))\nfield = schema.get_field('name')\nprint(schema.has_field('name'))\nschema.remove_field('name')\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'name': 'id', 'type': 'integer'}, {'name': 'name', 'type': 'string'}]\n['id', 'name']\nTrue\n")),Object(i.b)("h2",{id:"saving-descriptor"},"Saving Descriptor"),Object(i.b)("p",null,"As any of the Metadata classes the Schema class can be saved as JSON or YAML:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema\nschema = Schema(fields=[Field(name='id', type='integer')])\nschema.to_json('schema.json') # Save as JSON\nschema.to_yaml('schema.yaml') # Save as YAML\n")),Object(i.b)("h2",{id:"reading-cells"},"Reading Cells"),Object(i.b)("p",null,"During the process of data reading a resource uses a schema to convert data:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema, Field\n\nschema = Schema(fields=[Field(type='integer'), Field(type='string')])\nschema.read_cells(['3', 'value']) # [3, 'value']\n")),Object(i.b)("h2",{id:"writing-cells"},"Writing Cells"),Object(i.b)("p",null,"During the process of data writing a resource uses a schema to convert data:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema, Field\n\nschema = Schema(fields=[Field(type='integer'), Field(type='string')])\nschema.write_cells([3, 'value']) # ['3', 'value']\nschema.write_cells([3, 'value'], types=['string']) # [3, 'value']\n")))}p.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=m(a),h=n,u=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return a?r.a.createElement(u,s(s({ref:t},l),{},{components:a})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);