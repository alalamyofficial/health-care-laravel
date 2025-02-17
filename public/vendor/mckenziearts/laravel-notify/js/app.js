/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./prism */ "./resources/js/prism.js");

/***/ }),

/***/ "./resources/js/prism.js":
/*!*******************************!*\
  !*** ./resources/js/prism.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+css-extras+diff+markup-templating+php+php-extras&plugins=line-highlight+autolinker+data-uri-highlight+custom-class+file-highlight+toolbar+highlight-keywords+inline-color+autoloader+command-line+normalize-whitespace+show-invisibles+show-language+match-braces */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (u) {
  var c = /\blang(?:uage)?-([\w-]+)\b/i,
      r = 0;
  var _ = {
    manual: u.Prism && u.Prism.manual,
    disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(e) {
        return e instanceof L ? new L(e.type, _.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(_.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++r
        }), e.__id;
      },
      clone: function n(e, t) {
        var a,
            r,
            i = _.util.type(e);

        switch (t = t || {}, i) {
          case "Object":
            if (r = _.util.objId(e), t[r]) return t[r];

            for (var o in a = {}, t[r] = a, e) {
              e.hasOwnProperty(o) && (a[o] = n(e[o], t));
            }

            return a;

          case "Array":
            return r = _.util.objId(e), t[r] ? t[r] : (a = [], t[r] = a, e.forEach(function (e, r) {
              a[r] = n(e, t);
            }), a);

          default:
            return e;
        }
      },
      currentScript: function currentScript() {
        if ("undefined" == typeof document) return null;
        if ("currentScript" in document) return document.currentScript;

        try {
          throw new Error();
        } catch (e) {
          var r = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];

          if (r) {
            var n = document.getElementsByTagName("script");

            for (var t in n) {
              if (n[t].src == r) return n[t];
            }
          }

          return null;
        }
      }
    },
    languages: {
      extend: function extend(e, r) {
        var n = _.util.clone(_.languages[e]);

        for (var t in r) {
          n[t] = r[t];
        }

        return n;
      },
      insertBefore: function insertBefore(n, e, r, t) {
        var a = (t = t || _.languages)[n],
            i = {};

        for (var o in a) {
          if (a.hasOwnProperty(o)) {
            if (o == e) for (var l in r) {
              r.hasOwnProperty(l) && (i[l] = r[l]);
            }
            r.hasOwnProperty(o) || (i[o] = a[o]);
          }
        }

        var s = t[n];
        return t[n] = i, _.languages.DFS(_.languages, function (e, r) {
          r === s && e != n && (this[e] = i);
        }), i;
      },
      DFS: function e(r, n, t, a) {
        a = a || {};
        var i = _.util.objId;

        for (var o in r) {
          if (r.hasOwnProperty(o)) {
            n.call(r, o, r[o], t || o);

            var l = r[o],
                s = _.util.type(l);

            "Object" !== s || a[i(l)] ? "Array" !== s || a[i(l)] || (a[i(l)] = !0, e(l, n, o, a)) : (a[i(l)] = !0, e(l, n, null, a));
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, r) {
      _.highlightAllUnder(document, e, r);
    },
    highlightAllUnder: function highlightAllUnder(e, r, n) {
      var t = {
        callback: n,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run("before-highlightall", t);

      for (var a, i = e.querySelectorAll(t.selector), o = 0; a = i[o++];) {
        _.highlightElement(a, !0 === r, t.callback);
      }
    },
    highlightElement: function highlightElement(e, r, n) {
      var t = function (e) {
        for (; e && !c.test(e.className);) {
          e = e.parentNode;
        }

        return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
      }(e),
          a = _.languages[t];

      e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t;
      var i = e.parentNode;
      i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t);
      var o = {
        element: e,
        language: t,
        grammar: a,
        code: e.textContent
      };

      function l(e) {
        o.highlightedCode = e, _.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, _.hooks.run("after-highlight", o), _.hooks.run("complete", o), n && n.call(o.element);
      }

      if (_.hooks.run("before-sanity-check", o), !o.code) return _.hooks.run("complete", o), void (n && n.call(o.element));
      if (_.hooks.run("before-highlight", o), o.grammar) {
        if (r && u.Worker) {
          var s = new Worker(_.filename);
          s.onmessage = function (e) {
            l(e.data);
          }, s.postMessage(JSON.stringify({
            language: o.language,
            code: o.code,
            immediateClose: !0
          }));
        } else l(_.highlight(o.code, o.grammar, o.language));
      } else l(_.util.encode(o.code));
    },
    highlight: function highlight(e, r, n) {
      var t = {
        code: e,
        grammar: r,
        language: n
      };
      return _.hooks.run("before-tokenize", t), t.tokens = _.tokenize(t.code, t.grammar), _.hooks.run("after-tokenize", t), L.stringify(_.util.encode(t.tokens), t.language);
    },
    matchGrammar: function matchGrammar(e, r, n, t, a, i, o) {
      for (var l in n) {
        if (n.hasOwnProperty(l) && n[l]) {
          var s = n[l];
          s = Array.isArray(s) ? s : [s];

          for (var u = 0; u < s.length; ++u) {
            if (o && o == l + "," + u) return;
            var c = s[u],
                g = c.inside,
                f = !!c.lookbehind,
                d = !!c.greedy,
                h = 0,
                m = c.alias;

            if (d && !c.pattern.global) {
              var p = c.pattern.toString().match(/[imsuy]*$/)[0];
              c.pattern = RegExp(c.pattern.source, p + "g");
            }

            c = c.pattern || c;

            for (var y = t, v = a; y < r.length; v += r[y].length, ++y) {
              var k = r[y];
              if (r.length > e.length) return;

              if (!(k instanceof L)) {
                if (d && y != r.length - 1) {
                  if (c.lastIndex = v, !(O = c.exec(e))) break;

                  for (var b = O.index + (f && O[1] ? O[1].length : 0), w = O.index + O[0].length, A = y, P = v, x = r.length; A < x && (P < w || !r[A].type && !r[A - 1].greedy); ++A) {
                    (P += r[A].length) <= b && (++y, v = P);
                  }

                  if (r[y] instanceof L) continue;
                  S = A - y, k = e.slice(v, P), O.index -= v;
                } else {
                  c.lastIndex = 0;
                  var O = c.exec(k),
                      S = 1;
                }

                if (O) {
                  f && (h = O[1] ? O[1].length : 0);
                  w = (b = O.index + h) + (O = O[0].slice(h)).length;
                  var j = k.slice(0, b),
                      N = k.slice(w),
                      E = [y, S];
                  j && (++y, v += j.length, E.push(j));
                  var C = new L(l, g ? _.tokenize(O, g) : O, m, O, d);
                  if (E.push(C), N && E.push(N), Array.prototype.splice.apply(r, E), 1 != S && _.matchGrammar(e, r, n, y, v, !0, l + "," + u), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    },
    tokenize: function tokenize(e, r) {
      var n = [e],
          t = r.rest;

      if (t) {
        for (var a in t) {
          r[a] = t[a];
        }

        delete r.rest;
      }

      return _.matchGrammar(e, n, r, 0, 0, !1), n;
    },
    hooks: {
      all: {},
      add: function add(e, r) {
        var n = _.hooks.all;
        n[e] = n[e] || [], n[e].push(r);
      },
      run: function run(e, r) {
        var n = _.hooks.all[e];
        if (n && n.length) for (var t, a = 0; t = n[a++];) {
          t(r);
        }
      }
    },
    Token: L
  };

  function L(e, r, n, t, a) {
    this.type = e, this.content = r, this.alias = n, this.length = 0 | (t || "").length, this.greedy = !!a;
  }

  if (u.Prism = _, L.stringify = function (e, r) {
    if ("string" == typeof e) return e;
    if (Array.isArray(e)) return e.map(function (e) {
      return L.stringify(e, r);
    }).join("");
    var n = {
      type: e.type,
      content: L.stringify(e.content, r),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: r
    };

    if (e.alias) {
      var t = Array.isArray(e.alias) ? e.alias : [e.alias];
      Array.prototype.push.apply(n.classes, t);
    }

    _.hooks.run("wrap", n);

    var a = Object.keys(n.attributes).map(function (e) {
      return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + n.content + "</" + n.tag + ">";
  }, !u.document) return u.addEventListener && (_.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
    var r = JSON.parse(e.data),
        n = r.language,
        t = r.code,
        a = r.immediateClose;
    u.postMessage(_.highlight(t, _.languages[n], n)), a && u.close();
  }, !1)), _;

  var e = _.util.currentScript();

  if (e && (_.filename = e.src, e.hasAttribute("data-manual") && (_.manual = !0)), !_.manual) {
    var n = function n() {
      _.manual || _.highlightAll();
    };

    var t = document.readyState;
    "loading" === t || "interactive" === t && e.defer ? document.addEventListener("DOMContentLoaded", n) : window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16);
  }

  return _;
}(_self);

 true && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
    greedy: !0
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function value(a, e) {
    var s = {};
    s["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e]
    }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s
      }
    };
    n["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e]
    };
    var t = {};
    t[a] = {
      pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, Prism.languages.insertBefore("markup", "cdata", t);
  }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: {
      pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
      inside: {
        "function": /^url/i,
        punctuation: /^\(|\)$/
      }
    },
    selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
    string: {
      pattern: t,
      greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var e = s.languages.markup;
  e && (e.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: e.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: s.languages.css
        }
      },
      alias: "language-css"
    }
  }, e.tag));
}(Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  "boolean": /\b(?:true|false)\b/,
  "function": /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
!function (e) {
  e.languages.css.selector = {
    pattern: e.languages.css.selector,
    inside: {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      "class": /\.[-:.\w]+/,
      id: /#[-:.\w]+/,
      attribute: {
        pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          attribute: {
            pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
            lookbehind: !0
          },
          value: [/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, {
            pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
            lookbehind: !0
          }],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: !0,
        inside: {
          number: /[\dn]+/,
          operator: /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: !0
      }],
      punctuation: /[()]/
    }
  }, e.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
      lookbehind: !0
    }
  });
  var a = {
    pattern: /(\d)(?:%|[a-z]+)/,
    lookbehind: !0
  },
      n = {
    pattern: /(^|[^\w.-])-?\d*\.?\d+/,
    lookbehind: !0
  };
  e.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    hexcode: {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: "color"
    },
    color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        unit: a,
        number: n,
        "function": /[\w-]+(?=\()/,
        punctuation: /[(),]/
      }
    }],
    entity: /\\[\da-f]{1,8}/i,
    unit: a,
    number: n
  });
}(Prism);
!function (d) {
  d.languages.diff = {
    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m]
  };
  var r = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    unchanged: " ",
    diff: "!"
  };
  Object.keys(r).forEach(function (e) {
    var n = r[e],
        a = [];
    /^\w+$/.test(e) || a.push(/\w+/.exec(e)[0]), "diff" === e && a.push("bold"), d.languages.diff[e] = {
      pattern: RegExp("^(?:[" + n + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
      alias: a
    };
  }), Object.defineProperty(d.languages.diff, "PREFIXES", {
    value: r
  });
}(Prism);
!function (h) {
  function v(e, n) {
    return "___" + e.toUpperCase() + n + "___";
  }

  Object.defineProperties(h.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function value(a, r, e, o) {
        if (a.language === r) {
          var c = a.tokenStack = [];
          a.code = a.code.replace(e, function (e) {
            if ("function" == typeof o && !o(e)) return e;

            for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));) {
              ++t;
            }

            return c[t] = e, n;
          }), a.grammar = h.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      value: function value(p, k) {
        if (p.language === k && p.tokenStack) {
          p.grammar = h.languages[k];
          var m = 0,
              d = Object.keys(p.tokenStack);
          !function e(n) {
            for (var t = 0; t < n.length && !(m >= d.length); t++) {
              var a = n[t];

              if ("string" == typeof a || a.content && "string" == typeof a.content) {
                var r = d[m],
                    o = p.tokenStack[r],
                    c = "string" == typeof a ? a : a.content,
                    i = v(k, r),
                    u = c.indexOf(i);

                if (-1 < u) {
                  ++m;
                  var g = c.substring(0, u),
                      l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
                      s = c.substring(u + i.length),
                      f = [];
                  g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f;
                }
              } else a.content && e(a.content);
            }

            return n;
          }(p.tokens);
        }
      }
    }
  });
}(Prism);
!function (n) {
  n.languages.php = n.languages.extend("clike", {
    keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    "boolean": {
      pattern: /\b(?:false|true)\b/i,
      alias: "constant"
    },
    constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0
    }
  }), n.languages.insertBefore("php", "string", {
    "shell-comment": {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      alias: "comment"
    }
  }), n.languages.insertBefore("php", "comment", {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    }
  }), n.languages.insertBefore("php", "keyword", {
    variable: /\$+(?:\w+\b|(?={))/i,
    "package": {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }
  }), n.languages.insertBefore("php", "operator", {
    property: {
      pattern: /(->)[\w]+/,
      lookbehind: !0
    }
  });
  var e = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: !0,
    inside: n.languages.php
  };
  n.languages.insertBefore("php", "string", {
    "nowdoc-string": {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: !0,
      alias: "string",
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    },
    "heredoc-string": {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: !0,
      alias: "string",
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: e
      }
    },
    "single-quoted-string": {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: !0,
      alias: "string"
    },
    "double-quoted-string": {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: !0,
      alias: "string",
      inside: {
        interpolation: e
      }
    }
  }), delete n.languages.php.string, n.hooks.add("before-tokenize", function (e) {
    if (/<\?/.test(e.code)) {
      n.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi);
    }
  }), n.hooks.add("after-tokenize", function (e) {
    n.languages["markup-templating"].tokenizePlaceholders(e, "php");
  });
}(Prism);
Prism.languages.insertBefore("php", "variable", {
  "this": /\$this\b/,
  global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
  scope: {
    pattern: /\b[\w\\]+::/,
    inside: {
      keyword: /static|self|parent/,
      punctuation: /::|\\/
    }
  }
});
!function () {
  if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
    var t,
        n = function n() {
      if (void 0 === t) {
        var e = document.createElement("div");
        e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = 0, e.style.border = 0, e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e);
      }

      return t;
    },
        a = 0;

    Prism.hooks.add("before-sanity-check", function (e) {
      var t = e.element.parentNode,
          n = t && t.getAttribute("data-line");

      if (t && n && /pre/i.test(t.nodeName)) {
        var i = 0;
        r(".line-highlight", t).forEach(function (e) {
          i += e.textContent.length, e.parentNode.removeChild(e);
        }), i && /^( \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i));
      }
    }), Prism.hooks.add("complete", function e(t) {
      var n = t.element.parentNode,
          i = n && n.getAttribute("data-line");

      if (n && i && /pre/i.test(n.nodeName)) {
        clearTimeout(a);
        var r = Prism.plugins.lineNumbers,
            o = t.plugins && t.plugins.lineNumbers;
        if (l(n, "line-numbers") && r && !o) Prism.hooks.add("line-numbers", e);else s(n, i)(), a = setTimeout(u, 1);
      }
    }), window.addEventListener("hashchange", u), window.addEventListener("resize", function () {
      var t = [];
      r("pre[data-line]").forEach(function (e) {
        t.push(s(e));
      }), t.forEach(i);
    });
  }

  function r(e, t) {
    return Array.prototype.slice.call((t || document).querySelectorAll(e));
  }

  function l(e, t) {
    return t = " " + t + " ", -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t);
  }

  function i(e) {
    e();
  }

  function s(u, e, d) {
    var t = (e = "string" == typeof e ? e : u.getAttribute("data-line")).replace(/\s+/g, "").split(","),
        c = +u.getAttribute("data-line-offset") || 0,
        f = (n() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
        h = l(u, "line-numbers"),
        p = h ? u : u.querySelector("code") || u,
        m = [];
    return t.forEach(function (e) {
      var t = e.split("-"),
          n = +t[0],
          i = +t[1] || n,
          r = u.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");

      if (m.push(function () {
        r.setAttribute("aria-hidden", "true"), r.setAttribute("data-range", e), r.className = (d || "") + " line-highlight";
      }), h && Prism.plugins.lineNumbers) {
        var o = Prism.plugins.lineNumbers.getLine(u, n),
            a = Prism.plugins.lineNumbers.getLine(u, i);

        if (o) {
          var l = o.offsetTop + "px";
          m.push(function () {
            r.style.top = l;
          });
        }

        if (a) {
          var s = a.offsetTop - o.offsetTop + a.offsetHeight + "px";
          m.push(function () {
            r.style.height = s;
          });
        }
      } else m.push(function () {
        r.setAttribute("data-start", n), n < i && r.setAttribute("data-end", i), r.style.top = (n - c - 1) * f + "px", r.textContent = new Array(i - n + 2).join(" \n");
      });

      m.push(function () {
        p.appendChild(r);
      });
    }), function () {
      m.forEach(i);
    };
  }

  function u() {
    var e = location.hash.slice(1);
    r(".temporary.line-highlight").forEach(function (e) {
      e.parentNode.removeChild(e);
    });
    var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];

    if (t && !document.getElementById(e)) {
      var n = e.slice(0, e.lastIndexOf(".")),
          i = document.getElementById(n);
      if (i) i.hasAttribute("data-line") || i.setAttribute("data-line", ""), s(i, t, "temporary ")(), document.querySelector(".temporary.line-highlight").scrollIntoView();
    }
  }
}();
!function () {
  if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
    var t = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,
        r = /\b\S+@[\w.]+[a-z]{2}/,
        a = /\[([^\]]+)]\(([^)]+)\)/,
        l = ["comment", "url", "attr-value", "string"];
    Prism.plugins.autolinker = {
      processGrammar: function processGrammar(i) {
        i && !i["url-link"] && (Prism.languages.DFS(i, function (i, n, e) {
          -1 < l.indexOf(e) && !Array.isArray(n) && (n.pattern || (n = this[i] = {
            pattern: n
          }), n.inside = n.inside || {}, "comment" == e && (n.inside["md-link"] = a), "attr-value" == e ? Prism.languages.insertBefore("inside", "punctuation", {
            "url-link": t
          }, n) : n.inside["url-link"] = t, n.inside["email-link"] = r);
        }), i["url-link"] = t, i["email-link"] = r);
      }
    }, Prism.hooks.add("before-highlight", function (i) {
      Prism.plugins.autolinker.processGrammar(i.grammar);
    }), Prism.hooks.add("wrap", function (i) {
      if (/-link$/.test(i.type)) {
        i.tag = "a";
        var n = i.content;
        if ("email-link" == i.type && 0 != n.indexOf("mailto:")) n = "mailto:" + n;else if ("md-link" == i.type) {
          var e = i.content.match(a);
          n = e[2], i.content = e[1];
        }
        i.attributes.href = n;

        try {
          i.content = decodeURIComponent(i.content);
        } catch (i) {}
      }
    });
  }
}();
!function () {
  if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
    var r = {
      pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/,
      lookbehind: !0,
      inside: {
        "language-css": {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/,
          lookbehind: !0
        },
        "language-javascript": {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/,
          lookbehind: !0
        },
        "language-json": {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/,
          lookbehind: !0
        },
        "language-markup": {
          pattern: /(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/,
          lookbehind: !0
        }
      }
    },
        e = ["url", "attr-value", "string"];
    Prism.plugins.dataURIHighlight = {
      processGrammar: function processGrammar(i) {
        i && !i["data-uri"] && (Prism.languages.DFS(i, function (i, a, n) {
          -1 < e.indexOf(n) && !Array.isArray(a) && (a.pattern || (a = this[i] = {
            pattern: a
          }), a.inside = a.inside || {}, "attr-value" == n ? Prism.languages.insertBefore("inside", a.inside["url-link"] ? "url-link" : "punctuation", {
            "data-uri": r
          }, a) : a.inside["url-link"] ? Prism.languages.insertBefore("inside", "url-link", {
            "data-uri": r
          }, a) : a.inside["data-uri"] = r);
        }), i["data-uri"] = r);
      }
    }, Prism.hooks.add("before-highlight", function (i) {
      if (r.pattern.test(i.code)) for (var a in r.inside) {
        if (r.inside.hasOwnProperty(a) && !r.inside[a].inside && r.inside[a].pattern.test(i.code)) {
          var n = a.match(/^language-(.+)/)[1];
          Prism.languages[n] && (r.inside[a].inside = {
            rest: (e = Prism.languages[n], Prism.plugins.autolinker && Prism.plugins.autolinker.processGrammar(e), e)
          });
        }
      }
      var e;
      Prism.plugins.dataURIHighlight.processGrammar(i.grammar);
    });
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism || "undefined" != typeof global && global.Prism) {
    var n = function n(_n) {
      return _n;
    },
        s = {
      classMap: n,
      prefixString: ""
    };

    Prism.plugins.customClass = {
      map: function map(i) {
        s.classMap = "function" == typeof i ? i : function (n) {
          return i[n] || n;
        };
      },
      prefix: function prefix(n) {
        s.prefixString = n;
      }
    }, Prism.hooks.add("wrap", function (i) {
      (s.classMap !== n || s.prefixString) && (i.classes = i.classes.map(function (n) {
        return s.prefixString + s.classMap(n, i.language);
      }));
    });
  }
}();
"undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function (e) {
  e = e || document;
  var i = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    ps1: "powershell",
    psm1: "powershell",
    sh: "bash",
    bat: "batch",
    h: "c",
    tex: "latex"
  };
  Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function (e) {
    if (!e.hasAttribute("data-src-loaded")) {
      for (var t, a = e.getAttribute("data-src"), s = e, n = /\blang(?:uage)?-([\w-]+)\b/i; s && !n.test(s.className);) {
        s = s.parentNode;
      }

      if (s && (t = (e.className.match(n) || [, ""])[1]), !t) {
        var r = (a.match(/\.(\w+)$/) || [, ""])[1];
        t = i[r] || r;
      }

      var o = document.createElement("code");
      o.className = "language-" + t, e.textContent = "", o.textContent = "Loading…", e.appendChild(o);
      var l = new XMLHttpRequest();
      l.open("GET", a, !0), l.onreadystatechange = function () {
        4 == l.readyState && (l.status < 400 && l.responseText ? (o.textContent = l.responseText, Prism.highlightElement(o), e.setAttribute("data-src-loaded", "")) : 400 <= l.status ? o.textContent = "✖ Error " + l.status + " while fetching file: " + l.statusText : o.textContent = "✖ Error: File does not exist or is empty");
      }, l.send(null);
    }
  });
}, document.addEventListener("DOMContentLoaded", function () {
  self.Prism.fileHighlight();
}));
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var r = [],
        i = {},
        a = function a() {};

    Prism.plugins.toolbar = {};

    var t = Prism.plugins.toolbar.registerButton = function (t, a) {
      var e;
      e = "function" == typeof a ? a : function (t) {
        var e;
        return "function" == typeof a.onClick ? ((e = document.createElement("button")).type = "button", e.addEventListener("click", function () {
          a.onClick.call(this, t);
        })) : "string" == typeof a.url ? (e = document.createElement("a")).href = a.url : e = document.createElement("span"), a.className && e.classList.add(a.className), e.textContent = a.text, e;
      }, t in i ? console.warn('There is a button with the key "' + t + '" registered already.') : r.push(i[t] = e);
    },
        e = Prism.plugins.toolbar.hook = function (n) {
      var t = n.element.parentNode;

      if (t && /pre/i.test(t.nodeName) && !t.parentNode.classList.contains("code-toolbar")) {
        var e = document.createElement("div");
        e.classList.add("code-toolbar"), t.parentNode.insertBefore(e, t), e.appendChild(t);
        var o = document.createElement("div");
        o.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (r = document.body.getAttribute("data-toolbar-order").split(",").map(function (t) {
          return i[t] || a;
        })), r.forEach(function (t) {
          var e = t(n);

          if (e) {
            var a = document.createElement("div");
            a.classList.add("toolbar-item"), a.appendChild(e), o.appendChild(a);
          }
        }), e.appendChild(o);
      }
    };

    t("label", function (t) {
      var e = t.element.parentNode;

      if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
        var a,
            n,
            o = e.getAttribute("data-label");

        try {
          n = document.querySelector("template#" + o);
        } catch (t) {}

        return n ? a = n.content : (e.hasAttribute("data-url") ? (a = document.createElement("a")).href = e.getAttribute("data-url") : a = document.createElement("span"), a.textContent = o), a;
      }
    }), Prism.hooks.add("complete", e);
  }
}();
"undefined" != typeof self && !self.Prism || "undefined" != typeof global && !global.Prism || Prism.hooks.add("wrap", function (e) {
  "keyword" === e.type && e.classes.push("keyword-" + e.content);
});
!function () {
  if ("undefined" != typeof self && "undefined" != typeof Prism && "undefined" != typeof document) {
    var i = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
        t = /^#?(?=(?:[\da-f]{1,2}){3,4}$)([\da-f][\da-f]?)([\da-f][\da-f]?)([\da-f][\da-f]?)([\da-f][\da-f]?)?$/i,
        d = [function (n) {
      var e = t.exec(n);

      if (e) {
        var o = n.length <= 4 ? 1 / 15 : 1 / 255;
        return "rgba(" + e.slice(1, 4).map(function (n) {
          return String(Math.round(parseInt(n, 16) * o * 255));
        }).join(",") + "," + (void 0 === e[4] ? "1" : (parseInt(e[4], 16) * o).toFixed(3)) + ")";
      }
    }, function (n) {
      var e = new Option().style;
      return e.color = n, e.color ? n : void 0;
    }];
    Prism.hooks.add("wrap", function (n) {
      if ("color" === n.type || "hexcode" === n.type) {
        for (var e, o = n.content, t = o.split(i).join(""), r = 0, a = d.length; r < a && !e; r++) {
          e = d[r](t);
        }

        if (!e) return;
        var f = '<span class="inline-color" style="background-color:' + e + ';"></span>';
        n.content = f + o;
      }
    });
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document && document.createElement) {
    var c = {
      javascript: "clike",
      actionscript: "javascript",
      arduino: "cpp",
      aspnet: ["markup", "csharp"],
      bison: "c",
      c: "clike",
      csharp: "clike",
      cpp: "c",
      coffeescript: "javascript",
      crystal: "ruby",
      "css-extras": "css",
      d: "clike",
      dart: "clike",
      django: "markup-templating",
      ejs: ["javascript", "markup-templating"],
      etlua: ["lua", "markup-templating"],
      erb: ["ruby", "markup-templating"],
      fsharp: "clike",
      "firestore-security-rules": "clike",
      flow: "javascript",
      ftl: "markup-templating",
      glsl: "clike",
      gml: "clike",
      go: "clike",
      groovy: "clike",
      haml: "ruby",
      handlebars: "markup-templating",
      haxe: "clike",
      java: "clike",
      javadoc: ["markup", "java", "javadoclike"],
      jolie: "clike",
      jsdoc: ["javascript", "javadoclike"],
      "js-extras": "javascript",
      "js-templates": "javascript",
      jsonp: "json",
      json5: "json",
      kotlin: "clike",
      less: "css",
      lilypond: "scheme",
      markdown: "markup",
      "markup-templating": "markup",
      n4js: "javascript",
      nginx: "clike",
      objectivec: "c",
      opencl: "cpp",
      parser: "markup",
      php: ["clike", "markup-templating"],
      phpdoc: ["php", "javadoclike"],
      "php-extras": "php",
      plsql: "sql",
      processing: "clike",
      protobuf: "clike",
      pug: ["markup", "javascript"],
      qore: "clike",
      jsx: ["markup", "javascript"],
      tsx: ["jsx", "typescript"],
      reason: "clike",
      ruby: "clike",
      sass: "css",
      scss: "css",
      scala: "java",
      "shell-session": "bash",
      smarty: "markup-templating",
      solidity: "clike",
      soy: "markup-templating",
      sparql: "turtle",
      sqf: "clike",
      swift: "clike",
      tap: "yaml",
      textile: "markup",
      tt2: ["clike", "markup-templating"],
      twig: "markup",
      typescript: "javascript",
      "t4-cs": ["t4-templating", "csharp"],
      "t4-vb": ["t4-templating", "visual-basic"],
      vala: "clike",
      vbnet: "basic",
      velocity: "markup",
      wiki: "markup",
      xeora: "markup",
      xquery: "markup"
    },
        l = {
      html: "markup",
      xml: "markup",
      svg: "markup",
      mathml: "markup",
      js: "javascript",
      g4: "antlr4",
      adoc: "asciidoc",
      shell: "bash",
      rbnf: "bnf",
      cs: "csharp",
      dotnet: "csharp",
      coffee: "coffeescript",
      jinja2: "django",
      "dns-zone": "dns-zone-file",
      dockerfile: "docker",
      gamemakerlanguage: "gml",
      hs: "haskell",
      tex: "latex",
      context: "latex",
      ly: "lilypond",
      emacs: "lisp",
      elisp: "lisp",
      "emacs-lisp": "lisp",
      md: "markdown",
      moon: "moonscript",
      n4jsd: "n4js",
      objectpascal: "pascal",
      px: "pcaxis",
      py: "python",
      robot: "robot-framework",
      rb: "ruby",
      rq: "sparql",
      trig: "turtle",
      ts: "typescript",
      t4: "t4-cs",
      vb: "visual-basic",
      xeoracube: "xeora",
      yml: "yaml"
    },
        n = {},
        a = "components/",
        e = Prism.util.currentScript();

    if (e) {
      var t = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)js$/i,
          s = /[\w-]+\.(?:min\.)js$/i;
      if (e.hasAttribute("data-autoloader-path")) a = e.getAttribute("data-autoloader-path").trim().replace(/\/?$/, "/");else {
        var i = e.src;
        t.test(i) ? a = i.replace(t, "components/") : s.test(i) && (a = i.replace(s, "components/"));
      }
    }

    var p = Prism.plugins.autoloader = {
      languages_path: a,
      use_minified: !0,
      loadLanguages: o
    };
    Prism.hooks.add("complete", function (a) {
      a.element && a.language && !a.grammar && "none" !== a.language && function (a, e) {
        a in l && (a = l[a]);
        var t = e.getAttribute("data-dependencies"),
            s = e.parentElement;
        !t && s && "pre" === s.tagName.toLowerCase() && (t = s.getAttribute("data-dependencies")), o(t = t ? t.split(/\s*,\s*/g) : [], function () {
          m(a, function () {
            Prism.highlightElement(e);
          });
        });
      }(a.language, a.element);
    });
  }

  function o(a, e, t) {
    "string" == typeof a && (a = [a]);
    var s = a.length,
        i = 0,
        r = !1;

    function c() {
      r || ++i === s && e && e(a);
    }

    0 !== s ? a.forEach(function (a) {
      m(a, c, function () {
        r || (r = !0, t && t(a));
      });
    }) : e && setTimeout(e, 0);
  }

  function m(e, t, s) {
    var i = 0 <= e.indexOf("!");
    e = e.replace("!", ""), e = l[e] || e;

    var a = function a() {
      var a = n[e];
      if (a || (a = n[e] = {
        callbacks: []
      }), a.callbacks.push({
        success: t,
        error: s
      }), !i && Prism.languages[e]) u(e, "success");else if (!i && a.error) u(e, "error");else if (i || !a.loading) {
        a.loading = !0, function (a, e, t) {
          var s = document.createElement("script");
          s.src = a, s.async = !0, s.onload = function () {
            document.body.removeChild(s), e && e();
          }, s.onerror = function () {
            document.body.removeChild(s), t && t();
          }, document.body.appendChild(s);
        }(function (a) {
          return p.languages_path + "prism-" + a + (p.use_minified ? ".min" : "") + ".js";
        }(e), function () {
          a.loading = !1, u(e, "success");
        }, function () {
          a.loading = !1, a.error = !0, u(e, "error");
        });
      }
    },
        r = c[e];

    r && r.length ? o(r, a, s) : a();
  }

  function u(a, e) {
    if (n[a]) {
      for (var t = n[a].callbacks, s = 0, i = t.length; s < i; s++) {
        var r = t[s][e];
        r && setTimeout(r, 0);
      }

      t.length = 0;
    }
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var u = /(?:^|\s)command-line(?:\s|$)/;
    Prism.hooks.add("before-highlight", function (e) {
      var t = e.vars = e.vars || {},
          a = t["command-line"] = t["command-line"] || {};

      if (!a.complete && e.code) {
        var n = e.element.parentNode;
        if (n && /pre/i.test(n.nodeName) && (u.test(n.className) || u.test(e.element.className))) {
          if (e.element.querySelector(".command-line-prompt")) a.complete = !0;else {
            var r = e.code.split("\n");
            a.numberOfLines = r.length;
            var s = a.outputLines = [],
                o = n.getAttribute("data-output"),
                i = n.getAttribute("data-filter-output");

            if (o || "" === o) {
              o = o.split(",");

              for (var l = 0; l < o.length; l++) {
                var m = o[l].split("-"),
                    p = parseInt(m[0], 10),
                    d = 2 === m.length ? parseInt(m[1], 10) : p;

                if (!isNaN(p) && !isNaN(d)) {
                  p < 1 && (p = 1), d > r.length && (d = r.length), d--;

                  for (var c = --p; c <= d; c++) {
                    s[c] = r[c], r[c] = "";
                  }
                }
              }
            } else if (i) for (l = 0; l < r.length; l++) {
              0 === r[l].indexOf(i) && (s[l] = r[l].slice(i.length), r[l] = "");
            }

            e.code = r.join("\n");
          }
        } else a.complete = !0;
      } else a.complete = !0;
    }), Prism.hooks.add("before-insert", function (e) {
      var t = e.vars = e.vars || {},
          a = t["command-line"] = t["command-line"] || {};

      if (!a.complete) {
        for (var n = e.highlightedCode.split("\n"), r = 0, s = (a.outputLines || []).length; r < s; r++) {
          a.outputLines.hasOwnProperty(r) && (n[r] = a.outputLines[r]);
        }

        e.highlightedCode = n.join("\n");
      }
    }), Prism.hooks.add("complete", function (e) {
      var t = e.vars = e.vars || {},
          a = t["command-line"] = t["command-line"] || {};

      if (!a.complete) {
        var n = e.element.parentNode;
        u.test(e.element.className) && (e.element.className = e.element.className.replace(u, " ")), u.test(n.className) || (n.className += " command-line");

        var r = function r(e, t) {
          return (n.getAttribute(e) || t).replace(/"/g, "&quot");
        },
            s = new Array((a.numberOfLines || 0) + 1),
            o = r("data-prompt", "");

        if ("" !== o) s = s.join('<span data-prompt="' + o + '"></span>');else {
          var i = r("data-user", "user"),
              l = r("data-host", "localhost");
          s = s.join('<span data-user="' + i + '" data-host="' + l + '"></span>');
        }
        var m = document.createElement("span");
        m.className = "command-line-prompt", m.innerHTML = s;

        for (var p = 0, d = (a.outputLines || []).length; p < d; p++) {
          if (a.outputLines.hasOwnProperty(p)) {
            var c = m.children[p];
            c.removeAttribute("data-user"), c.removeAttribute("data-host"), c.removeAttribute("data-prompt");
          }
        }

        e.element.insertBefore(m, e.element.firstChild), a.complete = !0;
      }
    });
  }
}();
!function () {
  var i = Object.assign || function (e, n) {
    for (var t in n) {
      n.hasOwnProperty(t) && (e[t] = n[t]);
    }

    return e;
  };

  function e(e) {
    this.defaults = i({}, e);
  }

  function l(e) {
    for (var n = 0, t = 0; t < e.length; ++t) {
      e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3);
    }

    return e.length + n;
  }

  e.prototype = {
    setDefaults: function setDefaults(e) {
      this.defaults = i(this.defaults, e);
    },
    normalize: function normalize(e, n) {
      for (var t in n = i(this.defaults, n)) {
        var r = t.replace(/-(\w)/g, function (e, n) {
          return n.toUpperCase();
        });
        "normalize" !== t && "setDefaults" !== r && n[t] && this[r] && (e = this[r].call(this, e, n[t]));
      }

      return e;
    },
    leftTrim: function leftTrim(e) {
      return e.replace(/^\s+/, "");
    },
    rightTrim: function rightTrim(e) {
      return e.replace(/\s+$/, "");
    },
    tabsToSpaces: function tabsToSpaces(e, n) {
      return n = 0 | n || 4, e.replace(/\t/g, new Array(++n).join(" "));
    },
    spacesToTabs: function spacesToTabs(e, n) {
      return n = 0 | n || 4, e.replace(RegExp(" {" + n + "}", "g"), "\t");
    },
    removeTrailing: function removeTrailing(e) {
      return e.replace(/\s*?$/gm, "");
    },
    removeInitialLineFeed: function removeInitialLineFeed(e) {
      return e.replace(/^(?:\r?\n|\r)/, "");
    },
    removeIndent: function removeIndent(e) {
      var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
      return n && n[0].length ? (n.sort(function (e, n) {
        return e.length - n.length;
      }), n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e) : e;
    },
    indent: function indent(e, n) {
      return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("\t") + "$&");
    },
    breakLines: function breakLines(e, n) {
      n = !0 === n ? 80 : 0 | n || 80;

      for (var t = e.split("\n"), r = 0; r < t.length; ++r) {
        if (!(l(t[r]) <= n)) {
          for (var i = t[r].split(/(\s+)/g), o = 0, a = 0; a < i.length; ++a) {
            var s = l(i[a]);
            n < (o += s) && (i[a] = "\n" + i[a], o = s);
          }

          t[r] = i.join("");
        }
      }

      return t.join("\n");
    }
  },  true && module.exports && (module.exports = e), "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e({
    "remove-trailing": !0,
    "remove-indent": !0,
    "left-trim": !0,
    "right-trim": !0
  }), Prism.hooks.add("before-sanity-check", function (e) {
    var n = Prism.plugins.NormalizeWhitespace;
    if (!e.settings || !1 !== e.settings["whitespace-normalization"]) if (e.element && e.element.parentNode || !e.code) {
      var t = e.element.parentNode,
          r = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;

      if (e.code && t && "pre" === t.nodeName.toLowerCase() && !r.test(t.className) && !r.test(e.element.className)) {
        for (var i = t.childNodes, o = "", a = "", s = !1, l = 0; l < i.length; ++l) {
          var c = i[l];
          c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, t.removeChild(c), --l);
        }

        if (e.element.children.length && Prism.plugins.KeepMarkup) {
          var u = o + e.element.innerHTML + a;
          e.element.innerHTML = n.normalize(u, e.settings), e.code = e.element.textContent;
        } else e.code = o + e.code + a, e.code = n.normalize(e.code, e.settings);
      }
    } else e.code = n.normalize(e.code, e.settings);
  }));
}();
!function () {
  if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
    var i = {
      tab: /\t/,
      crlf: /\r\n/,
      lf: /\n/,
      cr: /\r/,
      space: / /
    };
    Prism.hooks.add("before-highlight", function (r) {
      s(r.grammar);
    });
  }

  function f(r, e) {
    var i = r[e];

    switch (Prism.util.type(i)) {
      case "RegExp":
        var a = {};
        r[e] = {
          pattern: i,
          inside: a
        }, s(a);
        break;

      case "Array":
        for (var n = 0, t = i.length; n < t; n++) {
          f(i, n);
        }

        break;

      default:
        s(a = i.inside || (i.inside = {}));
    }
  }

  function s(r) {
    if (r && !r.tab) {
      for (var e in i) {
        i.hasOwnProperty(e) && (r[e] = i[e]);
      }

      for (var e in r) {
        r.hasOwnProperty(e) && !i[e] && ("rest" === e ? s(r.rest) : f(r, e));
      }
    }
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) if (Prism.plugins.toolbar) {
    var r = {
      html: "HTML",
      xml: "XML",
      svg: "SVG",
      mathml: "MathML",
      css: "CSS",
      clike: "C-like",
      js: "JavaScript",
      abap: "ABAP",
      abnf: "Augmented Backus–Naur form",
      antlr4: "ANTLR4",
      g4: "ANTLR4",
      apacheconf: "Apache Configuration",
      apl: "APL",
      aql: "AQL",
      arff: "ARFF",
      asciidoc: "AsciiDoc",
      adoc: "AsciiDoc",
      asm6502: "6502 Assembly",
      aspnet: "ASP.NET (C#)",
      autohotkey: "AutoHotkey",
      autoit: "AutoIt",
      shell: "Bash",
      basic: "BASIC",
      bbcode: "BBcode",
      bnf: "Backus–Naur form",
      rbnf: "Routing Backus–Naur form",
      csharp: "C#",
      cs: "C#",
      dotnet: "C#",
      cpp: "C++",
      cil: "CIL",
      coffee: "CoffeeScript",
      cmake: "CMake",
      csp: "Content-Security-Policy",
      "css-extras": "CSS Extras",
      django: "Django/Jinja2",
      jinja2: "Django/Jinja2",
      "dns-zone-file": "DNS zone file",
      "dns-zone": "DNS zone file",
      dockerfile: "Docker",
      ebnf: "Extended Backus–Naur form",
      ejs: "EJS",
      etlua: "Embedded Lua templating",
      erb: "ERB",
      fsharp: "F#",
      "firestore-security-rules": "Firestore security rules",
      ftl: "FreeMarker Template Language",
      gcode: "G-code",
      gdscript: "GDScript",
      gedcom: "GEDCOM",
      glsl: "GLSL",
      gml: "GameMaker Language",
      gamemakerlanguage: "GameMaker Language",
      graphql: "GraphQL",
      hs: "Haskell",
      hcl: "HCL",
      http: "HTTP",
      hpkp: "HTTP Public-Key-Pins",
      hsts: "HTTP Strict-Transport-Security",
      ichigojam: "IchigoJam",
      inform7: "Inform 7",
      javadoc: "JavaDoc",
      javadoclike: "JavaDoc-like",
      javastacktrace: "Java stack trace",
      jq: "JQ",
      jsdoc: "JSDoc",
      "js-extras": "JS Extras",
      "js-templates": "JS Templates",
      json: "JSON",
      jsonp: "JSONP",
      json5: "JSON5",
      latex: "LaTeX",
      tex: "TeX",
      context: "ConTeXt",
      lilypond: "LilyPond",
      ly: "LilyPond",
      emacs: "Lisp",
      elisp: "Lisp",
      "emacs-lisp": "Lisp",
      lolcode: "LOLCODE",
      md: "Markdown",
      "markup-templating": "Markup templating",
      matlab: "MATLAB",
      mel: "MEL",
      moon: "MoonScript",
      n1ql: "N1QL",
      n4js: "N4JS",
      n4jsd: "N4JS",
      "nand2tetris-hdl": "Nand To Tetris HDL",
      nasm: "NASM",
      nginx: "nginx",
      nsis: "NSIS",
      objectivec: "Objective-C",
      ocaml: "OCaml",
      opencl: "OpenCL",
      parigp: "PARI/GP",
      objectpascal: "Object Pascal",
      pcaxis: "PC-Axis",
      px: "PC-Axis",
      php: "PHP",
      phpdoc: "PHPDoc",
      "php-extras": "PHP Extras",
      plsql: "PL/SQL",
      powershell: "PowerShell",
      properties: ".properties",
      protobuf: "Protocol Buffers",
      py: "Python",
      q: "Q (kdb+ database)",
      jsx: "React JSX",
      tsx: "React TSX",
      renpy: "Ren'py",
      rest: "reST (reStructuredText)",
      "robot-framework": "Robot Framework",
      robot: "Robot Framework",
      rb: "Ruby",
      sas: "SAS",
      sass: "Sass (Sass)",
      scss: "Sass (Scss)",
      "shell-session": "Shell session",
      solidity: "Solidity (Ethereum)",
      soy: "Soy (Closure Template)",
      sparql: "SPARQL",
      rq: "SPARQL",
      "splunk-spl": "Splunk SPL",
      sqf: "SQF: Status Quo Function (Arma 3)",
      sql: "SQL",
      tap: "TAP",
      toml: "TOML",
      tt2: "Template Toolkit 2",
      trig: "TriG",
      ts: "TypeScript",
      "t4-cs": "T4 Text Templates (C#)",
      t4: "T4 Text Templates (C#)",
      "t4-vb": "T4 Text Templates (VB)",
      "t4-templating": "T4 templating",
      vbnet: "VB.Net",
      vhdl: "VHDL",
      vim: "vim",
      "visual-basic": "Visual Basic",
      vb: "Visual Basic",
      wasm: "WebAssembly",
      wiki: "Wiki markup",
      xeoracube: "XeoraCube",
      xojo: "Xojo (REALbasic)",
      xquery: "XQuery",
      yaml: "YAML",
      yml: "YAML"
    };
    Prism.plugins.toolbar.registerButton("show-language", function (e) {
      var a = e.element.parentNode;

      if (a && /pre/i.test(a.nodeName)) {
        var s,
            t = a.getAttribute("data-language") || r[e.language] || ((s = e.language) ? (s.substring(0, 1).toUpperCase() + s.substring(1)).replace(/s(?=cript)/, "S") : s);

        if (t) {
          var o = document.createElement("span");
          return o.textContent = t, o;
        }
      }
    });
  } else console.warn("Show Languages plugin loaded before Toolbar plugin.");
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var c = /(?:^|\s)match-braces(?:\s|$)/,
        a = /(?:^|\s)brace-hover(?:\s|$)/,
        l = /(?:^|\s)brace-selected(?:\s|$)/,
        n = /(?:^|\s)no-brace-hover(?:\s|$)/,
        t = /(?:^|\s)no-brace-select(?:\s|$)/,
        u = {
      "(": ")",
      "[": "]",
      "{": "}"
    },
        f = {
      "(": "brace-round",
      "[": "brace-square",
      "{": "brace-curly"
    },
        m = 0,
        r = /^(pair-\d+-)(open|close)$/;
    Prism.hooks.add("complete", function (e) {
      var a = e.element,
          n = a.parentElement;

      if (n && "PRE" == n.tagName) {
        for (var t = [], r = a; r; r = r.parentElement) {
          if (c.test(r.className)) {
            t.push("(", "[", "{");
            break;
          }
        }

        if (0 != t.length) {
          n.__listenerAdded || (n.addEventListener("mousedown", function () {
            var e = n.querySelector("code");
            Array.prototype.slice.call(e.querySelectorAll(".brace-selected")).forEach(function (e) {
              e.className = e.className.replace(l, " ");
            });
          }), Object.defineProperty(n, "__listenerAdded", {
            value: !0
          }));
          var o = Array.prototype.slice.call(a.querySelectorAll("span.token.punctuation")),
              i = [];
          t.forEach(function (e) {
            for (var a = u[e], n = f[e], t = [], r = [], s = 0; s < o.length; s++) {
              var c = o[s];

              if (0 == c.childElementCount) {
                var l = c.textContent;
                l === e ? (i.push({
                  index: s,
                  open: !0,
                  element: c
                }), c.className += " " + n, c.className += " brace-open", r.push(s)) : l === a && (i.push({
                  index: s,
                  open: !1,
                  element: c
                }), c.className += " " + n, c.className += " brace-close", r.length && t.push([s, r.pop()]));
              }
            }

            t.forEach(function (e) {
              var a = "pair-" + m++ + "-",
                  n = o[e[0]],
                  t = o[e[1]];
              n.id = a + "open", t.id = a + "close", [n, t].forEach(function (e) {
                e.addEventListener("mouseenter", p), e.addEventListener("mouseleave", d), e.addEventListener("click", h);
              });
            });
          });
          var s = 0;
          i.sort(function (e, a) {
            return e.index - a.index;
          }), i.forEach(function (e) {
            e.open ? (e.element.className += " brace-level-" + (s % 12 + 1), s++) : (s = Math.max(0, s - 1), e.element.className += " brace-level-" + (s % 12 + 1));
          });
        }
      }
    });
  }

  function s(e) {
    var a = r.exec(e.id);
    return document.querySelector("#" + a[1] + ("open" == a[2] ? "close" : "open"));
  }

  function p() {
    for (var e = this.parentElement; e; e = e.parentElement) {
      if (n.test(e.className)) return;
    }

    [this, s(this)].forEach(function (e) {
      e.className = (e.className.replace(a, " ") + " brace-hover").replace(/\s+/g, " ");
    });
  }

  function d() {
    [this, s(this)].forEach(function (e) {
      e.className = e.className.replace(a, " ");
    });
  }

  function h() {
    for (var e = this.parentElement; e; e = e.parentElement) {
      if (t.test(e.className)) return;
    }

    [this, s(this)].forEach(function (e) {
      e.className = (e.className.replace(l, " ") + " brace-selected").replace(/\s+/g, " ");
    });
  }
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/notify.scss":
/*!************************************!*\
  !*** ./resources/sass/notify.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/notify.scss ./resources/sass/app.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mckenzie/Sites/packages/laravel-notify/packages/mckenziearts/laravel-notify/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /Users/mckenzie/Sites/packages/laravel-notify/packages/mckenziearts/laravel-notify/resources/sass/notify.scss */"./resources/sass/notify.scss");
module.exports = __webpack_require__(/*! /Users/mckenzie/Sites/packages/laravel-notify/packages/mckenziearts/laravel-notify/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });