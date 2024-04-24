// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import 'cross-fetch/polyfill';
import {TextEncoder, TextDecoder} from 'util';
import {server} from "@/mocks/node";

Object.assign(global, { TextDecoder, TextEncoder });

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});