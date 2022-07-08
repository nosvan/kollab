"use strict";
(() => {
var exports = {};
exports.id = 659;
exports.ids = [659];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 3124:
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
    if (req.method === "POST") {
        try {
            const reqBody = req.body;
            console.log(reqBody);
            const result = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"].item.create */ .Z.item.create({
                data: {
                    name: reqBody.name,
                    description: reqBody.description,
                    category: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.Category[reqBody.category.toLowerCase()],
                    category_id: reqBody.category_id,
                    item_type: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.ItemType[reqBody.item_type.toLowerCase()],
                    due_date: new Date(reqBody.due_date),
                    created_by_id: req.session.userSession.id,
                    last_modified_by_id: req.session.userSession.id,
                    date: new Date(reqBody.date)
                }
            });
            const resultSafe = [
                {
                    id: result.id,
                    name: result.name,
                    description: result.description,
                    category: lib_types_item__WEBPACK_IMPORTED_MODULE_3__/* .Category */ .W[result.category.toUpperCase()],
                    category_id: result.category_id,
                    item_type: lib_types_item__WEBPACK_IMPORTED_MODULE_3__/* .ItemType */ .q[result.item_type.toUpperCase()],
                    due_date: result.due_date.toString(),
                    date: result.date.toString()
                }
            ];
            res.json(resultSafe);
        } catch (error) {
            console.log("error");
            res.json(error);
        }
    }
} // id: number
 // name: string
 // description: string
 // category: Category
 // category_id: number
 // item_type: ItemType
 // due_date: string
 // created_by_id: number
 // last_modified_by_id: number
 // date: string
 // created_at: string
 // {
 //   name: 'TEST GROUP ASSIGNMENT #2',
 //   description: '#2 description',
 //   category: 'GROUP',
 //   category_id: 1,
 //   item_type: 'ASSIGNMENT',
 //   due_date: 'Wed Jul 20 2022 00:00:00 GMT-0400 (Eastern Daylight Time)',
 //   date: 'Sat Jul 02 2022 17:42:23 GMT-0400 (Eastern Daylight Time)'
 // }
 // {
 //   name: 'TEST CLASS ASSIGNMENT #1',
 //   description: 'TEST CLASS ASSIGNMENT #1 description',
 //   category: 'CLASSROOM',
 //   category_id: 1,
 //   item_type: 'ASSIGNMENT',
 //   due_date: 'Wed Jul 20 2022 00:00:00 GMT-0400 (Eastern Daylight Time)',
 //   date: 'Sat Jul 02 2022 17:38:49 GMT-0400 (Eastern Daylight Time)'
 // }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,133], () => (__webpack_exec__(3124)));
module.exports = __webpack_exports__;

})();