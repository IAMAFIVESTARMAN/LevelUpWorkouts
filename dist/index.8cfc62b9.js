// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#countries");
// });
var _indexJs = require("./node_modules/country-calling-code/lib/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
console.log("this works ?");
// import icons
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
// async function getCountries() {
//   let headers = new Headers();
//   headers.append(
//     "Access-Control-Allow-Origin",
//     "http://127.0.0.1:5501/index.html"
//   );
//   try {
//     const res = await fetch("https://api.first.org/data/v1/teams", {
//       mode: "no-cors",
//       headers: headers,
//     });
//     const data = await res.json();
//     // console.log(data);
//     // console.log(res);
//     if (!res.ok) {
//       throw new Error(`Something went wrong Error code : ${res.status}`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
// getCountries();
(0, _indexJsDefault.default).forEach((el)=>console.log(el.countryCodes[0]));

},{"./node_modules/country-calling-code/lib/index.js":"8pbKU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pbKU":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.codes = void 0;
exports.codes = [
    {
        country: "Afghanistan",
        countryCodes: [
            "93"
        ],
        isoCode2: "AF",
        isoCode3: "AFG"
    },
    {
        country: "Albania",
        countryCodes: [
            "355"
        ],
        isoCode2: "AL",
        isoCode3: "ALB"
    },
    {
        country: "Algeria",
        countryCodes: [
            "213"
        ],
        isoCode2: "DZ",
        isoCode3: "DZA"
    },
    {
        country: "American Samoa",
        countryCodes: [
            "1-684"
        ],
        isoCode2: "AS",
        isoCode3: "ASM"
    },
    {
        country: "Andorra",
        countryCodes: [
            "376"
        ],
        isoCode2: "AD",
        isoCode3: "AND"
    },
    {
        country: "Angola",
        countryCodes: [
            "244"
        ],
        isoCode2: "AO",
        isoCode3: "AGO"
    },
    {
        country: "Anguilla",
        countryCodes: [
            "1-264"
        ],
        isoCode2: "AI",
        isoCode3: "AIA"
    },
    {
        country: "Antarctica",
        countryCodes: [
            "672"
        ],
        isoCode2: "AQ",
        isoCode3: "ATA"
    },
    {
        country: "Antigua and Barbuda",
        countryCodes: [
            "1-268"
        ],
        isoCode2: "AG",
        isoCode3: "ATG"
    },
    {
        country: "Argentina",
        countryCodes: [
            "54"
        ],
        isoCode2: "AR",
        isoCode3: "ARG"
    },
    {
        country: "Armenia",
        countryCodes: [
            "374"
        ],
        isoCode2: "AM",
        isoCode3: "ARM"
    },
    {
        country: "Aruba",
        countryCodes: [
            "297"
        ],
        isoCode2: "AW",
        isoCode3: "ABW"
    },
    {
        country: "Australia",
        countryCodes: [
            "61"
        ],
        isoCode2: "AU",
        isoCode3: "AUS"
    },
    {
        country: "Austria",
        countryCodes: [
            "43"
        ],
        isoCode2: "AT",
        isoCode3: "AUT"
    },
    {
        country: "Azerbaijan",
        countryCodes: [
            "994"
        ],
        isoCode2: "AZ",
        isoCode3: "AZE"
    },
    {
        country: "Bahamas",
        countryCodes: [
            "1-242"
        ],
        isoCode2: "BS",
        isoCode3: "BHS"
    },
    {
        country: "Bahrain",
        countryCodes: [
            "973"
        ],
        isoCode2: "BH",
        isoCode3: "BHR"
    },
    {
        country: "Bangladesh",
        countryCodes: [
            "880"
        ],
        isoCode2: "BD",
        isoCode3: "BGD"
    },
    {
        country: "Barbados",
        countryCodes: [
            "1-246"
        ],
        isoCode2: "BB",
        isoCode3: "BRB"
    },
    {
        country: "Belarus",
        countryCodes: [
            "375"
        ],
        isoCode2: "BY",
        isoCode3: "BLR"
    },
    {
        country: "Belgium",
        countryCodes: [
            "32"
        ],
        isoCode2: "BE",
        isoCode3: "BEL"
    },
    {
        country: "Belize",
        countryCodes: [
            "501"
        ],
        isoCode2: "BZ",
        isoCode3: "BLZ"
    },
    {
        country: "Benin",
        countryCodes: [
            "229"
        ],
        isoCode2: "BJ",
        isoCode3: "BEN"
    },
    {
        country: "Bermuda",
        countryCodes: [
            "1-441"
        ],
        isoCode2: "BM",
        isoCode3: "BMU"
    },
    {
        country: "Bhutan",
        countryCodes: [
            "975"
        ],
        isoCode2: "BT",
        isoCode3: "BTN"
    },
    {
        country: "Bolivia",
        countryCodes: [
            "591"
        ],
        isoCode2: "BO",
        isoCode3: "BOL"
    },
    {
        country: "Bosnia and Herzegovina",
        countryCodes: [
            "387"
        ],
        isoCode2: "BA",
        isoCode3: "BIH"
    },
    {
        country: "Botswana",
        countryCodes: [
            "267"
        ],
        isoCode2: "BW",
        isoCode3: "BWA"
    },
    {
        country: "Brazil",
        countryCodes: [
            "55"
        ],
        isoCode2: "BR",
        isoCode3: "BRA"
    },
    {
        country: "British Indian Ocean Territory",
        countryCodes: [
            "246"
        ],
        isoCode2: "IO",
        isoCode3: "IOT"
    },
    {
        country: "British Virgin Islands",
        countryCodes: [
            "1-284"
        ],
        isoCode2: "VG",
        isoCode3: "VGB"
    },
    {
        country: "Brunei",
        countryCodes: [
            "673"
        ],
        isoCode2: "BN",
        isoCode3: "BRN"
    },
    {
        country: "Bulgaria",
        countryCodes: [
            "359"
        ],
        isoCode2: "BG",
        isoCode3: "BGR"
    },
    {
        country: "Burkina Faso",
        countryCodes: [
            "226"
        ],
        isoCode2: "BF",
        isoCode3: "BFA"
    },
    {
        country: "Burundi",
        countryCodes: [
            "257"
        ],
        isoCode2: "BI",
        isoCode3: "BDI"
    },
    {
        country: "Cambodia",
        countryCodes: [
            "855"
        ],
        isoCode2: "KH",
        isoCode3: "KHM"
    },
    {
        country: "Cameroon",
        countryCodes: [
            "237"
        ],
        isoCode2: "CM",
        isoCode3: "CMR"
    },
    {
        country: "Canada",
        countryCodes: [
            "1"
        ],
        isoCode2: "CA",
        isoCode3: "CAN"
    },
    {
        country: "Cape Verde",
        countryCodes: [
            "238"
        ],
        isoCode2: "CV",
        isoCode3: "CPV"
    },
    {
        country: "Cayman Islands",
        countryCodes: [
            "1-345"
        ],
        isoCode2: "KY",
        isoCode3: "CYM"
    },
    {
        country: "Central African Republic",
        countryCodes: [
            "236"
        ],
        isoCode2: "CF",
        isoCode3: "CAF"
    },
    {
        country: "Chad",
        countryCodes: [
            "235"
        ],
        isoCode2: "TD",
        isoCode3: "TCD"
    },
    {
        country: "Chile",
        countryCodes: [
            "56"
        ],
        isoCode2: "CL",
        isoCode3: "CHL"
    },
    {
        country: "China",
        countryCodes: [
            "86"
        ],
        isoCode2: "CN",
        isoCode3: "CHN"
    },
    {
        country: "Christmas Island",
        countryCodes: [
            "61"
        ],
        isoCode2: "CX",
        isoCode3: "CXR"
    },
    {
        country: "Cocos Islands",
        countryCodes: [
            "61"
        ],
        isoCode2: "CC",
        isoCode3: "CCK"
    },
    {
        country: "Colombia",
        countryCodes: [
            "57"
        ],
        isoCode2: "CO",
        isoCode3: "COL"
    },
    {
        country: "Comoros",
        countryCodes: [
            "269"
        ],
        isoCode2: "KM",
        isoCode3: "COM"
    },
    {
        country: "Cook Islands",
        countryCodes: [
            "682"
        ],
        isoCode2: "CK",
        isoCode3: "COK"
    },
    {
        country: "Costa Rica",
        countryCodes: [
            "506"
        ],
        isoCode2: "CR",
        isoCode3: "CRI"
    },
    {
        country: "Croatia",
        countryCodes: [
            "385"
        ],
        isoCode2: "HR",
        isoCode3: "HRV"
    },
    {
        country: "Cuba",
        countryCodes: [
            "53"
        ],
        isoCode2: "CU",
        isoCode3: "CUB"
    },
    {
        country: "Curacao",
        countryCodes: [
            "599"
        ],
        isoCode2: "CW",
        isoCode3: "CUW"
    },
    {
        country: "Cyprus",
        countryCodes: [
            "357"
        ],
        isoCode2: "CY",
        isoCode3: "CYP"
    },
    {
        country: "Czech Republic",
        countryCodes: [
            "420"
        ],
        isoCode2: "CZ",
        isoCode3: "CZE"
    },
    {
        country: "Democratic Republic of the Congo",
        countryCodes: [
            "243"
        ],
        isoCode2: "CD",
        isoCode3: "COD"
    },
    {
        country: "Denmark",
        countryCodes: [
            "45"
        ],
        isoCode2: "DK",
        isoCode3: "DNK"
    },
    {
        country: "Djibouti",
        countryCodes: [
            "253"
        ],
        isoCode2: "DJ",
        isoCode3: "DJI"
    },
    {
        country: "Dominica",
        countryCodes: [
            "1-767"
        ],
        isoCode2: "DM",
        isoCode3: "DMA"
    },
    {
        country: "Dominican Republic",
        countryCodes: [
            "1-809",
            "1-829",
            "1-849"
        ],
        isoCode2: "DO",
        isoCode3: "DOM"
    },
    {
        country: "East Timor",
        countryCodes: [
            "670"
        ],
        isoCode2: "TL",
        isoCode3: "TLS"
    },
    {
        country: "Ecuador",
        countryCodes: [
            "593"
        ],
        isoCode2: "EC",
        isoCode3: "ECU"
    },
    {
        country: "Egypt",
        countryCodes: [
            "20"
        ],
        isoCode2: "EG",
        isoCode3: "EGY"
    },
    {
        country: "El Salvador",
        countryCodes: [
            "503"
        ],
        isoCode2: "SV",
        isoCode3: "SLV"
    },
    {
        country: "Equatorial Guinea",
        countryCodes: [
            "240"
        ],
        isoCode2: "GQ",
        isoCode3: "GNQ"
    },
    {
        country: "Eritrea",
        countryCodes: [
            "291"
        ],
        isoCode2: "ER",
        isoCode3: "ERI"
    },
    {
        country: "Estonia",
        countryCodes: [
            "372"
        ],
        isoCode2: "EE",
        isoCode3: "EST"
    },
    {
        country: "Ethiopia",
        countryCodes: [
            "251"
        ],
        isoCode2: "ET",
        isoCode3: "ETH"
    },
    {
        country: "Falkland Islands",
        countryCodes: [
            "500"
        ],
        isoCode2: "FK",
        isoCode3: "FLK"
    },
    {
        country: "Faroe Islands",
        countryCodes: [
            "298"
        ],
        isoCode2: "FO",
        isoCode3: "FRO"
    },
    {
        country: "Fiji",
        countryCodes: [
            "679"
        ],
        isoCode2: "FJ",
        isoCode3: "FJI"
    },
    {
        country: "Finland",
        countryCodes: [
            "358"
        ],
        isoCode2: "FI",
        isoCode3: "FIN"
    },
    {
        country: "France",
        countryCodes: [
            "33"
        ],
        isoCode2: "FR",
        isoCode3: "FRA"
    },
    {
        country: "French Polynesia",
        countryCodes: [
            "689"
        ],
        isoCode2: "PF",
        isoCode3: "PYF"
    },
    {
        country: "Gabon",
        countryCodes: [
            "241"
        ],
        isoCode2: "GA",
        isoCode3: "GAB"
    },
    {
        country: "Gambia",
        countryCodes: [
            "220"
        ],
        isoCode2: "GM",
        isoCode3: "GMB"
    },
    {
        country: "Georgia",
        countryCodes: [
            "995"
        ],
        isoCode2: "GE",
        isoCode3: "GEO"
    },
    {
        country: "Germany",
        countryCodes: [
            "49"
        ],
        isoCode2: "DE",
        isoCode3: "DEU"
    },
    {
        country: "Ghana",
        countryCodes: [
            "233"
        ],
        isoCode2: "GH",
        isoCode3: "GHA"
    },
    {
        country: "Gibraltar",
        countryCodes: [
            "350"
        ],
        isoCode2: "GI",
        isoCode3: "GIB"
    },
    {
        country: "Greece",
        countryCodes: [
            "30"
        ],
        isoCode2: "GR",
        isoCode3: "GRC"
    },
    {
        country: "Greenland",
        countryCodes: [
            "299"
        ],
        isoCode2: "GL",
        isoCode3: "GRL"
    },
    {
        country: "Grenada",
        countryCodes: [
            "1-473"
        ],
        isoCode2: "GD",
        isoCode3: "GRD"
    },
    {
        country: "Guam",
        countryCodes: [
            "1-671"
        ],
        isoCode2: "GU",
        isoCode3: "GUM"
    },
    {
        country: "Guatemala",
        countryCodes: [
            "502"
        ],
        isoCode2: "GT",
        isoCode3: "GTM"
    },
    {
        country: "Guernsey",
        countryCodes: [
            "44-1481"
        ],
        isoCode2: "GG",
        isoCode3: "GGY"
    },
    {
        country: "Guinea",
        countryCodes: [
            "224"
        ],
        isoCode2: "GN",
        isoCode3: "GIN"
    },
    {
        country: "Guinea-Bissau",
        countryCodes: [
            "245"
        ],
        isoCode2: "GW",
        isoCode3: "GNB"
    },
    {
        country: "Guyana",
        countryCodes: [
            "592"
        ],
        isoCode2: "GY",
        isoCode3: "GUY"
    },
    {
        country: "Haiti",
        countryCodes: [
            "509"
        ],
        isoCode2: "HT",
        isoCode3: "HTI"
    },
    {
        country: "Honduras",
        countryCodes: [
            "504"
        ],
        isoCode2: "HN",
        isoCode3: "HND"
    },
    {
        country: "Hong Kong",
        countryCodes: [
            "852"
        ],
        isoCode2: "HK",
        isoCode3: "HKG"
    },
    {
        country: "Hungary",
        countryCodes: [
            "36"
        ],
        isoCode2: "HU",
        isoCode3: "HUN"
    },
    {
        country: "Iceland",
        countryCodes: [
            "354"
        ],
        isoCode2: "IS",
        isoCode3: "ISL"
    },
    {
        country: "India",
        countryCodes: [
            "91"
        ],
        isoCode2: "IN",
        isoCode3: "IND"
    },
    {
        country: "Indonesia",
        countryCodes: [
            "62"
        ],
        isoCode2: "ID",
        isoCode3: "IDN"
    },
    {
        country: "Iran",
        countryCodes: [
            "98"
        ],
        isoCode2: "IR",
        isoCode3: "IRN"
    },
    {
        country: "Iraq",
        countryCodes: [
            "964"
        ],
        isoCode2: "IQ",
        isoCode3: "IRQ"
    },
    {
        country: "Ireland",
        countryCodes: [
            "353"
        ],
        isoCode2: "IE",
        isoCode3: "IRL"
    },
    {
        country: "Isle of Man",
        countryCodes: [
            "44-1624"
        ],
        isoCode2: "IM",
        isoCode3: "IMN"
    },
    {
        country: "Israel",
        countryCodes: [
            "972"
        ],
        isoCode2: "IL",
        isoCode3: "ISR"
    },
    {
        country: "Italy",
        countryCodes: [
            "39"
        ],
        isoCode2: "IT",
        isoCode3: "ITA"
    },
    {
        country: "Ivory Coast",
        countryCodes: [
            "225"
        ],
        isoCode2: "CI",
        isoCode3: "CIV"
    },
    {
        country: "Jamaica",
        countryCodes: [
            "1-876"
        ],
        isoCode2: "JM",
        isoCode3: "JAM"
    },
    {
        country: "Japan",
        countryCodes: [
            "81"
        ],
        isoCode2: "JP",
        isoCode3: "JPN"
    },
    {
        country: "Jersey",
        countryCodes: [
            "44-1534"
        ],
        isoCode2: "JE",
        isoCode3: "JEY"
    },
    {
        country: "Jordan",
        countryCodes: [
            "962"
        ],
        isoCode2: "JO",
        isoCode3: "JOR"
    },
    {
        country: "Kazakhstan",
        countryCodes: [
            "7"
        ],
        isoCode2: "KZ",
        isoCode3: "KAZ"
    },
    {
        country: "Kenya",
        countryCodes: [
            "254"
        ],
        isoCode2: "KE",
        isoCode3: "KEN"
    },
    {
        country: "Kiribati",
        countryCodes: [
            "686"
        ],
        isoCode2: "KI",
        isoCode3: "KIR"
    },
    {
        country: "Kosovo",
        countryCodes: [
            "383"
        ],
        isoCode2: "XK",
        isoCode3: "XKX"
    },
    {
        country: "Kuwait",
        countryCodes: [
            "965"
        ],
        isoCode2: "KW",
        isoCode3: "KWT"
    },
    {
        country: "Kyrgyzstan",
        countryCodes: [
            "996"
        ],
        isoCode2: "KG",
        isoCode3: "KGZ"
    },
    {
        country: "Laos",
        countryCodes: [
            "856"
        ],
        isoCode2: "LA",
        isoCode3: "LAO"
    },
    {
        country: "Latvia",
        countryCodes: [
            "371"
        ],
        isoCode2: "LV",
        isoCode3: "LVA"
    },
    {
        country: "Lebanon",
        countryCodes: [
            "961"
        ],
        isoCode2: "LB",
        isoCode3: "LBN"
    },
    {
        country: "Lesotho",
        countryCodes: [
            "266"
        ],
        isoCode2: "LS",
        isoCode3: "LSO"
    },
    {
        country: "Liberia",
        countryCodes: [
            "231"
        ],
        isoCode2: "LR",
        isoCode3: "LBR"
    },
    {
        country: "Libya",
        countryCodes: [
            "218"
        ],
        isoCode2: "LY",
        isoCode3: "LBY"
    },
    {
        country: "Liechtenstein",
        countryCodes: [
            "423"
        ],
        isoCode2: "LI",
        isoCode3: "LIE"
    },
    {
        country: "Lithuania",
        countryCodes: [
            "370"
        ],
        isoCode2: "LT",
        isoCode3: "LTU"
    },
    {
        country: "Luxembourg",
        countryCodes: [
            "352"
        ],
        isoCode2: "LU",
        isoCode3: "LUX"
    },
    {
        country: "Macau",
        countryCodes: [
            "853"
        ],
        isoCode2: "MO",
        isoCode3: "MAC"
    },
    {
        country: "Macedonia",
        countryCodes: [
            "389"
        ],
        isoCode2: "MK",
        isoCode3: "MKD"
    },
    {
        country: "Madagascar",
        countryCodes: [
            "261"
        ],
        isoCode2: "MG",
        isoCode3: "MDG"
    },
    {
        country: "Malawi",
        countryCodes: [
            "265"
        ],
        isoCode2: "MW",
        isoCode3: "MWI"
    },
    {
        country: "Malaysia",
        countryCodes: [
            "60"
        ],
        isoCode2: "MY",
        isoCode3: "MYS"
    },
    {
        country: "Maldives",
        countryCodes: [
            "960"
        ],
        isoCode2: "MV",
        isoCode3: "MDV"
    },
    {
        country: "Mali",
        countryCodes: [
            "223"
        ],
        isoCode2: "ML",
        isoCode3: "MLI"
    },
    {
        country: "Malta",
        countryCodes: [
            "356"
        ],
        isoCode2: "MT",
        isoCode3: "MLT"
    },
    {
        country: "Marshall Islands",
        countryCodes: [
            "692"
        ],
        isoCode2: "MH",
        isoCode3: "MHL"
    },
    {
        country: "Mauritania",
        countryCodes: [
            "222"
        ],
        isoCode2: "MR",
        isoCode3: "MRT"
    },
    {
        country: "Mauritius",
        countryCodes: [
            "230"
        ],
        isoCode2: "MU",
        isoCode3: "MUS"
    },
    {
        country: "Mayotte",
        countryCodes: [
            "262"
        ],
        isoCode2: "YT",
        isoCode3: "MYT"
    },
    {
        country: "Mexico",
        countryCodes: [
            "52"
        ],
        isoCode2: "MX",
        isoCode3: "MEX"
    },
    {
        country: "Micronesia",
        countryCodes: [
            "691"
        ],
        isoCode2: "FM",
        isoCode3: "FSM"
    },
    {
        country: "Moldova",
        countryCodes: [
            "373"
        ],
        isoCode2: "MD",
        isoCode3: "MDA"
    },
    {
        country: "Monaco",
        countryCodes: [
            "377"
        ],
        isoCode2: "MC",
        isoCode3: "MCO"
    },
    {
        country: "Mongolia",
        countryCodes: [
            "976"
        ],
        isoCode2: "MN",
        isoCode3: "MNG"
    },
    {
        country: "Montenegro",
        countryCodes: [
            "382"
        ],
        isoCode2: "ME",
        isoCode3: "MNE"
    },
    {
        country: "Montserrat",
        countryCodes: [
            "1-664"
        ],
        isoCode2: "MS",
        isoCode3: "MSR"
    },
    {
        country: "Morocco",
        countryCodes: [
            "212"
        ],
        isoCode2: "MA",
        isoCode3: "MAR"
    },
    {
        country: "Mozambique",
        countryCodes: [
            "258"
        ],
        isoCode2: "MZ",
        isoCode3: "MOZ"
    },
    {
        country: "Myanmar",
        countryCodes: [
            "95"
        ],
        isoCode2: "MM",
        isoCode3: "MMR"
    },
    {
        country: "Namibia",
        countryCodes: [
            "264"
        ],
        isoCode2: "NA",
        isoCode3: "NAM"
    },
    {
        country: "Nauru",
        countryCodes: [
            "674"
        ],
        isoCode2: "NR",
        isoCode3: "NRU"
    },
    {
        country: "Nepal",
        countryCodes: [
            "977"
        ],
        isoCode2: "NP",
        isoCode3: "NPL"
    },
    {
        country: "Netherlands",
        countryCodes: [
            "31"
        ],
        isoCode2: "NL",
        isoCode3: "NLD"
    },
    {
        country: "Netherlands Antilles",
        countryCodes: [
            "599"
        ],
        isoCode2: "AN",
        isoCode3: "ANT"
    },
    {
        country: "New Caledonia",
        countryCodes: [
            "687"
        ],
        isoCode2: "NC",
        isoCode3: "NCL"
    },
    {
        country: "New Zealand",
        countryCodes: [
            "64"
        ],
        isoCode2: "NZ",
        isoCode3: "NZL"
    },
    {
        country: "Nicaragua",
        countryCodes: [
            "505"
        ],
        isoCode2: "NI",
        isoCode3: "NIC"
    },
    {
        country: "Niger",
        countryCodes: [
            "227"
        ],
        isoCode2: "NE",
        isoCode3: "NER"
    },
    {
        country: "Nigeria",
        countryCodes: [
            "234"
        ],
        isoCode2: "NG",
        isoCode3: "NGA"
    },
    {
        country: "Niue",
        countryCodes: [
            "683"
        ],
        isoCode2: "NU",
        isoCode3: "NIU"
    },
    {
        country: "North Korea",
        countryCodes: [
            "850"
        ],
        isoCode2: "KP",
        isoCode3: "PRK"
    },
    {
        country: "Northern Mariana Islands",
        countryCodes: [
            "1-670"
        ],
        isoCode2: "MP",
        isoCode3: "MNP"
    },
    {
        country: "Norway",
        countryCodes: [
            "47"
        ],
        isoCode2: "NO",
        isoCode3: "NOR"
    },
    {
        country: "Oman",
        countryCodes: [
            "968"
        ],
        isoCode2: "OM",
        isoCode3: "OMN"
    },
    {
        country: "Pakistan",
        countryCodes: [
            "92"
        ],
        isoCode2: "PK",
        isoCode3: "PAK"
    },
    {
        country: "Palau",
        countryCodes: [
            "680"
        ],
        isoCode2: "PW",
        isoCode3: "PLW"
    },
    {
        country: "Palestine",
        countryCodes: [
            "970"
        ],
        isoCode2: "PS",
        isoCode3: "PSE"
    },
    {
        country: "Panama",
        countryCodes: [
            "507"
        ],
        isoCode2: "PA",
        isoCode3: "PAN"
    },
    {
        country: "Papua New Guinea",
        countryCodes: [
            "675"
        ],
        isoCode2: "PG",
        isoCode3: "PNG"
    },
    {
        country: "Paraguay",
        countryCodes: [
            "595"
        ],
        isoCode2: "PY",
        isoCode3: "PRY"
    },
    {
        country: "Peru",
        countryCodes: [
            "51"
        ],
        isoCode2: "PE",
        isoCode3: "PER"
    },
    {
        country: "Philippines",
        countryCodes: [
            "63"
        ],
        isoCode2: "PH",
        isoCode3: "PHL"
    },
    {
        country: "Pitcairn",
        countryCodes: [
            "64"
        ],
        isoCode2: "PN",
        isoCode3: "PCN"
    },
    {
        country: "Poland",
        countryCodes: [
            "48"
        ],
        isoCode2: "PL",
        isoCode3: "POL"
    },
    {
        country: "Portugal",
        countryCodes: [
            "351"
        ],
        isoCode2: "PT",
        isoCode3: "PRT"
    },
    {
        country: "Puerto Rico",
        countryCodes: [
            "1-787",
            "1-939"
        ],
        isoCode2: "PR",
        isoCode3: "PRI"
    },
    {
        country: "Qatar",
        countryCodes: [
            "974"
        ],
        isoCode2: "QA",
        isoCode3: "QAT"
    },
    {
        country: "Republic of the Congo",
        countryCodes: [
            "242"
        ],
        isoCode2: "CG",
        isoCode3: "COG"
    },
    {
        country: "Reunion",
        countryCodes: [
            "262"
        ],
        isoCode2: "RE",
        isoCode3: "REU"
    },
    {
        country: "Romania",
        countryCodes: [
            "40"
        ],
        isoCode2: "RO",
        isoCode3: "ROU"
    },
    {
        country: "Russia",
        countryCodes: [
            "7"
        ],
        isoCode2: "RU",
        isoCode3: "RUS"
    },
    {
        country: "Rwanda",
        countryCodes: [
            "250"
        ],
        isoCode2: "RW",
        isoCode3: "RWA"
    },
    {
        country: "Saint Barthelemy",
        countryCodes: [
            "590"
        ],
        isoCode2: "BL",
        isoCode3: "BLM"
    },
    {
        country: "Saint Helena",
        countryCodes: [
            "290"
        ],
        isoCode2: "SH",
        isoCode3: "SHN"
    },
    {
        country: "Saint Kitts and Nevis",
        countryCodes: [
            "1-869"
        ],
        isoCode2: "KN",
        isoCode3: "KNA"
    },
    {
        country: "Saint Lucia",
        countryCodes: [
            "1-758"
        ],
        isoCode2: "LC",
        isoCode3: "LCA"
    },
    {
        country: "Saint Martin",
        countryCodes: [
            "590"
        ],
        isoCode2: "MF",
        isoCode3: "MAF"
    },
    {
        country: "Saint Pierre and Miquelon",
        countryCodes: [
            "508"
        ],
        isoCode2: "PM",
        isoCode3: "SPM"
    },
    {
        country: "Saint Vincent and the Grenadines",
        countryCodes: [
            "1-784"
        ],
        isoCode2: "VC",
        isoCode3: "VCT"
    },
    {
        country: "Samoa",
        countryCodes: [
            "685"
        ],
        isoCode2: "WS",
        isoCode3: "WSM"
    },
    {
        country: "San Marino",
        countryCodes: [
            "378"
        ],
        isoCode2: "SM",
        isoCode3: "SMR"
    },
    {
        country: "Sao Tome and Principe",
        countryCodes: [
            "239"
        ],
        isoCode2: "ST",
        isoCode3: "STP"
    },
    {
        country: "Saudi Arabia",
        countryCodes: [
            "966"
        ],
        isoCode2: "SA",
        isoCode3: "SAU"
    },
    {
        country: "Senegal",
        countryCodes: [
            "221"
        ],
        isoCode2: "SN",
        isoCode3: "SEN"
    },
    {
        country: "Serbia",
        countryCodes: [
            "381"
        ],
        isoCode2: "RS",
        isoCode3: "SRB"
    },
    {
        country: "Seychelles",
        countryCodes: [
            "248"
        ],
        isoCode2: "SC",
        isoCode3: "SYC"
    },
    {
        country: "Sierra Leone",
        countryCodes: [
            "232"
        ],
        isoCode2: "SL",
        isoCode3: "SLE"
    },
    {
        country: "Singapore",
        countryCodes: [
            "65"
        ],
        isoCode2: "SG",
        isoCode3: "SGP"
    },
    {
        country: "Sint Maarten",
        countryCodes: [
            "1-721"
        ],
        isoCode2: "SX",
        isoCode3: "SXM"
    },
    {
        country: "Slovakia",
        countryCodes: [
            "421"
        ],
        isoCode2: "SK",
        isoCode3: "SVK"
    },
    {
        country: "Slovenia",
        countryCodes: [
            "386"
        ],
        isoCode2: "SI",
        isoCode3: "SVN"
    },
    {
        country: "Solomon Islands",
        countryCodes: [
            "677"
        ],
        isoCode2: "SB",
        isoCode3: "SLB"
    },
    {
        country: "Somalia",
        countryCodes: [
            "252"
        ],
        isoCode2: "SO",
        isoCode3: "SOM"
    },
    {
        country: "South Africa",
        countryCodes: [
            "27"
        ],
        isoCode2: "ZA",
        isoCode3: "ZAF"
    },
    {
        country: "South Korea",
        countryCodes: [
            "82"
        ],
        isoCode2: "KR",
        isoCode3: "KOR"
    },
    {
        country: "South Sudan",
        countryCodes: [
            "211"
        ],
        isoCode2: "SS",
        isoCode3: "SSD"
    },
    {
        country: "Spain",
        countryCodes: [
            "34"
        ],
        isoCode2: "ES",
        isoCode3: "ESP"
    },
    {
        country: "Sri Lanka",
        countryCodes: [
            "94"
        ],
        isoCode2: "LK",
        isoCode3: "LKA"
    },
    {
        country: "Sudan",
        countryCodes: [
            "249"
        ],
        isoCode2: "SD",
        isoCode3: "SDN"
    },
    {
        country: "Suriname",
        countryCodes: [
            "597"
        ],
        isoCode2: "SR",
        isoCode3: "SUR"
    },
    {
        country: "Svalbard and Jan Mayen",
        countryCodes: [
            "47"
        ],
        isoCode2: "SJ",
        isoCode3: "SJM"
    },
    {
        country: "Swaziland",
        countryCodes: [
            "268"
        ],
        isoCode2: "SZ",
        isoCode3: "SWZ"
    },
    {
        country: "Sweden",
        countryCodes: [
            "46"
        ],
        isoCode2: "SE",
        isoCode3: "SWE"
    },
    {
        country: "Switzerland",
        countryCodes: [
            "41"
        ],
        isoCode2: "CH",
        isoCode3: "CHE"
    },
    {
        country: "Syria",
        countryCodes: [
            "963"
        ],
        isoCode2: "SY",
        isoCode3: "SYR"
    },
    {
        country: "Taiwan",
        countryCodes: [
            "886"
        ],
        isoCode2: "TW",
        isoCode3: "TWN"
    },
    {
        country: "Tajikistan",
        countryCodes: [
            "992"
        ],
        isoCode2: "TJ",
        isoCode3: "TJK"
    },
    {
        country: "Tanzania",
        countryCodes: [
            "255"
        ],
        isoCode2: "TZ",
        isoCode3: "TZA"
    },
    {
        country: "Thailand",
        countryCodes: [
            "66"
        ],
        isoCode2: "TH",
        isoCode3: "THA"
    },
    {
        country: "Togo",
        countryCodes: [
            "228"
        ],
        isoCode2: "TG",
        isoCode3: "TGO"
    },
    {
        country: "Tokelau",
        countryCodes: [
            "690"
        ],
        isoCode2: "TK",
        isoCode3: "TKL"
    },
    {
        country: "Tonga",
        countryCodes: [
            "676"
        ],
        isoCode2: "TO",
        isoCode3: "TON"
    },
    {
        country: "Trinidad and Tobago",
        countryCodes: [
            "1-868"
        ],
        isoCode2: "TT",
        isoCode3: "TTO"
    },
    {
        country: "Tunisia",
        countryCodes: [
            "216"
        ],
        isoCode2: "TN",
        isoCode3: "TUN"
    },
    {
        country: "Turkey",
        countryCodes: [
            "90"
        ],
        isoCode2: "TR",
        isoCode3: "TUR"
    },
    {
        country: "Turkmenistan",
        countryCodes: [
            "993"
        ],
        isoCode2: "TM",
        isoCode3: "TKM"
    },
    {
        country: "Turks and Caicos Islands",
        countryCodes: [
            "1-649"
        ],
        isoCode2: "TC",
        isoCode3: "TCA"
    },
    {
        country: "Tuvalu",
        countryCodes: [
            "688"
        ],
        isoCode2: "TV",
        isoCode3: "TUV"
    },
    {
        country: "U.S. Virgin Islands",
        countryCodes: [
            "1-340"
        ],
        isoCode2: "VI",
        isoCode3: "VIR"
    },
    {
        country: "Uganda",
        countryCodes: [
            "256"
        ],
        isoCode2: "UG",
        isoCode3: "UGA"
    },
    {
        country: "Ukraine",
        countryCodes: [
            "380"
        ],
        isoCode2: "UA",
        isoCode3: "UKR"
    },
    {
        country: "United Arab Emirates",
        countryCodes: [
            "971"
        ],
        isoCode2: "AE",
        isoCode3: "ARE"
    },
    {
        country: "United Kingdom",
        countryCodes: [
            "44"
        ],
        isoCode2: "GB",
        isoCode3: "GBR"
    },
    {
        country: "United States",
        countryCodes: [
            "1"
        ],
        isoCode2: "US",
        isoCode3: "USA"
    },
    {
        country: "Uruguay",
        countryCodes: [
            "598"
        ],
        isoCode2: "UY",
        isoCode3: "URY"
    },
    {
        country: "Uzbekistan",
        countryCodes: [
            "998"
        ],
        isoCode2: "UZ",
        isoCode3: "UZB"
    },
    {
        country: "Vanuatu",
        countryCodes: [
            "678"
        ],
        isoCode2: "VU",
        isoCode3: "VUT"
    },
    {
        country: "Vatican",
        countryCodes: [
            "379"
        ],
        isoCode2: "VA",
        isoCode3: "VAT"
    },
    {
        country: "Venezuela",
        countryCodes: [
            "58"
        ],
        isoCode2: "VE",
        isoCode3: "VEN"
    },
    {
        country: "Vietnam",
        countryCodes: [
            "84"
        ],
        isoCode2: "VN",
        isoCode3: "VNM"
    },
    {
        country: "Wallis and Futuna",
        countryCodes: [
            "681"
        ],
        isoCode2: "WF",
        isoCode3: "WLF"
    },
    {
        country: "Western Sahara",
        countryCodes: [
            "212"
        ],
        isoCode2: "EH",
        isoCode3: "ESH"
    },
    {
        country: "Yemen",
        countryCodes: [
            "967"
        ],
        isoCode2: "YE",
        isoCode3: "YEM"
    },
    {
        country: "Zambia",
        countryCodes: [
            "260"
        ],
        isoCode2: "ZM",
        isoCode3: "ZMB"
    },
    {
        country: "Zimbabwe",
        countryCodes: [
            "263"
        ],
        isoCode2: "ZW",
        isoCode3: "ZWE"
    }
];
exports["default"] = exports.codes;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["dpgAG","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.8cfc62b9.js.map
