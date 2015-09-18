/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Famous Industries Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/*jshint -W008 */

'use strict';

/**
 * A library of curves which map an animation explicitly as a function of time.
 *
 * @namespace
 * @property {Function} linear
 * @property {Function} easeIn
 * @property {Function} easeOut
 * @property {Function} easeInOut
 * @property {Function} easeOutBounce
 * @property {Function} spring
 * @property {Function} inQuad
 * @property {Function} outQuad
 * @property {Function} inOutQuad
 * @property {Function} inCubic
 * @property {Function} outCubic
 * @property {Function} inOutCubic
 * @property {Function} inQuart
 * @property {Function} outQuart
 * @property {Function} inOutQuart
 * @property {Function} inQuint
 * @property {Function} outQuint
 * @property {Function} inOutQuint
 * @property {Function} inSine
 * @property {Function} outSine
 * @property {Function} inOutSine
 * @property {Function} inExpo
 * @property {Function} outExpo
 * @property {Function} inOutExp
 * @property {Function} inCirc
 * @property {Function} outCirc
 * @property {Function} inOutCirc
 * @property {Function} inElastic
 * @property {Function} outElastic
 * @property {Function} inOutElastic
 * @property {Function} inBounce
 * @property {Function} outBounce
 * @property {Function} inOutBounce
 * @property {Function} flat            - Useful for delaying the execution of
 *                                        a subsequent transition.
 */
var Curves = {};

Curves['linear'] = function(t) {
    return t;
};

Curves['easeIn'] = function(t) {
    return t*t;
};

Curves['easeOut'] = function(t) {
    return t*(2-t);
};

Curves['easeInOut'] = function(t) {
    if (t <= 0.5) return 2*t*t;
    else return -2*t*t + 4*t - 1;
};

Curves['easeOutBounce'] = function(t) {
    return t*(3 - 2*t);
};

Curves['spring'] = function(t) {
    return (1 - t) * Math.sin(6 * Math.PI * t) + t;
};

Curves['inQuad'] = function(t) {
    return t*t;
};

Curves['outQuad'] = function(t) {
    return -(t-=1)*t+1;
};

Curves['inOutQuad'] = function(t) {
    if ((t/=.5) < 1) return .5*t*t;
    return -.5*((--t)*(t-2) - 1);
};

Curves['inCubic'] = function(t) {
    return t*t*t;
};

Curves['outCubic'] = function(t) {
    return ((--t)*t*t + 1);
};

Curves['inOutCubic'] = function(t) {
    if ((t/=.5) < 1) return .5*t*t*t;
    return .5*((t-=2)*t*t + 2);
};

Curves['inQuart'] = function(t) {
    return t*t*t*t;
};

Curves['outQuart'] = function(t) {
    return -((--t)*t*t*t - 1);
};

Curves['inOutQuart'] = function(t) {
    if ((t/=.5) < 1) return .5*t*t*t*t;
    return -.5 * ((t-=2)*t*t*t - 2);
};

Curves['inQuint'] = function(t) {
    return t*t*t*t*t;
};

Curves['outQuint'] = function(t) {
    return ((--t)*t*t*t*t + 1);
};

Curves['inOutQuint'] = function(t) {
    if ((t/=.5) < 1) return .5*t*t*t*t*t;
    return .5*((t-=2)*t*t*t*t + 2);
};

Curves['inSine'] = function(t) {
    return -1.0*Math.cos(t * (Math.PI/2)) + 1.0;
};

Curves['outSine'] = function(t) {
    return Math.sin(t * (Math.PI/2));
};

Curves['inOutSine'] = function(t) {
    return -.5*(Math.cos(Math.PI*t) - 1);
};

Curves['inExpo'] = function(t) {
    return (t===0) ? 0.0 : Math.pow(2, 10 * (t - 1));
};

Curves['outExpo'] = function(t) {
    return (t===1.0) ? 1.0 : (-Math.pow(2, -10 * t) + 1);
};

Curves['inOutExpo'] = function(t) {
    if (t===0) return 0.0;
    if (t===1.0) return 1.0;
    if ((t/=.5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
    return .5 * (-Math.pow(2, -10 * --t) + 2);
};

Curves['inCirc'] = function(t) {
    return -(Math.sqrt(1 - t*t) - 1);
};

Curves['outCirc'] = function(t) {
    return Math.sqrt(1 - (--t)*t);
};

Curves['inOutCirc'] = function(t) {
    if ((t/=.5) < 1) return -.5 * (Math.sqrt(1 - t*t) - 1);
    return .5 * (Math.sqrt(1 - (t-=2)*t) + 1);
};

Curves['inElastic'] = function(t) {
    var s=1.70158;var p=0;var a=1.0;
    if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
    s = p/(2*Math.PI) * Math.asin(1.0/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/ p));
};

Curves['outElastic'] = function(t) {
    var s=1.70158;var p=0;var a=1.0;
    if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
    s = p/(2*Math.PI) * Math.asin(1.0/a);
    return a*Math.pow(2,-10*t) * Math.sin((t-s)*(2*Math.PI)/p) + 1.0;
};

Curves['inOutElastic'] = function(t) {
    var s=1.70158;var p=0;var a=1.0;
    if (t===0) return 0.0;  if ((t/=.5)===2) return 1.0;  if (!p) p=(.3*1.5);
    s = p/(2*Math.PI) * Math.asin(1.0/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p));
    return a*Math.pow(2,-10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p)*.5 + 1.0;
};

Curves['inBack'] = function(t, s) {
    if (s === undefined) s = 1.70158;
    return t*t*((s+1)*t - s);
};

Curves['outBack'] = function(t, s) {
    if (s === undefined) s = 1.70158;
    return ((--t)*t*((s+1)*t + s) + 1);
};

Curves['inOutBack'] = function(t, s) {
    if (s === undefined) s = 1.70158;
    if ((t/=.5) < 1) return .5*(t*t*(((s*=(1.525))+1)*t - s));
    return .5*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2);
};

Curves['inBounce'] = function(t) {
    return 1.0 - Curves.outBounce(1.0-t);
};

Curves['outBounce'] = function(t) {
    if (t < (1/2.75)) {
        return (7.5625*t*t);
    }
    else if (t < (2/2.75)) {
        return (7.5625*(t-=(1.5/2.75))*t + .75);
    }
    else if (t < (2.5/2.75)) {
        return (7.5625*(t-=(2.25/2.75))*t + .9375);
    }
    else {
        return (7.5625*(t-=(2.625/2.75))*t + .984375);
    }
};

Curves['inOutBounce'] = function(t) {
    if (t < .5) return Curves.inBounce(t*2) * .5;
    return Curves.outBounce(t*2-1.0) * .5 + .5;
};

Curves['flat'] = function() {
    return 0;
};

module.exports = Curves;
