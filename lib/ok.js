"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = void 0;
const OkFail_1 = require("./OkFail");
exports.ok = (data) => OkFail_1.okFail(true, data);
exports.default = exports.ok;
