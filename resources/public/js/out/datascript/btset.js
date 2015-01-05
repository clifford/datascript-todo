// Compiled by ClojureScript 0.0-2411
goog.provide('datascript.btset');
goog.require('cljs.core');


datascript.btset.min_len = (64);
datascript.btset.max_len = (128);
datascript.btset.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18004_SHARP_){
return ((datascript.btset.max_len & (1 << p1__18004_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function path_get(path,level){
return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function path_set(path,level,idx){
return (path | (idx << level));
});
datascript.btset.eq = (function eq(a,b){
return ((0) === datascript.btset._STAR_cmp_STAR_.call(null,a,b));
});
datascript.btset.half = (function half(x){
return (x >>> (1));
});
datascript.btset.binary_search_l = (function binary_search_l(arr,l,r,k){
while(true){
if((l <= r)){
var m = datascript.btset.half.call(null,(l + r));
var mk = (arr[m]);
var cmp = datascript.btset._STAR_cmp_STAR_.call(null,mk,k);
if((cmp < (0))){
var G__18005 = arr;
var G__18006 = (m + (1));
var G__18007 = r;
var G__18008 = k;
arr = G__18005;
l = G__18006;
r = G__18007;
k = G__18008;
continue;
} else {
var G__18009 = arr;
var G__18010 = l;
var G__18011 = (m - (1));
var G__18012 = k;
arr = G__18009;
l = G__18010;
r = G__18011;
k = G__18012;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.binary_search_r = (function binary_search_r(arr,l,r,k){
while(true){
if((l <= r)){
var m = datascript.btset.half.call(null,(l + r));
var mk = (arr[m]);
var cmp = datascript.btset._STAR_cmp_STAR_.call(null,mk,k);
if((cmp > (0))){
var G__18013 = arr;
var G__18014 = l;
var G__18015 = (m - (1));
var G__18016 = k;
arr = G__18013;
l = G__18014;
r = G__18015;
k = G__18016;
continue;
} else {
var G__18017 = arr;
var G__18018 = (m + (1));
var G__18019 = r;
var G__18020 = k;
arr = G__18017;
l = G__18018;
r = G__18019;
k = G__18020;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.lookup_exact = (function lookup_exact(arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,arr,(0),(arr_l - (1)),key);
if(((idx < arr_l)) && (datascript.btset.eq.call(null,(arr[idx]),key))){
return idx;
} else {
return (-1);
}
});
datascript.btset.lookup_range = (function lookup_range(arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,arr,(0),(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datascript.btset.alast = (function alast(arr){
return (arr[(arr.length - (1))]);
});
datascript.btset.cut_n_splice = (function cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var arr_l = arr.length;
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = (new Array(((l1 + xs_l) + l2)));
var n__10079__auto___18021 = l1;
var i_18022 = (0);
while(true){
if((i_18022 < n__10079__auto___18021)){
(new_arr[i_18022] = (arr[(cut_from + i_18022)]));

var G__18023 = (i_18022 + (1));
i_18022 = G__18023;
continue;
} else {
}
break;
}

var n__10079__auto___18024 = xs_l;
var i_18025 = (0);
while(true){
if((i_18025 < n__10079__auto___18024)){
(new_arr[(i_18025 + l1)] = (xs[i_18025]));

var G__18026 = (i_18025 + (1));
i_18025 = G__18026;
continue;
} else {
}
break;
}

var n__10079__auto___18027 = l2;
var i_18028 = (0);
while(true){
if((i_18028 < n__10079__auto___18027)){
(new_arr[(i_18028 + l1xs)] = (arr[(splice_to + i_18028)]));

var G__18029 = (i_18028 + (1));
i_18028 = G__18029;
continue;
} else {
}
break;
}

return new_arr;
});
datascript.btset.cut = (function() {
var cut = null;
var cut__2 = (function (arr,cut_from){
return arr.slice(cut_from);
});
var cut__3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});
cut = function(arr,cut_from,cut_to){
switch(arguments.length){
case 2:
return cut__2.call(this,arr,cut_from);
case 3:
return cut__3.call(this,arr,cut_from,cut_to);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cut.cljs$core$IFn$_invoke$arity$2 = cut__2;
cut.cljs$core$IFn$_invoke$arity$3 = cut__3;
return cut;
})()
;
datascript.btset.splice = (function splice(arr,splice_from,splice_to,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function insert(arr,idx,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = datascript.btset.half.call(null,total_l);
var r2_l = (total_l - r1_l);
var r1 = (new Array(r1_l));
var r2 = (new Array(r2_l));
var n__10079__auto___18030 = total_l;
var i_18031 = (0);
while(true){
if((i_18031 < n__10079__auto___18030)){
((((i_18031 < r1_l))?r1:r2)[(((i_18031 < r1_l))?i_18031:(i_18031 - r1_l))] = ((((i_18031 < a1_l))?a1:a2)[(((i_18031 < a1_l))?i_18031:(i_18031 - a1_l))]));

var G__18032 = (i_18031 + (1));
i_18031 = G__18032;
continue;
} else {
}
break;
}

return [r1,r2];
});
datascript.btset.eq_arr = (function eq_arr(a1,a1_from,a1_to,a2,a2_from,a2_to,cmp){
var len = (a1_to - a1_from);
var and__9185__auto__ = (len === (a2_to - a2_from));
if(and__9185__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(cljs.core.not.call(null,cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)])))){
return false;
} else {
var G__18033 = (i + (1));
i = G__18033;
continue;

}
}
break;
}
} else {
return and__9185__auto__;
}
});
datascript.btset.check_n_splice = (function check_n_splice(arr,from,to,new_arr){
if(datascript.btset.eq_arr.call(null,arr,from,to,new_arr,(0),new_arr.length,datascript.btset.eq)){
return arr;
} else {
return datascript.btset.splice.call(null,arr,from,to,new_arr);
}
});
datascript.btset.arr_map_inplace = (function arr_map_inplace(f,arr){
var len = arr.length;
var i_18034 = (0);
while(true){
if((i_18034 < len)){
(arr[i_18034] = f.call(null,(arr[i_18034])));

var G__18035 = (i_18034 + (1));
i_18034 = G__18035;
continue;
} else {
}
break;
}

return arr;
});
/**
* Splits `arr` into arrays of size between min-len and max-len,
* trying to stick to (min+max)/2
*/
datascript.btset.arr_partition_approx = (function arr_partition_approx(min_len,max_len,arr){
var chunk_len = datascript.btset.half.call(null,(max_len + min_len));
var len = arr.length;
var acc = [];
if((len > (0))){
var pos_18036 = (0);
while(true){
var rest_18037 = (len - pos_18036);
if((rest_18037 <= max_len)){
acc.push(arr.slice(pos_18036));
} else {
if((rest_18037 >= (chunk_len + min_len))){
acc.push(arr.slice(pos_18036,(pos_18036 + chunk_len)));

var G__18038 = (pos_18036 + chunk_len);
pos_18036 = G__18038;
continue;
} else {
var piece_len_18039 = datascript.btset.half.call(null,rest_18037);
acc.push(arr.slice(pos_18036,(pos_18036 + piece_len_18039)));

var G__18040 = (pos_18036 + piece_len_18039);
pos_18036 = G__18040;
continue;

}
}
break;
}
} else {
}

return acc;
});
/**
* Filter out repetitive values in a sorted array
*/
datascript.btset.arr_distinct = (function arr_distinct(arr,cmp){
var i_18041 = (0);
while(true){
if((i_18041 >= arr.length)){
} else {
if(((i_18041 > (0))) && (((0) === cmp.call(null,(arr[i_18041]),(arr[(i_18041 - (1))]))))){
arr.splice(i_18041,(1));

var G__18042 = i_18041;
i_18041 = G__18042;
continue;
} else {
var G__18043 = (i_18041 + (1));
i_18041 = G__18043;
continue;
}
}
break;
}

return arr;
});
datascript.btset.lim_key = (function lim_key(node){
return datascript.btset.alast.call(null,node.keys);
});
/**
* Drop non-nil references and return array of arguments
*/
datascript.btset.return_array = (function() {
var return_array = null;
var return_array__1 = (function (a1){
return [a1];
});
var return_array__2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});
var return_array__3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});
return_array = function(a1,a2,a3){
switch(arguments.length){
case 1:
return return_array__1.call(this,a1);
case 2:
return return_array__2.call(this,a1,a2);
case 3:
return return_array__3.call(this,a1,a2,a3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return_array.cljs$core$IFn$_invoke$arity$1 = return_array__1;
return_array.cljs$core$IFn$_invoke$arity$2 = return_array__2;
return_array.cljs$core$IFn$_invoke$arity$3 = return_array__3;
return return_array;
})()
;
datascript.btset.rotate = (function rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datascript.btset.return_array.call(null,node);
} else {
if((node.len() > datascript.btset.min_len)){
return datascript.btset.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__9185__auto__ = left;
if(cljs.core.truth_(and__9185__auto__)){
return (left.len() <= datascript.btset.min_len);
} else {
return and__9185__auto__;
}
})())){
return datascript.btset.return_array.call(null,left.merge(node),right);
} else {
if(cljs.core.truth_((function (){var and__9185__auto__ = right;
if(cljs.core.truth_(and__9185__auto__)){
return (right.len() <= datascript.btset.min_len);
} else {
return and__9185__auto__;
}
})())){
return datascript.btset.return_array.call(null,left,node.merge(right));
} else {
if(cljs.core.truth_((function (){var and__9185__auto__ = left;
if(cljs.core.truth_(and__9185__auto__)){
return ((right == null)) || ((left.len() < right.len()));
} else {
return and__9185__auto__;
}
})())){
var nodes = left.merge_n_split(node);
return datascript.btset.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = node.merge_n_split(right);
return datascript.btset.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datascript.btset.Node.prototype.len = (function (){
var self__ = this;
var _ = this;
return self__.keys.length;
});

datascript.btset.Node.prototype.merge = (function (next){
var self__ = this;
var _ = this;
return (new datascript.btset.Node(self__.keys.concat(next.keys),self__.pointers.concat(next.pointers)));
});

datascript.btset.Node.prototype.merge_n_split = (function (next){
var self__ = this;
var _ = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
var ps = datascript.btset.merge_n_split.call(null,self__.pointers,next.pointers);
return datascript.btset.return_array.call(null,(new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});

datascript.btset.Node.prototype.lookup = (function (key){
var self__ = this;
var _ = this;
var idx = datascript.btset.lookup_range.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.pointers[idx]).lookup(key);
}
});

datascript.btset.Node.prototype.conj = (function (key){
var self__ = this;
var this$ = this;
var idx = datascript.btset.binary_search_l.call(null,self__.keys,(0),(self__.keys.length - (2)),key);
var nodes = (self__.pointers[idx]).conj(key);
if(cljs.core.truth_(nodes)){
var new_keys = datascript.btset.check_n_splice.call(null,self__.keys,idx,(idx + (1)),nodes.map(datascript.btset.lim_key));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= datascript.btset.max_len)){
return [(new datascript.btset.Node(new_keys,new_pointers))];
} else {
var middle = datascript.btset.half.call(null,new_pointers.length);
return [(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,(0),middle),datascript.btset.cut.call(null,new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,middle),datascript.btset.cut.call(null,new_pointers,middle)))];
}
} else {
return null;
}
});

datascript.btset.Node.prototype.disj = (function (key,root_QMARK_,left,right){
var self__ = this;
var this$ = this;
var idx = datascript.btset.lookup_range.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = child.disj(key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datascript.btset.check_n_splice.call(null,self__.keys,left_idx,right_idx,disjned.map(datascript.btset.lim_key));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return datascript.btset.rotate.call(null,(new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datascript.btset.Node.cljs$lang$type = true;

datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";

datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript.btset/Node");
});

datascript.btset.__GT_Node = (function __GT_Node(keys,pointers){
return (new datascript.btset.Node(keys,pointers));
});


/**
* @constructor
*/
datascript.btset.LeafNode = (function (keys){
this.keys = keys;
})
datascript.btset.LeafNode.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str_STAR_.call(null,cljs.core.vec.call(null,self__.keys));
});

datascript.btset.LeafNode.prototype.len = (function (){
var self__ = this;
var _ = this;
return self__.keys.length;
});

datascript.btset.LeafNode.prototype.merge = (function (next){
var self__ = this;
var _ = this;
return (new datascript.btset.LeafNode(self__.keys.concat(next.keys)));
});

datascript.btset.LeafNode.prototype.merge_n_split = (function (next){
var self__ = this;
var _ = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
return datascript.btset.return_array.call(null,(new datascript.btset.LeafNode((ks[(0)]))),(new datascript.btset.LeafNode((ks[(1)]))));
});

datascript.btset.LeafNode.prototype.lookup = (function (key){
var self__ = this;
var _ = this;
var idx = datascript.btset.lookup_exact.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datascript.btset.LeafNode.prototype.conj = (function (key){
var self__ = this;
var this$ = this;
var idx = datascript.btset.binary_search_l.call(null,self__.keys,(0),(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(((idx < keys_l)) && (datascript.btset.eq.call(null,key,(self__.keys[idx])))){
return null;
} else {
if((keys_l === datascript.btset.max_len)){
var middle = datascript.btset.half.call(null,(keys_l + (1)));
if((idx > middle)){
return [(new datascript.btset.LeafNode(datascript.btset.cut.call(null,self__.keys,(0),middle))),(new datascript.btset.LeafNode(datascript.btset.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datascript.btset.LeafNode(datascript.btset.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.LeafNode(datascript.btset.cut.call(null,self__.keys,middle,keys_l)))];
}
} else {
return [(new datascript.btset.LeafNode(datascript.btset.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

datascript.btset.LeafNode.prototype.disj = (function (key,root_QMARK_,left,right){
var self__ = this;
var this$ = this;
var idx = datascript.btset.lookup_exact.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datascript.btset.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return datascript.btset.rotate.call(null,(new datascript.btset.LeafNode(new_keys)),root_QMARK_,left,right);
}
});

datascript.btset.LeafNode.cljs$lang$type = true;

datascript.btset.LeafNode.cljs$lang$ctorStr = "datascript.btset/LeafNode";

datascript.btset.LeafNode.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript.btset/LeafNode");
});

datascript.btset.__GT_LeafNode = (function __GT_LeafNode(keys){
return (new datascript.btset.LeafNode(keys));
});

datascript.btset.keys_for = (function keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__18044 = (level - datascript.btset.level_shift);
var G__18045 = (node.pointers[datascript.btset.path_get.call(null,path,level)]);
level = G__18044;
node = G__18045;
continue;
} else {
return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function btset_conj(set,key,cmp){
var _STAR_cmp_STAR_18047 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = cmp;

var roots = set.root.conj(key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datascript.btset.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datascript.btset.alter_btset.call(null,set,(new datascript.btset.Node(roots.map(datascript.btset.lim_key),roots)),(set.shift + datascript.btset.level_shift),(set.cnt + (1)));

}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_18047;
}});
datascript.btset.btset_disj = (function btset_disj(set,key,cmp){
var _STAR_cmp_STAR_18049 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = cmp;

var new_roots = set.root.disj(key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datascript.btset.Node)) && ((new_root.pointers.length === (1)))){
return datascript.btset.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - datascript.btset.level_shift),(set.cnt - (1)));
} else {
return datascript.btset.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_18049;
}});
datascript.btset._next_path = (function _next_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_path = _next_path.call(null,(node.pointers[idx]),path,(level - datascript.btset.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,level,(idx + (1)));
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
* Returns path representing next item after `path` in natural traversal order,
* or -1 if end of tree has been reached
*/
datascript.btset.next_path = (function next_path(set,path){
return datascript.btset._next_path.call(null,set.root,path,set.shift);
});
/**
* Returns rightmost path possible starting from node and going deeper
*/
datascript.btset._rpath = (function _rpath(node,level){
var node__$1 = node;
var path = datascript.btset.empty_path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__18050 = datascript.btset.alast.call(null,node__$1.pointers);
var G__18051 = datascript.btset.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__18052 = (level__$1 - datascript.btset.level_shift);
node__$1 = G__18050;
path = G__18051;
level__$1 = G__18052;
continue;
} else {
return datascript.btset.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datascript.btset._prev_path = (function _prev_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - datascript.btset.level_shift);
var sub_path = _prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datascript.btset._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return datascript.btset.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
* Returns path representing previous item before `path` in natural traversal order,
* or -1 if `path` was already beginning of a tree
*/
datascript.btset.prev_path = (function prev_path(set,path){
return datascript.btset._prev_path.call(null,set.root,path,set.shift);
});



/**
* @constructor
*/
datascript.btset.BTSetIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
})
datascript.btset.BTSetIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return datascript.btset._btset_backwards_iter.call(null,self__.set,datascript.btset.prev_path.call(null,self__.set,self__.left),datascript.btset.prev_path.call(null,self__.set,self__.right));
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx + (1)) < self__.keys.length)){
if(((self__.left + (1)) < self__.right)){
return (new datascript.btset.BTSetIter(self__.set,(self__.left + (1)),self__.right,self__.keys,(self__.idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datascript.btset.next_path.call(null,self__.set,self__.left);
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < self__.right))){
return datascript.btset._btset_iter.call(null,self__.set,left__$1,self__.right);
} else {
return null;
}
}
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4386__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(temp__4386__auto__)){
var next = temp__4386__auto__;
return next;
} else {
return (new datascript.btset.BTSetIter(self__.set,(-1),(-1),null,(-1)));
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.BTSetIter.cljs$lang$type = true;

datascript.btset.BTSetIter.cljs$lang$ctorStr = "datascript.btset/BTSetIter";

datascript.btset.BTSetIter.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript.btset/BTSetIter");
});

datascript.btset.__GT_BTSetIter = (function __GT_BTSetIter(set,left,right,keys,idx){
return (new datascript.btset.BTSetIter(set,left,right,keys,idx));
});

datascript.btset._btset_iter = (function _btset_iter(set,left,right){
return (new datascript.btset.BTSetIter(set,left,right,datascript.btset.keys_for.call(null,set,left),datascript.btset.path_get.call(null,left,(0))));
});

/**
* @constructor
*/
datascript.btset.BTSetBackwardsIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
})
datascript.btset.BTSetBackwardsIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
var new_left = (((self__.left === (-1)))?(0):datascript.btset.next_path.call(null,self__.set,self__.left));
var new_right = datascript.btset.next_path.call(null,self__.set,self__.right);
var new_right__$1 = (((new_right === (-1)))?(self__.right + (1)):new_right);
return datascript.btset._btset_iter.call(null,self__.set,new_left,new_right__$1);
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx - (1)) >= (0))){
if(((self__.right - (1)) > self__.left)){
return (new datascript.btset.BTSetBackwardsIter(self__.set,self__.left,(self__.right - (1)),self__.keys,(self__.idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datascript.btset.prev_path.call(null,self__.set,self__.right);
if((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > self__.left))){
return datascript.btset._btset_backwards_iter.call(null,self__.set,self__.left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4386__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(temp__4386__auto__)){
var next = temp__4386__auto__;
return next;
} else {
return (new datascript.btset.BTSetBackwardsIter(self__.set,(-1),(-1),null,(-1)));
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.cljs$lang$type = true;

datascript.btset.BTSetBackwardsIter.cljs$lang$ctorStr = "datascript.btset/BTSetBackwardsIter";

datascript.btset.BTSetBackwardsIter.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript.btset/BTSetBackwardsIter");
});

datascript.btset.__GT_BTSetBackwardsIter = (function __GT_BTSetBackwardsIter(set,left,right,keys,idx){
return (new datascript.btset.BTSetBackwardsIter(set,left,right,keys,idx));
});

datascript.btset._btset_backwards_iter = (function _btset_backwards_iter(set,left,right){
return (new datascript.btset.BTSetBackwardsIter(set,left,right,datascript.btset.keys_for.call(null,set,right),datascript.btset.path_get.call(null,right,(0))));
});
/**
* Iterator that represents whole set
*/
datascript.btset.btset_iter = (function btset_iter(set){
if((set.root.keys.length > (0))){
var left = datascript.btset.empty_path;
var right = (datascript.btset._rpath.call(null,set.root,set.shift) + (1));
return datascript.btset._btset_iter.call(null,set,left,right);
} else {
return null;
}
});
/**
* Returns path to first element >= key,
* or -1 if all elements in a set < key
*/
datascript.btset._seek = (function _seek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys = node.keys;
var keys_l = keys.length;
if(((0) === level)){
var idx = datascript.btset.binary_search_l.call(null,keys,(0),(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datascript.btset.path_set.call(null,path,(0),idx);
}
} else {
var idx = datascript.btset.binary_search_l.call(null,keys,(0),(keys_l - (2)),key);
var G__18053 = (node.pointers[idx]);
var G__18054 = datascript.btset.path_set.call(null,path,level,idx);
var G__18055 = (level - datascript.btset.level_shift);
node = G__18053;
path = G__18054;
level = G__18055;
continue;
}
break;
}
});
/**
* Returns path to the first element that is > key.
* If all elements in a set are <= key, returns `(-rpath set) + 1`.
* It’s a virtual path that is bigger than any path in a tree
*/
datascript.btset._rseek = (function _rseek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys = node.keys;
var keys_l = keys.length;
if(((0) === level)){
var idx = datascript.btset.binary_search_r.call(null,keys,(0),(keys_l - (1)),key);
return datascript.btset.path_set.call(null,path,(0),idx);
} else {
var idx = datascript.btset.binary_search_r.call(null,keys,(0),(keys_l - (2)),key);
var G__18056 = (node.pointers[idx]);
var G__18057 = datascript.btset.path_set.call(null,path,level,idx);
var G__18058 = (level - datascript.btset.level_shift);
node = G__18056;
path = G__18057;
level = G__18058;
continue;
}
break;
}
});
datascript.btset._slice = (function _slice(set,key_from,key_to){
var path = datascript.btset._seek.call(null,set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datascript.btset._rseek.call(null,set,key_to);
if((till_path > path)){
return (new datascript.btset.BTSetIter(set,path,till_path,datascript.btset.keys_for.call(null,set,path),datascript.btset.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
/**
* When called with single key, returns iterator over set that contains all elements equal to the key.
* When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
*/
datascript.btset.slice = (function() {
var slice = null;
var slice__2 = (function (set,key){
return slice.call(null,set,key,key);
});
var slice__3 = (function (set,key_from,key_to){
var _STAR_cmp_STAR_18060 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = set.comparator;

return datascript.btset._slice.call(null,set,key_from,key_to);
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_18060;
}});
slice = function(set,key_from,key_to){
switch(arguments.length){
case 2:
return slice__2.call(this,set,key_from);
case 3:
return slice__3.call(this,set,key_from,key_to);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
slice.cljs$core$IFn$_invoke$arity$2 = slice__2;
slice.cljs$core$IFn$_invoke$arity$3 = slice__3;
return slice;
})()
;

/**
* @constructor
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2296779023;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (set,k){
var self__ = this;
var set__$1 = this;
return cljs.core._lookup.call(null,set__$1,k,null);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var _STAR_cmp_STAR_18063 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = self__.comparator;

var or__9197__auto__ = self__.root.lookup(k);
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return not_found;
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_18063;
}});

datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datascript.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reverse.call(null,datascript.btset.btset_iter.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__9613__auto__ = self__.__hash;
if(!((h__9613__auto__ == null))){
return h__9613__auto__;
} else {
var h__9613__auto____$1 = cljs.core.hash_iset.call(null,coll__$1);
self__.__hash = h__9613__auto____$1;

return h__9613__auto____$1;
}
});

datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__18061_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__18061_SHARP_);
});})(this$__$1))
,other));
});

datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),self__.comparator,self__.meta,(0)));
});

datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (set,key){
var self__ = this;
var set__$1 = this;
return datascript.btset.btset_disj.call(null,set__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_iter.call(null,this$__$1);
});

datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (set,key){
var self__ = this;
var set__$1 = this;
return datascript.btset.btset_conj.call(null,set__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.call = (function() {
var G__18064 = null;
var G__18064__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__18064__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__18064 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18064__2.call(this,self__,k);
case 3:
return G__18064__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18064.cljs$core$IFn$_invoke$arity$2 = G__18064__2;
G__18064.cljs$core$IFn$_invoke$arity$3 = G__18064__3;
return G__18064;
})()
;

datascript.btset.BTSet.prototype.apply = (function (self__,args18062){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18062)));
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

datascript.btset.BTSet.cljs$lang$type = true;

datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";

datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__9779__auto__,writer__9780__auto__,opt__9781__auto__){
return cljs.core._write.call(null,writer__9780__auto__,"datascript.btset/BTSet");
});

datascript.btset.__GT_BTSet = (function __GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datascript.btset.alter_btset = (function alter_btset(set,root,shift,cnt){
return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
datascript.btset._btset_from_sorted_arr = (function _btset_from_sorted_arr(arr,cmp){
var leafs = datascript.btset.arr_map_inplace.call(null,datascript.btset.__GT_LeafNode,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__18067 = cljs.core.count.call(null,current_level);
switch (G__18067) {
case (0):
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),cmp,null,(0)));

break;
case (1):
return (new datascript.btset.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,(0)));

break;
default:
var G__18069 = datascript.btset.arr_map_inplace.call(null,((function (current_level,shift,G__18067,leafs){
return (function (p1__18065_SHARP_){
return (new datascript.btset.Node(p1__18065_SHARP_.map(datascript.btset.lim_key),p1__18065_SHARP_));
});})(current_level,shift,G__18067,leafs))
,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,current_level));
var G__18070 = (shift + datascript.btset.level_shift);
current_level = G__18069;
shift = G__18070;
continue;

}
break;
}
});
datascript.btset._btset_from_seq = (function _btset_from_seq(seq,cmp){
var arr = datascript.btset.arr_distinct.call(null,cljs.core.into_array.call(null,seq).sort(cmp),cmp);
return datascript.btset._btset_from_sorted_arr.call(null,arr,cmp);
});
/**
* @param {...*} var_args
*/
datascript.btset.btset_by = (function() {
var btset_by = null;
var btset_by__1 = (function (cmp){
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),cmp,null,(0)));
});
var btset_by__2 = (function() { 
var G__18071__delegate = function (cmp,keys){
return datascript.btset._btset_from_seq.call(null,keys,cmp);
};
var G__18071 = function (cmp,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18071__delegate.call(this,cmp,keys);};
G__18071.cljs$lang$maxFixedArity = 1;
G__18071.cljs$lang$applyTo = (function (arglist__18072){
var cmp = cljs.core.first(arglist__18072);
var keys = cljs.core.rest(arglist__18072);
return G__18071__delegate(cmp,keys);
});
G__18071.cljs$core$IFn$_invoke$arity$variadic = G__18071__delegate;
return G__18071;
})()
;
btset_by = function(cmp,var_args){
var keys = var_args;
switch(arguments.length){
case 1:
return btset_by__1.call(this,cmp);
default:
return btset_by__2.cljs$core$IFn$_invoke$arity$variadic(cmp, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
btset_by.cljs$lang$maxFixedArity = 1;
btset_by.cljs$lang$applyTo = btset_by__2.cljs$lang$applyTo;
btset_by.cljs$core$IFn$_invoke$arity$1 = btset_by__1;
btset_by.cljs$core$IFn$_invoke$arity$variadic = btset_by__2.cljs$core$IFn$_invoke$arity$variadic;
return btset_by;
})()
;
/**
* @param {...*} var_args
*/
datascript.btset.btset = (function() {
var btset = null;
var btset__0 = (function (){
return datascript.btset.btset_by.call(null,cljs.core.compare);
});
var btset__1 = (function() { 
var G__18073__delegate = function (keys){
return datascript.btset._btset_from_seq.call(null,keys,cljs.core.compare);
};
var G__18073 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18073__delegate.call(this,keys);};
G__18073.cljs$lang$maxFixedArity = 0;
G__18073.cljs$lang$applyTo = (function (arglist__18074){
var keys = cljs.core.seq(arglist__18074);
return G__18073__delegate(keys);
});
G__18073.cljs$core$IFn$_invoke$arity$variadic = G__18073__delegate;
return G__18073;
})()
;
btset = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return btset__0.call(this);
default:
return btset__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
btset.cljs$lang$maxFixedArity = 0;
btset.cljs$lang$applyTo = btset__1.cljs$lang$applyTo;
btset.cljs$core$IFn$_invoke$arity$0 = btset__0;
btset.cljs$core$IFn$_invoke$arity$variadic = btset__1.cljs$core$IFn$_invoke$arity$variadic;
return btset;
})()
;

//# sourceMappingURL=btset.js.map?rel=1420461347400