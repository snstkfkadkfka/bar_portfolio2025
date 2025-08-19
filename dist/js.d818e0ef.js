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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* page2 scroll Animation */
{
  var Scroll = /*#__PURE__*/function () {
    function Scroll(main, sticky) {
      _classCallCheck(this, Scroll);
      this.main = main;
      this.sticky = sticky;
      this.rebon1 = sticky.querySelector('.rebon1');
      this.rebon2 = sticky.querySelector('.rebon2');
      this.text = sticky.querySelector('.page2__text');
      this.start = 0;
      this.end = 0;
      this.step = 0;
    }
    return _createClass(Scroll, [{
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

        //리본 deco 애니메니션
        var maxAnimRebon1 = s + step * 6;
        if (this.rebon1) {
          if (scrollY <= s) {
            this.rebon1.style.transform = "translateX(-190vw) translateY(30vh) scale(0.5)";
            this.rebon1.style.opacity = '0.1';
          } else if (scrollY > s && scrollY < maxAnimRebon1) {
            var progress = (scrollY - s) / (step * 6);
            var moveX = -190 + progress * 230;
            var moveY = 30 - progress * 40;
            this.rebon1.style.transform = "translateX(".concat(moveX, "vw) translateY(").concat(moveY, "vh) scale(0.5)");
            this.rebon1.style.opacity = '0.1';
          } else if (scrollY >= e && scrollY <= e + window.innerHeight) {
            this.rebon1.style.transform = "translateX(40vw) translateY(-10vh) scale(0.5)";
            var fadeProgress = 0.1 * (1 - (scrollY - e) / window.innerHeight);
            this.rebon1.style.opacity = fadeProgress.toFixed(2);
          } else if (scrollY > e + window.innerHeight) {
            this.rebon1.style.opacity = '0';
          }
        }
        if (this.rebon2) {
          if (scrollY <= s) {
            this.rebon2.style.transform = "translateX(160vw) translateY(0vh) scale(0.5)";
            this.rebon2.style.opacity = '0.5';
          } else if (scrollY > s && scrollY < maxAnimRebon1) {
            var _progress = (scrollY - s) / (step * 6);
            var _moveX = 160 + _progress * -110;
            var _moveY = 0 - _progress * -10;
            this.rebon2.style.transform = "translateX(".concat(_moveX, "vw) translateY(").concat(_moveY, "vh) scale(0.5)");
            this.rebon2.style.opacity = '0.5';
          } else if (scrollY >= e && scrollY <= e + window.innerHeight) {
            this.rebon2.style.transform = "translateX(50vw) translateY(10vh) scale(0.5)";
            var _fadeProgress = 0.5 * (1 - (scrollY - e) / window.innerHeight);
            this.rebon2.style.opacity = _fadeProgress.toFixed(2);
          } else if (scrollY > e + window.innerHeight) {
            this.rebon2.style.opacity = '0';
          }
        }

        //text 애니메이션
        var maxAnimRebon2 = s + step * 7;
        if (this.text) {
          if (scrollY <= s) {
            this.text.style.transform = "scale(1) ";
            this.text.style.opacity = "0 ";
          } else if (scrollY > s && scrollY < maxAnimRebon2) {
            var _progress2 = (scrollY - s) / (step * 7);
            var scaleValue = 1 + _progress2 * 0.5; // 1 → 1.5
            this.text.style.transform = "scale(".concat(scaleValue, ")");
            this.text.style.opacity = "".concat(_progress2);
          } else {
            this.text.style.transform = "scale(1.5)";
            this.text.style.opacity = '1';
          }
        }
      }
    }]);
  }(); // 실행
  var main = document.querySelector("#page2");
  var sticky = document.querySelector(".page2__inner");
  var scroll = new Scroll(main, sticky);
  scroll.init();
  window.addEventListener("scroll", function () {
    scroll.animate();
  });
  window.addEventListener("resize", function () {
    scroll.init();
    //  scroll.animate(); // 즉시 적용
  });
}
/* page3 skill tep */
{
  var skillBut = document.querySelector('.page3__side__skill .button');
  var skillBox = document.querySelector('.page3__side__skill');
  skillBut.addEventListener("click", function () {
    skillBox.classList.toggle('active');
  });
}

/* page4 scrollAnimation */
{
  var page4_Scroll = /*#__PURE__*/function () {
    function page4_Scroll(main, sticky) {
      _classCallCheck(this, page4_Scroll);
      this.main = main;
      this.sticky = sticky;
      this.h2El = sticky.querySelector("h2");
      this.even = sticky.querySelectorAll(".even div");
      this.odd = sticky.querySelectorAll(".odd div");
      this.texts = sticky.querySelectorAll(".page4__text p");
      this.circle = sticky.querySelector(".circle_bg");
      this.length = this.even.length + this.odd.length;
      this.start = 0;
      this.end = 0;
    }
    return _createClass(page4_Scroll, [{
      key: "init",
      value: function init() {
        this.start = this.main.offsetTop - window.innerHeight;
        this.end = this.main.offsetTop + this.main.offsetHeight - window.innerHeight * 1.5;
      }
    }, {
      key: "animate",
      value: function animate() {
        var s = this.start;
        var e = this.end;

        // .even: 위에서 아래로
        this.even.forEach(function (content) {
          if (scrollY <= s) {
            content.style.transform = "translateY(-200vh)";
            content.style.filter = 'brightness(120%)';
          } else if (scrollY > s && scrollY < e) {
            var progress = (scrollY - s) / (e - s);
            var move = -200 + progress * 200;
            var brightness = 120 - progress * 90;
            var rounded = brightness.toFixed(2);
            content.style.transform = "translateY(".concat(move, "vh)");
            content.style.filter = "brightness(".concat(rounded, "%)");
          } else if (scrollY >= e) {
            content.style.transform = "translateY(0vh)";
            content.style.filter = "brightness(30%)";
          }
        });

        // .odd: 아래에서 위로
        this.odd.forEach(function (content) {
          if (scrollY <= s) {
            content.style.transform = "translateY(200vw)";
            content.style.filter = 'brightness(120%)';
          } else if (scrollY > s && scrollY < e) {
            var progress = (scrollY - s) / (e - s);
            var brightness = 120 - progress * 90;
            var rounded = brightness.toFixed(2);
            var move = 200 - progress * 200;
            content.style.transform = "translateY(".concat(move, "vw)");
            content.style.filter = "brightness(".concat(rounded, "%)");
          } else if (scrollY >= e) {
            content.style.transform = "translateY(0vw)";
            content.style.filter = "brightness(30%)";
          }
        });

        //text 데코
        this.texts.forEach(function (text, i) {
          var startLeft = [-250, -200, -100]; // index 0~2
          var endRight = [100, 100, 120];
          var startRight = [440, 400, 500]; // index 3~5
          var endLeft = [-100, -60, -70];
          var totalScroll = e - s;
          var progress = (scrollY - s) / totalScroll;

          // index 0~2: 왼쪽 → 오른쪽
          if (i <= 2) {
            if (scrollY <= s) {
              text.style.transform = "translateX(".concat(startLeft[i], "vw)");
            } else if (scrollY > s && scrollY < e) {
              var currentX = startLeft[i] + (endRight[i] - startLeft[i]) * progress;
              text.style.transform = "translateX(".concat(currentX, "vw)");
            } else {
              text.style.transform = "translateX(".concat(endRight[i], "vw)");
            }
          }
          // index 3~5: 오른쪽 → 왼쪽
          else {
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

        //원형 배경
        if (scrollY <= s) {
          this.circle.style.transform = 'translateX(-50%) translateY(70vh)';
          this.sticky.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0))';
          this.h2El.style.opacity = "0";
        } else if (scrollY > s && scrollY < e) {
          var progress = (scrollY - s) / (e - s);
          var move = 70 - progress * 70;
          var alpha = 0.0 + progress * 0.9;
          var roundedAlpha = alpha.toFixed(2);
          this.circle.style.transform = "translateX(-50%) translateY(".concat(move, "vh)");
          this.sticky.style.backgroundImage = "linear-gradient(rgba(0,0,0,".concat(roundedAlpha, "),rgba(0,0,0,").concat(roundedAlpha, "))");
          this.h2El.style.opacity = "".concat(roundedAlpha);
        } else if (scrollY >= e) {
          this.circle.style.transform = 'translateX(-50%) translateY(0vh)';
          this.sticky.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9))";
          this.h2El.style.opacity = '1';
        }
      }
    }]);
  }(); // 실행
  var _main = document.querySelector("#page4");
  var _sticky = document.querySelector(".page4__inner");
  var _scroll = new page4_Scroll(_main, _sticky);
  _scroll.init();
  window.addEventListener("scroll", function () {
    _scroll.animate();
  });
  window.addEventListener("resize", function () {
    _scroll.init();
  });
}

/* page5 swiper */
{
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
        var allTextArticles = document.querySelectorAll('.page5__text__inner article');
        allTextArticles.forEach(function (el, index) {
          if (index === currentIndex) {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
          } else {
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
          }
        });
      }
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  var allTextArticles = document.querySelectorAll('.page5__text__inner article');
  allTextArticles.forEach(function (el, index) {
    el.style.opcity = index === 0 ? '1' : '0';
    el.style.visibility = index === 0 ? 'visible' : 'hidden';
  });
}

/* page6 gsap scrollTrigger */
{
  var page6_Scroll = /*#__PURE__*/function () {
    function page6_Scroll(main, sticky) {
      _classCallCheck(this, page6_Scroll);
      this.main = main;
      this.sticky = sticky;
      this.imaes = sticky.querySelector('.page6__img');
      this.h2El = sticky.querySelector('.page6__text');
      this.liEl = this.imaes.querySelectorAll('ul li');
      this.start = 0;
      this.end = 0;
    }
    return _createClass(page6_Scroll, [{
      key: "init",
      value: function init() {
        this.start = this.main.offsetTop - window.innerHeight * 1;
        this.end = this.main.offsetTop + this.main.offsetHeight - window.innerHeight;
      }
    }, {
      key: "animate",
      value: function animate() {
        var s = this.start;
        var e = this.end;
        if (scrollY <= s) {
          this.imaes.style.transform = 'translateX(100vh)';
          this.h2El.style.opacity = '0';
          this.liEl.forEach(function (li) {
            li.style.filter = 'opacity(1) grayscale(0)';
          });
        } else if (scrollY > s && scrollY < e) {
          var progress = (scrollY - s) / (e - s);
          var move = 100 + progress * -350;
          var opacity = (1 - progress * 0.7).toFixed(2);
          var grayscale = (progress * 0.8).toFixed(2);
          var alpha = (progress * 0.9).toFixed(2);
          this.imaes.style.transform = "translateX(".concat(move, "vh)");
          this.h2El.style.opacity = alpha;
          this.liEl.forEach(function (li) {
            li.style.filter = "opacity(".concat(opacity, ") grayscale(").concat(grayscale, ")");
          });
        } else if (scrollY >= e) {
          this.imaes.style.transform = 'translateX(-250vh)';
          this.h2El.style.opacity = '1';
          this.liEl.forEach(function (li) {
            li.style.filter = 'opacity(0.3) grayscale(0.8)';
          });
        }
      }
    }]);
  }(); // 실행
  var _main2 = document.querySelector("#page6");
  var _sticky2 = document.querySelector(".page6__inner");
  var _scroll2 = new page6_Scroll(_main2, _sticky2);
  _scroll2.init();
  window.addEventListener("scroll", function () {
    _scroll2.animate();
  });
  window.addEventListener("resize", function () {
    _scroll2.init();
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
  // header
  var page1Home = document.querySelector('.page1__menu .home');
  var page1Prpfile = document.querySelector('.page1__menu .profile');
  var page1Ux = document.querySelector('.page1__menu .ux');
  var page1Graphic = document.querySelector('.page1__menu .graphic');
  page1Home.addEventListener('click', function () {
    gsap.to(window, 0.5, {
      scrollTo: 0
    });
  });
  page1Prpfile.addEventListener('click', function () {
    gsap.to(window, 0.8, {
      scrollTo: '#page3'
    });
  });
  page1Ux.addEventListener('click', function () {
    gsap.to(window, 1, {
      scrollTo: '#page5'
    });
  });
  page1Graphic.addEventListener('click', function () {
    gsap.to(window, 1.5, {
      scrollTo: '#page7'
    });
  });

  // footer
  var toTopEl = document.querySelector('.top_button');
  var page8Home = document.querySelector('.page8__menu .home');
  var page8Prpfile = document.querySelector('.page8__menu .profile');
  var page8Ux = document.querySelector('.page8__menu .ux');
  var page8Graphic = document.querySelector('.page8__menu .graphic');
  toTopEl.addEventListener('click', function () {
    gsap.to(window, 1, {
      scrollTo: 0
    });
  });
  page8Home.addEventListener('click', function () {
    gsap.to(window, 1, {
      scrollTo: 0
    });
  });
  page8Prpfile.addEventListener('click', function () {
    gsap.to(window, 0.5, {
      scrollTo: '#page3'
    });
  });
  page8Ux.addEventListener('click', function () {
    gsap.to(window, 0.5, {
      scrollTo: '#page5'
    });
  });
  page8Graphic.addEventListener('click', function () {
    gsap.to(window, 0.5, {
      scrollTo: '#page7'
    });
  });
}

/* animte bounce */
var bounse = document.querySelector(".page7__button");
bounse.addEventListener("mouseover", function () {
  this.classList.remove('animate__bounceIn');
  this.classList.add('animate__bounceIn');
});
bounse.addEventListener("animationend", function () {
  this.classList.remove('animate__bounceIn');
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62774" + '/');
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