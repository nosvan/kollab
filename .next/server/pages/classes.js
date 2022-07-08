"use strict";
(() => {
var exports = {};
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 3570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Groups),
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
/* harmony import */ var state_redux_userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9185);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var state_redux_classSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3742);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_layout_task_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7043);
/* harmony import */ var utils_dateUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6607);
/* harmony import */ var lib_types_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7607);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_1__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Groups({ user  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!user.isLoggedIn) {
            router.push("/");
            return;
        }
        dispatch((0,state_redux_userSlice__WEBPACK_IMPORTED_MODULE_6__/* .setUserState */ .Q_)({
            ...user,
            currentTab: "classes"
        }));
        async function getUserClasses() {
            await axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: "get",
                url: "/api/classroom/class"
            }).then((res)=>{
                dispatch((0,state_redux_classSlice__WEBPACK_IMPORTED_MODULE_8__/* .setCurrentClassAndClasses */ .fq)(res.data));
            });
        }
        getUserClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const currentClass = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.class_store.class
    );
    const userClasses = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.class_store.classes
    );
    const classItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.class_store.items
    );
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        async function getGroupItems() {
            await axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: "get",
                url: `/api/item/item`,
                params: {
                    category: lib_types_item__WEBPACK_IMPORTED_MODULE_11__/* .Category.CLASSROOM */ .W.CLASSROOM,
                    category_id: currentClass.id
                }
            }).then((res)=>{
                dispatch((0,state_redux_classSlice__WEBPACK_IMPORTED_MODULE_8__/* .setClassItems */ ._C)(res.data));
            });
        }
        if (currentClass.id !== -999) getGroupItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentClass
    ]);
    const { 0: selectedDate , 1: setSelectedDate  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(()=>new Date()
    );
    const { 0: dayLayout1 , 1: setDayLayout  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(7);
    const { 0: days , 1: setDays  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(()=>(0,utils_dateUtils__WEBPACK_IMPORTED_MODULE_12__/* .getDays */ .gw)(dayLayout1, selectedDate)
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row flex-wrap space-y-1 items-center justify-between text-sm mb-1",
                        children: [
                            userClasses && userClasses.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                value: currentClass.id,
                                onChange: handleDropdownSelect,
                                name: "groups",
                                id: "groups-select",
                                className: "rounded-lg text-white text-base bg-stone-800 p-1 ml-1",
                                children: userClasses.map((classroom)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                        value: classroom.id,
                                        children: [
                                            classroom.name,
                                            " (#",
                                            classroom.id,
                                            ")"
                                        ]
                                    }, classroom.id)
                                )
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row space-x-1 bg-stone-800 hover:bg-stone-700 cursor-pointer rounded-lg p-1 mx-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>handleSetDayLayout(1)
                                        ,
                                        className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg`,
                                        children: "Day"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>handleSetDayLayout(7)
                                        ,
                                        className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg`,
                                        children: "Week"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>handleSetDayLayout(30)
                                        ,
                                        className: `hover:bg-stone-700 cursor-pointer px-1 rounded-lg`,
                                        children: "Month"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_task_view__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        dayLayout: dayLayout1,
                        days: days,
                        selectedDate: selectedDate,
                        setSelectedDate: setSelectedDate,
                        category: lib_types_item__WEBPACK_IMPORTED_MODULE_11__/* .Category.CLASSROOM */ .W.CLASSROOM,
                        items: classItems
                    })
                ]
            })
        })
    });
    function handleSetDayLayout(dayLayout) {
        setDayLayout(dayLayout);
        setDays((0,utils_dateUtils__WEBPACK_IMPORTED_MODULE_12__/* .getDays */ .gw)(dayLayout, selectedDate));
    }
    function handleDropdownSelect(event) {
        event.preventDefault();
        const classroomId = event.currentTarget.value;
        const classroom1 = userClasses.find((classroom)=>classroom.id == classroomId
        );
        dispatch((0,state_redux_classSlice__WEBPACK_IMPORTED_MODULE_8__/* .setCurrentClass */ .Z6)(classroom1));
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
var __webpack_exports__ = __webpack_require__.X(0, [531,145,805,43], () => (__webpack_exec__(3570)));
module.exports = __webpack_exports__;

})();