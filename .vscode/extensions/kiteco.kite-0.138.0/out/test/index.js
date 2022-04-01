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
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// This file provides the test runner to use when running extension tests,
// based off the example in VSCode documentation.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.run = void 0;
process.env.NODE_ENV = "test";
__webpack_require__(4);
const path = __webpack_require__(1);
const glob = __webpack_require__(5);
const Mocha = __webpack_require__(6);
function run() {
    const mocha = new Mocha({
        ui: 'bdd',
        timeout: 5000,
    });
    mocha.useColors(true);
    const outTestDir = path.resolve(__dirname);
    return new Promise((res, rej) => {
        glob('*.test.js', { cwd: outTestDir }, (err, files) => {
            if (err) {
                return rej(err);
            }
            // Add files to the test suite
            files.forEach(f => mocha.addFile(path.resolve(outTestDir, f)));
            try {
                // Run the mocha test
                mocha.run(failures => {
                    if (failures > 0) {
                        rej(new Error(`${failures} tests failed.`));
                    }
                    else {
                        res();
                    }
                });
            }
            catch (err) {
                rej(err);
            }
        });
    });
}
exports.run = run;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("glob");;

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("mocha");;

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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(3);
/******/ })()
;
//# sourceMappingURL=index.js.map