/*!
 * gulp-rollup-boilerplate v0.1.1
 * https://github.com/Sphinxxxx/gulp-rollup-boilerplate
 *
 * Copyright 2018 boilerplate-author
 * Released under the MIT license.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.boilerplateLib = factory());
}(this, (function () { 'use strict';

    function boilerplateLib() {
        return "BOILER!";
    }

    return boilerplateLib;

})));
