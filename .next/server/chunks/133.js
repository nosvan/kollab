"use strict";
exports.id = 133;
exports.ids = [133];
exports.modules = {

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

/***/ 8906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Category),
/* harmony export */   "q": () => (/* binding */ ItemType)
/* harmony export */ });
var Category;
(function(Category) {
    Category["CLASSROOM"] = "CLASSROOM";
    Category["GROUP"] = "GROUP";
    Category["PERSONAL"] = "PERSONAL";
})(Category || (Category = {}));
var ItemType;
(function(ItemType) {
    ItemType["ASSIGNMENT"] = "ASSIGNMENT";
    ItemType["NOTE"] = "NOTE";
    ItemType["PROJECT"] = "PROJECT";
    ItemType["REMINDER"] = "REMINDER";
})(ItemType || (ItemType = {}));


/***/ })

};
;