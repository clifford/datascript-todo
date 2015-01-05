// Compiled by ClojureScript 0.0-2411
goog.provide('datascript_todo.util');
goog.require('cljs.core');
goog.require('datascript');
goog.require('datascript');
datascript_todo.util.remove_vals = (function remove_vals(f,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(f.call(null,v))){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),cljs.core.empty.call(null,m),m);
});
datascript_todo.util.find_prev = (function find_prev(xs,pred){
return cljs.core.last.call(null,cljs.core.take_while.call(null,(function (p1__11171_SHARP_){
return cljs.core.not.call(null,pred.call(null,p1__11171_SHARP_));
}),xs));
});
datascript_todo.util.find_next = (function find_next(xs,pred){
return cljs.core.fnext.call(null,cljs.core.drop_while.call(null,(function (p1__11172_SHARP_){
return cljs.core.not.call(null,pred.call(null,p1__11172_SHARP_));
}),xs));
});
datascript_todo.util.drop_tail = (function drop_tail(xs,pred){
var acc = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var x = cljs.core.first.call(null,xs__$1);
if((x == null)){
return acc;
} else {
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.conj.call(null,acc,x);
} else {
var G__11173 = cljs.core.conj.call(null,acc,x);
var G__11174 = cljs.core.next.call(null,xs__$1);
acc = G__11173;
xs__$1 = G__11174;
continue;

}
}
break;
}
});
datascript_todo.util.trim_head = (function trim_head(xs,n){
return cljs.core.vec.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,xs) - n),xs));
});
datascript_todo.util.e_by_av = (function e_by_av(db,a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),a,v)));
});
datascript_todo.util.date__GT_month = (function date__GT_month(date){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.getFullYear(),(date.getMonth() + (1))], null);
});
datascript_todo.util.format_month = (function format_month(month,year){
return [cljs.core.str(cljs.core.get.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null),(month - (1)))),cljs.core.str(" "),cljs.core.str(year)].join('');
});
datascript_todo.util.month_start = (function month_start(month,year){
return (new Date([cljs.core.str(year),cljs.core.str("-"),cljs.core.str(month),cljs.core.str("-01")].join('')));
});
datascript_todo.util.month_end = (function month_end(month,year){
var vec__11176 = (((month < (12)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(month + (1)),year], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(year + (1))], null));
var month__$1 = cljs.core.nth.call(null,vec__11176,(0),null);
var year__$1 = cljs.core.nth.call(null,vec__11176,(1),null);
return (new Date(((new Date([cljs.core.str(year__$1),cljs.core.str("-"),cljs.core.str(month__$1),cljs.core.str("-01 00:00:00")].join(''))).getTime() - (1))));
});
datascript_todo.util.fixtures = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(0),new cljs.core.Keyword("system","group","system/group",1571096531),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("project","name","project/name",2022968152),"datascript"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("project","name","project/name",2022968152),"nyc-webinar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-3),new cljs.core.Keyword("project","name","project/name",2022968152),"shopping"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Displaying list of todos",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listen","query"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),true,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Persisting to localStorage",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listen","serialization","transact"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),true,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Make task completable",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transact","funs"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Fix fn calls on emtpy rels",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bug","funs","query"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-1),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1420070400000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Add db filtering",new cljs.core.Keyword("todo","project","todo/project",1114598921),(-1),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1432944000000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Soap",new cljs.core.Keyword("todo","project","todo/project",1114598921),(-3),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1430438400000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Cake",new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","project","todo/project",1114598921),(-3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Just a task",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Another incomplete task",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null)], null);

//# sourceMappingURL=util.js.map?rel=1420461333810