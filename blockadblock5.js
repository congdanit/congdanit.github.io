var CfHISngcuFis = '',
    dNwlZSwocm = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) CfHISngcuFis += dNwlZSwocm.charAt(Math.floor(Math.random() * dNwlZSwocm.length));
var JikDvOqVyg = 1,
    KLWbWDNWBu = 253,
    tFRFJMqSNh = 166,
    HQJSMIRjmC = 55,
    LuTwPAELvh = function(t) {
        var i = !1,
            o = function() {
                if (document.addEventListener) {
                    document.removeEventListener('DOMContentLoaded', e);
                    window.removeEventListener('load', e)
                } else {
                    document.detachEvent('onreadystatechange', e);
                    window.detachEvent('onload', e)
                }
            },
            e = function() {
                if (!i && (document.addEventListener || event.type === 'load' || document.readyState === 'complete')) {
                    i = !0;
                    o();
                    t()
                }
            };
        if (document.readyState === 'complete') {
            t()
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', e);
            window.addEventListener('load', e)
        } else {
            document.attachEvent('onreadystatechange', e);
            window.attachEvent('onload', e);
            var n = !1;
            try {
                n = window.frameElement == null && document.documentElement
            } catch (r) {};
            if (n && n.doScroll) {
                (function a() {
                    if (i) return;
                    try {
                        n.doScroll('left')
                    } catch (e) {
                        return setTimeout(a, 50)
                    };
                    i = !0;
                    o();
                    t()
                })()
            }
        }
    };
window['' + CfHISngcuFis + ''] = (function() {
    var t = {
        t$: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function(e) {
            var a = '',
                d, n, i, c, s, l, o, r = 0;
            e = t.e$(e);
            while (r < e.length) {
                d = e.charCodeAt(r++);
                n = e.charCodeAt(r++);
                i = e.charCodeAt(r++);
                c = d >> 2;
                s = (d & 3) << 4 | n >> 4;
                l = (n & 15) << 2 | i >> 6;
                o = i & 63;
                if (isNaN(n)) {
                    l = o = 64
                } else if (isNaN(i)) {
                    o = 64
                };
                a = a + this.t$.charAt(c) + this.t$.charAt(s) + this.t$.charAt(l) + this.t$.charAt(o)
            };
            return a
        },
        decode: function(e) {
            var n = '',
                d, l, c, s, r, o, a, i = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < e.length) {
                s = this.t$.indexOf(e.charAt(i++));
                r = this.t$.indexOf(e.charAt(i++));
                o = this.t$.indexOf(e.charAt(i++));
                a = this.t$.indexOf(e.charAt(i++));
                d = s << 2 | r >> 4;
                l = (r & 15) << 4 | o >> 2;
                c = (o & 3) << 6 | a;
                n = n + String.fromCharCode(d);
                if (o != 64) {
                    n = n + String.fromCharCode(l)
                };
                if (a != 64) {
                    n = n + String.fromCharCode(c)
                }
            };
            n = t.n$(n);
            return n
        },
        e$: function(t) {
            t = t.replace(/;/g, ';');
            var n = '';
            for (var i = 0; i < t.length; i++) {
                var e = t.charCodeAt(i);
                if (e < 128) {
                    n += String.fromCharCode(e)
                } else if (e > 127 && e < 2048) {
                    n += String.fromCharCode(e >> 6 | 192);
                    n += String.fromCharCode(e & 63 | 128)
                } else {
                    n += String.fromCharCode(e >> 12 | 224);
                    n += String.fromCharCode(e >> 6 & 63 | 128);
                    n += String.fromCharCode(e & 63 | 128)
                }
            };
            return n
        },
        n$: function(t) {
            var i = '',
                e = 0,
                n = c1 = c2 = 0;
            while (e < t.length) {
                n = t.charCodeAt(e);
                if (n < 128) {
                    i += String.fromCharCode(n);
                    e++
                } else if (n > 191 && n < 224) {
                    c2 = t.charCodeAt(e + 1);
                    i += String.fromCharCode((n & 31) << 6 | c2 & 63);
                    e += 2
                } else {
                    c2 = t.charCodeAt(e + 1);
                    c3 = t.charCodeAt(e + 2);
                    i += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    e += 3
                }
            };
            return i
        }
    };
    var a = ['YWQtbGVmdA==', 'YWRCYW5uZXJXcmFw', 'YWQtZnJhbWU=', 'YWQtaGVhZGVy', 'YWQtaW1n', 'YWQtaW5uZXI=', 'YWQtbGFiZWw=', 'YWQtbGI=', 'YWQtZm9vdGVy', 'YWQtY29udGFpbmVy', 'YWQtY29udGFpbmVyLTE=', 'YWQtY29udGFpbmVyLTI=', 'QWQzMDB4MTQ1', 'QWQzMDB4MjUw', 'QWQ3Mjh4OTA=', 'QWRBcmVh', 'QWRGcmFtZTE=', 'QWRGcmFtZTI=', 'QWRGcmFtZTM=', 'QWRGcmFtZTQ=', 'QWRMYXllcjE=', 'QWRMYXllcjI=', 'QWRzX2dvb2dsZV8wMQ==', 'QWRzX2dvb2dsZV8wMg==', 'QWRzX2dvb2dsZV8wMw==', 'QWRzX2dvb2dsZV8wNA==', 'RGl2QWQ=', 'RGl2QWQx', 'RGl2QWQy', 'RGl2QWQz', 'RGl2QWRB', 'RGl2QWRC', 'RGl2QWRD', 'QWRJbWFnZQ==', 'QWREaXY=', 'QWRCb3gxNjA=', 'QWRDb250YWluZXI=', 'Z2xpbmtzd3JhcHBlcg==', 'YWRUZWFzZXI=', 'YmFubmVyX2Fk', 'YWRCYW5uZXI=', 'YWRiYW5uZXI=', 'YWRBZA==', 'YmFubmVyYWQ=', 'IGFkX2JveA==', 'YWRfY2hhbm5lbA==', 'YWRzZXJ2ZXI=', 'YmFubmVyaWQ=', 'YWRzbG90', 'cG9wdXBhZA==', 'YWRzZW5zZQ==', 'Z29vZ2xlX2Fk', 'b3V0YnJhaW4tcGFpZA==', 'c3BvbnNvcmVkX2xpbms='],
        y = Math.floor(Math.random() * a.length),
        Y = t.decode(a[y]),
        w = Y,
        L = 1,
        W = '#444444',
        r = '#000000',
        v = '#5ab878',
        b = '#FFFFFF',
        A = '',
        g = 'Welcome to iaz.bz Community',
        p = 'Thiet bi cua ban dang cai Ad Blocker. Hay tat chuong trinh chan quang cao',
        f = 'Disable AdBlock hoac chuong trinh chan quang cao de xem noi dung Website',
        s = 'I understand, I have disabled my ad blocker.  Let me in!',
        i = 0,
        u = 0,
        n = 'moc.kcolbdakcolb',
        l = 0,
        Z = e() + '.jpg';

    function h(t) {
        if (t) t = t.substr(t.length - 15);
        var i = document.getElementsByTagName('script');
        for (var n = i.length; n--;) {
            var e = String(i[n].src);
            if (e) e = e.substr(e.length - 15);
            if (e === t) return !0
        };
        return !1
    };

    function m(t) {
        if (t) t = t.substr(t.length - 15);
        var e = document.styleSheets;
        x = 0;
        while (x < e.length) {
            thisurl = e[x].href;
            if (thisurl) thisurl = thisurl.substr(thisurl.length - 15);
            if (thisurl === t) return !0;
            x++
        };
        return !1
    };

    function e(t) {
        var n = '',
            i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        t = t || 30;
        for (var e = 0; e < t; e++) n += i.charAt(Math.floor(Math.random() * i.length));
        return n
    };

    function o(i) {
        var o = ['YWRuLmViYXkuY29t', 'YWQubWFpbC5ydQ==', 'anVpY3lhZHMuY29t', 'YWQuZm94bmV0d29ya3MuY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t', 'YS5saXZlc3BvcnRtZWRpYS5ldQ==', 'YWdvZGEubmV0L2Jhbm5lcnM=', 'YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==', 'Y2FzLmNsaWNrYWJpbGl0eS5jb20=', 'cHJvbW90ZS5wYWlyLmNvbQ==', 'YWRzLnlhaG9vLmNvbQ==', 'YWRzLnp5bmdhLmNvbQ==', 'YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t', 'YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t', 'YXMuaW5ib3guY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t'],
            r = ['ZmF2aWNvbi5pY28=', 'YmFubmVyLmpwZw==', 'NDY4eDYwLmpwZw==', 'NzIweDkwLmpwZw==', 'c2t5c2NyYXBlci5qcGc=', 'MTM2N19hZC1jbGllbnRJRDI0NjQuanBn', 'YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=', 'Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=', 'ZmF2aWNvbi5pY28=', 'YWQtbGFyZ2UucG5n', 'c3F1YXJlLWFkLnBuZw==', 'ZmF2aWNvbjEuaWNv', 'YmFubmVyX2FkLmdpZg==', 'bGFyZ2VfYmFubmVyLmdpZg==', 'd2lkZV9za3lzY3JhcGVyLmpwZw==', 'YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc='];
        x = 0;
        spimg = [];
        while (x < i) {
            c = o[Math.floor(Math.random() * o.length)];
            d = r[Math.floor(Math.random() * r.length)];
            c = t.decode(c);
            d = t.decode(d);
            var a = Math.floor(Math.random() * 2) + 1;
            if (a == 1) {
                n = '//' + c + '/' + d
            } else {
                n = '//' + c + '/' + e(Math.floor(Math.random() * 20) + 4) + '.jpg'
            };
            spimg[x] = new Image();
            spimg[x].onerror = function() {
                var t = 1;
                while (t < 7) {
                    t++
                }
            };
            spimg[x].src = n;
            x++
        }
    };

    function M(t) {};
    return {
        cCkWZZwDKS: function(t, r) {
            if (typeof document.body == 'undefined') {
                return
            };
            var i = '0.1',
                r = w,
                e = document.createElement('DIV');
            e.id = r;
            e.style.position = 'absolute';
            e.style.left = '-5000px';
            e.style.top = '-5000px';
            e.style.height = '60px';
            e.style.width = '468px';
            var d = document.body.childNodes,
                a = Math.floor(d.length / 2);
            if (a > 15) {
                var n = document.createElement('div');
                n.style.position = 'absolute';
                n.style.height = '0px';
                n.style.width = '0px';
                n.style.top = '-5000px';
                n.style.left = '-5000px';
                document.body.insertBefore(n, document.body.childNodes[a]);
                n.appendChild(e);
                var o = document.createElement('DIV');
                o.id = 'banner_ad';
                o.style.position = 'absolute';
                o.style.left = '-5000px';
                o.style.top = '-5000px';
                document.body.appendChild(o)
            } else {
                e.id = 'banner_ad';
                document.body.appendChild(e)
            };
            l = setInterval(function() {
                if (e) {
                    t((e.clientHeight == 0), i);
                    t((e.clientWidth == 0), i);
                    t((e.display == 'hidden'), i);
                    t((e.visibility == 'none'), i);
                    t((e.opacity == 0), i)
                } else {
                    t(!0, i)
                }
            }, 1000)
        },
        ORLuHhWUDp: function(e, c) {
            if ((e) && (i == 0)) {
                i = 1;
                window['' + CfHISngcuFis + ''].FVUmDNzKPU();
                window['' + CfHISngcuFis + ''].ORLuHhWUDp = function() {
                    return
                }
            } else {
                var f = t.decode('aW5zLmFkc2J5Z29vZ2xl'),
                    u = document.querySelector(f);
                if ((u) && (i == 0)) {
                    if ((KLWbWDNWBu % 3) == 0) {
                        var l = 'Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=';
                        l = t.decode(l);
                        if (h(l)) {
                            if (u.innerHTML.replace(/\s/g, '').length == 0) {
                                i = 1;
                                window['' + CfHISngcuFis + ''].FVUmDNzKPU()
                            }
                        }
                    }
                };
                var y = !1;
                if (i == 0) {
                    if ((tFRFJMqSNh % 3) == 0) {
                        if (!window['' + CfHISngcuFis + ''].ranAlready) {
                            var d = ['Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==', 'Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw==', 'Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28=', 'Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28=', 'Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28='],
                                m = d.length,
                                r = d[Math.floor(Math.random() * m)],
                                a = r;
                            while (r == a) {
                                a = d[Math.floor(Math.random() * m)]
                            };
                            r = t.decode(r);
                            a = t.decode(a);
                            o(Math.floor(Math.random() * 2) + 1);
                            var n = new Image(),
                                s = new Image();
                            n.onerror = function() {
                                o(Math.floor(Math.random() * 2) + 1);
                                s.src = a;
                                o(Math.floor(Math.random() * 2) + 1)
                            };
                            s.onerror = function() {
                                i = 1;
                                o(Math.floor(Math.random() * 3) + 1);
                                window['' + CfHISngcuFis + ''].FVUmDNzKPU()
                            };
                            n.src = r;
                            if ((HQJSMIRjmC % 3) == 0) {
                                n.onload = function() {
                                    if ((n.width < 8) && (n.width > 0)) {
                                        window['' + CfHISngcuFis + ''].FVUmDNzKPU()
                                    }
                                }
                            };
                            o(Math.floor(Math.random() * 3) + 1);
                            window['' + CfHISngcuFis + ''].ranAlready = !0
                        };
                        window['' + CfHISngcuFis + ''].ORLuHhWUDp = function() {
                            return
                        }
                    }
                }
            }
        },
        FVUmDNzKPU: function() {
            if (u == 1) {
                var F = sessionStorage.getItem('babn');
                if (F > 0) {
                    return !0
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };
            var h = 'Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==';
            h = t.decode(h);
            if (!m(h)) {
                //console.log(h);/*style add to html*/
            };
            clearInterval(l);
            document.body.innerHTML = '';
            document.body.style.cssText += 'margin:0px !important';
            document.body.style.cssText += 'padding:0px !important';
            var Z = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                y = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
                a = document.createElement('DIV'),
                L = e();
            a.id = L;
            a.style.position = 'fixed';
            a.style.left = '0';
            a.style.top = '0';
            a.style.width = Z + 'px';
            a.style.height = y + 'px';
            a.style.backgroundColor = W;
            a.style.zIndex = '9999';
            document.body.appendChild(a);
            var d = '<a href="https://iaz.bz"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,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">;</svg></a>';
            d = d.replace('FILLVECTID1', e());
            d = d.replace('FILLVECTID2', e());
            var o = document.createElement('DIV');
            o.innerHTML = d;
            o.style.position = 'absolute';
            o.style.bottom = '30px';
            o.style.left = '30px';
            o.style.width = '160px';
            o.style.height = '40px';
            o.style.zIndex = '10000';
            o.style.opacity = '.6';
            o.style.cursor = 'pointer';
            o.addEventListener('click', function() {
                n = n.split('').reverse().join('');
                window.location.href = '//' + n
            });
            document.getElementById(L).appendChild(o);
            var i = document.createElement('DIV'),
                M = e();
            i.id = M;
            i.style.position = 'fixed';
            i.style.top = y / 7 + 'px';
            i.style.minWidth = Z - 120 + 'px';
            i.style.minHeight = y / 3.5 + 'px';
            i.style.backgroundColor = '#fff';
            i.style.zIndex = '10000';
            i.style.cssText += 'font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
            i.style.cssText += 'line-height: normal !important';
            i.style.cssText += 'font-size: 16pt !important';
            i.style.cssText += 'text-align: center !important';
            i.style.cssText += 'padding: 12px !important';
            i.style.display += 'block';
            i.style.marginLeft = '30px';
            i.style.marginRight = '30px';
            i.style.borderRadius = '15px';
            document.body.appendChild(i);
            i.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            i.style.visibility = 'visible';
            var w = 30,
                Y = 22,
                x = 18,
                A = 18;
            if ((window.innerWidth < 640) || (screen.width < 640)) {
                i.style.zoom = '50%';
                i.style.cssText += 'font-size: 18pt !important';
                i.style.marginLeft = '45px;';
                o.style.zoom = '65%';
                var w = 22,
                    Y = 18,
                    x = 12,
                    A = 12
            };
            i.innerHTML = '<h3 style="color:#999;font-size:' + w + 'pt;color:' + r + ';font-family:Helvetica, geneva, sans-serif;font-weight:200;margin-top:10px;margin-bottom:10px;text-align:center;">' + g + '</h3><h1 style="font-size:' + Y + 'pt;font-weight:500;font-family:Helvetica, geneva, sans-serif;color:' + r + ';margin-top:10px;margin-bottom:10px;text-align:center;">' + p + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;text-align:center;"><p style="font-family:Helvetica, geneva, sans-serif;font-weight:300;font-size:' + x + 'pt;color:' + r + ';text-align:center;">' + f + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' + e() + '" style="cursor:pointer;font-size:' + A + 'pt;font-family:Helvetica, geneva, sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' + v + ';color:' + b + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;margin-top:10px;margin-bottom:10px;" onclick="window.location.reload();">' + s + '</div></p>'
        }
    }
})();
window.aeqlHLZXHx = function(t, e) {
    var n = Date.now,
        i = window.requestAnimationFrame,
        a = n(),
        o, r = function() {
            n() - a < e ? o || i(r) : t()
        };
    i(r);
    return {
        clear: function() {
            o = 1
        }
    }
};
var exldVLibQP;
if (document.body) {
    document.body.style.visibility = 'visible'
};
LuTwPAELvh(function() {
    if (document.getElementById('babasbmsgx')) {
        document.getElementById('babasbmsgx').style.visibility = 'hidden';
        document.getElementById('babasbmsgx').style.display = 'none'
    };
    exldVLibQP = window.aeqlHLZXHx(function() {
        window['' + CfHISngcuFis + ''].cCkWZZwDKS(window['' + CfHISngcuFis + ''].ORLuHhWUDp, window['' + CfHISngcuFis + ''].PNZyAefeGb)
    }, JikDvOqVyg * 1000)
});