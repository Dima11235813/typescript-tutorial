exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/**\r\n * Required External Modules\r\n */\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nvar express = __importStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'express'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\ndotenv.config();\r\n/**\r\n * App Variables\r\n */\r\nif (!process.env.PORT) {\r\n    process.exit(1);\r\n}\r\nvar PORT = parseInt(process.env.PORT, 10);\r\nvar app = express();\r\n/**\r\n *  App Configuration\r\n */\r\napp.use(helmet_1.default());\r\napp.use(cors_1.default());\r\napp.use(express.json());\r\n/**\r\n * Server Activation\r\n */\r\nvar server = app.listen(PORT, function () {\r\n    console.log(\"Listening on port \" + PORT);\r\n});\r\nif (true) {\r\n    module.hot.accept();\r\n    module.hot.dispose(function () { return server.close(); });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};