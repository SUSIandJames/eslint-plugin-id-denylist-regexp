"use strict";

const rule = require("../lib/rule");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("id-denylist", rule, {
    valid: [
        {
            code: "foo = \"bar\"",
            options: ["/Foo/", "/fo$/", "/bar/"]
        },
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
            code: "foo = \"bar\"",
            options: ["/foo/"],
            errors: [
                {
                    messageId: "restricted",
                    data: { name: "foo" },
                    type: "Identifier"
                }
            ]
        },
        {
            code: "foo = \"bar\"",
            options: ["/Foo/i"],
            errors: [
                {
                    messageId: "restricted",
                    data: { name: "foo" },
                    type: "Identifier"
                }
            ]
        },
        {
            code: "whiteList = blackList",
            options: ["/(white|black)list/i"],
            errors: [
                {
                    messageId: "restricted",
                    data: { name: "whiteList" },
                    type: "Identifier"
                },
                {
                    messageId: "restricted",
                    data: { name: "blackList" },
                    type: "Identifier"
                }
            ]
        }
    ]
});
