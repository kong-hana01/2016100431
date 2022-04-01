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
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode_1 = __webpack_require__(8);
const path = __webpack_require__(1);
const chai_1 = __webpack_require__(9);
const sinon = __webpack_require__(10);
const KiteAPI = __webpack_require__(11);
const codenav_decoration_1 = __webpack_require__(12);
describe('KiteRelatedCodeDecorationsProvider', () => {
    it('hooks into the onDidChangeTextEditorSelection callback when initialized', () => {
        const onDidChangeTextEditorSelection = sinon.spy();
        new codenav_decoration_1.default({ onDidChangeTextEditorSelection });
        chai_1.assert.isTrue(onDidChangeTextEditorSelection.called);
        chai_1.assert.isFunction(onDidChangeTextEditorSelection.calledWith);
    });
    describe("for various line decoration API responses", () => {
        let setDecorationSpy;
        let getLineDecorationStub;
        let provider;
        let fireEvent;
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            getLineDecorationStub = sinon.stub(KiteAPI, "getLineDecoration");
            provider = new codenav_decoration_1.default(vscode_1.window);
            ({ setDecorationSpy, fireEvent } = yield setupDocument(provider));
        }));
        afterEach(() => {
            getLineDecorationStub.reset();
            getLineDecorationStub.restore();
            setDecorationSpy.restore();
        });
        it('sets the decoration when project_ready === true', () => __awaiter(void 0, void 0, void 0, function* () {
            const inlineMessage = "Find related code in kiteco";
            const hoverMessage = "Search for related code in kiteco which may be related to this line";
            getLineDecorationStub.callsFake(() => {
                return {
                    inline_message: inlineMessage,
                    hover_message: hoverMessage,
                    project_ready: true,
                };
            });
            yield fireEvent();
            const opts = setDecorationSpy.lastCall.args[1];
            chai_1.assert.isAbove(opts.length, 0, "Last call should include options, which shows the decoration");
            chai_1.assert.include(opts[0].hoverMessage.value, hoverMessage);
            chai_1.assert.include(opts[0].renderOptions.after.contentText, inlineMessage);
        }));
        it('does not set the decoration when enableLineDecoration === false', () => __awaiter(void 0, void 0, void 0, function* () {
            const getConfigurationStub = sinon.stub(provider, "enabled").callsFake(() => false);
            yield fireEvent();
            chai_1.assert.isFalse(getLineDecorationStub.called);
            chai_1.assert.isFalse(setDecorationSpy.called);
            getConfigurationStub.restore();
        }));
        it('does not set the decoration when project_ready === false', () => __awaiter(void 0, void 0, void 0, function* () {
            getLineDecorationStub.callsFake(() => {
                return {
                    inline_message: "",
                    hover_message: "",
                    project_ready: false,
                };
            });
            yield fireEvent();
            setDecorationSpy.getCalls().forEach(call => {
                chai_1.assert.deepEqual(call.args[1], [], "should have never been called with options");
            });
        }));
        it('does not rerequest the decoration when project_ready === undefined', () => __awaiter(void 0, void 0, void 0, function* () {
            getLineDecorationStub.callsFake(() => {
                return {
                    inline_message: "",
                    hover_message: "",
                    project_ready: undefined,
                };
            });
            yield fireEvent();
            chai_1.assert.isTrue(getLineDecorationStub.calledOnce);
            yield fireEvent();
            chai_1.assert.isAtMost(getLineDecorationStub.callCount, 1);
            setDecorationSpy.getCalls().forEach(call => {
                chai_1.assert.deepEqual(call.args[1], [], "setDecoration should not have been called with options");
            });
        }));
    });
});
function setupDocument(decorationProvider) {
    return __awaiter(this, void 0, void 0, function* () {
        const testDocument = yield vscode_1.workspace.openTextDocument(path.resolve(__dirname, "..", "..", "test", "codenav-decoration.test.ts"));
        const textEditor = yield vscode_1.window.showTextDocument(testDocument);
        return {
            setDecorationSpy: sinon.spy(textEditor, "setDecorations"),
            fireEvent: () => {
                return decorationProvider.onDidChangeTextEditorSelection({
                    textEditor,
                    selections: [
                        new vscode_1.Selection(new vscode_1.Position(0, 0), new vscode_1.Position(0, 0)),
                    ],
                    kind: vscode_1.TextEditorSelectionChangeKind.Mouse,
                });
            }
        };
    });
}


/***/ }),
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
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const path = __webpack_require__(1);
const process = __webpack_require__(13);
const vscode_1 = __webpack_require__(8);
const KiteAPI = __webpack_require__(11);
const relatedCodeLineDecoration = vscode_1.window.createTextEditorDecorationType({
    rangeBehavior: vscode_1.DecorationRangeBehavior.ClosedOpen,
});
class KiteRelatedCodeDecorationsProvider {
    constructor(win = vscode_1.window) {
        this.lineInfo = undefined;
        this.activeEditor = undefined;
        this.editTimeout = undefined;
        win.onDidChangeTextEditorSelection(this.onDidChangeTextEditorSelection.bind(this));
    }
    dispose() {
        // Clears all decorations of this type
        relatedCodeLineDecoration.dispose();
    }
    // For testing and easy stubbing
    enabled() {
        return vscode_1.workspace.getConfiguration('kite').codefinder.enableLineDecoration;
    }
    // Public for testing
    onDidChangeTextEditorSelection(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.enabled()) {
                return;
            }
            if (typeof (this.editTimeout) === 'undefined' && (event.kind === vscode_1.TextEditorSelectionChangeKind.Command || event.kind === vscode_1.TextEditorSelectionChangeKind.Mouse)) {
                // If timeout is not set (i.e. the decoration is already showing), and the cursor is moved by
                // a non-edit event, then show the decoration immediately.
                yield this.decorate(event);
            }
            else {
                // Otherwise, show the decoration after 1 second of inactivity.
                this.clearDecorations(event.textEditor);
                if (typeof (this.editTimeout) !== 'undefined') {
                    clearTimeout(this.editTimeout);
                    this.editTimeout = undefined;
                }
                this.editTimeout = setTimeout(() => {
                    this.decorate(event);
                }, 1000);
            }
        });
    }
    decorate(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const editor = event.textEditor;
            const applicable = this.lineInfo && this.lineInfo.projectReady !== undefined;
            const ready = this.lineInfo && this.lineInfo.projectReady;
            if (!this.lineInfo || editor !== this.activeEditor || (applicable && !ready)) {
                yield this.reset(editor);
            }
            else if (event.selections.length != 1) {
                yield this.reset(editor);
                return;
            }
            if (this.lineInfo && this.lineInfo.projectReady) {
                const cursor = event.selections[0].active;
                const opts = {
                    hoverMessage: this.hoverMessage(this.lineInfo.hoverMessage),
                    range: this.lineEnd(cursor),
                    renderOptions: {
                        after: {
                            contentText: `${this.lineInfo.inlineMessage}`,
                            margin: '0 0 0 4em',
                            color: new vscode_1.ThemeColor('textSeparator.foreground'),
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                        }
                    }
                };
                editor.setDecorations(relatedCodeLineDecoration, [opts]);
            }
            this.editTimeout = undefined;
        });
    }
    hoverMessage(hover) {
        let logo = path.join(vscode_1.extensions.getExtension("kiteco.kite").extensionPath, "dist", "assets", "images", "logo-light-blue.svg");
        if (process.platform === 'win32') {
            logo = `file:\\\\\\${logo}`;
        }
        const md = new vscode_1.MarkdownString(`![KiteIcon](${logo}|height=12)&nbsp;&nbsp;[${hover}](command:kite.related-code-from-line)`);
        // Must mark as trusted to run commands in MarkdownStrings
        md.isTrusted = true;
        return md;
    }
    lineEnd(pos) {
        const ending = pos.with(pos.line, 9999);
        return new vscode_1.Range(ending, ending);
    }
    reset(editor) {
        return __awaiter(this, void 0, void 0, function* () {
            this.clearDecorations(editor);
            const info = yield this.fetchDecoration(editor.document.fileName);
            if (!info) {
                return;
            }
            this.lineInfo = info;
        });
    }
    clearDecorations(editor) {
        editor.setDecorations(relatedCodeLineDecoration, []);
        this.activeEditor = editor;
        this.lineInfo = undefined;
    }
    fetchDecoration(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield KiteAPI.getLineDecoration(filename);
                if (resp && !resp.err) {
                    return {
                        inlineMessage: resp.inline_message,
                        hoverMessage: resp.hover_message,
                        projectReady: resp.project_ready,
                    };
                }
            }
            catch (e) {
                // pass
            }
            return null;
        });
    }
}
exports.default = KiteRelatedCodeDecorationsProvider;


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("process");;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(7);
/******/ })()
;
//# sourceMappingURL=codenav-decoration.test.js.map