module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 28:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mocha-loader/dist/cjs.js):\nError: Unsupported target environment node\n    at Object.pitch (/Users/tcheang/go/src/github.com/kiteco/vscode-plugin/node_modules/mocha-loader/dist/index.js:60:11)");

/***/ }),

/***/ 29:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mocha-loader/dist/cjs.js):\nError: Unsupported target environment node\n    at Object.pitch (/Users/tcheang/go/src/github.com/kiteco/vscode-plugin/node_modules/mocha-loader/dist/index.js:60:11)");

/***/ }),

/***/ 30:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

//
// PLEASE DO NOT MODIFY / DELETE UNLESS YOU KNOW WHAT YOU ARE DOING
//
// This file is providing the test runner to use when running extension tests.
// By default the test runner in use is Mocha based.
//
// You can provide your own test runner if you want to override it by exporting
// a function run(testRoot: string, clb: (error:Error) => void) that the extension
// host can call to run the tests. The test runner is expected to use console.log
// to report the results back to the caller. When the tests are finished, return
// a possible error to the callback or null if none.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.run = void 0;
// process.env.NODE_ENV = "test";
const path = __webpack_require__(7);
const glob = __webpack_require__(31);
// const path = require('path');
// const Mocha = require('mocha');
// const glob = require('glob');
// import * as Mocha from 'mocha';
const Mocha = __webpack_require__(32);
const mocha = new Mocha({
    ui: 'tdd',
    timeout: 5000,
});
mocha.useColors(true);
function run(testsRoot, clb) {
    // const testFolder = path.resolve(testsRoot, '..', '..', 'test');
    // console.log("testfolder", testFolder);
    console.log("testsRoot", testsRoot);
    glob('*.test.js', { cwd: testsRoot }, (err, files) => {
        console.log("maches", files);
        if (err) {
            return clb(err);
        }
        console.log("adding...");
        // Add files to the test suite
        files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));
        try {
            // Run the mocha test
            console.log("running...");
            mocha.run(failures => {
                console.log("callback", failures);
                clb(null, failures);
            });
        }
        catch (err) {
            console.error(err);
            clb(err);
        }
    });
}
exports.run = run;
// export function run(): Promise<void> {
//   // Create the mocha test
//   // const Mocha = require('mocha');
//   const mocha = new Mocha({
//     ui: 'bdd',
//     timeout: 5000,
//   });
//   mocha.useColors(true);
//   const testsRoot = path.resolve(__dirname, '..');
//   return new Promise((c, e) => {
//     glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
//       if (err) {
//         return e(err);
//       }
//       // Add files to the test suite
//       files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));
//       try {
//         // Run the mocha test
//         mocha.run(failures => {
//           if (failures > 0) {
//             e(new Error(`${failures} tests failed.`));
//           } else {
//             c();
//           }
//         });
//       } catch (err) {
//         e(err);
//       }
//     });
//   });
// }
// module.exports = testRunner;


/***/ }),

/***/ 31:
/***/ ((module) => {

"use strict";
module.exports = require("glob");;

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("mocha");;

/***/ }),

/***/ 7:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
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
/******/ 	__webpack_require__(28);
/******/ 	__webpack_require__(29);
/******/ 	return __webpack_require__(30);
/******/ })()
;
//# sourceMappingURL=index.js.map