"use strict";
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 1901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Semester)
/* harmony export */ });
var Semester;
(function(Semester) {
    Semester["FALL"] = "fall";
    Semester["SPRING"] = "spring";
    Semester["SUMMER"] = "summer";
    Semester["WINTER"] = "winter";
    Semester["NA"] = "na";
})(Semester || (Semester = {}));


/***/ }),

/***/ 3742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S1": () => (/* binding */ setAdditionalClassItems),
/* harmony export */   "Z6": () => (/* binding */ setCurrentClass),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_C": () => (/* binding */ setClassItems),
/* harmony export */   "fq": () => (/* binding */ setCurrentClassAndClasses),
/* harmony export */   "qe": () => (/* binding */ setClasses)
/* harmony export */ });
/* unused harmony export classSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_types_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);


const initialState = {
    class: {
        id: -999,
        name: "",
        school_name: "",
        semester: lib_types_class__WEBPACK_IMPORTED_MODULE_1__/* .Semester.NA */ .h.NA,
        description: "",
        owner_id: -999,
        created_at: ""
    },
    classes: [],
    items: []
};
const classSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "class",
    initialState: initialState,
    reducers: {
        setCurrentClass: (state, action)=>{
            state.class = action.payload;
        },
        setClasses: (state, action)=>{
            state.classes = action.payload;
        },
        setCurrentClassAndClasses: (state, action)=>{
            state.classes = action.payload;
            // if current group is empty, set to first group in classes
            if (state.class.id === -999) {
                state.class = state.classes[0];
            }
            // check if current class is in classes, if not set to first class
            if (!state.classes.find((cla)=>cla.id === state.class.id
            )) {
                state.class = state.classes[0];
            }
        },
        setClassItems: (state, action)=>{
            state.items = action.payload;
        },
        setAdditionalClassItems: (state, action)=>{
            state.items = [
                ...state.items,
                ...action.payload
            ];
        }
    }
});
const { setCurrentClass , setClasses , setCurrentClassAndClasses , setClassItems , setAdditionalClassItems  } = classSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classSlice.reducer);


/***/ }),

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$6": () => (/* binding */ setAdditionalGroupItems),
/* harmony export */   "G": () => (/* binding */ setGroupItems),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fb": () => (/* binding */ setGroups),
/* harmony export */   "g6": () => (/* binding */ setCurrentGroup),
/* harmony export */   "pt": () => (/* binding */ setCurrentGroupAndGroups)
/* harmony export */ });
/* unused harmony export groupSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    group: {
        id: -999,
        name: "",
        description: "",
        owner_id: -999,
        created_at: ""
    },
    groups: [],
    items: []
};
const groupSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "group",
    initialState: initialState,
    reducers: {
        setCurrentGroup: (state, action)=>{
            state.group = action.payload;
        },
        setGroups: (state, action)=>{
            state.groups = action.payload;
        },
        setCurrentGroupAndGroups: (state, action)=>{
            if (action.payload.length > 0) {
                state.groups = action.payload;
                // if current group is empty, set to first group in groups
                if (state.group.id === -999) {
                    state.group = state.groups[0];
                }
                // check if current group is in groups, if not set to first group
                if (!state.groups?.find((group)=>group.id === state.group.id
                )) {
                    state.group = state.groups[0];
                }
            } else {
                state.group = initialState.group;
            }
        },
        setGroupItems: (state, action)=>{
            state.items = action.payload;
        },
        setAdditionalGroupItems: (state, action)=>{
            state.items = [
                ...state.items,
                ...action.payload
            ];
        }
    }
});
const { setCurrentGroup , setGroups , setCurrentGroupAndGroups , setGroupItems , setAdditionalGroupItems  } = groupSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (groupSlice.reducer);


/***/ }),

/***/ 9185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LR": () => (/* binding */ setAdditionalUserItems),
/* harmony export */   "Lw": () => (/* binding */ setCurrentTab),
/* harmony export */   "Q_": () => (/* binding */ setUserState),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "de": () => (/* binding */ setCreateNewItemMode),
/* harmony export */   "uf": () => (/* binding */ setCreateNewTypeMode)
/* harmony export */ });
/* unused harmony exports userSlice, setLoggedInStatus, setUserItems */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    user: {
        id: -999,
        first_name: "",
        last_name: "",
        email: "",
        isLoggedIn: false,
        currentTab: ""
    },
    items: [],
    createNewTypeMode: false,
    createNewItemMode: false
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
        },
        setUserItems: (state, action)=>{
            state.items = action.payload;
        },
        setAdditionalUserItems: (state, action)=>{
            state.items = [
                ...state.items,
                ...action.payload
            ];
        },
        setCreateNewTypeMode: (state, action)=>{
            state.createNewTypeMode = action.payload;
        },
        setCreateNewItemMode: (state, action)=>{
            state.createNewItemMode = action.payload;
        }
    }
});
const { setUserState , setLoggedInStatus , setCurrentTab , setUserItems , setAdditionalUserItems , setCreateNewTypeMode , setCreateNewItemMode  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ })

};
;