/**
 * error message
 * @type {Object}
 */
export default {
  CONTROLLER_NOT_FOUND: 'controller `%s` not found. url is `%s`.',
  CONTROLLER_INVALID: 'controller `%s` is not valid. url is `%s`',
  ACTION_NOT_FOUND: 'action `%s` not found. url is `%s`',
  ACTION_INVALID: 'action `%s` is not valid. url is `%s`',
  WORKER_DIED: 'worker `%d` died, it will auto restart.',
  MIDDLEWARE_NOT_FOUND: 'middleware `%s` not found',
  ADAPTER_NOT_FOUND: 'adapter `%s` not found',
  GCTYPE_MUST_SET: 'instance must have gcType property',
  CONFIG_NOT_FUNCTION: 'config `%s` is not a function',
  CONFIG_NOT_VALID: 'config `%s` is not valid',
  PATH_EMPTY: '`%s` path muse be set',
  PATH_NOT_EXIST: '`%s` is not exist',
  TEMPLATE_NOT_EXIST: 'can\'t find template file `%s`',
  PARAMS_EMPTY: 'params `%s` value can\'t empty',
  PARAMS_NOT_VALID: 'params `{name}` value not valid',
  FIELD_KEY_NOT_VALID: 'field `%s` in where condition is not valid',
  DATA_EMPTY: 'data can not be empty',
  MISS_WHERE_CONDITION: 'miss where condition',
  INVALID_WHERE_CONDITION_KEY: 'where condition key is not valid',
  WHERE_CONDITION_INVALID: 'where condition `%s`:`%s` is not valid',
  TABLE_NO_COLUMNS: 'table `%s` has no columns',
  NOT_SUPPORT_TRANSACTION: 'table engine is not support transaction',
  DATA_MUST_BE_ARRAY: 'data is not array list',
  PARAMS_TYPE_INVALID: 'params `{name}` type invalid',
  DISLLOW_PORT: 'proxy on, cannot visit with port',

  validate_required: '{name} need is set',
  validate_contains: '{name} need contains the {args}',
  validate_equals: '{name} need matches the {args}',
  validate_different: '{name} can not matches the {args}',
  validate_after: '{name} is a date that\'s after the {args} (defaults to now)',
  validate_alpha:　'{name} contains only letters (a-zA-Z)',
  validate_alphaDash: '{name} contains only letters and dashes(a-zA-Z_)',
  validate_alphaNumeric: '{name} contains only letters and numeric(a-zA-Z0-9)',
  validate_alphaNumericDash: '{name} contains only letters, numeric and dash(a-zA-Z0-9_)',
  validate_ascii: '{name} contains ASCII chars only',
  validate_base64: '{name} is base64 encoded',
  validate_before: '{name} is a date that\'s before the {args} (defaults to now)',
  validate_byteLength: '{name} length (in bytes) falls in {args}',
  validate_creditcard: '{name} is a valid credit card',
  validate_currency: '{name} is a valid currency amount',
  validate_date: '{name} is a date',
  validate_decimal: '{name} a decimal number',
  validate_divisibleBy: '{name} is a number that\'s divisible by {args}',
  validate_email: '{name} is an email',
  validate_fqdn: '{name} is a fully qualified domain name',
  validate_float: '{name} is a float in {args}',
  validate_fullWidth: '{name} contains any full-width chars',
  validate_halfWidth: '{name} contains any half-width chars',
  validate_hexColor: '{name} is a hexadecimal color',
  validate_hex: '{name} is a hexadecimal number',
  validate_ip: '{name} is an IP (version 4 or 6)',
  validate_ip4: '{name} is an IP (version 4)',
  validate_ip6: '{name} is an IP (version 6)',
  validate_isbn: '{name} is an ISBN (version 10 or 13)',
  validate_isin: '{name} is an ISIN (stock/security identifier)',
  validate_iso8601: '{name} is a valid ISO 8601 date',
  validate_in: '{name} in a array of {args}',
  validate_notIn: '{name} not in a array of {args}',
  validate_int: '{name} is an integer',
  validate_min: '{name} is an integer greater than {args}',
  validate_max: '{name} is an integer less than {args}',
  validate_length: '{name} length falls in {args}',
  validate_minLength: '{name} length is max than {args}',
  validate_maxLength: '{name} length is min than {args}',
  validate_lowercase: '{name} is lowercase',
  validate_mobile: '{name} is a mobile phone number',
  validate_mongoId: '{name} is a valid hex-encoded representation of a MongoDB ObjectId',
  validate_multibyte: '{name} contains one or more multibyte chars',
  validate_url: '{name} is an URL',
  validate_uppercase: '{name} is uppercase',
  validate_variableWidth: '{name} contains a mixture of full and half-width chars',
  validate_order: '{name} is valid sql order string',
  validate_field: '{name} is valid sql field string',
  validate_image: '{name} is valid image file',
  validate_startWith: '{name} start with {args}',
  validate_endWidth: '{name} end with {args}',
  validate_string: '{name} must be a string',
  validate_array: '{name} must be an array',
  validate_boolean: '{name} must be an boolean',
  validate_object: '{name} must be an object'
};