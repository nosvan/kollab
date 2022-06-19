"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 14:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions)
/* harmony export */ });
const sessionOptions = {
    password: process.env.JWT_SECRET,
    cookieName: "iron-session-token",
    cookieOptions: {
        maxAge: 60 * 60 * 24,
        httpOnly: true,
        sameSite: "strict",
        secure: "production" === "production",
        path: "/"
    }
};


/***/ }),

/***/ 601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(534);
/* harmony import */ var lib_iron_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handle, lib_iron_session__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d));
async function handle(req, res) {
    const { cookies  } = req;
    const t0k3n = cookies["iron-session-token"];
    if (!t0k3n) {
        res.json({
            message: "Not logged in"
        });
    } else {
        req.session.destroy();
        const user = {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            isLoggedIn: false
        };
        res.json(user);
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
var __webpack_exports__ = __webpack_require__.X(0, [534], () => (__webpack_exec__(601)));
module.exports = __webpack_exports__;

})();