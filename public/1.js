(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/User.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/users/User.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersData */ "./resources/js/admin/views/users/UsersData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: 'User',
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.usersOpened = from.fullPath.includes('users');
    });
  },
  data: function data() {
    return {
      usersOpened: null
    };
  },
  computed: {
    fields: function fields() {
      return [{
        key: 'key',
        label: this.username,
        _style: 'width:150px'
      }, {
        key: 'value',
        label: '',
        _style: 'width:150px;'
      }];
    },
    userData: function userData() {
      var id = this.$route.params.id;
      var user = _UsersData__WEBPACK_IMPORTED_MODULE_0__["default"].find(function (user, index) {
        return index + 1 == id;
      });
      var userDetails = user ? Object.entries(user) : [['id', 'Not found']];
      return userDetails.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return {
          key: key,
          value: value
        };
      });
    },
    visibleData: function visibleData() {
      return this.userData.filter(function (param) {
        return param.key !== 'username';
      });
    },
    username: function username() {
      return this.userData.filter(function (param) {
        return param.key === 'username';
      })[0].value;
    }
  },
  methods: {
    goBack: function goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({
        path: '/users'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/User.vue?vue&type=template&id=1c0ef9de&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/users/User.vue?vue&type=template&id=1c0ef9de& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        { attrs: { col: "12", lg: "6" } },
        [
          _c(
            "CCard",
            [
              _c("CCardHeader", [
                _vm._v(
                  "\n        User id:  " +
                    _vm._s(_vm.$route.params.id) +
                    "\n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("CDataTable", {
                    attrs: {
                      striped: "",
                      small: "",
                      fixed: "",
                      items: _vm.visibleData,
                      fields: _vm.fields
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCardFooter",
                [
                  _c(
                    "CButton",
                    { attrs: { color: "primary" }, on: { click: _vm.goBack } },
                    [_vm._v("Back")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/users/User.vue":
/*!*************************************************!*\
  !*** ./resources/js/admin/views/users/User.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_1c0ef9de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=1c0ef9de& */ "./resources/js/admin/views/users/User.vue?vue&type=template&id=1c0ef9de&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/users/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_1c0ef9de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_1c0ef9de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/users/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/users/User.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/views/users/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/users/User.vue?vue&type=template&id=1c0ef9de&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/views/users/User.vue?vue&type=template&id=1c0ef9de& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_1c0ef9de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=1c0ef9de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/users/User.vue?vue&type=template&id=1c0ef9de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_1c0ef9de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_1c0ef9de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/views/users/UsersData.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/views/users/UsersData.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var usersData = [{
  id: 1,
  username: 'Samppa Nori',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 2,
  username: 'Estavan Lykos',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 3,
  username: 'Chetan Mohamed',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 4,
  username: 'Derick Maximinus',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 5,
  username: 'Friderik D??vid',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 6,
  username: 'Yiorgos Avraamu',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 7,
  username: 'Avram Tarasios',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned',
  _classes: 'table-success'
}, {
  id: 8,
  username: 'Quintin Ed',
  registered: '2012/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 9,
  username: 'En??as Kwadwo',
  registered: '2012/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 10,
  username: 'Agapetus Tade????',
  registered: '2012/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 11,
  username: 'Carwyn Fachtna',
  registered: '2012/01/01',
  role: 'Member',
  status: 'Active',
  _classes: 'table-success'
}, {
  id: 12,
  username: 'Nehemiah Tatius',
  registered: '2012/02/01',
  role: 'Staff',
  status: 'Banned'
}];
/* harmony default export */ __webpack_exports__["default"] = (usersData);

/***/ })

}]);