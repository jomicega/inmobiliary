"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    console.log('Executed create region service....');
    const { fieldName } = event;
    console.log({ fieldName });
};
exports.handler = handler;
