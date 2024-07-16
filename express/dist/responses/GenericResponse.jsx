"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericResponse {
    constructor(status, message) {
        this.timestamp = new Date().toISOString();
        this.status = status;
        this.message = message;
    }
}
exports.default = GenericResponse;
