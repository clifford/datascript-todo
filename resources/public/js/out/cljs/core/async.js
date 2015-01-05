// Compiled by ClojureScript 0.0-2411
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t19962 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19962 = (function (f,fn_handler,meta19963){
this.f = f;
this.fn_handler = fn_handler;
this.meta19963 = meta19963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19964){
var self__ = this;
var _19964__$1 = this;
return self__.meta19963;
});

cljs.core.async.t19962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19964,meta19963__$1){
var self__ = this;
var _19964__$1 = this;
return (new cljs.core.async.t19962(self__.f,self__.fn_handler,meta19963__$1));
});

cljs.core.async.t19962.cljs$lang$type = true;

cljs.core.async.t19962.cljs$lang$ctorStr = "cljs.core.async/t19962";

cljs.core.async.t19962.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t19962");
});

cljs.core.async.__GT_t19962 = (function __GT_t19962(f__$1,fn_handler__$1,meta19963){
return (new cljs.core.async.t19962(f__$1,fn_handler__$1,meta19963));
});

}

return (new cljs.core.async.t19962(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__19966 = buff;
if(G__19966){
var bit__9873__auto__ = null;
if(cljs.core.truth_((function (){var or__9197__auto__ = bit__9873__auto__;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return G__19966.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19966.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19966);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19966);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19967 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19967);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19967,ret){
return (function (){
return fn1.call(null,val_19967);
});})(val_19967,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4386__auto__)){
var ret = temp__4386__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4386__auto__)){
var retb = temp__4386__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4386__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4386__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__10079__auto___19968 = n;
var x_19969 = (0);
while(true){
if((x_19969 < n__10079__auto___19968)){
(a[x_19969] = (0));

var G__19970 = (x_19969 + (1));
x_19969 = G__19970;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19971 = (i + (1));
i = G__19971;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19975 = (function (flag,alt_flag,meta19976){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19976 = meta19976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19977){
var self__ = this;
var _19977__$1 = this;
return self__.meta19976;
});})(flag))
;

cljs.core.async.t19975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19977,meta19976__$1){
var self__ = this;
var _19977__$1 = this;
return (new cljs.core.async.t19975(self__.flag,self__.alt_flag,meta19976__$1));
});})(flag))
;

cljs.core.async.t19975.cljs$lang$type = true;

cljs.core.async.t19975.cljs$lang$ctorStr = "cljs.core.async/t19975";

cljs.core.async.t19975.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t19975");
});})(flag))
;

cljs.core.async.__GT_t19975 = ((function (flag){
return (function __GT_t19975(flag__$1,alt_flag__$1,meta19976){
return (new cljs.core.async.t19975(flag__$1,alt_flag__$1,meta19976));
});})(flag))
;

}

return (new cljs.core.async.t19975(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19981 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19981 = (function (cb,flag,alt_handler,meta19982){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19982 = meta19982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19981.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19983){
var self__ = this;
var _19983__$1 = this;
return self__.meta19982;
});

cljs.core.async.t19981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19983,meta19982__$1){
var self__ = this;
var _19983__$1 = this;
return (new cljs.core.async.t19981(self__.cb,self__.flag,self__.alt_handler,meta19982__$1));
});

cljs.core.async.t19981.cljs$lang$type = true;

cljs.core.async.t19981.cljs$lang$ctorStr = "cljs.core.async/t19981";

cljs.core.async.t19981.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t19981");
});

cljs.core.async.__GT_t19981 = (function __GT_t19981(cb__$1,flag__$1,alt_handler__$1,meta19982){
return (new cljs.core.async.t19981(cb__$1,flag__$1,alt_handler__$1,meta19982));
});

}

return (new cljs.core.async.t19981(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19984_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19984_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19985_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19985_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9197__auto__ = wport;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19986 = (i + (1));
i = G__19986;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9197__auto__ = ret;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4388__auto__ = (function (){var and__9185__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9185__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9185__auto__;
}
})();
if(cljs.core.truth_(temp__4388__auto__)){
var got = temp__4388__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19987){
var map__19989 = p__19987;
var map__19989__$1 = ((cljs.core.seq_QMARK_.call(null,map__19989))?cljs.core.apply.call(null,cljs.core.hash_map,map__19989):map__19989);
var opts = map__19989__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19987 = null;
if (arguments.length > 1) {
  p__19987 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19987);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19990){
var ports = cljs.core.first(arglist__19990);
var p__19987 = cljs.core.rest(arglist__19990);
return alts_BANG___delegate(ports,p__19987);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__12975__auto___20085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___20085){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___20085){
return (function (state_20061){
var state_val_20062 = (state_20061[(1)]);
if((state_val_20062 === (7))){
var inst_20057 = (state_20061[(2)]);
var state_20061__$1 = state_20061;
var statearr_20063_20086 = state_20061__$1;
(statearr_20063_20086[(2)] = inst_20057);

(statearr_20063_20086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (1))){
var state_20061__$1 = state_20061;
var statearr_20064_20087 = state_20061__$1;
(statearr_20064_20087[(2)] = null);

(statearr_20064_20087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (4))){
var inst_20040 = (state_20061[(7)]);
var inst_20040__$1 = (state_20061[(2)]);
var inst_20041 = (inst_20040__$1 == null);
var state_20061__$1 = (function (){var statearr_20065 = state_20061;
(statearr_20065[(7)] = inst_20040__$1);

return statearr_20065;
})();
if(cljs.core.truth_(inst_20041)){
var statearr_20066_20088 = state_20061__$1;
(statearr_20066_20088[(1)] = (5));

} else {
var statearr_20067_20089 = state_20061__$1;
(statearr_20067_20089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (13))){
var state_20061__$1 = state_20061;
var statearr_20068_20090 = state_20061__$1;
(statearr_20068_20090[(2)] = null);

(statearr_20068_20090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (6))){
var inst_20040 = (state_20061[(7)]);
var state_20061__$1 = state_20061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20061__$1,(11),to,inst_20040);
} else {
if((state_val_20062 === (3))){
var inst_20059 = (state_20061[(2)]);
var state_20061__$1 = state_20061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20061__$1,inst_20059);
} else {
if((state_val_20062 === (12))){
var state_20061__$1 = state_20061;
var statearr_20069_20091 = state_20061__$1;
(statearr_20069_20091[(2)] = null);

(statearr_20069_20091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (2))){
var state_20061__$1 = state_20061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20061__$1,(4),from);
} else {
if((state_val_20062 === (11))){
var inst_20050 = (state_20061[(2)]);
var state_20061__$1 = state_20061;
if(cljs.core.truth_(inst_20050)){
var statearr_20070_20092 = state_20061__$1;
(statearr_20070_20092[(1)] = (12));

} else {
var statearr_20071_20093 = state_20061__$1;
(statearr_20071_20093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (9))){
var state_20061__$1 = state_20061;
var statearr_20072_20094 = state_20061__$1;
(statearr_20072_20094[(2)] = null);

(statearr_20072_20094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (5))){
var state_20061__$1 = state_20061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20073_20095 = state_20061__$1;
(statearr_20073_20095[(1)] = (8));

} else {
var statearr_20074_20096 = state_20061__$1;
(statearr_20074_20096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (14))){
var inst_20055 = (state_20061[(2)]);
var state_20061__$1 = state_20061;
var statearr_20075_20097 = state_20061__$1;
(statearr_20075_20097[(2)] = inst_20055);

(statearr_20075_20097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (10))){
var inst_20047 = (state_20061[(2)]);
var state_20061__$1 = state_20061;
var statearr_20076_20098 = state_20061__$1;
(statearr_20076_20098[(2)] = inst_20047);

(statearr_20076_20098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20062 === (8))){
var inst_20044 = cljs.core.async.close_BANG_.call(null,to);
var state_20061__$1 = state_20061;
var statearr_20077_20099 = state_20061__$1;
(statearr_20077_20099[(2)] = inst_20044);

(statearr_20077_20099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__12975__auto___20085))
;
return ((function (switch__12919__auto__,c__12975__auto___20085){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20081 = [null,null,null,null,null,null,null,null];
(statearr_20081[(0)] = state_machine__12920__auto__);

(statearr_20081[(1)] = (1));

return statearr_20081;
});
var state_machine__12920__auto____1 = (function (state_20061){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20082){if((e20082 instanceof Object)){
var ex__12923__auto__ = e20082;
var statearr_20083_20100 = state_20061;
(statearr_20083_20100[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20101 = state_20061;
state_20061 = G__20101;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20061){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___20085))
})();
var state__12977__auto__ = (function (){var statearr_20084 = f__12976__auto__.call(null);
(statearr_20084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___20085);

return statearr_20084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___20085))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20285){
var vec__20286 = p__20285;
var v = cljs.core.nth.call(null,vec__20286,(0),null);
var p = cljs.core.nth.call(null,vec__20286,(1),null);
var job = vec__20286;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12975__auto___20468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___20468,res,vec__20286,v,p,job,jobs,results){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___20468,res,vec__20286,v,p,job,jobs,results){
return (function (state_20291){
var state_val_20292 = (state_20291[(1)]);
if((state_val_20292 === (2))){
var inst_20288 = (state_20291[(2)]);
var inst_20289 = cljs.core.async.close_BANG_.call(null,res);
var state_20291__$1 = (function (){var statearr_20293 = state_20291;
(statearr_20293[(7)] = inst_20288);

return statearr_20293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20291__$1,inst_20289);
} else {
if((state_val_20292 === (1))){
var state_20291__$1 = state_20291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20291__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12975__auto___20468,res,vec__20286,v,p,job,jobs,results))
;
return ((function (switch__12919__auto__,c__12975__auto___20468,res,vec__20286,v,p,job,jobs,results){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20297 = [null,null,null,null,null,null,null,null];
(statearr_20297[(0)] = state_machine__12920__auto__);

(statearr_20297[(1)] = (1));

return statearr_20297;
});
var state_machine__12920__auto____1 = (function (state_20291){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20298){if((e20298 instanceof Object)){
var ex__12923__auto__ = e20298;
var statearr_20299_20469 = state_20291;
(statearr_20299_20469[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20470 = state_20291;
state_20291 = G__20470;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20291){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___20468,res,vec__20286,v,p,job,jobs,results))
})();
var state__12977__auto__ = (function (){var statearr_20300 = f__12976__auto__.call(null);
(statearr_20300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___20468);

return statearr_20300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___20468,res,vec__20286,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20301){
var vec__20302 = p__20301;
var v = cljs.core.nth.call(null,vec__20302,(0),null);
var p = cljs.core.nth.call(null,vec__20302,(1),null);
var job = vec__20302;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__10079__auto___20471 = n;
var __20472 = (0);
while(true){
if((__20472 < n__10079__auto___20471)){
var G__20303_20473 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20303_20473) {
case "async":
var c__12975__auto___20475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20472,c__12975__auto___20475,G__20303_20473,n__10079__auto___20471,jobs,results,process,async){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (__20472,c__12975__auto___20475,G__20303_20473,n__10079__auto___20471,jobs,results,process,async){
return (function (state_20316){
var state_val_20317 = (state_20316[(1)]);
if((state_val_20317 === (7))){
var inst_20312 = (state_20316[(2)]);
var state_20316__$1 = state_20316;
var statearr_20318_20476 = state_20316__$1;
(statearr_20318_20476[(2)] = inst_20312);

(statearr_20318_20476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (6))){
var state_20316__$1 = state_20316;
var statearr_20319_20477 = state_20316__$1;
(statearr_20319_20477[(2)] = null);

(statearr_20319_20477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (5))){
var state_20316__$1 = state_20316;
var statearr_20320_20478 = state_20316__$1;
(statearr_20320_20478[(2)] = null);

(statearr_20320_20478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (4))){
var inst_20306 = (state_20316[(2)]);
var inst_20307 = async.call(null,inst_20306);
var state_20316__$1 = state_20316;
if(cljs.core.truth_(inst_20307)){
var statearr_20321_20479 = state_20316__$1;
(statearr_20321_20479[(1)] = (5));

} else {
var statearr_20322_20480 = state_20316__$1;
(statearr_20322_20480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (3))){
var inst_20314 = (state_20316[(2)]);
var state_20316__$1 = state_20316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20316__$1,inst_20314);
} else {
if((state_val_20317 === (2))){
var state_20316__$1 = state_20316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20316__$1,(4),jobs);
} else {
if((state_val_20317 === (1))){
var state_20316__$1 = state_20316;
var statearr_20323_20481 = state_20316__$1;
(statearr_20323_20481[(2)] = null);

(statearr_20323_20481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20472,c__12975__auto___20475,G__20303_20473,n__10079__auto___20471,jobs,results,process,async))
;
return ((function (__20472,switch__12919__auto__,c__12975__auto___20475,G__20303_20473,n__10079__auto___20471,jobs,results,process,async){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20327 = [null,null,null,null,null,null,null];
(statearr_20327[(0)] = state_machine__12920__auto__);

(statearr_20327[(1)] = (1));

return statearr_20327;
});
var state_machine__12920__auto____1 = (function (state_20316){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20328){if((e20328 instanceof Object)){
var ex__12923__auto__ = e20328;
var statearr_20329_20482 = state_20316;
(statearr_20329_20482[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20483 = state_20316;
state_20316 = G__20483;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20316){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(__20472,switch__12919__auto__,c__12975__auto___20475,G__20303_20473,n__10079__auto___20471,jobs,results,process,async))
})();
var state__12977__auto__ = (function (){var statearr_20330 = f__12976__auto__.call(null);
(statearr_20330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___20475);

return statearr_20330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(__20472,c__12975__auto___20475,G__20303_20473,n__10079__auto___20471,jobs,results,process,async))
);


break;
case "compute":
var c__12975__auto___20484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20472,c__12975__auto___20484,G__20303_20473,n__10079__auto___20471,jobs,results,process,async){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (__20472,c__12975__auto___20484,G__20303_20473,n__10079__auto___20471,jobs,results,process,async){
return (function (state_20343){
var state_val_20344 = (state_20343[(1)]);
if((state_val_20344 === (7))){
var inst_20339 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
var statearr_20345_20485 = state_20343__$1;
(statearr_20345_20485[(2)] = inst_20339);

(statearr_20345_20485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (6))){
var state_20343__$1 = state_20343;
var statearr_20346_20486 = state_20343__$1;
(statearr_20346_20486[(2)] = null);

(statearr_20346_20486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (5))){
var state_20343__$1 = state_20343;
var statearr_20347_20487 = state_20343__$1;
(statearr_20347_20487[(2)] = null);

(statearr_20347_20487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (4))){
var inst_20333 = (state_20343[(2)]);
var inst_20334 = process.call(null,inst_20333);
var state_20343__$1 = state_20343;
if(cljs.core.truth_(inst_20334)){
var statearr_20348_20488 = state_20343__$1;
(statearr_20348_20488[(1)] = (5));

} else {
var statearr_20349_20489 = state_20343__$1;
(statearr_20349_20489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (3))){
var inst_20341 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20343__$1,inst_20341);
} else {
if((state_val_20344 === (2))){
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20343__$1,(4),jobs);
} else {
if((state_val_20344 === (1))){
var state_20343__$1 = state_20343;
var statearr_20350_20490 = state_20343__$1;
(statearr_20350_20490[(2)] = null);

(statearr_20350_20490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20472,c__12975__auto___20484,G__20303_20473,n__10079__auto___20471,jobs,results,process,async))
;
return ((function (__20472,switch__12919__auto__,c__12975__auto___20484,G__20303_20473,n__10079__auto___20471,jobs,results,process,async){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20354 = [null,null,null,null,null,null,null];
(statearr_20354[(0)] = state_machine__12920__auto__);

(statearr_20354[(1)] = (1));

return statearr_20354;
});
var state_machine__12920__auto____1 = (function (state_20343){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20355){if((e20355 instanceof Object)){
var ex__12923__auto__ = e20355;
var statearr_20356_20491 = state_20343;
(statearr_20356_20491[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20492 = state_20343;
state_20343 = G__20492;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20343){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(__20472,switch__12919__auto__,c__12975__auto___20484,G__20303_20473,n__10079__auto___20471,jobs,results,process,async))
})();
var state__12977__auto__ = (function (){var statearr_20357 = f__12976__auto__.call(null);
(statearr_20357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___20484);

return statearr_20357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(__20472,c__12975__auto___20484,G__20303_20473,n__10079__auto___20471,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20493 = (__20472 + (1));
__20472 = G__20493;
continue;
} else {
}
break;
}

var c__12975__auto___20494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___20494,jobs,results,process,async){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___20494,jobs,results,process,async){
return (function (state_20379){
var state_val_20380 = (state_20379[(1)]);
if((state_val_20380 === (9))){
var inst_20372 = (state_20379[(2)]);
var state_20379__$1 = (function (){var statearr_20381 = state_20379;
(statearr_20381[(7)] = inst_20372);

return statearr_20381;
})();
var statearr_20382_20495 = state_20379__$1;
(statearr_20382_20495[(2)] = null);

(statearr_20382_20495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20380 === (8))){
var inst_20365 = (state_20379[(8)]);
var inst_20370 = (state_20379[(2)]);
var state_20379__$1 = (function (){var statearr_20383 = state_20379;
(statearr_20383[(9)] = inst_20370);

return statearr_20383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20379__$1,(9),results,inst_20365);
} else {
if((state_val_20380 === (7))){
var inst_20375 = (state_20379[(2)]);
var state_20379__$1 = state_20379;
var statearr_20384_20496 = state_20379__$1;
(statearr_20384_20496[(2)] = inst_20375);

(statearr_20384_20496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20380 === (6))){
var inst_20365 = (state_20379[(8)]);
var inst_20360 = (state_20379[(10)]);
var inst_20365__$1 = cljs.core.async.chan.call(null,(1));
var inst_20366 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20367 = [inst_20360,inst_20365__$1];
var inst_20368 = (new cljs.core.PersistentVector(null,2,(5),inst_20366,inst_20367,null));
var state_20379__$1 = (function (){var statearr_20385 = state_20379;
(statearr_20385[(8)] = inst_20365__$1);

return statearr_20385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20379__$1,(8),jobs,inst_20368);
} else {
if((state_val_20380 === (5))){
var inst_20363 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20379__$1 = state_20379;
var statearr_20386_20497 = state_20379__$1;
(statearr_20386_20497[(2)] = inst_20363);

(statearr_20386_20497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20380 === (4))){
var inst_20360 = (state_20379[(10)]);
var inst_20360__$1 = (state_20379[(2)]);
var inst_20361 = (inst_20360__$1 == null);
var state_20379__$1 = (function (){var statearr_20387 = state_20379;
(statearr_20387[(10)] = inst_20360__$1);

return statearr_20387;
})();
if(cljs.core.truth_(inst_20361)){
var statearr_20388_20498 = state_20379__$1;
(statearr_20388_20498[(1)] = (5));

} else {
var statearr_20389_20499 = state_20379__$1;
(statearr_20389_20499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20380 === (3))){
var inst_20377 = (state_20379[(2)]);
var state_20379__$1 = state_20379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20379__$1,inst_20377);
} else {
if((state_val_20380 === (2))){
var state_20379__$1 = state_20379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20379__$1,(4),from);
} else {
if((state_val_20380 === (1))){
var state_20379__$1 = state_20379;
var statearr_20390_20500 = state_20379__$1;
(statearr_20390_20500[(2)] = null);

(statearr_20390_20500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__12975__auto___20494,jobs,results,process,async))
;
return ((function (switch__12919__auto__,c__12975__auto___20494,jobs,results,process,async){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20394[(0)] = state_machine__12920__auto__);

(statearr_20394[(1)] = (1));

return statearr_20394;
});
var state_machine__12920__auto____1 = (function (state_20379){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20395){if((e20395 instanceof Object)){
var ex__12923__auto__ = e20395;
var statearr_20396_20501 = state_20379;
(statearr_20396_20501[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20502 = state_20379;
state_20379 = G__20502;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20379){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___20494,jobs,results,process,async))
})();
var state__12977__auto__ = (function (){var statearr_20397 = f__12976__auto__.call(null);
(statearr_20397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___20494);

return statearr_20397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___20494,jobs,results,process,async))
);


var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__,jobs,results,process,async){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__,jobs,results,process,async){
return (function (state_20435){
var state_val_20436 = (state_20435[(1)]);
if((state_val_20436 === (7))){
var inst_20431 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20437_20503 = state_20435__$1;
(statearr_20437_20503[(2)] = inst_20431);

(statearr_20437_20503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (20))){
var state_20435__$1 = state_20435;
var statearr_20438_20504 = state_20435__$1;
(statearr_20438_20504[(2)] = null);

(statearr_20438_20504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (1))){
var state_20435__$1 = state_20435;
var statearr_20439_20505 = state_20435__$1;
(statearr_20439_20505[(2)] = null);

(statearr_20439_20505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (4))){
var inst_20400 = (state_20435[(7)]);
var inst_20400__$1 = (state_20435[(2)]);
var inst_20401 = (inst_20400__$1 == null);
var state_20435__$1 = (function (){var statearr_20440 = state_20435;
(statearr_20440[(7)] = inst_20400__$1);

return statearr_20440;
})();
if(cljs.core.truth_(inst_20401)){
var statearr_20441_20506 = state_20435__$1;
(statearr_20441_20506[(1)] = (5));

} else {
var statearr_20442_20507 = state_20435__$1;
(statearr_20442_20507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (15))){
var inst_20413 = (state_20435[(8)]);
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20435__$1,(18),to,inst_20413);
} else {
if((state_val_20436 === (21))){
var inst_20426 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20443_20508 = state_20435__$1;
(statearr_20443_20508[(2)] = inst_20426);

(statearr_20443_20508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (13))){
var inst_20428 = (state_20435[(2)]);
var state_20435__$1 = (function (){var statearr_20444 = state_20435;
(statearr_20444[(9)] = inst_20428);

return statearr_20444;
})();
var statearr_20445_20509 = state_20435__$1;
(statearr_20445_20509[(2)] = null);

(statearr_20445_20509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (6))){
var inst_20400 = (state_20435[(7)]);
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20435__$1,(11),inst_20400);
} else {
if((state_val_20436 === (17))){
var inst_20421 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
if(cljs.core.truth_(inst_20421)){
var statearr_20446_20510 = state_20435__$1;
(statearr_20446_20510[(1)] = (19));

} else {
var statearr_20447_20511 = state_20435__$1;
(statearr_20447_20511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (3))){
var inst_20433 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20435__$1,inst_20433);
} else {
if((state_val_20436 === (12))){
var inst_20410 = (state_20435[(10)]);
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20435__$1,(14),inst_20410);
} else {
if((state_val_20436 === (2))){
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20435__$1,(4),results);
} else {
if((state_val_20436 === (19))){
var state_20435__$1 = state_20435;
var statearr_20448_20512 = state_20435__$1;
(statearr_20448_20512[(2)] = null);

(statearr_20448_20512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (11))){
var inst_20410 = (state_20435[(2)]);
var state_20435__$1 = (function (){var statearr_20449 = state_20435;
(statearr_20449[(10)] = inst_20410);

return statearr_20449;
})();
var statearr_20450_20513 = state_20435__$1;
(statearr_20450_20513[(2)] = null);

(statearr_20450_20513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (9))){
var state_20435__$1 = state_20435;
var statearr_20451_20514 = state_20435__$1;
(statearr_20451_20514[(2)] = null);

(statearr_20451_20514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (5))){
var state_20435__$1 = state_20435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20452_20515 = state_20435__$1;
(statearr_20452_20515[(1)] = (8));

} else {
var statearr_20453_20516 = state_20435__$1;
(statearr_20453_20516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (14))){
var inst_20415 = (state_20435[(11)]);
var inst_20413 = (state_20435[(8)]);
var inst_20413__$1 = (state_20435[(2)]);
var inst_20414 = (inst_20413__$1 == null);
var inst_20415__$1 = cljs.core.not.call(null,inst_20414);
var state_20435__$1 = (function (){var statearr_20454 = state_20435;
(statearr_20454[(11)] = inst_20415__$1);

(statearr_20454[(8)] = inst_20413__$1);

return statearr_20454;
})();
if(inst_20415__$1){
var statearr_20455_20517 = state_20435__$1;
(statearr_20455_20517[(1)] = (15));

} else {
var statearr_20456_20518 = state_20435__$1;
(statearr_20456_20518[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (16))){
var inst_20415 = (state_20435[(11)]);
var state_20435__$1 = state_20435;
var statearr_20457_20519 = state_20435__$1;
(statearr_20457_20519[(2)] = inst_20415);

(statearr_20457_20519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (10))){
var inst_20407 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20458_20520 = state_20435__$1;
(statearr_20458_20520[(2)] = inst_20407);

(statearr_20458_20520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (18))){
var inst_20418 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20459_20521 = state_20435__$1;
(statearr_20459_20521[(2)] = inst_20418);

(statearr_20459_20521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (8))){
var inst_20404 = cljs.core.async.close_BANG_.call(null,to);
var state_20435__$1 = state_20435;
var statearr_20460_20522 = state_20435__$1;
(statearr_20460_20522[(2)] = inst_20404);

(statearr_20460_20522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__12975__auto__,jobs,results,process,async))
;
return ((function (switch__12919__auto__,c__12975__auto__,jobs,results,process,async){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20464 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20464[(0)] = state_machine__12920__auto__);

(statearr_20464[(1)] = (1));

return statearr_20464;
});
var state_machine__12920__auto____1 = (function (state_20435){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20465){if((e20465 instanceof Object)){
var ex__12923__auto__ = e20465;
var statearr_20466_20523 = state_20435;
(statearr_20466_20523[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20524 = state_20435;
state_20435 = G__20524;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20435){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__,jobs,results,process,async))
})();
var state__12977__auto__ = (function (){var statearr_20467 = f__12976__auto__.call(null);
(statearr_20467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_20467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__,jobs,results,process,async))
);

return c__12975__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12975__auto___20625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___20625,tc,fc){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___20625,tc,fc){
return (function (state_20600){
var state_val_20601 = (state_20600[(1)]);
if((state_val_20601 === (7))){
var inst_20596 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
var statearr_20602_20626 = state_20600__$1;
(statearr_20602_20626[(2)] = inst_20596);

(statearr_20602_20626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (1))){
var state_20600__$1 = state_20600;
var statearr_20603_20627 = state_20600__$1;
(statearr_20603_20627[(2)] = null);

(statearr_20603_20627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (4))){
var inst_20577 = (state_20600[(7)]);
var inst_20577__$1 = (state_20600[(2)]);
var inst_20578 = (inst_20577__$1 == null);
var state_20600__$1 = (function (){var statearr_20604 = state_20600;
(statearr_20604[(7)] = inst_20577__$1);

return statearr_20604;
})();
if(cljs.core.truth_(inst_20578)){
var statearr_20605_20628 = state_20600__$1;
(statearr_20605_20628[(1)] = (5));

} else {
var statearr_20606_20629 = state_20600__$1;
(statearr_20606_20629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (13))){
var state_20600__$1 = state_20600;
var statearr_20607_20630 = state_20600__$1;
(statearr_20607_20630[(2)] = null);

(statearr_20607_20630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (6))){
var inst_20577 = (state_20600[(7)]);
var inst_20583 = p.call(null,inst_20577);
var state_20600__$1 = state_20600;
if(cljs.core.truth_(inst_20583)){
var statearr_20608_20631 = state_20600__$1;
(statearr_20608_20631[(1)] = (9));

} else {
var statearr_20609_20632 = state_20600__$1;
(statearr_20609_20632[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (3))){
var inst_20598 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20600__$1,inst_20598);
} else {
if((state_val_20601 === (12))){
var state_20600__$1 = state_20600;
var statearr_20610_20633 = state_20600__$1;
(statearr_20610_20633[(2)] = null);

(statearr_20610_20633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (2))){
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20600__$1,(4),ch);
} else {
if((state_val_20601 === (11))){
var inst_20577 = (state_20600[(7)]);
var inst_20587 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20600__$1,(8),inst_20587,inst_20577);
} else {
if((state_val_20601 === (9))){
var state_20600__$1 = state_20600;
var statearr_20611_20634 = state_20600__$1;
(statearr_20611_20634[(2)] = tc);

(statearr_20611_20634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (5))){
var inst_20580 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20581 = cljs.core.async.close_BANG_.call(null,fc);
var state_20600__$1 = (function (){var statearr_20612 = state_20600;
(statearr_20612[(8)] = inst_20580);

return statearr_20612;
})();
var statearr_20613_20635 = state_20600__$1;
(statearr_20613_20635[(2)] = inst_20581);

(statearr_20613_20635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (14))){
var inst_20594 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
var statearr_20614_20636 = state_20600__$1;
(statearr_20614_20636[(2)] = inst_20594);

(statearr_20614_20636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (10))){
var state_20600__$1 = state_20600;
var statearr_20615_20637 = state_20600__$1;
(statearr_20615_20637[(2)] = fc);

(statearr_20615_20637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (8))){
var inst_20589 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
if(cljs.core.truth_(inst_20589)){
var statearr_20616_20638 = state_20600__$1;
(statearr_20616_20638[(1)] = (12));

} else {
var statearr_20617_20639 = state_20600__$1;
(statearr_20617_20639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__12975__auto___20625,tc,fc))
;
return ((function (switch__12919__auto__,c__12975__auto___20625,tc,fc){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20621 = [null,null,null,null,null,null,null,null,null];
(statearr_20621[(0)] = state_machine__12920__auto__);

(statearr_20621[(1)] = (1));

return statearr_20621;
});
var state_machine__12920__auto____1 = (function (state_20600){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20622){if((e20622 instanceof Object)){
var ex__12923__auto__ = e20622;
var statearr_20623_20640 = state_20600;
(statearr_20623_20640[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20641 = state_20600;
state_20600 = G__20641;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20600){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___20625,tc,fc))
})();
var state__12977__auto__ = (function (){var statearr_20624 = f__12976__auto__.call(null);
(statearr_20624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___20625);

return statearr_20624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___20625,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__){
return (function (state_20688){
var state_val_20689 = (state_20688[(1)]);
if((state_val_20689 === (7))){
var inst_20684 = (state_20688[(2)]);
var state_20688__$1 = state_20688;
var statearr_20690_20706 = state_20688__$1;
(statearr_20690_20706[(2)] = inst_20684);

(statearr_20690_20706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20689 === (6))){
var inst_20674 = (state_20688[(7)]);
var inst_20677 = (state_20688[(8)]);
var inst_20681 = f.call(null,inst_20674,inst_20677);
var inst_20674__$1 = inst_20681;
var state_20688__$1 = (function (){var statearr_20691 = state_20688;
(statearr_20691[(7)] = inst_20674__$1);

return statearr_20691;
})();
var statearr_20692_20707 = state_20688__$1;
(statearr_20692_20707[(2)] = null);

(statearr_20692_20707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20689 === (5))){
var inst_20674 = (state_20688[(7)]);
var state_20688__$1 = state_20688;
var statearr_20693_20708 = state_20688__$1;
(statearr_20693_20708[(2)] = inst_20674);

(statearr_20693_20708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20689 === (4))){
var inst_20677 = (state_20688[(8)]);
var inst_20677__$1 = (state_20688[(2)]);
var inst_20678 = (inst_20677__$1 == null);
var state_20688__$1 = (function (){var statearr_20694 = state_20688;
(statearr_20694[(8)] = inst_20677__$1);

return statearr_20694;
})();
if(cljs.core.truth_(inst_20678)){
var statearr_20695_20709 = state_20688__$1;
(statearr_20695_20709[(1)] = (5));

} else {
var statearr_20696_20710 = state_20688__$1;
(statearr_20696_20710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20689 === (3))){
var inst_20686 = (state_20688[(2)]);
var state_20688__$1 = state_20688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20688__$1,inst_20686);
} else {
if((state_val_20689 === (2))){
var state_20688__$1 = state_20688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20688__$1,(4),ch);
} else {
if((state_val_20689 === (1))){
var inst_20674 = init;
var state_20688__$1 = (function (){var statearr_20697 = state_20688;
(statearr_20697[(7)] = inst_20674);

return statearr_20697;
})();
var statearr_20698_20711 = state_20688__$1;
(statearr_20698_20711[(2)] = null);

(statearr_20698_20711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12975__auto__))
;
return ((function (switch__12919__auto__,c__12975__auto__){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20702 = [null,null,null,null,null,null,null,null,null];
(statearr_20702[(0)] = state_machine__12920__auto__);

(statearr_20702[(1)] = (1));

return statearr_20702;
});
var state_machine__12920__auto____1 = (function (state_20688){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20703){if((e20703 instanceof Object)){
var ex__12923__auto__ = e20703;
var statearr_20704_20712 = state_20688;
(statearr_20704_20712[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20713 = state_20688;
state_20688 = G__20713;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20688){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__))
})();
var state__12977__auto__ = (function (){var statearr_20705 = f__12976__auto__.call(null);
(statearr_20705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_20705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__))
);

return c__12975__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__){
return (function (state_20787){
var state_val_20788 = (state_20787[(1)]);
if((state_val_20788 === (7))){
var inst_20769 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20789_20812 = state_20787__$1;
(statearr_20789_20812[(2)] = inst_20769);

(statearr_20789_20812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (1))){
var inst_20763 = cljs.core.seq.call(null,coll);
var inst_20764 = inst_20763;
var state_20787__$1 = (function (){var statearr_20790 = state_20787;
(statearr_20790[(7)] = inst_20764);

return statearr_20790;
})();
var statearr_20791_20813 = state_20787__$1;
(statearr_20791_20813[(2)] = null);

(statearr_20791_20813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (4))){
var inst_20764 = (state_20787[(7)]);
var inst_20767 = cljs.core.first.call(null,inst_20764);
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20787__$1,(7),ch,inst_20767);
} else {
if((state_val_20788 === (13))){
var inst_20781 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20792_20814 = state_20787__$1;
(statearr_20792_20814[(2)] = inst_20781);

(statearr_20792_20814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (6))){
var inst_20772 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
if(cljs.core.truth_(inst_20772)){
var statearr_20793_20815 = state_20787__$1;
(statearr_20793_20815[(1)] = (8));

} else {
var statearr_20794_20816 = state_20787__$1;
(statearr_20794_20816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (3))){
var inst_20785 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20787__$1,inst_20785);
} else {
if((state_val_20788 === (12))){
var state_20787__$1 = state_20787;
var statearr_20795_20817 = state_20787__$1;
(statearr_20795_20817[(2)] = null);

(statearr_20795_20817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (2))){
var inst_20764 = (state_20787[(7)]);
var state_20787__$1 = state_20787;
if(cljs.core.truth_(inst_20764)){
var statearr_20796_20818 = state_20787__$1;
(statearr_20796_20818[(1)] = (4));

} else {
var statearr_20797_20819 = state_20787__$1;
(statearr_20797_20819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (11))){
var inst_20778 = cljs.core.async.close_BANG_.call(null,ch);
var state_20787__$1 = state_20787;
var statearr_20798_20820 = state_20787__$1;
(statearr_20798_20820[(2)] = inst_20778);

(statearr_20798_20820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (9))){
var state_20787__$1 = state_20787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20799_20821 = state_20787__$1;
(statearr_20799_20821[(1)] = (11));

} else {
var statearr_20800_20822 = state_20787__$1;
(statearr_20800_20822[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (5))){
var inst_20764 = (state_20787[(7)]);
var state_20787__$1 = state_20787;
var statearr_20801_20823 = state_20787__$1;
(statearr_20801_20823[(2)] = inst_20764);

(statearr_20801_20823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (10))){
var inst_20783 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20802_20824 = state_20787__$1;
(statearr_20802_20824[(2)] = inst_20783);

(statearr_20802_20824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (8))){
var inst_20764 = (state_20787[(7)]);
var inst_20774 = cljs.core.next.call(null,inst_20764);
var inst_20764__$1 = inst_20774;
var state_20787__$1 = (function (){var statearr_20803 = state_20787;
(statearr_20803[(7)] = inst_20764__$1);

return statearr_20803;
})();
var statearr_20804_20825 = state_20787__$1;
(statearr_20804_20825[(2)] = null);

(statearr_20804_20825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__12975__auto__))
;
return ((function (switch__12919__auto__,c__12975__auto__){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_20808 = [null,null,null,null,null,null,null,null];
(statearr_20808[(0)] = state_machine__12920__auto__);

(statearr_20808[(1)] = (1));

return statearr_20808;
});
var state_machine__12920__auto____1 = (function (state_20787){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_20787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e20809){if((e20809 instanceof Object)){
var ex__12923__auto__ = e20809;
var statearr_20810_20826 = state_20787;
(statearr_20810_20826[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20827 = state_20787;
state_20787 = G__20827;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_20787){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_20787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__))
})();
var state__12977__auto__ = (function (){var statearr_20811 = f__12976__auto__.call(null);
(statearr_20811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_20811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__))
);

return c__12975__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj20829 = {};
return obj20829;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__9185__auto__ = _;
if(and__9185__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__9185__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9836__auto__ = (((_ == null))?null:_);
return (function (){var or__9197__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj20831 = {};
return obj20831;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t21053 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21053 = (function (cs,ch,mult,meta21054){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21054 = meta21054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21053.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21053.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21053.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21053.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21053.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21055){
var self__ = this;
var _21055__$1 = this;
return self__.meta21054;
});})(cs))
;

cljs.core.async.t21053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21055,meta21054__$1){
var self__ = this;
var _21055__$1 = this;
return (new cljs.core.async.t21053(self__.cs,self__.ch,self__.mult,meta21054__$1));
});})(cs))
;

cljs.core.async.t21053.cljs$lang$type = true;

cljs.core.async.t21053.cljs$lang$ctorStr = "cljs.core.async/t21053";

cljs.core.async.t21053.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t21053");
});})(cs))
;

cljs.core.async.__GT_t21053 = ((function (cs){
return (function __GT_t21053(cs__$1,ch__$1,mult__$1,meta21054){
return (new cljs.core.async.t21053(cs__$1,ch__$1,mult__$1,meta21054));
});})(cs))
;

}

return (new cljs.core.async.t21053(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12975__auto___21274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___21274,cs,m,dchan,dctr,done){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___21274,cs,m,dchan,dctr,done){
return (function (state_21186){
var state_val_21187 = (state_21186[(1)]);
if((state_val_21187 === (7))){
var inst_21182 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21188_21275 = state_21186__$1;
(statearr_21188_21275[(2)] = inst_21182);

(statearr_21188_21275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (20))){
var inst_21087 = (state_21186[(7)]);
var inst_21097 = cljs.core.first.call(null,inst_21087);
var inst_21098 = cljs.core.nth.call(null,inst_21097,(0),null);
var inst_21099 = cljs.core.nth.call(null,inst_21097,(1),null);
var state_21186__$1 = (function (){var statearr_21189 = state_21186;
(statearr_21189[(8)] = inst_21098);

return statearr_21189;
})();
if(cljs.core.truth_(inst_21099)){
var statearr_21190_21276 = state_21186__$1;
(statearr_21190_21276[(1)] = (22));

} else {
var statearr_21191_21277 = state_21186__$1;
(statearr_21191_21277[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (27))){
var inst_21129 = (state_21186[(9)]);
var inst_21127 = (state_21186[(10)]);
var inst_21058 = (state_21186[(11)]);
var inst_21134 = (state_21186[(12)]);
var inst_21134__$1 = cljs.core._nth.call(null,inst_21127,inst_21129);
var inst_21135 = cljs.core.async.put_BANG_.call(null,inst_21134__$1,inst_21058,done);
var state_21186__$1 = (function (){var statearr_21192 = state_21186;
(statearr_21192[(12)] = inst_21134__$1);

return statearr_21192;
})();
if(cljs.core.truth_(inst_21135)){
var statearr_21193_21278 = state_21186__$1;
(statearr_21193_21278[(1)] = (30));

} else {
var statearr_21194_21279 = state_21186__$1;
(statearr_21194_21279[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (1))){
var state_21186__$1 = state_21186;
var statearr_21195_21280 = state_21186__$1;
(statearr_21195_21280[(2)] = null);

(statearr_21195_21280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (24))){
var inst_21087 = (state_21186[(7)]);
var inst_21104 = (state_21186[(2)]);
var inst_21105 = cljs.core.next.call(null,inst_21087);
var inst_21067 = inst_21105;
var inst_21068 = null;
var inst_21069 = (0);
var inst_21070 = (0);
var state_21186__$1 = (function (){var statearr_21196 = state_21186;
(statearr_21196[(13)] = inst_21068);

(statearr_21196[(14)] = inst_21067);

(statearr_21196[(15)] = inst_21070);

(statearr_21196[(16)] = inst_21069);

(statearr_21196[(17)] = inst_21104);

return statearr_21196;
})();
var statearr_21197_21281 = state_21186__$1;
(statearr_21197_21281[(2)] = null);

(statearr_21197_21281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (39))){
var state_21186__$1 = state_21186;
var statearr_21201_21282 = state_21186__$1;
(statearr_21201_21282[(2)] = null);

(statearr_21201_21282[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (4))){
var inst_21058 = (state_21186[(11)]);
var inst_21058__$1 = (state_21186[(2)]);
var inst_21059 = (inst_21058__$1 == null);
var state_21186__$1 = (function (){var statearr_21202 = state_21186;
(statearr_21202[(11)] = inst_21058__$1);

return statearr_21202;
})();
if(cljs.core.truth_(inst_21059)){
var statearr_21203_21283 = state_21186__$1;
(statearr_21203_21283[(1)] = (5));

} else {
var statearr_21204_21284 = state_21186__$1;
(statearr_21204_21284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (15))){
var inst_21068 = (state_21186[(13)]);
var inst_21067 = (state_21186[(14)]);
var inst_21070 = (state_21186[(15)]);
var inst_21069 = (state_21186[(16)]);
var inst_21083 = (state_21186[(2)]);
var inst_21084 = (inst_21070 + (1));
var tmp21198 = inst_21068;
var tmp21199 = inst_21067;
var tmp21200 = inst_21069;
var inst_21067__$1 = tmp21199;
var inst_21068__$1 = tmp21198;
var inst_21069__$1 = tmp21200;
var inst_21070__$1 = inst_21084;
var state_21186__$1 = (function (){var statearr_21205 = state_21186;
(statearr_21205[(13)] = inst_21068__$1);

(statearr_21205[(14)] = inst_21067__$1);

(statearr_21205[(15)] = inst_21070__$1);

(statearr_21205[(16)] = inst_21069__$1);

(statearr_21205[(18)] = inst_21083);

return statearr_21205;
})();
var statearr_21206_21285 = state_21186__$1;
(statearr_21206_21285[(2)] = null);

(statearr_21206_21285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (21))){
var inst_21108 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21210_21286 = state_21186__$1;
(statearr_21210_21286[(2)] = inst_21108);

(statearr_21210_21286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (31))){
var inst_21134 = (state_21186[(12)]);
var inst_21138 = done.call(null,null);
var inst_21139 = cljs.core.async.untap_STAR_.call(null,m,inst_21134);
var state_21186__$1 = (function (){var statearr_21211 = state_21186;
(statearr_21211[(19)] = inst_21138);

return statearr_21211;
})();
var statearr_21212_21287 = state_21186__$1;
(statearr_21212_21287[(2)] = inst_21139);

(statearr_21212_21287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (32))){
var inst_21129 = (state_21186[(9)]);
var inst_21127 = (state_21186[(10)]);
var inst_21126 = (state_21186[(20)]);
var inst_21128 = (state_21186[(21)]);
var inst_21141 = (state_21186[(2)]);
var inst_21142 = (inst_21129 + (1));
var tmp21207 = inst_21127;
var tmp21208 = inst_21126;
var tmp21209 = inst_21128;
var inst_21126__$1 = tmp21208;
var inst_21127__$1 = tmp21207;
var inst_21128__$1 = tmp21209;
var inst_21129__$1 = inst_21142;
var state_21186__$1 = (function (){var statearr_21213 = state_21186;
(statearr_21213[(22)] = inst_21141);

(statearr_21213[(9)] = inst_21129__$1);

(statearr_21213[(10)] = inst_21127__$1);

(statearr_21213[(20)] = inst_21126__$1);

(statearr_21213[(21)] = inst_21128__$1);

return statearr_21213;
})();
var statearr_21214_21288 = state_21186__$1;
(statearr_21214_21288[(2)] = null);

(statearr_21214_21288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (40))){
var inst_21154 = (state_21186[(23)]);
var inst_21158 = done.call(null,null);
var inst_21159 = cljs.core.async.untap_STAR_.call(null,m,inst_21154);
var state_21186__$1 = (function (){var statearr_21215 = state_21186;
(statearr_21215[(24)] = inst_21158);

return statearr_21215;
})();
var statearr_21216_21289 = state_21186__$1;
(statearr_21216_21289[(2)] = inst_21159);

(statearr_21216_21289[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (33))){
var inst_21145 = (state_21186[(25)]);
var inst_21147 = cljs.core.chunked_seq_QMARK_.call(null,inst_21145);
var state_21186__$1 = state_21186;
if(inst_21147){
var statearr_21217_21290 = state_21186__$1;
(statearr_21217_21290[(1)] = (36));

} else {
var statearr_21218_21291 = state_21186__$1;
(statearr_21218_21291[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (13))){
var inst_21077 = (state_21186[(26)]);
var inst_21080 = cljs.core.async.close_BANG_.call(null,inst_21077);
var state_21186__$1 = state_21186;
var statearr_21219_21292 = state_21186__$1;
(statearr_21219_21292[(2)] = inst_21080);

(statearr_21219_21292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (22))){
var inst_21098 = (state_21186[(8)]);
var inst_21101 = cljs.core.async.close_BANG_.call(null,inst_21098);
var state_21186__$1 = state_21186;
var statearr_21220_21293 = state_21186__$1;
(statearr_21220_21293[(2)] = inst_21101);

(statearr_21220_21293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (36))){
var inst_21145 = (state_21186[(25)]);
var inst_21149 = cljs.core.chunk_first.call(null,inst_21145);
var inst_21150 = cljs.core.chunk_rest.call(null,inst_21145);
var inst_21151 = cljs.core.count.call(null,inst_21149);
var inst_21126 = inst_21150;
var inst_21127 = inst_21149;
var inst_21128 = inst_21151;
var inst_21129 = (0);
var state_21186__$1 = (function (){var statearr_21221 = state_21186;
(statearr_21221[(9)] = inst_21129);

(statearr_21221[(10)] = inst_21127);

(statearr_21221[(20)] = inst_21126);

(statearr_21221[(21)] = inst_21128);

return statearr_21221;
})();
var statearr_21222_21294 = state_21186__$1;
(statearr_21222_21294[(2)] = null);

(statearr_21222_21294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (41))){
var inst_21145 = (state_21186[(25)]);
var inst_21161 = (state_21186[(2)]);
var inst_21162 = cljs.core.next.call(null,inst_21145);
var inst_21126 = inst_21162;
var inst_21127 = null;
var inst_21128 = (0);
var inst_21129 = (0);
var state_21186__$1 = (function (){var statearr_21223 = state_21186;
(statearr_21223[(9)] = inst_21129);

(statearr_21223[(10)] = inst_21127);

(statearr_21223[(20)] = inst_21126);

(statearr_21223[(27)] = inst_21161);

(statearr_21223[(21)] = inst_21128);

return statearr_21223;
})();
var statearr_21224_21295 = state_21186__$1;
(statearr_21224_21295[(2)] = null);

(statearr_21224_21295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (43))){
var state_21186__$1 = state_21186;
var statearr_21225_21296 = state_21186__$1;
(statearr_21225_21296[(2)] = null);

(statearr_21225_21296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (29))){
var inst_21170 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21226_21297 = state_21186__$1;
(statearr_21226_21297[(2)] = inst_21170);

(statearr_21226_21297[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (44))){
var inst_21179 = (state_21186[(2)]);
var state_21186__$1 = (function (){var statearr_21227 = state_21186;
(statearr_21227[(28)] = inst_21179);

return statearr_21227;
})();
var statearr_21228_21298 = state_21186__$1;
(statearr_21228_21298[(2)] = null);

(statearr_21228_21298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (6))){
var inst_21118 = (state_21186[(29)]);
var inst_21117 = cljs.core.deref.call(null,cs);
var inst_21118__$1 = cljs.core.keys.call(null,inst_21117);
var inst_21119 = cljs.core.count.call(null,inst_21118__$1);
var inst_21120 = cljs.core.reset_BANG_.call(null,dctr,inst_21119);
var inst_21125 = cljs.core.seq.call(null,inst_21118__$1);
var inst_21126 = inst_21125;
var inst_21127 = null;
var inst_21128 = (0);
var inst_21129 = (0);
var state_21186__$1 = (function (){var statearr_21229 = state_21186;
(statearr_21229[(9)] = inst_21129);

(statearr_21229[(30)] = inst_21120);

(statearr_21229[(10)] = inst_21127);

(statearr_21229[(20)] = inst_21126);

(statearr_21229[(29)] = inst_21118__$1);

(statearr_21229[(21)] = inst_21128);

return statearr_21229;
})();
var statearr_21230_21299 = state_21186__$1;
(statearr_21230_21299[(2)] = null);

(statearr_21230_21299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (28))){
var inst_21145 = (state_21186[(25)]);
var inst_21126 = (state_21186[(20)]);
var inst_21145__$1 = cljs.core.seq.call(null,inst_21126);
var state_21186__$1 = (function (){var statearr_21231 = state_21186;
(statearr_21231[(25)] = inst_21145__$1);

return statearr_21231;
})();
if(inst_21145__$1){
var statearr_21232_21300 = state_21186__$1;
(statearr_21232_21300[(1)] = (33));

} else {
var statearr_21233_21301 = state_21186__$1;
(statearr_21233_21301[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (25))){
var inst_21129 = (state_21186[(9)]);
var inst_21128 = (state_21186[(21)]);
var inst_21131 = (inst_21129 < inst_21128);
var inst_21132 = inst_21131;
var state_21186__$1 = state_21186;
if(cljs.core.truth_(inst_21132)){
var statearr_21234_21302 = state_21186__$1;
(statearr_21234_21302[(1)] = (27));

} else {
var statearr_21235_21303 = state_21186__$1;
(statearr_21235_21303[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (34))){
var state_21186__$1 = state_21186;
var statearr_21236_21304 = state_21186__$1;
(statearr_21236_21304[(2)] = null);

(statearr_21236_21304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (17))){
var state_21186__$1 = state_21186;
var statearr_21237_21305 = state_21186__$1;
(statearr_21237_21305[(2)] = null);

(statearr_21237_21305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (3))){
var inst_21184 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21186__$1,inst_21184);
} else {
if((state_val_21187 === (12))){
var inst_21113 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21238_21306 = state_21186__$1;
(statearr_21238_21306[(2)] = inst_21113);

(statearr_21238_21306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (2))){
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21186__$1,(4),ch);
} else {
if((state_val_21187 === (23))){
var state_21186__$1 = state_21186;
var statearr_21239_21307 = state_21186__$1;
(statearr_21239_21307[(2)] = null);

(statearr_21239_21307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (35))){
var inst_21168 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21240_21308 = state_21186__$1;
(statearr_21240_21308[(2)] = inst_21168);

(statearr_21240_21308[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (19))){
var inst_21087 = (state_21186[(7)]);
var inst_21091 = cljs.core.chunk_first.call(null,inst_21087);
var inst_21092 = cljs.core.chunk_rest.call(null,inst_21087);
var inst_21093 = cljs.core.count.call(null,inst_21091);
var inst_21067 = inst_21092;
var inst_21068 = inst_21091;
var inst_21069 = inst_21093;
var inst_21070 = (0);
var state_21186__$1 = (function (){var statearr_21241 = state_21186;
(statearr_21241[(13)] = inst_21068);

(statearr_21241[(14)] = inst_21067);

(statearr_21241[(15)] = inst_21070);

(statearr_21241[(16)] = inst_21069);

return statearr_21241;
})();
var statearr_21242_21309 = state_21186__$1;
(statearr_21242_21309[(2)] = null);

(statearr_21242_21309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (11))){
var inst_21067 = (state_21186[(14)]);
var inst_21087 = (state_21186[(7)]);
var inst_21087__$1 = cljs.core.seq.call(null,inst_21067);
var state_21186__$1 = (function (){var statearr_21243 = state_21186;
(statearr_21243[(7)] = inst_21087__$1);

return statearr_21243;
})();
if(inst_21087__$1){
var statearr_21244_21310 = state_21186__$1;
(statearr_21244_21310[(1)] = (16));

} else {
var statearr_21245_21311 = state_21186__$1;
(statearr_21245_21311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (9))){
var inst_21115 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21246_21312 = state_21186__$1;
(statearr_21246_21312[(2)] = inst_21115);

(statearr_21246_21312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (5))){
var inst_21065 = cljs.core.deref.call(null,cs);
var inst_21066 = cljs.core.seq.call(null,inst_21065);
var inst_21067 = inst_21066;
var inst_21068 = null;
var inst_21069 = (0);
var inst_21070 = (0);
var state_21186__$1 = (function (){var statearr_21247 = state_21186;
(statearr_21247[(13)] = inst_21068);

(statearr_21247[(14)] = inst_21067);

(statearr_21247[(15)] = inst_21070);

(statearr_21247[(16)] = inst_21069);

return statearr_21247;
})();
var statearr_21248_21313 = state_21186__$1;
(statearr_21248_21313[(2)] = null);

(statearr_21248_21313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (14))){
var state_21186__$1 = state_21186;
var statearr_21249_21314 = state_21186__$1;
(statearr_21249_21314[(2)] = null);

(statearr_21249_21314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (45))){
var inst_21176 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21250_21315 = state_21186__$1;
(statearr_21250_21315[(2)] = inst_21176);

(statearr_21250_21315[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (26))){
var inst_21118 = (state_21186[(29)]);
var inst_21172 = (state_21186[(2)]);
var inst_21173 = cljs.core.seq.call(null,inst_21118);
var state_21186__$1 = (function (){var statearr_21251 = state_21186;
(statearr_21251[(31)] = inst_21172);

return statearr_21251;
})();
if(inst_21173){
var statearr_21252_21316 = state_21186__$1;
(statearr_21252_21316[(1)] = (42));

} else {
var statearr_21253_21317 = state_21186__$1;
(statearr_21253_21317[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (16))){
var inst_21087 = (state_21186[(7)]);
var inst_21089 = cljs.core.chunked_seq_QMARK_.call(null,inst_21087);
var state_21186__$1 = state_21186;
if(inst_21089){
var statearr_21254_21318 = state_21186__$1;
(statearr_21254_21318[(1)] = (19));

} else {
var statearr_21255_21319 = state_21186__$1;
(statearr_21255_21319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (38))){
var inst_21165 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21256_21320 = state_21186__$1;
(statearr_21256_21320[(2)] = inst_21165);

(statearr_21256_21320[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (30))){
var state_21186__$1 = state_21186;
var statearr_21257_21321 = state_21186__$1;
(statearr_21257_21321[(2)] = null);

(statearr_21257_21321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (10))){
var inst_21068 = (state_21186[(13)]);
var inst_21070 = (state_21186[(15)]);
var inst_21076 = cljs.core._nth.call(null,inst_21068,inst_21070);
var inst_21077 = cljs.core.nth.call(null,inst_21076,(0),null);
var inst_21078 = cljs.core.nth.call(null,inst_21076,(1),null);
var state_21186__$1 = (function (){var statearr_21258 = state_21186;
(statearr_21258[(26)] = inst_21077);

return statearr_21258;
})();
if(cljs.core.truth_(inst_21078)){
var statearr_21259_21322 = state_21186__$1;
(statearr_21259_21322[(1)] = (13));

} else {
var statearr_21260_21323 = state_21186__$1;
(statearr_21260_21323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (18))){
var inst_21111 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21261_21324 = state_21186__$1;
(statearr_21261_21324[(2)] = inst_21111);

(statearr_21261_21324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (42))){
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21186__$1,(45),dchan);
} else {
if((state_val_21187 === (37))){
var inst_21145 = (state_21186[(25)]);
var inst_21058 = (state_21186[(11)]);
var inst_21154 = (state_21186[(23)]);
var inst_21154__$1 = cljs.core.first.call(null,inst_21145);
var inst_21155 = cljs.core.async.put_BANG_.call(null,inst_21154__$1,inst_21058,done);
var state_21186__$1 = (function (){var statearr_21262 = state_21186;
(statearr_21262[(23)] = inst_21154__$1);

return statearr_21262;
})();
if(cljs.core.truth_(inst_21155)){
var statearr_21263_21325 = state_21186__$1;
(statearr_21263_21325[(1)] = (39));

} else {
var statearr_21264_21326 = state_21186__$1;
(statearr_21264_21326[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (8))){
var inst_21070 = (state_21186[(15)]);
var inst_21069 = (state_21186[(16)]);
var inst_21072 = (inst_21070 < inst_21069);
var inst_21073 = inst_21072;
var state_21186__$1 = state_21186;
if(cljs.core.truth_(inst_21073)){
var statearr_21265_21327 = state_21186__$1;
(statearr_21265_21327[(1)] = (10));

} else {
var statearr_21266_21328 = state_21186__$1;
(statearr_21266_21328[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__12975__auto___21274,cs,m,dchan,dctr,done))
;
return ((function (switch__12919__auto__,c__12975__auto___21274,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_21270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21270[(0)] = state_machine__12920__auto__);

(statearr_21270[(1)] = (1));

return statearr_21270;
});
var state_machine__12920__auto____1 = (function (state_21186){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_21186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e21271){if((e21271 instanceof Object)){
var ex__12923__auto__ = e21271;
var statearr_21272_21329 = state_21186;
(statearr_21272_21329[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21330 = state_21186;
state_21186 = G__21330;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_21186){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_21186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___21274,cs,m,dchan,dctr,done))
})();
var state__12977__auto__ = (function (){var statearr_21273 = f__12976__auto__.call(null);
(statearr_21273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___21274);

return statearr_21273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___21274,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj21332 = {};
return obj21332;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__9185__auto__ = m;
if(and__9185__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__9185__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9836__auto__ = (((m == null))?null:m);
return (function (){var or__9197__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21333){
var map__21338 = p__21333;
var map__21338__$1 = ((cljs.core.seq_QMARK_.call(null,map__21338))?cljs.core.apply.call(null,cljs.core.hash_map,map__21338):map__21338);
var opts = map__21338__$1;
var statearr_21339_21342 = state;
(statearr_21339_21342[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__21338,map__21338__$1,opts){
return (function (val){
var statearr_21340_21343 = state;
(statearr_21340_21343[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21338,map__21338__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4388__auto__)){
var cb = temp__4388__auto__;
var statearr_21341_21344 = state;
(statearr_21341_21344[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21333 = null;
if (arguments.length > 3) {
  p__21333 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21333);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21345){
var state = cljs.core.first(arglist__21345);
arglist__21345 = cljs.core.next(arglist__21345);
var cont_block = cljs.core.first(arglist__21345);
arglist__21345 = cljs.core.next(arglist__21345);
var ports = cljs.core.first(arglist__21345);
var p__21333 = cljs.core.rest(arglist__21345);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21333);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t21465 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21465 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21466){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21466 = meta21466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21465.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21465.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21467){
var self__ = this;
var _21467__$1 = this;
return self__.meta21466;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21467,meta21466__$1){
var self__ = this;
var _21467__$1 = this;
return (new cljs.core.async.t21465(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21466__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21465.cljs$lang$type = true;

cljs.core.async.t21465.cljs$lang$ctorStr = "cljs.core.async/t21465";

cljs.core.async.t21465.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t21465");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21465 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21465(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21466){
return (new cljs.core.async.t21465(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21466));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21465(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__12975__auto___21584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___21584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___21584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21537){
var state_val_21538 = (state_21537[(1)]);
if((state_val_21538 === (7))){
var inst_21481 = (state_21537[(7)]);
var inst_21486 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21481);
var state_21537__$1 = state_21537;
var statearr_21539_21585 = state_21537__$1;
(statearr_21539_21585[(2)] = inst_21486);

(statearr_21539_21585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (20))){
var inst_21496 = (state_21537[(8)]);
var state_21537__$1 = state_21537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21537__$1,(23),out,inst_21496);
} else {
if((state_val_21538 === (1))){
var inst_21471 = (state_21537[(9)]);
var inst_21471__$1 = calc_state.call(null);
var inst_21472 = cljs.core.seq_QMARK_.call(null,inst_21471__$1);
var state_21537__$1 = (function (){var statearr_21540 = state_21537;
(statearr_21540[(9)] = inst_21471__$1);

return statearr_21540;
})();
if(inst_21472){
var statearr_21541_21586 = state_21537__$1;
(statearr_21541_21586[(1)] = (2));

} else {
var statearr_21542_21587 = state_21537__$1;
(statearr_21542_21587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (24))){
var inst_21489 = (state_21537[(10)]);
var inst_21481 = inst_21489;
var state_21537__$1 = (function (){var statearr_21543 = state_21537;
(statearr_21543[(7)] = inst_21481);

return statearr_21543;
})();
var statearr_21544_21588 = state_21537__$1;
(statearr_21544_21588[(2)] = null);

(statearr_21544_21588[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (4))){
var inst_21471 = (state_21537[(9)]);
var inst_21477 = (state_21537[(2)]);
var inst_21478 = cljs.core.get.call(null,inst_21477,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21479 = cljs.core.get.call(null,inst_21477,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21480 = cljs.core.get.call(null,inst_21477,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21481 = inst_21471;
var state_21537__$1 = (function (){var statearr_21545 = state_21537;
(statearr_21545[(11)] = inst_21479);

(statearr_21545[(7)] = inst_21481);

(statearr_21545[(12)] = inst_21480);

(statearr_21545[(13)] = inst_21478);

return statearr_21545;
})();
var statearr_21546_21589 = state_21537__$1;
(statearr_21546_21589[(2)] = null);

(statearr_21546_21589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (15))){
var state_21537__$1 = state_21537;
var statearr_21547_21590 = state_21537__$1;
(statearr_21547_21590[(2)] = null);

(statearr_21547_21590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (21))){
var inst_21489 = (state_21537[(10)]);
var inst_21481 = inst_21489;
var state_21537__$1 = (function (){var statearr_21548 = state_21537;
(statearr_21548[(7)] = inst_21481);

return statearr_21548;
})();
var statearr_21549_21591 = state_21537__$1;
(statearr_21549_21591[(2)] = null);

(statearr_21549_21591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (13))){
var inst_21533 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
var statearr_21550_21592 = state_21537__$1;
(statearr_21550_21592[(2)] = inst_21533);

(statearr_21550_21592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (22))){
var inst_21531 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
var statearr_21551_21593 = state_21537__$1;
(statearr_21551_21593[(2)] = inst_21531);

(statearr_21551_21593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (6))){
var inst_21535 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21537__$1,inst_21535);
} else {
if((state_val_21538 === (25))){
var state_21537__$1 = state_21537;
var statearr_21552_21594 = state_21537__$1;
(statearr_21552_21594[(2)] = null);

(statearr_21552_21594[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (17))){
var inst_21511 = (state_21537[(14)]);
var state_21537__$1 = state_21537;
var statearr_21553_21595 = state_21537__$1;
(statearr_21553_21595[(2)] = inst_21511);

(statearr_21553_21595[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (3))){
var inst_21471 = (state_21537[(9)]);
var state_21537__$1 = state_21537;
var statearr_21554_21596 = state_21537__$1;
(statearr_21554_21596[(2)] = inst_21471);

(statearr_21554_21596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (12))){
var inst_21497 = (state_21537[(15)]);
var inst_21492 = (state_21537[(16)]);
var inst_21511 = (state_21537[(14)]);
var inst_21511__$1 = inst_21492.call(null,inst_21497);
var state_21537__$1 = (function (){var statearr_21555 = state_21537;
(statearr_21555[(14)] = inst_21511__$1);

return statearr_21555;
})();
if(cljs.core.truth_(inst_21511__$1)){
var statearr_21556_21597 = state_21537__$1;
(statearr_21556_21597[(1)] = (17));

} else {
var statearr_21557_21598 = state_21537__$1;
(statearr_21557_21598[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (2))){
var inst_21471 = (state_21537[(9)]);
var inst_21474 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21471);
var state_21537__$1 = state_21537;
var statearr_21558_21599 = state_21537__$1;
(statearr_21558_21599[(2)] = inst_21474);

(statearr_21558_21599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (23))){
var inst_21522 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
if(cljs.core.truth_(inst_21522)){
var statearr_21559_21600 = state_21537__$1;
(statearr_21559_21600[(1)] = (24));

} else {
var statearr_21560_21601 = state_21537__$1;
(statearr_21560_21601[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (19))){
var inst_21519 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
if(cljs.core.truth_(inst_21519)){
var statearr_21561_21602 = state_21537__$1;
(statearr_21561_21602[(1)] = (20));

} else {
var statearr_21562_21603 = state_21537__$1;
(statearr_21562_21603[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (11))){
var inst_21496 = (state_21537[(8)]);
var inst_21502 = (inst_21496 == null);
var state_21537__$1 = state_21537;
if(cljs.core.truth_(inst_21502)){
var statearr_21563_21604 = state_21537__$1;
(statearr_21563_21604[(1)] = (14));

} else {
var statearr_21564_21605 = state_21537__$1;
(statearr_21564_21605[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (9))){
var inst_21489 = (state_21537[(10)]);
var inst_21489__$1 = (state_21537[(2)]);
var inst_21490 = cljs.core.get.call(null,inst_21489__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21491 = cljs.core.get.call(null,inst_21489__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21492 = cljs.core.get.call(null,inst_21489__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21537__$1 = (function (){var statearr_21565 = state_21537;
(statearr_21565[(10)] = inst_21489__$1);

(statearr_21565[(17)] = inst_21491);

(statearr_21565[(16)] = inst_21492);

return statearr_21565;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21537__$1,(10),inst_21490);
} else {
if((state_val_21538 === (5))){
var inst_21481 = (state_21537[(7)]);
var inst_21484 = cljs.core.seq_QMARK_.call(null,inst_21481);
var state_21537__$1 = state_21537;
if(inst_21484){
var statearr_21566_21606 = state_21537__$1;
(statearr_21566_21606[(1)] = (7));

} else {
var statearr_21567_21607 = state_21537__$1;
(statearr_21567_21607[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (14))){
var inst_21497 = (state_21537[(15)]);
var inst_21504 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21497);
var state_21537__$1 = state_21537;
var statearr_21568_21608 = state_21537__$1;
(statearr_21568_21608[(2)] = inst_21504);

(statearr_21568_21608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (26))){
var inst_21527 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
var statearr_21569_21609 = state_21537__$1;
(statearr_21569_21609[(2)] = inst_21527);

(statearr_21569_21609[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (16))){
var inst_21507 = (state_21537[(2)]);
var inst_21508 = calc_state.call(null);
var inst_21481 = inst_21508;
var state_21537__$1 = (function (){var statearr_21570 = state_21537;
(statearr_21570[(7)] = inst_21481);

(statearr_21570[(18)] = inst_21507);

return statearr_21570;
})();
var statearr_21571_21610 = state_21537__$1;
(statearr_21571_21610[(2)] = null);

(statearr_21571_21610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (10))){
var inst_21496 = (state_21537[(8)]);
var inst_21497 = (state_21537[(15)]);
var inst_21495 = (state_21537[(2)]);
var inst_21496__$1 = cljs.core.nth.call(null,inst_21495,(0),null);
var inst_21497__$1 = cljs.core.nth.call(null,inst_21495,(1),null);
var inst_21498 = (inst_21496__$1 == null);
var inst_21499 = cljs.core._EQ_.call(null,inst_21497__$1,change);
var inst_21500 = (inst_21498) || (inst_21499);
var state_21537__$1 = (function (){var statearr_21572 = state_21537;
(statearr_21572[(8)] = inst_21496__$1);

(statearr_21572[(15)] = inst_21497__$1);

return statearr_21572;
})();
if(cljs.core.truth_(inst_21500)){
var statearr_21573_21611 = state_21537__$1;
(statearr_21573_21611[(1)] = (11));

} else {
var statearr_21574_21612 = state_21537__$1;
(statearr_21574_21612[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (18))){
var inst_21497 = (state_21537[(15)]);
var inst_21491 = (state_21537[(17)]);
var inst_21492 = (state_21537[(16)]);
var inst_21514 = cljs.core.empty_QMARK_.call(null,inst_21492);
var inst_21515 = inst_21491.call(null,inst_21497);
var inst_21516 = cljs.core.not.call(null,inst_21515);
var inst_21517 = (inst_21514) && (inst_21516);
var state_21537__$1 = state_21537;
var statearr_21575_21613 = state_21537__$1;
(statearr_21575_21613[(2)] = inst_21517);

(statearr_21575_21613[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (8))){
var inst_21481 = (state_21537[(7)]);
var state_21537__$1 = state_21537;
var statearr_21576_21614 = state_21537__$1;
(statearr_21576_21614[(2)] = inst_21481);

(statearr_21576_21614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__12975__auto___21584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12919__auto__,c__12975__auto___21584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_21580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21580[(0)] = state_machine__12920__auto__);

(statearr_21580[(1)] = (1));

return statearr_21580;
});
var state_machine__12920__auto____1 = (function (state_21537){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_21537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e21581){if((e21581 instanceof Object)){
var ex__12923__auto__ = e21581;
var statearr_21582_21615 = state_21537;
(statearr_21582_21615[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21616 = state_21537;
state_21537 = G__21616;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_21537){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_21537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___21584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12977__auto__ = (function (){var statearr_21583 = f__12976__auto__.call(null);
(statearr_21583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___21584);

return statearr_21583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___21584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj21618 = {};
return obj21618;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__9185__auto__ = p;
if(and__9185__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__9185__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9836__auto__ = (((p == null))?null:p);
return (function (){var or__9197__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__9185__auto__ = p;
if(and__9185__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__9185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9836__auto__ = (((p == null))?null:p);
return (function (){var or__9197__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__9185__auto__ = p;
if(and__9185__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__9185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9836__auto__ = (((p == null))?null:p);
return (function (){var or__9197__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__9185__auto__ = p;
if(and__9185__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__9185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9836__auto__ = (((p == null))?null:p);
return (function (){var or__9197__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9836__auto__)]);
if(or__9197__auto__){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__9197__auto____$1){
return or__9197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9197__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9197__auto__,mults){
return (function (p1__21619_SHARP_){
if(cljs.core.truth_(p1__21619_SHARP_.call(null,topic))){
return p1__21619_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21619_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9197__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21742 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21742 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21743){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21743 = meta21743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21742.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21742.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21742.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4388__auto__)){
var m = temp__4388__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t21742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21742.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21742.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21744){
var self__ = this;
var _21744__$1 = this;
return self__.meta21743;
});})(mults,ensure_mult))
;

cljs.core.async.t21742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21744,meta21743__$1){
var self__ = this;
var _21744__$1 = this;
return (new cljs.core.async.t21742(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21743__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21742.cljs$lang$type = true;

cljs.core.async.t21742.cljs$lang$ctorStr = "cljs.core.async/t21742";

cljs.core.async.t21742.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t21742");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21742 = ((function (mults,ensure_mult){
return (function __GT_t21742(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21743){
return (new cljs.core.async.t21742(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21743));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21742(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__12975__auto___21864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___21864,mults,ensure_mult,p){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___21864,mults,ensure_mult,p){
return (function (state_21816){
var state_val_21817 = (state_21816[(1)]);
if((state_val_21817 === (7))){
var inst_21812 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21818_21865 = state_21816__$1;
(statearr_21818_21865[(2)] = inst_21812);

(statearr_21818_21865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (20))){
var state_21816__$1 = state_21816;
var statearr_21819_21866 = state_21816__$1;
(statearr_21819_21866[(2)] = null);

(statearr_21819_21866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (1))){
var state_21816__$1 = state_21816;
var statearr_21820_21867 = state_21816__$1;
(statearr_21820_21867[(2)] = null);

(statearr_21820_21867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (24))){
var inst_21795 = (state_21816[(7)]);
var inst_21804 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21795);
var state_21816__$1 = state_21816;
var statearr_21821_21868 = state_21816__$1;
(statearr_21821_21868[(2)] = inst_21804);

(statearr_21821_21868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (4))){
var inst_21747 = (state_21816[(8)]);
var inst_21747__$1 = (state_21816[(2)]);
var inst_21748 = (inst_21747__$1 == null);
var state_21816__$1 = (function (){var statearr_21822 = state_21816;
(statearr_21822[(8)] = inst_21747__$1);

return statearr_21822;
})();
if(cljs.core.truth_(inst_21748)){
var statearr_21823_21869 = state_21816__$1;
(statearr_21823_21869[(1)] = (5));

} else {
var statearr_21824_21870 = state_21816__$1;
(statearr_21824_21870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (15))){
var inst_21789 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21825_21871 = state_21816__$1;
(statearr_21825_21871[(2)] = inst_21789);

(statearr_21825_21871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (21))){
var inst_21809 = (state_21816[(2)]);
var state_21816__$1 = (function (){var statearr_21826 = state_21816;
(statearr_21826[(9)] = inst_21809);

return statearr_21826;
})();
var statearr_21827_21872 = state_21816__$1;
(statearr_21827_21872[(2)] = null);

(statearr_21827_21872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (13))){
var inst_21771 = (state_21816[(10)]);
var inst_21773 = cljs.core.chunked_seq_QMARK_.call(null,inst_21771);
var state_21816__$1 = state_21816;
if(inst_21773){
var statearr_21828_21873 = state_21816__$1;
(statearr_21828_21873[(1)] = (16));

} else {
var statearr_21829_21874 = state_21816__$1;
(statearr_21829_21874[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (22))){
var inst_21801 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
if(cljs.core.truth_(inst_21801)){
var statearr_21830_21875 = state_21816__$1;
(statearr_21830_21875[(1)] = (23));

} else {
var statearr_21831_21876 = state_21816__$1;
(statearr_21831_21876[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (6))){
var inst_21795 = (state_21816[(7)]);
var inst_21747 = (state_21816[(8)]);
var inst_21797 = (state_21816[(11)]);
var inst_21795__$1 = topic_fn.call(null,inst_21747);
var inst_21796 = cljs.core.deref.call(null,mults);
var inst_21797__$1 = cljs.core.get.call(null,inst_21796,inst_21795__$1);
var state_21816__$1 = (function (){var statearr_21832 = state_21816;
(statearr_21832[(7)] = inst_21795__$1);

(statearr_21832[(11)] = inst_21797__$1);

return statearr_21832;
})();
if(cljs.core.truth_(inst_21797__$1)){
var statearr_21833_21877 = state_21816__$1;
(statearr_21833_21877[(1)] = (19));

} else {
var statearr_21834_21878 = state_21816__$1;
(statearr_21834_21878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (25))){
var inst_21806 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21835_21879 = state_21816__$1;
(statearr_21835_21879[(2)] = inst_21806);

(statearr_21835_21879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (17))){
var inst_21771 = (state_21816[(10)]);
var inst_21780 = cljs.core.first.call(null,inst_21771);
var inst_21781 = cljs.core.async.muxch_STAR_.call(null,inst_21780);
var inst_21782 = cljs.core.async.close_BANG_.call(null,inst_21781);
var inst_21783 = cljs.core.next.call(null,inst_21771);
var inst_21757 = inst_21783;
var inst_21758 = null;
var inst_21759 = (0);
var inst_21760 = (0);
var state_21816__$1 = (function (){var statearr_21836 = state_21816;
(statearr_21836[(12)] = inst_21757);

(statearr_21836[(13)] = inst_21760);

(statearr_21836[(14)] = inst_21759);

(statearr_21836[(15)] = inst_21758);

(statearr_21836[(16)] = inst_21782);

return statearr_21836;
})();
var statearr_21837_21880 = state_21816__$1;
(statearr_21837_21880[(2)] = null);

(statearr_21837_21880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (3))){
var inst_21814 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21816__$1,inst_21814);
} else {
if((state_val_21817 === (12))){
var inst_21791 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21838_21881 = state_21816__$1;
(statearr_21838_21881[(2)] = inst_21791);

(statearr_21838_21881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (2))){
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21816__$1,(4),ch);
} else {
if((state_val_21817 === (23))){
var state_21816__$1 = state_21816;
var statearr_21839_21882 = state_21816__$1;
(statearr_21839_21882[(2)] = null);

(statearr_21839_21882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (19))){
var inst_21747 = (state_21816[(8)]);
var inst_21797 = (state_21816[(11)]);
var inst_21799 = cljs.core.async.muxch_STAR_.call(null,inst_21797);
var state_21816__$1 = state_21816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21816__$1,(22),inst_21799,inst_21747);
} else {
if((state_val_21817 === (11))){
var inst_21757 = (state_21816[(12)]);
var inst_21771 = (state_21816[(10)]);
var inst_21771__$1 = cljs.core.seq.call(null,inst_21757);
var state_21816__$1 = (function (){var statearr_21840 = state_21816;
(statearr_21840[(10)] = inst_21771__$1);

return statearr_21840;
})();
if(inst_21771__$1){
var statearr_21841_21883 = state_21816__$1;
(statearr_21841_21883[(1)] = (13));

} else {
var statearr_21842_21884 = state_21816__$1;
(statearr_21842_21884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (9))){
var inst_21793 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21843_21885 = state_21816__$1;
(statearr_21843_21885[(2)] = inst_21793);

(statearr_21843_21885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (5))){
var inst_21754 = cljs.core.deref.call(null,mults);
var inst_21755 = cljs.core.vals.call(null,inst_21754);
var inst_21756 = cljs.core.seq.call(null,inst_21755);
var inst_21757 = inst_21756;
var inst_21758 = null;
var inst_21759 = (0);
var inst_21760 = (0);
var state_21816__$1 = (function (){var statearr_21844 = state_21816;
(statearr_21844[(12)] = inst_21757);

(statearr_21844[(13)] = inst_21760);

(statearr_21844[(14)] = inst_21759);

(statearr_21844[(15)] = inst_21758);

return statearr_21844;
})();
var statearr_21845_21886 = state_21816__$1;
(statearr_21845_21886[(2)] = null);

(statearr_21845_21886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (14))){
var state_21816__$1 = state_21816;
var statearr_21849_21887 = state_21816__$1;
(statearr_21849_21887[(2)] = null);

(statearr_21849_21887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (16))){
var inst_21771 = (state_21816[(10)]);
var inst_21775 = cljs.core.chunk_first.call(null,inst_21771);
var inst_21776 = cljs.core.chunk_rest.call(null,inst_21771);
var inst_21777 = cljs.core.count.call(null,inst_21775);
var inst_21757 = inst_21776;
var inst_21758 = inst_21775;
var inst_21759 = inst_21777;
var inst_21760 = (0);
var state_21816__$1 = (function (){var statearr_21850 = state_21816;
(statearr_21850[(12)] = inst_21757);

(statearr_21850[(13)] = inst_21760);

(statearr_21850[(14)] = inst_21759);

(statearr_21850[(15)] = inst_21758);

return statearr_21850;
})();
var statearr_21851_21888 = state_21816__$1;
(statearr_21851_21888[(2)] = null);

(statearr_21851_21888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (10))){
var inst_21757 = (state_21816[(12)]);
var inst_21760 = (state_21816[(13)]);
var inst_21759 = (state_21816[(14)]);
var inst_21758 = (state_21816[(15)]);
var inst_21765 = cljs.core._nth.call(null,inst_21758,inst_21760);
var inst_21766 = cljs.core.async.muxch_STAR_.call(null,inst_21765);
var inst_21767 = cljs.core.async.close_BANG_.call(null,inst_21766);
var inst_21768 = (inst_21760 + (1));
var tmp21846 = inst_21757;
var tmp21847 = inst_21759;
var tmp21848 = inst_21758;
var inst_21757__$1 = tmp21846;
var inst_21758__$1 = tmp21848;
var inst_21759__$1 = tmp21847;
var inst_21760__$1 = inst_21768;
var state_21816__$1 = (function (){var statearr_21852 = state_21816;
(statearr_21852[(12)] = inst_21757__$1);

(statearr_21852[(17)] = inst_21767);

(statearr_21852[(13)] = inst_21760__$1);

(statearr_21852[(14)] = inst_21759__$1);

(statearr_21852[(15)] = inst_21758__$1);

return statearr_21852;
})();
var statearr_21853_21889 = state_21816__$1;
(statearr_21853_21889[(2)] = null);

(statearr_21853_21889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (18))){
var inst_21786 = (state_21816[(2)]);
var state_21816__$1 = state_21816;
var statearr_21854_21890 = state_21816__$1;
(statearr_21854_21890[(2)] = inst_21786);

(statearr_21854_21890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21817 === (8))){
var inst_21760 = (state_21816[(13)]);
var inst_21759 = (state_21816[(14)]);
var inst_21762 = (inst_21760 < inst_21759);
var inst_21763 = inst_21762;
var state_21816__$1 = state_21816;
if(cljs.core.truth_(inst_21763)){
var statearr_21855_21891 = state_21816__$1;
(statearr_21855_21891[(1)] = (10));

} else {
var statearr_21856_21892 = state_21816__$1;
(statearr_21856_21892[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__12975__auto___21864,mults,ensure_mult,p))
;
return ((function (switch__12919__auto__,c__12975__auto___21864,mults,ensure_mult,p){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_21860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21860[(0)] = state_machine__12920__auto__);

(statearr_21860[(1)] = (1));

return statearr_21860;
});
var state_machine__12920__auto____1 = (function (state_21816){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_21816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e21861){if((e21861 instanceof Object)){
var ex__12923__auto__ = e21861;
var statearr_21862_21893 = state_21816;
(statearr_21862_21893[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21894 = state_21816;
state_21816 = G__21894;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_21816){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_21816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___21864,mults,ensure_mult,p))
})();
var state__12977__auto__ = (function (){var statearr_21863 = f__12976__auto__.call(null);
(statearr_21863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___21864);

return statearr_21863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___21864,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12975__auto___22031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___22031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___22031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22001){
var state_val_22002 = (state_22001[(1)]);
if((state_val_22002 === (7))){
var state_22001__$1 = state_22001;
var statearr_22003_22032 = state_22001__$1;
(statearr_22003_22032[(2)] = null);

(statearr_22003_22032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (1))){
var state_22001__$1 = state_22001;
var statearr_22004_22033 = state_22001__$1;
(statearr_22004_22033[(2)] = null);

(statearr_22004_22033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (4))){
var inst_21965 = (state_22001[(7)]);
var inst_21967 = (inst_21965 < cnt);
var state_22001__$1 = state_22001;
if(cljs.core.truth_(inst_21967)){
var statearr_22005_22034 = state_22001__$1;
(statearr_22005_22034[(1)] = (6));

} else {
var statearr_22006_22035 = state_22001__$1;
(statearr_22006_22035[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (15))){
var inst_21997 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22007_22036 = state_22001__$1;
(statearr_22007_22036[(2)] = inst_21997);

(statearr_22007_22036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (13))){
var inst_21990 = cljs.core.async.close_BANG_.call(null,out);
var state_22001__$1 = state_22001;
var statearr_22008_22037 = state_22001__$1;
(statearr_22008_22037[(2)] = inst_21990);

(statearr_22008_22037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (6))){
var state_22001__$1 = state_22001;
var statearr_22009_22038 = state_22001__$1;
(statearr_22009_22038[(2)] = null);

(statearr_22009_22038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (3))){
var inst_21999 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22001__$1,inst_21999);
} else {
if((state_val_22002 === (12))){
var inst_21987 = (state_22001[(8)]);
var inst_21987__$1 = (state_22001[(2)]);
var inst_21988 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21987__$1);
var state_22001__$1 = (function (){var statearr_22010 = state_22001;
(statearr_22010[(8)] = inst_21987__$1);

return statearr_22010;
})();
if(cljs.core.truth_(inst_21988)){
var statearr_22011_22039 = state_22001__$1;
(statearr_22011_22039[(1)] = (13));

} else {
var statearr_22012_22040 = state_22001__$1;
(statearr_22012_22040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (2))){
var inst_21964 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21965 = (0);
var state_22001__$1 = (function (){var statearr_22013 = state_22001;
(statearr_22013[(9)] = inst_21964);

(statearr_22013[(7)] = inst_21965);

return statearr_22013;
})();
var statearr_22014_22041 = state_22001__$1;
(statearr_22014_22041[(2)] = null);

(statearr_22014_22041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (11))){
var inst_21965 = (state_22001[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22001,(10),Object,null,(9));
var inst_21974 = chs__$1.call(null,inst_21965);
var inst_21975 = done.call(null,inst_21965);
var inst_21976 = cljs.core.async.take_BANG_.call(null,inst_21974,inst_21975);
var state_22001__$1 = state_22001;
var statearr_22015_22042 = state_22001__$1;
(statearr_22015_22042[(2)] = inst_21976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22001__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (9))){
var inst_21965 = (state_22001[(7)]);
var inst_21978 = (state_22001[(2)]);
var inst_21979 = (inst_21965 + (1));
var inst_21965__$1 = inst_21979;
var state_22001__$1 = (function (){var statearr_22016 = state_22001;
(statearr_22016[(10)] = inst_21978);

(statearr_22016[(7)] = inst_21965__$1);

return statearr_22016;
})();
var statearr_22017_22043 = state_22001__$1;
(statearr_22017_22043[(2)] = null);

(statearr_22017_22043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (5))){
var inst_21985 = (state_22001[(2)]);
var state_22001__$1 = (function (){var statearr_22018 = state_22001;
(statearr_22018[(11)] = inst_21985);

return statearr_22018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22001__$1,(12),dchan);
} else {
if((state_val_22002 === (14))){
var inst_21987 = (state_22001[(8)]);
var inst_21992 = cljs.core.apply.call(null,f,inst_21987);
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22001__$1,(16),out,inst_21992);
} else {
if((state_val_22002 === (16))){
var inst_21994 = (state_22001[(2)]);
var state_22001__$1 = (function (){var statearr_22019 = state_22001;
(statearr_22019[(12)] = inst_21994);

return statearr_22019;
})();
var statearr_22020_22044 = state_22001__$1;
(statearr_22020_22044[(2)] = null);

(statearr_22020_22044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (10))){
var inst_21969 = (state_22001[(2)]);
var inst_21970 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22001__$1 = (function (){var statearr_22021 = state_22001;
(statearr_22021[(13)] = inst_21969);

return statearr_22021;
})();
var statearr_22022_22045 = state_22001__$1;
(statearr_22022_22045[(2)] = inst_21970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22001__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (8))){
var inst_21983 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22023_22046 = state_22001__$1;
(statearr_22023_22046[(2)] = inst_21983);

(statearr_22023_22046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});})(c__12975__auto___22031,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12919__auto__,c__12975__auto___22031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_22027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22027[(0)] = state_machine__12920__auto__);

(statearr_22027[(1)] = (1));

return statearr_22027;
});
var state_machine__12920__auto____1 = (function (state_22001){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_22001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e22028){if((e22028 instanceof Object)){
var ex__12923__auto__ = e22028;
var statearr_22029_22047 = state_22001;
(statearr_22029_22047[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22048 = state_22001;
state_22001 = G__22048;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_22001){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_22001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___22031,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12977__auto__ = (function (){var statearr_22030 = f__12976__auto__.call(null);
(statearr_22030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___22031);

return statearr_22030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___22031,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12975__auto___22156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___22156,out){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___22156,out){
return (function (state_22132){
var state_val_22133 = (state_22132[(1)]);
if((state_val_22133 === (7))){
var inst_22112 = (state_22132[(7)]);
var inst_22111 = (state_22132[(8)]);
var inst_22111__$1 = (state_22132[(2)]);
var inst_22112__$1 = cljs.core.nth.call(null,inst_22111__$1,(0),null);
var inst_22113 = cljs.core.nth.call(null,inst_22111__$1,(1),null);
var inst_22114 = (inst_22112__$1 == null);
var state_22132__$1 = (function (){var statearr_22134 = state_22132;
(statearr_22134[(7)] = inst_22112__$1);

(statearr_22134[(8)] = inst_22111__$1);

(statearr_22134[(9)] = inst_22113);

return statearr_22134;
})();
if(cljs.core.truth_(inst_22114)){
var statearr_22135_22157 = state_22132__$1;
(statearr_22135_22157[(1)] = (8));

} else {
var statearr_22136_22158 = state_22132__$1;
(statearr_22136_22158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (1))){
var inst_22103 = cljs.core.vec.call(null,chs);
var inst_22104 = inst_22103;
var state_22132__$1 = (function (){var statearr_22137 = state_22132;
(statearr_22137[(10)] = inst_22104);

return statearr_22137;
})();
var statearr_22138_22159 = state_22132__$1;
(statearr_22138_22159[(2)] = null);

(statearr_22138_22159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (4))){
var inst_22104 = (state_22132[(10)]);
var state_22132__$1 = state_22132;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22132__$1,(7),inst_22104);
} else {
if((state_val_22133 === (6))){
var inst_22128 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22139_22160 = state_22132__$1;
(statearr_22139_22160[(2)] = inst_22128);

(statearr_22139_22160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (3))){
var inst_22130 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22132__$1,inst_22130);
} else {
if((state_val_22133 === (2))){
var inst_22104 = (state_22132[(10)]);
var inst_22106 = cljs.core.count.call(null,inst_22104);
var inst_22107 = (inst_22106 > (0));
var state_22132__$1 = state_22132;
if(cljs.core.truth_(inst_22107)){
var statearr_22141_22161 = state_22132__$1;
(statearr_22141_22161[(1)] = (4));

} else {
var statearr_22142_22162 = state_22132__$1;
(statearr_22142_22162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (11))){
var inst_22104 = (state_22132[(10)]);
var inst_22121 = (state_22132[(2)]);
var tmp22140 = inst_22104;
var inst_22104__$1 = tmp22140;
var state_22132__$1 = (function (){var statearr_22143 = state_22132;
(statearr_22143[(10)] = inst_22104__$1);

(statearr_22143[(11)] = inst_22121);

return statearr_22143;
})();
var statearr_22144_22163 = state_22132__$1;
(statearr_22144_22163[(2)] = null);

(statearr_22144_22163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (9))){
var inst_22112 = (state_22132[(7)]);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22132__$1,(11),out,inst_22112);
} else {
if((state_val_22133 === (5))){
var inst_22126 = cljs.core.async.close_BANG_.call(null,out);
var state_22132__$1 = state_22132;
var statearr_22145_22164 = state_22132__$1;
(statearr_22145_22164[(2)] = inst_22126);

(statearr_22145_22164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (10))){
var inst_22124 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
var statearr_22146_22165 = state_22132__$1;
(statearr_22146_22165[(2)] = inst_22124);

(statearr_22146_22165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22133 === (8))){
var inst_22112 = (state_22132[(7)]);
var inst_22111 = (state_22132[(8)]);
var inst_22104 = (state_22132[(10)]);
var inst_22113 = (state_22132[(9)]);
var inst_22116 = (function (){var c = inst_22113;
var v = inst_22112;
var vec__22109 = inst_22111;
var cs = inst_22104;
return ((function (c,v,vec__22109,cs,inst_22112,inst_22111,inst_22104,inst_22113,state_val_22133,c__12975__auto___22156,out){
return (function (p1__22049_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22049_SHARP_);
});
;})(c,v,vec__22109,cs,inst_22112,inst_22111,inst_22104,inst_22113,state_val_22133,c__12975__auto___22156,out))
})();
var inst_22117 = cljs.core.filterv.call(null,inst_22116,inst_22104);
var inst_22104__$1 = inst_22117;
var state_22132__$1 = (function (){var statearr_22147 = state_22132;
(statearr_22147[(10)] = inst_22104__$1);

return statearr_22147;
})();
var statearr_22148_22166 = state_22132__$1;
(statearr_22148_22166[(2)] = null);

(statearr_22148_22166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__12975__auto___22156,out))
;
return ((function (switch__12919__auto__,c__12975__auto___22156,out){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_22152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22152[(0)] = state_machine__12920__auto__);

(statearr_22152[(1)] = (1));

return statearr_22152;
});
var state_machine__12920__auto____1 = (function (state_22132){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_22132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e22153){if((e22153 instanceof Object)){
var ex__12923__auto__ = e22153;
var statearr_22154_22167 = state_22132;
(statearr_22154_22167[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22168 = state_22132;
state_22132 = G__22168;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_22132){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_22132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___22156,out))
})();
var state__12977__auto__ = (function (){var statearr_22155 = f__12976__auto__.call(null);
(statearr_22155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___22156);

return statearr_22155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___22156,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12975__auto___22261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___22261,out){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___22261,out){
return (function (state_22238){
var state_val_22239 = (state_22238[(1)]);
if((state_val_22239 === (7))){
var inst_22220 = (state_22238[(7)]);
var inst_22220__$1 = (state_22238[(2)]);
var inst_22221 = (inst_22220__$1 == null);
var inst_22222 = cljs.core.not.call(null,inst_22221);
var state_22238__$1 = (function (){var statearr_22240 = state_22238;
(statearr_22240[(7)] = inst_22220__$1);

return statearr_22240;
})();
if(inst_22222){
var statearr_22241_22262 = state_22238__$1;
(statearr_22241_22262[(1)] = (8));

} else {
var statearr_22242_22263 = state_22238__$1;
(statearr_22242_22263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (1))){
var inst_22215 = (0);
var state_22238__$1 = (function (){var statearr_22243 = state_22238;
(statearr_22243[(8)] = inst_22215);

return statearr_22243;
})();
var statearr_22244_22264 = state_22238__$1;
(statearr_22244_22264[(2)] = null);

(statearr_22244_22264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (4))){
var state_22238__$1 = state_22238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22238__$1,(7),ch);
} else {
if((state_val_22239 === (6))){
var inst_22233 = (state_22238[(2)]);
var state_22238__$1 = state_22238;
var statearr_22245_22265 = state_22238__$1;
(statearr_22245_22265[(2)] = inst_22233);

(statearr_22245_22265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (3))){
var inst_22235 = (state_22238[(2)]);
var inst_22236 = cljs.core.async.close_BANG_.call(null,out);
var state_22238__$1 = (function (){var statearr_22246 = state_22238;
(statearr_22246[(9)] = inst_22235);

return statearr_22246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22238__$1,inst_22236);
} else {
if((state_val_22239 === (2))){
var inst_22215 = (state_22238[(8)]);
var inst_22217 = (inst_22215 < n);
var state_22238__$1 = state_22238;
if(cljs.core.truth_(inst_22217)){
var statearr_22247_22266 = state_22238__$1;
(statearr_22247_22266[(1)] = (4));

} else {
var statearr_22248_22267 = state_22238__$1;
(statearr_22248_22267[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (11))){
var inst_22215 = (state_22238[(8)]);
var inst_22225 = (state_22238[(2)]);
var inst_22226 = (inst_22215 + (1));
var inst_22215__$1 = inst_22226;
var state_22238__$1 = (function (){var statearr_22249 = state_22238;
(statearr_22249[(8)] = inst_22215__$1);

(statearr_22249[(10)] = inst_22225);

return statearr_22249;
})();
var statearr_22250_22268 = state_22238__$1;
(statearr_22250_22268[(2)] = null);

(statearr_22250_22268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (9))){
var state_22238__$1 = state_22238;
var statearr_22251_22269 = state_22238__$1;
(statearr_22251_22269[(2)] = null);

(statearr_22251_22269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (5))){
var state_22238__$1 = state_22238;
var statearr_22252_22270 = state_22238__$1;
(statearr_22252_22270[(2)] = null);

(statearr_22252_22270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (10))){
var inst_22230 = (state_22238[(2)]);
var state_22238__$1 = state_22238;
var statearr_22253_22271 = state_22238__$1;
(statearr_22253_22271[(2)] = inst_22230);

(statearr_22253_22271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22239 === (8))){
var inst_22220 = (state_22238[(7)]);
var state_22238__$1 = state_22238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22238__$1,(11),out,inst_22220);
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
});})(c__12975__auto___22261,out))
;
return ((function (switch__12919__auto__,c__12975__auto___22261,out){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_22257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22257[(0)] = state_machine__12920__auto__);

(statearr_22257[(1)] = (1));

return statearr_22257;
});
var state_machine__12920__auto____1 = (function (state_22238){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_22238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e22258){if((e22258 instanceof Object)){
var ex__12923__auto__ = e22258;
var statearr_22259_22272 = state_22238;
(statearr_22259_22272[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22273 = state_22238;
state_22238 = G__22273;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_22238){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_22238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___22261,out))
})();
var state__12977__auto__ = (function (){var statearr_22260 = f__12976__auto__.call(null);
(statearr_22260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___22261);

return statearr_22260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___22261,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t22281 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22281 = (function (ch,f,map_LT_,meta22282){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22282 = meta22282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22281.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22281.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22284 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22284 = (function (fn1,_,meta22282,map_LT_,f,ch,meta22285){
this.fn1 = fn1;
this._ = _;
this.meta22282 = meta22282;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22285 = meta22285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22284.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22274_SHARP_){
return f1.call(null,(((p1__22274_SHARP_ == null))?null:self__.f.call(null,p1__22274_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22286){
var self__ = this;
var _22286__$1 = this;
return self__.meta22285;
});})(___$1))
;

cljs.core.async.t22284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22286,meta22285__$1){
var self__ = this;
var _22286__$1 = this;
return (new cljs.core.async.t22284(self__.fn1,self__._,self__.meta22282,self__.map_LT_,self__.f,self__.ch,meta22285__$1));
});})(___$1))
;

cljs.core.async.t22284.cljs$lang$type = true;

cljs.core.async.t22284.cljs$lang$ctorStr = "cljs.core.async/t22284";

cljs.core.async.t22284.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t22284");
});})(___$1))
;

cljs.core.async.__GT_t22284 = ((function (___$1){
return (function __GT_t22284(fn1__$1,___$2,meta22282__$1,map_LT___$1,f__$1,ch__$1,meta22285){
return (new cljs.core.async.t22284(fn1__$1,___$2,meta22282__$1,map_LT___$1,f__$1,ch__$1,meta22285));
});})(___$1))
;

}

return (new cljs.core.async.t22284(fn1,___$1,self__.meta22282,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__9185__auto__ = ret;
if(cljs.core.truth_(and__9185__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9185__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t22281.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22283){
var self__ = this;
var _22283__$1 = this;
return self__.meta22282;
});

cljs.core.async.t22281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22283,meta22282__$1){
var self__ = this;
var _22283__$1 = this;
return (new cljs.core.async.t22281(self__.ch,self__.f,self__.map_LT_,meta22282__$1));
});

cljs.core.async.t22281.cljs$lang$type = true;

cljs.core.async.t22281.cljs$lang$ctorStr = "cljs.core.async/t22281";

cljs.core.async.t22281.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t22281");
});

cljs.core.async.__GT_t22281 = (function __GT_t22281(ch__$1,f__$1,map_LT___$1,meta22282){
return (new cljs.core.async.t22281(ch__$1,f__$1,map_LT___$1,meta22282));
});

}

return (new cljs.core.async.t22281(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22290 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22290 = (function (ch,f,map_GT_,meta22291){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22291 = meta22291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22290.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22290.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22290.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22292){
var self__ = this;
var _22292__$1 = this;
return self__.meta22291;
});

cljs.core.async.t22290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22292,meta22291__$1){
var self__ = this;
var _22292__$1 = this;
return (new cljs.core.async.t22290(self__.ch,self__.f,self__.map_GT_,meta22291__$1));
});

cljs.core.async.t22290.cljs$lang$type = true;

cljs.core.async.t22290.cljs$lang$ctorStr = "cljs.core.async/t22290";

cljs.core.async.t22290.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t22290");
});

cljs.core.async.__GT_t22290 = (function __GT_t22290(ch__$1,f__$1,map_GT___$1,meta22291){
return (new cljs.core.async.t22290(ch__$1,f__$1,map_GT___$1,meta22291));
});

}

return (new cljs.core.async.t22290(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22296 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22296 = (function (ch,p,filter_GT_,meta22297){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22297 = meta22297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22296.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22298){
var self__ = this;
var _22298__$1 = this;
return self__.meta22297;
});

cljs.core.async.t22296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22298,meta22297__$1){
var self__ = this;
var _22298__$1 = this;
return (new cljs.core.async.t22296(self__.ch,self__.p,self__.filter_GT_,meta22297__$1));
});

cljs.core.async.t22296.cljs$lang$type = true;

cljs.core.async.t22296.cljs$lang$ctorStr = "cljs.core.async/t22296";

cljs.core.async.t22296.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"cljs.core.async/t22296");
});

cljs.core.async.__GT_t22296 = (function __GT_t22296(ch__$1,p__$1,filter_GT___$1,meta22297){
return (new cljs.core.async.t22296(ch__$1,p__$1,filter_GT___$1,meta22297));
});

}

return (new cljs.core.async.t22296(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/dev/src/cljs/play/datascript-todo/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12975__auto___22381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___22381,out){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___22381,out){
return (function (state_22360){
var state_val_22361 = (state_22360[(1)]);
if((state_val_22361 === (7))){
var inst_22356 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22362_22382 = state_22360__$1;
(statearr_22362_22382[(2)] = inst_22356);

(statearr_22362_22382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (1))){
var state_22360__$1 = state_22360;
var statearr_22363_22383 = state_22360__$1;
(statearr_22363_22383[(2)] = null);

(statearr_22363_22383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (4))){
var inst_22342 = (state_22360[(7)]);
var inst_22342__$1 = (state_22360[(2)]);
var inst_22343 = (inst_22342__$1 == null);
var state_22360__$1 = (function (){var statearr_22364 = state_22360;
(statearr_22364[(7)] = inst_22342__$1);

return statearr_22364;
})();
if(cljs.core.truth_(inst_22343)){
var statearr_22365_22384 = state_22360__$1;
(statearr_22365_22384[(1)] = (5));

} else {
var statearr_22366_22385 = state_22360__$1;
(statearr_22366_22385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (6))){
var inst_22342 = (state_22360[(7)]);
var inst_22347 = p.call(null,inst_22342);
var state_22360__$1 = state_22360;
if(cljs.core.truth_(inst_22347)){
var statearr_22367_22386 = state_22360__$1;
(statearr_22367_22386[(1)] = (8));

} else {
var statearr_22368_22387 = state_22360__$1;
(statearr_22368_22387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (3))){
var inst_22358 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22360__$1,inst_22358);
} else {
if((state_val_22361 === (2))){
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22360__$1,(4),ch);
} else {
if((state_val_22361 === (11))){
var inst_22350 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22369_22388 = state_22360__$1;
(statearr_22369_22388[(2)] = inst_22350);

(statearr_22369_22388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (9))){
var state_22360__$1 = state_22360;
var statearr_22370_22389 = state_22360__$1;
(statearr_22370_22389[(2)] = null);

(statearr_22370_22389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (5))){
var inst_22345 = cljs.core.async.close_BANG_.call(null,out);
var state_22360__$1 = state_22360;
var statearr_22371_22390 = state_22360__$1;
(statearr_22371_22390[(2)] = inst_22345);

(statearr_22371_22390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (10))){
var inst_22353 = (state_22360[(2)]);
var state_22360__$1 = (function (){var statearr_22372 = state_22360;
(statearr_22372[(8)] = inst_22353);

return statearr_22372;
})();
var statearr_22373_22391 = state_22360__$1;
(statearr_22373_22391[(2)] = null);

(statearr_22373_22391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (8))){
var inst_22342 = (state_22360[(7)]);
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22360__$1,(11),out,inst_22342);
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
});})(c__12975__auto___22381,out))
;
return ((function (switch__12919__auto__,c__12975__auto___22381,out){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_22377 = [null,null,null,null,null,null,null,null,null];
(statearr_22377[(0)] = state_machine__12920__auto__);

(statearr_22377[(1)] = (1));

return statearr_22377;
});
var state_machine__12920__auto____1 = (function (state_22360){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_22360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e22378){if((e22378 instanceof Object)){
var ex__12923__auto__ = e22378;
var statearr_22379_22392 = state_22360;
(statearr_22379_22392[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22393 = state_22360;
state_22360 = G__22393;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_22360){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_22360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___22381,out))
})();
var state__12977__auto__ = (function (){var statearr_22380 = f__12976__auto__.call(null);
(statearr_22380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___22381);

return statearr_22380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___22381,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__){
return (function (state_22559){
var state_val_22560 = (state_22559[(1)]);
if((state_val_22560 === (7))){
var inst_22555 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22561_22602 = state_22559__$1;
(statearr_22561_22602[(2)] = inst_22555);

(statearr_22561_22602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (20))){
var inst_22525 = (state_22559[(7)]);
var inst_22536 = (state_22559[(2)]);
var inst_22537 = cljs.core.next.call(null,inst_22525);
var inst_22511 = inst_22537;
var inst_22512 = null;
var inst_22513 = (0);
var inst_22514 = (0);
var state_22559__$1 = (function (){var statearr_22562 = state_22559;
(statearr_22562[(8)] = inst_22511);

(statearr_22562[(9)] = inst_22512);

(statearr_22562[(10)] = inst_22514);

(statearr_22562[(11)] = inst_22513);

(statearr_22562[(12)] = inst_22536);

return statearr_22562;
})();
var statearr_22563_22603 = state_22559__$1;
(statearr_22563_22603[(2)] = null);

(statearr_22563_22603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (1))){
var state_22559__$1 = state_22559;
var statearr_22564_22604 = state_22559__$1;
(statearr_22564_22604[(2)] = null);

(statearr_22564_22604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (4))){
var inst_22500 = (state_22559[(13)]);
var inst_22500__$1 = (state_22559[(2)]);
var inst_22501 = (inst_22500__$1 == null);
var state_22559__$1 = (function (){var statearr_22565 = state_22559;
(statearr_22565[(13)] = inst_22500__$1);

return statearr_22565;
})();
if(cljs.core.truth_(inst_22501)){
var statearr_22566_22605 = state_22559__$1;
(statearr_22566_22605[(1)] = (5));

} else {
var statearr_22567_22606 = state_22559__$1;
(statearr_22567_22606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (15))){
var state_22559__$1 = state_22559;
var statearr_22571_22607 = state_22559__$1;
(statearr_22571_22607[(2)] = null);

(statearr_22571_22607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (21))){
var state_22559__$1 = state_22559;
var statearr_22572_22608 = state_22559__$1;
(statearr_22572_22608[(2)] = null);

(statearr_22572_22608[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (13))){
var inst_22511 = (state_22559[(8)]);
var inst_22512 = (state_22559[(9)]);
var inst_22514 = (state_22559[(10)]);
var inst_22513 = (state_22559[(11)]);
var inst_22521 = (state_22559[(2)]);
var inst_22522 = (inst_22514 + (1));
var tmp22568 = inst_22511;
var tmp22569 = inst_22512;
var tmp22570 = inst_22513;
var inst_22511__$1 = tmp22568;
var inst_22512__$1 = tmp22569;
var inst_22513__$1 = tmp22570;
var inst_22514__$1 = inst_22522;
var state_22559__$1 = (function (){var statearr_22573 = state_22559;
(statearr_22573[(8)] = inst_22511__$1);

(statearr_22573[(9)] = inst_22512__$1);

(statearr_22573[(10)] = inst_22514__$1);

(statearr_22573[(11)] = inst_22513__$1);

(statearr_22573[(14)] = inst_22521);

return statearr_22573;
})();
var statearr_22574_22609 = state_22559__$1;
(statearr_22574_22609[(2)] = null);

(statearr_22574_22609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (22))){
var state_22559__$1 = state_22559;
var statearr_22575_22610 = state_22559__$1;
(statearr_22575_22610[(2)] = null);

(statearr_22575_22610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (6))){
var inst_22500 = (state_22559[(13)]);
var inst_22509 = f.call(null,inst_22500);
var inst_22510 = cljs.core.seq.call(null,inst_22509);
var inst_22511 = inst_22510;
var inst_22512 = null;
var inst_22513 = (0);
var inst_22514 = (0);
var state_22559__$1 = (function (){var statearr_22576 = state_22559;
(statearr_22576[(8)] = inst_22511);

(statearr_22576[(9)] = inst_22512);

(statearr_22576[(10)] = inst_22514);

(statearr_22576[(11)] = inst_22513);

return statearr_22576;
})();
var statearr_22577_22611 = state_22559__$1;
(statearr_22577_22611[(2)] = null);

(statearr_22577_22611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (17))){
var inst_22525 = (state_22559[(7)]);
var inst_22529 = cljs.core.chunk_first.call(null,inst_22525);
var inst_22530 = cljs.core.chunk_rest.call(null,inst_22525);
var inst_22531 = cljs.core.count.call(null,inst_22529);
var inst_22511 = inst_22530;
var inst_22512 = inst_22529;
var inst_22513 = inst_22531;
var inst_22514 = (0);
var state_22559__$1 = (function (){var statearr_22578 = state_22559;
(statearr_22578[(8)] = inst_22511);

(statearr_22578[(9)] = inst_22512);

(statearr_22578[(10)] = inst_22514);

(statearr_22578[(11)] = inst_22513);

return statearr_22578;
})();
var statearr_22579_22612 = state_22559__$1;
(statearr_22579_22612[(2)] = null);

(statearr_22579_22612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (3))){
var inst_22557 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22559__$1,inst_22557);
} else {
if((state_val_22560 === (12))){
var inst_22545 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22580_22613 = state_22559__$1;
(statearr_22580_22613[(2)] = inst_22545);

(statearr_22580_22613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (2))){
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22559__$1,(4),in$);
} else {
if((state_val_22560 === (23))){
var inst_22553 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22581_22614 = state_22559__$1;
(statearr_22581_22614[(2)] = inst_22553);

(statearr_22581_22614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (19))){
var inst_22540 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22582_22615 = state_22559__$1;
(statearr_22582_22615[(2)] = inst_22540);

(statearr_22582_22615[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (11))){
var inst_22511 = (state_22559[(8)]);
var inst_22525 = (state_22559[(7)]);
var inst_22525__$1 = cljs.core.seq.call(null,inst_22511);
var state_22559__$1 = (function (){var statearr_22583 = state_22559;
(statearr_22583[(7)] = inst_22525__$1);

return statearr_22583;
})();
if(inst_22525__$1){
var statearr_22584_22616 = state_22559__$1;
(statearr_22584_22616[(1)] = (14));

} else {
var statearr_22585_22617 = state_22559__$1;
(statearr_22585_22617[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (9))){
var inst_22547 = (state_22559[(2)]);
var inst_22548 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22559__$1 = (function (){var statearr_22586 = state_22559;
(statearr_22586[(15)] = inst_22547);

return statearr_22586;
})();
if(cljs.core.truth_(inst_22548)){
var statearr_22587_22618 = state_22559__$1;
(statearr_22587_22618[(1)] = (21));

} else {
var statearr_22588_22619 = state_22559__$1;
(statearr_22588_22619[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (5))){
var inst_22503 = cljs.core.async.close_BANG_.call(null,out);
var state_22559__$1 = state_22559;
var statearr_22589_22620 = state_22559__$1;
(statearr_22589_22620[(2)] = inst_22503);

(statearr_22589_22620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (14))){
var inst_22525 = (state_22559[(7)]);
var inst_22527 = cljs.core.chunked_seq_QMARK_.call(null,inst_22525);
var state_22559__$1 = state_22559;
if(inst_22527){
var statearr_22590_22621 = state_22559__$1;
(statearr_22590_22621[(1)] = (17));

} else {
var statearr_22591_22622 = state_22559__$1;
(statearr_22591_22622[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (16))){
var inst_22543 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22592_22623 = state_22559__$1;
(statearr_22592_22623[(2)] = inst_22543);

(statearr_22592_22623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (10))){
var inst_22512 = (state_22559[(9)]);
var inst_22514 = (state_22559[(10)]);
var inst_22519 = cljs.core._nth.call(null,inst_22512,inst_22514);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22559__$1,(13),out,inst_22519);
} else {
if((state_val_22560 === (18))){
var inst_22525 = (state_22559[(7)]);
var inst_22534 = cljs.core.first.call(null,inst_22525);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22559__$1,(20),out,inst_22534);
} else {
if((state_val_22560 === (8))){
var inst_22514 = (state_22559[(10)]);
var inst_22513 = (state_22559[(11)]);
var inst_22516 = (inst_22514 < inst_22513);
var inst_22517 = inst_22516;
var state_22559__$1 = state_22559;
if(cljs.core.truth_(inst_22517)){
var statearr_22593_22624 = state_22559__$1;
(statearr_22593_22624[(1)] = (10));

} else {
var statearr_22594_22625 = state_22559__$1;
(statearr_22594_22625[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__12975__auto__))
;
return ((function (switch__12919__auto__,c__12975__auto__){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_22598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22598[(0)] = state_machine__12920__auto__);

(statearr_22598[(1)] = (1));

return statearr_22598;
});
var state_machine__12920__auto____1 = (function (state_22559){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_22559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e22599){if((e22599 instanceof Object)){
var ex__12923__auto__ = e22599;
var statearr_22600_22626 = state_22559;
(statearr_22600_22626[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22627 = state_22559;
state_22559 = G__22627;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_22559){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_22559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__))
})();
var state__12977__auto__ = (function (){var statearr_22601 = f__12976__auto__.call(null);
(statearr_22601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_22601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__))
);

return c__12975__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12975__auto___22724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___22724,out){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___22724,out){
return (function (state_22699){
var state_val_22700 = (state_22699[(1)]);
if((state_val_22700 === (7))){
var inst_22694 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
var statearr_22701_22725 = state_22699__$1;
(statearr_22701_22725[(2)] = inst_22694);

(statearr_22701_22725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22700 === (1))){
var inst_22676 = null;
var state_22699__$1 = (function (){var statearr_22702 = state_22699;
(statearr_22702[(7)] = inst_22676);

return statearr_22702;
})();
var statearr_22703_22726 = state_22699__$1;
(statearr_22703_22726[(2)] = null);

(statearr_22703_22726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22700 === (4))){
var inst_22679 = (state_22699[(8)]);
var inst_22679__$1 = (state_22699[(2)]);
var inst_22680 = (inst_22679__$1 == null);
var inst_22681 = cljs.core.not.call(null,inst_22680);
var state_22699__$1 = (function (){var statearr_22704 = state_22699;
(statearr_22704[(8)] = inst_22679__$1);

return statearr_22704;
})();
if(inst_22681){
var statearr_22705_22727 = state_22699__$1;
(statearr_22705_22727[(1)] = (5));

} else {
var statearr_22706_22728 = state_22699__$1;
(statearr_22706_22728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22700 === (6))){
var state_22699__$1 = state_22699;
var statearr_22707_22729 = state_22699__$1;
(statearr_22707_22729[(2)] = null);

(statearr_22707_22729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22700 === (3))){
var inst_22696 = (state_22699[(2)]);
var inst_22697 = cljs.core.async.close_BANG_.call(null,out);
var state_22699__$1 = (function (){var statearr_22708 = state_22699;
(statearr_22708[(9)] = inst_22696);

return statearr_22708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22699__$1,inst_22697);
} else {
if((state_val_22700 === (2))){
var state_22699__$1 = state_22699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22699__$1,(4),ch);
} else {
if((state_val_22700 === (11))){
var inst_22679 = (state_22699[(8)]);
var inst_22688 = (state_22699[(2)]);
var inst_22676 = inst_22679;
var state_22699__$1 = (function (){var statearr_22709 = state_22699;
(statearr_22709[(7)] = inst_22676);

(statearr_22709[(10)] = inst_22688);

return statearr_22709;
})();
var statearr_22710_22730 = state_22699__$1;
(statearr_22710_22730[(2)] = null);

(statearr_22710_22730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22700 === (9))){
var inst_22679 = (state_22699[(8)]);
var state_22699__$1 = state_22699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22699__$1,(11),out,inst_22679);
} else {
if((state_val_22700 === (5))){
var inst_22679 = (state_22699[(8)]);
var inst_22676 = (state_22699[(7)]);
var inst_22683 = cljs.core._EQ_.call(null,inst_22679,inst_22676);
var state_22699__$1 = state_22699;
if(inst_22683){
var statearr_22712_22731 = state_22699__$1;
(statearr_22712_22731[(1)] = (8));

} else {
var statearr_22713_22732 = state_22699__$1;
(statearr_22713_22732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22700 === (10))){
var inst_22691 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
var statearr_22714_22733 = state_22699__$1;
(statearr_22714_22733[(2)] = inst_22691);

(statearr_22714_22733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22700 === (8))){
var inst_22676 = (state_22699[(7)]);
var tmp22711 = inst_22676;
var inst_22676__$1 = tmp22711;
var state_22699__$1 = (function (){var statearr_22715 = state_22699;
(statearr_22715[(7)] = inst_22676__$1);

return statearr_22715;
})();
var statearr_22716_22734 = state_22699__$1;
(statearr_22716_22734[(2)] = null);

(statearr_22716_22734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__12975__auto___22724,out))
;
return ((function (switch__12919__auto__,c__12975__auto___22724,out){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_22720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22720[(0)] = state_machine__12920__auto__);

(statearr_22720[(1)] = (1));

return statearr_22720;
});
var state_machine__12920__auto____1 = (function (state_22699){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_22699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e22721){if((e22721 instanceof Object)){
var ex__12923__auto__ = e22721;
var statearr_22722_22735 = state_22699;
(statearr_22722_22735[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22736 = state_22699;
state_22699 = G__22736;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_22699){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_22699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___22724,out))
})();
var state__12977__auto__ = (function (){var statearr_22723 = f__12976__auto__.call(null);
(statearr_22723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___22724);

return statearr_22723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___22724,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12975__auto___22871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___22871,out){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___22871,out){
return (function (state_22841){
var state_val_22842 = (state_22841[(1)]);
if((state_val_22842 === (7))){
var inst_22837 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22843_22872 = state_22841__$1;
(statearr_22843_22872[(2)] = inst_22837);

(statearr_22843_22872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (1))){
var inst_22804 = (new Array(n));
var inst_22805 = inst_22804;
var inst_22806 = (0);
var state_22841__$1 = (function (){var statearr_22844 = state_22841;
(statearr_22844[(7)] = inst_22805);

(statearr_22844[(8)] = inst_22806);

return statearr_22844;
})();
var statearr_22845_22873 = state_22841__$1;
(statearr_22845_22873[(2)] = null);

(statearr_22845_22873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (4))){
var inst_22809 = (state_22841[(9)]);
var inst_22809__$1 = (state_22841[(2)]);
var inst_22810 = (inst_22809__$1 == null);
var inst_22811 = cljs.core.not.call(null,inst_22810);
var state_22841__$1 = (function (){var statearr_22846 = state_22841;
(statearr_22846[(9)] = inst_22809__$1);

return statearr_22846;
})();
if(inst_22811){
var statearr_22847_22874 = state_22841__$1;
(statearr_22847_22874[(1)] = (5));

} else {
var statearr_22848_22875 = state_22841__$1;
(statearr_22848_22875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (15))){
var inst_22831 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22849_22876 = state_22841__$1;
(statearr_22849_22876[(2)] = inst_22831);

(statearr_22849_22876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (13))){
var state_22841__$1 = state_22841;
var statearr_22850_22877 = state_22841__$1;
(statearr_22850_22877[(2)] = null);

(statearr_22850_22877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (6))){
var inst_22806 = (state_22841[(8)]);
var inst_22827 = (inst_22806 > (0));
var state_22841__$1 = state_22841;
if(cljs.core.truth_(inst_22827)){
var statearr_22851_22878 = state_22841__$1;
(statearr_22851_22878[(1)] = (12));

} else {
var statearr_22852_22879 = state_22841__$1;
(statearr_22852_22879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (3))){
var inst_22839 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22841__$1,inst_22839);
} else {
if((state_val_22842 === (12))){
var inst_22805 = (state_22841[(7)]);
var inst_22829 = cljs.core.vec.call(null,inst_22805);
var state_22841__$1 = state_22841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22841__$1,(15),out,inst_22829);
} else {
if((state_val_22842 === (2))){
var state_22841__$1 = state_22841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22841__$1,(4),ch);
} else {
if((state_val_22842 === (11))){
var inst_22821 = (state_22841[(2)]);
var inst_22822 = (new Array(n));
var inst_22805 = inst_22822;
var inst_22806 = (0);
var state_22841__$1 = (function (){var statearr_22853 = state_22841;
(statearr_22853[(7)] = inst_22805);

(statearr_22853[(8)] = inst_22806);

(statearr_22853[(10)] = inst_22821);

return statearr_22853;
})();
var statearr_22854_22880 = state_22841__$1;
(statearr_22854_22880[(2)] = null);

(statearr_22854_22880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (9))){
var inst_22805 = (state_22841[(7)]);
var inst_22819 = cljs.core.vec.call(null,inst_22805);
var state_22841__$1 = state_22841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22841__$1,(11),out,inst_22819);
} else {
if((state_val_22842 === (5))){
var inst_22805 = (state_22841[(7)]);
var inst_22809 = (state_22841[(9)]);
var inst_22806 = (state_22841[(8)]);
var inst_22814 = (state_22841[(11)]);
var inst_22813 = (inst_22805[inst_22806] = inst_22809);
var inst_22814__$1 = (inst_22806 + (1));
var inst_22815 = (inst_22814__$1 < n);
var state_22841__$1 = (function (){var statearr_22855 = state_22841;
(statearr_22855[(12)] = inst_22813);

(statearr_22855[(11)] = inst_22814__$1);

return statearr_22855;
})();
if(cljs.core.truth_(inst_22815)){
var statearr_22856_22881 = state_22841__$1;
(statearr_22856_22881[(1)] = (8));

} else {
var statearr_22857_22882 = state_22841__$1;
(statearr_22857_22882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (14))){
var inst_22834 = (state_22841[(2)]);
var inst_22835 = cljs.core.async.close_BANG_.call(null,out);
var state_22841__$1 = (function (){var statearr_22859 = state_22841;
(statearr_22859[(13)] = inst_22834);

return statearr_22859;
})();
var statearr_22860_22883 = state_22841__$1;
(statearr_22860_22883[(2)] = inst_22835);

(statearr_22860_22883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (10))){
var inst_22825 = (state_22841[(2)]);
var state_22841__$1 = state_22841;
var statearr_22861_22884 = state_22841__$1;
(statearr_22861_22884[(2)] = inst_22825);

(statearr_22861_22884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22842 === (8))){
var inst_22805 = (state_22841[(7)]);
var inst_22814 = (state_22841[(11)]);
var tmp22858 = inst_22805;
var inst_22805__$1 = tmp22858;
var inst_22806 = inst_22814;
var state_22841__$1 = (function (){var statearr_22862 = state_22841;
(statearr_22862[(7)] = inst_22805__$1);

(statearr_22862[(8)] = inst_22806);

return statearr_22862;
})();
var statearr_22863_22885 = state_22841__$1;
(statearr_22863_22885[(2)] = null);

(statearr_22863_22885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__12975__auto___22871,out))
;
return ((function (switch__12919__auto__,c__12975__auto___22871,out){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_22867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22867[(0)] = state_machine__12920__auto__);

(statearr_22867[(1)] = (1));

return statearr_22867;
});
var state_machine__12920__auto____1 = (function (state_22841){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_22841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e22868){if((e22868 instanceof Object)){
var ex__12923__auto__ = e22868;
var statearr_22869_22886 = state_22841;
(statearr_22869_22886[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22887 = state_22841;
state_22841 = G__22887;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_22841){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_22841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___22871,out))
})();
var state__12977__auto__ = (function (){var statearr_22870 = f__12976__auto__.call(null);
(statearr_22870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___22871);

return statearr_22870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___22871,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12975__auto___23030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___23030,out){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___23030,out){
return (function (state_23000){
var state_val_23001 = (state_23000[(1)]);
if((state_val_23001 === (7))){
var inst_22996 = (state_23000[(2)]);
var state_23000__$1 = state_23000;
var statearr_23002_23031 = state_23000__$1;
(statearr_23002_23031[(2)] = inst_22996);

(statearr_23002_23031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (1))){
var inst_22959 = [];
var inst_22960 = inst_22959;
var inst_22961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23000__$1 = (function (){var statearr_23003 = state_23000;
(statearr_23003[(7)] = inst_22961);

(statearr_23003[(8)] = inst_22960);

return statearr_23003;
})();
var statearr_23004_23032 = state_23000__$1;
(statearr_23004_23032[(2)] = null);

(statearr_23004_23032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (4))){
var inst_22964 = (state_23000[(9)]);
var inst_22964__$1 = (state_23000[(2)]);
var inst_22965 = (inst_22964__$1 == null);
var inst_22966 = cljs.core.not.call(null,inst_22965);
var state_23000__$1 = (function (){var statearr_23005 = state_23000;
(statearr_23005[(9)] = inst_22964__$1);

return statearr_23005;
})();
if(inst_22966){
var statearr_23006_23033 = state_23000__$1;
(statearr_23006_23033[(1)] = (5));

} else {
var statearr_23007_23034 = state_23000__$1;
(statearr_23007_23034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (15))){
var inst_22990 = (state_23000[(2)]);
var state_23000__$1 = state_23000;
var statearr_23008_23035 = state_23000__$1;
(statearr_23008_23035[(2)] = inst_22990);

(statearr_23008_23035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (13))){
var state_23000__$1 = state_23000;
var statearr_23009_23036 = state_23000__$1;
(statearr_23009_23036[(2)] = null);

(statearr_23009_23036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (6))){
var inst_22960 = (state_23000[(8)]);
var inst_22985 = inst_22960.length;
var inst_22986 = (inst_22985 > (0));
var state_23000__$1 = state_23000;
if(cljs.core.truth_(inst_22986)){
var statearr_23010_23037 = state_23000__$1;
(statearr_23010_23037[(1)] = (12));

} else {
var statearr_23011_23038 = state_23000__$1;
(statearr_23011_23038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (3))){
var inst_22998 = (state_23000[(2)]);
var state_23000__$1 = state_23000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23000__$1,inst_22998);
} else {
if((state_val_23001 === (12))){
var inst_22960 = (state_23000[(8)]);
var inst_22988 = cljs.core.vec.call(null,inst_22960);
var state_23000__$1 = state_23000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23000__$1,(15),out,inst_22988);
} else {
if((state_val_23001 === (2))){
var state_23000__$1 = state_23000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23000__$1,(4),ch);
} else {
if((state_val_23001 === (11))){
var inst_22968 = (state_23000[(10)]);
var inst_22964 = (state_23000[(9)]);
var inst_22978 = (state_23000[(2)]);
var inst_22979 = [];
var inst_22980 = inst_22979.push(inst_22964);
var inst_22960 = inst_22979;
var inst_22961 = inst_22968;
var state_23000__$1 = (function (){var statearr_23012 = state_23000;
(statearr_23012[(7)] = inst_22961);

(statearr_23012[(11)] = inst_22980);

(statearr_23012[(12)] = inst_22978);

(statearr_23012[(8)] = inst_22960);

return statearr_23012;
})();
var statearr_23013_23039 = state_23000__$1;
(statearr_23013_23039[(2)] = null);

(statearr_23013_23039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (9))){
var inst_22960 = (state_23000[(8)]);
var inst_22976 = cljs.core.vec.call(null,inst_22960);
var state_23000__$1 = state_23000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23000__$1,(11),out,inst_22976);
} else {
if((state_val_23001 === (5))){
var inst_22961 = (state_23000[(7)]);
var inst_22968 = (state_23000[(10)]);
var inst_22964 = (state_23000[(9)]);
var inst_22968__$1 = f.call(null,inst_22964);
var inst_22969 = cljs.core._EQ_.call(null,inst_22968__$1,inst_22961);
var inst_22970 = cljs.core.keyword_identical_QMARK_.call(null,inst_22961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22971 = (inst_22969) || (inst_22970);
var state_23000__$1 = (function (){var statearr_23014 = state_23000;
(statearr_23014[(10)] = inst_22968__$1);

return statearr_23014;
})();
if(cljs.core.truth_(inst_22971)){
var statearr_23015_23040 = state_23000__$1;
(statearr_23015_23040[(1)] = (8));

} else {
var statearr_23016_23041 = state_23000__$1;
(statearr_23016_23041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (14))){
var inst_22993 = (state_23000[(2)]);
var inst_22994 = cljs.core.async.close_BANG_.call(null,out);
var state_23000__$1 = (function (){var statearr_23018 = state_23000;
(statearr_23018[(13)] = inst_22993);

return statearr_23018;
})();
var statearr_23019_23042 = state_23000__$1;
(statearr_23019_23042[(2)] = inst_22994);

(statearr_23019_23042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (10))){
var inst_22983 = (state_23000[(2)]);
var state_23000__$1 = state_23000;
var statearr_23020_23043 = state_23000__$1;
(statearr_23020_23043[(2)] = inst_22983);

(statearr_23020_23043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (8))){
var inst_22968 = (state_23000[(10)]);
var inst_22960 = (state_23000[(8)]);
var inst_22964 = (state_23000[(9)]);
var inst_22973 = inst_22960.push(inst_22964);
var tmp23017 = inst_22960;
var inst_22960__$1 = tmp23017;
var inst_22961 = inst_22968;
var state_23000__$1 = (function (){var statearr_23021 = state_23000;
(statearr_23021[(14)] = inst_22973);

(statearr_23021[(7)] = inst_22961);

(statearr_23021[(8)] = inst_22960__$1);

return statearr_23021;
})();
var statearr_23022_23044 = state_23000__$1;
(statearr_23022_23044[(2)] = null);

(statearr_23022_23044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__12975__auto___23030,out))
;
return ((function (switch__12919__auto__,c__12975__auto___23030,out){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_23026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23026[(0)] = state_machine__12920__auto__);

(statearr_23026[(1)] = (1));

return statearr_23026;
});
var state_machine__12920__auto____1 = (function (state_23000){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_23000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e23027){if((e23027 instanceof Object)){
var ex__12923__auto__ = e23027;
var statearr_23028_23045 = state_23000;
(statearr_23028_23045[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23046 = state_23000;
state_23000 = G__23046;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_23000){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_23000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___23030,out))
})();
var state__12977__auto__ = (function (){var statearr_23029 = f__12976__auto__.call(null);
(statearr_23029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___23030);

return statearr_23029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___23030,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1420461355363