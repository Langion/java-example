/* tslint:disable */

export enum AccessEnum {
  AUTO = "AUTO",
  WRITE_ONLY = "WRITE_ONLY",
  READ_ONLY = "READ_ONLY",
  READ_WRITE = "READ_WRITE",
}

export type Access = "AUTO" | "WRITE_ONLY" | "READ_ONLY" | "READ_WRITE";

export enum AutowireEnum {
  NO = "NO",
  BY_NAME = "BY_NAME",
  BY_TYPE = "BY_TYPE",
}

export type Autowire = "NO" | "BY_NAME" | "BY_TYPE";

export enum CauseEnum {
  AUTOMATIC_TRAVERSE = "AUTOMATIC_TRAVERSE",
  ACTIVATION = "ACTIVATION",
  TRAVERSAL = "TRAVERSAL",
  TRAVERSAL_UP = "TRAVERSAL_UP",
  TRAVERSAL_FORWARD = "TRAVERSAL_FORWARD",
  TRAVERSAL_DOWN = "TRAVERSAL_DOWN",
  RETARGETED = "RETARGETED",
  TRAVERSAL_BACKWARD = "TRAVERSAL_BACKWARD",
  NATIVE_SYSTEM = "NATIVE_SYSTEM",
  MOUSE_EVENT = "MOUSE_EVENT",
  ROLLBACK = "ROLLBACK",
  CLEAR_GLOBAL_FOCUS_OWNER = "CLEAR_GLOBAL_FOCUS_OWNER",
  UNKNOWN = "UNKNOWN",
  MANUAL_REQUEST = "MANUAL_REQUEST",
}

export type Cause =
  | "AUTOMATIC_TRAVERSE"
  | "ACTIVATION"
  | "TRAVERSAL"
  | "TRAVERSAL_UP"
  | "TRAVERSAL_FORWARD"
  | "TRAVERSAL_DOWN"
  | "RETARGETED"
  | "TRAVERSAL_BACKWARD"
  | "NATIVE_SYSTEM"
  | "MOUSE_EVENT"
  | "ROLLBACK"
  | "CLEAR_GLOBAL_FOCUS_OWNER"
  | "UNKNOWN"
  | "MANUAL_REQUEST";

export enum ConfigurationPhaseEnum {
  PARSE_CONFIGURATION = "PARSE_CONFIGURATION",
  REGISTER_BEAN = "REGISTER_BEAN",
}

export type ConfigurationPhase = "PARSE_CONFIGURATION" | "REGISTER_BEAN";

export enum DirectionEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type Direction = "ASC" | "DESC";

export enum EAttributeEnum {
  ESTRIKETHROUGH = "strikethrough",
  EJUSTIFICATION = "justification",
  ERUN_DIRECTION = "run_direction",
  ETRANSFORM = "transform",
  ENUMERIC_SHAPING = "numeric_shaping",
  EPOSTURE = "posture",
  EINPUT_METHOD_UNDERLINE = "input_method_underline",
  EUNDERLINE = "underline",
  EWIDTH = "width",
  EINPUT_METHOD_HIGHLIGHT = "input_method_highlight",
  ESWAP_COLORS = "swap_colors",
  ECHAR_REPLACEMENT = "char_replacement",
  EKERNING = "kerning",
  ETRACKING = "tracking",
  EWEIGHT = "weight",
  EFAMILY = "family",
  EBIDI_EMBEDDING = "bidi_embedding",
  ESUPERSCRIPT = "superscript",
  ESIZE = "size",
  EBACKGROUND = "background",
  EFONT = "font",
  ELIGATURES = "ligatures",
  EFOREGROUND = "foreground",
  EBASELINE_TRANSFORM = "baseline_transform",
}

export type EAttribute =
  | "strikethrough"
  | "justification"
  | "run_direction"
  | "transform"
  | "numeric_shaping"
  | "posture"
  | "input_method_underline"
  | "underline"
  | "width"
  | "input_method_highlight"
  | "swap_colors"
  | "char_replacement"
  | "kerning"
  | "tracking"
  | "weight"
  | "family"
  | "bidi_embedding"
  | "superscript"
  | "size"
  | "background"
  | "font"
  | "ligatures"
  | "foreground"
  | "baseline_transform";

export enum FilterTypeEnum {
  REGEX = "REGEX",
  ANNOTATION = "ANNOTATION",
  ASSIGNABLE_TYPE = "ASSIGNABLE_TYPE",
  CUSTOM = "CUSTOM",
  ASPECTJ = "ASPECTJ",
}

export type FilterType = "REGEX" | "ANNOTATION" | "ASSIGNABLE_TYPE" | "CUSTOM" | "ASPECTJ";

export enum HttpMethodEnum {
  TRACE = "TRACE",
  HEAD = "HEAD",
  DELETE = "DELETE",
  POST = "POST",
  GET = "GET",
  OPTIONS = "OPTIONS",
  PUT = "PUT",
  PATCH = "PATCH",
}

export type HttpMethod = "TRACE" | "HEAD" | "DELETE" | "POST" | "GET" | "OPTIONS" | "PUT" | "PATCH";

export enum HttpStatusEnum {
  REQUEST_TIMEOUT = "408",
  INSUFFICIENT_SPACE_ON_RESOURCE = "419",
  USE_PROXY = "305",
  UNPROCESSABLE_ENTITY = "422",
  PROCESSING = "102",
  TEMPORARY_REDIRECT = "307",
  NOT_EXTENDED = "510",
  MOVED_TEMPORARILY = "302",
  PAYLOAD_TOO_LARGE = "413",
  VARIANT_ALSO_NEGOTIATES = "506",
  FAILED_DEPENDENCY = "424",
  ACCEPTED = "202",
  BAD_GATEWAY = "502",
  URI_TOO_LONG = "414",
  IM_USED = "226",
  NOT_ACCEPTABLE = "406",
  RESET_CONTENT = "205",
  PARTIAL_CONTENT = "206",
  GATEWAY_TIMEOUT = "504",
  DESTINATION_LOCKED = "421",
  FOUND = "302",
  METHOD_FAILURE = "420",
  METHOD_NOT_ALLOWED = "405",
  EXPECTATION_FAILED = "417",
  LOCKED = "423",
  NOT_FOUND = "404",
  PERMANENT_REDIRECT = "308",
  LENGTH_REQUIRED = "411",
  BANDWIDTH_LIMIT_EXCEEDED = "509",
  MULTIPLE_CHOICES = "300",
  REQUEST_ENTITY_TOO_LARGE = "413",
  NETWORK_AUTHENTICATION_REQUIRED = "511",
  SWITCHING_PROTOCOLS = "101",
  GONE = "410",
  UPGRADE_REQUIRED = "426",
  UNAVAILABLE_FOR_LEGAL_REASONS = "451",
  TOO_MANY_REQUESTS = "429",
  INTERNAL_SERVER_ERROR = "500",
  CONFLICT = "409",
  INSUFFICIENT_STORAGE = "507",
  HTTP_VERSION_NOT_SUPPORTED = "505",
  UNSUPPORTED_MEDIA_TYPE = "415",
  NO_CONTENT = "204",
  PROXY_AUTHENTICATION_REQUIRED = "407",
  REQUEST_HEADER_FIELDS_TOO_LARGE = "431",
  PAYMENT_REQUIRED = "402",
  CREATED = "201",
  MOVED_PERMANENTLY = "301",
  UNAUTHORIZED = "401",
  REQUEST_URI_TOO_LONG = "414",
  OK = "200",
  REQUESTED_RANGE_NOT_SATISFIABLE = "416",
  BAD_REQUEST = "400",
  SEE_OTHER = "303",
  FORBIDDEN = "403",
  CONTINUE = "100",
  PRECONDITION_REQUIRED = "428",
  NOT_MODIFIED = "304",
  NOT_IMPLEMENTED = "501",
  I_AM_A_TEAPOT = "418",
  ALREADY_REPORTED = "208",
  NON_AUTHORITATIVE_INFORMATION = "203",
  PRECONDITION_FAILED = "412",
  LOOP_DETECTED = "508",
  CHECKPOINT = "103",
  SERVICE_UNAVAILABLE = "503",
  MULTI_STATUS = "207",
}

export type HttpStatus =
  | "408"
  | "419"
  | "305"
  | "422"
  | "102"
  | "307"
  | "510"
  | "302"
  | "413"
  | "506"
  | "424"
  | "202"
  | "502"
  | "414"
  | "226"
  | "406"
  | "205"
  | "206"
  | "504"
  | "421"
  | "302"
  | "420"
  | "405"
  | "417"
  | "423"
  | "404"
  | "308"
  | "411"
  | "509"
  | "300"
  | "413"
  | "511"
  | "101"
  | "410"
  | "426"
  | "451"
  | "429"
  | "500"
  | "409"
  | "507"
  | "505"
  | "415"
  | "204"
  | "407"
  | "431"
  | "402"
  | "201"
  | "301"
  | "401"
  | "414"
  | "200"
  | "416"
  | "400"
  | "303"
  | "403"
  | "100"
  | "428"
  | "304"
  | "501"
  | "418"
  | "208"
  | "203"
  | "412"
  | "508"
  | "103"
  | "503"
  | "207";

export enum IncludeEnum {
  NON_EMPTY = "NON_EMPTY",
  NON_ABSENT = "NON_ABSENT",
  USE_DEFAULTS = "USE_DEFAULTS",
  NON_NULL = "NON_NULL",
  ALWAYS = "ALWAYS",
  NON_DEFAULT = "NON_DEFAULT",
}

export type Include = "NON_EMPTY" | "NON_ABSENT" | "USE_DEFAULTS" | "NON_NULL" | "ALWAYS" | "NON_DEFAULT";

export enum KeyEnum {
  CREATE = "CREATE",
  USE_DECLARED_QUERY = "USE_DECLARED_QUERY",
  CREATE_IF_NOT_FOUND = "CREATE_IF_NOT_FOUND",
}

export type Key = "CREATE" | "USE_DECLARED_QUERY" | "CREATE_IF_NOT_FOUND";

export enum LevelEnum {
  CONFIG = "CONFIG",
  ALL = "ALL",
  SEVERE = "SEVERE",
  FINER = "FINER",
  FINEST = "FINEST",
  FINE = "FINE",
  INFO = "INFO",
  WARNING = "WARNING",
  OFF = "OFF",
}

export type Level = "CONFIG" | "ALL" | "SEVERE" | "FINER" | "FINEST" | "FINE" | "INFO" | "WARNING" | "OFF";

export enum ModeEnum {
  CONSOLE = "CONSOLE",
  LOG = "LOG",
  OFF = "OFF",
}

export type Mode = "CONSOLE" | "LOG" | "OFF";

export enum NullHandlingEnum {
  NATIVE = "NATIVE",
  NULLS_FIRST = "NULLS_FIRST",
  NULLS_LAST = "NULLS_LAST",
}

export type NullHandling = "NATIVE" | "NULLS_FIRST" | "NULLS_LAST";

export enum OperationEnum {
  ADD = "ADD",
  MODULUS = "MODULUS",
  POWER = "POWER",
  MULTIPLY = "MULTIPLY",
  SUBTRACT = "SUBTRACT",
  DIVIDE = "DIVIDE",
}

export type Operation = "ADD" | "MODULUS" | "POWER" | "MULTIPLY" | "SUBTRACT" | "DIVIDE";

export interface Order {
  serialVersionUID?: number;
  nullHandling?: NullHandling;
  ignoreCase?: boolean;
  property?: string;
  DEFAULT_IGNORE_CASE?: boolean;
  direction?: Direction;
  descending?: boolean;
  ascending?: boolean;
}

export interface Page<T = void> extends Slice<T> {
  totalElements?: number;
  totalPages?: number;
}

export enum ReferenceTypeEnum {
  WEAK = "WEAK",
  SOFT = "SOFT",
}

export type ReferenceType = "WEAK" | "SOFT";

export enum RequestMethodEnum {
  TRACE = "TRACE",
  HEAD = "HEAD",
  DELETE = "DELETE",
  POST = "POST",
  GET = "GET",
  OPTIONS = "OPTIONS",
  PUT = "PUT",
  PATCH = "PATCH",
}

export type RequestMethod = "TRACE" | "HEAD" | "DELETE" | "POST" | "GET" | "OPTIONS" | "PUT" | "PATCH";

export enum RestructureEnum {
  WHEN_NECESSARY = "WHEN_NECESSARY",
  NEVER = "NEVER",
}

export type Restructure = "WHEN_NECESSARY" | "NEVER";

export enum ScopedProxyModeEnum {
  NO = "NO",
  TARGET_CLASS = "TARGET_CLASS",
  INTERFACES = "INTERFACES",
  DEFAULT = "DEFAULT",
}

export type ScopedProxyMode = "NO" | "TARGET_CLASS" | "INTERFACES" | "DEFAULT";

export interface Slice<T = void> {
  last?: boolean;
  content?: T[];
  number?: number;
  first?: boolean;
  sort?: Sort;
  size?: number;
  numberOfElements?: number;
}

export interface Sort {
  DEFAULT_DIRECTION?: Direction;
  serialVersionUID?: number;
  orders?: Order[];
  orderFor?: Order;
}

export enum StateEnum {
  DISPOSED = "DISPOSED",
  VALID = "VALID",
  BEING_DISPOSED = "BEING_DISPOSED",
}

export type State = "DISPOSED" | "VALID" | "BEING_DISPOSED";

export enum StatusEnum {
  ALLOWED = "ALLOWED",
  UNDECIDED = "UNDECIDED",
  REJECTED = "REJECTED",
}

export type Status = "ALLOWED" | "UNDECIDED" | "REJECTED";

export enum TaskOptionEnum {
  RESTRUCTURE_BEFORE = "RESTRUCTURE_BEFORE",
  RESIZE = "RESIZE",
  SKIP_IF_EMPTY = "SKIP_IF_EMPTY",
  RESTRUCTURE_AFTER = "RESTRUCTURE_AFTER",
}

export type TaskOption = "RESTRUCTURE_BEFORE" | "RESIZE" | "SKIP_IF_EMPTY" | "RESTRUCTURE_AFTER";
