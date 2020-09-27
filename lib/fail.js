"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = void 0;
const OkFail_1 = require("./OkFail");
exports.fail = (data) => OkFail_1.okFail(false, data);
exports.default = exports.fail;
