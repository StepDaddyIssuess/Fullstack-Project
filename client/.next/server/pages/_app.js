/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Avatar_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar!=!antd */ \"__barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_3__]);\n_context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Nav() {\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n         false && 0;\n    }, [\n         false && 0\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const logout = ()=>{\n        window.localStorage.removeItem(\"auth\");\n        try {\n            setState(null);\n        } catch (err) {\n            console.log(err);\n        }\n        router.reload();\n        window.location.href = \"/login\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \" nav d-flex justify-content-between\",\n        style: {\n            backgroundColor: \"blue\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: `nav-link text-light logo ${current === \"/\" && \"active\"}`,\n                style: {\n                    marginLeft: \"2rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        src: \"/images/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: \"FullStackProject\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown show p-1 h5 dropdown-bg   \",\n                    style: {\n                        marginRight: \"2rem\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"dropdown-toggle text-light\",\n                            href: \"#\",\n                            role: \"button\",\n                            id: \"dropdownMenuLink\",\n                            \"data-toggle\": \"dropdown\",\n                            \"aria-haspopup\": \"true\",\n                            \"aria-expanded\": \"false\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"fs-5 text\",\n                                children: state && state.user && state.user.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 48,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 47,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-menu\",\n                            \"aria-labelledby\": \"dropdownMenuLink\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/user/dashboard\",\n                                    className: \"nav-link dropdown-item \",\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/user/profile/update\",\n                                    className: \"nav-link dropdown-item \",\n                                    children: \"Profile\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link dropdown-item\",\n                                    onClick: logout,\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 50,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 45,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/login\",\n                        className: `nav-link text-light ${current === \"/login\" && \"active\"}`,\n                        style: {\n                            fontSize: \"20px\"\n                        },\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 67,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/register\",\n                        className: `nav-link text-light ${current === \"/register\" && \"active\"}`,\n                        style: {\n                            marginRight: \"2rem\",\n                            fontSize: \"20px\"\n                        },\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDMkI7QUFDZjtBQUNEO0FBQ1Y7QUFFOUIsU0FBU087SUFFTCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ05PLE1BQWUsSUFBSUQsQ0FBb0M7SUFDM0QsR0FBRztRQUFDQyxNQUFlLElBQUlFLENBQXdCO0tBQUM7SUFFaEQsTUFBTUcsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHaEIsaURBQVVBLENBQUNHLGlEQUFXQTtJQUVoRCxNQUFNYyxTQUFTO1FBQ1hOLE9BQU9PLFlBQVksQ0FBQ0MsVUFBVSxDQUFDO1FBQy9CLElBQUk7WUFDQUgsU0FBUztRQUNiLEVBQ0EsT0FBT0ksS0FBSztZQUNSQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO1FBQ0FOLE9BQU9TLE1BQU07UUFDYlosT0FBT0MsUUFBUSxDQUFDWSxJQUFJLEdBQUc7SUFFM0I7SUFFQSxxQkFFSSw4REFBQ0M7UUFBSUMsV0FBVTtRQUNYQyxPQUFPO1lBQUVDLGlCQUFpQjtRQUFPOzswQkFDakMsOERBQUM3QixrREFBSUE7Z0JBQUN5QixNQUFLO2dCQUFJRSxXQUFXLENBQUMseUJBQXlCLEVBQUVuQixZQUFZLE9BQU8sU0FBUyxDQUFDO2dCQUFFb0IsT0FBTztvQkFBRUUsWUFBWTtnQkFBTzs7a0NBQzdHLDhEQUFDeEIsc0VBQU1BO3dCQUFDeUIsS0FBSTs7Ozs7O2tDQUNaLDhEQUFDQzt3QkFBS0osT0FBTzs0QkFBRUUsWUFBWTt3QkFBTztrQ0FBRzs7Ozs7Ozs7Ozs7O1lBS3JDZCxVQUFVLHFCQUVOOzBCQUNJLDRFQUFDaUI7b0JBQUlOLFdBQVU7b0JBQ2hCQyxPQUFPO3dCQUFFTSxhQUFhO29CQUFPOztzQ0FDeEIsOERBQUNDOzRCQUFFUixXQUFVOzRCQUE2QkYsTUFBSzs0QkFBSVcsTUFBSzs0QkFBU0MsSUFBRzs0QkFBbUJDLGVBQVk7NEJBQVdDLGlCQUFjOzRCQUFPQyxpQkFBYztzQ0FDN0ksNEVBQUNDO2dDQUFPZCxXQUFVOzBDQUFhWCxTQUFTQSxNQUFNMEIsSUFBSSxJQUFJMUIsTUFBTTBCLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7c0NBRXpFLDhEQUFDVjs0QkFBSU4sV0FBVTs0QkFBZ0JpQixtQkFBZ0I7OzhDQUUzQyw4REFBQzVDLGtEQUFJQTtvQ0FBQ3lCLE1BQUs7b0NBQWtCRSxXQUFVOzhDQUEwQjs7Ozs7OzhDQUlqRSw4REFBQzNCLGtEQUFJQTtvQ0FBQ3lCLE1BQUs7b0NBQXVCRSxXQUFVOzhDQUEwQjs7Ozs7OzhDQUl0RSw4REFBQ1E7b0NBQUVSLFdBQVU7b0NBQXlCa0IsU0FBUzNCOzhDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTW5FOztrQ0FDSSw4REFBQ2xCLGtEQUFJQTt3QkFBQ3lCLE1BQUs7d0JBQVNFLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRW5CLFlBQVksWUFBWSxTQUFTLENBQUM7d0JBQUVvQixPQUFPOzRCQUFFa0IsVUFBVTt3QkFBTztrQ0FBRzs7Ozs7O2tDQUt2SCw4REFBQzlDLGtEQUFJQTt3QkFBQ3lCLE1BQUs7d0JBQVlFLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRW5CLFlBQVksZUFBZSxTQUFTLENBQUM7d0JBQUVvQixPQUFPOzRCQUFFTSxhQUFhOzRCQUFRWSxVQUFVO3dCQUFPO2tDQUFHOzs7Ozs7Ozs7Ozs7OztBQWUxSztBQUVBLGlFQUFldkMsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5mdW5jdGlvbiBOYXYoKSB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0U3RhdGUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIiBuYXYgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIiB9fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LWxpZ2h0IGxvZ28gJHtjdXJyZW50ID09PSBcIi9cIiAmJiBcImFjdGl2ZVwifWB9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMnJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PkZ1bGxTdGFja1Byb2plY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSAhPT0gbnVsbCA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBzaG93IHAtMSBoNSBkcm9wZG93bi1iZ1xyXG4gICAgICAgICAgICAgICAgICAgICBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgdGV4dC1saWdodFwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51TGlua1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZnMtNSB0ZXh0XCI+e3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51TGlua1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24taXRlbSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvcHJvZmlsZS91cGRhdGVcIiBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi1pdGVtXCIgb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJlbnQgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIn1gfSBzdHlsZT17eyBmb250U2l6ZTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtbGlnaHQgJHtjdXJyZW50ID09PSBcIi9yZWdpc3RlclwiICYmIFwiYWN0aXZlXCJ9YH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnJlbVwiLCBmb250U2l6ZTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHsgfVxyXG5cclxuXHJcbiAgICAgICAgPC9uYXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsInVzZVJvdXRlciIsIkF2YXRhciIsIk5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicm91dGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVsb2FkIiwiaHJlZiIsIm5hdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luTGVmdCIsInNyYyIsInNwYW4iLCJkaXYiLCJtYXJnaW5SaWdodCIsImEiLCJyb2xlIiwiaWQiLCJkYXRhLXRvZ2dsZSIsImFyaWEtaGFzcG9wdXAiLCJhcmlhLWV4cGFuZGVkIiwic3Ryb25nIiwidXNlciIsIm5hbWUiLCJhcmlhLWxhYmVsbGVkYnkiLCJvbkNsaWNrIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children })=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function(response) {\n        return response;\n    }, function(error) {\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    // Axios configuration\n    const token = state && state.token ? state.token : \"\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"http://localhost:8000/api\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${token}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\context\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDakM7QUFDYztBQUd4QyxNQUFNSyw0QkFBY0osb0RBQWFBO0FBRWpDLE1BQU1LLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDOUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO1FBQy9CVSxNQUFNLENBQUM7UUFDUEMsT0FBTztJQUNYO0lBRUEsTUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCRCwwREFBa0IsQ0FBQ1csUUFBUSxDQUFDQyxHQUFHLENBQUMsU0FBVUQsUUFBUTtRQUM5QyxPQUFPQTtJQUNYLEdBQUcsU0FBVUUsS0FBSztRQUNkLElBQUlDLE1BQU1ELE1BQU1GLFFBQVE7UUFDeEIsSUFBSUcsSUFBSUMsTUFBTSxLQUFLLE9BQU9ELElBQUlFLE1BQU0sSUFBSSxDQUFDRixJQUFJRSxNQUFNLENBQUNDLGdCQUFnQixFQUFFO1lBQ2xFWCxTQUFTO1lBQ1RZLE9BQU9DLFlBQVksQ0FBQ0MsVUFBVSxDQUFDO1lBQy9CWCxPQUFPWSxJQUFJLENBQUM7UUFDaEI7SUFDSjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDTk8sU0FBU2dCLEtBQUtDLEtBQUssQ0FBQ0wsT0FBT0MsWUFBWSxDQUFDSyxPQUFPLENBQUM7SUFDcEQsR0FBRyxFQUFFO0lBRUwsc0JBQXNCO0lBQ3RCLE1BQU1oQixRQUFRSCxTQUFTQSxNQUFNRyxLQUFLLEdBQUdILE1BQU1HLEtBQUssR0FBRztJQUNuRFIsc0RBQWMsQ0FBQzBCLE9BQU8sR0FBR0MsMkJBQTJCO0lBQ3BEM0Isc0RBQWMsQ0FBQzhCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFdkIsTUFBTSxDQUFDO0lBR2xFLHFCQUNJLDhEQUFDTixZQUFZOEIsUUFBUTtRQUFDQyxPQUFPO1lBQUM1QjtZQUFPQztTQUFTO2tCQUN6Q0Y7Ozs7OztBQUdiO0FBRXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXI6IHt9LFxyXG4gICAgICAgIHRva2VuOiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAgICAgICAgICAgc2V0U3RhdGUobnVsbCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIilcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vIEF4aW9zIGNvbmZpZ3VyYXRpb25cclxuICAgIGNvbnN0IHRva2VuID0gc3RhdGUgJiYgc3RhdGUudG9rZW4gPyBzdGF0ZS50b2tlbiA6IFwiXCI7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFVzZXJQcm92aWRlciwgVXNlckNvbnRleHQgfTsgIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJyb3V0ZXIiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js":
/*!**************************************************************************!*\
  !*** __barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Kyano_OneDrive_Bureaublad_Courses_Notes_FullStack_Network_Project_RealTime_client_node_modules_antd_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/index.js */ \"./node_modules/antd/es/index.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_Kyano_OneDrive_Bureaublad_Courses_Notes_FullStack_Network_Project_RealTime_client_node_modules_antd_es_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_Kyano_OneDrive_Bureaublad_Courses_Notes_FullStack_Network_Project_RealTime_client_node_modules_antd_es_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BdmF0YXIhPSEuL25vZGVfbW9kdWxlcy9hbnRkL2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5kZXguanM/YjllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcS3lhbm9cXFxcT25lRHJpdmVcXFxcQnVyZWF1YmxhZFxcXFxDb3Vyc2VzXFxcXE5vdGVzIEZ1bGxTdGFja1xcXFxOZXR3b3JrIFByb2plY3QgUmVhbFRpbWVcXFxcY2xpZW50XFxcXG5vZGVfbW9kdWxlc1xcXFxhbnRkXFxcXGVzXFxcXGluZGV4LmpzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/styles.css */ \"./public/css/styles.css\");\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_home_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/css/home.css */ \"./public/css/home.css\");\n/* harmony import */ var _public_css_home_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_home_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_css_login_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/css/login.css */ \"./public/css/login.css\");\n/* harmony import */ var _public_css_login_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_login_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_css_register_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/css/register.css */ \"./public/css/register.css\");\n/* harmony import */ var _public_css_register_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_css_register_css__WEBPACK_IMPORTED_MODULE_11__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_1__, _components_Nav__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\n([_context__WEBPACK_IMPORTED_MODULE_1__, _components_Nav__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Myapp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_1__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                    position: \"top-center\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Myapp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDVjtBQUNQO0FBQ21CO0FBQ0Q7QUFDbkI7QUFDTTtBQUNIO0FBQ0M7QUFDRztBQUduQyxTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLHFCQUNJLDhEQUFDTixrREFBWUE7a0JBQ1Q7OzhCQUNJLDhEQUFDRSxrREFBSUE7Ozs7OzhCQUlMLDhEQUFDRCx1REFBR0E7Ozs7OzhCQUVKLDhEQUFDRSwwREFBY0E7b0JBQ1hJLFVBQVM7Ozs7Ozs4QkFHYiw4REFBQ0Y7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUl4QztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3Mvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL2hvbWUuY3NzXCJcclxuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9sb2dpbi5jc3NcIlxyXG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL3JlZ2lzdGVyLmNzc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gTXlhcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2VyUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3Mvc3R5bGVzLmNzc1wiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXYgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvVXNlclByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWFwcDsiXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwiTmF2IiwiSGVhZCIsIlRvYXN0Q29udGFpbmVyIiwiTXlhcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/home.css":
/*!*****************************!*\
  !*** ./public/css/home.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/login.css":
/*!******************************!*\
  !*** ./public/css/login.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/register.css":
/*!*********************************!*\
  !*** ./public/css/register.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@ctrl/tinycolor":
/*!**********************************!*\
  !*** external "@ctrl/tinycolor" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ctrl/tinycolor");

/***/ }),

/***/ "async-validator":
/*!**********************************!*\
  !*** external "async-validator" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("async-validator");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "copy-to-clipboard":
/*!************************************!*\
  !*** external "copy-to-clipboard" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ "json2mq":
/*!**************************!*\
  !*** external "json2mq" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("json2mq");

/***/ }),

/***/ "lodash/camelCase":
/*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/camelCase");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ "lodash/padEnd":
/*!********************************!*\
  !*** external "lodash/padEnd" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/padEnd");

/***/ }),

/***/ "lodash/padStart":
/*!**********************************!*\
  !*** external "lodash/padStart" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/padStart");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "rc-overflow":
/*!******************************!*\
  !*** external "rc-overflow" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("rc-overflow");

/***/ }),

/***/ "rc-trigger":
/*!*****************************!*\
  !*** external "rc-trigger" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("rc-trigger");

/***/ }),

/***/ "rc-virtual-list":
/*!**********************************!*\
  !*** external "rc-virtual-list" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("rc-virtual-list");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "scroll-into-view-if-needed":
/*!*********************************************!*\
  !*** external "scroll-into-view-if-needed" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("scroll-into-view-if-needed");

/***/ }),

/***/ "shallowequal":
/*!*******************************!*\
  !*** external "shallowequal" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("shallowequal");

/***/ }),

/***/ "throttle-debounce":
/*!************************************!*\
  !*** external "throttle-debounce" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("throttle-debounce");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@ant-design","vendor-chunks/antd","vendor-chunks/rc-table","vendor-chunks/rc-picker","vendor-chunks/rc-tree","vendor-chunks/rc-select","vendor-chunks/rc-field-form","vendor-chunks/rc-menu","vendor-chunks/rc-util","vendor-chunks/rc-cascader","vendor-chunks/rc-tabs","vendor-chunks/rc-tree-select","vendor-chunks/rc-slider","vendor-chunks/rc-motion","vendor-chunks/rc-image","vendor-chunks/@babel","vendor-chunks/rc-input-number","vendor-chunks/rc-pagination","vendor-chunks/rc-mentions","vendor-chunks/rc-notification","vendor-chunks/rc-dialog","vendor-chunks/rc-upload","vendor-chunks/rc-drawer","vendor-chunks/rc-collapse","vendor-chunks/rc-progress","vendor-chunks/rc-textarea","vendor-chunks/rc-input","vendor-chunks/rc-rate","vendor-chunks/rc-steps","vendor-chunks/rc-segmented","vendor-chunks/rc-dropdown","vendor-chunks/rc-resize-observer","vendor-chunks/rc-tooltip","vendor-chunks/@rc-component","vendor-chunks/rc-checkbox","vendor-chunks/rc-switch","vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();