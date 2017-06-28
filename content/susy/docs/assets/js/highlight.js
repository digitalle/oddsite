!(function(e) {
  var n =
    ('object' == typeof window && window) || ('object' == typeof self && self);
  'undefined' != typeof exports
    ? e(exports)
    : n &&
        ((n.hljs = e({})), 'function' == typeof define &&
          define.amd &&
          define([], function() {
            return n.hljs;
          }));
})(function(e) {
  function n(e) {
    return e.replace(/[&<>]/gm, function(e) {
      return C[e];
    });
  }
  function t(e) {
    return e.nodeName.toLowerCase();
  }
  function a(e, n) {
    var t = e && e.exec(n);
    return t && 0 === t.index;
  }
  function i(e) {
    return O.test(e);
  }
  function r(e) {
    var n, t, a, r, s = e.className + ' ';
    if (((s += e.parentNode ? e.parentNode.className : ''), (t = x.exec(s))))
      return v(t[1]) ? t[1] : 'no-highlight';
    for (
      (n = 0), (a = (s = s.split(/\s+/)).length);
      n < a;
      n++
    ) if (((r = s[n]), i(r) || v(r))) return r;
  }
  function s(e, n) {
    var t, a = {};
    for (t in e) a[t] = e[t];
    if (n) for (t in n) a[t] = n[t];
    return a;
  }
  function o(e) {
    var n = [];
    return (function e(a, i) {
      for (
        var r = a.firstChild;
        r;
        r = r.nextSibling
      ) 3 === r.nodeType ? (i += r.nodeValue.length) : 1 === r.nodeType && (n.push({ event: 'start', offset: i, node: r }), (i = e(r, i)), t(r).match(/br|hr|img|input/) || n.push({ event: 'stop', offset: i, node: r }));
      return i;
    })(e, 0), n;
  }
  function l(e, a, i) {
    function r() {
      return e.length && a.length
        ? e[0].offset !== a[0].offset
            ? e[0].offset < a[0].offset ? e : a
            : 'start' === a[0].event ? e : a
        : e.length ? e : a;
    }
    function s(e) {
      function a(e) {
        return ' ' + e.nodeName + '="' + n(e.value) + '"';
      }
      d += '<' + t(e) + N.map.call(e.attributes, a).join('') + '>';
    }
    function o(e) {
      d += '</' + t(e) + '>';
    }
    function l(e) {
      ('start' === e.event ? s : o)(e.node);
    }
    for (var c = 0, d = '', g = []; e.length || a.length; ) {
      var u = r();
      if (
        ((d += n(i.substr(c, u[0].offset - c))), (c = u[0].offset), u === e)
      ) {
        g.reverse().forEach(o);
        do {
          l(u.splice(0, 1)[0]), (u = r());
        } while (u === e && u.length && u[0].offset === c);
        g.reverse().forEach(s);
      } else 'start' === u[0].event ? g.push(u[0].node) : g.pop(), l(u.splice(0, 1)[0]);
    }
    return d + n(i.substr(c));
  }
  function c(e) {
    function n(e) {
      return (e && e.source) || e;
    }
    function t(t, a) {
      return new RegExp(
        n(t),
        'm' + (e.case_insensitive ? 'i' : '') + (a ? 'g' : '')
      );
    }
    function a(i, r) {
      if (!i.compiled) {
        if (
          ((i.compiled = !0), (i.keywords =
            i.keywords || i.beginKeywords), i.keywords)
        ) {
          var o = {},
            l = function(n, t) {
              e.case_insensitive && (t = t.toLowerCase()), t
                .split(' ')
                .forEach(function(e) {
                  var t = e.split('|');
                  o[t[0]] = [n, t[1] ? Number(t[1]) : 1];
                });
            };
          'string' == typeof i.keywords
            ? l('keyword', i.keywords)
            : w(i.keywords).forEach(function(e) {
                l(e, i.keywords[e]);
              }), (i.keywords = o);
        }
        (i.lexemesRe = t(i.lexemes || /\w+/, !0)), r &&
          (i.beginKeywords &&
            (i.begin =
              '\\b(' +
              i.beginKeywords.split(' ').join('|') +
              ')\\b'), i.begin || (i.begin = /\B|\b/), (i.beginRe = t(
            i.begin
          )), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end &&
            (i.endRe = t(i.end)), (i.terminator_end =
            n(i.end) || ''), i.endsWithParent &&
            r.terminator_end &&
            (i.terminator_end +=
              (i.end ? '|' : '') + r.terminator_end)), i.illegal &&
          (i.illegalRe = t(i.illegal)), null == i.relevance &&
          (i.relevance = 1), i.contains || (i.contains = []);
        var c = [];
        i.contains.forEach(function(e) {
          e.variants
            ? e.variants.forEach(function(n) {
                c.push(s(e, n));
              })
            : c.push('self' === e ? i : e);
        }), (i.contains = c), i.contains.forEach(function(e) {
          a(e, i);
        }), i.starts && a(i.starts, r);
        var d = i.contains
          .map(function(e) {
            return e.beginKeywords ? '\\.?(' + e.begin + ')\\.?' : e.begin;
          })
          .concat([i.terminator_end, i.illegal])
          .map(n)
          .filter(Boolean);
        i.terminators = d.length
          ? t(d.join('|'), !0)
          : {
              exec: function() {
                return null;
              }
            };
      }
    }
    a(e);
  }
  function d(e, t, i, r) {
    function s(e, n) {
      var t, i;
      for (
        (t = 0), (i = n.contains.length);
        t < i;
        t++
      ) if (a(n.contains[t].beginRe, e)) return n.contains[t];
    }
    function o(e, n) {
      if (a(e.endRe, n)) {
        for (; e.endsParent && e.parent; )
          e = e.parent;
        return e;
      }
      if (e.endsWithParent) return o(e.parent, n);
    }
    function l(e, n) {
      return !i && a(n.illegalRe, e);
    }
    function u(e, n) {
      var t = _.case_insensitive ? n[0].toLowerCase() : n[0];
      return e.keywords.hasOwnProperty(t) && e.keywords[t];
    }
    function b(e, n, t, a) {
      var i = '<span class="' + (a ? '' : k.classPrefix);
      return (i += e + '">') + n + (t ? '' : S);
    }
    function m() {
      var e, t, a, i;
      if (!w.keywords) return n(x);
      for (
        (i = ''), (t = 0), (w.lexemesRe.lastIndex = 0), (a = w.lexemesRe.exec(
          x
        ));
        a;

      ) (i += n(x.substr(t, a.index - t))), (e = u(w, a)) ? ((R += e[1]), (i += b(e[0], n(a[0])))) : (i += n(a[0])), (t = w.lexemesRe.lastIndex), (a = w.lexemesRe.exec(x));
      return i + n(x.substr(t));
    }
    function f() {
      var e = 'string' == typeof w.subLanguage;
      if (e && !y[w.subLanguage]) return n(x);
      var t = e
        ? d(w.subLanguage, x, !0, M[w.subLanguage])
        : g(x, w.subLanguage.length ? w.subLanguage : void 0);
      return w.relevance > 0 &&
        (R +=
          t.relevance), e && (M[w.subLanguage] = t.top), b(t.language, t.value, !1, !0);
    }
    function p() {
      (O += null != w.subLanguage ? f() : m()), (x = '');
    }
    function E(e) {
      (O += e.className
        ? b(e.className, '', !0)
        : ''), (w = Object.create(e, { parent: { value: w } }));
    }
    function h(e, n) {
      if (((x += e), null == n)) return p(), 0;
      var t = s(n, w);
      if (t)
        return t.skip
          ? (x += n)
          : (t.excludeBegin && (x += n), p(), t.returnBegin ||
              t.excludeBegin ||
              (x = n)), E(t, n), t.returnBegin ? 0 : n.length;
      var a = o(w, n);
      if (a) {
        var i = w;
        i.skip
          ? (x += n)
          : (i.returnEnd || i.excludeEnd || (x += n), p(), i.excludeEnd &&
              (x = n));
        do {
          w.className && (O += S), w.skip || (R += w.relevance), (w = w.parent);
        } while (w !== a.parent);
        return a.starts && E(a.starts, ''), i.returnEnd ? 0 : n.length;
      }
      if (l(n, w))
        throw new Error(
          'Illegal lexeme "' +
            n +
            '" for mode "' +
            (w.className || '<unnamed>') +
            '"'
        );
      return (x += n), n.length || 1;
    }
    var _ = v(e);
    if (!_) throw new Error('Unknown language: "' + e + '"');
    c(_);
    var N, w = r || _, M = {}, O = '';
    for (
      N = w;
      N !== _;
      N = N.parent
    ) N.className && (O = b(N.className, '', !0) + O);
    var x = '', R = 0;
    try {
      for (var C, T, A = 0; ; ) {
        if (((w.terminators.lastIndex = A), !(C = w.terminators.exec(t))))
          break;
        (T = h(t.substr(A, C.index - A), C[0])), (A = C.index + T);
      }
      for (
        h(t.substr(A)), (N = w);
        N.parent;
        N = N.parent
      ) N.className && (O += S);
      return { relevance: R, value: O, language: e, top: w };
    } catch (e) {
      if (e.message && -1 !== e.message.indexOf('Illegal'))
        return { relevance: 0, value: n(t) };
      throw e;
    }
  }
  function g(e, t) {
    t = t || k.languages || w(y);
    var a = { relevance: 0, value: n(e) }, i = a;
    return t.filter(v).forEach(function(n) {
      var t = d(n, e, !1);
      (t.language = n), t.relevance > i.relevance && (i = t), t.relevance > a.relevance && ((i = a), (a = t));
    }), i.language && (a.second_best = i), a;
  }
  function u(e) {
    return k.tabReplace || k.useBR
      ? e.replace(R, function(e, n) {
          return k.useBR && '\n' === e
            ? '<br>'
            : k.tabReplace ? n.replace(/\t/g, k.tabReplace) : void 0;
        })
      : e;
  }
  function b(e, n, t) {
    var a = n ? M[n] : t, i = [e.trim()];
    return e.match(/\bhljs\b/) ||
      i.push('hljs'), -1 === e.indexOf(a) && i.push(a), i.join(' ').trim();
  }
  function m(e) {
    var n, t, a, s, c, m = r(e);
    i(m) ||
      (k.useBR
        ? ((n = document.createElementNS(
            'http://www.w3.org/1999/xhtml',
            'div'
          )).innerHTML = e.innerHTML
            .replace(/\n/g, '')
            .replace(/<br[ \/]*>/g, '\n'))
        : (n = e), (c = n.textContent), (a = m ? d(m, c, !0) : g(c)), (t = o(n))
        .length &&
        (((s = document.createElementNS(
          'http://www.w3.org/1999/xhtml',
          'div'
        )).innerHTML =
          a.value), (a.value = l(t, o(s), c))), (a.value = u(
        a.value
      )), (e.innerHTML = a.value), (e.className = b(
        e.className,
        m,
        a.language
      )), (e.result = {
        language: a.language,
        re: a.relevance
      }), a.second_best &&
        (e.second_best = {
          language: a.second_best.language,
          re: a.second_best.relevance
        }));
  }
  function f(e) {
    k = s(k, e);
  }
  function p() {
    if (!p.called) {
      p.called = !0;
      var e = document.querySelectorAll('pre code');
      N.forEach.call(e, m);
    }
  }
  function E() {
    addEventListener(
      'DOMContentLoaded',
      p,
      !1
    ), addEventListener('load', p, !1);
  }
  function h(n, t) {
    var a = (y[n] = t(e));
    a.aliases &&
      a.aliases.forEach(function(e) {
        M[e] = n;
      });
  }
  function _() {
    return w(y);
  }
  function v(e) {
    return (e = (e || '').toLowerCase()), y[e] || y[M[e]];
  }
  var N = [],
    w = Object.keys,
    y = {},
    M = {},
    O = /^(no-?highlight|plain|text)$/i,
    x = /\blang(?:uage)?-([\w-]+)\b/i,
    R = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    S = '</span>',
    k = {
      classPrefix: 'hljs-',
      tabReplace: null,
      useBR: !1,
      languages: void 0
    },
    C = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
  return (e.highlight = d), (e.highlightAuto = g), (e.fixMarkup = u), (e.highlightBlock = m), (e.configure = f), (e.initHighlighting = p), (e.initHighlightingOnLoad = E), (e.registerLanguage = h), (e.listLanguages = _), (e.getLanguage = v), (e.inherit = s), (e.IDENT_RE = '[a-zA-Z]\\w*'), (e.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*'), (e.NUMBER_RE = '\\b\\d+(\\.\\d+)?'), (e.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'), (e.BINARY_NUMBER_RE = '\\b(0b[01]+)'), (e.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'), (e.BACKSLASH_ESCAPE = { begin: '\\\\[\\s\\S]', relevance: 0 }), (e.APOS_STRING_MODE = { className: 'string', begin: "'", end: "'", illegal: '\\n', contains: [e.BACKSLASH_ESCAPE] }), (e.QUOTE_STRING_MODE = { className: 'string', begin: '"', end: '"', illegal: '\\n', contains: [e.BACKSLASH_ESCAPE] }), (e.PHRASAL_WORDS_MODE = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/ }), (e.COMMENT = function(
    n,
    t,
    a
  ) {
    var i = e.inherit(
      { className: 'comment', begin: n, end: t, contains: [] },
      a || {}
    );
    return i.contains.push(e.PHRASAL_WORDS_MODE), i.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    }), i;
  }), (e.C_LINE_COMMENT_MODE = e.COMMENT('//', '$')), (e.C_BLOCK_COMMENT_MODE = e.COMMENT('/\\*', '\\*/')), (e.HASH_COMMENT_MODE = e.COMMENT('#', '$')), (e.NUMBER_MODE = { className: 'number', begin: e.NUMBER_RE, relevance: 0 }), (e.C_NUMBER_MODE = { className: 'number', begin: e.C_NUMBER_RE, relevance: 0 }), (e.BINARY_NUMBER_MODE = { className: 'number', begin: e.BINARY_NUMBER_RE, relevance: 0 }), (e.CSS_NUMBER_MODE = { className: 'number', begin: e.NUMBER_RE + '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?', relevance: 0 }), (e.REGEXP_MODE = { className: 'regexp', begin: /\//, end: /\/[gimuy]*/, illegal: /\n/, contains: [e.BACKSLASH_ESCAPE, { begin: /\[/, end: /\]/, relevance: 0, contains: [e.BACKSLASH_ESCAPE] }] }), (e.TITLE_MODE = { className: 'title', begin: e.IDENT_RE, relevance: 0 }), (e.UNDERSCORE_TITLE_MODE = { className: 'title', begin: e.UNDERSCORE_IDENT_RE, relevance: 0 }), (e.METHOD_GUARD = { begin: '\\.\\s*' + e.UNDERSCORE_IDENT_RE, relevance: 0 }), e.registerLanguage(
    'css',
    function(e) {
      var n = {
        begin: /[A-Z\_\.\-]+\s*:/,
        returnBegin: !0,
        end: ';',
        endsWithParent: !0,
        contains: [
          {
            className: 'attribute',
            begin: /\S/,
            end: ':',
            excludeEnd: !0,
            starts: {
              endsWithParent: !0,
              excludeEnd: !0,
              contains: [
                {
                  begin: /[\w-]+\(/,
                  returnBegin: !0,
                  contains: [
                    { className: 'built_in', begin: /[\w-]+/ },
                    {
                      begin: /\(/,
                      end: /\)/,
                      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    }
                  ]
                },
                e.CSS_NUMBER_MODE,
                e.QUOTE_STRING_MODE,
                e.APOS_STRING_MODE,
                e.C_BLOCK_COMMENT_MODE,
                { className: 'number', begin: '#[0-9A-Fa-f]+' },
                { className: 'meta', begin: '!important' }
              ]
            }
          }
        ]
      };
      return {
        case_insensitive: !0,
        illegal: /[=\/|'\$]/,
        contains: [
          e.C_BLOCK_COMMENT_MODE,
          { className: 'selector-id', begin: /#[A-Za-z0-9_-]+/ },
          { className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/ },
          { className: 'selector-attr', begin: /\[/, end: /\]/, illegal: '$' },
          {
            className: 'selector-pseudo',
            begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
          },
          {
            begin: '@(font-face|page)',
            lexemes: '[a-z-]+',
            keywords: 'font-face page'
          },
          {
            begin: '@',
            end: '[{;]',
            illegal: /:/,
            contains: [
              { className: 'keyword', begin: /\w+/ },
              {
                begin: /\s/,
                endsWithParent: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  e.CSS_NUMBER_MODE
                ]
              }
            ]
          },
          {
            className: 'selector-tag',
            begin: '[a-zA-Z-][a-zA-Z0-9_-]*',
            relevance: 0
          },
          {
            begin: '{',
            end: '}',
            illegal: /\S/,
            contains: [e.C_BLOCK_COMMENT_MODE, n]
          }
        ]
      };
    }
  ), e.registerLanguage('xml', function(e) {
    var n = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        { className: 'attr', begin: '[A-Za-z0-9\\._:-]+', relevance: 0 },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: 'string',
              endsParent: !0,
              variants: [
                { begin: /"/, end: /"/ },
                { begin: /'/, end: /'/ },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
      case_insensitive: !0,
      contains: [
        {
          className: 'meta',
          begin: '<!DOCTYPE',
          end: '>',
          relevance: 10,
          contains: [{ begin: '\\[', end: '\\]' }]
        },
        e.COMMENT('\x3c!--', '--\x3e', { relevance: 10 }),
        { begin: '<\\!\\[CDATA\\[', end: '\\]\\]>', relevance: 10 },
        {
          begin: /<\?(php)?/,
          end: /\?>/,
          subLanguage: 'php',
          contains: [{ begin: '/\\*', end: '\\*/', skip: !0 }]
        },
        {
          className: 'tag',
          begin: '<style(?=\\s|>|$)',
          end: '>',
          keywords: { name: 'style' },
          contains: [n],
          starts: {
            end: '</style>',
            returnEnd: !0,
            subLanguage: ['css', 'xml']
          }
        },
        {
          className: 'tag',
          begin: '<script(?=\\s|>|$)',
          end: '>',
          keywords: { name: 'script' },
          contains: [n],
          starts: {
            end: '<\/script>',
            returnEnd: !0,
            subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
          }
        },
        {
          className: 'meta',
          variants: [
            { begin: /<\?xml/, end: /\?>/, relevance: 10 },
            { begin: /<\?\w+/, end: /\?>/ }
          ]
        },
        {
          className: 'tag',
          begin: '</?',
          end: '/?>',
          contains: [
            { className: 'name', begin: /[^\/><\s]+/, relevance: 0 },
            n
          ]
        }
      ]
    };
  }), e.registerLanguage('django', function(e) {
    var n = {
      begin: /\|[A-Za-z]+:?/,
      keywords: {
        name: 'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone'
      },
      contains: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE]
    };
    return {
      aliases: ['jinja'],
      case_insensitive: !0,
      subLanguage: 'xml',
      contains: [
        e.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/),
        e.COMMENT(/\{#/, /#}/),
        {
          className: 'template-tag',
          begin: /\{%/,
          end: /%}/,
          contains: [
            {
              className: 'name',
              begin: /\w+/,
              keywords: {
                name: 'comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim'
              },
              starts: {
                endsWithParent: !0,
                keywords: 'in by as',
                contains: [n],
                relevance: 0
              }
            }
          ]
        },
        {
          className: 'template-variable',
          begin: /\{\{/,
          end: /}}/,
          contains: [n]
        }
      ]
    };
  }), e.registerLanguage('javascript', function(e) {
    return {
      aliases: ['js', 'jsx'],
      keywords: {
        keyword: 'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
        literal: 'true false null undefined NaN Infinity',
        built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
      },
      contains: [
        {
          className: 'meta',
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        },
        { className: 'meta', begin: /^#!/, end: /$/ },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        {
          className: 'string',
          begin: '`',
          end: '`',
          contains: [
            e.BACKSLASH_ESCAPE,
            { className: 'subst', begin: '\\$\\{', end: '\\}' }
          ]
        },
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: 'number',
          variants: [
            { begin: '\\b(0[bB][01]+)' },
            { begin: '\\b(0[oO][0-7]+)' },
            { begin: e.C_NUMBER_RE }
          ],
          relevance: 0
        },
        {
          begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.REGEXP_MODE,
            {
              begin: /</,
              end: /(\/\w+|\w+\/)>/,
              subLanguage: 'xml',
              contains: [
                { begin: /<\w+\s*\/>/, skip: !0 },
                {
                  begin: /<\w+/,
                  end: /(\/\w+|\w+\/)>/,
                  skip: !0,
                  contains: ['self']
                }
              ]
            }
          ],
          relevance: 0
        },
        {
          className: 'function',
          beginKeywords: 'function',
          end: /\{/,
          excludeEnd: !0,
          contains: [
            e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
            {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }
          ],
          illegal: /\[|%/
        },
        { begin: /\$[(.]/ },
        e.METHOD_GUARD,
        {
          className: 'class',
          beginKeywords: 'class',
          end: /[{;=]/,
          excludeEnd: !0,
          illegal: /[:"\[\]]/,
          contains: [{ beginKeywords: 'extends' }, e.UNDERSCORE_TITLE_MODE]
        },
        { beginKeywords: 'constructor', end: /\{/, excludeEnd: !0 }
      ],
      illegal: /#(?!!)/
    };
  }), e.registerLanguage('json', function(e) {
    var n = { literal: 'true false null' },
      t = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
      a = {
        end: ',',
        endsWithParent: !0,
        excludeEnd: !0,
        contains: t,
        keywords: n
      },
      i = {
        begin: '{',
        end: '}',
        contains: [
          {
            className: 'attr',
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE],
            illegal: '\\n'
          },
          e.inherit(a, { begin: /:/ })
        ],
        illegal: '\\S'
      },
      r = {
        begin: '\\[',
        end: '\\]',
        contains: [e.inherit(a)],
        illegal: '\\S'
      };
    return t.splice(
      t.length,
      0,
      i,
      r
    ), { contains: t, keywords: n, illegal: '\\S' };
  }), e.registerLanguage('markdown', function(e) {
    return {
      aliases: ['md', 'mkdown', 'mkd'],
      contains: [
        {
          className: 'section',
          variants: [
            { begin: '^#{1,6}', end: '$' },
            { begin: '^.+?\\n[=-]{2,}$' }
          ]
        },
        { begin: '<', end: '>', subLanguage: 'xml', relevance: 0 },
        { className: 'bullet', begin: '^([*+-]|(\\d+\\.))\\s+' },
        { className: 'strong', begin: '[*_]{2}.+?[*_]{2}' },
        {
          className: 'emphasis',
          variants: [{ begin: '\\*.+?\\*' }, { begin: '_.+?_', relevance: 0 }]
        },
        { className: 'quote', begin: '^>\\s+', end: '$' },
        {
          className: 'code',
          variants: [
            { begin: '^```w*s*$', end: '^```s*$' },
            { begin: '`.+?`' },
            { begin: '^( {4}|\t)', end: '$', relevance: 0 }
          ]
        },
        { begin: '^[-\\*]{3,}', end: '$' },
        {
          begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
          returnBegin: !0,
          contains: [
            {
              className: 'string',
              begin: '\\[',
              end: '\\]',
              excludeBegin: !0,
              returnEnd: !0,
              relevance: 0
            },
            {
              className: 'link',
              begin: '\\]\\(',
              end: '\\)',
              excludeBegin: !0,
              excludeEnd: !0
            },
            {
              className: 'symbol',
              begin: '\\]\\[',
              end: '\\]',
              excludeBegin: !0,
              excludeEnd: !0
            }
          ],
          relevance: 10
        },
        {
          begin: /^\[[^\n]+\]:/,
          returnBegin: !0,
          contains: [
            {
              className: 'symbol',
              begin: /\[/,
              end: /\]/,
              excludeBegin: !0,
              excludeEnd: !0
            },
            { className: 'link', begin: /:\s*/, end: /$/, excludeBegin: !0 }
          ]
        }
      ]
    };
  }), e.registerLanguage('scss', function(e) {
    var n = { className: 'variable', begin: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b' },
      t = { className: 'number', begin: '#[0-9A-Fa-f]+' };
    e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE;
    return {
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        { className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+', relevance: 0 },
        {
          className: 'selector-class',
          begin: '\\.[A-Za-z0-9_-]+',
          relevance: 0
        },
        { className: 'selector-attr', begin: '\\[', end: '\\]', illegal: '$' },
        {
          className: 'selector-tag',
          begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
          relevance: 0
        },
        {
          begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
        },
        {
          begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
        },
        n,
        {
          className: 'attribute',
          begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
          illegal: '[^\\s]'
        },
        {
          begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
        },
        {
          begin: ':',
          end: ';',
          contains: [
            n,
            t,
            e.CSS_NUMBER_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            { className: 'meta', begin: '!important' }
          ]
        },
        {
          begin: '@',
          end: '[{;]',
          keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
          contains: [
            n,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            t,
            e.CSS_NUMBER_MODE,
            { begin: '\\s[A-Za-z0-9_.-]+', relevance: 0 }
          ]
        }
      ]
    };
  }), e;
});
