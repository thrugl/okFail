"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOkFail = void 0;
exports.isOkFail = (o) => o.__proto__.constructor.name === 'OkFail';
exports.default = exports.isOkFail;
