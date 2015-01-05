// Compiled by ClojureScript 0.0-2411
goog.provide('datascript_todo');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript_todo.util');
goog.require('datascript_todo.dom');
goog.require('datascript_todo.util');
goog.require('datascript_todo.react');
goog.require('datascript');
goog.require('datascript_todo.dom');
goog.require('cognitect.transit');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('cognitect.transit');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('datascript_todo.react');
goog.require('datascript');
cljs.core.enable_console_print_BANG_.call(null);
datascript_todo.schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
if(typeof datascript_todo.conn !== 'undefined'){
} else {
datascript_todo.conn = datascript.create_conn.call(null,datascript_todo.schema);
}

datascript_todo.reset_conn_BANG_ = (function reset_conn_BANG_(db){
cljs.core.reset_BANG_.call(null,datascript_todo.conn,db);

datascript_todo.render.call(null,db);

return datascript_todo.persist.call(null,db);
});
/**
* @param {...*} var_args
*/
datascript_todo.q1s = (function() { 
var q1s__delegate = function (q,ins){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.apply.call(null,datascript.q,q,ins)));
};
var q1s = function (q,var_args){
var ins = null;
if (arguments.length > 1) {
  ins = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return q1s__delegate.call(this,q,ins);};
q1s.cljs$lang$maxFixedArity = 1;
q1s.cljs$lang$applyTo = (function (arglist__23716){
var q = cljs.core.first(arglist__23716);
var ins = cljs.core.rest(arglist__23716);
return q1s__delegate(q,ins);
});
q1s.cljs$core$IFn$_invoke$arity$variadic = q1s__delegate;
return q1s;
})()
;
/**
* @param {...*} var_args
*/
datascript_todo.set_system_attrs_BANG_ = (function() { 
var set_system_attrs_BANG___delegate = function (args){
return datascript.transact_BANG_.call(null,datascript_todo.conn,(function (){var iter__17077__auto__ = (function iter__23725(s__23726){
return (new cljs.core.LazySeq(null,(function (){
var s__23726__$1 = s__23726;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__23726__$1);
if(temp__4388__auto__){
var s__23726__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23726__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__23726__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__23728 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__23727 = (0);
while(true){
if((i__23727 < size__17076__auto__)){
var vec__23731 = cljs.core._nth.call(null,c__17075__auto__,i__23727);
var attr = cljs.core.nth.call(null,vec__23731,(0),null);
var value = cljs.core.nth.call(null,vec__23731,(1),null);
cljs.core.chunk_append.call(null,b__23728,(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(0),attr,value], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),(0),attr], null)));

var G__23733 = (i__23727 + (1));
i__23727 = G__23733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23728),iter__23725.call(null,cljs.core.chunk_rest.call(null,s__23726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23728),null);
}
} else {
var vec__23732 = cljs.core.first.call(null,s__23726__$2);
var attr = cljs.core.nth.call(null,vec__23732,(0),null);
var value = cljs.core.nth.call(null,vec__23732,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(0),attr,value], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),(0),attr], null)),iter__23725.call(null,cljs.core.rest.call(null,s__23726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,cljs.core.partition.call(null,(2),args));
})());
};
var set_system_attrs_BANG_ = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_system_attrs_BANG___delegate.call(this,args);};
set_system_attrs_BANG_.cljs$lang$maxFixedArity = 0;
set_system_attrs_BANG_.cljs$lang$applyTo = (function (arglist__23734){
var args = cljs.core.seq(arglist__23734);
return set_system_attrs_BANG___delegate(args);
});
set_system_attrs_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_system_attrs_BANG___delegate;
return set_system_attrs_BANG_;
})()
;
/**
* @param {...*} var_args
*/
datascript_todo.system_attr = (function() {
var system_attr = null;
var system_attr__2 = (function (db,attr){
return cljs.core.get.call(null,datascript.entity.call(null,db,(0)),attr);
});
var system_attr__3 = (function() { 
var G__23736__delegate = function (db,attr,attrs){
return cljs.core.mapv.call(null,(function (p1__23735_SHARP_){
return system_attr.call(null,db,p1__23735_SHARP_);
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null),attrs));
};
var G__23736 = function (db,attr,var_args){
var attrs = null;
if (arguments.length > 2) {
  attrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23736__delegate.call(this,db,attr,attrs);};
G__23736.cljs$lang$maxFixedArity = 2;
G__23736.cljs$lang$applyTo = (function (arglist__23737){
var db = cljs.core.first(arglist__23737);
arglist__23737 = cljs.core.next(arglist__23737);
var attr = cljs.core.first(arglist__23737);
var attrs = cljs.core.rest(arglist__23737);
return G__23736__delegate(db,attr,attrs);
});
G__23736.cljs$core$IFn$_invoke$arity$variadic = G__23736__delegate;
return G__23736;
})()
;
system_attr = function(db,attr,var_args){
var attrs = var_args;
switch(arguments.length){
case 2:
return system_attr__2.call(this,db,attr);
default:
return system_attr__3.cljs$core$IFn$_invoke$arity$variadic(db,attr, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
system_attr.cljs$lang$maxFixedArity = 2;
system_attr.cljs$lang$applyTo = system_attr__3.cljs$lang$applyTo;
system_attr.cljs$core$IFn$_invoke$arity$2 = system_attr__2;
system_attr.cljs$core$IFn$_invoke$arity$variadic = system_attr__3.cljs$core$IFn$_invoke$arity$variadic;
return system_attr;
})()
;
if(typeof datascript_todo.history !== 'undefined'){
} else {
datascript_todo.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
datascript_todo.history_limit = (10);
datascript_todo.filter_pane = datascript_todo.react.component.call(null,(function (db){
return React.DOM.div({"className": "filter-pane"},sablono.interpreter.input.call(null,{"className": "filter", "type": "text", "value": (function (){var or__16326__auto__ = datascript_todo.system_attr.call(null,db,new cljs.core.Keyword("system","filter","system/filter",-1702262943));
if(cljs.core.truth_(or__16326__auto__)){
return or__16326__auto__;
} else {
return "";
}
})(), "onChange": (function (_){
return datascript_todo.set_system_attrs_BANG_.call(null,new cljs.core.Keyword("system","filter","system/filter",-1702262943),datascript_todo.dom.value.call(null,datascript_todo.dom.q.call(null,".filter")));
}), "placeholder": "Filter"}));
}));
datascript_todo.filter_rule = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"?term","?term",1328727833,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("project","name","project/name",2022968152),new cljs.core.Symbol(null,"?term","?term",1328727833,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"?term","?term",1328727833,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.Symbol(null,"?term","?term",1328727833,null)], null)], null)], null);
datascript_todo.todos_by_filter = (function todos_by_filter(db,terms){
return datascript_todo.q1s.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?term","?term",1328727833,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),cljs.core.list(new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?term","?term",1328727833,null))], null),db,datascript_todo.filter_rule,terms);
});
datascript_todo.filter_terms = (function filter_terms(db){
return cljs.core.not_empty.call(null,clojure.string.split.call(null,datascript_todo.system_attr.call(null,db,new cljs.core.Keyword("system","filter","system/filter",-1702262943)),/\s+/));
});
datascript_todo.filtered_db = (function filtered_db(db){
var temp__4386__auto__ = datascript_todo.filter_terms.call(null,db);
if(cljs.core.truth_(temp__4386__auto__)){
var terms = temp__4386__auto__;
var whitelist = datascript_todo.todos_by_filter.call(null,db,terms);
var pred = ((function (whitelist,terms,temp__4386__auto__){
return (function (db__$1,datom){
return (cljs.core.not_EQ_.call(null,"todo",cljs.core.namespace.call(null,datom.a))) || (cljs.core.contains_QMARK_.call(null,whitelist,datom.e));
});})(whitelist,terms,temp__4386__auto__))
;
return datascript.filter.call(null,db,pred);
} else {
return db;
}
});
datascript_todo.todos_by_group = (function (){var method_table__17218__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17219__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17222__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"datascript-todo","todos-by-group"),((function (method_table__17218__auto__,prefer_table__17219__auto__,method_cache__17220__auto__,cached_hierarchy__17221__auto__,hierarchy__17222__auto__){
return (function (db,group,item){
return group;
});})(method_table__17218__auto__,prefer_table__17219__auto__,method_cache__17220__auto__,cached_hierarchy__17221__auto__,hierarchy__17222__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17222__auto__,method_table__17218__auto__,prefer_table__17219__auto__,method_cache__17220__auto__,cached_hierarchy__17221__auto__));
})();
cljs.core._add_method.call(null,datascript_todo.todos_by_group,new cljs.core.Keyword(null,"inbox","inbox",1888669443),(function (db,_,___$1){
return datascript_todo.q1s.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Symbol(null,"?project","?project",324737558,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Symbol(null,"?due","?due",-1593059592,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?project","?project",324737558,null),new cljs.core.Keyword(null,"none","none",1333468478))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?due","?due",-1593059592,null),new cljs.core.Keyword(null,"none","none",1333468478))], null)], null),db);
}));
cljs.core._add_method.call(null,datascript_todo.todos_by_group,new cljs.core.Keyword(null,"completed","completed",-486056503),(function (db,_,___$1){
return datascript_todo.q1s.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","done","todo/done",-886331930),true], null)], null),db);
}));
cljs.core._add_method.call(null,datascript_todo.todos_by_group,new cljs.core.Keyword(null,"all","all",892129742),(function (db,_,___$1){
return datascript_todo.q1s.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null)], null),db);
}));
cljs.core._add_method.call(null,datascript_todo.todos_by_group,new cljs.core.Keyword(null,"project","project",1124394579),(function (db,_,pid){
return datascript_todo.q1s.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pid","?pid",1629644191,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Symbol(null,"?pid","?pid",1629644191,null)], null)], null),db,pid);
}));
cljs.core._add_method.call(null,datascript_todo.todos_by_group,new cljs.core.Keyword(null,"month","month",-1960248533),(function (db,_,p__23738){
var vec__23739 = p__23738;
var year = cljs.core.nth.call(null,vec__23739,(0),null);
var month = cljs.core.nth.call(null,vec__23739,(1),null);
return datascript_todo.q1s.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?from","?from",-1000809456,null),new cljs.core.Symbol(null,"?to","?to",331665800,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Symbol(null,"?due","?due",-1593059592,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?from","?from",-1000809456,null),new cljs.core.Symbol(null,"?due","?due",-1593059592,null),new cljs.core.Symbol(null,"?to","?to",331665800,null))], null)], null),db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript_todo.util.month_start.call(null,month,year),datascript_todo.util.month_end.call(null,month,year)], null));
}));
datascript_todo.group_item = datascript_todo.react.component.call(null,(function (db,title,group,item){
return sablono.interpreter.interpret.call(null,(function (){var todos = datascript_todo.todos_by_group.call(null,db,group,item);
var count = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null)], null),db,todos));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".group-item",".group-item",-291476796),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,item], null),datascript_todo.system_attr.call(null,db,new cljs.core.Keyword("system","group","system/group",1571096531),new cljs.core.Keyword("system","group-item","system/group-item",2099567073))))?"group-item_selected":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (todos,count){
return (function (_){
return datascript_todo.set_system_attrs_BANG_.call(null,new cljs.core.Keyword("system","group","system/group",1571096531),group,new cljs.core.Keyword("system","group-item","system/group-item",2099567073),item);
});})(todos,count))
], null),title], null),(cljs.core.truth_(count)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group-item-count","span.group-item-count",879057967),count], null):null)], null);
})());
}));
datascript_todo.plan_group = datascript_todo.react.component.call(null,(function (db){
return React.DOM.div({"className": "group"},React.DOM.div({"className": "group-title"},"Plan"),cljs.core.into_array.call(null,(function (){var iter__17077__auto__ = (function iter__23742(s__23743){
return (new cljs.core.LazySeq(null,(function (){
var s__23743__$1 = s__23743;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__23743__$1);
if(temp__4388__auto__){
var s__23743__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23743__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__23743__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__23745 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__23744 = (0);
while(true){
if((i__23744 < size__17076__auto__)){
var vec__23750 = cljs.core._nth.call(null,c__17075__auto__,i__23744);
var vec__23751 = cljs.core.nth.call(null,vec__23750,(0),null);
var year = cljs.core.nth.call(null,vec__23751,(0),null);
var month = cljs.core.nth.call(null,vec__23751,(1),null);
cljs.core.chunk_append.call(null,b__23745,sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,datascript_todo.util.format_month.call(null,month,year),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,month], null))));

var G__23754 = (i__23744 + (1));
i__23744 = G__23754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23745),iter__23742.call(null,cljs.core.chunk_rest.call(null,s__23743__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23745),null);
}
} else {
var vec__23752 = cljs.core.first.call(null,s__23743__$2);
var vec__23753 = cljs.core.nth.call(null,vec__23752,(0),null);
var year = cljs.core.nth.call(null,vec__23753,(0),null);
var month = cljs.core.nth.call(null,vec__23753,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,datascript_todo.util.format_month.call(null,month,year),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,month], null))),iter__23742.call(null,cljs.core.rest.call(null,s__23743__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,cljs.core.sort.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?month","?month",602885476,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?date->month","?date->month",187704432,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?date->month","?date->month",187704432,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null)),new cljs.core.Symbol(null,"?month","?month",602885476,null)], null)], null),db,datascript_todo.util.date__GT_month)));
})()));
}));
datascript_todo.projects_group = datascript_todo.react.component.call(null,(function (db){
return React.DOM.div({"className": "group"},React.DOM.div({"className": "group-title"},"Projects"),cljs.core.into_array.call(null,(function (){var iter__17077__auto__ = (function iter__23757(s__23758){
return (new cljs.core.LazySeq(null,(function (){
var s__23758__$1 = s__23758;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__23758__$1);
if(temp__4388__auto__){
var s__23758__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23758__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__23758__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__23760 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__23759 = (0);
while(true){
if((i__23759 < size__17076__auto__)){
var vec__23763 = cljs.core._nth.call(null,c__17075__auto__,i__23759);
var pid = cljs.core.nth.call(null,vec__23763,(0),null);
var name = cljs.core.nth.call(null,vec__23763,(1),null);
cljs.core.chunk_append.call(null,b__23760,sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,name,new cljs.core.Keyword(null,"project","project",1124394579),pid)));

var G__23765 = (i__23759 + (1));
i__23759 = G__23765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23760),iter__23757.call(null,cljs.core.chunk_rest.call(null,s__23758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23760),null);
}
} else {
var vec__23764 = cljs.core.first.call(null,s__23758__$2);
var pid = cljs.core.nth.call(null,vec__23764,(0),null);
var name = cljs.core.nth.call(null,vec__23764,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,name,new cljs.core.Keyword(null,"project","project",1124394579),pid)),iter__23757.call(null,cljs.core.rest.call(null,s__23758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.second,datascript.q.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?pid","?pid",1629644191,null),new cljs.core.Symbol(null,"?project","?project",324737558,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Symbol(null,"?pid","?pid",1629644191,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pid","?pid",1629644191,null),new cljs.core.Keyword("project","name","project/name",2022968152),new cljs.core.Symbol(null,"?project","?project",324737558,null)], null)], null),db)));
})()));
}));
datascript_todo.overview_pane = datascript_todo.react.component.call(null,(function (db){
return React.DOM.div({"className": "overview-pane"},(function (){var attrs23766 = datascript_todo.group_item.call(null,db,"Inbox",new cljs.core.Keyword(null,"inbox","inbox",1888669443),null);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs23766))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["group"], null)], null),attrs23766)):{"className": "group"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23766))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,"Completed",new cljs.core.Keyword(null,"completed","completed",-486056503),null)),sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,"All",new cljs.core.Keyword(null,"all","all",892129742),null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23766),sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,"Completed",new cljs.core.Keyword(null,"completed","completed",-486056503),null)),sablono.interpreter.interpret.call(null,datascript_todo.group_item.call(null,db,"All",new cljs.core.Keyword(null,"all","all",892129742),null))], null))));
})(),sablono.interpreter.interpret.call(null,datascript_todo.plan_group.call(null,db)),sablono.interpreter.interpret.call(null,datascript_todo.projects_group.call(null,db)));
}));
datascript_todo.toggle_todo_tx = (function toggle_todo_tx(db,eid){
var done_QMARK_ = new cljs.core.Keyword("todo","done","todo/done",-886331930).cljs$core$IFn$_invoke$arity$1(datascript.entity.call(null,db,eid));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("todo","done","todo/done",-886331930),cljs.core.not.call(null,done_QMARK_)], null)], null);
});
datascript_todo.toggle_todo = (function toggle_todo(eid){
return datascript.transact_BANG_.call(null,datascript_todo.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),datascript_todo.toggle_todo_tx,eid], null)], null));
});
datascript_todo.todo_pane = datascript_todo.react.component.call(null,(function (db){
var attrs23767 = (function (){var todos = (function (){var vec__23768 = datascript_todo.system_attr.call(null,db,new cljs.core.Keyword("system","group","system/group",1571096531),new cljs.core.Keyword("system","group-item","system/group-item",2099567073));
var group = cljs.core.nth.call(null,vec__23768,(0),null);
var item = cljs.core.nth.call(null,vec__23768,(1),null);
return datascript_todo.todos_by_group.call(null,db,group,item);
})();
var iter__17077__auto__ = ((function (todos){
return (function iter__23769(s__23770){
return (new cljs.core.LazySeq(null,((function (todos){
return (function (){
var s__23770__$1 = s__23770;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__23770__$1);
if(temp__4388__auto__){
var s__23770__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23770__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__23770__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__23772 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__23771 = (0);
while(true){
if((i__23771 < size__17076__auto__)){
var eid = cljs.core._nth.call(null,c__17075__auto__,i__23771);
var td = datascript.entity.call(null,db,eid);
cljs.core.chunk_append.call(null,b__23772,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo",".todo",-382333764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword("todo","done","todo/done",-886331930).cljs$core$IFn$_invoke$arity$1(td))?"todo_done":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo-checkbox",".todo-checkbox",-1757645391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23771,td,eid,c__17075__auto__,size__17076__auto__,b__23772,s__23770__$2,temp__4388__auto__,todos){
return (function (){
return datascript_todo.toggle_todo.call(null,eid);
});})(i__23771,td,eid,c__17075__auto__,size__17076__auto__,b__23772,s__23770__$2,temp__4388__auto__,todos))
], null),"\u2714\uFE0E"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo-text",".todo-text",88086343),new cljs.core.Keyword("todo","text","todo/text",-1787258203).cljs$core$IFn$_invoke$arity$1(td)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo-subtext",".todo-subtext",430308885),(function (){var temp__4388__auto____$1 = new cljs.core.Keyword("todo","due","todo/due",-1757506295).cljs$core$IFn$_invoke$arity$1(td);
if(cljs.core.truth_(temp__4388__auto____$1)){
var due = temp__4388__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),due.toDateString()], null);
} else {
return null;
}
})(),(function (){var temp__4388__auto____$1 = new cljs.core.Keyword("todo","project","todo/project",1114598921).cljs$core$IFn$_invoke$arity$1(td);
if(cljs.core.truth_(temp__4388__auto____$1)){
var project = temp__4388__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(project)], null);
} else {
return null;
}
})(),(function (){var iter__17077__auto__ = ((function (i__23771,td,eid,c__17075__auto__,size__17076__auto__,b__23772,s__23770__$2,temp__4388__auto__,todos){
return (function iter__23781(s__23782){
return (new cljs.core.LazySeq(null,((function (i__23771,td,eid,c__17075__auto__,size__17076__auto__,b__23772,s__23770__$2,temp__4388__auto__,todos){
return (function (){
var s__23782__$1 = s__23782;
while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__23782__$1);
if(temp__4388__auto____$1){
var s__23782__$2 = temp__4388__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23782__$2)){
var c__17075__auto____$1 = cljs.core.chunk_first.call(null,s__23782__$2);
var size__17076__auto____$1 = cljs.core.count.call(null,c__17075__auto____$1);
var b__23784 = cljs.core.chunk_buffer.call(null,size__17076__auto____$1);
if((function (){var i__23783 = (0);
while(true){
if((i__23783 < size__17076__auto____$1)){
var tag = cljs.core._nth.call(null,c__17075__auto____$1,i__23783);
cljs.core.chunk_append.call(null,b__23784,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),tag], null));

var G__23789 = (i__23783 + (1));
i__23783 = G__23789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23784),iter__23781.call(null,cljs.core.chunk_rest.call(null,s__23782__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23784),null);
}
} else {
var tag = cljs.core.first.call(null,s__23782__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),tag], null),iter__23781.call(null,cljs.core.rest.call(null,s__23782__$2)));
}
} else {
return null;
}
break;
}
});})(i__23771,td,eid,c__17075__auto__,size__17076__auto__,b__23772,s__23770__$2,temp__4388__auto__,todos))
,null,null));
});})(i__23771,td,eid,c__17075__auto__,size__17076__auto__,b__23772,s__23770__$2,temp__4388__auto__,todos))
;
return iter__17077__auto__.call(null,new cljs.core.Keyword("todo","tags","todo/tags",1766788507).cljs$core$IFn$_invoke$arity$1(td));
})()], null)], null));

var G__23790 = (i__23771 + (1));
i__23771 = G__23790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23772),iter__23769.call(null,cljs.core.chunk_rest.call(null,s__23770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23772),null);
}
} else {
var eid = cljs.core.first.call(null,s__23770__$2);
var td = datascript.entity.call(null,db,eid);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo",".todo",-382333764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword("todo","done","todo/done",-886331930).cljs$core$IFn$_invoke$arity$1(td))?"todo_done":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo-checkbox",".todo-checkbox",-1757645391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (td,eid,s__23770__$2,temp__4388__auto__,todos){
return (function (){
return datascript_todo.toggle_todo.call(null,eid);
});})(td,eid,s__23770__$2,temp__4388__auto__,todos))
], null),"\u2714\uFE0E"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo-text",".todo-text",88086343),new cljs.core.Keyword("todo","text","todo/text",-1787258203).cljs$core$IFn$_invoke$arity$1(td)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".todo-subtext",".todo-subtext",430308885),(function (){var temp__4388__auto____$1 = new cljs.core.Keyword("todo","due","todo/due",-1757506295).cljs$core$IFn$_invoke$arity$1(td);
if(cljs.core.truth_(temp__4388__auto____$1)){
var due = temp__4388__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),due.toDateString()], null);
} else {
return null;
}
})(),(function (){var temp__4388__auto____$1 = new cljs.core.Keyword("todo","project","todo/project",1114598921).cljs$core$IFn$_invoke$arity$1(td);
if(cljs.core.truth_(temp__4388__auto____$1)){
var project = temp__4388__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(project)], null);
} else {
return null;
}
})(),(function (){var iter__17077__auto__ = ((function (td,eid,s__23770__$2,temp__4388__auto__,todos){
return (function iter__23785(s__23786){
return (new cljs.core.LazySeq(null,((function (td,eid,s__23770__$2,temp__4388__auto__,todos){
return (function (){
var s__23786__$1 = s__23786;
while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__23786__$1);
if(temp__4388__auto____$1){
var s__23786__$2 = temp__4388__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23786__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__23786__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__23788 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__23787 = (0);
while(true){
if((i__23787 < size__17076__auto__)){
var tag = cljs.core._nth.call(null,c__17075__auto__,i__23787);
cljs.core.chunk_append.call(null,b__23788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),tag], null));

var G__23791 = (i__23787 + (1));
i__23787 = G__23791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23788),iter__23785.call(null,cljs.core.chunk_rest.call(null,s__23786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23788),null);
}
} else {
var tag = cljs.core.first.call(null,s__23786__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),tag], null),iter__23785.call(null,cljs.core.rest.call(null,s__23786__$2)));
}
} else {
return null;
}
break;
}
});})(td,eid,s__23770__$2,temp__4388__auto__,todos))
,null,null));
});})(td,eid,s__23770__$2,temp__4388__auto__,todos))
;
return iter__17077__auto__.call(null,new cljs.core.Keyword("todo","tags","todo/tags",1766788507).cljs$core$IFn$_invoke$arity$1(td));
})()], null)], null),iter__23769.call(null,cljs.core.rest.call(null,s__23770__$2)));
}
} else {
return null;
}
break;
}
});})(todos))
,null,null));
});})(todos))
;
return iter__17077__auto__.call(null,cljs.core.sort.call(null,todos));
})();
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs23767))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todo-pane"], null)], null),attrs23767)):{"className": "todo-pane"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23767))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23767)], null))));
}));
datascript_todo.extract_todo = (function extract_todo(){
var temp__4388__auto__ = datascript_todo.dom.value.call(null,datascript_todo.dom.q.call(null,".add-text"));
if(cljs.core.truth_(temp__4388__auto__)){
var text = temp__4388__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"project","project",1124394579),datascript_todo.dom.value.call(null,datascript_todo.dom.q.call(null,".add-project")),new cljs.core.Keyword(null,"due","due",-1754731313),datascript_todo.dom.date_value.call(null,datascript_todo.dom.q.call(null,".add-due")),new cljs.core.Keyword(null,"tags","tags",1771418977),datascript_todo.dom.array_value.call(null,datascript_todo.dom.q.call(null,".add-tags"))], null);
} else {
return null;
}
});
datascript_todo.clean_todo = (function clean_todo(){
datascript_todo.dom.set_value_BANG_.call(null,datascript_todo.dom.q.call(null,".add-text"),null);

datascript_todo.dom.set_value_BANG_.call(null,datascript_todo.dom.q.call(null,".add-project"),null);

datascript_todo.dom.set_value_BANG_.call(null,datascript_todo.dom.q.call(null,".add-due"),null);

return datascript_todo.dom.set_value_BANG_.call(null,datascript_todo.dom.q.call(null,".add-tags"),null);
});
datascript_todo.add_todo = (function add_todo(){
var temp__4388__auto__ = datascript_todo.extract_todo.call(null);
if(cljs.core.truth_(temp__4388__auto__)){
var todo = temp__4388__auto__;
var project_23792 = new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(todo);
var project_id_23793 = (cljs.core.truth_(project_23792)?datascript_todo.util.e_by_av.call(null,cljs.core.deref.call(null,datascript_todo.conn),new cljs.core.Keyword("project","name","project/name",2022968152),project_23792):null);
var project_tx_23794 = (cljs.core.truth_((function (){var and__16314__auto__ = project_23792;
if(cljs.core.truth_(and__16314__auto__)){
return (project_id_23793 == null);
} else {
return and__16314__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("project","name","project/name",2022968152),project_23792], null)], null):null);
var entity_23795 = datascript_todo.util.remove_vals.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","project","todo/project",1114598921),(cljs.core.truth_(project_23792)?(function (){var or__16326__auto__ = project_id_23793;
if(cljs.core.truth_(or__16326__auto__)){
return or__16326__auto__;
} else {
return (-1);
}
})():null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Keyword(null,"due","due",-1754731313).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(todo)], null));
datascript.transact_BANG_.call(null,datascript_todo.conn,cljs.core.concat.call(null,project_tx_23794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_23795], null)));

return datascript_todo.clean_todo.call(null);
} else {
return null;
}
});
datascript_todo.add_view = datascript_todo.react.component.call(null,(function (){
return React.DOM.form({"className": "add-view", "onSubmit": (function (_){
datascript_todo.add_todo.call(null);

return false;
})},sablono.interpreter.input.call(null,{"className": "add-text", "type": "text", "placeholder": "New task"}),sablono.interpreter.input.call(null,{"className": "add-project", "type": "text", "placeholder": "Project"}),sablono.interpreter.input.call(null,{"className": "add-tags", "type": "text", "placeholder": "Tags"}),sablono.interpreter.input.call(null,{"className": "add-due", "type": "text", "placeholder": "Due date"}),sablono.interpreter.input.call(null,{"className": "add-submit", "type": "submit", "value": "Add task"}));
}));
datascript_todo.db_identical_QMARK_ = (function db_identical_QMARK_(x,y){
return (x.max_tx === y.max_tx);
});
datascript_todo.history_view = datascript_todo.react.component.call(null,(function (db){
return React.DOM.div({"className": "history-view"},cljs.core.into_array.call(null,(function (){var iter__17077__auto__ = (function iter__23808(s__23809){
return (new cljs.core.LazySeq(null,(function (){
var s__23809__$1 = s__23809;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__23809__$1);
if(temp__4388__auto__){
var s__23809__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23809__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__23809__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__23811 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__23810 = (0);
while(true){
if((i__23810 < size__17076__auto__)){
var state = cljs.core._nth.call(null,c__17075__auto__,i__23810);
cljs.core.chunk_append.call(null,b__23811,React.DOM.div({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["history-state",((datascript_todo.db_identical_QMARK_.call(null,state,db))?"history-selected":null)], null)), "onClick": ((function (i__23810,state,c__17075__auto__,size__17076__auto__,b__23811,s__23809__$2,temp__4388__auto__){
return (function (_){
return datascript_todo.reset_conn_BANG_.call(null,state);
});})(i__23810,state,c__17075__auto__,size__17076__auto__,b__23811,s__23809__$2,temp__4388__auto__))
}));

var G__23812 = (i__23810 + (1));
i__23810 = G__23812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23811),iter__23808.call(null,cljs.core.chunk_rest.call(null,s__23809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23811),null);
}
} else {
var state = cljs.core.first.call(null,s__23809__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["history-state",((datascript_todo.db_identical_QMARK_.call(null,state,db))?"history-selected":null)], null)), "onClick": ((function (state,s__23809__$2,temp__4388__auto__){
return (function (_){
return datascript_todo.reset_conn_BANG_.call(null,state);
});})(state,s__23809__$2,temp__4388__auto__))
}),iter__23808.call(null,cljs.core.rest.call(null,s__23809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,cljs.core.deref.call(null,datascript_todo.history));
})()),sablono.interpreter.interpret.call(null,(function (){var temp__4386__auto__ = datascript_todo.util.find_prev.call(null,cljs.core.deref.call(null,datascript_todo.history),(function (p1__23806_SHARP_){
return datascript_todo.db_identical_QMARK_.call(null,db,p1__23806_SHARP_);
}));
if(cljs.core.truth_(temp__4386__auto__)){
var prev = temp__4386__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.history-btn","button.history-btn",1518535555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (prev,temp__4386__auto__){
return (function (_){
return datascript_todo.reset_conn_BANG_.call(null,prev);
});})(prev,temp__4386__auto__))
], null),"\u2190 undo"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.history-btn","button.history-btn",1518535555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"\u2190 undo"], null);
}
})()),sablono.interpreter.interpret.call(null,(function (){var temp__4386__auto__ = datascript_todo.util.find_next.call(null,cljs.core.deref.call(null,datascript_todo.history),(function (p1__23807_SHARP_){
return datascript_todo.db_identical_QMARK_.call(null,db,p1__23807_SHARP_);
}));
if(cljs.core.truth_(temp__4386__auto__)){
var next = temp__4386__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.history-btn","button.history-btn",1518535555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (next,temp__4386__auto__){
return (function (_){
return datascript_todo.reset_conn_BANG_.call(null,next);
});})(next,temp__4386__auto__))
], null),"redo \u2192"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.history-btn","button.history-btn",1518535555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"redo \u2192"], null);
}
})()));
}));
datascript_todo.canvas = datascript_todo.react.component.call(null,(function (db){
return React.DOM.div({"className": "canvas"},(function (){var attrs23813 = datascript_todo.filter_pane.call(null,db);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs23813))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main-view"], null)], null),attrs23813)):{"className": "main-view"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23813))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(function (){var db__$1 = datascript_todo.filtered_db.call(null,db);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,datascript_todo.todo_pane.call(null,db__$1)),datascript_todo.overview_pane.call(null,db__$1));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23813),sablono.interpreter.interpret.call(null,(function (){var db__$1 = datascript_todo.filtered_db.call(null,db);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,datascript_todo.todo_pane.call(null,db__$1)),datascript_todo.overview_pane.call(null,db__$1));
})())], null))));
})(),sablono.interpreter.interpret.call(null,datascript_todo.add_view.call(null)),sablono.interpreter.interpret.call(null,datascript_todo.history_view.call(null,db)));
}));
datascript_todo.render = (function() {
var render = null;
var render__0 = (function (){
return render.call(null,cljs.core.deref.call(null,datascript_todo.conn));
});
var render__1 = (function (db){
var k__16125__auto__ = "render";
console.time(k__16125__auto__);

var res__16126__auto__ = datascript_todo.react.render.call(null,datascript_todo.canvas.call(null,db),document.body);
console.timeEnd(k__16125__auto__);

return res__16126__auto__;
});
render = function(db){
switch(arguments.length){
case 0:
return render__0.call(this);
case 1:
return render__1.call(this,db);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render.cljs$core$IFn$_invoke$arity$0 = render__0;
render.cljs$core$IFn$_invoke$arity$1 = render__1;
return render;
})()
;
datascript.listen_BANG_.call(null,datascript_todo.conn,new cljs.core.Keyword(null,"render","render",-1408033454),(function (tx_report){
return datascript_todo.render.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report));
}));
datascript.listen_BANG_.call(null,datascript_todo.conn,new cljs.core.Keyword(null,"log","log",-1595516004),(function (tx_report){
var tx_id = cljs.core.get_in.call(null,tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null));
var datoms = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var datom__GT_str = ((function (tx_id,datoms){
return (function (d){
return [cljs.core.str((cljs.core.truth_(d.added)?"+":"\u2212")),cljs.core.str("["),cljs.core.str(d.e),cljs.core.str(" "),cljs.core.str(d.a),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,d.v)),cljs.core.str("]")].join('');
});})(tx_id,datoms))
;
return cljs.core.println.call(null,clojure.string.join.call(null,"\n",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("tx "),cljs.core.str(tx_id),cljs.core.str(":")].join('')], null),cljs.core.map.call(null,datom__GT_str,datoms))));
}));
datascript.listen_BANG_.call(null,datascript_todo.conn,new cljs.core.Keyword(null,"history","history",-247395220),(function (tx_report){
var map__23815 = tx_report;
var map__23815__$1 = ((cljs.core.seq_QMARK_.call(null,map__23815))?cljs.core.apply.call(null,cljs.core.hash_map,map__23815):map__23815);
var db_after = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var db_before = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
if(cljs.core.truth_((function (){var and__16314__auto__ = db_before;
if(cljs.core.truth_(and__16314__auto__)){
return db_after;
} else {
return and__16314__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,datascript_todo.history,((function (map__23815,map__23815__$1,db_after,db_before){
return (function (h){
return datascript_todo.util.trim_head.call(null,cljs.core.conj.call(null,datascript_todo.util.drop_tail.call(null,h,((function (map__23815,map__23815__$1,db_after,db_before){
return (function (p1__23814_SHARP_){
return datascript_todo.db_identical_QMARK_.call(null,p1__23814_SHARP_,db_before);
});})(map__23815,map__23815__$1,db_after,db_before))
),db_after),datascript_todo.history_limit);
});})(map__23815,map__23815__$1,db_after,db_before))
);
} else {
return null;
}
}));

/**
* @constructor
*/
datascript_todo.DatomHandler = (function (){
})
datascript_todo.DatomHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return "datascript/Datom";
});

datascript_todo.DatomHandler.prototype.rep = (function (d){
var self__ = this;
var _ = this;
return [d.e,d.a,d.v,d.tx,d.added];
});

datascript_todo.DatomHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

datascript_todo.DatomHandler.cljs$lang$type = true;

datascript_todo.DatomHandler.cljs$lang$ctorStr = "datascript-todo/DatomHandler";

datascript_todo.DatomHandler.cljs$lang$ctorPrWriter = (function (this__16908__auto__,writer__16909__auto__,opt__16910__auto__){
return cljs.core._write.call(null,writer__16909__auto__,"datascript-todo/DatomHandler");
});

datascript_todo.__GT_DatomHandler = (function __GT_DatomHandler(){
return (new datascript_todo.DatomHandler());
});

datascript_todo.transit_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap.fromArray([datascript.core.Datom,(new datascript_todo.DatomHandler()),datascript.btset.BTSetIter,(new cognitect.transit.VectorHandler())], true, false)], null));
datascript_todo.transit_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["datascript/Datom",datascript.datom_from_reader], null)], null));
datascript_todo.db__GT_string = (function db__GT_string(db){
var k__16125__auto__ = "db serialization";
console.time(k__16125__auto__);

var res__16126__auto__ = cognitect.transit.write.call(null,datascript_todo.transit_writer,datascript.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073)));
console.timeEnd(k__16125__auto__);

return res__16126__auto__;
});
datascript_todo.string__GT_db = (function string__GT_db(s){
var k__16125__auto__ = "db deserialization";
console.time(k__16125__auto__);

var res__16126__auto__ = (function (){var datoms = cognitect.transit.read.call(null,datascript_todo.transit_reader,s);
return datascript.init_db.call(null,datoms,datascript_todo.schema);
})();
console.timeEnd(k__16125__auto__);

return res__16126__auto__;
});
datascript_todo.persist = (function persist(db){
return localStorage.setItem("datascript-todo/db",datascript_todo.db__GT_string.call(null,db));
});
datascript.listen_BANG_.call(null,datascript_todo.conn,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (tx_report){
var temp__4388__auto__ = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
if(cljs.core.truth_(temp__4388__auto__)){
var db = temp__4388__auto__;
return datascript_todo.persist.call(null,db);
} else {
return null;
}
}));
var temp__4386__auto___23816 = localStorage.getItem("datascript-todo/db");
if(cljs.core.truth_(temp__4386__auto___23816)){
var stored_23817 = temp__4386__auto___23816;
datascript_todo.reset_conn_BANG_.call(null,datascript_todo.string__GT_db.call(null,stored_23817));

cljs.core.swap_BANG_.call(null,datascript_todo.history,cljs.core.conj,cljs.core.deref.call(null,datascript_todo.conn));
} else {
datascript.transact_BANG_.call(null,datascript_todo.conn,datascript_todo.util.fixtures);
}
datascript_todo.render.call(null);

//# sourceMappingURL=datascript_todo.js.map?rel=1420461602563