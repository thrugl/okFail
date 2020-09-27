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
exports.okFetch = void 0;
const cross_fetch_1 = require("cross-fetch");
const okPromise_1 = require("./okPromise");
exports.okFetch = (url, options = {}, check) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const x = yield cross_fetch_1.default(url, options);
        const type = x.headers.get('content-type');
        const isJSON = type && type.includes('application/json');
        const data = (isJSON ? x.json() : x.text());
        return okPromise_1.okPromise(data, () => {
            console.log('testin');
            if (typeof check !== 'undefined') {
                return check(x);
            }
            return x.ok;
        });
    }
    catch (e) {
        return okPromise_1.okPromise(Promise.resolve(Error(e)), false);
    }
});
exports.default = exports.okFetch;
