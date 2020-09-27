"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.okFail = exports.OkFail = void 0;
class OkFail {
    constructor(ok, data) {
        this.ok = ok;
        this.data = data;
    }
}
exports.OkFail = OkFail;
exports.okFail = (ok, data) => new OkFail(ok, data);
exports.default = exports.okFail;
