"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOK = void 0;
const isOkFail_1 = require("./isOkFail");
exports.isOK = (o) => isOkFail_1.default(o) && o.ok === true;
exports.default = exports.isOK;
