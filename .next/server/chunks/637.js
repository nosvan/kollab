"use strict";
exports.id = 637;
exports.ids = [637];
exports.modules = {

/***/ 314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: external "react-icons/tb"
var tb_ = __webpack_require__(152);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/fc"
var fc_ = __webpack_require__(178);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./state/redux/userSlice.ts
var userSlice = __webpack_require__(185);
;// CONCATENATED MODULE: ./components/create_class.tsx

function NewClass({ setCreateNewTypeMode , user  }) {
    const { id  } = user;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-base px-1",
                children: "Create a new Class"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: handleCreateClassFormSubmit,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col text-sm",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            type: "text",
                            required: true,
                            id: "name",
                            name: "name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "school"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            type: "text",
                            required: true,
                            id: "school",
                            name: "school"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "semester"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            type: "text",
                            required: true,
                            id: "semester",
                            name: "semester"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "year"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            type: "text",
                            required: true,
                            id: "year",
                            name: "year"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            type: "password",
                            required: true,
                            id: "password",
                            name: "password"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "confirm passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            type: "password",
                            required: true,
                            id: "confirm_password",
                            name: "confirm_password"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row py-5 justify-start text-center text-sm space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-black border-2 border-white hover:bg-gray-800 text-white rounded-lg px-2 cursor-pointer",
                                    onClick: ()=>setCreateNewTypeMode(false)
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
    function handleCreateClassFormSubmit(event) {
        event.preventDefault();
        const formData = event.currentTarget;
    }
};

;// CONCATENATED MODULE: ./components/create_group.tsx


function NewGroup({ setCreateNewTypeMode , user  }) {
    const { id  } = user;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-base px-1",
                children: "Create a new Group"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: handleCreateGroupFormSubmit,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col text-sm",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "name"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
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
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
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
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            type: "password",
                            required: true,
                            id: "confirm_passcode",
                            name: "confirm_passcode"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-white px-1",
                            children: "brief description"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            className: "text-white bg-stone-800 w-2/3 md:w-1/3 px-2 rounded-lg",
                            required: true,
                            id: "description",
                            name: "description"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row py-5 justify-start text-center text-sm space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-black border-2 border-white hover:bg-gray-800 text-white rounded-lg px-2 cursor-pointer",
                                    onClick: ()=>setCreateNewTypeMode(false)
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
            owner_id: id,
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
                console.log(res);
            });
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
    TabName["USER"] = "user";
    TabName["HOME"] = "";
})(TabName || (TabName = {}));

;// CONCATENATED MODULE: ./components/layout.tsx













function Layout({ children  }) {
    const user = (0,external_react_redux_.useSelector)((state)=>state.user_store.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: selection1 , 1: setSelection  } = (0,external_react_.useState)("");
    const { 0: createNewTypeMode , 1: setCreateNewTypeMode  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            !user.isLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                            selection1 === "" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
                                        onClick: ()=>handleSignupModalSelection("register")
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
                                        onClick: ()=>handleSignupModalSelection("login")
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
                                            " ",
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
                            selection1 === "login" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                                                onClick: ()=>handleBackClick()
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
                            }),
                            selection1 === "register" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                                                onClick: ()=>handleSignupModalSelection("")
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
                            })
                        ]
                    })
                })
            }),
            user.isLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex container mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden sm:block sm:w-1/12 md:w-2/12 md:px-5 lg:px-10 pt-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col py-5 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row items-center font-semibold text-blue-700 text-2xl cursor-pointer",
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
                                        className: `${user.currentTab == TabName.HOME ? "text-white font-light" : "text-gray-400 font-extralight"} flex flex-row items-center text-lg cursor-pointer hover:text-white`,
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
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>{
                                            handleActiveTab(TabName.USER);
                                        },
                                        className: `${user.currentTab == TabName.USER ? "text-white font-light" : "text-gray-400 font-extralight"} flex flex-row items-center text-lg cursor-pointer hover:text-white`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbUser, {
                                                size: 32,
                                                strokeWidth: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hidden md:block",
                                                children: TabName.USER
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>{
                                            handleActiveTab(TabName.CLASS);
                                        },
                                        className: `${user.currentTab == TabName.CLASS ? "text-white font-light" : "text-gray-400 font-extralight"} flex flex-row items-center text-lg cursor-pointer hover:text-white`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbBook2, {
                                                size: 32,
                                                strokeWidth: "1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hidden md:block",
                                                children: TabName.CLASS
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>{
                                            handleActiveTab(TabName.GROUP);
                                        },
                                        className: `${user.currentTab == TabName.GROUP ? "text-white font-light" : "text-gray-400 font-extralight"} flex flex-row items-center text-lg cursor-pointer hover:text-white`,
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
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full sm:w-11/12 md:w-10/12 pt-5 space-y-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between p-5 bg-black rounded-xl text-white text-2xl font-bold",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: user.currentTab == TabName.HOME ? "Home" : user.currentTab
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
                                                user.isLoggedIn && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        (user.currentTab == TabName.CLASS || user.currentTab == TabName.GROUP) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            onClick: ()=>setCreateNewTypeMode(true)
                                                            ,
                                                            className: "flex flex-row items-center bg-stone-800 hover:bg-stone-900 space-x-1 p-1 rounded cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbPlus, {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    children: "New"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            onClick: ()=>handleLogout()
                                                            ,
                                                            className: "flex flex-row items-center bg-stone-800 hover:bg-stone-900 space-x-1 p-1 rounded cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbLogout, {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    children: "Logout"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                createNewTypeMode && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col justify-center p-5 bg-black rounded-xl text-white text-2xl font-bold",
                                    children: [
                                        user.currentTab == TabName.CLASS && /*#__PURE__*/ jsx_runtime_.jsx(NewClass, {
                                            setCreateNewTypeMode: setCreateNewTypeMode,
                                            user: user
                                        }),
                                        user.currentTab == TabName.GROUP && /*#__PURE__*/ jsx_runtime_.jsx(NewGroup, {
                                            setCreateNewTypeMode: setCreateNewTypeMode,
                                            user: user
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-black rounded-xl p-5 text-white text-2xl font-bold mt-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                        children: children
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbBook2, {
                                    onClick: ()=>{
                                        handleActiveTab(TabName.CLASS);
                                    },
                                    size: 32,
                                    strokeWidth: 1,
                                    className: user.currentTab == TabName.CLASS ? "text-white font-light" : "text-gray-400 font-extralight"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbUsers, {
                                    onClick: ()=>{
                                        handleActiveTab(TabName.GROUP);
                                    },
                                    size: 32,
                                    strokeWidth: 1,
                                    className: user.currentTab == TabName.GROUP ? "text-white font-light" : "text-gray-400 font-extralight"
                                })
                            ]
                        })
                    ]
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
    function handleSignupModalSelection(selection) {
        setSelection(selection);
    }
    function handleBackClick() {
        handleSignupModalSelection("");
    }
    function handleActiveTab(tab) {
        if (user.currentTab.toLowerCase() != tab.toLowerCase()) {
            dispatch((0,userSlice/* setCurrentTab */.Lw)(tab));
            setCreateNewTypeMode(false);
            router.push("/" + tab.toLowerCase());
        }
    }
};


/***/ }),

/***/ 227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions)
/* harmony export */ });
const sessionOptions = {
    password: process.env.JWT_SECRET,
    cookieName: "iron-session-token",
    cookieOptions: {
        maxAge: 60 * 60 * 24,
        httpOnly: true,
        sameSite: "strict",
        secure: "production" === "production",
        path: "/"
    }
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


/***/ })

};
;