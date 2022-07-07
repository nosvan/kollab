exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 1654:
/***/ ((module) => {

// Exports
module.exports = {
	"day-container": "task_view_day-container__zw5hJ"
};


/***/ }),

/***/ 2973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TaskView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/dateUtils.ts
var dateUtils = __webpack_require__(6607);
// EXTERNAL MODULE: ./components/task_view.module.css
var task_view_module = __webpack_require__(1654);
var task_view_module_default = /*#__PURE__*/__webpack_require__.n(task_view_module);
// EXTERNAL MODULE: external "react-icons/tb"
var tb_ = __webpack_require__(4152);
// EXTERNAL MODULE: ./components/modal.tsx
var modal = __webpack_require__(7702);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./lib/types/item.ts
var item = __webpack_require__(7607);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-day-picker"
var external_react_day_picker_ = __webpack_require__(8261);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./state/redux/classSlice.ts
var classSlice = __webpack_require__(3742);
// EXTERNAL MODULE: ./state/redux/groupSlice.ts
var groupSlice = __webpack_require__(710);
// EXTERNAL MODULE: ./state/redux/userSlice.ts
var userSlice = __webpack_require__(9185);
;// CONCATENATED MODULE: ./components/create_item.tsx










function NewItem(props) {
    const groupState = (0,external_react_redux_.useSelector)((state)=>state.group_store.group
    );
    const classState = (0,external_react_redux_.useSelector)((state)=>state.class_store.class
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: selectedDueDate , 1: setSelectedDueDate  } = (0,external_react_.useState)();
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: handleCreateItemFormSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col text-sm space-y-1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                    className: "text-white bg-stone-800 p-1 rounded-lg",
                    required: true,
                    name: "item_type",
                    children: Object.keys(item/* ItemType */.q).map((key)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: key,
                            children: key
                        }, key)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    className: "text-white px-1",
                    children: "name"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "text-white bg-stone-800 p-1 rounded-lg",
                    type: "text",
                    required: true,
                    id: "item_name",
                    name: "item_name"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    className: "text-white px-1",
                    children: "description"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    className: "text-white bg-stone-800 px-1 rounded-lg",
                    required: true,
                    id: "description",
                    name: "description"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    className: "text-white px-1",
                    children: "Due Date"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_day_picker_.DayPicker, {
                        mode: "single",
                        selected: selectedDueDate,
                        onSelect: setSelectedDueDate
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row py-5 justify-start text-center text-sm space-x-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-black border-2 border-white hover:bg-gray-800 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer",
                            onClick: ()=>dispatch((0,userSlice/* setCreateNewItemMode */.de)(false))
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Cancel"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: "bg-blue-700 hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600 px-3 rounded-lg text-white",
                            children: "Create"
                        })
                    ]
                })
            ]
        })
    });
    function getCategoryId() {
        if (props.itemCategory === item/* Category.CLASSROOM */.W.CLASSROOM) {
            return classState.id;
        } else {
            return groupState.id;
        }
    }
    async function handleCreateItemFormSubmit(event) {
        event.preventDefault();
        const formData = event.currentTarget;
        const newItem = {
            name: formData.item_name.value,
            description: formData.description.value,
            category: props.itemCategory,
            category_id: getCategoryId(),
            item_type: formData.item_type.value,
            due_date: selectedDueDate ? selectedDueDate.toString() : new Date().toString(),
            date: props.selectedDate.toString()
        };
        try {
            await external_axios_default()({
                method: "post",
                url: "/api/item/new",
                data: JSON.stringify(newItem),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>{
                if (res.data[0].category === item/* Category.CLASSROOM */.W.CLASSROOM) {
                    dispatch((0,classSlice/* setAdditionalClassItems */.S1)(res.data));
                }
                if (res.data[0].category === item/* Category.GROUP */.W.GROUP) {
                    dispatch((0,groupSlice/* setAdditionalGroupItems */.$6)(res.data));
                }
                if (res.data[0].category === item/* Category.PERSONAL */.W.PERSONAL) {
                    dispatch((0,userSlice/* setAdditionalUserItems */.LR)(res.data));
                }
            });
            formData.reset();
            dispatch((0,userSlice/* setCreateNewItemMode */.de)(false));
        } catch (error) {
            console.log(error);
        }
    }
};

;// CONCATENATED MODULE: ./components/task_view.tsx









function TaskView(props) {
    const newItemMode = (0,external_react_redux_.useSelector)((state)=>state.user_store.createNewItemMode
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const currentDateString = new Date().toDateString();
    const DayView = (day, items)=>{
        return items.filter((itemA)=>{
            if (itemA.category == item/* Category */.W[props.category] && (0,dateUtils/* dateStringToNormalizedDateString */.iE)(itemA.date) == day.toDateString()) {
                return true;
            } else {
                return false;
            }
        }).map((itemB)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `text-xs rounded-md
            text-center text-black mx-1 cursor-pointer ${itemTypeStyling(itemB.item_type)}`,
                children: itemB.name
            }, itemB.id);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row flex-wrap break-words",
                children: props.days.map((day, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `pb-1 space-y-1 px-1 ${(task_view_module_default())["day-container"]}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `flex flex-row space-x-1 justify-center items-center bg-stone-800 text-center text-sm rounded-lg`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            (0,dateUtils/* dateToDayName */.fY)(day),
                                            " ",
                                            (0,dateUtils/* dateToMonthName */.gi)(day),
                                            " ",
                                            day.getDate()
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbPlus, {
                                            onClick: ()=>{
                                                props.setSelectedDate(day);
                                                dispatch((0,userSlice/* setCreateNewItemMode */.de)(true));
                                            },
                                            className: "hover:bg-stone-700 cursor-pointer rounded-xl"
                                        })
                                    })
                                ]
                            }),
                            DayView(day, props.items)
                        ]
                    }, index);
                })
            }),
            newItemMode && /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                modalId: "create_item_modal",
                modalOpen: userSlice/* setCreateNewItemMode */.de,
                children: /*#__PURE__*/ jsx_runtime_.jsx(NewItem, {
                    selectedDate: props.selectedDate,
                    itemCategory: props.category
                })
            })
        ]
    });
    function itemTypeStyling(itemType) {
        switch(itemType){
            case "ASSIGNMENT":
                return "bg-emerald-400 hover:bg-emerald-300";
            case "NOTE":
                return "bg-yellow-400 hover:bg-yellow-300";
            case "PROJECT":
                return "bg-fuchsia-400 hover:bg-fuchsia-300";
            case "REMINDER":
                return "bg-cyan-400 hover:bg-cyan-300";
            default:
                return "bg-white";
        }
    }
};


/***/ }),

/***/ 7607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 6607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fY": () => (/* binding */ dateToDayName),
/* harmony export */   "gi": () => (/* binding */ dateToMonthName),
/* harmony export */   "gw": () => (/* binding */ getDays),
/* harmony export */   "iE": () => (/* binding */ dateStringToNormalizedDateString),
/* harmony export */   "wM": () => (/* binding */ decrementDate),
/* harmony export */   "xA": () => (/* binding */ incrementDate)
/* harmony export */ });
function dateToMonthName(date) {
    return date.toLocaleString("default", {
        month: "short"
    });
}
function dateToDayName(date) {
    return date.toLocaleString("default", {
        weekday: "short"
    });
}
function getDays(days, selectedDate) {
    const daysArray = [];
    if (days == 1) {
        daysArray.push(selectedDate);
        return daysArray;
    }
    const dayOfWeek = selectedDate.getDay();
    const dayOfMonth = selectedDate.getDate();
    // weekly
    if (days == 7) {
        daysArray[dayOfWeek] = selectedDate;
        for(let i = 0; i < days; i++){
            if (i !== dayOfWeek) {
                daysArray[i] = new Date(selectedDate.getTime() + (i - dayOfWeek) * 24 * 60 * 60 * 1000);
            }
        }
        return daysArray;
    // monthly
    } else {
        const currentMonth = selectedDate.getMonth();
        const daysInMonth = new Date(selectedDate.getFullYear(), currentMonth + 1, 0).getDate();
        daysArray[dayOfMonth] = selectedDate;
        for(let i = 1; i <= daysInMonth; i++){
            if (i !== dayOfMonth) {
                daysArray[i] = new Date(selectedDate.getTime() + (i - dayOfMonth) * 24 * 60 * 60 * 1000);
            }
        }
        return daysArray;
    }
}
function incrementDate(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}
function decrementDate(date, days) {
    return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
}
function dateStringToNormalizedDateString(date) {
    return new Date(date).toDateString();
}


/***/ })

};
;