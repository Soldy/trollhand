'use strict';
const w = window;
const q = document;
const d = (i)=>{
    return q.getElementById(i);
};
const c = (i)=>{
    return q.getElementsByClassName(i);
};
const n = (i)=>{
    return  q.getElementsByName(i);
};
const t = (i)=>{
    return q.getElementsByTagName(i);
};
const Er = []; //  :) 


/*
 * @param {string}
 * @return {string}
*/
const dR = function(i){
    return d(i).remove();
};
/*
 * @param {string}
 * @return {string}
*/
const dd = function(i){
    return d(i).getAttribute('id');
};
/*
 * @param {string}
 * @return {string}
*/
const dv = function(i){
    return d(i).value;
};
/*
 * @param {string}
 * @return {string}
*/
const di = function(i){
    return d(i).innerHTML;
};
/*
 * @param {string}
 * @return {string}
*/
const dx = function(i){
    return d(i).textContent;
};
/*
 * @param {string}
 * @param {string}
 * @return {string}
*/
const ds = function(i, s){
    return d(i).style[s];
};
/*
 * @param {string}
 * @return {integer}
*/
const dl = function(i){
    if(typeof d(i) === 'undefined')
        return 0;
    return 1;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const dC = function(i, v){
    return d(i).className = v;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const dV = function(i, v){
    return d(i).value = v;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const dI = function(i, v){
    return d(i).innerHTML = v;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const dX = function(i, v){
    return cd(i).textContent = v;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const dS = function(i, s, v){
    return d(i).style[s] = v;
};


/* 
 * @param {string}
 * @return {string}
 *
*/
const cR = function(i){
    return c(i)[0].remove();
};
/* 
 * @param {string}
 * @return {string}
*/
const cc = function(i){
    return c(i)[0].className;
};
/*
 * @param {string}
 * @return {string}
*/
const cd = function(i){
    return c(i)[0].getAttribute('id');
};
/* 
 * @param {string}
 * @return {string}
*/
const cv = function(i){
    return c(i)[0].value;
};
/*
 * @param {string}
 * @return {string}
*/
const ci = function(i){
    return c(i)[0].innerHTML;
};
/*
 * @param {string}
 * @return {string}
*/
const cx = function(i){
    return c(i)[0].textContent;
};
/*
 * @param {string}
 * @param {string}
 * @return {string}
*/
const cs = function(i, s){
    return c(i)[0].style[s];
};
/*
 * @param {string}
 * @return {integer}
*/
const cl = function(i){
    return c(i).length;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const cC = function(i, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; cl(i) > u ; u++)
        c(i)[u].className = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const cV = function(i, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; cl(i) > u ; u++)
        c(i)[u].value = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const cI = function(i, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; cl(i) > u ; u++)
        c(i)[u].innerHTML = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const cX = function(i, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; c(i) > u ; u++)
        c(i)[u].textContent = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const cS = function(i, s, v){
    if(typeof c(i) === 'undefined')
        return false;
    for (let u = 0 ; cl(i) > u ; u++)
        c(i)[u].style[s] = v;
    return true;
};



/* 
 * @param {string}
 * @return {string}
*/
const nR = function(i){
    return n(i)[0].remove();
};
/* 
 * @param {string}
 * @return {string}
*/
const nc = function(i){
    return n(i)[0].className;
};
/*
 * @param {string}
 * @return {string}
*/
const nd = function(i){
    return n(i)[0].getAttribute('id');
};
/* 
 * @param {string}
 * @return {string}
*/
const nv = function(i){
    return n(i)[0].value;
};
/*
 * @param {string}
 * @return {string}
*/
const ni = function(i){
    return n(i)[0].innerHTML;
};
/*
 * @param {string}
 * @return {string}
*/
const nx = function(i){
    return n(i)[0].textContent;
};
/*
 * @param {string}
 * @param {string}
 * @return {string}
*/
const ns = function(i, s){
    return n(i)[0].style[s];
};
/*
 * @param {string}
 * @return {integer}
*/
const nl = function(i){
    return n(i).length;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const nC = function(i, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[u].className = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const nV = function(i, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[u].value = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const nI = function(i, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[u].innerHTML = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const nX = function(i, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[u].textContent = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const nS = function(i, s, v){
    if(typeof n(i) === 'undefined')
        return false;
    for (let u = 0 ; nl(i) > u ; u++)
        n(i)[u].style[s] = v;
    return true;
};




/*
 * @param {string}
 * @return {string}
*/
const tR = function(i){
    return t(i)[0].remove();
};
/*
 * @param {string}
 * @return {string}
*/
const tc = function(i){
    return t(i)[0].className;
};
/*
 * @param {string}
 * @return {string}
*/
const td = function(i){
    return t(i)[0].getAttribute('id');
};
/*
 * @param {string}
 * @return {string}
*/
const tv = function(i){
    return t(i)[0].value;
};
/*
 * @param {string}
 * @return {string}
*/
const ti = function(i){
    return t(i)[0].innerHTML;
};
/*
 * @param {string}
 * @return {string}
*/
const tx = function(i){
    return t(i)[0].textContent;
};
/*
 * @param {string}
 * @param {string}
 * @return {string}
*/
const ts = function(i, s){
    return t(i)[0].style[s];
};
/*
 * @param {string}
 * @return {integer}
*/
const tl = function(i){
    return t(i).length;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const tC = function(i, v){
    if(typeof t(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[u].className = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const tV = function(i, v){
    if(typeof t(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[u].value = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const tI = function(i, v){
    if(typeof t(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[u].innerHTML = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const tX = function(i, v){
    if(typeof t(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[u].textContent = v;
    return true;
};
/*
 * @param {string}
 * @param {string}
 * @return {boolean}
*/
const tS = function(i, s, v){
    if(typeof t(i) === 'undefined')
        return false;
    for (let u = 0 ; tl(i) > u ; u++)
        t(i)[u].style[s] = v;
    return true;
};


/* Stay alive stayin alive :D
 * @param {string}
 * @param {array}
 * @return {boolean}
*/
const S = function(f, v){ //stay a live :D 
    try{
        if(v.length === 1)
            f(v[0]);
        else if(v.length === 2)
            f(v[0], v[1]);
        else if(v.length === 3)
            f(v[0], v[1], v[2]);
        return true;
    }catch(e){
        Er.push(e);
        return false;
    }
};

// inbuilt object extra
String.prototype.T = function () {
    return this.toString();
};
String.prototype.F = function () {
    return parseFloat(this);
};
String.prototype.I = function () {
    return parseInt(this);
};
String.prototype.P = function () {
    return parseInt(this).toString();
};
String.prototype.R = function (a, b) {
    return this.replace(a, b);
};
Number.prototype.T = function () {
    return this.toString();
};
Number.prototype.F = function () {
    return parseFloat(this);
};
Number.prototype.I = function () {
    return parseInt(this);
};
Number.prototype.P = function () {
    return  parseInt(this).toString();
};



