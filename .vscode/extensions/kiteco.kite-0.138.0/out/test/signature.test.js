module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");;

/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";
module.exports = require("chai");;

/***/ }),
/* 10 */,
/* 11 */
/***/ ((module) => {

"use strict";
module.exports = require("kite-api");;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),
/* 16 */
/***/ ((module) => {

"use strict";
module.exports = require("kite-api/test/helpers/kite");;

/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = require("kite-api/test/helpers/http");;

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const path = __webpack_require__(1);
const KiteAPI = __webpack_require__(11);
const { promisifyReadResponse } = __webpack_require__(19);

const Kite = {
  request(req, data) {
    return KiteAPI.request(req, data).then(resp => promisifyReadResponse(resp));
  }
};

function waitsFor(m, f, t, i) {
  if (typeof m == "function" && typeof f != "function") {
    i = t;
    t = f;
    f = m;
    m = "something to happen";
  }

  const intervalTime = i || 10;
  const timeoutDuration = t || 2000;

  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const res = f();
      if (res) {
        if (res.then) {
          res.then(
            () => {
              clearTimeout(timeout);
              clearInterval(interval);
              resolve();
            },
            err => {}
          );
        } else {
          clearTimeout(timeout);
          clearInterval(interval);
          resolve();
        }
      }
    }, intervalTime);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      let msg;
      if (typeof m == "function") {
        msg = `Waited ${timeoutDuration}ms for ${m()}`;
      } else {
        msg = `Waited ${timeoutDuration}ms for ${m} but nothing happened`;
      }
      reject(new Error(msg));
    }, timeoutDuration);
  });
}

function sleep(duration) {
  const t = new Date();
  return waitsFor(`${duration}ms`, () => {
    return new Date() - t > duration;
  });
}

function delay(duration, block) {
  return new Promise(resolve => {
    setTimeout(() => {
      block();
      resolve();
    }, duration);
  });
}

function fixtureURI(filepath) {
  return path.resolve(__dirname, "fixtures", filepath);
}

function log(v) {
  console.log(v);
  return v;
}

function formatCall({ method, path, payload }) {
  return `${method} ${path} ${payload || ""}`;
}

module.exports = {
  sleep,
  delay,
  fixtureURI,
  waitsFor,
  Kite,
  log,
  formatCall
};


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compact": () => /* binding */ compact,
/* harmony export */   "delayPromise": () => /* binding */ delayPromise,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "head": () => /* binding */ head,
/* harmony export */   "last": () => /* binding */ last,
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "escapeCommandArguments": () => /* binding */ escapeCommandArguments,
/* harmony export */   "detailExist": () => /* binding */ detailExist,
/* harmony export */   "detailGet": () => /* binding */ detailGet,
/* harmony export */   "detailLang": () => /* binding */ detailLang,
/* harmony export */   "detailNotEmpty": () => /* binding */ detailNotEmpty,
/* harmony export */   "parseJSON": () => /* binding */ parseJSON,
/* harmony export */   "promisifyReadResponse": () => /* binding */ promisifyReadResponse,
/* harmony export */   "promisifyRequest": () => /* binding */ promisifyRequest,
/* harmony export */   "secondsSince": () => /* binding */ secondsSince,
/* harmony export */   "promisifiedKiteAPIRequest": () => /* binding */ promisifiedKiteAPIRequest,
/* harmony export */   "stopPropagationAndDefault": () => /* binding */ stopPropagationAndDefault,
/* harmony export */   "truncate": () => /* binding */ truncate,
/* harmony export */   "uniq": () => /* binding */ uniq,
/* harmony export */   "stripTags": () => /* binding */ stripTags,
/* harmony export */   "editorsForDocument": () => /* binding */ editorsForDocument,
/* harmony export */   "params": () => /* binding */ params,
/* harmony export */   "merge": () => /* binding */ merge,
/* harmony export */   "getDetails": () => /* binding */ getDetails,
/* harmony export */   "getFunctionDetails": () => /* binding */ getFunctionDetails,
/* harmony export */   "kiteOpen": () => /* binding */ kiteOpen,
/* harmony export */   "getSupportedLanguage": () => /* binding */ getSupportedLanguage
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kite_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var kite_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kite_api__WEBPACK_IMPORTED_MODULE_3__);








function promisifiedKiteAPIRequest(req, data) {
  return kite_api__WEBPACK_IMPORTED_MODULE_3___default().request(req, data).then(resp => promisifyReadResponse(resp));
};

const compact = a => a.filter(v => v && v !== '');

const uniq = a => a.reduce((m, v) => m.indexOf(v) === -1 ? m.concat(v) : m, []);

const flatten = a =>
  a.reduce((m, o) => m.concat(Array.isArray(o) ? flatten(o) : o), []);

const head = a => a[0];
const last = a => a[a.length - 1];
const log = v => (console.log(v), v);

const evalPath = (o, ...path) =>
  path.reduce((m, k) => {
    if (k === '*' && m) { k = head(Object.keys(m)); }
    return m && typeof m[k] !== 'undefined' ? m[k] : undefined;
  }, o);

const detailLang = o =>
  o && o.language_details
    ? head(Object.keys(o.language_details)).toLowerCase()
    : 'python';

const detailGet = (o, ...k) => evalPath(o, 'language_details', '*', ...k);

const detailExist = (o, ...k) => detailGet(o, ...k) != null;

const detailNotEmpty = (o, ...k) => {
  const v = detailGet(o, ...k);
  return v != null && v.length > 0;
};

const getDetails = (o, ...details) =>
  o.detail || (o.details && details.reduce((m, k) => {
    return m || o.details[k];
  }, null));

const getFunctionDetails = (o) => {
  const type = head(Object.keys(o.details).filter(k => o.details[k]));
  if (type === 'function') {
    return o.details.function;
  } else if (type === 'type') {
    return detailGet(o.details.type, 'constructor');
  }

  return null;
};

const merge = (a, b) => {
  const c = {};
  for (const k in a) { c[k] = a[k]; }
  for (const k in b) { c[k] = b[k]; }
  return c;
};

const stripTags = s => s.replace(/<[^>]+>/g, '');

const truncate = (s, l = 200) =>
  s && s.length > l
    ? s.slice(0, l) + '…'
    : s;

function parseJSON(data, fallback) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
}

// get time in seconds since the date
function secondsSince(when) {
  var now = new Date();
  return (now.getTime() - when.getTime()) / 1000.0;
}

function promisifyRequest(request) {
  return request.then
    ? request
    : new Promise((resolve, reject) => {
      request.on('response', resp => resolve(resp));
      request.on('error', err => reject(err));
    });
}

function promisifyReadResponse(response) {
  return new Promise((resolve, reject) => {
    let data = '';
    response.on('data', chunk => data += chunk);
    response.on('end', () => resolve(data));
    response.on('error', err => reject(err));
  });
}

function delayPromise(factory, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      factory().then(resolve, reject);
    }, timeout);
  });
}

const stopPropagationAndDefault = f => function(e) {
  e.stopPropagation();
  e.preventDefault();
  return f && f.call(this, e);
};

const editorsForDocument = document =>
  vscode__WEBPACK_IMPORTED_MODULE_0___default().window.visibleTextEditors.filter(e => e.document === document);

function params (url) {
  return url.query.split('&').reduce((m, p) => {
    const [k,v] = p.split('=');
    m[k] = v;
    return m;
  }, {});
}

const escapeCommandArguments = (o) => {
  if((vscode__WEBPACK_IMPORTED_MODULE_0___default().version) < "1.30.0") {
    return JSON.stringify(o).replace(/"/g, '&quot;');
  }
  if (os__WEBPACK_IMPORTED_MODULE_2___default().platform() == 'win32') {
    return JSON.stringify(o).replace(/\\\\/g, "/");
  }
  return JSON.stringify(o);
};

const kiteOpen = (url) => {
  const env = Object.assign({}, process.env);
  delete env["ELECTRON_RUN_AS_NODE"];
  switch(os__WEBPACK_IMPORTED_MODULE_2___default().platform()) {
    case 'darwin':
      child_process__WEBPACK_IMPORTED_MODULE_1___default().spawnSync("open", [url], { env: env });
      break;
    case 'win32':
      child_process__WEBPACK_IMPORTED_MODULE_1___default().spawnSync("cmd", ["/b", "/c", "start","", url], { env: env });
      break;
    case 'linux':
      child_process__WEBPACK_IMPORTED_MODULE_1___default().spawnSync("xdg-open", [url], { env: env });
  }
};

const extToLangMap = new Map([
  ["c", "c"],
  ["cc","cpp"],
  ["cpp","cpp"],
  ["cs","csharp"],
  ["css","css"],
  ["go","go"],
  ["h","c"],
  ["hpp","cpp"],
  ["html","html"],
  ["java", "java"],
  ["js", "javascript"],
  ["jsx","jsx"],
  ["kt","kotlin"],
  ["less","less"],
  ["m","objectivec"],
  ["php", "php"],
  ["py", "python"],
  ["pyw", "python"],
  ["rb","ruby"],
  ["scala","scala"],
  ["sh","bash"],
  ["ts","typescript"],
  ["tsx","tsx"],
  ["vue","vue"],
]);

const getSupportedLanguage = document => {
  if (document.isUntitled) {
    return null;
  }

  const ext = document.fileName.split(".").slice(-1)[0];
  if (extToLangMap.has(ext)) {
    return extToLangMap.get(ext);
  }
  return null;
};




/***/ }),
/* 20 */
/***/ ((module) => {

"use strict";
module.exports = require("child_process");;

/***/ }),
/* 21 */
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),
/* 22 */,
/* 23 */
/***/ ((module) => {

"use strict";
module.exports = require("kite-connector/lib/logger");;

/***/ }),
/* 24 */,
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountPath": () => /* binding */ accountPath,
/* harmony export */   "completionsPath": () => /* binding */ completionsPath,
/* harmony export */   "examplePath": () => /* binding */ examplePath,
/* harmony export */   "hoverPath": () => /* binding */ hoverPath,
/* harmony export */   "languagesPath": () => /* binding */ languagesPath,
/* harmony export */   "membersPath": () => /* binding */ membersPath,
/* harmony export */   "metricsCounterPath": () => /* binding */ metricsCounterPath,
/* harmony export */   "metricsCompletionSelectedPath": () => /* binding */ metricsCompletionSelectedPath,
/* harmony export */   "normalizeDriveLetter": () => /* binding */ normalizeDriveLetter,
/* harmony export */   "openDocumentationInWebURL": () => /* binding */ openDocumentationInWebURL,
/* harmony export */   "openExampleInWebURL": () => /* binding */ openExampleInWebURL,
/* harmony export */   "openSignatureInWebURL": () => /* binding */ openSignatureInWebURL,
/* harmony export */   "projectDirPath": () => /* binding */ projectDirPath,
/* harmony export */   "reportPath": () => /* binding */ reportPath,
/* harmony export */   "searchPath": () => /* binding */ searchPath,
/* harmony export */   "serializeRangeForPath": () => /* binding */ serializeRangeForPath,
/* harmony export */   "shouldNotifyPath": () => /* binding */ shouldNotifyPath,
/* harmony export */   "settingsPath": () => /* binding */ settingsPath,
/* harmony export */   "signaturePath": () => /* binding */ signaturePath,
/* harmony export */   "statusPath": () => /* binding */ statusPath,
/* harmony export */   "symbolReportPath": () => /* binding */ symbolReportPath,
/* harmony export */   "usagePath": () => /* binding */ usagePath,
/* harmony export */   "usagesPath": () => /* binding */ usagesPath,
/* harmony export */   "valueReportPath": () => /* binding */ valueReportPath
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);






function metricsCounterPath() {
  return '/clientapi/metrics/counters';
}

function metricsCompletionSelectedPath() {
  return '/clientapi/metrics/completions/selected';
}

function languagesPath() {
  return '/clientapi/languages';
}

function accountPath() {
  return '/api/account/user';
}

function statusPath(path) {
  return [
    '/clientapi/status',
    `filename=${encodeURI(normalizeDriveLetter(path))}`,
  ].join('?');
}

function signaturePath() {
  return '/clientapi/editor/signatures';
}

function searchPath(query, offset = 0, limit = 10) {
  return [
    '/api/editor/search',
    [
      `q=${encodeURI(query)}`,
      `offset=${offset}`,
      `limit=${limit}`,
    ].join('&'),
  ].join('?');
}

function projectDirPath(path) {
  return [
    '/clientapi/projectdir',
    `filename=${encodeURI(normalizeDriveLetter(path))}`,
  ].join('?');
}

function shouldNotifyPath(path) {
  return [
    '/clientapi/permissions/notify',
    `filename=${encodeURI(normalizeDriveLetter(path))}`,
  ].join('?');
}

function settingsPath(key) {
  return '/clientapi/settings/' + key;
}

function completionsPath() {
  return '/clientapi/editor/complete';
}

function reportPath(data) {
  const symbol = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.head)(data.symbol);

  return valueReportPath(symbol.id);
}

function valueReportPath(id) {
  return `/api/editor/value/${id}`;
}

function symbolReportPath(id) {
  return `/api/editor/symbol/${id}`;
}

function membersPath(id, page = 0, limit = 999) {
  return [
    `/api/editor/value/${id}/members`,
    [
      `offset=${page}`,
      `limit=${limit}`,
    ].join('&'),
  ].join('?');
}

function usagesPath(id, page = 0, limit = 999) {
  return [
    `/api/editor/value/${id}/usages`,
    [
      `offset=${page}`,
      `limit=${limit}`,
    ].join('&'),
  ].join('?');
}

function usagePath(id) {
  return `/api/editor/usages/${id}`;
}

function examplePath(id) {
  return `/api/python/curation/${id}`;
}

function openDocumentationInWebURL(id) {
  const url = `http://localhost:46624/clientapi/desktoplogin?d=/docs/${escapeId(id)}`;
  return url;
}

function openSignatureInWebURL(id) {
  const url = `http://localhost:46624/clientapi/desktoplogin?d=/docs/${escapeId(id)}%23signature`;
  return url;
}

function openExampleInWebURL(id) {
  const url = `http://localhost:46624/clientapi/desktoplogin?d=/examples/python/${escapeId(id)}`;
  return url;
}

function hoverPath(document, position) {
  position = new (vscode__WEBPACK_IMPORTED_MODULE_0___default().Position)(position.line, position.character);
  const state = md5__WEBPACK_IMPORTED_MODULE_1___default()(document.getText());
  const filename = document.fileName;
  const buffer = cleanPath(filename);
  const pos = document.offsetAt(position);
  const encoding = 'utf-16';
  return [
    `/api/buffer/vscode/${buffer}/${state}/hover`,
    [
      `cursor_runes=${pos}`,
      `offset_encoding=${encoding}`,
    ].join('&'),
  ].join('?');
}

function escapeId(id) {
  return encodeURI(String(id)).replace(/;/g, '%3B');
}

function cleanPath(p) {
  return encodeURI(normalizeDriveLetter(p))
    .replace(/^([a-zA-Z]):/, (m, d) => `/windows/${d}`)
    .replace(/\/|\\|%5C/g, ':');
}

function serializeRangeForPath(range) {
  return `${range.start.row}:${range.start.column}/${range.end.row}:${range.end.column}`;
}

function normalizeDriveLetter(str) {
  return str.replace(/^[a-z]:/, m => m.toUpperCase());
}




/***/ }),
/* 26 */
/***/ ((module) => {

"use strict";
module.exports = require("md5");;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callSignature": () => /* binding */ callSignature,
/* harmony export */   "memberLabel": () => /* binding */ memberLabel,
/* harmony export */   "parameterName": () => /* binding */ parameterName,
/* harmony export */   "parameterType": () => /* binding */ parameterType,
/* harmony export */   "parameterDefault": () => /* binding */ parameterDefault,
/* harmony export */   "parameterValue": () => /* binding */ parameterValue,
/* harmony export */   "parameterTypeLink": () => /* binding */ parameterTypeLink,
/* harmony export */   "reportFromHover": () => /* binding */ reportFromHover,
/* harmony export */   "returnType": () => /* binding */ returnType,
/* harmony export */   "signature": () => /* binding */ signature,
/* harmony export */   "symbolId": () => /* binding */ symbolId,
/* harmony export */   "symbolKindMarkdown": () => /* binding */ symbolKindMarkdown,
/* harmony export */   "symbolLabel": () => /* binding */ symbolLabel,
/* harmony export */   "symbolName": () => /* binding */ symbolName,
/* harmony export */   "symbolType": () => /* binding */ symbolType,
/* harmony export */   "symbolValue": () => /* binding */ symbolValue,
/* harmony export */   "unionType": () => /* binding */ unionType,
/* harmony export */   "valueLabel": () => /* binding */ valueLabel,
/* harmony export */   "valueName": () => /* binding */ valueName,
/* harmony export */   "valueNameFromId": () => /* binding */ valueNameFromId,
/* harmony export */   "valueType": () => /* binding */ valueType,
/* harmony export */   "idIsEmpty": () => /* binding */ idIsEmpty,
/* harmony export */   "isFunctionKind": () => /* binding */ isFunctionKind,
/* harmony export */   "symbolReturnType": () => /* binding */ symbolReturnType
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);




const idIsEmpty = (id) =>
  !id || id === '' ||
  (id.indexOf(';') !== -1 && id.split(';')[1] === '');

const isFunctionKind = kind => ['function', 'type'].includes(kind);

const parameterName = (p, prefix = '', w) =>
  p
    ? (
      w
        ? `<${w}>${prefix}<span class="parameter-name">${p.name}</span></${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(w.split(/\s/g))}>`
        : `${prefix}<span class="parameter-name">${p.name}</span>`
    )
    : undefined;

const parameterDefault = (p) => {
  if (!p) { return ''; }

  const lang = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailLang)(p);

  switch (lang) {
    case 'python':
    case 'javascript':
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailNotEmpty)(p, 'default_value')
        ? `=${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailGet)(p, 'default_value')).repr}`
        : '';
    default:
      return '';
  }
};

const parameterType = (p, prefix = '') =>
  p.inferred_value && p.inferred_value
    ? `${prefix}${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.uniq)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.compact)(p.inferred_value).map(v =>
      `<a href='command:kite.navigate?"value/${v.type_id}"' class="parameter-type">${v.type}</a>`)).join('<i>|</i>')}`
    : '';

const parameterTypeLink = parameterType;

const parameterValue = p =>
  `${parameterName(p)}${parameterType(p, ':')}${parameterDefault(p)}`;

const parameters = (d, withType = true) =>
  d.parameters
    ? (withType
      ? d.parameters.map(parameterValue)
      : d.parameters.map(p => `${parameterName(p)}${parameterDefault(p)}`))
    : [];

const gatherParameters = (detail, withType) => {
  const lang = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailLang)(detail);
  switch (lang) {
    case 'python':
      return [
        parameters(detail, withType),
        parameterName((0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailGet)(detail, 'vararg'), '*'),
        parameterName((0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailGet)(detail, 'kwarg'), '**'),
      ];
    case 'javascript':
      return [
        parameters(detail, withType),
        parameterName((0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailGet)(detail, 'rest'), '…'),
      ];
    default:
      return [
        parameters(detail, withType),
      ];
  }
};

const signature = (data, withType = true, current = -1) => {
  const detail = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getFunctionDetails)(data);
  return detail
    ? `(<span class="signature">${
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.compact)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.flatten)(gatherParameters(detail, withType)))
        .map((p, i, a) => {
          const s = i === a.length - 1 ? '' : ', ';
          return i === current
            ? `<span class="parameter parameter-highlight">${p}${s}</span>`
            : `<span class="parameter">${p}${s}</span>`;
        })
        .join('')
    }</span>)`
    : '(<span class="signature"></span>)';
};

const callParameterName = (parameter) => parameter.name;

const callKwargParameter = (parameter) => {
  const example = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(parameter.types.filter(t => t.examples));
  return example
    ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.compact)([
      callParameterName(parameter),
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(example.examples).replace(/"'/g, "'").replace(/'"/g, "'"),
    ]).join('=')
    : callParameterName(parameter);
};

const callKwargParameters = (signature) =>
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailNotEmpty)(signature, 'kwargs')
    ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.detailGet)(signature, 'kwargs').map(p => callKwargParameter(p)).join(', ')
    : null;

const callSignature = (data) =>
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.compact)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.flatten)([
    (data.args || []).map(callParameterName),
    callKwargParameters(data),
  ]))
    .join(', ');

const valueName = value =>
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.last)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.last)(value.repr.replace(/\(|\)/g, '').split('|').map(s => s.trim().split(':'))));

const valueNameFromId = value => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.last)(value.id.split(/[;.]/g));

const valueLabel = (value, current) => {
  if (isFunctionKind(value.kind)) {
    return valueName(value) + signature(value, true, current);
  } else {
    return (value.kind === 'instance'
      ? valueNameFromId(value)
      : valueName(value));
  }
};

const symbolName = s => {
  const value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(s.value);
  return value.kind === 'instance'
    ? s.name
    : valueName(value);
};

const symbolLabel = (s, current) => {
  const value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(s.value);
  return isFunctionKind(value.kind)
    ? symbolName(s) + signature(value, true, current)
    : symbolName(s);
};

const memberLabel = (s) => {
  const value = s.value ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(s.value) : {};
  const name = `<span class="repr">${s.name}</span>`;
  return isFunctionKind(value.kind) ? name + '()' : name;
};

const wrapType = (o) => {
  const { name, id } = o || {};
  return name
    ? (!idIsEmpty(id)
      ? `<a href='command:kite.navigate?"value/${id}"' class="type-value">${name}</a>`
      : `<span class="type-value">${name}</span>`
    )
    : null;
};

const unionType = (vs, map) =>
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.uniq)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.flatten)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.compact)(vs.map(map))).map(wrapType)).join(' | ');

const returnType = (v) =>
  v && v.length ? `-> <span class="return-type">${v}</span>` : '';

const symbolValue = s => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(s.value);

const symbolKindMarkdown = s => {
  const value = symbolValue(s);
  if (value.kind !== 'instance') {
    return `[ _${value.kind}_ ]`;
  }
  let types = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.uniq)(s.value.filter(v => v.kind === 'instance').map(v => `_${v.type.replace('_', '\\_')}_`));
  return `[ ${types.join(' | ')} ]`;
};

const reportFromHover = hover => {
  const symbol = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(hover.symbol);
  const data = {
    symbol,
    report: hover.report,
  };
  if (data.value && data.value.id === '') { data.value.id = symbol.name; }
  return data;
};

const extractInstanceType = v => ({ name: v.type, id: v.type_id });
const extractFunctionType = v => {
  const detail = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getFunctionDetails)(v);
  return detail && detail.return_value
    ? detail.return_value.map(v => ({ name: v.type, id: v.type_id }))
    : [];
};

const symbolType = s => unionType(s.value, extractInstanceType);

const symbolReturnType = s => unionType(s.value, extractFunctionType);

const valueType = value =>
  isFunctionKind(value.kind)
    ? returnType(unionType([value], extractFunctionType))
    : unionType([value], extractInstanceType);

const symbolId = (symbol) =>
  symbol.id !== ''
    ? symbol.id
    : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.head)(symbol.value).id;




/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(15);
const expect = __webpack_require__(9).expect;
const vscode = __webpack_require__(8);
const { fixtureURI, Kite } = __webpack_require__(18);

const { withKite, withKiteRoutes } = __webpack_require__(16);
const { fakeResponse } = __webpack_require__(17);


const KiteSignatureProvider = __webpack_require__(42).default;

describe('KiteSignatureProvider', () => {
  let provider;

  beforeEach(() => {
    provider = new KiteSignatureProvider(Kite, true);
  });
  withKite({ reachable: true }, () => {
    describe('for a python function with a signature', () => {
      withKiteRoutes([
        [
          o => /\/clientapi\/editor\/signatures/.test(o.path),
          () => fakeResponse(200, fs.readFileSync(fixtureURI('plot-signatures.json').toString()))
        ]
      ]);

      it('provides a representation of the function signature', () => {
        const uri = vscode.Uri.file(fixtureURI('sample.py'));

        return vscode.workspace.openTextDocument(uri)
        .then(doc => provider.provideSignatureHelp(doc, new vscode.Position(19, 13), null))
        .then(res => {
          expect(res.signatures.length).to.equal(1);
          expect(res.signatures[0].label).to.equal('⟠ plot(x:list|uint64, y:list|str)');
          expect(res.signatures[0].parameters.length).to.equal(2);
          expect(res.signatures[0].parameters[0].label).to.equal('x:list|uint64');
          expect(res.signatures[0].parameters[1].label).to.equal('y:list|str');

          expect(res.activeParameter).to.equal(1);
          expect(res.activeSignature).to.equal(0);
        });
      });
    });

    describe('for a python function with no signature', () => {
      withKiteRoutes([
        [
          o => /\/clientapi\/editor\/signatures/.test(o.path),
          () => fakeResponse(404)
        ]
      ]);

      it('returns null', () => {
        const uri = vscode.Uri.file(fixtureURI('sample.py'));

        return vscode.workspace.openTextDocument(uri)
        .then(doc => provider.provideSignatureHelp(doc, new vscode.Position(19, 13), null))
        .then(res => {
          expect(res).to.equal(null);
        });
      });
    });
  });
});


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ KiteSignatureProvider
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kite_connector_lib_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var kite_connector_lib_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kite_connector_lib_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _data_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);








class KiteSignatureProvider {
  constructor(Kite, isTest) {
    this.Kite = Kite;
    this.isTest = isTest;
  }

  provideSignatureHelp(document, position) {
    const text = document.getText();

    if (text.length > this.Kite.maxFileSize) {
      kite_connector_lib_logger__WEBPACK_IMPORTED_MODULE_1___default().warn("buffer contents too large, not attempting signature");
      return null;
    }

    const cursorPosition = document.offsetAt(position);
    const payload = {
      text,
      editor: "vscode",
      filename: (0,_urls__WEBPACK_IMPORTED_MODULE_3__.normalizeDriveLetter)(document.fileName),
      cursor_runes: cursorPosition,
      offset_encoding: "utf-16"
    };
    kite_connector_lib_logger__WEBPACK_IMPORTED_MODULE_1___default().debug(payload);

    return this.Kite.request(
      {
        path: (0,_urls__WEBPACK_IMPORTED_MODULE_3__.signaturePath)(),
        method: "POST"
      },
      JSON.stringify(payload),
      document
    )
      .then(data => {
        data = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseJSON)(data, {});

        const [call] = data.calls;

        const { callee } = call;

        const help = new vscode__WEBPACK_IMPORTED_MODULE_0__.SignatureHelp();
        help.activeParameter = call.arg_index;
        help.activeSignature = 0;

        const label = "⟠ " + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.stripTags)((0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.valueLabel)(callee));
        const sig = new vscode__WEBPACK_IMPORTED_MODULE_0__.SignatureInformation(label);
        const detail = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getFunctionDetails)(callee);
        sig.parameters = (detail.parameters || []).map(p => {
          const label = p.inferred_value
            ? `${p.name}:${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.stripTags)((0,_data_utils__WEBPACK_IMPORTED_MODULE_4__.parameterType)(p))}`
            : p.name;
          const param = new vscode__WEBPACK_IMPORTED_MODULE_0__.ParameterInformation(label);
          return param;
        });

        if (
          Array.isArray(detail.return_value) &&
          detail.return_value.length &&
          detail.return_value[0].type
        ) {
          sig.documentation = `Returns → ${detail.return_value[0].type}`;
        }

        help.signatures = [sig];

        return help;
      })
      .catch(() => null);
  }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(41);
/******/ })()
;
//# sourceMappingURL=signature.test.js.map