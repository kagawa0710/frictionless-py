## `main`
  - `schema`
      - `primaryKey` ['id']
### `id`
  - `description` Any positive integer
  - `type` integer
  - `constraints`:
    - `minimum` 1
### `integer_minmax`
  - `description` An integer between 1 and 10
  - `type` integer
  - `constraints`:
    - `minimum` 1
    - `maximum` 10