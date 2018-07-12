/* tslint:disable */

import * as graphql from "graphql";

export const Access = new graphql.GraphQLEnumType({
  name: "Access",
  values: {
    AUTO: { value: `AUTO` },
    WRITE_ONLY: { value: `WRITE_ONLY` },
    READ_ONLY: { value: `READ_ONLY` },
    READ_WRITE: { value: `READ_WRITE` },
  },
});

export const Autowire = new graphql.GraphQLEnumType({
  name: "Autowire",
  values: {
    NO: { value: `NO` },
    BY_NAME: { value: `BY_NAME` },
    BY_TYPE: { value: `BY_TYPE` },
  },
});

export const Cause = new graphql.GraphQLEnumType({
  name: "Cause",
  values: {
    AUTOMATIC_TRAVERSE: { value: `AUTOMATIC_TRAVERSE` },
    ACTIVATION: { value: `ACTIVATION` },
    TRAVERSAL: { value: `TRAVERSAL` },
    TRAVERSAL_UP: { value: `TRAVERSAL_UP` },
    TRAVERSAL_FORWARD: { value: `TRAVERSAL_FORWARD` },
    TRAVERSAL_DOWN: { value: `TRAVERSAL_DOWN` },
    RETARGETED: { value: `RETARGETED` },
    TRAVERSAL_BACKWARD: { value: `TRAVERSAL_BACKWARD` },
    NATIVE_SYSTEM: { value: `NATIVE_SYSTEM` },
    MOUSE_EVENT: { value: `MOUSE_EVENT` },
    ROLLBACK: { value: `ROLLBACK` },
    CLEAR_GLOBAL_FOCUS_OWNER: { value: `CLEAR_GLOBAL_FOCUS_OWNER` },
    UNKNOWN: { value: `UNKNOWN` },
    MANUAL_REQUEST: { value: `MANUAL_REQUEST` },
  },
});

export const ConfigurationPhase = new graphql.GraphQLEnumType({
  name: "ConfigurationPhase",
  values: {
    PARSE_CONFIGURATION: { value: `PARSE_CONFIGURATION` },
    REGISTER_BEAN: { value: `REGISTER_BEAN` },
  },
});

export const Direction = new graphql.GraphQLEnumType({
  name: "Direction",
  values: {
    ASC: { value: `ASC` },
    DESC: { value: `DESC` },
  },
});

export const EAttribute = new graphql.GraphQLEnumType({
  name: "EAttribute",
  values: {
    ESTRIKETHROUGH: { value: `strikethrough` },
    EJUSTIFICATION: { value: `justification` },
    ERUN_DIRECTION: { value: `run_direction` },
    ETRANSFORM: { value: `transform` },
    ENUMERIC_SHAPING: { value: `numeric_shaping` },
    EPOSTURE: { value: `posture` },
    EINPUT_METHOD_UNDERLINE: { value: `input_method_underline` },
    EUNDERLINE: { value: `underline` },
    EWIDTH: { value: `width` },
    EINPUT_METHOD_HIGHLIGHT: { value: `input_method_highlight` },
    ESWAP_COLORS: { value: `swap_colors` },
    ECHAR_REPLACEMENT: { value: `char_replacement` },
    EKERNING: { value: `kerning` },
    ETRACKING: { value: `tracking` },
    EWEIGHT: { value: `weight` },
    EFAMILY: { value: `family` },
    EBIDI_EMBEDDING: { value: `bidi_embedding` },
    ESUPERSCRIPT: { value: `superscript` },
    ESIZE: { value: `size` },
    EBACKGROUND: { value: `background` },
    EFONT: { value: `font` },
    ELIGATURES: { value: `ligatures` },
    EFOREGROUND: { value: `foreground` },
    EBASELINE_TRANSFORM: { value: `baseline_transform` },
  },
});

export const FilterType = new graphql.GraphQLEnumType({
  name: "FilterType",
  values: {
    REGEX: { value: `REGEX` },
    ANNOTATION: { value: `ANNOTATION` },
    ASSIGNABLE_TYPE: { value: `ASSIGNABLE_TYPE` },
    CUSTOM: { value: `CUSTOM` },
    ASPECTJ: { value: `ASPECTJ` },
  },
});

export const HttpMethod = new graphql.GraphQLEnumType({
  name: "HttpMethod",
  values: {
    TRACE: { value: `TRACE` },
    HEAD: { value: `HEAD` },
    DELETE: { value: `DELETE` },
    POST: { value: `POST` },
    GET: { value: `GET` },
    OPTIONS: { value: `OPTIONS` },
    PUT: { value: `PUT` },
    PATCH: { value: `PATCH` },
  },
});

export const HttpStatus = new graphql.GraphQLEnumType({
  name: "HttpStatus",
  values: {
    REQUEST_TIMEOUT: { value: `408` },
    INSUFFICIENT_SPACE_ON_RESOURCE: { value: `419` },
    USE_PROXY: { value: `305` },
    UNPROCESSABLE_ENTITY: { value: `422` },
    PROCESSING: { value: `102` },
    TEMPORARY_REDIRECT: { value: `307` },
    NOT_EXTENDED: { value: `510` },
    MOVED_TEMPORARILY: { value: `302` },
    PAYLOAD_TOO_LARGE: { value: `413` },
    VARIANT_ALSO_NEGOTIATES: { value: `506` },
    FAILED_DEPENDENCY: { value: `424` },
    ACCEPTED: { value: `202` },
    BAD_GATEWAY: { value: `502` },
    URI_TOO_LONG: { value: `414` },
    IM_USED: { value: `226` },
    NOT_ACCEPTABLE: { value: `406` },
    RESET_CONTENT: { value: `205` },
    PARTIAL_CONTENT: { value: `206` },
    GATEWAY_TIMEOUT: { value: `504` },
    DESTINATION_LOCKED: { value: `421` },
    FOUND: { value: `302` },
    METHOD_FAILURE: { value: `420` },
    METHOD_NOT_ALLOWED: { value: `405` },
    EXPECTATION_FAILED: { value: `417` },
    LOCKED: { value: `423` },
    NOT_FOUND: { value: `404` },
    PERMANENT_REDIRECT: { value: `308` },
    LENGTH_REQUIRED: { value: `411` },
    BANDWIDTH_LIMIT_EXCEEDED: { value: `509` },
    MULTIPLE_CHOICES: { value: `300` },
    REQUEST_ENTITY_TOO_LARGE: { value: `413` },
    NETWORK_AUTHENTICATION_REQUIRED: { value: `511` },
    SWITCHING_PROTOCOLS: { value: `101` },
    GONE: { value: `410` },
    UPGRADE_REQUIRED: { value: `426` },
    UNAVAILABLE_FOR_LEGAL_REASONS: { value: `451` },
    TOO_MANY_REQUESTS: { value: `429` },
    INTERNAL_SERVER_ERROR: { value: `500` },
    CONFLICT: { value: `409` },
    INSUFFICIENT_STORAGE: { value: `507` },
    HTTP_VERSION_NOT_SUPPORTED: { value: `505` },
    UNSUPPORTED_MEDIA_TYPE: { value: `415` },
    NO_CONTENT: { value: `204` },
    PROXY_AUTHENTICATION_REQUIRED: { value: `407` },
    REQUEST_HEADER_FIELDS_TOO_LARGE: { value: `431` },
    PAYMENT_REQUIRED: { value: `402` },
    CREATED: { value: `201` },
    MOVED_PERMANENTLY: { value: `301` },
    UNAUTHORIZED: { value: `401` },
    REQUEST_URI_TOO_LONG: { value: `414` },
    OK: { value: `200` },
    REQUESTED_RANGE_NOT_SATISFIABLE: { value: `416` },
    BAD_REQUEST: { value: `400` },
    SEE_OTHER: { value: `303` },
    FORBIDDEN: { value: `403` },
    CONTINUE: { value: `100` },
    PRECONDITION_REQUIRED: { value: `428` },
    NOT_MODIFIED: { value: `304` },
    NOT_IMPLEMENTED: { value: `501` },
    I_AM_A_TEAPOT: { value: `418` },
    ALREADY_REPORTED: { value: `208` },
    NON_AUTHORITATIVE_INFORMATION: { value: `203` },
    PRECONDITION_FAILED: { value: `412` },
    LOOP_DETECTED: { value: `508` },
    CHECKPOINT: { value: `103` },
    SERVICE_UNAVAILABLE: { value: `503` },
    MULTI_STATUS: { value: `207` },
  },
});

export const Include = new graphql.GraphQLEnumType({
  name: "Include",
  values: {
    NON_EMPTY: { value: `NON_EMPTY` },
    NON_ABSENT: { value: `NON_ABSENT` },
    USE_DEFAULTS: { value: `USE_DEFAULTS` },
    NON_NULL: { value: `NON_NULL` },
    ALWAYS: { value: `ALWAYS` },
    NON_DEFAULT: { value: `NON_DEFAULT` },
  },
});

export const Key = new graphql.GraphQLEnumType({
  name: "Key",
  values: {
    CREATE: { value: `CREATE` },
    USE_DECLARED_QUERY: { value: `USE_DECLARED_QUERY` },
    CREATE_IF_NOT_FOUND: { value: `CREATE_IF_NOT_FOUND` },
  },
});

export const Level = new graphql.GraphQLEnumType({
  name: "Level",
  values: {
    CONFIG: { value: `CONFIG` },
    ALL: { value: `ALL` },
    SEVERE: { value: `SEVERE` },
    FINER: { value: `FINER` },
    FINEST: { value: `FINEST` },
    FINE: { value: `FINE` },
    INFO: { value: `INFO` },
    WARNING: { value: `WARNING` },
    OFF: { value: `OFF` },
  },
});

export const Mode = new graphql.GraphQLEnumType({
  name: "Mode",
  values: {
    CONSOLE: { value: `CONSOLE` },
    LOG: { value: `LOG` },
    OFF: { value: `OFF` },
  },
});

export const NullHandling = new graphql.GraphQLEnumType({
  name: "NullHandling",
  values: {
    NATIVE: { value: `NATIVE` },
    NULLS_FIRST: { value: `NULLS_FIRST` },
    NULLS_LAST: { value: `NULLS_LAST` },
  },
});

export const Operation = new graphql.GraphQLEnumType({
  name: "Operation",
  values: {
    ADD: { value: `ADD` },
    MODULUS: { value: `MODULUS` },
    POWER: { value: `POWER` },
    MULTIPLY: { value: `MULTIPLY` },
    SUBTRACT: { value: `SUBTRACT` },
    DIVIDE: { value: `DIVIDE` },
  },
});

export const Order = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Order(isInput: true): graphql.GraphQLInputObjectType;
  function Order(isInput: false): graphql.GraphQLObjectType;
  function Order(isInput: any) {
    let name = isInput ? `OrderInput` : `Order`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          serialVersionUID: { type: graphql.GraphQLFloat, description: `` },
          nullHandling: { type: NullHandling, description: `` },
          ignoreCase: { type: graphql.GraphQLBoolean, description: `` },
          property: { type: graphql.GraphQLString, description: `` },
          DEFAULT_IGNORE_CASE: { type: graphql.GraphQLBoolean, description: `` },
          direction: { type: Direction, description: `` },
          descending: { type: graphql.GraphQLBoolean, description: `` },
          ascending: { type: graphql.GraphQLBoolean, description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Order;
})();

export const Page = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Page(
    isInput: true,
    T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLInputObjectType;
  function Page(
    isInput: false,
    T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLObjectType;
  function Page(isInput: any, T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null = null) {
    let name = isInput ? `Page_${T}Input` : `Page_${T}`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          ...(function() {
            const fields = Slice(isInput, T!).getFields();
            const result: any = {};
            Object.keys(fields).forEach(
              (k) => (result[k] = { type: fields[k].type, description: fields[k].description }),
            );
            return result;
          })(),
          totalElements: { type: graphql.GraphQLFloat, description: `` },
          totalPages: { type: graphql.GraphQLFloat, description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Page;
})();

export const ReferenceType = new graphql.GraphQLEnumType({
  name: "ReferenceType",
  values: {
    WEAK: { value: `WEAK` },
    SOFT: { value: `SOFT` },
  },
});

export const RequestMethod = new graphql.GraphQLEnumType({
  name: "RequestMethod",
  values: {
    TRACE: { value: `TRACE` },
    HEAD: { value: `HEAD` },
    DELETE: { value: `DELETE` },
    POST: { value: `POST` },
    GET: { value: `GET` },
    OPTIONS: { value: `OPTIONS` },
    PUT: { value: `PUT` },
    PATCH: { value: `PATCH` },
  },
});

export const Restructure = new graphql.GraphQLEnumType({
  name: "Restructure",
  values: {
    WHEN_NECESSARY: { value: `WHEN_NECESSARY` },
    NEVER: { value: `NEVER` },
  },
});

export const ScopedProxyMode = new graphql.GraphQLEnumType({
  name: "ScopedProxyMode",
  values: {
    NO: { value: `NO` },
    TARGET_CLASS: { value: `TARGET_CLASS` },
    INTERFACES: { value: `INTERFACES` },
    DEFAULT: { value: `DEFAULT` },
  },
});

export const Slice = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Slice(
    isInput: true,
    T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLInputObjectType;
  function Slice(
    isInput: false,
    T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLObjectType;
  function Slice(isInput: any, T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null = null) {
    let name = isInput ? `Slice_${T}Input` : `Slice_${T}`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          last: { type: graphql.GraphQLBoolean, description: `` },
          content: { type: new graphql.GraphQLList(T!), description: `` },
          number: { type: graphql.GraphQLFloat, description: `` },
          first: { type: graphql.GraphQLBoolean, description: `` },
          sort: { type: Sort(isInput), description: `` },
          size: { type: graphql.GraphQLFloat, description: `` },
          numberOfElements: { type: graphql.GraphQLFloat, description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Slice;
})();

export const Sort = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Sort(isInput: true): graphql.GraphQLInputObjectType;
  function Sort(isInput: false): graphql.GraphQLObjectType;
  function Sort(isInput: any) {
    let name = isInput ? `SortInput` : `Sort`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          DEFAULT_DIRECTION: { type: Direction, description: `` },
          serialVersionUID: { type: graphql.GraphQLFloat, description: `` },
          orders: { type: new graphql.GraphQLList(Order(isInput)), description: `` },
          orderFor: { type: Order(isInput), description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Sort;
})();

export const State = new graphql.GraphQLEnumType({
  name: "State",
  values: {
    DISPOSED: { value: `DISPOSED` },
    VALID: { value: `VALID` },
    BEING_DISPOSED: { value: `BEING_DISPOSED` },
  },
});

export const Status = new graphql.GraphQLEnumType({
  name: "Status",
  values: {
    ALLOWED: { value: `ALLOWED` },
    UNDECIDED: { value: `UNDECIDED` },
    REJECTED: { value: `REJECTED` },
  },
});

export const TaskOption = new graphql.GraphQLEnumType({
  name: "TaskOption",
  values: {
    RESTRUCTURE_BEFORE: { value: `RESTRUCTURE_BEFORE` },
    RESIZE: { value: `RESIZE` },
    SKIP_IF_EMPTY: { value: `SKIP_IF_EMPTY` },
    RESTRUCTURE_AFTER: { value: `RESTRUCTURE_AFTER` },
  },
});

export const Any = new graphql.GraphQLScalarType({
  name: "Any",
  description: "Любое значение которое не получилось сериализовать",
  serialize: (v) => v,
  parseValue: (v) => v,
  parseLiteral(ast) {
    switch (ast.kind) {
      case "BooleanValue":
        return ast.value;
      case "EnumValue":
        return ast.value;
      case "FloatValue":
        return ast.value;
      case "IntValue":
        return ast.value;
      case "ListValue":
        return ast.values;
      case "NullValue":
        return null;
      case "ObjectValue":
        return ast.fields;
      case "StringValue":
        return ast.value;
      case "Variable":
        return ast.name;
    }
  },
});
