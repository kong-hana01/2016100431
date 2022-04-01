module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

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

module.exports = require("vscode");;

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("chai");;

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("sinon");;

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("kite-api");;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

module.exports = require("child_process");;

/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("os");;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = require("md5");;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sinon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var sinon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sinon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_4__);










describe('EditorEvents', () => {
  let editor, events, Kite;

  beforeEach(() => {
    // We're going to fake most objects that are used by the editor events
    // because of how VSCode testing environment works.
    // For instance we can't get a reference to the editor of a created document.
    Kite = {
      request: sinon__WEBPACK_IMPORTED_MODULE_2___default().stub().returns(Promise.resolve()),
      checkState: sinon__WEBPACK_IMPORTED_MODULE_2___default().stub().returns(Promise.resolve()),
    };

    const uri = vscode__WEBPACK_IMPORTED_MODULE_0___default().Uri.file((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.fixtureURI)('sample.py'));

    return vscode__WEBPACK_IMPORTED_MODULE_0___default().workspace.openTextDocument(uri)
    .then(doc => {
      editor = {
        document: doc,
        selection: {
          start: new (vscode__WEBPACK_IMPORTED_MODULE_0___default().Position)(0,0),
          end: new (vscode__WEBPACK_IMPORTED_MODULE_0___default().Position)(0,0),
        },
      };

      events = new _src_events__WEBPACK_IMPORTED_MODULE_3__.default(Kite, editor);
    });
  });

  it('only sends one event to kited', () => {
    return Promise.all([
      events.selectionChanged(),
      events.edit(),
    ])
    .then(() => {
      (0,chai__WEBPACK_IMPORTED_MODULE_1__.expect)(Kite.request.callCount).to.eql(1);

      const [, json] = Kite.request.getCall(0).args;
      const payload = JSON.parse(json);
      (0,chai__WEBPACK_IMPORTED_MODULE_1__.expect)(payload.action).to.eql('edit');
    });
  });
});


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EditorEvents
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);





const plugin_version = _package_json__WEBPACK_IMPORTED_MODULE_1__.version

;

class EditorEvents {
  constructor(Kite, editor) {
    this.Kite = Kite;
    this.editor = editor;
    this.reset();
  }

  dispose() {
    delete this.Kite;
    delete this.editor;
  }

  focus() {
    return this.send('focus');
  }

  edit() {
    return this.send('edit');
  }

  selectionChanged() {
    return this.send('selection');
  }

  send(action) {
    if (!this.pendingPromise) {
      this.pendingPromise = new Promise((resolve, reject) => {
        this.pendingPromiseResolve = resolve;
        this.pendingPromiseReject = reject;
      });
    }
    this.pendingEvents.push(action);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.mergeEvents(), 0);
    // was resulting in unhandled Promise rejection from `this.pendingPromiseReject(err)`
    // below... so we catch it
    return this.pendingPromise.catch(() => { });
  }

  reset() {
    clearTimeout(this.timeout);
    this.pendingEvents = [];
  }

  mergeEvents() {
    if (!this.editor || !this.editor.document) {
      return;
    }

    const editor = this.editor;
    const doc = editor.document;
    const focus = this.pendingEvents.filter(e => e === 'focus')[0];
    const action = this.pendingEvents.some(e => e === 'edit') ? 'edit' : this.pendingEvents.pop();

    this.reset();

    const payload = JSON.stringify(this.buildEvent(action, doc, editor.selection));

    let promise = Promise.resolve();

    if (focus && action !== focus) {
      promise = promise.then(() => this.Kite.request({
        path: '/clientapi/editor/event',
        method: 'POST',
      }, JSON.stringify(this.buildEvent(focus, doc, editor.selection)), doc));
    }

    return promise
      .then(() => this.Kite.request({
        path: '/clientapi/editor/event',
        method: 'POST',
      }, payload, doc))
      .then((res) => {
        this.pendingPromiseResolve && this.pendingPromiseResolve(res);
      })
      .catch((err) => {
        this.pendingPromiseReject && this.pendingPromiseReject(err);
      })
      .then(() => {
        delete this.pendingPromise;
        delete this.pendingPromiseResolve;
        delete this.pendingPromiseReject;
      });
  }

  buildEvent(action, document, selection) {
    const content = document.getText();
    return content.length > this.Kite.maxFileSize
      ? {
        source: 'vscode',
        action: 'skip',
        text: '',
        filename: (0,_urls__WEBPACK_IMPORTED_MODULE_2__.normalizeDriveLetter)(document.fileName),
        selections: [{ start: 0, end: 0, encoding: 'utf-16' }],
        editor_version: vscode__WEBPACK_IMPORTED_MODULE_0__.version,
        plugin_version
      }
      : this.makeEvent(action, document, content, selection);
  }

  makeEvent(action, document, text, selection) {
    const event = {
      source: 'vscode',
      text,
      action,
      filename: (0,_urls__WEBPACK_IMPORTED_MODULE_2__.normalizeDriveLetter)(document.fileName),
      editor_version: vscode__WEBPACK_IMPORTED_MODULE_0__.version,
      plugin_version
    };

    if (selection && selection.start != null && selection.end != null) {
      event.selections = [{
        start: document.offsetAt(selection.start),
        end: document.offsetAt(selection.end),
        encoding: 'utf-16',
      }];
    }

    return event;
  }
}


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = JSON.parse("{\"name\":\"kite\",\"displayName\":\"Kite AutoComplete AI Code: Python, Java, Go, PHP, C/C#/C++, Javascript, HTML/CSS, Typescript, React, Ruby, Scala, Kotlin, Bash, Vue, React\",\"description\":\"AI code completions for all languages, intellisense, code snippets, code signatures, and cursor-following documentation for VS Code. Kite supports .js .jsx .vue .tsx .ts .css .html .less .c .cc .cpp .cs .h .hpp .m .scala .java .kt .py .go .php .rb and .sh filetypes.\",\"version\":\"0.136.0\",\"publisher\":\"kiteco\",\"engines\":{\"vscode\":\"^1.34.0\"},\"icon\":\"logo.png\",\"galleryBanner\":{\"color\":\"#11182F\",\"theme\":\"dark\"},\"author\":{\"name\":\"Kite\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/kiteco/vscode-plugin.git\"},\"categories\":[\"Programming Languages\",\"Snippets\",\"Other\"],\"keywords\":[\"autocomplete\",\"intellicode\",\"intellisense\",\"documentation\",\"snippets\",\"method completion\",\"python\",\"java\",\"html\",\"autocomplete\",\"javascript\",\"typescript\",\"php\",\"python\",\"ruby\",\"go\",\"golang\",\"bash\",\"kotlin\",\"html\",\"css\",\"rust\",\"c\",\"cpp\",\"c++\",\"csharp\",\"c#\",\"objective-c\",\"objectivec\",\"ai\",\"react\",\".js\",\".jsx\",\".vue\",\".tsx\",\".ts\",\".css\",\".html\",\".less\",\".c\",\".cc\",\".cpp\",\".cs\",\".h\",\".hpp\",\".m\",\".scala\",\".java\",\".kt\",\".py\",\".go\",\".php\",\".rb\",\".sh\"],\"activationEvents\":[\"*\"],\"main\":\"./dist/kite-extension\",\"contributes\":{\"languages\":[{\"id\":\"c\",\"aliases\":[\"c\",\"C\"],\"extensions\":[\".c\",\".h\"]},{\"id\":\"cpp\",\"aliases\":[\"cpp\",\"c++\",\"C++\"],\"extensions\":[\".cc\",\".cpp\",\".hpp\"]},{\"id\":\"csharp\",\"aliases\":[\"csharp\",\"Csharp\",\"CSharp\",\"c#\",\"C#\"],\"extensions\":[\".cs\"]},{\"id\":\"go\",\"aliases\":[\"go\",\"Go\",\"golang\",\"Golang\"],\"extensions\":[\".go\"]},{\"id\":\"html\",\"aliases\":[\"html\",\"Html\",\"HTML\"],\"extensions\":[\".html\"]},{\"id\":\"java\",\"aliases\":[\"java\",\"Java\"],\"extensions\":[\".java\"]},{\"id\":\"javascript\",\"aliases\":[\"JavaScript\",\"Javascript\",\"js\",\"javascript\"],\"extensions\":[\".js\",\".jsx\",\".vue\"]},{\"id\":\"kotlin\",\"aliases\":[\"kotlin\",\"Kotlin\"],\"extensions\":[\".kt\"]},{\"id\":\"less\",\"aliases\":[\"less\",\"Less\"],\"extensions\":[\".less\"]},{\"id\":\"objective-c\",\"aliases\":[\"objective-c\",\"Objective-C\"],\"extensions\":[\".m\"]},{\"id\":\"php\",\"aliases\":[\"php\",\"PHP\",\"Php\"],\"extensions\":[\".php\"]},{\"id\":\"python\",\"aliases\":[\"Python\",\"python\"],\"extensions\":[\".py\",\".pyw\"]},{\"id\":\"ruby\",\"aliases\":[\"ruby\",\"Ruby\"],\"extensions\":[\".rb\"]},{\"id\":\"scala\",\"aliases\":[\"scala\",\"Scala\"],\"extensions\":[\".scala\"]},{\"id\":\"shellscript\",\"aliases\":[\"bash\",\"Bash\",\"shellscript\",\"Shellscript\"],\"extensions\":[\".sh\"]},{\"id\":\"typescript\",\"aliases\":[\"typescript\",\"Typescript\"],\"extensions\":[\".ts\"]},{\"id\":\"typescriptreact\",\"extensions\":[\".tsx\"]}],\"commands\":[{\"command\":\"kite.help\",\"title\":\"Kite: Help\"},{\"command\":\"kite.docs-at-cursor\",\"title\":\"Kite: Docs At Cursor\"},{\"command\":\"kite.open-settings\",\"title\":\"Kite: Engine Settings\"},{\"command\":\"kite.open-copilot\",\"title\":\"Kite: Open Copilot\"},{\"command\":\"kite.related-code-from-file\",\"title\":\"Kite: Find Related Code From File (experimental)\"},{\"command\":\"kite.related-code-from-line\",\"title\":\"Kite: Find Related Code From Line (experimental)\"},{\"command\":\"kite.python-tutorial\",\"title\":\"Kite: Python Tutorial\"},{\"command\":\"kite.javascript-tutorial\",\"title\":\"Kite: Javascript Tutorial\"},{\"command\":\"kite.go-tutorial\",\"title\":\"Kite: Go Tutorial\"}],\"menus\":{\"editor/context\":[{\"when\":\"editorHasSelection\",\"command\":\"kite.related-code-from-line\"}]},\"configuration\":{\"type\":\"object\",\"title\":\"Kite Configuration\",\"properties\":{\"kite.showWelcomeNotificationOnStartup\":{\"type\":\"boolean\",\"default\":true,\"description\":\"Whether or not to show the Kite welcome notification on startup.\"},\"kite.pollingInterval\":{\"type\":\"integer\",\"default\":5000,\"description\":\"Interval in milliseconds at which the Kite extension polls Kite Engine to get the status of the current file.\"},\"kite.developerMode\":{\"type\":\"boolean\",\"default\":false,\"description\":\"Displays JSON data used by a view and also updates sample.html with the last rendered HTML.\"},\"kite.startKiteEngineOnStartup\":{\"type\":\"boolean\",\"default\":true,\"description\":\"Automatically start Kite Engine on editor startup if it's not already running.\"},\"kite.loggingLevel\":{\"type\":\"string\",\"default\":\"info\",\"enum\":[\"silly\",\"verbose\",\"debug\",\"info\",\"warning\",\"error\"],\"description\":\"The verbosity level of Kite's logs.\"},\"kite.enableSnippets\":{\"type\":\"boolean\",\"default\":true,\"description\":\"Enable snippet completions\"},\"kite.enableOptionalCompletionsTriggers\":{\"type\":\"boolean\",\"default\":false,\"description\":\"For JavaScript and Go: Enabling this will cause Kite to trigger completions after a space, ( and [. Note that this may cause completions from other providers to not show up.\"},\"kite.completions.disabledFileExtensions\":{\"type\":\"array\",\"default\":[],\"description\":\"Array of file extensions for which Kite will not provide completions, e.g. ['.go', '.ts']. Requires restart of VSCode.\"},\"kite.codefinder.enableLineDecoration\":{\"type\":\"boolean\",\"default\":true,\"description\":\"Enables line decoration for Kite code finder.\"}}}},\"scripts\":{\"compile-test\":\"rm -rf ./out/test && webpack --config config/webpack.tests.config.js --mode none\",\"test\":\"npm run compile-test && node ./out/test/runTests.js\",\"cleanup\":\"rm -f package-lock.json && rm -rf node_modules\",\"vscode:prepublish\":\"webpack --config config/webpack.config.js --mode production\",\"compile-prod\":\"webpack --config config/webpack.config.js --mode production\",\"compile\":\"webpack --config config/webpack.config.js --mode none\",\"watch\":\"webpack --config config/webpack.config.js --mode none --watch\",\"install-local\":\"vsce package && code --install-extension kite-*.vsix && rm kite-*.vsix\"},\"dependencies\":{\"kite-api\":\"=3.20.0\",\"kite-connector\":\"=3.14.0\",\"md5\":\"^2.2.0\",\"mixpanel\":\"^0.5.0\",\"open\":\"^7.3.0\",\"rollbar\":\"^2.3.8\"},\"devDependencies\":{\"@atom/temp\":\"^0.8.4\",\"@babel/runtime\":\"^7.12.5\",\"@types/chai\":\"^4.2.14\",\"@types/md5\":\"^2.2.1\",\"@types/mixpanel\":\"^2.14.2\",\"@types/mocha\":\"^5.2.6\",\"@types/node\":\"^10.12.21\",\"@types/sinon\":\"^9.0.9\",\"@types/vscode\":\"^1.34.0\",\"@typescript-eslint/eslint-plugin\":\"^4.7.0\",\"@typescript-eslint/parser\":\"^4.7.0\",\"chai\":\"^4.2.0\",\"copy-webpack-plugin\":\"^5.0.2\",\"editors-json-tests\":\"git://github.com/kiteco/editors-json-tests.git#master\",\"eslint\":\">=4.18.2\",\"fs-plus\":\"^3.0.2\",\"glob\":\"^7.1.6\",\"jsdom\":\"^10\",\"jsdom-global\":\"^3\",\"mocha\":\"^6.1.4\",\"sinon\":\"^9.2.2\",\"source-map-support\":\"^0.5.19\",\"terser\":\"^3.17.0\",\"ts-loader\":\"^8.0.11\",\"typescript\":\"^4.0.5\",\"vsce\":\"^1.59.0\",\"vscode-test\":\"^1.5.0\",\"webpack\":\"^5.10.3\",\"webpack-cli\":\"^4.2.0\",\"webpack-merge-and-include-globally\":\"^2.1.16\",\"webpack-node-externals\":\"^2.5.2\",\"widjet-test-utils\":\"^1.8.0\"}}");

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
/******/ 	return __webpack_require__(29);
/******/ })()
;
//# sourceMappingURL=events.test.js.map