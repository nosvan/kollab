"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./state/redux/userSlice.ts
var userSlice = __webpack_require__(185);
;// CONCATENATED MODULE: ./state/redux/store.ts


const store = (0,toolkit_.configureStore)({
    reducer: {
        user_store: userSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Kollab"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};


/***/ }),

/***/ 185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lw": () => (/* binding */ setCurrentTab),
/* harmony export */   "Q_": () => (/* binding */ setUserState),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports userSlice, setLoggedInStatus */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    user: {
        id: -999,
        first_name: "",
        last_name: "",
        email: "",
        isLoggedIn: false,
        currentTab: ""
    }
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserState: (state, action)=>{
            state.user = {
                ...state.user,
                ...action.payload
            };
        },
        setLoggedInStatus: (state, action)=>{
            state.user.isLoggedIn = action.payload;
        },
        setCurrentTab: (state, action)=>{
            state.user.currentTab = action.payload;
        }
    }
});
const { setUserState , setLoggedInStatus , setCurrentTab  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(733));
module.exports = __webpack_exports__;

})();