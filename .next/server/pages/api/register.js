"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 6527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions)
/* harmony export */ });
const sessionOptions = {
    password: process.env.JWT_SECRET,
    cookieName: "iron-session-token",
    cookieOptions: {
        maxAge: 60 * 60 * 24 * 30 * 6,
        httpOnly: true,
        sameSite: "strict",
        secure: "production" === "production",
        path: "/"
    }
};


/***/ }),

/***/ 3388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ }),

/***/ 2550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3388);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_iron_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6527);
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_3__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_3__/* .withIronSessionApiRoute */ .n)(handle, lib_iron_session__WEBPACK_IMPORTED_MODULE_2__/* .sessionOptions */ .d));
async function handle(req, res) {
    if (req.method === "POST") {
        const { first_name , last_name , email , password  } = req.body;
        try {
            const result = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.create */ .Z.user.create({
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    password: true
                },
                data: {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10)
                }
            });
            try {
                const safeUser = {
                    id: result.id,
                    first_name: result.first_name,
                    last_name: result.last_name,
                    email: result.email,
                    isLoggedIn: true
                };
                const user = {
                    ...result,
                    isLoggedIn: true
                };
                req.session.userSession = user;
                await req.session.save();
                res.status(200).json(safeUser);
            } catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
        } catch (error) {
            if (error.code === "P2002") {
                res.json({
                    message: "Email already exists"
                });
            } else {
                console.log(error);
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534], () => (__webpack_exec__(2550)));
module.exports = __webpack_exports__;

})();