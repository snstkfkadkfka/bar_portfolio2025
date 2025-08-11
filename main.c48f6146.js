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
})({"src/js/main.js":[function(require,module,exports) {
/* page2 gsap scrollTrigger */
{
  gsap.registerPlugin(ScrollTrigger);
  function createAnimation(_ref) {
    var x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      endValue = _ref.endValue;
    var tl = gsap.timeline();
    tl.from(".page2__inner .page2__bg .rebon1", {
      x: x1,
      y: y1
    }, "rebon").from(".page2__inner .page2__bg .rebon2", {
      x: x2,
      y: y2
    }, "rebon").from(".page2__inner .page2__text", {
      opacity: 0,
      scale: 0.9
    }, "rebon").to(".page2__inner .page2__text", {
      opacity: 1,
      scale: 1
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".page2__inner",
      start: "top top",
      end: "+=".concat(endValue),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: false
    });
  }
  ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 1200px)": function minWidth_1200px() {
      createAnimation({
        x1: "-2000px",
        y1: "300px",
        x2: "2000px",
        y2: "-100px",
        endValue: 2000
      });
    },
    // Tablet
    "(min-width: 700px) and (max-width: 1199px)": function minWidth_700px_and_MaxWidth_1199px() {
      createAnimation({
        x1: "-1400px",
        y1: "100px",
        x2: "1400px",
        y2: "-100px",
        endValue: 2000
      });
    },
    // Mobile
    "(max-width: 699px)": function maxWidth_699px() {
      createAnimation({
        x1: "-900px",
        y1: "100px",
        x2: "900px",
        y2: "-100px",
        endValue: 900
      });
    }
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

/* page4 gsap scrollTrigger */
{
  var ani2 = gsap.timeline();
  ani2.to("#page4 .page4__img .img1 div", {
    top: '0px'
  }, "img").to("#page4 .page4__img .img2 div", {
    top: '0px'
  }, "img").to("#page4 .page4__img .img3 div", {
    top: '-50px'
  }, "img").to("#page4 .page4__img .img4 div", {
    top: '-150px'
  }, "img").from("#page4 .page4__text .txt1", {
    left: '-80%'
  }, "img").from("#page4 .page4__text .txt2", {
    left: '-80%'
  }, "img").from("#page4 .page4__text .txt3", {
    left: '-60%'
  }, "img").from("#page4 .page4__text .txt4", {
    right: '-100%'
  }, "img").from("#page4 .page4__text .txt5", {
    right: '-100%'
  }, "img").from("#page4 .page4__text .txt6", {
    right: '-150%'
  }, "img").from("#page4", {
    backgroundColor: '#f3f6ff'
  }, "img+=0.25").from("#page4 .page4__inner ", {
    backgroundColor: '#f3f6ff'
  }, "img+=0.25").to("#page4 .page4__bg .black_bg", {
    backgroundColor: 'rgba(0, 2, 14, 0.7)'
  }, "img+=0.10").from("#page4 h2", {
    opacity: 0
  }, "img+=0.3");
  ScrollTrigger.create({
    animation: ani2,
    trigger: ".page4__inner",
    start: "top top",
    end: "+=800",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false
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
  gsap.registerPlugin(ScrollTrigger);
  function createAnimation(_ref2) {
    var endValue = _ref2.endValue;
    var ani3 = gsap.timeline();
    ani3.to(".page6__inner .page6__img", {
      left: '-90vw',
      filter: 'grayscale(100%)'
    }, "img").from(".page6__inner .page6__bg", {
      opacity: 0
    }, "img+=0.02").from(".page6__inner .page6__text h2", {
      opacity: 0
    }, "img+=0.02");
    ScrollTrigger.create({
      animation: ani3,
      trigger: ".page6__inner",
      start: "top 20% top",
      end: "+=".concat(endValue),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: false
    });
  }
  ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 1200px)": function minWidth_1200px() {
      createAnimation({
        endValue: 600
      });
    },
    // Tablet
    "(min-width: 700px) and (max-width: 1199px)": function minWidth_700px_and_MaxWidth_1199px() {
      createAnimation({
        endValue: 600
      });
    },
    // Mobile
    "(max-width: 699px)": function maxWidth_699px() {
      createAnimation({
        endValue: 550
      });
    }
  });
}

// /* page7 click Event */
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52177" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/main.js"], null)
//# sourceMappingURL=/main.c48f6146.js.map