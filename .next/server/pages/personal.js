"use strict";
(() => {
var exports = {};
exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Item(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Item"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: props.item?.name
            })
        ]
    });
};


/***/ }),

/***/ 6906:
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
/* harmony import */ var components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6639);
/* harmony import */ var lib_iron_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5227);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_layout_task_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7043);
/* harmony import */ var components_layout_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1890);
/* harmony import */ var utils_dateUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6607);
/* harmony import */ var lib_types_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7607);
/* harmony import */ var state_redux_personalSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3627);
/* harmony import */ var components_item_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(667);
/* harmony import */ var state_redux_userSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9185);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_1__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















function User({ user  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!user.isLoggedIn) {
            router.push("/");
            return;
        }
        dispatch((0,state_redux_userSlice__WEBPACK_IMPORTED_MODULE_13__/* .setUserState */ .Q_)({
            ...user,
            currentTab: "personal"
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const personalState = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.personal_store
    );
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        async function getPersonalItems() {
            await axios__WEBPACK_IMPORTED_MODULE_14___default()({
                method: "get",
                url: `/api/item/personal/item`,
                params: {
                    category: lib_types_item__WEBPACK_IMPORTED_MODULE_10__/* .Category.PERSONAL */ .W.PERSONAL
                }
            }).then((res)=>{
                dispatch((0,state_redux_personalSlice__WEBPACK_IMPORTED_MODULE_11__/* .setPersonalItems */ .pi)(res.data));
            });
        }
        getPersonalItems();
    }, []);
    const { 0: selectedDate , 1: setSelectedDate  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(new Date());
    const { 0: dayLayout , 1: setDayLayout  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(7);
    const { 0: days , 1: setDays  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(()=>(0,utils_dateUtils__WEBPACK_IMPORTED_MODULE_15__/* .getDays */ .gw)(dayLayout, selectedDate)
    );
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setDays((0,utils_dateUtils__WEBPACK_IMPORTED_MODULE_15__/* .getDays */ .gw)(dayLayout, selectedDate));
    }, [
        dayLayout,
        selectedDate
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-black rounded-3xl p-5 text-white mt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-row flex-wrap items-center justify-between text-sm mb-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row items-center space-x-2 bg-stone-800 rounded-lg mx-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleDecrementDate()
                                    ,
                                    className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__.TbArrowBigLeft, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleSetDayLayout(1)
                                    ,
                                    className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${dayLayout === 1 ? "bg-stone-700" : ""}`,
                                    children: "Day"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleSetDayLayout(7)
                                    ,
                                    className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${dayLayout === 7 ? "bg-stone-700" : ""}`,
                                    children: "Week"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleSetDayLayout(30)
                                    ,
                                    className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg ${dayLayout === 30 ? "bg-stone-700" : ""}`,
                                    children: "Month"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleIncrementDate()
                                    ,
                                    className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__.TbArrowBigRight, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_task_view__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        dayLayout: dayLayout,
                        days: days,
                        selectedDate: selectedDate,
                        setSelectedDate: setSelectedDate,
                        category: lib_types_item__WEBPACK_IMPORTED_MODULE_10__/* .Category.PERSONAL */ .W.PERSONAL,
                        items: personalState.items
                    }),
                    personalState.viewPersonalItemMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        modalId: "view_personal_item_modal",
                        modalOpen: state_redux_personalSlice__WEBPACK_IMPORTED_MODULE_11__/* .setViewPersonalItemMode */ .nn,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_item_item__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            item: personalState.item
                        })
                    })
                ]
            })
        })
    });
    function handleIncrementDate() {
        setSelectedDate((0,utils_dateUtils__WEBPACK_IMPORTED_MODULE_15__/* .incrementDate */ .xA)(selectedDate, dayLayout));
    }
    function handleDecrementDate() {
        setSelectedDate((0,utils_dateUtils__WEBPACK_IMPORTED_MODULE_15__/* .decrementDate */ .wM)(selectedDate, dayLayout));
    }
    function handleSetDayLayout(newDayLayout) {
        setDayLayout(newDayLayout);
    }
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

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

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
var __webpack_exports__ = __webpack_require__.X(0, [531,145,805,43], () => (__webpack_exec__(6906)));
module.exports = __webpack_exports__;

})();