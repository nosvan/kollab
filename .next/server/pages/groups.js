"use strict";
(() => {
var exports = {};
exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Groups),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(531);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(603);
/* harmony import */ var _lib_iron_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(227);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _state_redux_userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_1__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Groups({ user  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        dispatch((0,_state_redux_userSlice__WEBPACK_IMPORTED_MODULE_6__/* .setUserState */ .Q_)({
            ...user,
            currentTab: "groups"
        }));
    }, [
        dispatch,
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Groups page"
            })
        })
    });
};
const getServerSideProps = (0,iron_session_next__WEBPACK_IMPORTED_MODULE_1__/* .withIronSessionSsr */ .c)(async function getServerSideProps(context) {
    console.log("index.tsx getServerSideProps");
    console.log("session: ", context.req.session);
    const session = context.req.session;
    let user = {
        id: -999,
        first_name: "",
        last_name: "",
        email: "",
        isLoggedIn: false
    };
    if (Object.keys(session).length > 0) {
        user = {
            id: session.user.id,
            first_name: session.user.first_name,
            last_name: session.user.last_name,
            email: session.user.email,
            isLoggedIn: true
        };
    }
    return {
        props: {
            user
        }
    };
}, _lib_iron_session__WEBPACK_IMPORTED_MODULE_3__/* .sessionOptions */ .d);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 178:
/***/ ((module) => {

module.exports = require("react-icons/fc");

/***/ }),

/***/ 152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [531,215], () => (__webpack_exec__(759)));
module.exports = __webpack_exports__;

})();