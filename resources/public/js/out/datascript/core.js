// Compiled by ClojureScript 0.0-2411
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.array');
goog.require('datascript.btset');
goog.require('datascript.btset');
datascript.core.tx0 = (536870912);

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.Datom.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9795__auto__,k__9796__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return cljs.core._lookup.call(null,this__9795__auto____$1,k__9796__auto__,null);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9797__auto__,k18076,else__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
var G__18078 = (((k18076 instanceof cljs.core.Keyword))?k18076.fqn:null);
switch (G__18078) {
case "added":
return self__.added;

break;
case "tx":
return self__.tx;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
case "e":
return self__.e;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18076,else__9798__auto__);

}
});

datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9809__auto__,writer__9810__auto__,opts__9811__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
var pr_pair__9812__auto__ = ((function (this__9809__auto____$1){
return (function (keyval__9813__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,cljs.core.pr_writer,""," ","",opts__9811__auto__,keyval__9813__auto__);
});})(this__9809__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,pr_pair__9812__auto__,"#datascript.core.Datom{",", ","}",opts__9811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});

datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
return self__.__meta;
});

datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9789__auto__){
var self__ = this;
var this__9789__auto____$1 = this;
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9799__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9790__auto__){
var self__ = this;
var this__9790__auto____$1 = this;
var h__9613__auto__ = self__.__hash;
if(!((h__9613__auto__ == null))){
return h__9613__auto__;
} else {
var h__9613__auto____$1 = cljs.core.hash_imap.call(null,this__9790__auto____$1);
self__.__hash = h__9613__auto____$1;

return h__9613__auto____$1;
}
});

datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9791__auto__,other__9792__auto__){
var self__ = this;
var this__9791__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9185__auto__ = other__9792__auto__;
if(cljs.core.truth_(and__9185__auto__)){
return ((this__9791__auto____$1.constructor === other__9792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__9791__auto____$1,other__9792__auto__));
} else {
return and__9185__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9804__auto__,k__9805__auto__){
var self__ = this;
var this__9804__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__9805__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9804__auto____$1),self__.__meta),k__9805__auto__);
} else {
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9805__auto__)),null));
}
});

datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9802__auto__,k__9803__auto__,G__18075){
var self__ = this;
var this__9802__auto____$1 = this;
var pred__18079 = cljs.core.keyword_identical_QMARK_;
var expr__18080 = k__9803__auto__;
if(cljs.core.truth_(pred__18079.call(null,new cljs.core.Keyword(null,"e","e",1381269198),expr__18080))){
return (new datascript.core.Datom(G__18075,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18079.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__18080))){
return (new datascript.core.Datom(self__.e,G__18075,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18079.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__18080))){
return (new datascript.core.Datom(self__.e,self__.a,G__18075,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18079.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),expr__18080))){
return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__18075,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18079.call(null,new cljs.core.Keyword(null,"added","added",2057651688),expr__18080))){
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__18075,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9803__auto__,G__18075),null));
}
}
}
}
}
});

datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9807__auto__){
var self__ = this;
var this__9807__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});

datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9794__auto__,G__18075){
var self__ = this;
var this__9794__auto____$1 = this;
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__18075,self__.__extmap,self__.__hash));
});

datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9800__auto__,entry__9801__auto__){
var self__ = this;
var this__9800__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9801__auto__)){
return cljs.core._assoc.call(null,this__9800__auto____$1,cljs.core._nth.call(null,entry__9801__auto__,(0)),cljs.core._nth.call(null,entry__9801__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9800__auto____$1,entry__9801__auto__);
}
});

datascript.core.Datom.cljs$lang$type = true;

datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__9829__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/Datom");
});

datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__9829__auto__,writer__9830__auto__){
return cljs.core._write.call(null,writer__9830__auto__,"datascript.core/Datom");
});

datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){
return (new datascript.core.Datom(e,a,v,tx,added));
});

datascript.core.map__GT_Datom = (function map__GT_Datom(G__18077){
return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__18077),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__18077),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__18077),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__18077),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__18077),null,cljs.core.dissoc.call(null,G__18077,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688))));
});

datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;

datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var d__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});

datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;

datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var d__$1 = this;
return (cljs.core._EQ_.call(null,d__$1.e,o.e)) && (cljs.core._EQ_.call(null,d__$1.a,o.a)) && (cljs.core._EQ_.call(null,d__$1.v,o.v));
});

datascript.core.Datom.prototype.cljs$core$IHash$ = true;

datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var d__$1 = this;
var or__9197__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return d__$1.__hash = cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,d__$1.e),cljs.core.hash.call(null,d__$1.a)),cljs.core.hash.call(null,d__$1.v));
}
});

datascript.core.ISearch = (function (){var obj18084 = {};
return obj18084;
})();

datascript.core._search = (function _search(data,pattern){
if((function (){var and__9185__auto__ = data;
if(and__9185__auto__){
return data.datascript$core$ISearch$_search$arity$2;
} else {
return and__9185__auto__;
}
})()){
return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else {
var x__9836__auto__ = (((data == null))?null:data);
return (function (){var or__9197__auto__ = (datascript.core._search[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (datascript.core._search["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});


datascript.core.IIndexAccess = (function (){var obj18086 = {};
return obj18086;
})();

datascript.core._datoms = (function _datoms(db,index,components){
if((function (){var and__9185__auto__ = db;
if(and__9185__auto__){
return db.datascript$core$IIndexAccess$_datoms$arity$3;
} else {
return and__9185__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__9836__auto__ = (((db == null))?null:db);
return (function (){var or__9197__auto__ = (datascript.core._datoms[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (datascript.core._datoms["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._seek_datoms = (function _seek_datoms(db,index,components){
if((function (){var and__9185__auto__ = db;
if(and__9185__auto__){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3;
} else {
return and__9185__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__9836__auto__ = (((db == null))?null:db);
return (function (){var or__9197__auto__ = (datascript.core._seek_datoms[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (datascript.core._seek_datoms["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._index_range = (function _index_range(db,attr,start,end){
if((function (){var and__9185__auto__ = db;
if(and__9185__auto__){
return db.datascript$core$IIndexAccess$_index_range$arity$4;
} else {
return and__9185__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__9836__auto__ = (((db == null))?null:db);
return (function (){var or__9197__auto__ = (datascript.core._index_range[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (datascript.core._index_range["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
})().call(null,db,attr,start,end);
}
});


datascript.core.IDB = (function (){var obj18088 = {};
return obj18088;
})();

datascript.core._schema = (function _schema(db){
if((function (){var and__9185__auto__ = db;
if(and__9185__auto__){
return db.datascript$core$IDB$_schema$arity$1;
} else {
return and__9185__auto__;
}
})()){
return db.datascript$core$IDB$_schema$arity$1(db);
} else {
var x__9836__auto__ = (((db == null))?null:db);
return (function (){var or__9197__auto__ = (datascript.core._schema[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (datascript.core._schema["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
})().call(null,db);
}
});

datascript.core._refs = (function _refs(db){
if((function (){var and__9185__auto__ = db;
if(and__9185__auto__){
return db.datascript$core$IDB$_refs$arity$1;
} else {
return and__9185__auto__;
}
})()){
return db.datascript$core$IDB$_refs$arity$1(db);
} else {
var x__9836__auto__ = (((db == null))?null:db);
return (function (){var or__9197__auto__ = (datascript.core._refs[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (datascript.core._refs["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-refs",db);
}
}
})().call(null,db);
}
});

datascript.core.cmp = (function cmp(o1,o2){
if(cljs.core.truth_((function (){var and__9185__auto__ = o1;
if(cljs.core.truth_(and__9185__auto__)){
return o2;
} else {
return and__9185__auto__;
}
})())){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.core.cmp_num = (function cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__9185__auto__ = n1;
if(cljs.core.truth_(and__9185__auto__)){
return n2;
} else {
return and__9185__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.core.cmp_val = (function cmp_val(o1,o2){
if((cljs.core.some_QMARK_.call(null,o1)) && (cljs.core.some_QMARK_.call(null,o2))){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
} else {
return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){
var c__10691__auto__ = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__10691__auto__)){
var c__10691__auto____$1 = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__10691__auto____$1)){
var c__10691__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__10691__auto____$2)){
var c__10691__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__10691__auto____$3)){
return (0);
} else {
return c__10691__auto____$3;
}
} else {
return c__10691__auto____$2;
}
} else {
return c__10691__auto____$1;
}
} else {
return c__10691__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){
var c__10691__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__10691__auto__)){
var c__10691__auto____$1 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__10691__auto____$1)){
var c__10691__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__10691__auto____$2)){
var c__10691__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__10691__auto____$3)){
return (0);
} else {
return c__10691__auto____$3;
}
} else {
return c__10691__auto____$2;
}
} else {
return c__10691__auto____$1;
}
} else {
return c__10691__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){
var c__10691__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__10691__auto__)){
var c__10691__auto____$1 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__10691__auto____$1)){
var c__10691__auto____$2 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__10691__auto____$2)){
var c__10691__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__10691__auto____$3)){
return (0);
} else {
return c__10691__auto____$3;
}
} else {
return c__10691__auto____$2;
}
} else {
return c__10691__auto____$1;
}
} else {
return c__10691__auto__;
}
});
datascript.core.compare_keywords_quick = (function compare_keywords_quick(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__9185__auto__ = cljs.core.not.call(null,a.ns);
if(and__9185__auto__){
return b.ns;
} else {
return and__9185__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not.call(null,b.ns)){
return (1);
} else {
var nsc = goog.array.defaultCompare(a.ns,b.ns);
if((nsc === (0))){
return goog.array.defaultCompare(a.name,b.name);
} else {
return nsc;
}
}
} else {
return goog.array.defaultCompare(a.name,b.name);

}
}
}
});
datascript.core.cmp_attr_quick = (function cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return datascript.core.compare_keywords_quick.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.core.cmp_val_quick = (function cmp_val_quick(o1,o2){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
});
datascript.core.cmp_datoms_eavt_quick = (function cmp_datoms_eavt_quick(d1,d2){
var c__10691__auto__ = (d1.e - d2.e);
if(((0) === c__10691__auto__)){
var c__10691__auto____$1 = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__10691__auto____$1)){
var c__10691__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__10691__auto____$2)){
var c__10691__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__10691__auto____$3)){
return (0);
} else {
return c__10691__auto____$3;
}
} else {
return c__10691__auto____$2;
}
} else {
return c__10691__auto____$1;
}
} else {
return c__10691__auto__;
}
});
datascript.core.cmp_datoms_aevt_quick = (function cmp_datoms_aevt_quick(d1,d2){
var c__10691__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__10691__auto__)){
var c__10691__auto____$1 = (d1.e - d2.e);
if(((0) === c__10691__auto____$1)){
var c__10691__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__10691__auto____$2)){
var c__10691__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__10691__auto____$3)){
return (0);
} else {
return c__10691__auto____$3;
}
} else {
return c__10691__auto____$2;
}
} else {
return c__10691__auto____$1;
}
} else {
return c__10691__auto__;
}
});
datascript.core.cmp_datoms_avet_quick = (function cmp_datoms_avet_quick(d1,d2){
var c__10691__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__10691__auto__)){
var c__10691__auto____$1 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__10691__auto____$1)){
var c__10691__auto____$2 = (d1.e - d2.e);
if(((0) === c__10691__auto____$2)){
var c__10691__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__10691__auto____$3)){
return (0);
} else {
return c__10691__auto____$3;
}
} else {
return c__10691__auto____$2;
}
} else {
return c__10691__auto____$1;
}
} else {
return c__10691__auto__;
}
});
datascript.core.components__GT_pattern = (function components__GT_pattern(index,p__18089){
var vec__18092 = p__18089;
var c0 = cljs.core.nth.call(null,vec__18092,(0),null);
var c1 = cljs.core.nth.call(null,vec__18092,(1),null);
var c2 = cljs.core.nth.call(null,vec__18092,(2),null);
var c3 = cljs.core.nth.call(null,vec__18092,(3),null);
var G__18093 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__18093) {
case "avet":
return (new datascript.core.Datom(c2,c0,c1,c3,null));

break;
case "aevt":
return (new datascript.core.Datom(c1,c0,c2,c3,null));

break;
case "eavt":
return (new datascript.core.Datom(c0,c1,c2,c3,null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(index)].join('')));

}
});

/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} refs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,refs,__meta,__extmap){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.refs = refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.DB.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9795__auto__,k__9796__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return cljs.core._lookup.call(null,this__9795__auto____$1,k__9796__auto__,null);
});

datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9797__auto__,k18105,else__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
var G__18107 = (((k18105 instanceof cljs.core.Keyword))?k18105.fqn:null);
switch (G__18107) {
case "refs":
return self__.refs;

break;
case "max-tx":
return self__.max_tx;

break;
case "max-eid":
return self__.max_eid;

break;
case "avet":
return self__.avet;

break;
case "aevt":
return self__.aevt;

break;
case "eavt":
return self__.eavt;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18105,else__9798__auto__);

}
});

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9809__auto__,writer__9810__auto__,opts__9811__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
var pr_pair__9812__auto__ = ((function (this__9809__auto____$1){
return (function (keyval__9813__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,cljs.core.pr_writer,""," ","",opts__9811__auto__,keyval__9813__auto__);
});})(this__9809__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,pr_pair__9812__auto__,"#datascript.core.DB{",", ","}",opts__9811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
return self__.__meta;
});

datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9789__auto__){
var self__ = this;
var this__9789__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9799__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9790__auto__){
var self__ = this;
var this__9790__auto____$1 = this;
var h__9613__auto__ = self__.__hash;
if(!((h__9613__auto__ == null))){
return h__9613__auto__;
} else {
var h__9613__auto____$1 = cljs.core.hash_imap.call(null,this__9790__auto____$1);
self__.__hash = h__9613__auto____$1;

return h__9613__auto____$1;
}
});

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9791__auto__,other__9792__auto__){
var self__ = this;
var this__9791__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9185__auto__ = other__9792__auto__;
if(cljs.core.truth_(and__9185__auto__)){
return ((this__9791__auto____$1.constructor === other__9792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__9791__auto____$1,other__9792__auto__));
} else {
return and__9185__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9804__auto__,k__9805__auto__){
var self__ = this;
var this__9804__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"refs","refs",-1560051448),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__9805__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9804__auto____$1),self__.__meta),k__9805__auto__);
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9805__auto__)),null));
}
});

datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9802__auto__,k__9803__auto__,G__18104){
var self__ = this;
var this__9802__auto____$1 = this;
var pred__18108 = cljs.core.keyword_identical_QMARK_;
var expr__18109 = k__9803__auto__;
if(cljs.core.truth_(pred__18108.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__18109))){
return (new datascript.core.DB(G__18104,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18108.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__18109))){
return (new datascript.core.DB(self__.schema,G__18104,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18108.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__18109))){
return (new datascript.core.DB(self__.schema,self__.eavt,G__18104,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18108.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__18109))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__18104,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18108.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__18109))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__18104,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18108.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__18109))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__18104,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18108.call(null,new cljs.core.Keyword(null,"refs","refs",-1560051448),expr__18109))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__18104,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9803__auto__,G__18104),null));
}
}
}
}
}
}
}
});

datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9807__auto__){
var self__ = this;
var this__9807__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9794__auto__,G__18104){
var self__ = this;
var this__9794__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,G__18104,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9800__auto__,entry__9801__auto__){
var self__ = this;
var this__9800__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9801__auto__)){
return cljs.core._assoc.call(null,this__9800__auto____$1,cljs.core._nth.call(null,entry__9801__auto__,(0)),cljs.core._nth.call(null,entry__9801__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9800__auto____$1,entry__9801__auto__);
}
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.DB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (this$,index,cs){
var self__ = this;
var this$__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,this$__$1,index),datascript.core.components__GT_pattern.call(null,index,cs));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (this$,index,cs){
var self__ = this;
var this$__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,this$__$1,index),datascript.core.components__GT_pattern.call(null,index,cs),(new datascript.core.Datom(null,null,null,null,null)));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (_,attr,start,end){
var self__ = this;
var ___$1 = this;
return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,attr,start,null,null)),(new datascript.core.Datom(null,attr,end,null,null)));
});

datascript.core.DB.prototype.datascript$core$IDB$ = true;

datascript.core.DB.prototype.datascript$core$IDB$_schema$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schema;
});

datascript.core.DB.prototype.datascript$core$IDB$_refs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.refs;
});

datascript.core.DB.prototype.datascript$core$ISearch$ = true;

datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__18111){
var self__ = this;
var vec__18112 = p__18111;
var e = cljs.core.nth.call(null,vec__18112,(0),null);
var a = cljs.core.nth.call(null,vec__18112,(1),null);
var v = cljs.core.nth.call(null,vec__18112,(2),null);
var tx = cljs.core.nth.call(null,vec__18112,(3),null);
var ___$1 = this;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18095_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__18095_SHARP_.tx);
});})(___$1,vec__18112,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18096_SHARP_){
return (cljs.core._EQ_.call(null,v,p1__18096_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__18096_SHARP_.tx));
});})(___$1,vec__18112,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18097_SHARP_){
return cljs.core._EQ_.call(null,v,p1__18097_SHARP_.v);
});})(___$1,vec__18112,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18098_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__18098_SHARP_.tx);
});})(___$1,vec__18112,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18099_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__18099_SHARP_.tx);
});})(___$1,vec__18112,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else {
return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18100_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__18100_SHARP_.tx);
});})(___$1,vec__18112,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18101_SHARP_){
return (cljs.core._EQ_.call(null,v,p1__18101_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__18101_SHARP_.tx));
});})(___$1,vec__18112,e,a,v,tx))
,self__.eavt);
} else {
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18102_SHARP_){
return cljs.core._EQ_.call(null,v,p1__18102_SHARP_.v);
});})(___$1,vec__18112,e,a,v,tx))
,self__.eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__18112,e,a,v,tx){
return (function (p1__18103_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__18103_SHARP_.tx);
});})(___$1,vec__18112,e,a,v,tx))
,self__.eavt);
} else {
return self__.eavt;
}
}
}
}
});

datascript.core.DB.cljs$lang$type = true;

datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__9829__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/DB");
});

datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__9829__auto__,writer__9830__auto__){
return cljs.core._write.call(null,writer__9830__auto__,"datascript.core/DB");
});

datascript.core.__GT_DB = (function __GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,refs){
return (new datascript.core.DB(schema,eavt,aevt,avet,max_eid,max_tx,refs));
});

datascript.core.map__GT_DB = (function map__GT_DB(G__18106){
return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__18106),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__18106),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__18106),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__18106),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__18106),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__18106),new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(G__18106),null,cljs.core.dissoc.call(null,G__18106,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"refs","refs",-1560051448))));
});


/**
* @constructor
* @param {*} unfiltered_db
* @param {*} pred
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.FilteredDB = (function (unfiltered_db,pred,__meta,__extmap){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.FilteredDB.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9795__auto__,k__9796__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return cljs.core._lookup.call(null,this__9795__auto____$1,k__9796__auto__,null);
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9797__auto__,k18115,else__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
var G__18117 = (((k18115 instanceof cljs.core.Keyword))?k18115.fqn:null);
switch (G__18117) {
case "pred":
return self__.pred;

break;
case "unfiltered-db":
return self__.unfiltered_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18115,else__9798__auto__);

}
});

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9809__auto__,writer__9810__auto__,opts__9811__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
var pr_pair__9812__auto__ = ((function (this__9809__auto____$1){
return (function (keyval__9813__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,cljs.core.pr_writer,""," ","",opts__9811__auto__,keyval__9813__auto__);
});})(this__9809__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,pr_pair__9812__auto__,"#datascript.core.FilteredDB{",", ","}",opts__9811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
return self__.__meta;
});

datascript.core.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9789__auto__){
var self__ = this;
var this__9789__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9799__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9790__auto__){
var self__ = this;
var this__9790__auto____$1 = this;
var h__9613__auto__ = self__.__hash;
if(!((h__9613__auto__ == null))){
return h__9613__auto__;
} else {
var h__9613__auto____$1 = cljs.core.hash_imap.call(null,this__9790__auto____$1);
self__.__hash = h__9613__auto____$1;

return h__9613__auto____$1;
}
});

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9791__auto__,other__9792__auto__){
var self__ = this;
var this__9791__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9185__auto__ = other__9792__auto__;
if(cljs.core.truth_(and__9185__auto__)){
return ((this__9791__auto____$1.constructor === other__9792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__9791__auto____$1,other__9792__auto__));
} else {
return and__9185__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9804__auto__,k__9805__auto__){
var self__ = this;
var this__9804__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__9805__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9804__auto____$1),self__.__meta),k__9805__auto__);
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9805__auto__)),null));
}
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9802__auto__,k__9803__auto__,G__18114){
var self__ = this;
var this__9802__auto____$1 = this;
var pred__18118 = cljs.core.keyword_identical_QMARK_;
var expr__18119 = k__9803__auto__;
if(cljs.core.truth_(pred__18118.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__18119))){
return (new datascript.core.FilteredDB(G__18114,self__.pred,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18118.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__18119))){
return (new datascript.core.FilteredDB(self__.unfiltered_db,G__18114,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9803__auto__,G__18114),null));
}
}
});

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9807__auto__){
var self__ = this;
var this__9807__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9794__auto__,G__18114){
var self__ = this;
var this__9794__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,G__18114,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9800__auto__,entry__9801__auto__){
var self__ = this;
var this__9800__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9801__auto__)){
return cljs.core._assoc.call(null,this__9800__auto____$1,cljs.core._nth.call(null,entry__9801__auto__,(0)),cljs.core._nth.call(null,entry__9801__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9800__auto____$1,entry__9801__auto__);
}
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (_,index,cs){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._datoms.call(null,self__.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (_,index,cs){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._seek_datoms.call(null,self__.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (_,attr,start,end){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._index_range.call(null,self__.unfiltered_db,attr,start,end));
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IDB$_schema$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.core._schema.call(null,self__.unfiltered_db);
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$_refs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.core._refs.call(null,self__.unfiltered_db);
});

datascript.core.FilteredDB.prototype.datascript$core$ISearch$ = true;

datascript.core.FilteredDB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,pattern){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._search.call(null,self__.unfiltered_db,pattern));
});

datascript.core.FilteredDB.cljs$lang$type = true;

datascript.core.FilteredDB.cljs$lang$ctorPrSeq = (function (this__9829__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/FilteredDB");
});

datascript.core.FilteredDB.cljs$lang$ctorPrWriter = (function (this__9829__auto__,writer__9830__auto__){
return cljs.core._write.call(null,writer__9830__auto__,"datascript.core/FilteredDB");
});

datascript.core.__GT_FilteredDB = (function __GT_FilteredDB(unfiltered_db,pred){
return (new datascript.core.FilteredDB(unfiltered_db,pred));
});

datascript.core.map__GT_FilteredDB = (function map__GT_FilteredDB(G__18116){
return (new datascript.core.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__18116),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__18116),null,cljs.core.dissoc.call(null,G__18116,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397))));
});

datascript.core._equiv_index = (function _equiv_index(x,y){
var and__9185__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y));
if(and__9185__auto__){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__18122 = cljs.core.next.call(null,xs);
var G__18123 = cljs.core.next.call(null,ys);
xs = G__18122;
ys = G__18123;
continue;
} else {
return false;

}
}
break;
}
} else {
return and__9185__auto__;
}
});
datascript.core._hash_db = (function _hash_db(db){
var or__9197__auto__ = db.__hash;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return db.__hash = cljs.core.hash_coll.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}
});
datascript.core._equiv_db = (function _equiv_db(this$,other){
return (((other instanceof datascript.core.DB)) || ((other instanceof datascript.core.FilteredDB))) && (cljs.core._EQ_.call(null,datascript.core._schema.call(null,this$),datascript.core._schema.call(null,other))) && (datascript.core._equiv_index.call(null,datascript.core._datoms.call(null,this$,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.core._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY)));
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return datascript.core._equiv_db.call(null,this$__$1,other);
});

datascript.core.DB.prototype.cljs$core$IHash$ = true;

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return datascript.core._hash_db.call(null,this$__$1);
});
datascript.core.FilteredDB.prototype.cljs$core$IEquiv$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return datascript.core._equiv_db.call(null,this$__$1,other);
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return datascript.core._hash_db.call(null,this$__$1);
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} tx_meta
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9795__auto__,k__9796__auto__){
var self__ = this;
var this__9795__auto____$1 = this;
return cljs.core._lookup.call(null,this__9795__auto____$1,k__9796__auto__,null);
});

datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9797__auto__,k18125,else__9798__auto__){
var self__ = this;
var this__9797__auto____$1 = this;
var G__18127 = (((k18125 instanceof cljs.core.Keyword))?k18125.fqn:null);
switch (G__18127) {
case "tx-meta":
return self__.tx_meta;

break;
case "tempids":
return self__.tempids;

break;
case "tx-data":
return self__.tx_data;

break;
case "db-after":
return self__.db_after;

break;
case "db-before":
return self__.db_before;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18125,else__9798__auto__);

}
});

datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9809__auto__,writer__9810__auto__,opts__9811__auto__){
var self__ = this;
var this__9809__auto____$1 = this;
var pr_pair__9812__auto__ = ((function (this__9809__auto____$1){
return (function (keyval__9813__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,cljs.core.pr_writer,""," ","",opts__9811__auto__,keyval__9813__auto__);
});})(this__9809__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9810__auto__,pr_pair__9812__auto__,"#datascript.core.TxReport{",", ","}",opts__9811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9793__auto__){
var self__ = this;
var this__9793__auto____$1 = this;
return self__.__meta;
});

datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9789__auto__){
var self__ = this;
var this__9789__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9799__auto__){
var self__ = this;
var this__9799__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9790__auto__){
var self__ = this;
var this__9790__auto____$1 = this;
var h__9613__auto__ = self__.__hash;
if(!((h__9613__auto__ == null))){
return h__9613__auto__;
} else {
var h__9613__auto____$1 = cljs.core.hash_imap.call(null,this__9790__auto____$1);
self__.__hash = h__9613__auto____$1;

return h__9613__auto____$1;
}
});

datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__9791__auto__,other__9792__auto__){
var self__ = this;
var this__9791__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9185__auto__ = other__9792__auto__;
if(cljs.core.truth_(and__9185__auto__)){
return ((this__9791__auto____$1.constructor === other__9792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__9791__auto____$1,other__9792__auto__));
} else {
return and__9185__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9804__auto__,k__9805__auto__){
var self__ = this;
var this__9804__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__9805__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9804__auto____$1),self__.__meta),k__9805__auto__);
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9805__auto__)),null));
}
});

datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9802__auto__,k__9803__auto__,G__18124){
var self__ = this;
var this__9802__auto____$1 = this;
var pred__18128 = cljs.core.keyword_identical_QMARK_;
var expr__18129 = k__9803__auto__;
if(cljs.core.truth_(pred__18128.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__18129))){
return (new datascript.core.TxReport(G__18124,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18128.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__18129))){
return (new datascript.core.TxReport(self__.db_before,G__18124,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18128.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__18129))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__18124,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18128.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__18129))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__18124,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18128.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__18129))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__18124,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9803__auto__,G__18124),null));
}
}
}
}
}
});

datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9807__auto__){
var self__ = this;
var this__9807__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9794__auto__,G__18124){
var self__ = this;
var this__9794__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__18124,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9800__auto__,entry__9801__auto__){
var self__ = this;
var this__9800__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9801__auto__)){
return cljs.core._assoc.call(null,this__9800__auto____$1,cljs.core._nth.call(null,entry__9801__auto__,(0)),cljs.core._nth.call(null,entry__9801__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9800__auto____$1,entry__9801__auto__);
}
});

datascript.core.TxReport.cljs$lang$type = true;

datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__9829__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/TxReport");
});

datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__9829__auto__,writer__9830__auto__){
return cljs.core._write.call(null,writer__9830__auto__,"datascript.core/TxReport");
});

datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids,tx_meta));
});

datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__18126){
return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__18126),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__18126),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__18126),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__18126),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__18126),null,cljs.core.dissoc.call(null,G__18126,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194))));
});

datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,datascript.core._schema.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){
return cljs.core.contains_QMARK_.call(null,datascript.core._refs.call(null,db),attr);
});
datascript.core.current_tx = (function current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){
var G__18133 = db;
var G__18133__$1 = ((((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.core.tx0)))?cljs.core.assoc.call(null,G__18133,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__18133);
return G__18133__$1;
});
datascript.core.allocate_eid = (function() {
var allocate_eid = null;
var allocate_eid__2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
var allocate_eid__3 = (function (report,e,eid){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
allocate_eid = function(report,e,eid){
switch(arguments.length){
case 2:
return allocate_eid__2.call(this,report,e);
case 3:
return allocate_eid__3.call(this,report,e,eid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
allocate_eid.cljs$core$IFn$_invoke$arity$2 = allocate_eid__2;
allocate_eid.cljs$core$IFn$_invoke$arity$3 = allocate_eid__3;
return allocate_eid;
})()
;
datascript.core.with_datom = (function with_datom(db,datom){
if(cljs.core.truth_(datom.added)){
return datascript.core.advance_max_eid.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_avet_quick),datom.e);
} else {
var removing = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_avet_quick);
}
});
datascript.core.transact_report = (function transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.core.reverse_ref = (function reverse_ref(attr){
var name = cljs.core.name.call(null,attr);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,name,(1)));
} else {
return null;
}
});
datascript.core.explode = (function explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__9948__auto__ = ((function (eid){
return (function iter__18142(s__18143){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__18143__$1 = s__18143;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__18143__$1);
if(temp__4388__auto__){
var xs__4940__auto__ = temp__4388__auto__;
var vec__18149 = cljs.core.first.call(null,xs__4940__auto__);
var a = cljs.core.nth.call(null,vec__18149,(0),null);
var vs = cljs.core.nth.call(null,vec__18149,(1),null);
var reverse_a = datascript.core.reverse_ref.call(null,a);
var iterys__9944__auto__ = ((function (s__18143__$1,reverse_a,vec__18149,a,vs,xs__4940__auto__,temp__4388__auto__,eid){
return (function iter__18144(s__18145){
return (new cljs.core.LazySeq(null,((function (s__18143__$1,reverse_a,vec__18149,a,vs,xs__4940__auto__,temp__4388__auto__,eid){
return (function (){
var s__18145__$1 = s__18145;
while(true){
var temp__4388__auto____$1 = cljs.core.seq.call(null,s__18145__$1);
if(temp__4388__auto____$1){
var s__18145__$2 = temp__4388__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18145__$2)){
var c__9946__auto__ = cljs.core.chunk_first.call(null,s__18145__$2);
var size__9947__auto__ = cljs.core.count.call(null,c__9946__auto__);
var b__18147 = cljs.core.chunk_buffer.call(null,size__9947__auto__);
if((function (){var i__18146 = (0);
while(true){
if((i__18146 < size__9947__auto__)){
var v = cljs.core._nth.call(null,c__9946__auto__,i__18146);
cljs.core.chunk_append.call(null,b__18147,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)));

var G__18150 = (i__18146 + (1));
i__18146 = G__18150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18147),iter__18144.call(null,cljs.core.chunk_rest.call(null,s__18145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18147),null);
}
} else {
var v = cljs.core.first.call(null,s__18145__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)),iter__18144.call(null,cljs.core.rest.call(null,s__18145__$2)));
}
} else {
return null;
}
break;
}
});})(s__18143__$1,reverse_a,vec__18149,a,vs,xs__4940__auto__,temp__4388__auto__,eid))
,null,null));
});})(s__18143__$1,reverse_a,vec__18149,a,vs,xs__4940__auto__,temp__4388__auto__,eid))
;
var fs__9945__auto__ = cljs.core.seq.call(null,iterys__9944__auto__.call(null,((((vs instanceof Array) || (cljs.core.coll_QMARK_.call(null,vs))) && (!(cljs.core.map_QMARK_.call(null,vs))) && (datascript.core.multival_QMARK_.call(null,db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));
if(fs__9945__auto__){
return cljs.core.concat.call(null,fs__9945__auto__,iter__18142.call(null,cljs.core.rest.call(null,s__18143__$1)));
} else {
var G__18151 = cljs.core.rest.call(null,s__18143__$1);
s__18143__$1 = G__18151;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__9948__auto__.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__18152){
var vec__18154 = p__18152;
var _ = cljs.core.nth.call(null,vec__18154,(0),null);
var e = cljs.core.nth.call(null,vec__18154,(1),null);
var a = cljs.core.nth.call(null,vec__18154,(2),null);
var v = cljs.core.nth.call(null,vec__18154,(3),null);
var tx = datascript.core.current_tx.call(null,report);
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var datom = (new datascript.core.Datom(e,a,v,tx,true));
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)))){
return datascript.core.transact_report.call(null,report,datom);
} else {
return report;
}
} else {
var temp__4386__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4386__auto__)){
var old_datom = temp__4386__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v)){
return report;
} else {
return datascript.core.transact_report.call(null,datascript.core.transact_report.call(null,report,(new datascript.core.Datom(e,a,old_datom.v,tx,false))),datom);
}
} else {
return datascript.core.transact_report.call(null,report,datom);
}
}
});
datascript.core.transact_retract_datom = (function transact_retract_datom(report,d){
var tx = datascript.core.current_tx.call(null,report);
return datascript.core.transact_report.call(null,report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.core.tx_id_QMARK_ = (function tx_id_QMARK_(e){
return (cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx"));
});
datascript.core.transact_tx_data = (function transact_tx_data(report,p__18156){
while(true){
var vec__18161 = p__18156;
var entity = cljs.core.nth.call(null,vec__18161,(0),null);
var entities = cljs.core.nthnext.call(null,vec__18161,(1));
var es = vec__18161;
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.core.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
if(datascript.core.tx_id_QMARK_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity))){
var entity__$1 = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.core.current_tx.call(null,report));
var G__18165 = report;
var G__18166 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,entity__$1),entities);
report = G__18165;
p__18156 = G__18166;
continue;
} else {
if((new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity) == null)){
var eid = datascript.core.next_eid.call(null,db);
var entity__$1 = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);
var G__18167 = datascript.core.allocate_eid.call(null,report,eid);
var G__18168 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__18167;
p__18156 = G__18168;
continue;
} else {
var G__18169 = report;
var G__18170 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,entity),entities);
report = G__18169;
p__18156 = G__18170;
continue;

}
}
} else {
var vec__18162 = entity;
var op = cljs.core.nth.call(null,vec__18162,(0),null);
var e = cljs.core.nth.call(null,vec__18162,(1),null);
var a = cljs.core.nth.call(null,vec__18162,(2),null);
var v = cljs.core.nth.call(null,vec__18162,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__18163 = entity;
var _ = cljs.core.nth.call(null,vec__18163,(0),null);
var f = cljs.core.nth.call(null,vec__18163,(1),null);
var args = cljs.core.nthnext.call(null,vec__18163,(2));
var G__18171 = report;
var G__18172 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__18171;
p__18156 = G__18172;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))){
var vec__18164 = entity;
var _ = cljs.core.nth.call(null,vec__18164,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__18164,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__18164,(2),null);
var ov = cljs.core.nth.call(null,vec__18164,(3),null);
var nv = cljs.core.nth.call(null,vec__18164,(4),null);
var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a__$1], null));
if(datascript.core.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,p__18156,vec__18164,_,e__$1,a__$1,ov,nv,datoms,vec__18162,op,e,a,v,db,vec__18161,entity,entities,es){
return (function (p1__18155_SHARP_){
return cljs.core._EQ_.call(null,p1__18155_SHARP_.v,ov);
});})(report,p__18156,vec__18164,_,e__$1,a__$1,ov,nv,datoms,vec__18162,op,e,a,v,db,vec__18161,entity,entities,es))
,datoms))){
var G__18173 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__18174 = entities;
report = G__18173;
p__18156 = G__18174;
continue;
} else {
throw (new Error([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(e__$1),cljs.core.str(" "),cljs.core.str(a__$1),cljs.core.str(" "),cljs.core.str(cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms)),cljs.core.str("], expected "),cljs.core.str(ov)].join('')));
}
} else {
var v__$1 = cljs.core.first.call(null,datoms).v;
if(cljs.core._EQ_.call(null,v__$1,ov)){
var G__18175 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__18176 = entities;
report = G__18175;
p__18156 = G__18176;
continue;
} else {
throw (new Error([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(e__$1),cljs.core.str(" "),cljs.core.str(a__$1),cljs.core.str(" "),cljs.core.str(v__$1),cljs.core.str("], expected "),cljs.core.str(ov)].join('')));
}
}
} else {
if(datascript.core.tx_id_QMARK_.call(null,e)){
var G__18177 = report;
var G__18178 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.core.current_tx.call(null,report),a,v], null)], null),entities);
report = G__18177;
p__18156 = G__18178;
continue;
} else {
if((datascript.core.ref_QMARK_.call(null,db,a)) && (datascript.core.tx_id_QMARK_.call(null,v))){
var G__18179 = report;
var G__18180 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.core.current_tx.call(null,report)], null)], null),entities);
report = G__18179;
p__18156 = G__18180;
continue;
} else {
if((e < (0))){
var temp__4386__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));
if(cljs.core.truth_(temp__4386__auto__)){
var eid = temp__4386__auto__;
var G__18181 = report;
var G__18182 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__18181;
p__18156 = G__18182;
continue;
} else {
var G__18183 = datascript.core.allocate_eid.call(null,report,e,datascript.core.next_eid.call(null,db));
var G__18184 = es;
report = G__18183;
p__18156 = G__18184;
continue;
}
} else {
if((datascript.core.ref_QMARK_.call(null,db,a)) && ((v < (0)))){
var temp__4386__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));
if(cljs.core.truth_(temp__4386__auto__)){
var vid = temp__4386__auto__;
var G__18185 = report;
var G__18186 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__18185;
p__18156 = G__18186;
continue;
} else {
var G__18187 = datascript.core.allocate_eid.call(null,report,v,datascript.core.next_eid.call(null,db));
var G__18188 = es;
report = G__18187;
p__18156 = G__18188;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__18189 = datascript.core.transact_add.call(null,report,entity);
var G__18190 = entities;
report = G__18189;
p__18156 = G__18190;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var temp__4386__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));
if(cljs.core.truth_(temp__4386__auto__)){
var old_datom = temp__4386__auto__;
var G__18191 = datascript.core.transact_retract_datom.call(null,report,old_datom);
var G__18192 = entities;
report = G__18191;
p__18156 = G__18192;
continue;
} else {
var G__18193 = report;
var G__18194 = entities;
report = G__18193;
p__18156 = G__18194;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));
var G__18195 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,datoms);
var G__18196 = entities;
report = G__18195;
p__18156 = G__18196;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))){
var e_datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));
var v_datoms = cljs.core.mapcat.call(null,((function (report,p__18156,e_datoms,vec__18162,op,e,a,v,db,vec__18161,entity,entities,es){
return (function (a__$1){
return datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e], null));
});})(report,p__18156,e_datoms,vec__18162,op,e,a,v,db,vec__18161,entity,entities,es))
,datascript.core._refs.call(null,db));
var G__18197 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__18198 = entities;
report = G__18197;
p__18156 = G__18198;
continue;
} else {
return null;
}
}
}
}
}
}
}
}
}
}

}
}
break;
}
});

//# sourceMappingURL=core.js.map?rel=1420461348263