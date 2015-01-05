// Compiled by ClojureScript 0.0-2411
goog.provide('datascript_todo.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
datascript_todo.dom.q = (function q(selector){
return document.querySelector(selector);
});
datascript_todo.dom.set_value_BANG_ = (function set_value_BANG_(el,value){
return el.value = value;
});
datascript_todo.dom.value = (function value(el){
var val = el.value;
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,val))){
return null;
} else {
return clojure.string.trim.call(null,val);
}
});
datascript_todo.dom.date_value = (function date_value(el){
var temp__4388__auto__ = datascript_todo.dom.value.call(null,el);
if(cljs.core.truth_(temp__4388__auto__)){
var val = temp__4388__auto__;
var val__$1 = Date.parse(val);
if(cljs.core.truth_(isNaN(val__$1))){
return null;
} else {
return (new Date(val__$1));
}
} else {
return null;
}
});
datascript_todo.dom.array_value = (function array_value(el){
var temp__4388__auto__ = datascript_todo.dom.value.call(null,el);
if(cljs.core.truth_(temp__4388__auto__)){
var val = temp__4388__auto__;
return clojure.string.split.call(null,val,/\s+/);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1420461332663