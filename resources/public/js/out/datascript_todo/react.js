// Compiled by ClojureScript 0.0-2411
goog.provide('datascript_todo.react');
goog.require('cljs.core');
datascript_todo.react.component = (function component(render_fn){
var react_component = React.createClass({"render": (function (){
var this$ = this;
return cljs.core.apply.call(null,render_fn,(this$.props["args"]));
})});
return ((function (react_component){
return (function() { 
var G__10666__delegate = function (args){
return react_component.call(null,{"args": args});
};
var G__10666 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10666__delegate.call(this,args);};
G__10666.cljs$lang$maxFixedArity = 0;
G__10666.cljs$lang$applyTo = (function (arglist__10667){
var args = cljs.core.seq(arglist__10667);
return G__10666__delegate(args);
});
G__10666.cljs$core$IFn$_invoke$arity$variadic = G__10666__delegate;
return G__10666;
})()
;
;})(react_component))
});
datascript_todo.react.render = (function render(component,node){
return React.renderComponent(component,node);
});

//# sourceMappingURL=react.js.map?rel=1420461332760