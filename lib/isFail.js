"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFail = void 0;
const isOkFail_1 = require("./isOkFail");
exports.isFail = (o) => isOkFail_1.default(o) && o.ok === false;
exports.default = exports.isFail;
