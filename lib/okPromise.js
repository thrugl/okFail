"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.okPromise = void 0;
const ok_1 = require("./ok");
const fail_1 = require("./fail");
exports.okPromise = (promise, check) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const x = yield promise;
        const t = typeof check;
        if (t === 'undefined' || (t === 'function' ? check(x) : check)) {
            return ok_1.default(x);
        }
        else
            throw x;
    }
    catch (x) {
        return fail_1.default(x);
    }
});
exports.default = exports.okPromise;
