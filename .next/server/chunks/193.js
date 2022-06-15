"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _state_redux_userSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(185);










function Layout({ children  }) {
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.user_store.user
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { 0: selection1 , 1: setSelection  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !user.isLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center items-center h-screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-5 pb-2 basis-3/5 md:basis-2/5 lg:basis-1/5 bg-black shadow-xl shadow-black rounded-3xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col items-center mt-10 space-y-3 text-blue-700",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStackExchange, {
                                    size: 100
                                })
                            }),
                            selection1 === "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-blue-700 text-3xl text-center mb-5",
                                        children: "kollab"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row items-center justify-center cursor-pointer space-x-1 py-1 my-2 text-sm text-black bg-white hover:bg-gray-200 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_4__.FcGoogle, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Sign up with Google"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row items-center justify-center cursor-pointer space-x-1 py-1 my-2 text-sm text-black bg-white hover:bg-gray-200 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsGithub, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Sign up with Github"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center py-1 my-2 text-sm cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl",
                                        onClick: ()=>handleSignupModalSelection("register")
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-white",
                                            children: "Sign up with Email"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "py-1 my-2 text-sm text-white mt-5",
                                        children: "Already have an account?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center py-1 text-sm cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl",
                                        onClick: ()=>handleSignupModalSelection("login")
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-white",
                                            children: "Log in"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center text-white text-sm",
                                        children: [
                                            "forgot password?",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "underline cursor-pointer",
                                                onClick: ()=>router.push("/reset")
                                                ,
                                                children: "reset"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            selection1 === "login" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-white text-center text-2xl mb-5",
                                        children: [
                                            "Log in to ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-blue-700",
                                                children: "kollab"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            onSubmit: handleLogin,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "text-white",
                                                        children: "email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "text-black rounded-xl px-2",
                                                        type: "text",
                                                        required: true,
                                                        id: "email",
                                                        name: "email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "text-white",
                                                        children: "password"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "text-black rounded-xl px-2",
                                                        type: "password",
                                                        required: true,
                                                        id: "password",
                                                        name: "password"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row py-5 text-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                onClick: ()=>handleBackClick()
                                                                ,
                                                                className: "basis-2/5 bg-black border-2 border-white hover:bg-gray-800 text-white rounded-xl px-1 cursor-pointer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "back"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
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
                            selection1 === "register" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-white text-center text-2xl mb-5",
                                        children: [
                                            "Log in to ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-blue-700",
                                                children: "kollab"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            onSubmit: handleRegisterFormSubmit,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        className: "text-white",
                                                                        children: "first name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "text-black rounded-xl px-2",
                                                                        type: "text",
                                                                        required: true,
                                                                        id: "first_name",
                                                                        name: "first_name"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        className: "text-white",
                                                                        children: "last name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "text-white",
                                                        children: "email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "text-black rounded-xl px-2",
                                                        type: "text",
                                                        required: true,
                                                        id: "email",
                                                        name: "email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "text-white",
                                                        children: "password"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "text-black rounded-xl px-2",
                                                        type: "password",
                                                        required: true,
                                                        id: "password",
                                                        name: "password"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "text-white",
                                                        children: "confirm password"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "text-black rounded-xl px-2",
                                                        type: "password",
                                                        required: true,
                                                        id: "confirm_password",
                                                        name: "confirm_password"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row py-5 text-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                onClick: ()=>handleSignupModalSelection("")
                                                                ,
                                                                className: "basis-2/5 bg-black border-2 border-white hover:bg-gray-800 text-white rounded-xl px-1 cursor-pointer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "back"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
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
            user.isLoggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex container mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden sm:block sm:w-1/12 md:w-2/12 md:px-5 lg:px-10 pt-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col py-5 space-y-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row items-center font-semibold text-blue-700 text-2xl cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStackExchange, {
                                                size: 32
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hidden md:block",
                                                children: "kollab"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>{
                                            handleActiveTab("");
                                        },
                                        className: `flex flex-row items-center text-lg cursor-pointer ${user.currentTab === "" ? "text-white font-light" : "text-gray-400 font-extralight"}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbHome2, {
                                                size: 32,
                                                strokeWidth: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hidden md:block",
                                                children: "Home"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>{
                                            handleActiveTab("user");
                                        },
                                        className: `flex flex-row items-center text-lg cursor-pointer ${user.currentTab === "user" ? "text-white font-light" : "text-gray-400 font-extralight"}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbUser, {
                                                size: 32,
                                                strokeWidth: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hidden md:block",
                                                children: "User"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>{
                                            handleActiveTab("classes");
                                        },
                                        className: `flex flex-row items-center text-lg cursor-pointer ${user.currentTab === "classes" ? "text-white font-light" : "text-gray-400 font-extralight"}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbBook2, {
                                                size: 32,
                                                strokeWidth: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hidden md:block",
                                                children: "Classes"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>{
                                            handleActiveTab("groups");
                                        },
                                        className: `flex flex-row items-center text-lg cursor-pointer ${user.currentTab === "groups" ? "text-white font-light" : "text-gray-400 font-extralight"}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbUsers, {
                                                size: 32,
                                                strokeWidth: "1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hidden md:block",
                                                children: "Groups"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full sm:w-11/12 md:w-10/12 pt-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between p-5 bg-black rounded-xl text-white text-2xl font-bold",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: user.currentTab === "" ? "home" : user.currentTab
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row items-center space-x-2 font-medium text-base",
                                            children: [
                                                !user.isLoggedIn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    onClick: ()=>router.push("/login")
                                                    ,
                                                    className: "flex flex-row items-center bg-stone-800 p-1 space-x-1 rounded cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbLogin, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: "Login"
                                                        })
                                                    ]
                                                }),
                                                user.isLoggedIn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    onClick: ()=>handleLogout()
                                                    ,
                                                    className: "flex flex-row items-center bg-stone-800 p-1 space-x-1 rounded cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbLogout, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: "Logout"
                                                        })
                                                    ]
                                                }),
                                                !user.isLoggedIn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    onClick: ()=>router.push("/register")
                                                    ,
                                                    className: "flex flex-row items-center bg-stone-800 p-1 space-x-1 rounded cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbUserPlus, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: "Register"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-black rounded-xl p-5 text-white text-2xl font-bold mt-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                        children: children
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-between mb-1 fixed bottom-2 px-20 w-full sm:hidden text-white",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStackExchange, {
                                    onClick: ()=>{
                                        router.push("/");
                                    },
                                    className: "text-blue-700",
                                    size: 32
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbHome2, {
                                    onClick: ()=>{
                                        handleActiveTab("/");
                                    },
                                    size: 32,
                                    strokeWidth: 1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbUser, {
                                    onClick: ()=>{
                                        handleActiveTab("user");
                                    },
                                    size: 32,
                                    strokeWidth: 1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbBook2, {
                                    onClick: ()=>{
                                        handleActiveTab("classes");
                                    },
                                    size: 32,
                                    strokeWidth: 1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbUsers, {
                                    onClick: ()=>{
                                        handleActiveTab("groups");
                                    },
                                    size: 32,
                                    strokeWidth: 1
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
            await axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: "post",
                url: "/api/login",
                data: JSON.stringify(userCreds),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>{
                dispatch((0,_state_redux_userSlice__WEBPACK_IMPORTED_MODULE_9__/* .setUserState */ .Q_)(res.data));
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function handleLogout() {
        try {
            await axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: "get",
                url: "/api/logout"
            }).then((res)=>{
                dispatch((0,_state_redux_userSlice__WEBPACK_IMPORTED_MODULE_9__/* .setUserState */ .Q_)(res.data));
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
            await axios__WEBPACK_IMPORTED_MODULE_7___default()({
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
                dispatch((0,_state_redux_userSlice__WEBPACK_IMPORTED_MODULE_9__/* .setUserState */ .Q_)(res.data));
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
        if (user.currentTab.toLowerCase() !== tab.toLowerCase()) {
            dispatch((0,_state_redux_userSlice__WEBPACK_IMPORTED_MODULE_9__/* .setCurrentTab */ .Lw)(tab.toLowerCase()));
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
        maxAge: 60 * 60,
        httpOnly: true,
        sameSite: "strict",
        secure: "production" === "production",
        path: "/"
    }
};


/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


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