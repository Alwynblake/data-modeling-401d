# data-modeling-401d

[![Build Status](https://www.travis-ci.com/Alwynblake/data-modeling-401d.svg?branch=master)](https://www.travis-ci.com/Alwynblake/data-modeling-401d)

#### Documentation
* [uuid/v4 Docs](https://www.uuidgenerator.net/version4)

##### Exported Values and Methods

###### `create() -> promise`
Gets id for entry, sanitizes the entry, then inserts it into database.

###### `get() -> promise`
Gets a response from the database based on an id. 

###### `update() -> promise`
Sanitizes the entry, replaces the entry in the database with the same id, if it exists.

###### `delete() -> promise`
Deletes an entry from the database by overwriting the database to not include the entry.

#### Tests
* `npm run test`
