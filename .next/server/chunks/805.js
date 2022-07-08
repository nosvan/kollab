exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 7206:
/***/ ((module) => {

// Exports
module.exports = {
	"modalchildren": "modal_modalchildren__qtdI9"
};


/***/ }),

/***/ 6639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/fc"
var fc_ = __webpack_require__(178);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./lib/types/class.ts
var types_class = __webpack_require__(1901);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./state/redux/classSlice.ts
var classSlice = __webpack_require__(3742);
// EXTERNAL MODULE: ./state/redux/userSlice.ts
var userSlice = __webpack_require__(9185);
;// CONCATENATED MODULE: ./components/classroom/create_class.tsx






function NewClass() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const currentYear1 = new Date().getFullYear();
    const years1 = createYears();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-3xl px-1 py-5",
                children: "Create a new Class"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: handleCreateClassFormSubmit,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col text-sm space-y-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 px-1 rounded-lg",
                            type: "text",
                            required: true,
                            id: "class_name",
                            name: "class_name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "school"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 px-1 rounded-lg",
                            type: "text",
                            required: true,
                            id: "school_name",
                            name: "school_name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "semester"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                            className: "text-white bg-stone-800 px-1 rounded-lg",
                            required: true,
                            id: "semester",
                            name: "semester",
                            defaultValue: "NA",
                            children: Object.keys(types_class/* Semester */.h).map((key, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: key,
                                    children: key
                                }, key)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "year"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                            className: "text-white bg-stone-800 px-1 rounded-lg",
                            required: true,
                            id: "year",
                            name: "year",
                            defaultValue: currentYear1,
                            children: years1.map((year)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: year,
                                    children: year
                                }, year)
                            )
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
                            children: "passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 px-1 rounded-lg",
                            type: "password",
                            required: true,
                            id: "passcode",
                            name: "passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "confirm passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 px-1 rounded-lg",
                            type: "password",
                            required: true,
                            id: "confirm_passcode",
                            name: "confirm_passcode"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row py-5 justify-start text-center text-sm space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-black border-2 border-white hover:bg-gray-900 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer",
                                    onClick: ()=>dispatch((0,userSlice/* setCreateNewTypeMode */.uf)(false))
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
            })
        ]
    });
    function createYears() {
        const currentYear = new Date().getFullYear();
        let lowYear = currentYear - 10;
        const years = [];
        while(lowYear <= currentYear + 10){
            years.push(lowYear++);
        }
        return years;
    }
    async function handleCreateClassFormSubmit(event) {
        event.preventDefault();
        const formData = event.currentTarget;
        const newClass = {
            name: formData.class_name.value,
            school_name: formData.school_name.value,
            description: formData.description.value,
            passcode: formData.passcode.value,
            semester: types_class/* Semester */.h[formData.semester.value]
        };
        try {
            await external_axios_default()({
                method: "post",
                url: "/api/classroom/new",
                data: JSON.stringify(newClass),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>{
                dispatch((0,classSlice/* setCurrentClass */.Z6)(res.data));
            });
            await external_axios_default()({
                method: "get",
                url: "/api/classroom/class"
            }).then((res)=>{
                dispatch((0,classSlice/* setClasses */.qe)(res.data));
            });
            formData.reset();
            dispatch((0,userSlice/* setCreateNewTypeMode */.uf)(false));
        } catch (error) {
            console.log(error);
        }
    }
};

// EXTERNAL MODULE: ./state/redux/groupSlice.ts
var groupSlice = __webpack_require__(710);
;// CONCATENATED MODULE: ./components/group/create_group.tsx





function NewGroup() {
    const user = (0,external_react_redux_.useSelector)((state)=>state.user_store.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-3xl px-1 py-5",
                children: "Create a new Group"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: handleCreateGroupFormSubmit,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col text-sm space-y-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 p-1 rounded-lg",
                            type: "text",
                            required: true,
                            id: "group_name",
                            name: "group_name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 p-1 rounded-lg",
                            type: "password",
                            required: true,
                            id: "passcode",
                            name: "passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "confirm passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 p-1 rounded-lg",
                            type: "password",
                            required: true,
                            id: "confirm_passcode",
                            name: "confirm_passcode"
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row py-5 justify-start text-center text-sm space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-black border-2 border-white hover:bg-gray-800 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer",
                                    onClick: ()=>dispatch((0,userSlice/* setCreateNewTypeMode */.uf)(false))
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
            })
        ]
    });
    async function handleCreateGroupFormSubmit(event) {
        event.preventDefault();
        const formData = event.currentTarget;
        const newGroup = {
            name: formData.group_name.value,
            description: formData.description.value,
            owner_id: user.id,
            passcode: formData.passcode.value
        };
        try {
            await external_axios_default()({
                method: "post",
                url: "/api/group/new",
                data: JSON.stringify(newGroup),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>{
                dispatch((0,groupSlice/* setCurrentGroup */.g6)(res.data));
            });
            await external_axios_default()({
                method: "get",
                url: "/api/group/group"
            }).then((res)=>{
                dispatch((0,groupSlice/* setGroups */.fb)(res.data));
            });
            formData.reset();
            dispatch((0,userSlice/* setCreateNewTypeMode */.uf)(false));
        } catch (error) {
            console.log(error);
        }
    }
};

;// CONCATENATED MODULE: ./lib/types/ui.ts
var TabName;
(function(TabName) {
    TabName["CLASS"] = "classes";
    TabName["GROUP"] = "groups";
    TabName["USER"] = "personal";
    TabName["HOME"] = "";
})(TabName || (TabName = {}));

// EXTERNAL MODULE: ./components/layout/modal.tsx
var modal = __webpack_require__(1890);
// EXTERNAL MODULE: external "@react-spring/web"
var web_ = __webpack_require__(8157);
;// CONCATENATED MODULE: ./components/layout/login.tsx





function Login(props) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const modalSpring = (0,web_.useSpring)({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 250
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(web_.animated.div, {
        style: modalSpring,
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-white text-center text-2xl mb-5",
                children: [
                    "Log in to ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-blue-700",
                        children: "kollab"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: handleLogin,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "text-white",
                                children: "email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "text-black rounded-xl px-2",
                                type: "text",
                                required: true,
                                id: "email",
                                name: "email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "text-white",
                                children: "password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "text-black rounded-xl px-2",
                                type: "password",
                                required: true,
                                id: "password",
                                name: "password"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row py-5 text-center space-x-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>props.setSelection("")
                                        ,
                                        className: "basis-2/5 bg-black border-2 border-white hover:bg-gray-800 text-white rounded-xl px-1 cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "back"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: "basis-3/5 bg-blue-700 hover:bg-blue-600 w-full rounded-xl text-white",
                                        children: "Log in"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
    async function handleLogin(event) {
        event.preventDefault();
        const userCreds = {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value
        };
        try {
            await external_axios_default()({
                method: "post",
                url: "/api/login",
                data: JSON.stringify(userCreds),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>{
                dispatch((0,userSlice/* setUserState */.Q_)(res.data));
            });
        } catch (error) {
            console.log(error);
        }
    }
};

;// CONCATENATED MODULE: ./components/layout/register.tsx





function Register(props) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const modalSpring = (0,web_.useSpring)({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 250
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(web_.animated.div, {
        style: modalSpring,
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-white text-center text-2xl mb-5",
                children: [
                    "Create a ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-blue-700",
                        children: "kollab"
                    }),
                    " account"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: handleRegisterFormSubmit,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "text-white",
                                                children: "first name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "text-black rounded-xl px-2",
                                                type: "text",
                                                required: true,
                                                id: "first_name",
                                                name: "first_name"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "text-white",
                                                children: "last name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "text-black rounded-xl px-2",
                                                type: "text",
                                                required: true,
                                                id: "last_name",
                                                name: "last_name"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "text-white",
                                children: "email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "text-black rounded-xl px-2",
                                type: "text",
                                required: true,
                                id: "email",
                                name: "email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "text-white",
                                children: "password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "text-black rounded-xl px-2",
                                type: "password",
                                required: true,
                                id: "password",
                                name: "password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "text-white",
                                children: "confirm password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "text-black rounded-xl px-2",
                                type: "password",
                                required: true,
                                id: "confirm_password",
                                name: "confirm_password"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row py-5 text-center space-x-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>props.setSelection("")
                                        ,
                                        className: "basis-2/5 bg-black border-2 border-white hover:bg-gray-800 text-white rounded-xl px-1 cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "back"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: "basis-3/5 bg-blue-700 hover:bg-blue-600 w-full rounded-xl text-white",
                                        children: "Create Account"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
    async function handleRegisterFormSubmit(event) {
        event.preventDefault();
        const userRegister = {
            first_name: event.currentTarget.first_name.value,
            last_name: event.currentTarget.last_name.value,
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value
        };
        try {
            await external_axios_default()({
                method: "post",
                url: "/api/register",
                data: JSON.stringify(userRegister),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>{
                if (res.data.message === "Email already exists") {
                    return;
                }
                dispatch((0,userSlice/* setUserState */.Q_)(res.data));
            });
        } catch (error) {
            console.log(error);
        }
    }
};

// EXTERNAL MODULE: external "react-icons/tb"
var tb_ = __webpack_require__(4152);
;// CONCATENATED MODULE: ./components/layout/sidebar.tsx








function SideBar() {
    const user = (0,external_react_redux_.useSelector)((state)=>state.user_store.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        console.log("in side bar");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col py-5 space-y-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-center font-semibold text-blue-700 text-2xl cursor-pointer p-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaStackExchange, {
                        size: 32
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block",
                        children: "kollab"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>{
                    handleActiveTab(TabName.HOME);
                },
                className: `${user.currentTab == TabName.HOME ? "text-white font-light" : "text-gray-400 font-extralight"} flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbHome2, {
                        size: 32,
                        strokeWidth: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block",
                        children: "home"
                    })
                ]
            }),
             true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>{
                    handleActiveTab(TabName.USER);
                },
                className: `${user.currentTab == TabName.USER ? "text-white font-light" : "text-gray-400 font-extralight"} flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbUser, {
                        size: 32,
                        strokeWidth: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block",
                        children: "self"
                    })
                ]
            }),
             false && /*#__PURE__*/ 0,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>{
                    handleActiveTab(TabName.GROUP);
                },
                className: `${user.currentTab == TabName.GROUP ? "text-white font-light" : "text-gray-400 font-extralight"} flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbUsers, {
                        size: 32,
                        strokeWidth: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block",
                        children: TabName.GROUP
                    })
                ]
            })
        ]
    });
    function handleActiveTab(tab) {
        if (user.currentTab.toLowerCase() != tab.toLowerCase()) {
            dispatch((0,userSlice/* setCurrentTab */.Lw)(tab));
            router.push("/" + tab.toLowerCase());
        }
    }
};

;// CONCATENATED MODULE: ./components/layout/header.tsx







function Header() {
    const user = (0,external_react_redux_.useSelector)((state)=>state.user_store.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center flex-wrap justify-between p-5 mt-5 bg-black rounded-3xl text-white text-2xl font-bold",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-center space-x-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: user.currentTab == TabName.HOME ? "home" : user.currentTab
                    }),
                    (user.currentTab == TabName.CLASS || user.currentTab == TabName.GROUP) && /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbPlus, {
                        onClick: ()=>dispatch((0,userSlice/* setCreateNewTypeMode */.uf)(true))
                        ,
                        className: "hover:bg-stone-800 rounded-xl cursor-pointer"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row items-center space-x-2 font-medium text-sm",
                children: [
                    !user.isLoggedIn && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>router.push("/login")
                        ,
                        className: "flex flex-row items-center bg-stone-800 p-1 space-x-1 rounded cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbLogin, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "Login"
                            })
                        ]
                    }),
                    !user.isLoggedIn && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>router.push("/register")
                        ,
                        className: "flex flex-row items-center bg-stone-800 p-1 space-x-1 rounded cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbUserPlus, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "Register"
                            })
                        ]
                    }),
                    user.isLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>handleLogout()
                            ,
                            className: "flex flex-row items-center hover:bg-stone-800 space-x-1 p-1 rounded-3xl cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbLogout, {})
                        })
                    })
                ]
            })
        ]
    });
    async function handleLogout() {
        try {
            await external_axios_default()({
                method: "get",
                url: "/api/logout"
            }).then((res)=>{
                dispatch((0,userSlice/* setUserState */.Q_)(res.data));
            });
        } catch (error) {
            console.log(error);
        }
    }
};

;// CONCATENATED MODULE: ./components/layout/footer.tsx







function Footer() {
    const user = (0,external_react_redux_.useSelector)((state)=>state.user_store.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row justify-between fixed bottom-0 px-20 w-full sm:hidden text-white bg-black py-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaStackExchange, {
                onClick: ()=>{
                    handleActiveTab(TabName.HOME);
                },
                className: "text-blue-700",
                size: 32
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbHome2, {
                onClick: ()=>{
                    handleActiveTab(TabName.HOME);
                },
                size: 32,
                strokeWidth: 1,
                className: user.currentTab == TabName.HOME ? "text-white font-light" : "text-gray-400 font-extralight"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbUser, {
                onClick: ()=>{
                    handleActiveTab(TabName.USER);
                },
                size: 32,
                strokeWidth: 1,
                className: user.currentTab == TabName.USER ? "text-white font-light" : "text-gray-400 font-extralight"
            }),
             false && /*#__PURE__*/ 0,
            /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbUsers, {
                onClick: ()=>{
                    handleActiveTab(TabName.GROUP);
                },
                size: 32,
                strokeWidth: 1,
                className: user.currentTab == TabName.GROUP ? "text-white font-light" : "text-gray-400 font-extralight"
            })
        ]
    });
    function handleActiveTab(tab) {
        if (user.currentTab.toLowerCase() != tab.toLowerCase()) {
            dispatch((0,userSlice/* setCurrentTab */.Lw)(tab));
            router.push("/" + tab.toLowerCase());
        }
    }
};

;// CONCATENATED MODULE: ./components/layout/layout.tsx

















function Layout({ children  }) {
    const userState = (0,external_react_redux_.useSelector)((state)=>state.user_store
    );
    const router = (0,router_.useRouter)();
    const { 0: selection , 1: setSelection  } = (0,external_react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            !userState.user.isLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center items-center h-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-5 pb-2 basis-3/5 md:basis-2/5 lg:basis-1/5 bg-black shadow-xl shadow-black rounded-3xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col items-center mt-10 space-y-3 text-blue-700",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaStackExchange, {
                                    size: 100
                                })
                            }),
                            selection === "" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-blue-700 text-3xl text-center mb-5",
                                        children: "kollab"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row items-center justify-center cursor-pointer space-x-1 py-1 my-2 text-sm text-black bg-white hover:bg-gray-200 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(fc_.FcGoogle, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: "Sign up with Google"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row items-center justify-center cursor-pointer space-x-1 py-1 my-2 text-sm text-black bg-white hover:bg-gray-200 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsGithub, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: "Sign up with Github"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-center py-1 my-2 text-sm cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl",
                                        onClick: ()=>setSelection("register")
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-white",
                                            children: "Sign up with Email"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "py-1 my-2 text-sm text-white mt-5",
                                        children: "Already have an account?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex justify-center py-1 text-sm cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl",
                                        onClick: ()=>setSelection("login")
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-white",
                                            children: "Log in"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-center text-white text-sm",
                                        children: [
                                            "forgot password?",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "underline cursor-pointer",
                                                onClick: ()=>router.push("/reset")
                                                ,
                                                children: "reset"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            selection === "login" && /*#__PURE__*/ jsx_runtime_.jsx(Login, {
                                setSelection: setSelection
                            }),
                            selection === "register" && /*#__PURE__*/ jsx_runtime_.jsx(Register, {
                                setSelection: setSelection
                            })
                        ]
                    })
                })
            }),
            userState.user.isLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex container mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden sm:block sm:w-1/12 md:w-2/12 md:px-5 lg:px-10 pt-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SideBar, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full sm:w-11/12 md:w-10/12 pt-5 space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                    children: children
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                        userState.user.currentTab == TabName.CLASS && userState.createNewTypeMode && /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                            modalId: "create_class_modal",
                            modalOpen: userSlice/* setCreateNewTypeMode */.uf,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewClass, {})
                        }),
                        userState.user.currentTab == TabName.GROUP && userState.createNewTypeMode && /*#__PURE__*/ jsx_runtime_.jsx(modal/* default */.Z, {
                            modalId: "create_group_modal",
                            modalOpen: userSlice/* setCreateNewTypeMode */.uf,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewGroup, {})
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 1890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8157);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7206);
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_4__);





function ModalPopup(props) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const modalSpring = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 250
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, {
        style: modalSpring,
        id: props.modalId,
        className: `fixed bg-black inset-0 bg-opacity-20 backdrop-blur-lg`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "innerContainer",
            className: "flex justify-center items-center h-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex flex-col sm:basis-3/6 md:basis-2/6 space-y-2 bg-black text-white p-5 rounded-2xl ${(_modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalchildren)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>dispatch(props.modalOpen(false))
                        ,
                        className: "flex justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbX, {
                            className: "hover:bg-stone-700 rounded-2xl cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: props.children
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalPopup);


/***/ }),

/***/ 5227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

};
;