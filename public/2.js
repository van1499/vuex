(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/users/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Users',
  data: function data() {
    return {
      fields: [{
        key: 'id'
      }, {
        key: 'username',
        label: 'Name',
        _classes: 'font-weight-bold'
      }, {
        key: 'registered'
      }, {
        key: 'role'
      }, {
        key: 'status'
      }, {
        key: 'actions'
      }],
      activePage: 1
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['users'])),
  watch: {
    $route: {
      immediate: true,
      handler: function handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      }
    }
  },
  created: function created() {
    this.$store.dispatch('getUsers');
  },
  methods: {
    getBadge: function getBadge(status) {
      switch (status) {
        case 'Active':
          return 'success';

        case 'Inactive':
          return 'secondary';

        case 'Pending':
          return 'warning';

        case 'Banned':
          return 'danger';

        default:
          'primary';
      }
    },
    // rowClicked (item, index) {
    //   this.$router.push({path: `users/${index + 1}`})
    // },
    pageChange: function pageChange(val) {
      this.$router.push({
        query: {
          page: val
        }
      });
    },
    editUser: function editUser(id) {
      console.log(id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/Users.vue?vue&type=template&id=50c38032&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/users/Users.vue?vue&type=template&id=50c38032& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { col: "12", xl: "8" } },
        [
          _c(
            "CCard",
            [
              _c("CCardHeader", [_vm._v("\n        Users\n      ")]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("CDataTable", {
                    attrs: {
                      hover: "",
                      striped: "",
                      items: _vm.users,
                      fields: _vm.fields,
                      "items-per-page": 5,
                      "clickable-rows": "",
                      "active-page": _vm.activePage,
                      pagination: { doubleArrows: false, align: "center" }
                    },
                    on: { "page-change": _vm.pageChange },
                    scopedSlots: _vm._u([
                      {
                        key: "status",
                        fn: function(data) {
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "CBadge",
                                  {
                                    attrs: {
                                      color: _vm.getBadge(data.item.status)
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(data.item.status) +
                                        "\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "actions",
                        fn: function(data) {
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "CButtonGroup",
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        attrs: { size: "sm", color: "info" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editUser(data.item.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: { name: "cib-facebook" }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CButton",
                                      {
                                        attrs: { size: "sm", color: "danger" }
                                      },
                                      [
                                        _c("CIcon", {
                                          attrs: { name: "icon-facebook" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/users/Users.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/views/users/Users.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_50c38032___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=50c38032& */ "./resources/js/admin/views/users/Users.vue?vue&type=template&id=50c38032&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_50c38032___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_50c38032___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/users/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/views/users/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/users/Users.vue?vue&type=template&id=50c38032&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/views/users/Users.vue?vue&type=template&id=50c38032& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_50c38032___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=50c38032& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/Users.vue?vue&type=template&id=50c38032&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_50c38032___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_50c38032___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);