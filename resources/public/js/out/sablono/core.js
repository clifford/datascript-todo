// Compiled by ClojureScript 0.0-2411
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__18638__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__18637 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__18637,(0),null);
var body = cljs.core.nthnext.call(null,vec__18637,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__18638 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18638__delegate.call(this,args);};
G__18638.cljs$lang$maxFixedArity = 0;
G__18638.cljs$lang$applyTo = (function (arglist__18639){
var args = cljs.core.seq(arglist__18639);
return G__18638__delegate(args);
});
G__18638.cljs$core$IFn$_invoke$arity$variadic = G__18638__delegate;
return G__18638;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__9948__auto__ = (function iter__18644(s__18645){
return (new cljs.core.LazySeq(null,(function (){
var s__18645__$1 = s__18645;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__18645__$1);
if(temp__4388__auto__){
var s__18645__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18645__$2)){
var c__9946__auto__ = cljs.core.chunk_first.call(null,s__18645__$2);
var size__9947__auto__ = cljs.core.count.call(null,c__9946__auto__);
var b__18647 = cljs.core.chunk_buffer.call(null,size__9947__auto__);
if((function (){var i__18646 = (0);
while(true){
if((i__18646 < size__9947__auto__)){
var args = cljs.core._nth.call(null,c__9946__auto__,i__18646);
cljs.core.chunk_append.call(null,b__18647,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__18648 = (i__18646 + (1));
i__18646 = G__18648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18647),iter__18644.call(null,cljs.core.chunk_rest.call(null,s__18645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18647),null);
}
} else {
var args = cljs.core.first.call(null,s__18645__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18644.call(null,cljs.core.rest.call(null,s__18645__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9948__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__9948__auto__ = (function iter__18653(s__18654){
return (new cljs.core.LazySeq(null,(function (){
var s__18654__$1 = s__18654;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__18654__$1);
if(temp__4388__auto__){
var s__18654__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18654__$2)){
var c__9946__auto__ = cljs.core.chunk_first.call(null,s__18654__$2);
var size__9947__auto__ = cljs.core.count.call(null,c__9946__auto__);
var b__18656 = cljs.core.chunk_buffer.call(null,size__9947__auto__);
if((function (){var i__18655 = (0);
while(true){
if((i__18655 < size__9947__auto__)){
var style = cljs.core._nth.call(null,c__9946__auto__,i__18655);
cljs.core.chunk_append.call(null,b__18656,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__18657 = (i__18655 + (1));
i__18655 = G__18657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18656),iter__18653.call(null,cljs.core.chunk_rest.call(null,s__18654__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18656),null);
}
} else {
var style = cljs.core.first.call(null,s__18654__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18653.call(null,cljs.core.rest.call(null,s__18654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9948__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__18658){
var styles = cljs.core.seq(arglist__18658);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to18659 = (function() { 
var link_to18659__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18659 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to18659__delegate.call(this,url,content);};
link_to18659.cljs$lang$maxFixedArity = 1;
link_to18659.cljs$lang$applyTo = (function (arglist__18660){
var url = cljs.core.first(arglist__18660);
var content = cljs.core.rest(arglist__18660);
return link_to18659__delegate(url,content);
});
link_to18659.cljs$core$IFn$_invoke$arity$variadic = link_to18659__delegate;
return link_to18659;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18659);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18661 = (function() { 
var mail_to18661__delegate = function (e_mail,p__18662){
var vec__18664 = p__18662;
var content = cljs.core.nth.call(null,vec__18664,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__9197__auto__ = content;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to18661 = function (e_mail,var_args){
var p__18662 = null;
if (arguments.length > 1) {
  p__18662 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to18661__delegate.call(this,e_mail,p__18662);};
mail_to18661.cljs$lang$maxFixedArity = 1;
mail_to18661.cljs$lang$applyTo = (function (arglist__18665){
var e_mail = cljs.core.first(arglist__18665);
var p__18662 = cljs.core.rest(arglist__18665);
return mail_to18661__delegate(e_mail,p__18662);
});
mail_to18661.cljs$core$IFn$_invoke$arity$variadic = mail_to18661__delegate;
return mail_to18661;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18661);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18666 = (function unordered_list18666(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__9948__auto__ = (function iter__18671(s__18672){
return (new cljs.core.LazySeq(null,(function (){
var s__18672__$1 = s__18672;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__18672__$1);
if(temp__4388__auto__){
var s__18672__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18672__$2)){
var c__9946__auto__ = cljs.core.chunk_first.call(null,s__18672__$2);
var size__9947__auto__ = cljs.core.count.call(null,c__9946__auto__);
var b__18674 = cljs.core.chunk_buffer.call(null,size__9947__auto__);
if((function (){var i__18673 = (0);
while(true){
if((i__18673 < size__9947__auto__)){
var x = cljs.core._nth.call(null,c__9946__auto__,i__18673);
cljs.core.chunk_append.call(null,b__18674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18675 = (i__18673 + (1));
i__18673 = G__18675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18674),iter__18671.call(null,cljs.core.chunk_rest.call(null,s__18672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18674),null);
}
} else {
var x = cljs.core.first.call(null,s__18672__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18671.call(null,cljs.core.rest.call(null,s__18672__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9948__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18666);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18676 = (function ordered_list18676(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__9948__auto__ = (function iter__18681(s__18682){
return (new cljs.core.LazySeq(null,(function (){
var s__18682__$1 = s__18682;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__18682__$1);
if(temp__4388__auto__){
var s__18682__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18682__$2)){
var c__9946__auto__ = cljs.core.chunk_first.call(null,s__18682__$2);
var size__9947__auto__ = cljs.core.count.call(null,c__9946__auto__);
var b__18684 = cljs.core.chunk_buffer.call(null,size__9947__auto__);
if((function (){var i__18683 = (0);
while(true){
if((i__18683 < size__9947__auto__)){
var x = cljs.core._nth.call(null,c__9946__auto__,i__18683);
cljs.core.chunk_append.call(null,b__18684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18685 = (i__18683 + (1));
i__18683 = G__18685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18684),iter__18681.call(null,cljs.core.chunk_rest.call(null,s__18682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18684),null);
}
} else {
var x = cljs.core.first.call(null,s__18682__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18681.call(null,cljs.core.rest.call(null,s__18682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9948__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18676);
/**
* Create an image element.
*/
sablono.core.image18686 = (function() {
var image18686 = null;
var image18686__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18686__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18686 = function(src,alt){
switch(arguments.length){
case 1:
return image18686__1.call(this,src);
case 2:
return image18686__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18686.cljs$core$IFn$_invoke$arity$1 = image18686__1;
image18686.cljs$core$IFn$_invoke$arity$2 = image18686__2;
return image18686;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18686);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__18687_SHARP_,p2__18688_SHARP_){
return [cljs.core.str(p1__18687_SHARP_),cljs.core.str("["),cljs.core.str(p2__18688_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__18689_SHARP_,p2__18690_SHARP_){
return [cljs.core.str(p1__18689_SHARP_),cljs.core.str("-"),cljs.core.str(p2__18690_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field18691 = (function() {
var color_field18691 = null;
var color_field18691__1 = (function (name__11413__auto__){
return color_field18691.call(null,name__11413__auto__,null);
});
var color_field18691__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11413__auto__,value__11414__auto__);
});
color_field18691 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return color_field18691__1.call(this,name__11413__auto__);
case 2:
return color_field18691__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18691.cljs$core$IFn$_invoke$arity$1 = color_field18691__1;
color_field18691.cljs$core$IFn$_invoke$arity$2 = color_field18691__2;
return color_field18691;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18691);

/**
* Creates a date input field.
*/
sablono.core.date_field18692 = (function() {
var date_field18692 = null;
var date_field18692__1 = (function (name__11413__auto__){
return date_field18692.call(null,name__11413__auto__,null);
});
var date_field18692__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11413__auto__,value__11414__auto__);
});
date_field18692 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return date_field18692__1.call(this,name__11413__auto__);
case 2:
return date_field18692__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18692.cljs$core$IFn$_invoke$arity$1 = date_field18692__1;
date_field18692.cljs$core$IFn$_invoke$arity$2 = date_field18692__2;
return date_field18692;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18692);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18693 = (function() {
var datetime_field18693 = null;
var datetime_field18693__1 = (function (name__11413__auto__){
return datetime_field18693.call(null,name__11413__auto__,null);
});
var datetime_field18693__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11413__auto__,value__11414__auto__);
});
datetime_field18693 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return datetime_field18693__1.call(this,name__11413__auto__);
case 2:
return datetime_field18693__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18693.cljs$core$IFn$_invoke$arity$1 = datetime_field18693__1;
datetime_field18693.cljs$core$IFn$_invoke$arity$2 = datetime_field18693__2;
return datetime_field18693;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18693);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18694 = (function() {
var datetime_local_field18694 = null;
var datetime_local_field18694__1 = (function (name__11413__auto__){
return datetime_local_field18694.call(null,name__11413__auto__,null);
});
var datetime_local_field18694__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11413__auto__,value__11414__auto__);
});
datetime_local_field18694 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18694__1.call(this,name__11413__auto__);
case 2:
return datetime_local_field18694__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18694.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18694__1;
datetime_local_field18694.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18694__2;
return datetime_local_field18694;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18694);

/**
* Creates a email input field.
*/
sablono.core.email_field18695 = (function() {
var email_field18695 = null;
var email_field18695__1 = (function (name__11413__auto__){
return email_field18695.call(null,name__11413__auto__,null);
});
var email_field18695__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11413__auto__,value__11414__auto__);
});
email_field18695 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return email_field18695__1.call(this,name__11413__auto__);
case 2:
return email_field18695__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18695.cljs$core$IFn$_invoke$arity$1 = email_field18695__1;
email_field18695.cljs$core$IFn$_invoke$arity$2 = email_field18695__2;
return email_field18695;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18695);

/**
* Creates a file input field.
*/
sablono.core.file_field18696 = (function() {
var file_field18696 = null;
var file_field18696__1 = (function (name__11413__auto__){
return file_field18696.call(null,name__11413__auto__,null);
});
var file_field18696__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11413__auto__,value__11414__auto__);
});
file_field18696 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return file_field18696__1.call(this,name__11413__auto__);
case 2:
return file_field18696__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18696.cljs$core$IFn$_invoke$arity$1 = file_field18696__1;
file_field18696.cljs$core$IFn$_invoke$arity$2 = file_field18696__2;
return file_field18696;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18696);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18697 = (function() {
var hidden_field18697 = null;
var hidden_field18697__1 = (function (name__11413__auto__){
return hidden_field18697.call(null,name__11413__auto__,null);
});
var hidden_field18697__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11413__auto__,value__11414__auto__);
});
hidden_field18697 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return hidden_field18697__1.call(this,name__11413__auto__);
case 2:
return hidden_field18697__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18697.cljs$core$IFn$_invoke$arity$1 = hidden_field18697__1;
hidden_field18697.cljs$core$IFn$_invoke$arity$2 = hidden_field18697__2;
return hidden_field18697;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18697);

/**
* Creates a month input field.
*/
sablono.core.month_field18698 = (function() {
var month_field18698 = null;
var month_field18698__1 = (function (name__11413__auto__){
return month_field18698.call(null,name__11413__auto__,null);
});
var month_field18698__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11413__auto__,value__11414__auto__);
});
month_field18698 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return month_field18698__1.call(this,name__11413__auto__);
case 2:
return month_field18698__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18698.cljs$core$IFn$_invoke$arity$1 = month_field18698__1;
month_field18698.cljs$core$IFn$_invoke$arity$2 = month_field18698__2;
return month_field18698;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18698);

/**
* Creates a number input field.
*/
sablono.core.number_field18699 = (function() {
var number_field18699 = null;
var number_field18699__1 = (function (name__11413__auto__){
return number_field18699.call(null,name__11413__auto__,null);
});
var number_field18699__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11413__auto__,value__11414__auto__);
});
number_field18699 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return number_field18699__1.call(this,name__11413__auto__);
case 2:
return number_field18699__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18699.cljs$core$IFn$_invoke$arity$1 = number_field18699__1;
number_field18699.cljs$core$IFn$_invoke$arity$2 = number_field18699__2;
return number_field18699;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18699);

/**
* Creates a password input field.
*/
sablono.core.password_field18700 = (function() {
var password_field18700 = null;
var password_field18700__1 = (function (name__11413__auto__){
return password_field18700.call(null,name__11413__auto__,null);
});
var password_field18700__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11413__auto__,value__11414__auto__);
});
password_field18700 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return password_field18700__1.call(this,name__11413__auto__);
case 2:
return password_field18700__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18700.cljs$core$IFn$_invoke$arity$1 = password_field18700__1;
password_field18700.cljs$core$IFn$_invoke$arity$2 = password_field18700__2;
return password_field18700;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18700);

/**
* Creates a range input field.
*/
sablono.core.range_field18701 = (function() {
var range_field18701 = null;
var range_field18701__1 = (function (name__11413__auto__){
return range_field18701.call(null,name__11413__auto__,null);
});
var range_field18701__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11413__auto__,value__11414__auto__);
});
range_field18701 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return range_field18701__1.call(this,name__11413__auto__);
case 2:
return range_field18701__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18701.cljs$core$IFn$_invoke$arity$1 = range_field18701__1;
range_field18701.cljs$core$IFn$_invoke$arity$2 = range_field18701__2;
return range_field18701;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18701);

/**
* Creates a search input field.
*/
sablono.core.search_field18702 = (function() {
var search_field18702 = null;
var search_field18702__1 = (function (name__11413__auto__){
return search_field18702.call(null,name__11413__auto__,null);
});
var search_field18702__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11413__auto__,value__11414__auto__);
});
search_field18702 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return search_field18702__1.call(this,name__11413__auto__);
case 2:
return search_field18702__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18702.cljs$core$IFn$_invoke$arity$1 = search_field18702__1;
search_field18702.cljs$core$IFn$_invoke$arity$2 = search_field18702__2;
return search_field18702;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18702);

/**
* Creates a tel input field.
*/
sablono.core.tel_field18703 = (function() {
var tel_field18703 = null;
var tel_field18703__1 = (function (name__11413__auto__){
return tel_field18703.call(null,name__11413__auto__,null);
});
var tel_field18703__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11413__auto__,value__11414__auto__);
});
tel_field18703 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return tel_field18703__1.call(this,name__11413__auto__);
case 2:
return tel_field18703__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18703.cljs$core$IFn$_invoke$arity$1 = tel_field18703__1;
tel_field18703.cljs$core$IFn$_invoke$arity$2 = tel_field18703__2;
return tel_field18703;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18703);

/**
* Creates a text input field.
*/
sablono.core.text_field18704 = (function() {
var text_field18704 = null;
var text_field18704__1 = (function (name__11413__auto__){
return text_field18704.call(null,name__11413__auto__,null);
});
var text_field18704__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11413__auto__,value__11414__auto__);
});
text_field18704 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return text_field18704__1.call(this,name__11413__auto__);
case 2:
return text_field18704__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18704.cljs$core$IFn$_invoke$arity$1 = text_field18704__1;
text_field18704.cljs$core$IFn$_invoke$arity$2 = text_field18704__2;
return text_field18704;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18704);

/**
* Creates a time input field.
*/
sablono.core.time_field18705 = (function() {
var time_field18705 = null;
var time_field18705__1 = (function (name__11413__auto__){
return time_field18705.call(null,name__11413__auto__,null);
});
var time_field18705__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11413__auto__,value__11414__auto__);
});
time_field18705 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return time_field18705__1.call(this,name__11413__auto__);
case 2:
return time_field18705__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18705.cljs$core$IFn$_invoke$arity$1 = time_field18705__1;
time_field18705.cljs$core$IFn$_invoke$arity$2 = time_field18705__2;
return time_field18705;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18705);

/**
* Creates a url input field.
*/
sablono.core.url_field18706 = (function() {
var url_field18706 = null;
var url_field18706__1 = (function (name__11413__auto__){
return url_field18706.call(null,name__11413__auto__,null);
});
var url_field18706__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11413__auto__,value__11414__auto__);
});
url_field18706 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return url_field18706__1.call(this,name__11413__auto__);
case 2:
return url_field18706__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18706.cljs$core$IFn$_invoke$arity$1 = url_field18706__1;
url_field18706.cljs$core$IFn$_invoke$arity$2 = url_field18706__2;
return url_field18706;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18706);

/**
* Creates a week input field.
*/
sablono.core.week_field18707 = (function() {
var week_field18707 = null;
var week_field18707__1 = (function (name__11413__auto__){
return week_field18707.call(null,name__11413__auto__,null);
});
var week_field18707__2 = (function (name__11413__auto__,value__11414__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11413__auto__,value__11414__auto__);
});
week_field18707 = function(name__11413__auto__,value__11414__auto__){
switch(arguments.length){
case 1:
return week_field18707__1.call(this,name__11413__auto__);
case 2:
return week_field18707__2.call(this,name__11413__auto__,value__11414__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18707.cljs$core$IFn$_invoke$arity$1 = week_field18707__1;
week_field18707.cljs$core$IFn$_invoke$arity$2 = week_field18707__2;
return week_field18707;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18707);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18708 = (function() {
var check_box18708 = null;
var check_box18708__1 = (function (name){
return check_box18708.call(null,name,null);
});
var check_box18708__2 = (function (name,checked_QMARK_){
return check_box18708.call(null,name,checked_QMARK_,"true");
});
var check_box18708__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18708 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18708__1.call(this,name);
case 2:
return check_box18708__2.call(this,name,checked_QMARK_);
case 3:
return check_box18708__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18708.cljs$core$IFn$_invoke$arity$1 = check_box18708__1;
check_box18708.cljs$core$IFn$_invoke$arity$2 = check_box18708__2;
check_box18708.cljs$core$IFn$_invoke$arity$3 = check_box18708__3;
return check_box18708;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18708);
/**
* Creates a radio button.
*/
sablono.core.radio_button18709 = (function() {
var radio_button18709 = null;
var radio_button18709__1 = (function (group){
return radio_button18709.call(null,group,null);
});
var radio_button18709__2 = (function (group,checked_QMARK_){
return radio_button18709.call(null,group,checked_QMARK_,"true");
});
var radio_button18709__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18709 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18709__1.call(this,group);
case 2:
return radio_button18709__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18709__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18709.cljs$core$IFn$_invoke$arity$1 = radio_button18709__1;
radio_button18709.cljs$core$IFn$_invoke$arity$2 = radio_button18709__2;
radio_button18709.cljs$core$IFn$_invoke$arity$3 = radio_button18709__3;
return radio_button18709;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18709);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18710 = (function() {
var select_options18710 = null;
var select_options18710__1 = (function (coll){
return select_options18710.call(null,coll,null);
});
var select_options18710__2 = (function (coll,selected){
var iter__9948__auto__ = (function iter__18719(s__18720){
return (new cljs.core.LazySeq(null,(function (){
var s__18720__$1 = s__18720;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__18720__$1);
if(temp__4388__auto__){
var s__18720__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18720__$2)){
var c__9946__auto__ = cljs.core.chunk_first.call(null,s__18720__$2);
var size__9947__auto__ = cljs.core.count.call(null,c__9946__auto__);
var b__18722 = cljs.core.chunk_buffer.call(null,size__9947__auto__);
if((function (){var i__18721 = (0);
while(true){
if((i__18721 < size__9947__auto__)){
var x = cljs.core._nth.call(null,c__9946__auto__,i__18721);
cljs.core.chunk_append.call(null,b__18722,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18725 = x;
var text = cljs.core.nth.call(null,vec__18725,(0),null);
var val = cljs.core.nth.call(null,vec__18725,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18725,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18710.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__18727 = (i__18721 + (1));
i__18721 = G__18727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18722),iter__18719.call(null,cljs.core.chunk_rest.call(null,s__18720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18722),null);
}
} else {
var x = cljs.core.first.call(null,s__18720__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18726 = x;
var text = cljs.core.nth.call(null,vec__18726,(0),null);
var val = cljs.core.nth.call(null,vec__18726,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18726,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18710.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18719.call(null,cljs.core.rest.call(null,s__18720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9948__auto__.call(null,coll);
});
select_options18710 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18710__1.call(this,coll);
case 2:
return select_options18710__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18710.cljs$core$IFn$_invoke$arity$1 = select_options18710__1;
select_options18710.cljs$core$IFn$_invoke$arity$2 = select_options18710__2;
return select_options18710;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18710);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18728 = (function() {
var drop_down18728 = null;
var drop_down18728__2 = (function (name,options){
return drop_down18728.call(null,name,options,null);
});
var drop_down18728__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18728 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18728__2.call(this,name,options);
case 3:
return drop_down18728__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18728.cljs$core$IFn$_invoke$arity$2 = drop_down18728__2;
drop_down18728.cljs$core$IFn$_invoke$arity$3 = drop_down18728__3;
return drop_down18728;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18728);
/**
* Creates a text area element.
*/
sablono.core.text_area18729 = (function() {
var text_area18729 = null;
var text_area18729__1 = (function (name){
return text_area18729.call(null,name,null);
});
var text_area18729__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18729 = function(name,value){
switch(arguments.length){
case 1:
return text_area18729__1.call(this,name);
case 2:
return text_area18729__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18729.cljs$core$IFn$_invoke$arity$1 = text_area18729__1;
text_area18729.cljs$core$IFn$_invoke$arity$2 = text_area18729__2;
return text_area18729;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18729);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18730 = (function label18730(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18730);
/**
* Creates a submit button.
*/
sablono.core.submit_button18731 = (function submit_button18731(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18731);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18732 = (function reset_button18732(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18732);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18733 = (function() { 
var form_to18733__delegate = function (p__18734,body){
var vec__18736 = p__18734;
var method = cljs.core.nth.call(null,vec__18736,(0),null);
var action = cljs.core.nth.call(null,vec__18736,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18733 = function (p__18734,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to18733__delegate.call(this,p__18734,body);};
form_to18733.cljs$lang$maxFixedArity = 1;
form_to18733.cljs$lang$applyTo = (function (arglist__18737){
var p__18734 = cljs.core.first(arglist__18737);
var body = cljs.core.rest(arglist__18737);
return form_to18733__delegate(p__18734,body);
});
form_to18733.cljs$core$IFn$_invoke$arity$variadic = form_to18733__delegate;
return form_to18733;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18733);

//# sourceMappingURL=core.js.map?rel=1420461350311