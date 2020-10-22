'use strict'
const w = window;
const q = document;
const d = q.getElementById;
const c = q.getElementsByClassName;
const n = q.getElementsByName;
const t = q.getElementsByTagName;
const dv = function(i){
    return d(i).value;
}
const di = function(i){
    return d(i).innerHTML;
}
const ds = function(i, s){
    return d(i).style[s];
}
const dl = function(i){
    if(typeof d(i) === 'undefined')
        return 0;
    return 1;
}
const dV = function(i, v){
    return d(i).value = v;
}
const dI = function(i, v){
    return d(i).innerHTML = v;
}
const dS = function(i, s, v){
    return d(i).style[s] = v;
}


const cv = function(i){
    return c(i)[0].value;
}
const ci = function(i){
    return c(i)[0].innerHTML;
}
const cs = function(i, s){
    return c(i)[0].style[s];
}
const cl = function(i){
    return c(i).length;
}
const cV = function(i, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; cl(i) > u ; u++)
        c(i)[u].value = v;
    return true;
}
const cI = function(i, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; cl(i) > u ; u++)
        c(i)[u].innerHTML = v;
    return true;
}
const cS = function(i, s, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; cl(i) > u ; u++)
        c(i)[[u].style[s] = v;
    return true;
}

const nv = function(i){
    return n(i)[0].value;
}
const ni = function(i){
    return n(i)[0].innerHTML;
}
const ns = function(i, s){
    return n(i)[0].style[s];
}
const nl = function(i){
    return n(i).length;
}
const nV = function(i, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[u].value = v;
    return true;
}
const nI = function(i, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[u].innerHTML = v;
    return true;
}
const nS = function(i, s, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[[u].style[s] = v;
    return true;
}
const tv = function(i){
    return t(i)[0].value;
}
const ti = function(i){
    return t(i)[0].innerHTML;
}
const ts = function(i, s){
    return t(i)[0].style[s];
}
const tl = function(i){
    return t(i).length;
}
const tV = function(i, v){
    if(typeof t(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[u].value = v;
    return true;
}
const tI = function(i, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[u].innerHTML = v;
    return true;
}
const tS = function(i, s, v){
    if(typeof t(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[[u].style[s] = v;
    return true;
}

