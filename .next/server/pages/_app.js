"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7733:
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
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./state/redux/userSlice.ts
var userSlice = __webpack_require__(9185);
// EXTERNAL MODULE: ./state/redux/groupSlice.ts
var groupSlice = __webpack_require__(710);
// EXTERNAL MODULE: ./state/redux/classSlice.ts
var classSlice = __webpack_require__(3742);
// EXTERNAL MODULE: ./state/redux/personalSlice.ts
var personalSlice = __webpack_require__(3627);
;// CONCATENATED MODULE: ./state/redux/store.ts





const store = (0,toolkit_.configureStore)({
    reducer: {
        user_store: userSlice/* default */.ZP,
        group_store: groupSlice/* default */.ZP,
        class_store: classSlice/* default */.ZP,
        personal_store: personalSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    console.log("in apps.tsx");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "kollab"
                })
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

/***/ 3627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dw": () => (/* binding */ setAdditionalPersonalItems),
/* harmony export */   "K$": () => (/* binding */ setCurrentPersonalItem),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nn": () => (/* binding */ setViewPersonalItemMode),
/* harmony export */   "pi": () => (/* binding */ setPersonalItems)
/* harmony export */ });
/* unused harmony export personalSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    item: null,
    items: [],
    viewPersonalItemMode: false
};
const personalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "class",
    initialState: initialState,
    reducers: {
        setCurrentPersonalItem: (state, action)=>{
            state.item = action.payload;
        },
        setPersonalItems: (state, action)=>{
            state.items = action.payload;
        },
        setAdditionalPersonalItems: (state, action)=>{
            state.items = [
                ...state.items,
                ...action.payload
            ];
        },
        setViewPersonalItemMode: (state, action)=>{
            state.viewPersonalItemMode = action.payload;
        }
    }
});
const { setCurrentPersonalItem , setPersonalItems , setAdditionalPersonalItems , setViewPersonalItemMode  } = personalSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (personalSlice.reducer);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6022:
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
var __webpack_exports__ = __webpack_require__.X(0, [145], () => (__webpack_exec__(7733)));
module.exports = __webpack_exports__;

})();