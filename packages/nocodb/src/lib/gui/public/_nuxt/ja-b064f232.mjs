const general = {
  home: "\u30DB\u30FC\u30E0",
  load: "\u8AAD\u307F\u8FBC\u307F",
  open: "\u958B\u304F",
  close: "\u9589\u3058\u308B",
  yes: "\u306F\u3044",
  no: "\u3044\u3044\u3048",
  ok: "OK",
  and: "\u3068",
  or: "\u307E\u305F\u306F",
  add: "\u8FFD\u52A0",
  edit: "\u7DE8\u96C6",
  remove: "\u524A\u9664",
  save: "\u4FDD\u5B58",
  cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
  submit: "\u9001\u4FE1",
  create: "\u4F5C\u6210",
  insert: "\u633F\u5165",
  "delete": "\u524A\u9664",
  update: "\u66F4\u65B0",
  rename: "\u30EA\u30CD\u30FC\u30E0",
  reload: "\u30EA\u30ED\u30FC\u30C9",
  reset: "\u30EA\u30BB\u30C3\u30C8",
  install: "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
  show: "\u8868\u793A",
  hide: "\u96A0\u3059",
  showAll: "\u3059\u3079\u3066\u8868\u793A",
  hideAll: "\u3059\u3079\u3066\u96A0\u3059",
  showMore: "\u3082\u3063\u3068\u8868\u793A",
  showOptions: "\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8868\u793A",
  hideOptions: "\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u96A0\u3059",
  showMenu: "\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A",
  hideMenu: "\u30E1\u30CB\u30E5\u30FC\u3092\u96A0\u3059",
  addAll: "\u3059\u3079\u3066\u8FFD\u52A0",
  removeAll: "\u3059\u3079\u3066\u524A\u9664",
  signUp: "\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7",
  signIn: "\u30ED\u30B0\u30A4\u30F3",
  signOut: "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",
  required: "\u5FC5\u9808",
  preferred: "\u63A8\u5968",
  mandatory: "\u5FC5\u9808",
  loading: "\u8AAD\u8FBC\u4E2D...",
  title: "\u30BF\u30A4\u30C8\u30EB",
  upload: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  download: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
  "default": "\u30C7\u30D5\u30A9\u30EB\u30C8",
  more: "More",
  less: "Less",
  event: "\u30A4\u30D9\u30F3\u30C8",
  condition: "\u6761\u4EF6",
  after: "\u5F8C",
  before: "\u524D",
  search: "\u691C\u7D22",
  notification: "\u901A\u77E5",
  reference: "\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9",
  "function": "\u95A2\u6570"
};
const objects = {
  project: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  projects: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  table: "\u30C6\u30FC\u30D6\u30EB",
  tables: "\u30C6\u30FC\u30D6\u30EB",
  field: "\u30D5\u30A3\u30FC\u30EB\u30C9",
  fields: "\u30D5\u30A3\u30FC\u30EB\u30C9",
  column: "\u5217",
  columns: "\u5217",
  page: "\u30DA\u30FC\u30B8",
  pages: "\u30DA\u30FC\u30B8",
  record: "\u30EC\u30B3\u30FC\u30C9",
  records: "\u30EC\u30B3\u30FC\u30C9",
  webhook: "Webhook",
  webhooks: "Webhook",
  view: "\u30D3\u30E5\u30FC",
  views: "\u30D3\u30E5\u30FC",
  viewType: {
    grid: "\u30B0\u30EA\u30C3\u30C9",
    gallery: "\u30AE\u30E3\u30E9\u30EA\u30FC",
    form: "\u30D5\u30A9\u30FC\u30E0",
    kanban: "\u30AB\u30F3\u30D0\u30F3",
    calendar: "\u30AB\u30EC\u30F3\u30C0\u30FC"
  },
  user: "\u30E6\u30FC\u30B6\u30FC",
  users: "\u30E6\u30FC\u30B6\u30FC",
  role: "\u5F79\u5272",
  roles: "\u5F79\u5272",
  roleType: {
    owner: "\u6240\u6709\u8005",
    creator: "\u4F5C\u6210\u8005",
    editor: "\u7DE8\u96C6\u8005",
    commenter: "\u30B3\u30E1\u30F3\u30BF\u30FC",
    viewer: "\u95B2\u89A7\u8005"
  }
};
const datatype = {
  ID: "ID",
  ForeignKey: "\u5916\u90E8\u30AD\u30FC",
  SingleLineText: "\u30C6\u30AD\u30B9\u30C8",
  LongText: "\u6587\u7AE0",
  Attachment: "\u30D5\u30A1\u30A4\u30EB\u3092\u6DFB\u4ED8",
  Checkbox: "\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9",
  MultiSelect: "\u8907\u6570\u9078\u629E",
  SingleSelect: "\u5358\u4E00\u9078\u629E",
  Collaborator: "\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",
  "Date": "\u65E5",
  Year: "\u5E74",
  Time: "\u6642\u9593",
  PhoneNumber: "\u96FB\u8A71\u756A\u53F7",
  Email: "E\u30E1\u30FC\u30EB",
  URL: "URL",
  "Number": "\u6570\u5024",
  Decimal: "Decimal\u578B",
  Currency: "\u901A\u8CA8",
  Percent: "\u30D1\u30FC\u30BB\u30F3\u30C8",
  Duration: "\u9593\u9694",
  Rating: "\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0",
  Formula: "\u65B9\u5F0F",
  Rollup: "\u30ED\u30FC\u30EB\u30A2\u30C3\u30D7",
  Count: "\u30AB\u30A6\u30F3\u30C8",
  Lookup: "\u30EB\u30C3\u30AF\u30A2\u30C3\u30D7",
  DateTime: "DateTime\u578B",
  CreateTime: "\u4F5C\u6210\u6642\u523B",
  LastModifiedTime: "\u6700\u7D42\u66F4\u65B0\u65E5\u6642",
  AutoNumber: "\u81EA\u52D5\u63A1\u756A",
  Barcode: "\u30D0\u30FC\u30B3\u30FC\u30C9",
  Button: "\u30DC\u30BF\u30F3",
  Password: "\u30D1\u30B9\u30EF\u30FC\u30C9",
  relationProperties: {
    noAction: "\u4F55\u3082\u3057\u306A\u3044",
    cascade: "\u30AB\u30B9\u30B1\u30FC\u30C9",
    restrict: "\u5236\u7D04",
    setNull: "null\u3068\u3059\u308B",
    setDefault: "\u30C7\u30D5\u30A9\u30EB\u30C8\u3068\u3059\u308B"
  }
};
const filterOperation = {
  isEqual: "\u5B8C\u5168\u4E00\u81F4",
  isNotEqual: "\u5B8C\u5168\u4E0D\u4E00\u81F4",
  isLike: "\u90E8\u5206\u4E00\u81F4",
  "isNot like": "\u90E8\u5206\u4E0D\u4E00\u81F4",
  isEmpty: "\u304C\u7A7A\u6B04",
  isNotEmpty: "\u304C\u7A7A\u6B04\u3067\u306A\u3044",
  isNull: "\u304Cnull",
  isNotNull: "\u304Cnull\u3067\u306A\u3044"
};
const title = {
  newProj: "\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  myProject: "\u30DE\u30A4\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  formTitle: "\u30D5\u30A9\u30FC\u30E0\u30BF\u30A4\u30C8\u30EB",
  collabView: "\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\u30D3\u30E5\u30FC",
  lockedView: "\u30ED\u30C3\u30AF\u30D3\u30E5\u30FC",
  personalView: "\u30D1\u30FC\u30BD\u30CA\u30EB\u30D3\u30E5\u30FC",
  appStore: "\u30A2\u30D7\u30EA\u30B9\u30C8\u30A2",
  teamAndAuth: "\u30C1\u30FC\u30E0\u3068\u8A8D\u53EF",
  rolesUserMgmt: "\u30ED\u30FC\u30EB\u3068\u30E6\u30FC\u30B6\u30FC\u7BA1\u7406",
  userMgmt: "\u30E6\u30FC\u30B6\u30FC\u7BA1\u7406",
  apiTokenMgmt: "API\u30C8\u30FC\u30AF\u30F3\u7BA1\u7406",
  rolesMgmt: "\u30ED\u30FC\u30EB\u7BA1\u7406",
  projMeta: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30E1\u30BF\u30C7\u30FC\u30BF",
  metaMgmt: "\u30E1\u30BF\u7BA1\u7406",
  metadata: "\u30E1\u30BF\u30C7\u30FC\u30BF",
  exportImportMeta: "\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8/\u30A4\u30F3\u30DD\u30FC\u30C8",
  uiACL: "UI\u30A2\u30AF\u30BB\u30B9\u5236\u5FA1",
  metaOperations: "\u30E1\u30BF\u30C7\u30FC\u30BF\u64CD\u4F5C",
  audit: "\u76E3\u67FB",
  auditLogs: "\u76E3\u67FB\u30ED\u30B0",
  sqlMigrations: "SQL\u79FB\u884C",
  dbCredentials: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A8D\u8A3C\u60C5\u5831",
  advancedParameters: "SSL\uFF06\u9AD8\u5EA6\u306A\u30D1\u30E9\u30E1\u30FC\u30BF",
  headCreateProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210 | NocoDB",
  headLogin: "\u30ED\u30B0\u30A4\u30F3 | NocoDB",
  resetPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B",
  teamAndSettings: "Team & Settings",
  apiDocs: "API Docs",
  importFromAirtable: "Import From Airtable"
};
const labels = {
  notifyVia: "\u6B21\u3067\u901A\u77E5\u3059\u308B",
  projName: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D",
  tableName: "\u30C6\u30FC\u30D6\u30EB\u306E\u540D\u524D",
  viewName: "\u30D3\u30E5\u30FC\u306E\u540D\u524D",
  viewLink: "\u30D3\u30E5\u30FC\u306E\u30EA\u30F3\u30AF",
  columnName: "\u5217\u540D",
  columnType: "\u5217\u306E\u30C7\u30FC\u30BF\u578B",
  roleName: "\u30ED\u30FC\u30EB\u540D",
  roleDescription: "\u30ED\u30FC\u30EB\u306E\u8AAC\u660E",
  databaseType: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306E\u30C7\u30FC\u30BF\u578B",
  lengthValue: "\u9577\u3055/\u5024",
  dbType: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C7\u30FC\u30BF\u578B",
  sqliteFile: "SQLite\u30D5\u30A1\u30A4\u30EB",
  hostAddress: "\u30DB\u30B9\u30C8\u30A2\u30C9\u30EC\u30B9",
  port: "\u30DD\u30FC\u30C8\u756A\u53F7",
  username: "\u30E6\u30FC\u30B6\u30FC\u540D",
  password: "\u30D1\u30B9\u30EF\u30FC\u30C9",
  schemaName: "Schema name",
  action: "\u30A2\u30AF\u30B7\u30E7\u30F3",
  actions: "\u30A2\u30AF\u30B7\u30E7\u30F3",
  operation: "\u64CD\u4F5C",
  operationType: "\u64CD\u4F5C\u30BF\u30A4\u30D7",
  operationSubType: "\u64CD\u4F5C\u30B5\u30D6\u30BF\u30A4\u30D7",
  description: "\u8AAC\u660E",
  authentication: "\u8A8D\u8A3C",
  token: "\u30C8\u30FC\u30AF\u30F3",
  where: "\u5BFE\u8C61",
  cache: "\u30AD\u30E3\u30C3\u30B7\u30E5",
  chat: "\u30C1\u30E3\u30C3\u30C8",
  email: "E\u30E1\u30FC\u30EB",
  storage: "\u30B9\u30C8\u30EC\u30FC\u30B8",
  uiAcl: "UI-ACL",
  models: "\u30E2\u30C7\u30EB",
  syncState: "\u540C\u671F\u72B6\u614B",
  created: "\u4F5C\u6210\u6E08",
  sqlOutput: "SQL\u51FA\u529B",
  addOption: "\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0",
  aggregateFunction: "\u96C6\u7D04\u95A2\u6570",
  dbCreateIfNotExists: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\uFF1A\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u4F5C\u6210",
  clientKey: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30AD\u30FC",
  clientCert: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u8A3C\u660E\u66F8",
  serverCA: "\u30B5\u30FC\u30D0\u30FCCA.",
  requriedCa: "\u5FC5\u9808 - CA",
  requriedIdentity: "\u5FC5\u9808 - IDENTITY",
  inflection: {
    tableName: "\u5909\u66F4 - \u30C6\u30FC\u30D6\u30EB\u540D",
    columnName: "\u5909\u66F4 - \u5217\u540D"
  },
  community: {
    starUs1: "\u30B9\u30BF\u30FC",
    starUs2: "\u3092 Github \u4E0A\u3067\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",
    bookDemo: "\u30C7\u30E2\u3092\u4E88\u7D04",
    getAnswered: "\u3042\u306A\u305F\u306E\u8CEA\u554F\u306B\u56DE\u7B54\u3057\u307E\u3057\u3087\u3046",
    joinDiscord: "Discord \u306B\u53C2\u52A0",
    joinCommunity: "Join NocoDB Community",
    joinReddit: "/r/NocoDB \u306B\u53C2\u52A0",
    followNocodb: "NocoDB \u3092\u30D5\u30A9\u30ED\u30FC"
  },
  docReference: "\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",
  selectUserRole: "\u30E6\u30FC\u30B6\u30FC\u306E\u30ED\u30FC\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
  childTable: "\u5B50\u30C6\u30FC\u30D6\u30EB",
  childColumn: "\u5B50\u30AB\u30E9\u30E0",
  onUpdate: "\u66F4\u65B0\u4E2D",
  onDelete: "\u524A\u9664\u4E2D"
};
const activity = {
  createProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210",
  importProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30A4\u30F3\u30DD\u30FC\u30C8",
  searchProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u691C\u7D22",
  editProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7DE8\u96C6",
  stopProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u505C\u6B62",
  startProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB",
  restartProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u958B",
  deleteProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u524A\u9664",
  refreshProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u66F4\u65B0",
  saveProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u5B58",
  createProjectExtended: {
    extDB: "\u5916\u90E8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B <br> \u63A5\u7D9A\u3057\u3066\u4F5C\u6210",
    excel: "Excel\u304B\u3089\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210",
    template: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304B\u3089\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210"
  },
  OkSaveProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u5B58",
  upgrade: {
    available: "\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u53EF\u80FD",
    releaseNote: "\u30EA\u30EA\u30FC\u30B9\u30CE\u30FC\u30C8",
    howTo: "\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u65B9\u6CD5"
  },
  translate: "\u7FFB\u8A33\u306B\u5354\u529B\u3059\u308B",
  account: {
    authToken: "Auth Token\u3092\u30B3\u30D4\u30FC",
    swagger: "Swagger API Doc.",
    projInfo: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u60C5\u5831\u3092\u30B3\u30D4\u30FC",
    themes: "\u30C6\u30FC\u30DE"
  },
  sort: "\u30BD\u30FC\u30C8",
  addSort: "\u30BD\u30FC\u30C8\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0",
  filter: "\u30D5\u30A3\u30EB\u30BF\u30FC",
  addFilter: "\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u8FFD\u52A0",
  share: "\u5171\u6709",
  shareBase: {
    disable: "\u30C6\u30FC\u30D6\u30EB\u306E\u5171\u6709\u3092\u7121\u52B9\u306B\u3059\u308B",
    enable: "\u30EA\u30F3\u30AF\u3092\u6301\u3064\u4EBA\u306A\u3089\u8AB0\u3067\u3082",
    link: "\u30C6\u30FC\u30D6\u30EB\u306E\u5171\u6709\u30EA\u30F3\u30AF"
  },
  invite: "\u62DB\u5F85",
  inviteMore: "\u3055\u3089\u306B\u62DB\u5F85",
  inviteTeam: "\u30C1\u30FC\u30E0\u3078\u62DB\u5F85",
  inviteToken: "\u62DB\u5F85\u7528\u30C8\u30FC\u30AF\u30F3",
  newUser: "\u30E6\u30FC\u30B6\u30FC\u3092\u4F5C\u6210",
  editUser: "\u30E6\u30FC\u30B6\u30FC\u3092\u7DE8\u96C6",
  deleteUser: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304B\u3089\u30E6\u30FC\u30B6\u30FC\u3092\u524A\u9664",
  resendInvite: "\u62DB\u5F85\u7528\u30E1\u30FC\u30EB\u3092\u518D\u9001\u4FE1",
  copyInviteURL: "\u62DB\u5F85\u7528 URL \u3092\u30B3\u30D4\u30FC",
  newRole: "\u65B0\u3057\u3044\u30ED\u30FC\u30EB",
  reloadRoles: "\u30ED\u30FC\u30EB\u3092\u30EA\u30ED\u30FC\u30C9",
  nextPage: "\u6B21\u306E\u30DA\u30FC\u30B8",
  prevPage: "\u524D\u306E\u30DA\u30FC\u30B8",
  nextRecord: "\u6B21\u306E\u30EC\u30B3\u30FC\u30C9",
  previousRecord: "\u524D\u306E\u30EC\u30B3\u30FC\u30C9",
  copyApiURL: "API URL \u3092\u30B3\u30D4\u30FC",
  createTable: "\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u6210",
  refreshTable: "\u30C6\u30FC\u30D6\u30EB\u3092\u66F4\u65B0",
  renameTable: "\u30C6\u30FC\u30D6\u30EB\u540D\u306E\u5909\u66F4",
  deleteTable: "\u30C6\u30FC\u30D6\u30EB\u3092\u524A\u9664",
  addField: "\u65B0\u3057\u3044\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8FFD\u52A0",
  setPrimary: "\u30D7\u30E9\u30A4\u30DE\u30EA\u5024\u3068\u3057\u3066\u8A2D\u5B9A",
  addRow: "\u884C\u3092\u8FFD\u52A0",
  saveRow: "\u884C\u3092\u4FDD\u5B58",
  insertRow: "\u884C\u3092\u633F\u5165",
  deleteRow: "\u884C\u3092\u524A\u9664",
  deleteSelectedRow: "\u9078\u629E\u884C\u3092\u524A\u9664",
  importExcel: "\u30A8\u30AF\u30BB\u30EB\u30D5\u30A1\u30A4\u30EB\u3092\u30A4\u30F3\u30DD\u30FC\u30C8",
  importCSV: "Import CSV",
  downloadCSV: "CSV\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
  downloadExcel: "XLSX\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
  uploadCSV: "CSV\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  "import": "\u30A4\u30F3\u30DD\u30FC\u30C8",
  importMetadata: "\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A4\u30F3\u30DD\u30FC\u30C8",
  exportMetadata: "\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
  clearMetadata: "\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u6D88\u53BB",
  exportToFile: "\u30D5\u30A1\u30A4\u30EB\u306B\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
  changePwd: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4",
  createView: "\u30D3\u30E5\u30FC\u3092\u4F5C\u6210",
  shareView: "\u30D3\u30E5\u30FC\u3092\u5171\u6709",
  listSharedView: "\u5171\u6709\u3055\u308C\u3066\u3044\u308B\u30D3\u30E5\u30FC\u306E\u4E00\u89A7",
  ListView: "\u30D3\u30E5\u30FC\u306E\u4E00\u89A7",
  copyView: "\u30D3\u30E5\u30FC\u3092\u30B3\u30D4\u30FC",
  renameView: "\u30D3\u30E5\u30FC\u306E\u540D\u524D\u3092\u5909\u66F4",
  deleteView: "\u30D3\u30E5\u30FC\u3092\u524A\u9664",
  createGrid: "\u30B0\u30EA\u30C3\u30C9\u30D3\u30E5\u30FC\u3092\u4F5C\u6210",
  createGallery: "\u30AE\u30E3\u30E9\u30EA\u30FC\u30D3\u30E5\u30FC\u3092\u4F5C\u6210",
  createCalendar: "\u30AB\u30EC\u30F3\u30C0\u30FC\u30D3\u30E5\u30FC\u3092\u4F5C\u6210",
  createKanban: "\u30AB\u30F3\u30D0\u30F3\u30D3\u30E5\u30FC\u3092\u4F5C\u6210",
  createForm: "\u30D5\u30A9\u30FC\u30E0\u30D3\u30E5\u30FC\u3092\u4F5C\u6210",
  showSystemFields: "\u30B7\u30B9\u30C6\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8868\u793A",
  copyUrl: "URL\u3092\u30B3\u30D4\u30FC",
  openTab: "\u65B0\u3057\u3044\u30BF\u30D6\u3067\u958B\u304F",
  iFrame: "\u57CB\u3081\u8FBC\u307F\u7528 HTML \u3092\u30B3\u30D4\u30FC",
  addWebhook: "WebHook\u3092\u8FFD\u52A0",
  newToken: "\u30C8\u30FC\u30AF\u30F3\u3092\u8FFD\u52A0",
  exportZip: "zip \u30D5\u30A1\u30A4\u30EB\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
  importZip: "zip \u30D5\u30A1\u30A4\u30EB\u3092\u30A4\u30F3\u30DD\u30FC\u30C8",
  metaSync: "\u4ECA\u3059\u3050\u540C\u671F",
  settings: "\u8A2D\u5B9A",
  previewAs: "\u6B21\u306E\u30ED\u30FC\u30EB\u3068\u3057\u3066\u30D7\u30EC\u30D3\u30E5\u30FC",
  resetReview: "\u30EA\u30BB\u30C3\u30C8\u30D7\u30EC\u30D3\u30E5\u30FC",
  testDbConn: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u63A5\u7D9A\u3092\u30C6\u30B9\u30C8",
  removeDbFromEnv: "\u74B0\u5883\u304B\u3089\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u524A\u9664",
  editConnJson: "\u30B3\u30CD\u30AF\u30B7\u30E7\u30F3 JSON \u3092\u7DE8\u96C6",
  sponsorUs: "\u30B9\u30DD\u30F3\u30B5\u30FC\u306B\u306A\u308B",
  sendEmail: "\u30E1\u30FC\u30EB\u3092\u9001\u4FE1"
};
const tooltip = {
  saveChanges: "\u5909\u66F4\u3092\u4FDD\u5B58",
  xcDB: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210",
  extDB: "MySQL\u3001PostgreSQL\u3001SQL Server\uFF06SQLite\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059",
  apiRest: "REST API\u3092\u4ECB\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B",
  apiGQL: "GraphQL API\u3092\u4ECB\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B",
  theme: {
    dark: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9\uFF08Shift + Ctrl + B\uFF09",
    light: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9 (Shift + Ctrl + B\uFF09"
  },
  addTable: "\u30C6\u30FC\u30D6\u30EB\u3092\u8FFD\u52A0",
  inviteMore: "\u3055\u3089\u306B\u30E6\u30FC\u30B6\u30FC\u3092\u62DB\u5F85",
  toggleNavDraw: "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u30FB\u30C9\u30ED\u30EF\u30FC\u306E\u8868\u793A\u5207\u66FF",
  reloadApiToken: "API\u30C8\u30FC\u30AF\u30F3\u3092\u518D\u8AAD\u307F\u8FBC\u307F",
  generateNewApiToken: "\u65B0\u3057\u3044API\u30C8\u30FC\u30AF\u30F3\u3092\u751F\u6210",
  addRole: "\u65B0\u3057\u3044\u30ED\u30FC\u30EB\u3092\u8FFD\u52A0",
  reloadList: "\u30EA\u30B9\u30C8\u3092\u518D\u8AAD\u307F\u8FBC\u307F",
  metaSync: "\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u540C\u671F",
  sqlMigration: "\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u518D\u8AAD\u307F\u8FBC\u307F",
  updateRestart: "\u66F4\u65B0\uFF06\u518D\u8D77\u52D5",
  cancelReturn: "\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u3066\u623B\u308B",
  exportMetadata: "\u30E1\u30BF\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u30E1\u30BF\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u3059\u3079\u3066\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
  importMetadata: "\u30E1\u30BF\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304B\u3089\u30E1\u30BF\u30C6\u30FC\u30D6\u30EB\u3078\u3059\u3079\u3066\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A4\u30F3\u30DD\u30FC\u30C8",
  clearMetadata: "\u30E1\u30BF\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u3059\u3079\u3066\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30AF\u30EA\u30A2",
  clientKey: ".key \u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
  clientCert: ".cert \u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
  clientCA: "CA \u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"
};
const placeholder = {
  projName: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  password: {
    enter: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    current: "\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9",
    "new": "\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9",
    save: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4FDD\u5B58",
    confirm: "\u3082\u3046\u4E00\u5EA6\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
  },
  searchProjectTree: "\u30C6\u30FC\u30D6\u30EB\u3092\u691C\u7D22",
  searchFields: "\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u691C\u7D22",
  searchColumn: "{search} \u5217\u3092\u691C\u7D22",
  searchApps: "\u30A2\u30D7\u30EA\u3092\u691C\u7D22",
  searchModels: "\u30E2\u30C7\u30EB\u3092\u691C\u7D22",
  noItemsFound: "\u9805\u76EE\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
  defaultValue: "\u30C7\u30D5\u30A9\u30EB\u30C8\u5024",
  filterByEmail: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u30D5\u30A3\u30EB\u30BF"
};
const msg = {
  info: {
    footerInfo: "1\u30DA\u30FC\u30B8\u3042\u305F\u308A\u306E\u884C\u6570",
    upload: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
    upload_sub: "\u307E\u305F\u306F\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0 & \u30C9\u30ED\u30C3\u30D7",
    excelSupport: "\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u308B\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\uFF1A.xls\u3001.xlsx\u3001.xlsm\u3001.ods\u3001.ots",
    excelURL: "Excel\u30D5\u30A1\u30A4\u30EB\u306EURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    csvURL: "Enter CSV file URL",
    footMsg: "# \u30C7\u30FC\u30BF\u578B\u3092\u63A8\u6E2C\u3059\u308B\u305F\u3081\u306B\u89E3\u6790\u3059\u308B\u884C\u6570",
    excelImport: "\u30B7\u30FC\u30C8\u306F\u30A4\u30F3\u30DD\u30FC\u30C8\u53EF\u80FD\u3067\u3059",
    exportMetadata: "\u30E1\u30BF\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3057\u307E\u3059\u304B\uFF1F",
    importMetadata: "\u30E1\u30BF\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u304B\uFF1F",
    clearMetadata: "\u30E1\u30BF\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F",
    projectEmptyMessage: "\u307E\u305A\u306F\u3058\u3081\u306B\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u3087\u3046",
    stopProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u505C\u6B62\u3057\u307E\u3059\u304B\uFF1F",
    startProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u59CB\u3057\u307E\u3059\u304B\uFF1F",
    restartProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u518D\u958B\u3057\u307E\u3059\u304B\uFF1F",
    deleteProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F",
    shareBasePrivate: "\u4E00\u822C\u516C\u958B\u53EF\u80FD\u306A\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u751F\u6210",
    shareBasePublic: "\u3053\u306E\u30EA\u30F3\u30AF\u3092\u77E5\u3063\u3066\u3044\u308B\u4EBA\u306F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u4E0A\u306E\u8AB0\u3067\u3082\u95B2\u89A7\u3067\u304D\u307E\u3059",
    userInviteNoSMTP: "\u30E1\u30FC\u30EB\u8A2D\u5B9A\u304C\u5B8C\u4E86\u3057\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u62DB\u5F85\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3067\u304D\u307E\u305B\u3093\u3002\u4E0A\u306E\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u3066\u3001\u6B21\u306E\u5B9B\u5148\u3078\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044",
    dragDropHide: "\u975E\u8868\u793A\u306B\u3059\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u3053\u3053\u306B\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044",
    formInput: "\u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30E9\u30D9\u30EB\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    formHelpText: "\u30D8\u30EB\u30D7\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044",
    onlyCreator: "\u4F5C\u6210\u8005\u3060\u3051\u304C\u95B2\u89A7\u3067\u304D\u307E\u3059",
    formDesc: "\u30D5\u30A9\u30FC\u30E0\u306E\u8AAC\u660E\u3092\u8FFD\u52A0\u3059\u308B",
    beforeEnablePwd: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3067\u30A2\u30AF\u30BB\u30B9\u3092\u5236\u9650",
    afterEnablePwd: "\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306B\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981\u3067\u3059",
    privateLink: "\u3053\u306E\u30D3\u30E5\u30FC\u306F\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30EA\u30F3\u30AF\u3092\u4ECB\u3057\u3066\u5171\u6709\u3055\u308C\u3066\u3044\u307E\u3059",
    privateLinkAdditionalInfo: "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30EA\u30F3\u30AF\u3092\u6301\u3064\u4EBA\u3005\u306F\u3001\u3053\u306E\u30D3\u30E5\u30FC\u3067\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30BB\u30EB\u306E\u307F\u3092\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059",
    afterFormSubmitted: "\u30D5\u30A9\u30FC\u30E0\u9001\u4FE1\u5F8C\u306E\u64CD\u4F5C",
    apiOptions: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30A2\u30AF\u30BB\u30B9: ",
    submitAnotherForm: "\u300C\u4ED6\u306E\u56DE\u7B54\u3092\u9001\u4FE1\u300D\u30DC\u30BF\u30F3\u3092\u8868\u793A",
    showBlankForm: "5\u79D2\u5F8C\u306B\u7A7A\u767D\u306E\u30D5\u30A9\u30FC\u30E0\u3092\u8868\u793A",
    emailForm: "\u6B21\u306E\u30A2\u30C9\u30EC\u30B9\u3078\u30E1\u30FC\u30EB\u3092\u9001\u308B",
    showSysFields: "\u30B7\u30B9\u30C6\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8868\u793A",
    filterAutoApply: "\u81EA\u52D5\u9069\u7528",
    showMessage: "\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A",
    viewNotShared: "\u5171\u6709\u3055\u308C\u3066\u3044\u308B\u30D3\u30E5\u30FC\u306F\u3042\u308A\u307E\u305B\u3093\uFF01",
    showAllViews: "\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u3059\u3079\u3066\u306E\u5171\u6709\u3055\u308C\u3066\u3044\u308B\u30D3\u30E5\u30FC\u3092\u8868\u793A\u3059\u308B",
    collabView: "\u7DE8\u96C6\u6A29\u9650\u3092\u6301\u3064\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u306F\u3001\u30D3\u30E5\u30FC\u69CB\u6210\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002",
    lockedView: "\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u308B\u307E\u3067\u8AB0\u3082\u30D3\u30E5\u30FC\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002",
    personalView: "\u3042\u306A\u305F\u3060\u3051\u304C\u30D3\u30E5\u30FC\u306E\u8A2D\u5B9A\u3092\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002\u4ED6\u306E\u5171\u540C\u7DE8\u96C6\u8005\u306E\u30D1\u30FC\u30BD\u30CA\u30EB\u30D3\u30E5\u30FC\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u96A0\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
    ownerDesc: "\u4F5C\u6210\u8005\u3092\u8FFD\u52A0/\u524A\u9664\u3067\u304D\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u69CB\u9020\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u5168\u3066\u5909\u66F4\u3067\u304D\u307E\u3059",
    creatorDesc: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u69CB\u9020\u3068\u5024\u3092\u5168\u3066\u5909\u66F4\u3067\u304D\u307E\u3059",
    editorDesc: "\u30EC\u30B3\u30FC\u30C9\u3092\u7DE8\u96C6\u3067\u304D\u307E\u3059\u304C\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9/\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u69CB\u9020\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002",
    commenterDesc: "\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u304A\u3088\u3073\u30B3\u30E1\u30F3\u30C8\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u304C\u3001\u4E00\u5207\u306E\u7DE8\u96C6\u64CD\u4F5C\u304C\u884C\u3048\u307E\u305B\u3093",
    viewerDesc: "\u30EC\u30B3\u30FC\u30C9\u3092\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001\u4E00\u5207\u306E\u7DE8\u96C6\u64CD\u4F5C\u304C\u884C\u3048\u307E\u305B\u3093",
    addUser: "\u65B0\u3057\u3044\u30E6\u30FC\u30B6\u30FC\u3092\u8FFD\u52A0",
    staticRoleInfo: "\u30B7\u30B9\u30C6\u30E0\u5B9A\u7FA9\u306E\u30ED\u30FC\u30EB\u3092\u7DE8\u96C6\u3067\u304D\u307E\u305B\u3093",
    exportZip: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BF\u30C7\u30FC\u30BFzip\u30D5\u30A1\u30A4\u30EB\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
    importZip: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BF\u30C7\u30FC\u30BFzip\u30D5\u30A1\u30A4\u30EB\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u3066\u518D\u8D77\u52D5",
    importText: "\u30E1\u30BF\u30C7\u30FC\u30BFzip\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3066NocoDB\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u30A4\u30F3\u30DD\u30FC\u30C8",
    metaNoChange: "\u5909\u66F4\u306F\u3042\u308A\u307E\u305B\u3093",
    sqlMigration: "\u30B9\u30AD\u30FC\u30DE\u30DE\u30FC\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u6210\u3057\u3066\u3053\u306E\u30DA\u30FC\u30B8\u3092\u66F4\u65B0\u3057\u307E\u3059\u3002",
    dbConnectionStatus: "\u74B0\u5883\u691C\u8A3C",
    dbConnected: "\u63A5\u7D9A\u304C\u6210\u529F\u3057\u307E\u3057\u305F",
    notifications: {
      no_new: "\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",
      clear: "\u30AF\u30EA\u30A2"
    },
    sponsor: {
      header: "\u79C1\u9054\u3092\u652F\u63F4\u3057\u3066\u304F\u3060\u3055\u3044\uFF01",
      message: "\u79C1\u305F\u3061\u306FNocoDB\u306E\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u3092\u4F5C\u308B\u305F\u3081\u306B\u30D5\u30EB\u30BF\u30A4\u30E0\u3067\u50CD\u3044\u3066\u3044\u308B\u5C0F\u3055\u306A\u30C1\u30FC\u30E0\u3067\u3059\u3002 \u79C1\u305F\u3061\u306F\u3001 NocoDB \u306E\u3088\u3046\u306A\u30C4\u30FC\u30EB\u306F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u4E0A\u306E\u3059\u3079\u3066\u306E\u554F\u984C\u89E3\u6C7A\u306B\u53D6\u308A\u7D44\u3080\u4EBA\u3005\u304C\u5229\u7528\u3067\u304D\u308B\u3079\u304D\u3060\u3068\u4FE1\u3058\u3066\u3044\u307E\u3059\u3002"
    },
    loginMsg: "NocoDB\u306B\u30ED\u30B0\u30A4\u30F3\u3059\u308B",
    passwordRecovery: {
      message_1: "\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7\u3057\u305F\u3068\u304D\u306B\u4F7F\u7528\u3057\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
      message_2: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u305F\u3081\u306E\u30EA\u30F3\u30AF\u4ED8\u304D\u306E\u96FB\u5B50\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3059\u308B\u3002",
      success: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u306B\u306F\u3001E\u30E1\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044"
    },
    signUp: {
      superAdmin: "\u3042\u306A\u305F\u306F\u300C\u7279\u6A29\u7BA1\u7406\u8005\u300D\u306B\u306A\u308A\u307E\u3059",
      alreadyHaveAccount: "\u3059\u3067\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u3067\u3059\u304B\uFF1F",
      workEmail: "\u3042\u306A\u305F\u306E\u4ED5\u4E8B\u7528\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
      enterPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
      forgotPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u3067\u3059\u304B\uFF1F",
      dontHaveAccount: "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u6301\u3063\u3066\u3044\u307E\u305B\u3093\u304B\uFF1F"
    },
    addView: {
      grid: "\u30B0\u30EA\u30C3\u30C9\u30D3\u30E5\u30FC\u3092\u8FFD\u52A0",
      gallery: "\u30AE\u30E3\u30E9\u30EA\u30FC\u30D3\u30E5\u30FC\u3092\u8FFD\u52A0",
      form: "\u30D5\u30A9\u30FC\u30E0\u30D3\u30E5\u30FC\u3092\u8FFD\u52A0",
      kanban: "\u30AB\u30F3\u30D0\u30F3\u30D3\u30E5\u30FC\u3092\u8FFD\u52A0",
      calendar: "\u30AB\u30EC\u30F3\u30C0\u30FC\u30D3\u30E5\u30FC\u3092\u8FFD\u52A0"
    },
    tablesMetadataInSync: "\u30C6\u30FC\u30D6\u30EB\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u540C\u671F\u3055\u308C\u3066\u3044\u307E\u3059",
    addMultipleUsers: "\u30AB\u30F3\u30DE\uFF08,\uFF09\u533A\u5207\u308A\u3067\u5165\u529B\u3059\u308B\u3068\u8907\u6570\u306EE\u30E1\u30FC\u30EB\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059",
    enterTableName: "\u30C6\u30FC\u30D6\u30EB\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    addDefaultColumns: "\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5217\u3092\u8FFD\u52A0",
    tableNameInDb: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30C6\u30FC\u30D6\u30EB\u540D"
  },
  error: {
    searchProject: "{search} \u306E\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
    invalidChar: "\u30D5\u30A9\u30EB\u30C0\u30D1\u30B9\u306B\u7121\u52B9\u306A\u6587\u5B57\u304C\u5B58\u5728\u3057\u307E\u3059",
    invalidDbCredentials: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u8A8D\u8A3C\u60C5\u5831\u304C\u7121\u52B9\u3067\u3059",
    unableToConnectToDb: "\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u63A5\u7D9A\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u8D77\u52D5\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    userDoesntHaveSufficientPermission: "\u30E6\u30FC\u30B6\u30FC\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30B9\u30AD\u30FC\u30DE\u3092\u4F5C\u6210\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
    dbConnectionStatus: "\u7121\u52B9\u306A\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D1\u30E9\u30E1\u30FC\u30BF",
    dbConnectionFailed: "\u63A5\u7D9A\u5931\u6557\uFF1A",
    signUpRules: {
      emailReqd: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304C\u5FC5\u8981\u3067\u3059",
      emailInvalid: "\u6709\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
      passwdRequired: "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981\u3067\u3059",
      passwdLength: "\u30D1\u30B9\u30EF\u30FC\u30C9\u306F8\u6587\u5B57\u4EE5\u4E0A\u306B\u3057\u3066\u304F\u3060\u3055\u3044"
    }
  },
  toast: {
    exportMetadata: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u6B63\u5E38\u306B\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F",
    importMetadata: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BF\u30C7\u30FC\u30BF\u304C\u6B63\u5E38\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3057\u305F",
    clearMetadata: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u6B63\u5E38\u306B\u6D88\u53BB\u3055\u308C\u307E\u3057\u305F",
    stopProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u6B63\u5E38\u306B\u505C\u6B62\u3057\u307E\u3057\u305F",
    startProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u6B63\u5E38\u306B\u958B\u59CB\u3057\u307E\u3057\u305F",
    restartProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u6B63\u5E38\u306B\u518D\u958B\u3055\u308C\u307E\u3057\u305F",
    deleteProject: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u6B63\u5E38\u306B\u524A\u9664\u3055\u308C\u307E\u3057\u305F",
    authToken: "\u8A8D\u8A3C\u30C8\u30FC\u30AF\u30F3\u304C\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3057\u305F",
    projInfo: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u60C5\u5831\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
    inviteUrlCopy: "\u62DB\u5F85\u7528 URL \u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
    createView: "\u6B63\u5E38\u306B\u4F5C\u6210\u3055\u308C\u305F\u30D3\u30E5\u30FC",
    formEmailSMTP: "\u96FB\u5B50\u30E1\u30FC\u30EB\u901A\u77E5\u3092\u6709\u52B9\u306B\u3059\u308B\u305F\u3081\u306B\u3001App Store\u3067SMTP\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    collabView: "\u5171\u540C\u30D3\u30E5\u30FC\u306B\u6B63\u5E38\u306B\u5207\u308A\u66FF\u308F\u308A\u307E\u3057\u305F",
    lockedView: "\u30ED\u30C3\u30AF\u30D3\u30E5\u30FC\u306B\u6B63\u5E38\u306B\u5207\u308A\u66FF\u308F\u308A\u307E\u3057\u305F",
    futureRelease: "\u8FD1\u65E5\u516C\u958B\uFF01"
  }
};
var ja = {
  general,
  objects,
  datatype,
  filterOperation,
  title,
  labels,
  activity,
  tooltip,
  placeholder,
  msg
};
export { activity, datatype, ja as default, filterOperation, general, labels, msg, objects, placeholder, title, tooltip };