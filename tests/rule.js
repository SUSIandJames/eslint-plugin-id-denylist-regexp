"use strict";

const rule = require("../lib/rule");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("id-denylist", rule, {
    valid: [
        {
            code: "const tmp0 = 1",
            options: ["/_[0-9]/"]
        },
        {
            code: "const tmp_0a = 1",
            options: ["/_[0-9]$/"]
        },
        {
            code: "const tmp = 1",
            options: ["/T/"]
        },
    ],

    invalid: [
        {
            code: "const tmp_0 = 1",
            options: ["/_[0-9]/"],
            errors: [{ message: "Identifier 'tmp_0' is restricted." }]
        },
        {
            code: "const tmp = 1",
            options: ["/T/i"],
            errors: [{ message: "Identifier 'tmp' is restricted." }]
        },
        {
            code: "const whiteList = 1",
            options: ["/(black|white)list/i"],
            errors: [{ message: "Identifier 'whiteList' is restricted." }]
        },
    ]
});
