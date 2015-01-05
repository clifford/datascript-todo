// Compiled by ClojureScript 0.0-2411
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.query');
goog.require('datascript.query');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function entity_db(entity){
return entity.db;
});
datascript.touch = datascript.impl.entity.touch;
datascript.tx0 = datascript.core.tx0;
datascript.refs = (function refs(schema){
return cljs.core.reduce_kv.call(null,(function (acc,attr,v){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return cljs.core.conj.call(null,acc,attr);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,schema);
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__17842){
var vec__17844 = p__17842;
var schema = cljs.core.nth.call(null,vec__17844,(0),null);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var empty_db = function (var_args){
var p__17842 = null;
if (arguments.length > 0) {
  p__17842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return empty_db__delegate.call(this,p__17842);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__17845){
var p__17842 = cljs.core.seq(arglist__17845);
return empty_db__delegate(p__17842);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.init_db = (function() { 
var init_db__delegate = function (datoms,p__17847){
var vec__17849 = p__17847;
var schema = cljs.core.nth.call(null,vec__17849,(0),null);
var datoms__$1 = cljs.core.into_array.call(null,datoms);
var len = datoms__$1.length;
var eavt = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_eavt_quick),datascript.core.cmp_datoms_eavt);
var max_eid = (((len > (0)))?(datoms__$1[(len - (1))]).e:(0));
var aevt = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_aevt_quick),datascript.core.cmp_datoms_aevt);
var avet = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_avet_quick),datascript.core.cmp_datoms_avet);
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (datoms__$1,len,eavt,max_eid,aevt,avet,vec__17849,schema){
return (function (p1__17846_SHARP_){
return p1__17846_SHARP_.tx;
});})(datoms__$1,len,eavt,max_eid,aevt,avet,vec__17849,schema))
),cljs.core.max,datascript.tx0,datoms__$1);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var init_db = function (datoms,var_args){
var p__17847 = null;
if (arguments.length > 1) {
  p__17847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return init_db__delegate.call(this,datoms,p__17847);};
init_db.cljs$lang$maxFixedArity = 1;
init_db.cljs$lang$applyTo = (function (arglist__17850){
var datoms = cljs.core.first(arglist__17850);
var p__17847 = cljs.core.rest(arglist__17850);
return init_db__delegate(datoms,p__17847);
});
init_db.cljs$core$IFn$_invoke$arity$variadic = init_db__delegate;
return init_db;
})()
;
datascript.is_filtered = (function is_filtered(db){
return (db instanceof datascript.core.FilteredDB);
});
datascript.filter = (function filter(db,pred){
if(datascript.is_filtered.call(null,db)){
var u = db.unfiltered_db;
return (new datascript.core.FilteredDB(u,((function (u){
return (function (p1__17851_SHARP_){
var and__9185__auto__ = pred.call(null,u,p1__17851_SHARP_);
if(cljs.core.truth_(and__9185__auto__)){
return db.pred.call(null,p1__17851_SHARP_);
} else {
return and__9185__auto__;
}
});})(u))
));
} else {
return (new datascript.core.FilteredDB(db,(function (p1__17852_SHARP_){
return pred.call(null,db,p1__17852_SHARP_);
})));
}
});
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__17853){
var vec__17855 = p__17853;
var tx_meta = cljs.core.nth.call(null,vec__17855,(0),null);
if(datascript.is_filtered.call(null,db)){
throw (new Error("Filtered DB cannot be modified"));
} else {
return datascript.core.transact_tx_data.call(null,datascript.core.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
};
var with$ = function (db,tx_data,var_args){
var p__17853 = null;
if (arguments.length > 2) {
  p__17853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return with$__delegate.call(this,db,tx_data,p__17853);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__17856){
var db = cljs.core.first(arglist__17856);
arglist__17856 = cljs.core.next(arglist__17856);
var tx_data = cljs.core.first(arglist__17856);
var p__17853 = cljs.core.rest(arglist__17856);
return with$__delegate(db,tx_data,p__17853);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$.call(null,db,tx_data));
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){
return datascript.core._datoms.call(null,db,index,cs);
};
var datoms = function (db,index,var_args){
var cs = null;
if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__17857){
var db = cljs.core.first(arglist__17857);
arglist__17857 = cljs.core.next(arglist__17857);
var index = cljs.core.first(arglist__17857);
var cs = cljs.core.rest(arglist__17857);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){
return datascript.core._seek_datoms.call(null,db,index,cs);
};
var seek_datoms = function (db,index,var_args){
var cs = null;
if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__17858){
var db = cljs.core.first(arglist__17858);
arglist__17858 = cljs.core.next(arglist__17858);
var index = cljs.core.first(arglist__17858);
var cs = cljs.core.rest(arglist__17858);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.index_range = (function index_range(db,attr,start,end){
return datascript.core._index_range.call(null,db,attr,start,end);
});
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__17859){
var vec__17861 = p__17859;
var schema = cljs.core.nth.call(null,vec__17861,(0),null);
return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__17859 = null;
if (arguments.length > 0) {
  p__17859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return create_conn__delegate.call(this,p__17859);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__17862){
var p__17859 = cljs.core.seq(arglist__17862);
return create_conn__delegate(p__17859);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){
var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__17863){
var vec__17871 = p__17863;
var tx_meta = cljs.core.nth.call(null,vec__17871,(0),null);
var report = datascript._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__17872_17878 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__17873_17879 = null;
var count__17874_17880 = (0);
var i__17875_17881 = (0);
while(true){
if((i__17875_17881 < count__17874_17880)){
var vec__17876_17882 = cljs.core._nth.call(null,chunk__17873_17879,i__17875_17881);
var __17883 = cljs.core.nth.call(null,vec__17876_17882,(0),null);
var callback_17884 = cljs.core.nth.call(null,vec__17876_17882,(1),null);
callback_17884.call(null,report);

var G__17885 = seq__17872_17878;
var G__17886 = chunk__17873_17879;
var G__17887 = count__17874_17880;
var G__17888 = (i__17875_17881 + (1));
seq__17872_17878 = G__17885;
chunk__17873_17879 = G__17886;
count__17874_17880 = G__17887;
i__17875_17881 = G__17888;
continue;
} else {
var temp__4388__auto___17889 = cljs.core.seq.call(null,seq__17872_17878);
if(temp__4388__auto___17889){
var seq__17872_17890__$1 = temp__4388__auto___17889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17872_17890__$1)){
var c__9979__auto___17891 = cljs.core.chunk_first.call(null,seq__17872_17890__$1);
var G__17892 = cljs.core.chunk_rest.call(null,seq__17872_17890__$1);
var G__17893 = c__9979__auto___17891;
var G__17894 = cljs.core.count.call(null,c__9979__auto___17891);
var G__17895 = (0);
seq__17872_17878 = G__17892;
chunk__17873_17879 = G__17893;
count__17874_17880 = G__17894;
i__17875_17881 = G__17895;
continue;
} else {
var vec__17877_17896 = cljs.core.first.call(null,seq__17872_17890__$1);
var __17897 = cljs.core.nth.call(null,vec__17877_17896,(0),null);
var callback_17898 = cljs.core.nth.call(null,vec__17877_17896,(1),null);
callback_17898.call(null,report);

var G__17899 = cljs.core.next.call(null,seq__17872_17890__$1);
var G__17900 = null;
var G__17901 = (0);
var G__17902 = (0);
seq__17872_17878 = G__17899;
chunk__17873_17879 = G__17900;
count__17874_17880 = G__17901;
i__17875_17881 = G__17902;
continue;
}
} else {
}
}
break;
}

return report;
};
var transact_BANG_ = function (conn,tx_data,var_args){
var p__17863 = null;
if (arguments.length > 2) {
  p__17863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return transact_BANG___delegate.call(this,conn,tx_data,p__17863);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__17903){
var conn = cljs.core.first(arglist__17903);
arglist__17903 = cljs.core.next(arglist__17903);
var tx_data = cljs.core.first(arglist__17903);
var p__17863 = cljs.core.rest(arglist__17903);
return transact_BANG___delegate(conn,tx_data,p__17863);
});
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___delegate;
return transact_BANG_;
})()
;
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){
return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
/**
* @param {...*} var_args
*/
datascript.datom = (function() { 
var datom__delegate = function (e,a,v,p__17904){
var vec__17906 = p__17904;
var tx = cljs.core.nth.call(null,vec__17906,(0),null);
var added = cljs.core.nth.call(null,vec__17906,(1),null);
return (new datascript.core.Datom(e,a,v,(function (){var or__9197__auto__ = tx;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return datascript.tx0;
}
})(),(((added == null))?true:added)));
};
var datom = function (e,a,v,var_args){
var p__17904 = null;
if (arguments.length > 3) {
  p__17904 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return datom__delegate.call(this,e,a,v,p__17904);};
datom.cljs$lang$maxFixedArity = 3;
datom.cljs$lang$applyTo = (function (arglist__17907){
var e = cljs.core.first(arglist__17907);
arglist__17907 = cljs.core.next(arglist__17907);
var a = cljs.core.first(arglist__17907);
arglist__17907 = cljs.core.next(arglist__17907);
var v = cljs.core.first(arglist__17907);
var p__17904 = cljs.core.rest(arglist__17907);
return datom__delegate(e,a,v,p__17904);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
datascript.datom_from_reader = (function datom_from_reader(p__17908){
var vec__17910 = p__17908;
var e = cljs.core.nth.call(null,vec__17910,(0),null);
var a = cljs.core.nth.call(null,vec__17910,(1),null);
var v = cljs.core.nth.call(null,vec__17910,(2),null);
var tx = cljs.core.nth.call(null,vec__17910,(3),null);
var added = cljs.core.nth.call(null,vec__17910,(4),null);
return datascript.datom.call(null,e,a,v,tx,added);
});
datascript.pr_db = (function pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.core._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.pr_db.call(null,db__$1,w,opts);
});

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.pr_db.call(null,db__$1,w,opts);
});
datascript.db_from_reader = (function db_from_reader(p__17911){
var map__17915 = p__17911;
var map__17915__$1 = ((cljs.core.seq_QMARK_.call(null,map__17915))?cljs.core.apply.call(null,cljs.core.hash_map,map__17915):map__17915);
var datoms = cljs.core.get.call(null,map__17915__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var schema = cljs.core.get.call(null,map__17915__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return datascript.init_db.call(null,cljs.core.map.call(null,((function (map__17915,map__17915__$1,datoms,schema){
return (function (p__17916){
var vec__17917 = p__17916;
var e = cljs.core.nth.call(null,vec__17917,(0),null);
var a = cljs.core.nth.call(null,vec__17917,(1),null);
var v = cljs.core.nth.call(null,vec__17917,(2),null);
var tx = cljs.core.nth.call(null,vec__17917,(3),null);
return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__17915,map__17915__$1,datoms,schema))
,datoms),schema);
});
datascript.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.last_tempid,cljs.core.dec);
}
});
var tempid__2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});
tempid = function(part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,part);
case 2:
return tempid__2.call(this,part,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;
datascript.resolve_tempid = (function resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.db = cljs.core.deref;
/**
* @param {...*} var_args
*/
datascript.transact = (function() { 
var transact__delegate = function (conn,tx_data,p__17918){
var vec__17923 = p__17918;
var tx_meta = cljs.core.nth.call(null,vec__17923,(0),null);
var res = datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.t17924 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t17924 = (function (res,tx_meta,vec__17923,p__17918,tx_data,conn,transact,meta17925){
this.res = res;
this.tx_meta = tx_meta;
this.vec__17923 = vec__17923;
this.p__17918 = p__17918;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta17925 = meta17925;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t17924.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__17923,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res,vec__17923,tx_meta))
;

datascript.t17924.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__17923,tx_meta){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res,vec__17923,tx_meta))
;

datascript.t17924.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__17923,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res,vec__17923,tx_meta))
;

datascript.t17924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__17923,tx_meta){
return (function (_17926){
var self__ = this;
var _17926__$1 = this;
return self__.meta17925;
});})(res,vec__17923,tx_meta))
;

datascript.t17924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__17923,tx_meta){
return (function (_17926,meta17925__$1){
var self__ = this;
var _17926__$1 = this;
return (new datascript.t17924(self__.res,self__.tx_meta,self__.vec__17923,self__.p__17918,self__.tx_data,self__.conn,self__.transact,meta17925__$1));
});})(res,vec__17923,tx_meta))
;

datascript.t17924.cljs$lang$type = true;

datascript.t17924.cljs$lang$ctorStr = "datascript/t17924";

datascript.t17924.cljs$lang$ctorPrWriter = ((function (res,vec__17923,tx_meta){
return (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript/t17924");
});})(res,vec__17923,tx_meta))
;

datascript.__GT_t17924 = ((function (res,vec__17923,tx_meta){
return (function __GT_t17924(res__$1,tx_meta__$1,vec__17923__$1,p__17918__$1,tx_data__$1,conn__$1,transact__$1,meta17925){
return (new datascript.t17924(res__$1,tx_meta__$1,vec__17923__$1,p__17918__$1,tx_data__$1,conn__$1,transact__$1,meta17925));
});})(res,vec__17923,tx_meta))
;

}

return (new datascript.t17924(res,tx_meta,vec__17923,p__17918,tx_data,conn,transact,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),29,new cljs.core.Keyword(null,"end-line","end-line",1837326455),178,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),172,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/datascript.cljs"], null)));
};
var transact = function (conn,tx_data,var_args){
var p__17918 = null;
if (arguments.length > 2) {
  p__17918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return transact__delegate.call(this,conn,tx_data,p__17918);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__17927){
var conn = cljs.core.first(arglist__17927);
arglist__17927 = cljs.core.next(arglist__17927);
var tx_data = cljs.core.first(arglist__17927);
var p__17918 = cljs.core.rest(arglist__17927);
return transact__delegate(conn,tx_data,p__17918);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.t17931 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t17931 = (function (realized,res,f,future_call,meta17932){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta17932 = meta17932;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t17931.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.t17931.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.t17931.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.t17931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_17933){
var self__ = this;
var _17933__$1 = this;
return self__.meta17932;
});})(res,realized))
;

datascript.t17931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_17933,meta17932__$1){
var self__ = this;
var _17933__$1 = this;
return (new datascript.t17931(self__.realized,self__.res,self__.f,self__.future_call,meta17932__$1));
});})(res,realized))
;

datascript.t17931.cljs$lang$type = true;

datascript.t17931.cljs$lang$ctorStr = "datascript/t17931";

datascript.t17931.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript/t17931");
});})(res,realized))
;

datascript.__GT_t17931 = ((function (res,realized){
return (function __GT_t17931(realized__$1,res__$1,f__$1,future_call__$1,meta17932){
return (new datascript.t17931(realized__$1,res__$1,f__$1,future_call__$1,meta17932));
});})(res,realized))
;

}

return (new datascript.t17931(realized,res,f,future_call,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),191,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),185,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/datascript.cljs"], null)));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__17934){
var vec__17936 = p__17934;
var tx_meta = cljs.core.nth.call(null,vec__17936,(0),null);
return datascript.future_call.call(null,((function (vec__17936,tx_meta){
return (function (){
return datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
});})(vec__17936,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__17934 = null;
if (arguments.length > 2) {
  p__17934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return transact_async__delegate.call(this,conn,tx_data,p__17934);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__17937){
var conn = cljs.core.first(arglist__17937);
arglist__17937 = cljs.core.next(arglist__17937);
var tx_data = cljs.core.first(arglist__17937);
var p__17934 = cljs.core.rest(arglist__17937);
return transact_async__delegate(conn,tx_data,p__17934);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.squuid = (function squuid(){
return (new cljs.core.UUID([cljs.core.str(Math.round.call(null,((new Date()).getTime() / (1000))).toString((16))),cljs.core.str("-"),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str("-"),cljs.core.str(((datascript.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16))),cljs.core.str("-"),cljs.core.str(((datascript.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16))),cljs.core.str("-"),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16)))].join('')));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,uuid.uuid,(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=datascript.js.map?rel=1420461346632