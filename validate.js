'use strict';

class Validator {
  String (input) {
    return typeof input === 'string';
    };
  Number (input) {
    return typeof input === 'number';
  };
  Boolean = (input) => {
    return typeof input === 'boolean';
  };
}

modlue.exports = Validator;