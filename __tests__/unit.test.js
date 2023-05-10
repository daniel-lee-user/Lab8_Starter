// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNum1', () => {
    expect(functions.isPhoneNumber("(487) 462-6994")).toBe(true);
});

test('isPhoneNum2', () => {
    expect(functions.isPhoneNumber("(961) 617-8122")).toBe(true);
});

test('notPhoneNum1', () => {
    expect(functions.isPhoneNumber("hello")).toBe(false);
});

test('notPhoneNum2', () => {
    expect(functions.isPhoneNumber("911")).toBe(false);
});

test('isEmail1', () => {
    expect(functions.isEmail("realemail@gmail.com")).toBe(true);
});

test('isEmail2', () => {
    expect(functions.isEmail("ucsdstudent@ucsd.edu")).toBe(true);
});

test('notEmail1', () => {
    expect(functions.isEmail("notscamemail.com")).toBe(false);
});

test('notEmail2', () => {
    expect(functions.isEmail("msgmehere@lol")).toBe(false);
});

test('isStrongPW1', () => {
    expect(functions.isStrongPassword("strongpw1234")).toBe(true);
});

test('isStrongPW2', () => {
    expect(functions.isStrongPassword("s_Cv_c3_34221")).toBe(true);
});

test('notStrongPW1', () => {
    expect(functions.isStrongPassword("invalid@ char")).toBe(false);
});

test('notStrongPW2', () => {
    expect(functions.isStrongPassword("thispasswordisprobtoolonglol")).toBe(false);
});

test('isDate1', () => {
    expect(functions.isDate("1/1/4200")).toBe(true);
});

test('isDate2', () => {
    expect(functions.isDate("11/11/1402")).toBe(true);
});

test('notDate1', () => {
    expect(functions.isDate("this is a date")).toBe(false);
});

test('notDate2', () => {
    expect(functions.isDate("0/0/1")).toBe(false);
});

test('isHex1', () => {
    expect(functions.isHexColor("000")).toBe(true);
});

test('isHex2', () => {
    expect(functions.isHexColor("123456")).toBe(true);
});

test('notHex1', () => {
    expect(functions.isHexColor("#1234567")).toBe(false);
});

test('notHex2', () => {
    expect(functions.isHexColor("not even a number")).toBe(false);
});