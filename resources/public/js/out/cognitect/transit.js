// Compiled by ClojureScript 0.0-2411
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__18498_18502 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18499_18503 = null;
var count__18500_18504 = (0);
var i__18501_18505 = (0);
while(true){
if((i__18501_18505 < count__18500_18504)){
var k_18506 = cljs.core._nth.call(null,chunk__18499_18503,i__18501_18505);
var v_18507 = (b[k_18506]);
(a[k_18506] = v_18507);

var G__18508 = seq__18498_18502;
var G__18509 = chunk__18499_18503;
var G__18510 = count__18500_18504;
var G__18511 = (i__18501_18505 + (1));
seq__18498_18502 = G__18508;
chunk__18499_18503 = G__18509;
count__18500_18504 = G__18510;
i__18501_18505 = G__18511;
continue;
} else {
var temp__4388__auto___18512 = cljs.core.seq.call(null,seq__18498_18502);
if(temp__4388__auto___18512){
var seq__18498_18513__$1 = temp__4388__auto___18512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18498_18513__$1)){
var c__9979__auto___18514 = cljs.core.chunk_first.call(null,seq__18498_18513__$1);
var G__18515 = cljs.core.chunk_rest.call(null,seq__18498_18513__$1);
var G__18516 = c__9979__auto___18514;
var G__18517 = cljs.core.count.call(null,c__9979__auto___18514);
var G__18518 = (0);
seq__18498_18502 = G__18515;
chunk__18499_18503 = G__18516;
count__18500_18504 = G__18517;
i__18501_18505 = G__18518;
continue;
} else {
var k_18519 = cljs.core.first.call(null,seq__18498_18513__$1);
var v_18520 = (b[k_18519]);
(a[k_18519] = v_18520);

var G__18521 = cljs.core.next.call(null,seq__18498_18513__$1);
var G__18522 = null;
var G__18523 = (0);
var G__18524 = (0);
seq__18498_18502 = G__18521;
chunk__18499_18503 = G__18522;
count__18500_18504 = G__18523;
i__18501_18505 = G__18524;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18525 = (i + (2));
var G__18526 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18525;
ret = G__18526;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18527_18531 = cljs.core.seq.call(null,v);
var chunk__18528_18532 = null;
var count__18529_18533 = (0);
var i__18530_18534 = (0);
while(true){
if((i__18530_18534 < count__18529_18533)){
var x_18535 = cljs.core._nth.call(null,chunk__18528_18532,i__18530_18534);
ret.push(x_18535);

var G__18536 = seq__18527_18531;
var G__18537 = chunk__18528_18532;
var G__18538 = count__18529_18533;
var G__18539 = (i__18530_18534 + (1));
seq__18527_18531 = G__18536;
chunk__18528_18532 = G__18537;
count__18529_18533 = G__18538;
i__18530_18534 = G__18539;
continue;
} else {
var temp__4388__auto___18540 = cljs.core.seq.call(null,seq__18527_18531);
if(temp__4388__auto___18540){
var seq__18527_18541__$1 = temp__4388__auto___18540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18527_18541__$1)){
var c__9979__auto___18542 = cljs.core.chunk_first.call(null,seq__18527_18541__$1);
var G__18543 = cljs.core.chunk_rest.call(null,seq__18527_18541__$1);
var G__18544 = c__9979__auto___18542;
var G__18545 = cljs.core.count.call(null,c__9979__auto___18542);
var G__18546 = (0);
seq__18527_18531 = G__18543;
chunk__18528_18532 = G__18544;
count__18529_18533 = G__18545;
i__18530_18534 = G__18546;
continue;
} else {
var x_18547 = cljs.core.first.call(null,seq__18527_18541__$1);
ret.push(x_18547);

var G__18548 = cljs.core.next.call(null,seq__18527_18541__$1);
var G__18549 = null;
var G__18550 = (0);
var G__18551 = (0);
seq__18527_18531 = G__18548;
chunk__18528_18532 = G__18549;
count__18529_18533 = G__18550;
i__18530_18534 = G__18551;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18552_18556 = cljs.core.seq.call(null,v);
var chunk__18553_18557 = null;
var count__18554_18558 = (0);
var i__18555_18559 = (0);
while(true){
if((i__18555_18559 < count__18554_18558)){
var x_18560 = cljs.core._nth.call(null,chunk__18553_18557,i__18555_18559);
ret.push(x_18560);

var G__18561 = seq__18552_18556;
var G__18562 = chunk__18553_18557;
var G__18563 = count__18554_18558;
var G__18564 = (i__18555_18559 + (1));
seq__18552_18556 = G__18561;
chunk__18553_18557 = G__18562;
count__18554_18558 = G__18563;
i__18555_18559 = G__18564;
continue;
} else {
var temp__4388__auto___18565 = cljs.core.seq.call(null,seq__18552_18556);
if(temp__4388__auto___18565){
var seq__18552_18566__$1 = temp__4388__auto___18565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18552_18566__$1)){
var c__9979__auto___18567 = cljs.core.chunk_first.call(null,seq__18552_18566__$1);
var G__18568 = cljs.core.chunk_rest.call(null,seq__18552_18566__$1);
var G__18569 = c__9979__auto___18567;
var G__18570 = cljs.core.count.call(null,c__9979__auto___18567);
var G__18571 = (0);
seq__18552_18556 = G__18568;
chunk__18553_18557 = G__18569;
count__18554_18558 = G__18570;
i__18555_18559 = G__18571;
continue;
} else {
var x_18572 = cljs.core.first.call(null,seq__18552_18566__$1);
ret.push(x_18572);

var G__18573 = cljs.core.next.call(null,seq__18552_18566__$1);
var G__18574 = null;
var G__18575 = (0);
var G__18576 = (0);
seq__18552_18556 = G__18573;
chunk__18553_18557 = G__18574;
count__18554_18558 = G__18575;
i__18555_18559 = G__18576;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18577_18581 = cljs.core.seq.call(null,v);
var chunk__18578_18582 = null;
var count__18579_18583 = (0);
var i__18580_18584 = (0);
while(true){
if((i__18580_18584 < count__18579_18583)){
var x_18585 = cljs.core._nth.call(null,chunk__18578_18582,i__18580_18584);
ret.push(x_18585);

var G__18586 = seq__18577_18581;
var G__18587 = chunk__18578_18582;
var G__18588 = count__18579_18583;
var G__18589 = (i__18580_18584 + (1));
seq__18577_18581 = G__18586;
chunk__18578_18582 = G__18587;
count__18579_18583 = G__18588;
i__18580_18584 = G__18589;
continue;
} else {
var temp__4388__auto___18590 = cljs.core.seq.call(null,seq__18577_18581);
if(temp__4388__auto___18590){
var seq__18577_18591__$1 = temp__4388__auto___18590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18577_18591__$1)){
var c__9979__auto___18592 = cljs.core.chunk_first.call(null,seq__18577_18591__$1);
var G__18593 = cljs.core.chunk_rest.call(null,seq__18577_18591__$1);
var G__18594 = c__9979__auto___18592;
var G__18595 = cljs.core.count.call(null,c__9979__auto___18592);
var G__18596 = (0);
seq__18577_18581 = G__18593;
chunk__18578_18582 = G__18594;
count__18579_18583 = G__18595;
i__18580_18584 = G__18596;
continue;
} else {
var x_18597 = cljs.core.first.call(null,seq__18577_18591__$1);
ret.push(x_18597);

var G__18598 = cljs.core.next.call(null,seq__18577_18591__$1);
var G__18599 = null;
var G__18600 = (0);
var G__18601 = (0);
seq__18577_18581 = G__18598;
chunk__18578_18582 = G__18599;
count__18579_18583 = G__18600;
i__18580_18584 = G__18601;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18611 = cljs.core.clone.call(null,handlers);
x18611.forEach = ((function (x18611,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18612 = cljs.core.seq.call(null,coll);
var chunk__18613 = null;
var count__18614 = (0);
var i__18615 = (0);
while(true){
if((i__18615 < count__18614)){
var vec__18616 = cljs.core._nth.call(null,chunk__18613,i__18615);
var k = cljs.core.nth.call(null,vec__18616,(0),null);
var v = cljs.core.nth.call(null,vec__18616,(1),null);
f.call(null,v,k);

var G__18618 = seq__18612;
var G__18619 = chunk__18613;
var G__18620 = count__18614;
var G__18621 = (i__18615 + (1));
seq__18612 = G__18618;
chunk__18613 = G__18619;
count__18614 = G__18620;
i__18615 = G__18621;
continue;
} else {
var temp__4388__auto__ = cljs.core.seq.call(null,seq__18612);
if(temp__4388__auto__){
var seq__18612__$1 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18612__$1)){
var c__9979__auto__ = cljs.core.chunk_first.call(null,seq__18612__$1);
var G__18622 = cljs.core.chunk_rest.call(null,seq__18612__$1);
var G__18623 = c__9979__auto__;
var G__18624 = cljs.core.count.call(null,c__9979__auto__);
var G__18625 = (0);
seq__18612 = G__18622;
chunk__18613 = G__18623;
count__18614 = G__18624;
i__18615 = G__18625;
continue;
} else {
var vec__18617 = cljs.core.first.call(null,seq__18612__$1);
var k = cljs.core.nth.call(null,vec__18617,(0),null);
var v = cljs.core.nth.call(null,vec__18617,(1),null);
f.call(null,v,k);

var G__18626 = cljs.core.next.call(null,seq__18612__$1);
var G__18627 = null;
var G__18628 = (0);
var G__18629 = (0);
seq__18612 = G__18626;
chunk__18613 = G__18627;
count__18614 = G__18628;
i__18615 = G__18629;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18611,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18611;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18610 = obj;
G__18610.push(kfn.call(null,k),vfn.call(null,v));

return G__18610;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t18633 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t18633 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta18634){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta18634 = meta18634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t18633.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t18633.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t18633.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t18633.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t18633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18635){
var self__ = this;
var _18635__$1 = this;
return self__.meta18634;
});

cognitect.transit.t18633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18635,meta18634__$1){
var self__ = this;
var _18635__$1 = this;
return (new cognitect.transit.t18633(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta18634__$1));
});

cognitect.transit.t18633.cljs$lang$type = true;

cognitect.transit.t18633.cljs$lang$ctorStr = "cognitect.transit/t18633";

cognitect.transit.t18633.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cognitect.transit/t18633");
});

cognitect.transit.__GT_t18633 = (function __GT_t18633(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta18634){
return (new cognitect.transit.t18633(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta18634));
});

}

return (new cognitect.transit.t18633(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),254,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1420461349873