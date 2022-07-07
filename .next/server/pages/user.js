"use strict";
(() => {
var exports = {};
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 1321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9531);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3998);
/* harmony import */ var lib_iron_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5227);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_redux_userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9185);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_1__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function User({ user  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!user.isLoggedIn) {
            router.push("/");
            return;
        }
        dispatch((0,state_redux_userSlice__WEBPACK_IMPORTED_MODULE_6__/* .setUserState */ .Q_)({
            ...user,
            currentTab: "user"
        }));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-5",
                        children: "Your Overview"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row flex-wrap break-words",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-stone-800 text-center text-sm rounded-xl",
                                        children: "Monday"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-black text-center bg-emerald-400 mx-1",
                                        children: "Assignment 1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-emerald-400 mx-1",
                                        children: "Assignment 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-emerald-400 mx-1",
                                        children: "Assignment 3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-stone-800 text-center text-sm rounded-xl",
                                        children: "Tuesday"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-rose-400 mx-1",
                                        children: "Assignment 1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-rose-400 mx-1",
                                        children: "Assignment 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-rose-400 mx-1",
                                        children: "Assignment 3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-stone-800 text-center text-sm rounded-xl",
                                        children: "Wednesday"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-cyan-400 mx-1",
                                        children: "Assignment 1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-cyan-400 mx-1",
                                        children: "Assignment 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-cyan-400 mx-1",
                                        children: "Assignment 3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-stone-800 text-center text-sm rounded-xl",
                                        children: "Thursday"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-fuchsia-400 mx-1",
                                        children: "Assignment 1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-fuchsia-400 mx-1",
                                        children: "Assignment 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-fuchsia-400 mx-1",
                                        children: "Assignment 3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-1 w-full sm:w-1/2 md:w-1/3 space-y-1 px-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-stone-800 text-center text-sm rounded-xl",
                                        children: "Friday"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-yellow-400 mx-1",
                                        children: "Assignment 1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-yellow-400 mx-1",
                                        children: "Assignment 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-xs rounded text-center text-black bg-yellow-400 mx-1",
                                        children: "Assignment 3"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const getServerSideProps = (0,iron_session_next__WEBPACK_IMPORTED_MODULE_1__/* .withIronSessionSsr */ .c)(async function getServerSideProps({ req  }) {
    const session = req.session;
    let user = {
        id: -999,
        first_name: "",
        last_name: "",
        email: "",
        isLoggedIn: false
    };
    if (Object.keys(session).length > 0) {
        user = {
            id: session.userSession.id,
            first_name: session.userSession.first_name,
            last_name: session.userSession.last_name,
            email: session.userSession.email,
            isLoggedIn: true
        };
    }
    return {
        props: {
            user
        }
    };
}, lib_iron_session__WEBPACK_IMPORTED_MODULE_3__/* .sessionOptions */ .d);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8157:
/***/ ((module) => {

module.exports = require("@react-spring/web");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 178:
/***/ ((module) => {

module.exports = require("react-icons/fc");

/***/ }),

/***/ 4152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [531,145,609], () => (__webpack_exec__(1321)));
module.exports = __webpack_exports__;

})();