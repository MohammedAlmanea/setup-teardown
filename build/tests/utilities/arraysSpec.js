"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../../utilities/arrays"));
describe('testing arrays.ts functions', () => {
    const numArr = [3, 4, 5, 6];
    const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
    describe('addArr function should add the array numbers', () => {
        it('should add numbers in array and be truthy', () => {
            expect(arrays_1.default.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 18', () => {
            expect(arrays_1.default.addArr(numArr)).toBe(18);
        });
    });
    describe('concatArr function should concat two arrays', () => {
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    });
    describe('cut3 function should cut the third element in the array', () => {
        it('should contain 3 items except rabbit', () => {
            expect(arrays_1.default.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
        });
    });
    describe('lgNum function should return the largest number in the array', () => {
        it('should have 6 be largest number', () => {
            expect(arrays_1.default.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
        });
    });
});
