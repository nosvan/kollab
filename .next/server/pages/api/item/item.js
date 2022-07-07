"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
/* harmony import */ var lib_iron_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6527);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3388);
/* harmony import */ var lib_types_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handle, lib_iron_session__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d));
async function handle(req, res) {
    if (req.method === "GET") {
        console.log(req.query);
        try {
            const reqBody = req.body;
            const result = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].item.findMany */ .Z.item.findMany({
                select: {
                    id: true,
                    name: true,
                    description: true,
                    category: true,
                    category_id: true,
                    item_type: true,
                    due_date: true,
                    date: true
                },
                where: {
                    category: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.Category[req.query.category.toString().toLowerCase()],
                    category_id: parseInt(req.query.category_id.toString())
                },
                orderBy: {
                    item_type: "asc"
                }
            });
            const resultSafe = [];
            result.forEach((row)=>{
                const itemRow = {
                    id: row.id,
                    name: row.name,
                    description: row.description,
                    category: lib_types_item__WEBPACK_IMPORTED_MODULE_3__/* .Category */ .W[row.category.toUpperCase()],
                    category_id: row.category_id,
                    item_type: lib_types_item__WEBPACK_IMPORTED_MODULE_3__/* .ItemType */ .q[row.item_type.toUpperCase()],
                    due_date: row.due_date.toString(),
                    date: row.date.toString()
                };
                resultSafe.push(itemRow);
            });
            res.json(resultSafe);
        } catch (error) {
            res.json(error);
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,133], () => (__webpack_exec__(5101)));
module.exports = __webpack_exports__;

})();