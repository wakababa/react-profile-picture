module.exports = (function (e) {
    var t = {};
    function a(r) {
      if (t[r]) return t[r].exports;
      var n = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
    }
    return (
      (a.m = e),
      (a.c = t),
      (a.d = function (e, t, r) {
        a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (a.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (a.t = function (e, t) {
        if ((1 & t && (e = a(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (a.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            a.d(
              r,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return r;
      }),
      (a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return a.d(t, "a", t), t;
      }),
      (a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (a.p = ""),
      a((a.s = 4))
    );
  })([
    function (e, t) {
      e.exports = require("react");
    },
    function (e, t, a) {
      e.exports = a(5)();
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(a(0)),
        n = i(a(1)),
        o = i(a(10));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = function (e) {
        var t = {
            svg: { display: "inline-block", verticalAlign: "middle" },
            path: { fill: e.color, strokeWidth: e.strokeWidth },
          },
          a = o.default[e.name],
          n = ["Icon Icon--" + e.name, e.className];
        return r.default.createElement(
          "svg",
          {
            className: n.join(" "),
            style: t.svg,
            width: e.size + "px",
            height: e.size + "px",
            viewBox: "0 0 80 80",
          },
          r.default.createElement("path", { style: t.path, d: a })
        );
      };
      (s.propTypes = {
        name: n.default.string.isRequired,
        size: n.default.number,
        color: n.default.string,
        strokeWidth: n.default.string,
      }),
        (s.defaultProps = { size: 16 }),
        (t.default = s);
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = {
        EMPTY: "EMPTY",
        LOADING: "LOADING",
        DRAGOVER: "DRAGOVER",
        INVALID_FILE_TYPE: "INVALID_FILE_TYPE",
        INVALID_IMAGE_SIZE: "INVALID_IMAGE_SIZE",
        LOADED: "LOADED",
      };
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
          };
        })(),
        o = a(0),
        i = E(o),
        s = E(a(1)),
        u = E(a(7)),
        l = E(a(8)),
        c = E(a(9)),
        f = E(a(11)),
        d = E(a(3)),
        p = E(a(12)),
        m = E(a(2)),
        h = a(13),
        g = a(14),
        v = a(15),
        _ = a(16),
        b = E(a(26));
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var y = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var a = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (a.dragging = !1),
            (a.draggingPosition = { x: 0, y: 0, clientX: 0, clientY: 0 }),
            (a.canvasRef = i.default.createRef()),
            (a.helperRef = i.default.createRef()),
            (a.frameRef = i.default.createRef()),
            (a.photoHelperRef = i.default.createRef()),
            (a.inputFileRef = i.default.createRef()),
            (a.onMoving = a.onMoving.bind(a)),
            (a.onMovingEnd = a.onMovingEnd.bind(a)),
            (a.state = {
              status: d.default.EMPTY,
              loadedData: {},
              imageData: {},
              file: e.image,
            }),
            e.image && a.processFile(e.image),
            a
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          n(t, [
            {
              key: "componentWillMount",
              value: function () {
                this.registerImageEvents(), this.debug("[componentWillMount]");
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                var e = this;
                ["mousemove", "touchmove"].forEach(function (t) {
                  return window.removeEventListener(t, e.onMoving, !1);
                }),
                  ["mouseup", "touchend"].forEach(function (t) {
                    return window.removeEventListener(t, e.onMovingEnd, !1);
                  }),
                  this.debug("[componentWillUnmount]");
              },
            },
            {
              key: "resetState",
              value: function () {
                var e = r({}, this.state);
                (e.status = d.default.EMPTY),
                  (e.loadedData = {}),
                  (e.imageData = {});
                var t = this.photoHelperRef.current,
                  a = t.clientWidth,
                  n = t.clientHeight,
                  o = this.props.cropSize;
                this.setState(
                  e,
                  _.clearCanvas.bind(this, {
                    photoCanvas: this.canvasRef.current,
                    helperCanvas: this.helperRef.current,
                    cropSize: o,
                    helperWidth: a,
                    helperHeight: n,
                  })
                ),
                  this.debug("[resetState]");
              },
            },
            {
              key: "setStatus",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : d.default.EMPTY,
                  t = r({}, this.state);
                (t.status = e),
                  this.setState(t),
                  this.props.onStatusChange.call(this, e),
                  this.debug("[setStatus]", { status: e });
              },
            },
            {
              key: "dragStart",
              value: function (e) {
                (this.dragging = !0),
                  (this.draggingPosition.clientX = e.clientX),
                  (this.draggingPosition.clientY = e.clientY),
                  e.touches &&
                    ((this.draggingPosition.clientX = e.touches[0].clientX),
                    (this.draggingPosition.clientY = e.touches[0].clientY)),
                  (this.draggingPosition.x =
                    this.draggingPosition.clientX - this.state.imageData.imageX),
                  (this.draggingPosition.y =
                    this.draggingPosition.clientY - this.state.imageData.imageY),
                  this.debug("[dragStart]", {
                    draggingPosition: this.draggingPosition,
                  });
              },
            },
            {
              key: "onMovingEnd",
              value: function () {
                (this.dragging = !1), this.debug("[mouseup, touchend]");
              },
            },
            {
              key: "onMoving",
              value: function (e) {
                if (this.dragging) {
                  e.preventDefault();
                  var t = r({}, this.state),
                    a = r({}, t.imageData),
                    n = !1;
                  (this.draggingPosition.clientX = e.clientX),
                    (this.draggingPosition.clientY = e.clientY),
                    e.touches &&
                      ((this.draggingPosition.clientX = e.touches[0].clientX),
                      (this.draggingPosition.clientY = e.touches[0].clientY));
                  var o = this.draggingPosition.clientY - this.draggingPosition.y,
                    i = this.draggingPosition.clientX - this.draggingPosition.x;
                  (i = Math.min(i, 0)),
                    (o = Math.min(o, 0)),
                    this.allowHorizontal() &&
                      a.imageWidth + i >= this.props.cropSize &&
                      ((a.imageX = i), (n = !0)),
                    this.allowVertical() &&
                      a.imageHeight + o >= this.props.cropSize &&
                      ((a.imageY = o), (n = !0)),
                    n &&
                      ((t.imageData = a),
                      this.setState(t, this.renderImage.bind(this)),
                      this.debug(
                        "[mousemove, touchstart]",
                        r({}, a, { refresh: n })
                      ));
                }
              },
            },
            {
              key: "registerImageEvents",
              value: function () {
                var e = this;
                ["mouseup", "touchend"].forEach(function (t) {
                  window.addEventListener(t, e.onMovingEnd, !1);
                }),
                  ["mousemove", "touchmove"].forEach(function (t) {
                    window.addEventListener(t, e.onMoving, !1);
                  });
              },
            },
            {
              key: "handleDragOut",
              value: function () {
                this.setStatus(d.default.EMPTY), this.debug("[handleDragOut]");
              },
            },
            {
              key: "handleDragOver",
              value: function () {
                this.setStatus(d.default.DRAGOVER),
                  this.debug("[handleDragOver]");
              },
            },
            {
              key: "handleZoom",
              value: function (e) {
                this.scaleImage(Number(e.target.value)),
                  this.props.onZoomChange.call(this, { zoom: e.target.value }),
                  this.debug("[handleZoom]", { zoom: e.target.value });
              },
            },
            {
              key: "handleFileChange",
              value: function (e) {
                this.readFile(e.target.files[0]),
                  (e.target.value = ""),
                  this.debug("[handleFileChange]", { file: e.target.files[0] });
              },
            },
            {
              key: "handleTapToSelect",
              value: function () {
                this.inputFileRef.current.click(),
                  this.debug("[handleTapToSelect]");
              },
            },
            {
              key: "handleOnDrop",
              value: function (e) {
                this.readFile(e), this.debug("[handleOnDrop]", { file: e });
              },
            },
            {
              key: "handleRemove",
              value: function () {
                this.resetState(),
                  this.props.onImageRemoved.call(this),
                  this.debug("[onImageRemoved]");
              },
            },
            {
              key: "allowHorizontal",
              value: function () {
                return (
                  !this.props.constraints ||
                  "horizontal" === this.props.constraints
                );
              },
            },
            {
              key: "allowVertical",
              value: function () {
                return (
                  !this.props.constraints || "vertical" === this.props.constraints
                );
              },
            },
            {
              key: "readFile",
              value: function (e) {
                var t = this;
                this.setStatus(d.default.LOADING),
                  (0, h.fileReader)(e, {
                    onLoadStart: function () {
                      t.props.onImageLoading.call(t), t.debug("[onLoadStart]");
                    },
                    onError: function (e) {
                      t.props.onError.call(t),
                        t.onError(e),
                        t.debug("[onLoadStart]", { error: e });
                    },
                    onLoadEnd: function (a) {
                      var n = a.base64Image,
                        o = r({}, t.state);
                      (o.file = e),
                        t.setState(o),
                        t.processFile(n),
                        t.debug("[onLoadEnd]", { data: a });
                    },
                  });
              },
            },
            {
              key: "processFile",
              value: function (e) {
                var t = this;
                (0, g.processFile)(e, {
                  minImageSize: this.props.minImageSize,
                  maxImageSize: this.props.maxImageSize,
                  onLoad: function (a) {
                    t.onImageDataLoaded(e, a), t.debug("[onLoad]", { data: a });
                  },
                  onError: function (e) {
                    t.props.onError.call(t),
                      t.onError(e),
                      t.debug("[onError]", { error: e });
                  },
                });
              },
            },
            {
              key: "onImageDataLoaded",
              value: function (e, t) {
                var a = r({}, this.state);
                a.loadedData = t;
                var n = this.props,
                  o = n.cropSize,
                  i = n.minZoom,
                  s = n.maxZoom,
                  u = (0, v.fitToFrame)({
                    cropSize: o,
                    imageWidth: t.imageWidth,
                    imageHeight: t.imageHeight,
                    minZoom: i,
                    maxZoom: s,
                  }),
                  l = (0, v.centerImage)({
                    cropSize: o,
                    imageWidth: u.imageWidth,
                    imageHeight: u.imageHeight,
                    imageX: u.imageX,
                    imageY: u.imageY,
                  });
                (u.imageX = l.imageX),
                  (u.imageY = l.imageY),
                  (u.imageSrc = t.imageSrc),
                  (a.imageData = u),
                  (a.status = d.default.LOADED),
                  this.setState(a, this.renderImage.bind(this)),
                  this.props.onImageLoaded.call(this, { data: t }),
                  this.debug("[onImageLoaded]", { data: t });
              },
            },
            {
              key: "scaleImage",
              value: function (e) {
                var t = r({}, this.state),
                  a = r({}, t.imageData),
                  n = r({}, t.loadedData),
                  o = (0, v.scaleImage)(
                    r({}, a, {
                      zoom: e,
                      originalWidth: n.originalImageWidth,
                      originalHeight: n.originalImageHeight,
                      cropSize: this.props.cropSize,
                    })
                  );
                (t.imageData = r({}, a, o, { zoom: e })),
                  this.setState(t, this.renderImage.bind(this)),
                  this.debug("[scaleImage]", { zoom: e, data: t.imageData });
              },
            },
            {
              key: "renderImage",
              value: function () {
                var e = this;
                if (
                  ((0, _.renderToCanvas)(
                    r(
                      {
                        canvas: this.canvasRef.current,
                        cropSize: this.props.cropSize,
                        onError: function (t) {
                          e.onError(t), e.props.onError.call(e, t);
                        },
                      },
                      this.state.imageData
                    )
                  ),
                  this.props.useHelper)
                ) {
                  var t = this.frameRef.current,
                    a = t.offsetLeft,
                    n = t.offsetTop,
                    o = this.photoHelperRef.current,
                    i = o.clientWidth,
                    s = o.clientHeight;
                  (0, _.updateHelper)(
                    r(
                      {
                        canvas: this.helperRef.current,
                        cropSize: this.props.cropSize,
                        onError: function (t) {
                          e.onError(t), e.props.onError.bind(e);
                        },
                        frameTop: n,
                        frameLeft: a,
                        canvasWidth: i,
                        canvasHeight: s,
                      },
                      this.state.imageData
                    )
                  );
                }
                this.props.onImagePropertiesChange.bind(this, {
                  data: r({}, this.state.imageData),
                }),
                  this.debug("[scalrenderImageeImage]", {
                    data: r({}, this.state.imagesData),
                  });
              },
            },
            {
              key: "renderMessages",
              value: function () {
                switch (this.state.status) {
                  case d.default.EMPTY:
                  case d.default.INVALID_FILE_TYPE:
                  case d.default.INVALID_IMAGE_SIZE:
                    return i.default.createElement(
                      u.default,
                      { onClick: this.handleTapToSelect.bind(this) },
                      (0, p.default)(this.props.messages, this.state.status)
                    );
                  case d.default.LOADED:
                    return null;
                  default:
                    return i.default.createElement(
                      u.default,
                      null,
                      (0, p.default)(this.props.messages, this.state.status)
                    );
                }
              },
            },
            {
              key: "onError",
              value: function (e) {
                this.setStatus(e.error);
              },
            },
            {
              key: "getImageAsDataUrl",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
                return this.canvasRef.current.toDataURL(e);
              },
            },
            {
              key: "getData",
              value: function () {
                return r({}, this.state.imageData);
              },
            },
            {
              key: "setImage",
              value: function (e) {
                this.readFile(e);
              },
            },
            {
              key: "debug",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                this.props.debug && console.log(e, r({}, t));
              },
            },
            {
              key: "render",
              value: function () {
                var e = [
                  b.default["profile-picture"],
                  b.default["profile-picture--" + this.state.status],
                ];
                return i.default.createElement(
                  "div",
                  { className: e.join(" ") },
                  i.default.createElement(
                    "div",
                    { className: b.default["profile-picture__photo"] },
                    i.default.createElement(
                      "div",
                      {
                        className: b.default.photo__helper,
                        onMouseDown: this.props.useHelper
                          ? this.dragStart.bind(this)
                          : null,
                        onTouchStart: this.props.useHelper
                          ? this.dragStart.bind(this)
                          : null,
                        ref: this.photoHelperRef,
                      },
                      i.default.createElement(
                        f.default,
                        {
                          onDrop: this.handleOnDrop.bind(this),
                          onDragOver: this.handleDragOver.bind(this),
                          onDragOut: this.handleDragOut.bind(this),
                        },
                        this.props.useHelper
                          ? i.default.createElement("canvas", {
                              className:
                                b.default["profile-picture__canvas-helper"],
                              ref: this.helperRef,
                            })
                          : null,
                        i.default.createElement(
                          l.default,
                          {
                            frameRef: this.frameRef,
                            size: this.props.cropSize,
                            format: this.props.frameFormat,
                          },
                          i.default.createElement("canvas", {
                            onMouseDown: this.props.useHelper
                              ? null
                              : this.dragStart.bind(this),
                            onTouchStart: this.props.useHelper
                              ? null
                              : this.dragStart.bind(this),
                            width: this.props.cropSize,
                            height: this.props.cropSize,
                            className: b.default["profile-picture__canvas"],
                            ref: this.canvasRef,
                          }),
                          this.renderMessages()
                        )
                      )
                    ),
                    i.default.createElement(
                      "div",
                      { className: b.default.photo__options },
                      this.state.status === d.default.LOADED
                        ? i.default.createElement(
                            o.Fragment,
                            null,
                            i.default.createElement(
                              "div",
                              { className: b.default.options__zoom },
                              i.default.createElement(c.default, {
                                min: this.state.imageData.minZoom,
                                max: this.state.imageData.maxZoom,
                                value: this.state.imageData.zoom,
                                onChange: this.handleZoom.bind(this),
                              })
                            ),
                            i.default.createElement(
                              "div",
                              { className: b.default.options__remove },
                              i.default.createElement(
                                "button",
                                {
                                  className: b.default.remove__button,
                                  onClick: this.handleRemove.bind(this),
                                },
                                i.default.createElement(m.default, {
                                  name: "trash",
                                  size: 20,
                                })
                              )
                            )
                          )
                        : null
                    )
                  ),
                  i.default.createElement("input", {
                    className: b.default["profile-picture__input"],
                    type: "file",
                    accept: "image/jpg,image/jpeg,image/png,image/bmp,image/gif",
                    ref: this.inputFileRef,
                    onChange: this.handleFileChange.bind(this),
                  })
                );
              },
            },
          ]),
          t
        );
      })(o.Component);
      (y.propTypes = {
        image: s.default.string,
        frameSize: s.default.number.isRequired,
        frameFormat: s.default.oneOf(["circle", "square", "rounded-square"]),
        cropSize: s.default.number.isRequired,
        minZoom: s.default.number.isRequired,
        maxZoom: s.default.number.isRequired,
        minImageSize: s.default.number.isRequired,
        maxImageSize: s.default.number.isRequired,
        useHelper: s.default.bool.isRequired,
        debug: s.default.bool.isRequired,
        messages: s.default.object,
        constraints: s.default.oneOf(["horizontal", "vertical"]),
        onImagePropertiesChange: s.default.func,
        onImageLoading: s.default.func,
        onImageLoaded: s.default.func,
        onImageRemoved: s.default.func,
        onError: s.default.func,
        onZoomChange: s.default.func,
        onStatusChange: s.default.func,
      }),
        (y.defaultProps = {
          frameSize: 160,
          frameFormat: "rounded-square",
          cropSize: 160,
          minZoom: 0.1,
          maxZoom: 2,
          minImageSize: 320,
          maxImageSize: 1e3,
          useHelper: !1,
          debug: !1,
          messages: {
            DEFAULT: "Drop your photo here or tap to select.",
            DRAGOVER: "Drop your photo",
            INVALID_FILE_TYPE: "Only images allowed.",
            INVALID_IMAGE_SIZE: "Your photo must be larger than 350px.",
          },
          onImagePropertiesChange: function () {},
          onImageLoading: function () {},
          onImageLoaded: function () {},
          onError: function () {},
          onZoomChange: function () {},
          onStatusChange: function () {},
          onImageRemoved: function () {},
        }),
        (t.default = y);
    },
    function (e, t, a) {
      "use strict";
      var r = a(6);
      function n() {}
      function o() {}
      (o.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, a, n, o, i) {
            if (i !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var a = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: n,
          };
          return (a.PropTypes = a), a;
        });
    },
    function (e, t, a) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
          };
        })(),
        n = a(0),
        o = u(n),
        i = u(a(1)),
        s = u(a(17));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function (e) {
        function t(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "div",
                  { className: s.default.message },
                  this.props.onClick
                    ? o.default.createElement(
                        "button",
                        {
                          className: s.default.message__button,
                          onClick: this.props.onClick,
                        },
                        o.default.createElement(
                          "div",
                          { className: s.default.message__content },
                          this.props.children
                        )
                      )
                    : o.default.createElement(
                        "div",
                        { className: s.default.message__content },
                        this.props.children
                      )
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      (l.propTypes = { onClick: i.default.func }), (t.default = l);
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
          };
        })(),
        n = a(0),
        o = u(n),
        i = u(a(1)),
        s = u(a(22));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var f = (function (e) {
        function t() {
          return (
            l(this, t),
            c(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: "render",
              value: function () {
                var e = {
                    circle: s.default["frame--circle"],
                    square: s.default["frame--square"],
                    "rounded-square": s.default["frame--rounded-square"],
                  },
                  t = [s.default.frame, e[this.props.format]],
                  a = {
                    width: this.props.size + "px",
                    height: this.props.size + "px",
                  };
                return o.default.createElement(
                  "div",
                  { className: t.join(" "), style: a, ref: this.props.frameRef },
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      (f.propTypes = {
        size: i.default.number.isRequired,
        format: i.default.oneOf(["circle", "square", "rounded-square"]),
      }),
        (f.defaultProps = { size: 160, format: "circle" }),
        (t.default = f);
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
          };
        })(),
        n = a(0),
        o = l(n),
        i = l(a(1)),
        s = l(a(2)),
        u = l(a(24));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var a = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (a.state = { limitReached: "MIN" }), a;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: "onChange",
              value: function (e) {
                var t = Number(e.target.value).toFixed(2),
                  a = !1;
                t === Number(this.props.min).toFixed(2) && (a = "MIN"),
                  t === Number(this.props.max).toFixed(2) && (a = "MAX"),
                  this.setState({ limitReached: a }),
                  this.props.onChange.call(this, e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = [
                    u.default["zoom-scale__min"],
                    u.default["zoom-scale__icon"],
                  ],
                  t = [
                    u.default["zoom-scale__max"],
                    u.default["zoom-scale__icon"],
                  ];
                return (
                  "MIN" === this.state.limitReached &&
                    e.push(u.default["zoom-scale__icon--disabled"]),
                  "MAX" === this.state.limitReached &&
                    t.push(u.default["zoom-scale__icon--disabled"]),
                  o.default.createElement(
                    "div",
                    { className: u.default["zoom-scale"] },
                    o.default.createElement(s.default, {
                      name: "picture",
                      size: 17,
                      className: e.join(" "),
                    }),
                    o.default.createElement("input", {
                      type: "range",
                      className: u.default["zoom-scale__handler"],
                      max: Number(this.props.max).toFixed(2),
                      min: Number(this.props.min).toFixed(2),
                      step: Number(this.props.step).toFixed(2),
                      value: Number(this.props.value).toFixed(2),
                      onChange: this.onChange.bind(this),
                    }),
                    o.default.createElement(s.default, {
                      name: "picture",
                      size: 20,
                      className: t.join(" "),
                    })
                  )
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      (c.propTypes = {
        min: i.default.number.isRequired,
        max: i.default.number.isRequired,
        step: i.default.number.isRequired,
        value: i.default.number.isRequired,
        onChange: i.default.func,
      }),
        (c.defaultProps = {
          min: 0,
          max: 1,
          step: 0.01,
          value: 0.5,
          onChange: function () {},
        }),
        (t.default = c);
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = {
        trash:
          "M63.281 13.281v6.719h-46.563v-6.719h11.563l3.438-3.281h16.563l3.438 3.281h11.563zM20 63.281v-40h40v40c0 3.594-3.125 6.719-6.719 6.719h-26.563c-3.594 0-6.719-3.125-6.719-6.719z",
        picture:
          "M28.281 45l-11.563 15h46.563l-15-20-11.563 15zM70 63.281c0 3.594-3.125 6.719-6.719 6.719h-46.563c-3.594 0-6.719-3.125-6.719-6.719v-46.563c0-3.594 3.125-6.719 6.719-6.719h46.563c3.594 0 6.719 3.125 6.719 6.719v46.563z",
        upload:
          "M46.719 43.281h10l-16.719-16.563-16.719 16.563h10v13.438h13.438v-13.438zM64.531 33.438c8.594 0.625 15.469 7.813 15.469 16.563 0 9.219-7.5 16.719-16.719 16.719h-43.281c-11.094 0-20-8.906-20-20 0-10.313 7.813-18.75 17.813-19.844 4.219-7.969 12.5-13.594 22.188-13.594 12.188 0 22.188 8.594 24.531 20.156z",
        loading:
          "M40 38.281l13.281-13.281v-11.719h-26.563v11.719zM53.281 55l-13.281-13.281-13.281 13.281v11.719h26.563v-11.719zM20 6.719h40v20l-13.281 13.281 13.281 13.281v20h-40v-20l13.281-13.281-13.281-13.281v-20z",
      };
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
          };
        })(),
        o = a(0),
        i = u(o),
        s = u(a(1));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var a = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (a.preventDefault = a.preventDefault.bind(a)),
            (a.dropzoneElement = i.default.createRef()),
            (a.state = { status: "IDLE" }),
            a
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          n(t, [
            {
              key: "preventDefault",
              value: function (e) {
                e.preventDefault(), (e.dataTransfer.dropEffect = "copy");
              },
            },
            {
              key: "handleDrop",
              value: function (e) {
                this.setStatus(),
                  e.stopPropagation(),
                  "function" == typeof this.props.onDrop &&
                    this.props.onDrop.call(this, e.dataTransfer.files[0]);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var e = this,
                  t = this.dropzoneElement.current;
                [
                  "drag",
                  "dragstart",
                  "dragend",
                  "dragover",
                  "dragenter",
                  "dragleave",
                  "drop",
                ].forEach(function (a) {
                  t.addEventListener(a, e.preventDefault, !1);
                });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                var e = this,
                  t = this.dropzoneElement.current;
                [
                  "drag",
                  "dragstart",
                  "dragend",
                  "dragover",
                  "dragenter",
                  "dragleave",
                  "drop",
                ].forEach(function (a) {
                  t.removeEventListener(a, e.preventDefault, !1);
                });
              },
            },
            {
              key: "setStatus",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "IDLE",
                  t = r({}, this.state);
                t.status !== e &&
                  ("IDLE" === e &&
                    "function" == typeof this.props.onDragOut &&
                    this.props.onDragOut.call(this),
                  "OVER" === e &&
                    "function" == typeof this.props.onDragOver &&
                    this.props.onDragOver.call(this),
                  (t.status = e),
                  this.setState(t));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return i.default.createElement(
                  "div",
                  {
                    ref: this.dropzoneElement,
                    onDragEnter: function () {
                      return e.setStatus("OVER");
                    },
                    onDragOver: function () {
                      return e.setStatus("OVER");
                    },
                    onDragLeave: function () {
                      return e.setStatus();
                    },
                    onDrop: this.handleDrop.bind(this),
                  },
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(o.Component);
      (l.propTypes = { onDrop: s.default.func }),
        (l.defaultProps = {
          onDrop: function () {},
          onDragOver: function () {},
          onDragOut: function () {},
        }),
        (t.default = l);
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(0),
        n = u(r),
        o = u(a(3)),
        i = u(a(2)),
        s = u(a(17));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e, t) {
        switch (t) {
          case o.default.EMPTY:
            return n.default.createElement(
              "p",
              { className: s.default.message__text },
              e.DEFAULT
            );
          case o.default.LOADING:
            return n.default.createElement(i.default, {
              name: "loading",
              size: 48,
            });
          case o.default.DRAGOVER:
            return n.default.createElement(
              r.Fragment,
              null,
              n.default.createElement(i.default, { name: "upload", size: 48 }),
              n.default.createElement(
                "p",
                { className: s.default.message__text },
                e.DRAGOVER
              )
            );
          case o.default.INVALID_FILE_TYPE:
            return n.default.createElement(
              r.Fragment,
              null,
              n.default.createElement(
                "p",
                { className: s.default.message__text },
                e.INVALID_FILE_TYPE
              ),
              n.default.createElement(
                "p",
                { className: s.default.message__text },
                e.DEFAULT
              )
            );
          case o.default.INVALID_IMAGE_SIZE:
            return n.default.createElement(
              r.Fragment,
              null,
              n.default.createElement(
                "p",
                { className: s.default.message__text },
                e.INVALID_IMAGE_SIZE
              ),
              n.default.createElement(
                "p",
                { className: s.default.message__text },
                e.DEFAULT
              )
            );
          case o.default.LOADED:
            return null;
        }
      };
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        };
      (t.fileReader = function (e, t) {
        var a = r(
            {
              onError: function () {},
              onLoadStart: function () {},
              onLoadEnd: function () {},
            },
            t
          ),
          n = new FileReader();
        return (
          (n.onloadstart = function () {
            "function" == typeof a.onLoadStart &&
              a.onLoadStart.call(void 0, { file: e });
          }),
          (n.onloadend = function (t) {
            "function" == typeof a.onLoadEnd &&
              a.onLoadEnd.call(void 0, {
                base64Image: t.target.result,
                type: e.type,
              });
          }),
          (n.onerror = function () {
            "function" == typeof a.onError &&
              a.onError.call(void 0, { error: "UNKNOWN" });
          }),
          e.type.match("image.*") ||
            ("function" == typeof a.onError &&
              a.onError.call(void 0, { error: "INVALID_FILE_TYPE" })),
          n.readAsDataURL(e),
          n
        );
      }),
        (t.UNKNOWN = "UNKNOWN"),
        (t.INVALID_FILE_TYPE = "INVALID_FILE_TYPE");
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        };
      (t.processFile = function (e, t) {
        var a = new Image();
        a.crossOrigin = "anonymous";
        var n = r(
          {
            minImageSize: 320,
            maxImageSize: 1e3,
            onError: function () {},
            onLoad: function () {},
          },
          t
        );
        (a.onload = function () {
          var e = void 0,
            t = void 0,
            r = void 0,
            o = a.width,
            i = a.height;
          if (
            (o < n.minImageSize || i < n.minImageSize) &&
            "function" == typeof n.onError
          )
            return n.onError.call(void 0, { error: "INVALID_IMAGE_SIZE" });
          n.maxImageSize / n.maxImageSize > n.imageHeight / n.imageWidth
            ? ((e = (t = n.maxImageSize) / i), (r = parseFloat(o) * e))
            : ((e = (r = n.maxImageSize) / o), (t = parseFloat(i) * e));
          var s = {
            imageSrc: a,
            newWidth: r,
            newHeight: t,
            imageWidth: o,
            imageHeight: i,
            originalImageWidth: o,
            originalImageHeight: i,
            imageX: 0,
            imageY: 0,
            ratio: e,
          };
          return "function" == typeof n.onLoad
            ? n.onLoad.call(void 0, s)
            : void 0;
        }),
          (a.src = e);
      }),
        (t.INVALID_IMAGE_SIZE = "INVALID_IMAGE_SIZE"),
        (t.isDataUrl = function (e) {
          return !!(e = e.toString()).match(
            /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
          );
        });
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          },
        n = function (e, t, a) {
          var n = r(
              {
                imageX: 0,
                imageY: 0,
                cropSize: 160,
                imageWidth: 320,
                imageHeight: 320,
              },
              a
            ),
            o = (n.imageY - n.cropSize / 2) / n.imageHeight,
            i = (n.imageX - n.cropSize / 2) / n.imageWidth,
            s = o * t + n.cropSize / 2,
            u = i * e + n.cropSize / 2;
          return (
            (s = Math.min(s, 0)),
            e + (u = Math.min(u, 0)) < n.cropSize &&
              (u = -1 * Math.abs(e - n.cropSize)),
            t + s < n.cropSize && (s = -1 * Math.abs(t - n.cropSize)),
            { imageX: u, imageY: s }
          );
        };
      (t.fitToFrame = function (e) {
        var t = r(
            {
              cropSize: 160,
              imageWidth: 320,
              imageHeight: 320,
              minZoom: 0.1,
              maxZoom: 2,
            },
            e
          ),
          a = void 0,
          n = void 0,
          o = void 0;
        return (
          t.cropSize / t.cropSize > t.imageHeight / t.imageWidth
            ? ((o = (a = t.cropSize) / t.imageHeight),
              (n = parseFloat(t.imageWidth) * o))
            : ((o = (n = t.cropSize) / t.imageWidth),
              (a = parseFloat(t.imageHeight) * o)),
          {
            scaleRatio: o,
            minZoom: o,
            maxZoom: t.maxZoom - o,
            zoom: o,
            imageWidth: n,
            imageHeight: a,
          }
        );
      }),
        (t.centerImage = function (e) {
          var t = r(
            {
              cropSize: 160,
              imageWidth: 320,
              imageHeight: 320,
              imageX: 0,
              imageY: 0,
            },
            e
          );
          (t.imageX = t.imageX || 0), (t.imageY = t.imageY || 0);
          var a = Math.abs(t.imageX - (t.imageWidth - t.cropSize) / 2),
            n = Math.abs(t.imageY - (t.imageHeight - t.cropSize) / 2);
          return (
            (a = t.imageX - a),
            (n = t.imageY - n),
            (a = Math.min(a, 0)),
            (n = Math.min(n, 0)),
            t.imageWidth + a < t.cropSize &&
              (a = -1 * Math.abs(t.imageWidth - t.cropSize)),
            t.imageHeight + n < t.cropSize &&
              (n = -1 * Math.abs(t.imageHeight - t.cropSize)),
            { imageX: a, imageY: n }
          );
        }),
        (t.getPosition = n),
        (t.scaleImage = function (e) {
          var t = r({ zoom: 0.1, originalWidth: 320, originalHeight: 320 }, e),
            a = Math.ceil(t.originalWidth * t.zoom),
            o = Math.ceil(t.originalHeight * t.zoom);
          (a = Math.max(a, e.cropSize)), (o = Math.max(o, e.cropSize));
          var i = n(a, o, e);
          return {
            imageWidth: a,
            imageHeight: o,
            imageX: i.imageX,
            imageY: i.imageY,
          };
        });
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
          return e;
        };
      (t.renderToCanvas = function (e) {
        var t = r(
          {
            canvas: null,
            cropSize: 160,
            imageSrc: null,
            imageX: 0,
            imageY: 0,
            imageWidth: 320,
            imageHeight: 320,
            onError: function () {},
          },
          e
        );
        t.canvas ||
          ("function" == typeof t.onError &&
            t.onError.call(void 0, { error: "INVALID_CANVAS" })),
          t.imageSrc ||
            ("function" == typeof t.onError &&
              t.onError.call(void 0, { error: "INVALID_IMAGESRC" }));
        var a = t.canvas.getContext("2d");
        a.clearRect(0, 0, t.cropSize, t.cropSize),
          a.save(),
          (a.globalCompositeOperation = "destination-over"),
          a.drawImage(
            t.imageSrc,
            t.imageX,
            t.imageY,
            t.imageWidth,
            t.imageHeight
          ),
          a.restore();
      }),
        (t.updateHelper = function (e) {
          var t = r(
            {
              canvas: null,
              imageSrc: null,
              imageX: 0,
              imageY: 0,
              imageWidth: 320,
              imageHeight: 320,
              rgbaColor: "rgba(255,255,255,.90)",
              frameLeft: 0,
              frameTop: 0,
              canvasWidth: 0,
              canvasHeight: 0,
              onError: function () {},
            },
            e
          );
          t.canvas ||
            ("function" == typeof t.onError &&
              t.onError.call(void 0, { error: "INVALID_CANVAS" })),
            t.imageSrc ||
              ("function" == typeof t.onError &&
                t.onError.call(void 0, { error: "INVALID_IMAGESRC" }));
          var a = t.imageX + t.frameLeft,
            n = t.imageY + t.frameTop;
          (t.canvas.width = t.canvasWidth), (t.canvas.height = t.canvasHeight);
          var o = t.canvas.getContext("2d");
          o.clearRect(0, 0, t.canvasWidth, t.canvasHeight),
            o.save(),
            (o.globalCompositeOperation = "destination-over"),
            o.beginPath(),
            o.rect(0, 0, t.canvasWidth, t.canvasHeight),
            (o.fillStyle = t.rgbaColor),
            o.fill("evenodd"),
            o.drawImage(t.imageSrc, a, n, t.imageWidth, t.imageHeight),
            o.restore();
        }),
        (t.clearCanvas = function (e) {
          var t = e.photoCanvas,
            a = e.helperCanvas,
            r = e.cropSize,
            n = e.helperWidth,
            o = e.helperHeight,
            i = t.getContext("2d");
          if ((i.clearRect(0, 0, r, r), i.save(), a)) {
            var s = a.getContext("2d");
            s.clearRect(0, 0, n, o), s.save();
          }
        }),
        (t.INVALID_CANVAS = "INVALID_CANVAS"),
        (t.INVALID_IMAGESRC = "INVALID_IMAGESRC");
    },
    function (e, t) {
      e.exports = {
        message: "YpD9o6H9LydyYmaPWOwt",
        message__content: "_6IMSWtd3wtGGn2KgOcZIK",
        message__text: "fe6xZVPr1kb0CJksW39zV",
        message__button: "eXEoGG26iwSi6UiZD8FI6",
      };
    },
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports = {
        frame: "_2oSbenaQCQZPXOD75Sj6nE",
        "frame--circle": "_2D3XigQoPKPCPCHAaOtqJP",
        "frame--rounded-square": "_3m334JNOLa1lrKCCrXnNDG",
      };
    },
    ,
    function (e, t) {
      e.exports = {
        "zoom-scale": "_1MKAF96uXJHSW-a1nWoriQ",
        "zoom-scale__handler": "kWobJZ5IBLVJtFBD9JHAQ",
        "zoom-scale__min": "_23VzqtDiBsdmyddgDcP2FF",
        "zoom-scale__max": "_2JJI18xT4B0iIKyuZLMpk9",
        "zoom-scale__icon--disabled": "_3L1oDMFmgTzTs8MCYm-pXt",
      };
    },
    ,
    function (e, t) {
      e.exports = {
        "profile-picture": "_1Fq_tZ_l7SwH_r_a_SNOtA",
        "profile-picture--EMPTY": "_1zaTZoyOruLA27LomLt6fx",
        frame: "_34KU8GIMgtEHCcQX2pjZJE",
        "profile-picture--INVALID_FILE_TYPE": "_1KYh_YChgsCwB4c5gd4q1k",
        "profile-picture--INVALID_IMAGE_SIZE": "_1Sok0Akre9PW5C22TIkrKD",
        "profile-picture--LOADED": "_1PTKmYTPmkH41HyPQ6Yp1q",
        "profile-picture__canvas-helper": "_33ob_2Sxjrzz9VgWuEn9xb",
        "profile-picture__input": "_2Y6QsytFkIen8EZ8qRminO",
        photo: "_3pDZ7o2d3BEKT7GOFhs90M",
        photo__helper: "_1Ou1tAFc1VCD4TNa0XwE7z",
        photo__options: "GNSzzq7thIGJvQKQMnUF4",
        options__zoom: "_34iiqkc-jTKb3N7DvLLkwC",
        options__remove: "_10Kns8R3VdHSGFrESIz-4B",
        remove__button: "_1YelFC_KTV9aLijs9ogXcQ",
        "profile-picture__canvas": "_1DghVSjROos1S_s0jPt9TQ",
      };
    },
  ]);
  