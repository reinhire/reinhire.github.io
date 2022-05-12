"use strict";
exports.id = 8977;
exports.ids = [8977];
exports.modules = {

/***/ 8977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5895);
/* harmony import */ var _components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3825);
/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1565);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3391);
/* harmony import */ var _components_Team_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9086);
/* harmony import */ var _layouts_Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);
/* harmony import */ var _components_Works3_works3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8419);
/* harmony import */ var _components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1994);
/* harmony import */ var _components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8725);
/* harmony import */ var _components_About_us3_about_us3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9871);
/* harmony import */ var _components_Services3_services3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5797);
/* harmony import */ var _components_Minimal_Area2_minimal_area2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9216);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_9__, _components_Works3_works3__WEBPACK_IMPORTED_MODULE_8__]);
([_components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_9__, _components_Works3_works3__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















const Homepage = ()=>{
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add('nav-scroll');
        } else {
            navbar.classList.remove('nav-scroll');
        }
        window.addEventListener('scroll', ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add('nav-scroll');
            } else {
                navbar.classList.remove('nav-scroll');
            }
        });
    }, [
        navbarRef
    ]);
    const selectedTheme = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>state.theme
    ).value;
    const finalTheme = selectedTheme && selectedTheme.theme;
    const themeSet = finalTheme === 'light' ? 'themeL' : '';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    nr: navbarRef,
                    lr: logoRef,
                    theme: themeSet
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us3_about_us3__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works3_works3__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services3_services3__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Minimal_Area2_minimal_area2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    classText: "pb-0"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team_team__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blogs_Blogs4_blogs4__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

});

/***/ })

};
;