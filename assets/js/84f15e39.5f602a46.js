(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),r=(a(0),a(161)),o=["components"],l={title:"Validation Guide",prepare:["cp data/capital-invalid.csv capital-invalid.csv","cp data/capital-valid.csv capital-valid.csv"],cleanup:["rm capital-invalid.csv","rm capital-valid.csv","rm capital.schema.yaml","rm capital.resource.yaml","rm capital.package.yaml","rm capital.inquiry.yaml"]},s={unversionedId:"guides/validation-guide",id:"guides/validation-guide",isDocsHomePage:!1,title:"Validation Guide",description:"This guide assumes basic familiarity with the Frictionless Framework. To learn more, please read the Introduction and Quick Start.",source:"@site/../docs/guides/validation-guide.md",slug:"/guides/validation-guide",permalink:"/docs/guides/validation-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/validation-guide.md",version:"current",lastUpdatedBy:"Augusto Herrmann",lastUpdatedAt:1654752772,formattedLastUpdatedAt:"6/9/2022",sidebar:"guides",previous:{title:"Extracting Data",permalink:"/docs/guides/extracting-data"},next:{title:"Validation Checks",permalink:"/docs/guides/validation-checks"}},c=[{value:"Validate Functions",id:"validate-functions",children:[]},{value:"Validating a Schema",id:"validating-a-schema",children:[]},{value:"Validating a Resource",id:"validating-a-resource",children:[]},{value:"Validating a Package",id:"validating-a-package",children:[]},{value:"Validating an Inquiry",id:"validating-an-inquiry",children:[]},{value:"Validation Report",id:"validation-report",children:[]},{value:"Validation Errors",id:"validation-errors",children:[]},{value:"Available Checks",id:"available-checks",children:[]},{value:"Custom Checks",id:"custom-checks",children:[]},{value:"Pick/Skip Errors",id:"pickskip-errors",children:[]},{value:"Limit Errors",id:"limit-errors",children:[]},{value:"Limit Memory",id:"limit-memory",children:[]}],p={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This guide assumes basic familiarity with the Frictionless Framework. To learn more, please read the ",Object(r.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/introduction"},"Introduction")," and ",Object(r.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/quick-start"},"Quick Start"),".")),Object(r.b)("p",null,"Tabular data validation is a process of identifying problems that have occured in your data so you can correct them. Let's explore how Frictionless helps to achieve this task using an invalid data table example:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Download ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/capital-invalid.csv"},Object(r.b)("inlineCode",{parentName:"a"},"capital-invalid.csv")),' to reproduce the examples (right-click and "Save link as")..')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"cat capital-invalid.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="capital-valid.csv"',title:'"capital-valid.csv"'},"id,name,name\n1,London,Britain\n2,Berlin,Germany\n3,Paris,France\n4,Madrid,Spain\n5,Rome,Italy\n6,Zagreb,Croatia\n7,Athens,Greece\n8,Vienna,Austria\n8,Warsaw\n\nx,Tokio,Japan,review\n")),Object(r.b)("p",null,"We can validate this file by using the command-line interface. Frictionless provides comprehensive error details so that errors can be understood by the user. Continue reading to learn the validation process in detail."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate capital-invalid.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -------\n# invalid: capital-invalid.csv\n# -------\n\n===  =====  ===============  ================================================================================================\nrow  field  code             message\n===  =====  ===============  ================================================================================================\n         3  duplicate-label  Label "name" in the header at position "3" is duplicated to a label: at position "2"\n 10      3  missing-cell     Row at position "10" has a missing cell in field "name2" at position "3"\n 11         blank-row        Row at position "11" is completely blank\n 12      1  type-error       Type error in the cell "x" in row "12" and field "id" at position "1": type is "integer/default"\n 12      4  extra-cell       Row at position "12" has an extra value in field at position "4"\n===  =====  ===============  ================================================================================================\n')),Object(r.b)("h2",{id:"validate-functions"},"Validate Functions"),Object(r.b)("p",null,"The high-level interface for validating data provided by Frictionless is a set of ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," functions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate"),": detects the source type and validates data accordingly"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_schema"),": validates a schema's metadata"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_resource"),": validates a resource's data and metadata"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_package"),": validates a package's data and metadata"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"validate_inquiry"),": validates a special ",Object(r.b)("inlineCode",{parentName:"li"},"Inquiry")," object which represents a validation task instruction")),Object(r.b)("p",null,"On the command-line, there is only one command but there is a flag to adjust the behavior. It's useful when you have a file which has a ambiguous type, for example, a json file containing a data instead of metadata:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"frictionless validate your-data.csv\nfrictionless validate your-schema.yaml --type schema\nfrictionless validate your-data.csv --type resource\nfrictionless validate your-package.json --type package\nfrictionless validate your-inquiry.yaml --type inquiry\n")),Object(r.b)("p",null,"As a reminder, in the Frictionless ecosystem, a resource is a single file, such as a data file, and a package is a set of files, such as a data file and a schema. This concept is described in more detail in the ",Object(r.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/introduction"},"Introduction"),"."),Object(r.b)("h2",{id:"validating-a-schema"},"Validating a Schema"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"validate_schema")," function is the only function validating solely metadata. To see this work, let's create an invalid table schema:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Schema\n\nschema = Schema()\nschema.fields = {} # must be a list\nschema.to_yaml('capital.schema.yaml')\n")),Object(r.b)("p",null,"And let's validate this schema using the command-line interface:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate capital.schema.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -------\n# invalid: capital.schema.yaml\n# -------\n============  ===================================================================================================================\ncode          message\n============  ===================================================================================================================\nschema-error  Schema is not valid: "{} is not of type \'array\'" at "fields" in metadata and at "properties/fields/type" in profile\n============  ===================================================================================================================\n')),Object(r.b)("p",null,"We see that the schema is invalid and the error is displayed. Schema validation can be very useful when you work with different classes of tables and create schemas for them. Using this function will ensure that the metadata is valid."),Object(r.b)("h2",{id:"validating-a-resource"},"Validating a Resource"),Object(r.b)("p",null,"As was shown in the ",Object(r.b)("a",{parentName:"p",href:"https://framework.frictionlessdata.io/docs/guides/describing-data"},'"Describing Data" guide'),", a resource is a container having both metadata and data. We need to create a resource descriptor and then we can validate it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless describe capital-invalid.csv > capital.resource.yaml\n")),Object(r.b)("p",null,"Note: this example uses JSON for the resource descriptor format, but Frictionless also supports YAML format as shown in examples below."),Object(r.b)("p",null,"Let's now use the command-line interface to ensure that we are getting the same result that we got without using a resource:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate capital.resource.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -------\n# invalid: capital-invalid.csv\n# -------\n\n===  =====  ===============  ================================================================================================\nrow  field  code             message\n===  =====  ===============  ================================================================================================\n         3  duplicate-label  Label "name" in the header at position "3" is duplicated to a label: at position "2"\n 10      3  missing-cell     Row at position "10" has a missing cell in field "name2" at position "3"\n 11         blank-row        Row at position "11" is completely blank\n 12      1  type-error       Type error in the cell "x" in row "12" and field "id" at position "1": type is "integer/default"\n 12      4  extra-cell       Row at position "12" has an extra value in field at position "4"\n===  =====  ===============  ================================================================================================\n')),Object(r.b)("p",null,"Okay, why do we need to use a resource descriptor if the result is the same? The reason is metadata + data packaging. Let's extend our resource descriptor to show how you can edit and validate metadata:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import describe\n\nresource = describe('capital-invalid.csv')\nresource['bytes'] = 100 # this is wrong\nresource['hash'] = 'ae23c74693ca2d3f0e38b9ba3570775b' # this is a made up incorrect hash\nresource.to_yaml('capital.resource.yaml')\n")),Object(r.b)("p",null,"We have added a few incorrect, made up attributes to our resource descriptor as an example. Now, the validation below reports these errors in addition to all the errors we had before. This example shows how concepts like Data Resource can be extremely useful when working with data."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate capital.resource.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -------\n# invalid: capital-invalid.csv\n# -------\n\n===  =====  ================  ===========================================================================================================================================================\nrow  field  code              message\n===  =====  ================  ===========================================================================================================================================================\n         3  duplicate-label   Label "name" in the header at position "3" is duplicated to a label: at position "2"\n 10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"\n 11         blank-row         Row at position "11" is completely blank\n 12      1  type-error        Type error in the cell "x" in row "12" and field "id" at position "1": type is "integer/default"\n 12      4  extra-cell        Row at position "12" has an extra value in field at position "4"\n            hash-count-error  The data source does not match the expected hash count: expected md5 is "ae23c74693ca2d3f0e38b9ba3570775b" and actual is "dcdeae358cfd50860c18d953e021f836"\n            byte-count-error  The data source does not match the expected byte count: expected is "100" and actual is "171"\n===  =====  ================  ===========================================================================================================================================================\n')),Object(r.b)("h2",{id:"validating-a-package"},"Validating a Package"),Object(r.b)("p",null,"A package is a set of resources + additional metadata. To showcase a package validation we need to use one more tabular file:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Download ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/capital-valid.csv"},Object(r.b)("inlineCode",{parentName:"a"},"capital-valid.csv")),' to reproduce the examples (right-click and "Save link as").')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"cat capital-valid.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="capital-valid.csv"',title:'"capital-valid.csv"'},"id,name\n1,London\n2,Berlin\n3,Paris\n4,Madrid\n5,Rome\n")),Object(r.b)("p",null,"Now let's describe and validate a package which contains the data files we have seen so far:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless describe capital-*id.csv > capital.package.yaml\nfrictionless validate capital.package.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -------\n# invalid: capital-invalid.csv\n# -------\n\n===  =====  ===============  ================================================================================================\nrow  field  code             message\n===  =====  ===============  ================================================================================================\n         3  duplicate-label  Label "name" in the header at position "3" is duplicated to a label: at position "2"\n 10      3  missing-cell     Row at position "10" has a missing cell in field "name2" at position "3"\n 11         blank-row        Row at position "11" is completely blank\n 12      1  type-error       Type error in the cell "x" in row "12" and field "id" at position "1": type is "integer/default"\n 12      4  extra-cell       Row at position "12" has an extra value in field at position "4"\n===  =====  ===============  ================================================================================================\n\n\n# -----\n# valid: capital-valid.csv\n# -----\n')),Object(r.b)("p",null,"As we can see, the result is in a similar format to what we have already seen, and shows errors as we expected: we have one invalid resource and one valid resource."),Object(r.b)("h2",{id:"validating-an-inquiry"},"Validating an Inquiry"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The Inquiry is an advanced concept mostly used by software integrators. For example, under the hood, Frictionless Framework uses inquiries to implement client-server validation within the built-in API. Please skip this section if this information feels unnecessary for you.")),Object(r.b)("p",null,"Inquiry is a declarative representation of a validation job. It gives you an ability to create, export, and share arbitrary validation jobs containing a set of individual validation tasks. Tasks in the Inquiry accept the same arguments written in camelCase as the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," functions."),Object(r.b)("p",null,"Let's create an Inquiry that includes an individual file validation and a resource validation. In this example we will use the data file, ",Object(r.b)("inlineCode",{parentName:"p"},"capital-valid.csv")," and the resource, ",Object(r.b)("inlineCode",{parentName:"p"},"capital.resource.json")," which describes the invalid data file we have already seen:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Inquiry\n\ninquiry = Inquiry({'tasks': [\n  {'source': 'capital-valid.csv'},\n  {'source': 'capital.resource.yaml'},\n]})\ninquiry.to_yaml('capital.inquiry.yaml')\n")),Object(r.b)("p",null,"As usual, let's run validation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate capital.inquiry.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -----\n# valid: capital-valid.csv\n# -----\n# -------\n# invalid: capital-invalid.csv\n# -------\n\n===  =====  ================  ===========================================================================================================================================================\nrow  field  code              message\n===  =====  ================  ===========================================================================================================================================================\n         3  duplicate-label   Label "name" in the header at position "3" is duplicated to a label: at position "2"\n 10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"\n 11         blank-row         Row at position "11" is completely blank\n 12      1  type-error        Type error in the cell "x" in row "12" and field "id" at position "1": type is "integer/default"\n 12      4  extra-cell        Row at position "12" has an extra value in field at position "4"\n            hash-count-error  The data source does not match the expected hash count: expected md5 is "ae23c74693ca2d3f0e38b9ba3570775b" and actual is "dcdeae358cfd50860c18d953e021f836"\n            byte-count-error  The data source does not match the expected byte count: expected is "100" and actual is "171"\n===  =====  ================  ===========================================================================================================================================================\n')),Object(r.b)("p",null,"At first sight, it might not be clear why such a construct exists, but when your validation workflow gets complex, the Inquiry can provide a lot of flexibility and power."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The Inquiry will use multiprocessing if there is the ",Object(r.b)("inlineCode",{parentName:"p"},"parallel")," flag provided. It might speed up your validation dramatically especially on a 4+ cores processor.")),Object(r.b)("h2",{id:"validation-report"},"Validation Report"),Object(r.b)("p",null,"All the ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," functions return a Validation Report. This is a unified object containing information about a validation: source details, the error, etc. Let's explore a report:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate\n\nreport = validate('capital-invalid.csv', pick_errors=['duplicate-label'])\npprint(report)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"{'errors': [],\n 'stats': {'errors': 1, 'tasks': 1},\n 'tasks': [{'errors': [{'code': 'duplicate-label',\n                        'description': 'Two columns in the header row have the '\n                                       'same value. Column names should be '\n                                       'unique.',\n                        'fieldName': 'name2',\n                        'fieldNumber': 3,\n                        'fieldPosition': 3,\n                        'label': 'name',\n                        'labels': ['id', 'name', 'name'],\n                        'message': 'Label \"name\" in the header at position \"3\" '\n                                   'is duplicated to a label: at position \"2\"',\n                        'name': 'Duplicate Label',\n                        'note': 'at position \"2\"',\n                        'rowPositions': [1],\n                        'tags': ['#table', '#header', '#label']}],\n            'partial': False,\n            'resource': {'encoding': 'utf-8',\n                         'format': 'csv',\n                         'hashing': 'md5',\n                         'name': 'capital-invalid',\n                         'path': 'capital-invalid.csv',\n                         'profile': 'tabular-data-resource',\n                         'schema': {'fields': [{'name': 'id',\n                                                'type': 'integer'},\n                                               {'name': 'name',\n                                                'type': 'string'},\n                                               {'name': 'name2',\n                                                'type': 'string'}]},\n                         'scheme': 'file',\n                         'stats': {'bytes': 171,\n                                   'fields': 3,\n                                   'hash': 'dcdeae358cfd50860c18d953e021f836',\n                                   'rows': 11}},\n            'scope': ['duplicate-label'],\n            'stats': {'errors': 1},\n            'time': 0.028,\n            'valid': False}],\n 'time': 0.028,\n 'valid': False,\n 'version': '4.1.0'}\n")),Object(r.b)("p",null,"As we can see, there is a lot of information; you can find a detailed description of the Validation Report in the ",Object(r.b)("a",{parentName:"p",href:"/docs/references/api-reference#report"},"API Reference"),". Errors are grouped by tasks (i.e. data files); for some validation there can be dozens of tasks. Let's use the ",Object(r.b)("inlineCode",{parentName:"p"},"report.flatten")," function to simplify the representation of errors. This function helps to represent a report as a list of errors:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate("capital-invalid.csv", pick_errors=["duplicate-label"])\npprint(report.flatten(["rowPosition", "fieldPosition", "code", "message"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None,\n  3,\n  'duplicate-label',\n  'Label \"name\" in the header at position \"3\" is duplicated to a label: at '\n  'position \"2\"']]\n")),Object(r.b)("p",null,"In some situations, an error can't be associated with a task; then it goes to the top-level ",Object(r.b)("inlineCode",{parentName:"p"},"report.errors")," property:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate_schema\n\nreport = validate_schema("bad.json")\npprint(report)\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"{'errors': [{'code': 'schema-error',\n             'description': 'Provided schema is not valid.',\n             'message': 'Schema is not valid: cannot extract metadata '\n                        '\"bad.json\" because \"[Errno 2] No such file or '\n                        'directory: \\'bad.json\\'\"',\n             'name': 'Schema Error',\n             'note': 'cannot extract metadata \"bad.json\" because \"[Errno 2] No '\n                     'such file or directory: \\'bad.json\\'\"',\n             'tags': []}],\n 'stats': {'errors': 1, 'tasks': 0},\n 'tasks': [],\n 'time': 0.0,\n 'valid': False,\n 'version': '4.1.0'}\n")),Object(r.b)("h2",{id:"validation-errors"},"Validation Errors"),Object(r.b)("p",null,"The Error object is at the heart of the validation process. The Report has ",Object(r.b)("inlineCode",{parentName:"p"},"report.errors")," and ",Object(r.b)("inlineCode",{parentName:"p"},"report.tasks[].errors"),", properties that can contain the Error object. Let's explore it by taking a deeper look at the ",Object(r.b)("inlineCode",{parentName:"p"},"duplicate-label")," error:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import validate\n\nreport = validate("capital-invalid.csv", pick_errors=["duplicate-label"])\nerror = report.task.error  # this is only available for one table / one error sitution\nprint(f\'Code: "{error.code}"\')\nprint(f\'Name: "{error.name}"\')\nprint(f\'Tags: "{error.tags}"\')\nprint(f\'Note: "{error.note}"\')\nprint(f\'Message: "{error.message}"\')\nprint(f\'Description: "{error.description}"\')\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'Code: "duplicate-label"\nName: "Duplicate Label"\nTags: "[\'#table\', \'#header\', \'#label\']"\nNote: "at position "2""\nMessage: "Label "name" in the header at position "3" is duplicated to a label: at position "2""\nDescription: "Two columns in the header row have the same value. Column names should be unique."\n')),Object(r.b)("p",null,"Above, we have listed universal error properties. Depending on the type of an error there can be additional ones. For example, for our ",Object(r.b)("inlineCode",{parentName:"p"},"duplicate-label")," error:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate("capital-invalid.csv", pick_errors=["duplicate-label"])\nerror = report.task.error  # this is only available for one table / one error sitution\npprint(error)\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"{'code': 'duplicate-label',\n 'description': 'Two columns in the header row have the same value. Column '\n                'names should be unique.',\n 'fieldName': 'name2',\n 'fieldNumber': 3,\n 'fieldPosition': 3,\n 'label': 'name',\n 'labels': ['id', 'name', 'name'],\n 'message': 'Label \"name\" in the header at position \"3\" is duplicated to a '\n            'label: at position \"2\"',\n 'name': 'Duplicate Label',\n 'note': 'at position \"2\"',\n 'rowPositions': [1],\n 'tags': ['#table', '#header', '#label']}\n")),Object(r.b)("p",null,"Please explore the ",Object(r.b)("a",{parentName:"p",href:"/docs/references/errors-reference"},"Errors Reference")," to learn about all the available errors and their properties."),Object(r.b)("h2",{id:"available-checks"},"Available Checks"),Object(r.b)("p",null,"There are various validation checks included in the core Frictionless Framework along with an ability to create custom checks. You can provide a list of checks where individual checks are in the form of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a dict: ",Object(r.b)("inlineCode",{parentName:"li"},"{'code': 'code', 'option1': 'value1'}")),Object(r.b)("li",{parentName:"ul"},"an object: ",Object(r.b)("inlineCode",{parentName:"li"},"checks.code(option1='value1')"))),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/guides/validation-checks"},"Validation Checks")," for a list of available checks."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate, checks\n\nchecks = [checks.sequential_value(field_name=\'id\')]\nreport = validate(\'capital-invalid.csv\', checks=checks)\npprint(report.flatten(["rowPosition", "fieldPosition", "code", "note"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label', 'at position \"2\"'],\n [10, 3, 'missing-cell', ''],\n [10, 1, 'sequential-value', 'the value is not sequential'],\n [11, None, 'blank-row', ''],\n [12, 1, 'type-error', 'type is \"integer/default\"'],\n [12, 4, 'extra-cell', '']]\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that only the Baseline Check is enabled by default. Other built-in checks need to be activated as shown below.")),Object(r.b)("h2",{id:"custom-checks"},"Custom Checks"),Object(r.b)("p",null,"There are many cases when built-in Frictionless checks are not enough. For instance, you might want to create a business logic rule or specific quality requirement for the data. With Frictionless it's very easy to use your own custom checks. Let's see with an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import validate, errors\n\n# Create check\ndef forbidden_two(row):\n    if row['header'] == 2:\n        note = '2 is forbidden!'\n        yield errors.CellError.from_row(row, note=note, field_name='header')\n\n# Validate table\nsource = b'header\\n1\\n2\\n3'\nreport = validate(source,  format='csv', checks=[forbidden_two])\npprint(report.flatten([\"rowPosition\", \"fieldPosition\", \"code\", \"note\"]))\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[3, 1, 'cell-error', '2 is forbidden!']]\n")),Object(r.b)("p",null,"Usually, it also makes sense to create a custom error for your custom check. The Check class provides other useful methods like ",Object(r.b)("inlineCode",{parentName:"p"},"validate_header")," etc. Please read the ",Object(r.b)("a",{parentName:"p",href:"/docs/references/api-reference"},"API Reference")," for more details."),Object(r.b)("p",null,"Learn more about custom checks in the ",Object(r.b)("a",{parentName:"p",href:"/docs/guides/extension/check-guide"},"Check Guide"),"."),Object(r.b)("h2",{id:"pickskip-errors"},"Pick/Skip Errors"),Object(r.b)("p",null,"We can pick or skip errors by providing a list of error codes. This is useful when you already know your data has some errors, but you want to ignore them for now. For instance, if you have a data table with repeating header names. Let's see an example of how to pick and skip errors:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport1 = validate("capital-invalid.csv", pick_errors=["duplicate-label"])\nreport2 = validate("capital-invalid.csv", skip_errors=["duplicate-label"])\npprint(report1.flatten(["rowPosition", "fieldPosition", "code"]))\npprint(report2.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label']]\n[[10, 3, 'missing-cell'],\n [11, None, 'blank-row'],\n [12, 1, 'type-error'],\n [12, 4, 'extra-cell']]\n")),Object(r.b)("p",null,"It's also possible to use error tags (for more information please consult the ",Object(r.b)("a",{parentName:"p",href:"/docs/references/errors-reference"},"Errors Reference"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport1 = validate("capital-invalid.csv", pick_errors=["#header"])\nreport2 = validate("capital-invalid.csv", skip_errors=["#row"])\npprint(report1.flatten(["rowPosition", "fieldPosition", "code"]))\npprint(report2.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label']]\n[[None, 3, 'duplicate-label']]\n")),Object(r.b)("h2",{id:"limit-errors"},"Limit Errors"),Object(r.b)("p",null,'This option allows you to limit the amount of errors, and can be used when you need to do a quick check or want to "fail fast". For instance, here we use ',Object(r.b)("inlineCode",{parentName:"p"},"limit_errors")," to find just the 1st error and add it to our report:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate("capital-invalid.csv", limit_errors=1)\npprint(report.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[None, 3, 'duplicate-label']]\n")),Object(r.b)("h2",{id:"limit-memory"},"Limit Memory"),Object(r.b)("p",null,"Frictionless is a streaming engine; usually it is possible to validate terrabytes of data with basically O(1) memory consumption. It means that memory usage doesn't depend on the size of your data making the validation infinitely scalable. For some validation, this is not the case because Frctionless needs to buffer some cells e.g. to check uniqueness. Here memory management can be handy."),Object(r.b)("p",null,"The default memory limit is 1000MB. You can adjust this based on your exact use case. For example, if you're running Frictionless as an API server you might reduce the memory usage. If a validation hits the limit it will not raise a failure - it will return a report with a task error:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},'from frictionless import validate\n\nsource = lambda: ([integer] for integer in range(1, 100000000))\nschema = {"fields": [{"name": "integer", "type": "integer"}], "primaryKey": "integer"}\nreport = validate(source, layout={\'header\': False}, schema=schema, limit_memory=50)\nprint(report.flatten(["code", "note"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[['task-error', 'exceeded memory limit \"50MB\"']]\n")))}d.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);