module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'class-methods-use-this': 0,
    camelcase: [0, { properties: 'never' }]
  },

  env: {
    jest: true
  }
};
