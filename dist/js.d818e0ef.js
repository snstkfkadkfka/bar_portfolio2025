// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/index.js":[function(require,module,exports) {
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* page2, page4, page6 scroll Animation */
var ScrollBase = /*#__PURE__*/function () {
  function ScrollBase(mainSelector, stickySelector) {
    _classCallCheck(this, ScrollBase);
    this.main = document.querySelector(mainSelector);
    this.sticky = document.querySelector(stickySelector);
    this.start = 0;
    this.end = 0;
    this.ticking = false;
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }
  return _createClass(ScrollBase, [{
    key: "init",
    value: function init() {
      // 각 클래스에서 오버라이드
    }
  }, {
    key: "animate",
    value: function animate() {
      // 각 클래스에서 오버라이드
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var _this = this;
      if (!this.ticking) {
        this.ticking = true;
        window.requestAnimationFrame(function () {
          _this.animate();
          _this.ticking = false;
        });
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var _this2 = this;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(function () {
        _this2.init();
        _this2.animate();
      }, 200);
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this3 = this;
      window.addEventListener("scroll", this.onScroll);
      window.addEventListener("resize", this.onResize);
      document.addEventListener("DOMContentLoaded", function () {
        _this3.init();
        _this3.animate();
      });
    }
  }]);
}(); // page2 스크롤 애니메이션
var Page2Scroll = /*#__PURE__*/function (_ScrollBase) {
  function Page2Scroll(mainSelector, stickySelector) {
    var _this4;
    _classCallCheck(this, Page2Scroll);
    _this4 = _callSuper(this, Page2Scroll, [mainSelector, stickySelector]);
    _this4.rebon1 = _this4.sticky.querySelector('.rebon1');
    _this4.rebon2 = _this4.sticky.querySelector('.rebon2');
    _this4.text = _this4.sticky.querySelector('.page2__text');
    _this4.step = 0;
    return _this4;
  }
  _inherits(Page2Scroll, _ScrollBase);
  return _createClass(Page2Scroll, [{
    key: "init",
    value: function init() {
      this.start = this.main.offsetTop - 300;
      this.end = this.main.offsetTop + this.main.offsetHeight - window.innerHeight;
      this.step = (this.end - this.start) / 8;
    }
  }, {
    key: "animate",
    value: function animate() {
      var scrollY = window.scrollY;
      var s = this.start;
      var e = this.end;
      var step = this.step;
      var maxAnimRebon1 = s + step * 6;
      var maxAnimRebon2 = s + step * 7;

      // rebon1
      if (this.rebon1) {
        var transform = '';
        var opacity = '';
        if (scrollY <= s) {
          transform = "translateX(-190vw) translateY(30vh) scale(0.5)";
          opacity = '0.1';
        } else if (scrollY < maxAnimRebon1) {
          var progress = (scrollY - s) / (step * 6);
          var moveX = -190 + progress * 230;
          var moveY = 30 - progress * 40;
          transform = "translateX(".concat(moveX, "vw) translateY(").concat(moveY, "vh) scale(0.5)");
          opacity = '0.1';
        } else if (scrollY <= e + window.innerHeight) {
          transform = "translateX(40vw) translateY(-10vh) scale(0.5)";
          var fadeProgress = 0.1 * (1 - (scrollY - e) / window.innerHeight);
          opacity = fadeProgress.toFixed(2);
        } else {
          opacity = '0';
        }
        this.rebon1.style.transform = transform;
        this.rebon1.style.opacity = opacity;
      }

      // rebon2
      if (this.rebon2) {
        var _transform = '';
        var _opacity = '';
        if (scrollY <= s) {
          _transform = "translateX(160vw) translateY(0vh) scale(0.5)";
          _opacity = '0.5';
        } else if (scrollY < maxAnimRebon1) {
          var _progress = (scrollY - s) / (step * 6);
          var _moveX = 160 + _progress * -110;
          var _moveY = 0 - _progress * -10;
          _transform = "translateX(".concat(_moveX, "vw) translateY(").concat(_moveY, "vh) scale(0.5)");
          _opacity = '0.5';
        } else if (scrollY <= e + window.innerHeight) {
          _transform = "translateX(50vw) translateY(10vh) scale(0.5)";
          var _fadeProgress = 0.5 * (1 - (scrollY - e) / window.innerHeight);
          _opacity = _fadeProgress.toFixed(2);
        } else {
          _opacity = '0';
        }
        this.rebon2.style.transform = _transform;
        this.rebon2.style.opacity = _opacity;
      }

      // text
      if (this.text) {
        var _transform2 = '';
        var _opacity2 = '';
        if (scrollY <= s) {
          _transform2 = "scale(1)";
          _opacity2 = "0";
        } else if (scrollY < maxAnimRebon2) {
          var _progress2 = (scrollY - s) / (step * 7);
          var scaleValue = 1 + _progress2 * 0.5;
          _transform2 = "scale(".concat(scaleValue, ")");
          _opacity2 = "".concat(_progress2.toFixed(2));
        } else {
          _transform2 = "scale(1.5)";
          _opacity2 = '1';
        }
        this.text.style.transform = _transform2;
        this.text.style.opacity = _opacity2;
      }
    }
  }]);
}(ScrollBase); // page4 스크롤 애니메이션
var Page4Scroll = /*#__PURE__*/function (_ScrollBase2) {
  function Page4Scroll(mainSelector, stickySelector) {
    var _this5;
    _classCallCheck(this, Page4Scroll);
    _this5 = _callSuper(this, Page4Scroll, [mainSelector, stickySelector]);
    _this5.h2El = _this5.sticky.querySelector("h2");
    _this5.even = _this5.sticky.querySelectorAll(".even div");
    _this5.odd = _this5.sticky.querySelectorAll(".odd div");
    _this5.texts = _this5.sticky.querySelectorAll(".page4__text p");
    _this5.circle = _this5.sticky.querySelector(".circle_bg");
    return _this5;
  }
  _inherits(Page4Scroll, _ScrollBase2);
  return _createClass(Page4Scroll, [{
    key: "init",
    value: function init() {
      this.start = this.main.offsetTop - window.innerHeight;
      this.end = this.main.offsetTop + this.main.offsetHeight - window.innerHeight * 1.5;
    }
  }, {
    key: "animate",
    value: function animate() {
      var scrollY = window.scrollY;
      var s = this.start;
      var e = this.end;

      // even
      this.even.forEach(function (content) {
        if (scrollY <= s) {
          content.style.transform = "translateY(-200vh)";
          content.style.filter = 'brightness(120%)';
        } else if (scrollY > s && scrollY < e) {
          var progress = (scrollY - s) / (e - s);
          var move = -200 + progress * 200;
          var brightness = 120 - progress * 90;
          var rounded = Math.round(brightness / 10) * 10;
          content.style.transform = "translateY(".concat(move, "vh)");
          content.style.filter = "brightness(".concat(rounded, "%)");
        } else {
          content.style.transform = "translateY(0vh)";
          content.style.filter = "brightness(30%)";
        }
      });

      // odd
      this.odd.forEach(function (content) {
        if (scrollY <= s) {
          content.style.transform = "translateY(200vw)";
          content.style.filter = 'brightness(120%)';
        } else if (scrollY > s && scrollY < e) {
          var progress = (scrollY - s) / (e - s);
          var brightness = 120 - progress * 90;
          var rounded = Math.round(brightness / 10) * 10;
          var move = 200 - progress * 200;
          content.style.transform = "translateY(".concat(move, "vw)");
          content.style.filter = "brightness(".concat(rounded, "%)");
        } else {
          content.style.transform = "translateY(0vw)";
          content.style.filter = "brightness(30%)";
        }
      });

      // texts
      this.texts.forEach(function (text, i) {
        var startLeft = [-250, -200, -100];
        var endRight = [100, 100, 120];
        var startRight = [440, 400, 500];
        var endLeft = [-100, -60, -70];
        var totalScroll = e - s;
        var progress = (scrollY - s) / totalScroll;
        if (i <= 2) {
          if (scrollY <= s) {
            text.style.transform = "translateX(".concat(startLeft[i], "vw)");
          } else if (scrollY > s && scrollY < e) {
            var currentX = startLeft[i] + (endRight[i] - startLeft[i]) * progress;
            text.style.transform = "translateX(".concat(currentX, "vw)");
          } else {
            text.style.transform = "translateX(".concat(endRight[i], "vw)");
          }
        } else {
          var index = i - 3;
          if (scrollY <= s) {
            text.style.transform = "translateX(".concat(startRight[index], "vw)");
          } else if (scrollY > s && scrollY < e) {
            var _currentX = startRight[index] + (endLeft[index] - startRight[index]) * progress;
            text.style.transform = "translateX(".concat(_currentX, "vw)");
          } else {
            text.style.transform = "translateX(".concat(endLeft[index], "vw)");
          }
        }
      });

      // circle background
      if (scrollY <= s) {
        this.circle.style.transform = 'translateX(-50%) translateY(70vh)';
        this.sticky.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))';
        this.h2El.style.opacity = '0';
      } else if (scrollY > s && scrollY < e) {
        var progress = (scrollY - s) / (e - s);
        var move = 70 - progress * 70;
        var alpha = 0 + progress * 0.9;
        var roundedAlpha = alpha.toFixed(2);
        this.circle.style.transform = "translateX(-50%) translateY(".concat(move, "vh)");
        this.sticky.style.backgroundImage = "linear-gradient(rgba(0,0,0,".concat(roundedAlpha, "), rgba(0,0,0,").concat(roundedAlpha, "))");
        this.h2El.style.opacity = roundedAlpha;
      } else {
        this.circle.style.transform = 'translateX(-50%) translateY(0vh)';
        this.sticky.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))";
        this.h2El.style.opacity = '1';
      }
    }
  }]);
}(ScrollBase); // page6 스크롤 애니메이션
var Page6Scroll = /*#__PURE__*/function (_ScrollBase3) {
  function Page6Scroll(mainSelector, stickySelector) {
    var _this6;
    _classCallCheck(this, Page6Scroll);
    _this6 = _callSuper(this, Page6Scroll, [mainSelector, stickySelector]);
    _this6.images = _this6.sticky.querySelector('.page6__img');
    _this6.h2El = _this6.sticky.querySelector('.page6__text');
    _this6.liEl = _this6.images.querySelectorAll('ul li');
    return _this6;
  }
  _inherits(Page6Scroll, _ScrollBase3);
  return _createClass(Page6Scroll, [{
    key: "init",
    value: function init() {
      var vh = window.innerHeight;
      this.start = this.main.offsetTop - vh;
      this.end = this.main.offsetTop + this.main.offsetHeight - vh;
    }
  }, {
    key: "animate",
    value: function animate() {
      var scrollY = window.scrollY;
      var s = this.start;
      var e = this.end;
      if (scrollY <= s) {
        this.images.style.transform = 'translate3d(100vh, 0, 0)';
        this.h2El.style.opacity = '0';
        this.liEl.forEach(function (li) {
          li.style.filter = 'opacity(1) grayscale(0)';
        });
      } else if (scrollY > s && scrollY < e) {
        var progress = (scrollY - s) / (e - s);
        var move = 100 + progress * -350;
        var opacity = 1 - progress * 0.7;
        var grayscale = progress * 0.8;
        var alpha = progress * 0.9;
        this.images.style.transform = "translate3d(".concat(move, "vh, 0, 0)");
        this.h2El.style.opacity = alpha;
        this.liEl.forEach(function (li) {
          li.style.filter = "opacity(".concat(opacity, ") grayscale(").concat(grayscale, ")");
        });
      } else {
        this.images.style.transform = 'translate3d(-250vh, 0, 0)';
        this.h2El.style.opacity = '1';
        this.liEl.forEach(function (li) {
          li.style.filter = 'opacity(0.3) grayscale(0.8)';
        });
      }
    }
  }]);
}(ScrollBase); // 인스턴스 생성 및 이벤트 등록
var page2Scroll = new Page2Scroll("#page2", ".page2__inner");
var page4Scroll = new Page4Scroll("#page4", ".page4__inner");
var page6Scroll = new Page6Scroll("#page6", ".page6__inner");

// 공통 이벤트 등록
function onScroll() {
  page2Scroll.onScroll();
  page4Scroll.onScroll();
  page6Scroll.onScroll();
}
function onResize() {
  page2Scroll.onResize();
  page4Scroll.onResize();
  page6Scroll.onResize();
}
document.addEventListener("DOMContentLoaded", function () {
  page2Scroll.init();
  page4Scroll.init();
  page6Scroll.init();
  page2Scroll.animate();
  page4Scroll.animate();
  page6Scroll.animate();
});
window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onResize);

/* page3 skill tep */
{
  var skillBut = document.querySelector('.page3__side__skill .button');
  var skillBox = document.querySelector('.page3__side__skill');
  skillBut.addEventListener("click", function () {
    skillBox.classList.toggle('active');
  });
}
/* page5 swiper */
{
  var prevIndex = 0;
  var allTextArticles = document.querySelectorAll('.page5__text__inner article');
  var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 1,
    freeMode: false,
    slideToClickedSlide: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      slideChange: function slideChange() {
        var currentIndex = this.realIndex;
        if (prevIndex !== currentIndex) {
          if (allTextArticles[prevIndex]) {
            allTextArticles[prevIndex].classList.remove('active');
          }
          if (allTextArticles[currentIndex]) {
            allTextArticles[currentIndex].classList.add('active');
          }
          prevIndex = currentIndex;
        }
      }
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  allTextArticles.forEach(function (el, index) {
    el.classList.toggle('active', index === 0);
  });
}

/* page7 click Event */
{
  var clickBnt = document.querySelector('.page7__click p');
  var morImg = document.querySelector('.page7__inner');
  clickBnt.addEventListener("click", function () {
    morImg.classList.toggle("active");
  });
}

/* scrollToplugin */
{
  var scrollToTarget = function scrollToTarget(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    gsap.to(window, {
      scrollTo: target,
      duration: duration,
      ease: 'power2.out'
    });
  };

  // header
  var headerMenu = document.querySelector('.page1__menu');
  headerMenu.querySelector('.home').addEventListener('click', function () {
    return scrollToTarget(0, 0.8);
  });
  headerMenu.querySelector('.profile').addEventListener('click', function () {
    return scrollToTarget('#page3', 1);
  });
  headerMenu.querySelector('.ux').addEventListener('click', function () {
    return scrollToTarget('#page5', 1);
  });
  headerMenu.querySelector('.graphic').addEventListener('click', function () {
    return scrollToTarget('#page7', 1);
  });

  // footer
  var footerMenu = document.querySelector('.page8__menu');
  footerMenu.querySelector('.home').addEventListener('click', function () {
    return scrollToTarget(0, 0.8);
  });
  footerMenu.querySelector('.profile').addEventListener('click', function () {
    return scrollToTarget('#page3', 1);
  });
  footerMenu.querySelector('.ux').addEventListener('click', function () {
    return scrollToTarget('#page5', 1);
  });
  footerMenu.querySelector('.graphic').addEventListener('click', function () {
    return scrollToTarget('#page7', 1);
  });
  document.querySelector('.top_button').addEventListener('click', function () {
    return scrollToTarget(0, 0.8);
  });
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50084" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map