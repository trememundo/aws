"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/state/api.ts":
/*!**************************!*\
  !*** ./src/state/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   useCreateProductMutation: () => (/* binding */ useCreateProductMutation),\n/* harmony export */   useGetProductsQuery: () => (/* binding */ useGetProductsQuery),\n/* harmony export */   useGetPurchasesQuery: () => (/* binding */ useGetPurchasesQuery),\n/* harmony export */   useGetSalesQuery: () => (/* binding */ useGetSalesQuery),\n/* harmony export */   useGetSalesSummaryQuery: () => (/* binding */ useGetSalesSummaryQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL\n    }),\n    reducerPath: \"api\",\n    tagTypes: [\n        \"Products\",\n        \"Sales\",\n        \"Purchases\",\n        \"SalesSummary\"\n    ],\n    endpoints: (build)=>({\n            getProducts: build.query({\n                query: (search)=>({\n                        url: \"/products\",\n                        params: search ? {\n                            search\n                        } : {}\n                    }),\n                providesTags: [\n                    \"Products\"\n                ]\n            }),\n            createProduct: build.mutation({\n                query: (newProduct)=>({\n                        url: \"/products\",\n                        method: \"POST\",\n                        body: newProduct\n                    }),\n                invalidatesTags: [\n                    \"Products\"\n                ]\n            }),\n            getSales: build.query({\n                query: ()=>\"/sales\",\n                providesTags: [\n                    \"Sales\"\n                ]\n            }),\n            getPurchases: build.query({\n                query: ()=>\"/purchases\",\n                providesTags: [\n                    \"Purchases\"\n                ]\n            }),\n            // Nuevo endpoint para obtener el resumen de ventas por producto\n            getSalesSummary: build.query({\n                query: ()=>\"/sales-summary\",\n                providesTags: [\n                    \"SalesSummary\"\n                ]\n            })\n        })\n});\nconst { useGetProductsQuery, useCreateProductMutation, useGetSalesQuery, useGetPurchasesQuery, useGetSalesSummaryQuery } = api;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdGF0ZS9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlFO0FBMkNsRSxNQUFNRSxNQUFNRix1RUFBU0EsQ0FBQztJQUMzQkcsV0FBV0YsNEVBQWNBLENBQUM7UUFBRUcsU0FBU0MsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyx3QkFBd0I7SUFBQztJQUMxRUMsYUFBYTtJQUNiQyxVQUFVO1FBQUM7UUFBWTtRQUFTO1FBQWE7S0FBZTtJQUM1REMsV0FBVyxDQUFDQyxRQUFXO1lBQ3JCQyxhQUFhRCxNQUFNRSxLQUFLLENBQTJCO2dCQUNqREEsT0FBTyxDQUFDQyxTQUFZO3dCQUNsQkMsS0FBSzt3QkFDTEMsUUFBUUYsU0FBUzs0QkFBRUE7d0JBQU8sSUFBSSxDQUFDO29CQUNqQztnQkFDQUcsY0FBYztvQkFBQztpQkFBVztZQUM1QjtZQUNBQyxlQUFlUCxNQUFNUSxRQUFRLENBQXNCO2dCQUNqRE4sT0FBTyxDQUFDTyxhQUFnQjt3QkFDdEJMLEtBQUs7d0JBQ0xNLFFBQVE7d0JBQ1JDLE1BQU1GO29CQUNSO2dCQUNBRyxpQkFBaUI7b0JBQUM7aUJBQVc7WUFDL0I7WUFDQUMsVUFBVWIsTUFBTUUsS0FBSyxDQUFnQjtnQkFDbkNBLE9BQU8sSUFBTTtnQkFDYkksY0FBYztvQkFBQztpQkFBUTtZQUN6QjtZQUNBUSxjQUFjZCxNQUFNRSxLQUFLLENBQW1CO2dCQUMxQ0EsT0FBTyxJQUFNO2dCQUNiSSxjQUFjO29CQUFDO2lCQUFZO1lBQzdCO1lBQ0EsZ0VBQWdFO1lBQ2hFUyxpQkFBaUJmLE1BQU1FLEtBQUssQ0FBdUI7Z0JBQ2pEQSxPQUFPLElBQU07Z0JBQ2JJLGNBQWM7b0JBQUM7aUJBQWU7WUFDaEM7UUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQ1hVLG1CQUFtQixFQUNuQkMsd0JBQXdCLEVBQ3hCQyxnQkFBZ0IsRUFDaEJDLG9CQUFvQixFQUNwQkMsdUJBQXVCLEVBQ3hCLEdBQUc3QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdGF0ZS9hcGkudHM/MGM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcclxuXHJcbi8vIEludGVyZmFjZXMgcmVsYWNpb25hZGFzIGNvbiBsb3MgcHJvZHVjdG9zIHkgbGFzIHZlbnRhcy9wZWRpZG9zXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XHJcbiAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgc3RvY2tRdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld1Byb2R1Y3Qge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG4gIHJhdGluZz86IG51bWJlcjtcclxuICBzdG9ja1F1YW50aXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FsZXMge1xyXG4gIHNhbGVJZDogc3RyaW5nO1xyXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gIHRpbWVzdGFtcDogc3RyaW5nO1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgdW5pdFByaWNlOiBudW1iZXI7XHJcbiAgdG90YWxBbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQdXJjaGFzZSB7XHJcbiAgcHVyY2hhc2VJZDogc3RyaW5nO1xyXG4gIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gIHRpbWVzdGFtcDogc3RyaW5nO1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgdW5pdENvc3Q6IG51bWJlcjtcclxuICB0b3RhbENvc3Q6IG51bWJlcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FsZXNTdW1tYXJ5IHtcclxuICBwcm9kdWN0SWQ6IHN0cmluZztcclxuICBwcm9kdWN0TmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlQXBpKHtcclxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIH0pLCBcclxuICByZWR1Y2VyUGF0aDogXCJhcGlcIixcclxuICB0YWdUeXBlczogW1wiUHJvZHVjdHNcIiwgXCJTYWxlc1wiLCBcIlB1cmNoYXNlc1wiLCBcIlNhbGVzU3VtbWFyeVwiXSxcclxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgIGdldFByb2R1Y3RzOiBidWlsZC5xdWVyeTxQcm9kdWN0W10sIHN0cmluZyB8IHZvaWQ+KHtcclxuICAgICAgcXVlcnk6IChzZWFyY2gpID0+ICh7XHJcbiAgICAgICAgdXJsOiBcIi9wcm9kdWN0c1wiLFxyXG4gICAgICAgIHBhcmFtczogc2VhcmNoID8geyBzZWFyY2ggfSA6IHt9LFxyXG4gICAgICB9KSxcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJQcm9kdWN0c1wiXSxcclxuICAgIH0pLFxyXG4gICAgY3JlYXRlUHJvZHVjdDogYnVpbGQubXV0YXRpb248UHJvZHVjdCwgTmV3UHJvZHVjdD4oe1xyXG4gICAgICBxdWVyeTogKG5ld1Byb2R1Y3QpID0+ICh7XHJcbiAgICAgICAgdXJsOiBcIi9wcm9kdWN0c1wiLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogbmV3UHJvZHVjdCxcclxuICAgICAgfSksXHJcbiAgICAgIGludmFsaWRhdGVzVGFnczogW1wiUHJvZHVjdHNcIl0sXHJcbiAgICB9KSxcclxuICAgIGdldFNhbGVzOiBidWlsZC5xdWVyeTxTYWxlc1tdLCB2b2lkPih7XHJcbiAgICAgIHF1ZXJ5OiAoKSA9PiBcIi9zYWxlc1wiLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcIlNhbGVzXCJdLFxyXG4gICAgfSksXHJcbiAgICBnZXRQdXJjaGFzZXM6IGJ1aWxkLnF1ZXJ5PFB1cmNoYXNlW10sIHZvaWQ+KHtcclxuICAgICAgcXVlcnk6ICgpID0+IFwiL3B1cmNoYXNlc1wiLFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IFtcIlB1cmNoYXNlc1wiXSxcclxuICAgIH0pLFxyXG4gICAgLy8gTnVldm8gZW5kcG9pbnQgcGFyYSBvYnRlbmVyIGVsIHJlc3VtZW4gZGUgdmVudGFzIHBvciBwcm9kdWN0b1xyXG4gICAgZ2V0U2FsZXNTdW1tYXJ5OiBidWlsZC5xdWVyeTxTYWxlc1N1bW1hcnlbXSwgdm9pZD4oe1xyXG4gICAgICBxdWVyeTogKCkgPT4gXCIvc2FsZXMtc3VtbWFyeVwiLCBcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJTYWxlc1N1bW1hcnlcIl0sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHVzZUdldFByb2R1Y3RzUXVlcnksXHJcbiAgdXNlQ3JlYXRlUHJvZHVjdE11dGF0aW9uLFxyXG4gIHVzZUdldFNhbGVzUXVlcnksXHJcbiAgdXNlR2V0UHVyY2hhc2VzUXVlcnksXHJcbiAgdXNlR2V0U2FsZXNTdW1tYXJ5UXVlcnksIFxyXG59ID0gYXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJhcGkiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsInJlZHVjZXJQYXRoIiwidGFnVHlwZXMiLCJlbmRwb2ludHMiLCJidWlsZCIsImdldFByb2R1Y3RzIiwicXVlcnkiLCJzZWFyY2giLCJ1cmwiLCJwYXJhbXMiLCJwcm92aWRlc1RhZ3MiLCJjcmVhdGVQcm9kdWN0IiwibXV0YXRpb24iLCJuZXdQcm9kdWN0IiwibWV0aG9kIiwiYm9keSIsImludmFsaWRhdGVzVGFncyIsImdldFNhbGVzIiwiZ2V0UHVyY2hhc2VzIiwiZ2V0U2FsZXNTdW1tYXJ5IiwidXNlR2V0UHJvZHVjdHNRdWVyeSIsInVzZUNyZWF0ZVByb2R1Y3RNdXRhdGlvbiIsInVzZUdldFNhbGVzUXVlcnkiLCJ1c2VHZXRQdXJjaGFzZXNRdWVyeSIsInVzZUdldFNhbGVzU3VtbWFyeVF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/state/api.ts\n"));

/***/ })

});