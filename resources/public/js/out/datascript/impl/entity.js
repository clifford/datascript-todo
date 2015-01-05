// Compiled by ClojureScript 0.0-2411
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){
return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(datascript.core.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__17938_SHARP_,p2__17939_SHARP_){
return cljs.core.conj.call(null,p1__17938_SHARP_,datascript.impl.entity.entity.call(null,db,p2__17939_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__17940_SHARP_,p2__17941_SHARP_){
return cljs.core.conj.call(null,p1__17940_SHARP_,p2__17941_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.core.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,cljs.core.first.call(null,datoms).v);
} else {
return cljs.core.first.call(null,datoms).v;
}
}
});
datascript.impl.entity.datoms__GT_cache = (function datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = cljs.core.first.call(null,part).a;
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function touch(e){
if(cljs.core.truth_(e.touched)){
} else {
var temp__4388__auto___17942 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4388__auto___17942)){
var datoms_17943 = temp__4388__auto___17942;
e.touched = true;

e.cache = datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_17943);
} else {
}
}

return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){
var temp__4386__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4386__auto__)){
var datoms = temp__4386__auto__;
return cljs.core.reduce.call(null,((function (datoms,temp__4386__auto__){
return (function (p1__17944_SHARP_,p2__17945_SHARP_){
return cljs.core.conj.call(null,p1__17944_SHARP_,datascript.impl.entity.entity.call(null,db,p2__17945_SHARP_.e));
});})(datoms,temp__4386__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__9948__auto__ = (function iter__17954(s__17955){
return (new cljs.core.LazySeq(null,(function (){
var s__17955__$1 = s__17955;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__17955__$1);
if(temp__4388__auto__){
var s__17955__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17955__$2)){
var c__9946__auto__ = cljs.core.chunk_first.call(null,s__17955__$2);
var size__9947__auto__ = cljs.core.count.call(null,c__9946__auto__);
var b__17957 = cljs.core.chunk_buffer.call(null,size__9947__auto__);
if((function (){var i__17956 = (0);
while(true){
if((i__17956 < size__9947__auto__)){
var vec__17960 = cljs.core._nth.call(null,c__9946__auto__,i__17956);
var a = cljs.core.nth.call(null,vec__17960,(0),null);
var v = cljs.core.nth.call(null,vec__17960,(1),null);
cljs.core.chunk_append.call(null,b__17957,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__17962 = (i__17956 + (1));
i__17956 = G__17962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17957),iter__17954.call(null,cljs.core.chunk_rest.call(null,s__17955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17957),null);
}
} else {
var vec__17961 = cljs.core.first.call(null,s__17955__$2);
var a = cljs.core.nth.call(null,vec__17961,(0),null);
var v = cljs.core.nth.call(null,vec__17961,(1),null);
return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__17954.call(null,cljs.core.rest.call(null,s__17955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9948__auto__.call(null,e.cache);
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
})
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__17978 = null;
var G__17978__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__17978__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__17978 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17978__2.call(this,self__,k);
case 3:
return G__17978__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17978.cljs$core$IFn$_invoke$arity$2 = G__17978__2;
G__17978.cljs$core$IFn$_invoke$arity$3 = G__17978__3;
return G__17978;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args17963){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17963)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),cljs.core._lookup.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,attr,not_found){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return self__.eid;
} else {
var temp__4386__auto__ = datascript.core.reverse_ref.call(null,attr);
if(cljs.core.truth_(temp__4386__auto__)){
var attr__$1 = temp__4386__auto__;
return datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,not_found);
} else {
var or__9197__auto__ = self__.cache.call(null,attr);
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
if(cljs.core.truth_(self__.touched)){
return not_found;
} else {
var temp__4386__auto____$1 = cljs.core.not_empty.call(null,datascript.core._search.call(null,self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));
if(cljs.core.truth_(temp__4386__auto____$1)){
var datoms = temp__4386__auto____$1;
self__.cache = cljs.core.assoc.call(null,self__.cache,attr,datascript.impl.entity.entity_attr.call(null,self__.db,attr,datoms));

return self__.cache.call(null,attr);
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,self__.cache);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,self__.cache);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return ((o instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,self__.eid,o.eid));
});

datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__17979 = null;
var G__17979__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__17964 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__17965 = null;
var count__17966 = (0);
var i__17967 = (0);
while(true){
if((i__17967 < count__17966)){
var vec__17968 = cljs.core._nth.call(null,chunk__17965,i__17967);
var a = cljs.core.nth.call(null,vec__17968,(0),null);
var v = cljs.core.nth.call(null,vec__17968,(1),null);
f.call(null,v,a,this$);

var G__17980 = seq__17964;
var G__17981 = chunk__17965;
var G__17982 = count__17966;
var G__17983 = (i__17967 + (1));
seq__17964 = G__17980;
chunk__17965 = G__17981;
count__17966 = G__17982;
i__17967 = G__17983;
continue;
} else {
var temp__4388__auto__ = cljs.core.seq.call(null,seq__17964);
if(temp__4388__auto__){
var seq__17964__$1 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17964__$1)){
var c__9979__auto__ = cljs.core.chunk_first.call(null,seq__17964__$1);
var G__17984 = cljs.core.chunk_rest.call(null,seq__17964__$1);
var G__17985 = c__9979__auto__;
var G__17986 = cljs.core.count.call(null,c__9979__auto__);
var G__17987 = (0);
seq__17964 = G__17984;
chunk__17965 = G__17985;
count__17966 = G__17986;
i__17967 = G__17987;
continue;
} else {
var vec__17969 = cljs.core.first.call(null,seq__17964__$1);
var a = cljs.core.nth.call(null,vec__17969,(0),null);
var v = cljs.core.nth.call(null,vec__17969,(1),null);
f.call(null,v,a,this$);

var G__17988 = cljs.core.next.call(null,seq__17964__$1);
var G__17989 = null;
var G__17990 = (0);
var G__17991 = (0);
seq__17964 = G__17988;
chunk__17965 = G__17989;
count__17966 = G__17990;
i__17967 = G__17991;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__17979__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__17970 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__17971 = null;
var count__17972 = (0);
var i__17973 = (0);
while(true){
if((i__17973 < count__17972)){
var vec__17974 = cljs.core._nth.call(null,chunk__17971,i__17973);
var a = cljs.core.nth.call(null,vec__17974,(0),null);
var v = cljs.core.nth.call(null,vec__17974,(1),null);
f.call(use_as_this,v,a,this$);

var G__17992 = seq__17970;
var G__17993 = chunk__17971;
var G__17994 = count__17972;
var G__17995 = (i__17973 + (1));
seq__17970 = G__17992;
chunk__17971 = G__17993;
count__17972 = G__17994;
i__17973 = G__17995;
continue;
} else {
var temp__4388__auto__ = cljs.core.seq.call(null,seq__17970);
if(temp__4388__auto__){
var seq__17970__$1 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17970__$1)){
var c__9979__auto__ = cljs.core.chunk_first.call(null,seq__17970__$1);
var G__17996 = cljs.core.chunk_rest.call(null,seq__17970__$1);
var G__17997 = c__9979__auto__;
var G__17998 = cljs.core.count.call(null,c__9979__auto__);
var G__17999 = (0);
seq__17970 = G__17996;
chunk__17971 = G__17997;
count__17972 = G__17998;
i__17973 = G__17999;
continue;
} else {
var vec__17975 = cljs.core.first.call(null,seq__17970__$1);
var a = cljs.core.nth.call(null,vec__17975,(0),null);
var v = cljs.core.nth.call(null,vec__17975,(1),null);
f.call(use_as_this,v,a,this$);

var G__18000 = cljs.core.next.call(null,seq__17970__$1);
var G__18001 = null;
var G__18002 = (0);
var G__18003 = (0);
seq__17970 = G__18000;
chunk__17971 = G__18001;
count__17972 = G__18002;
i__17973 = G__18003;
continue;
}
} else {
return null;
}
}
break;
}
});
G__17979 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__17979__1.call(this,f);
case 2:
return G__17979__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17979.cljs$core$IFn$_invoke$arity$1 = G__17979__1;
G__17979.cljs$core$IFn$_invoke$arity$2 = G__17979__2;
return G__17979;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
var temp__4386__auto__ = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr);
if(cljs.core.truth_(temp__4386__auto__)){
var vec__17976 = temp__4386__auto__;
var _ = cljs.core.nth.call(null,vec__17976,(0),null);
var ns = cljs.core.nth.call(null,vec__17976,(1),null);
var name = cljs.core.nth.call(null,vec__17976,(2),null);
var attr__$1 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,null));
} else {
var G__17977 = cljs.core._lookup.call(null,this$,attr);
var G__17977__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__17977):G__17977);
return G__17977__$1;
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);
goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);
goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map?rel=1420461346880