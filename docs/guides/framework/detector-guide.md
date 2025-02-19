---
title: Detector Guide
---

The Detector object can be used in various places within the Framework. The main purpose of this class is to tweak how different aspects of metadata are detected.

Here is a quick example:

```python script title="Python"
from frictionless import Detector, Resource

detector = Detector(field_missing_values=['na'])
resource = Resource('data/table.csv', detector=detector)
```

It's also possible to pass it to the CLI, for example:

```bash script title="CLI"
frictionless validate data/table.csv --field-missing-values na1,na2
```
```
# -----
# valid: data/table.csv
# -----
```

All the options below have their CLI equivalent. Please consult with the CLI help.

## Detector Usage

The detector class instance are accepted by many classes and functions:

- Package
- Resource
- describe
- extract
- validate
- and more

You just need to create a Detector instance using desired options and pass to the classed and function from above.

## Detector Options

Let's list all the available Detector options with simple usage examples:

### Buffer Size

By default, Frictionless will use the first 10000 bytes to detect encoding. The following code will be slower but the encoding detection will be mroe accurate:

```python script title="Python"
from frictionless import Detector, describe

detector = Detector(buffer_size=100000)
resource = describe("data/country-1.csv", detector=detector)
```

### Sample Size

By default, Frictionless will use the first 100 rows to detect field types. This can be customized. The following code will be slower but the result can be more accurate

```python script title="Python"
from frictionless import Detector, describe

detector = Detector(sample_size=1000)
resource = describe("data/country-1.csv", detector=detector)
```


### Encoding Function

By default, Frictionless encoding_function is None and user can use built in encoding functions. But user has option to implement their own encoding using this feature. The following example simply returns utf-8 encoding but user can add more complex logic to the encoding function.

```python script title="Python"
from frictionless import Detector
from frictionless import Resource

detector = Detector(encoding_function=lambda sample: "utf-8")
with Resource("data/table.csv", detector=detector) as resource:
  assert resource.encoding == "utf-8"
  assert resource.sample == [["id", "name"], ["1", "english"], ["2", "中国人"]]
  assert resource.fragment == [["1", "english"], ["2", "中国人"]]
  assert resource.header == ["id", "name"]
```


### Field Type

This option allows manually setting all the field types to a given type. It's useful when you need to skip data casting (setting `any` type) or have everything as a string (setting `string` type):

```python script title="Python"
from frictionless import Detector, describe

detector = Detector(field_type='string')
resource = describe("data/country-1.csv", detector=detector)
print(resource.schema.fields)
```
```
[{'name': 'id', 'type': 'string'}, {'name': 'neighbor_id', 'type': 'string'}, {'name': 'name', 'type': 'string'}, {'name': 'population', 'type': 'string'}]
```

### Field Names

Sometimes you don't want to use existent header row to compose field names. It's possible to provide custom names:

```python script title="Python"
from frictionless import Detector, describe

detector = Detector(field_names=["f1", "f2", "f3", "f4"])
resource = describe("data/country-1.csv", detector=detector)
print(resource.schema.field_names)
```
```
['f1', 'f2', 'f3', 'f4']
```

### Field Confidence

By default, Frictionless uses 0.9 (90%) confidence level for data types detection. It means that it there are 9 integers in a field and one string it will be inferred as an integer. If you want a guarantee that an inferred schema will conform to the data you can set it to 1 (100%):

```python script title="Python"
from frictionless import Detector, describe

detector = Detector(field_confidence=1)
resource = describe("data/country-1.csv", detector=detector)
```

### Field Float Numbers

By default, Frictionless will consider that all non integer numbers are decimals. It's possible to make them float which is a faster data type:

```python script title="Python"
from frictionless import Detector, describe

detector = Detector(field_float_numbers=True)
resource = describe("data/country-1.csv", detector=detector)
```

### Field Missing Values

Missing Values is an important concept in data description. It provides information about what cell values should be considered as nulls. We can customize the defaults:

```python script title="Python"
from frictionless import Detector, describe

detector = Detector(field_missing_values=["", "67"])
resource = describe("data/country-1.csv", detector=detector)
print(resource.schema.missing_values)
print(resource.to_view())
```
```
['', '67']
+----+-------------+-----------+------------+
| id | neighbor_id | name      | population |
+====+=============+===========+============+
|  1 | None        | 'Britain' | None       |
+----+-------------+-----------+------------+
|  2 |           3 | 'France'  | None       |
+----+-------------+-----------+------------+
|  3 |           2 | 'Germany' |         83 |
+----+-------------+-----------+------------+
|  4 |           5 | 'Italy'   |         60 |
+----+-------------+-----------+------------+
|  5 |           4 | 'Spain'   |         47 |
+----+-------------+-----------+------------+
```

As we can see, the textual values equal to "67" are now considered nulls. Usually, it's handy when you have data with values like: '-', 'n/a', and similar.

### Schema Sync

There is a way to sync provided schema based on a header row's field order. It's very useful when you have a schema that describes a subset or a superset of the resource's fields:

```python script title="Python"
from frictionless import Detector, Resource, Schema, Field

# Note the order of the fields
detector = Detector(schema_sync=True)
schema = Schema(fields=[Field(name='name', type='string'), Field(name='id', type='string')])
with Resource('data/capital-3.csv', schema=schema, detector=detector) as resource:
    print(resource.schema)
    print(resource.read_rows())
```
```
{'fields': [{'name': 'id', 'type': 'string'},
            {'name': 'name', 'type': 'string'}]}
+-----+----------+
| id  | name     |
+=====+==========+
| '1' | 'London' |
+-----+----------+
| '2' | 'Berlin' |
+-----+----------+
| '3' | 'Paris'  |
+-----+----------+
| '4' | 'Madrid' |
+-----+----------+
| '5' | 'Rome'   |
+-----+----------+
```

### Schema Patch

Sometimes we just want to update only a few fields or some schema's properties without providing a brand new schema. For example, the two examples above can be simplified as:

```python script title="Python"
from frictionless import Detector, Resource

detector = Detector(schema_patch={'fields': {'id': {'type': 'string'}}})
with Resource('data/capital-3.csv', detector=detector) as resource:
    print(resource.schema)
    print(resource.to_view())
```
```
{'fields': [{'name': 'id', 'type': 'string'},
            {'name': 'name', 'type': 'string'}]}
+-----+----------+
| id  | name     |
+=====+==========+
| '1' | 'London' |
+-----+----------+
| '2' | 'Berlin' |
+-----+----------+
| '3' | 'Paris'  |
+-----+----------+
| '4' | 'Madrid' |
+-----+----------+
| '5' | 'Rome'   |
+-----+----------+
```
