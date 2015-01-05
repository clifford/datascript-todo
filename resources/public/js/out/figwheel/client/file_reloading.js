// Compiled by ClojureScript 0.0-2411
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__19724){
var map__19726 = p__19724;
var map__19726__$1 = ((cljs.core.seq_QMARK_.call(null,map__19726))?cljs.core.apply.call(null,cljs.core.hash_map,map__19726):map__19726);
var websocket_url = cljs.core.get.call(null,map__19726__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__19727,callback){
var map__19729 = p__19727;
var map__19729__$1 = ((cljs.core.seq_QMARK_.call(null,map__19729))?cljs.core.apply.call(null,cljs.core.hash_map,map__19729):map__19729);
var msg = map__19729__$1;
var meta_data = cljs.core.get.call(null,map__19729__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__19729__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__19729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__19729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__9185__auto__ = (function (){var or__9197__auto__ = dependency_file;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
var or__9197__auto____$1 = (function (){var and__9185__auto__ = meta_data;
if(cljs.core.truth_(and__9185__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__9185__auto__;
}
})();
if(cljs.core.truth_(or__9197__auto____$1)){
return or__9197__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__9185__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__9197__auto__ = meta_data;
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__9185__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__19729,map__19729__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__19729,map__19729__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(10));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__19730,p__19731){
var map__19734 = p__19730;
var map__19734__$1 = ((cljs.core.seq_QMARK_.call(null,map__19734))?cljs.core.apply.call(null,cljs.core.hash_map,map__19734):map__19734);
var opts = map__19734__$1;
var url_rewriter = cljs.core.get.call(null,map__19734__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__19735 = p__19731;
var map__19735__$1 = ((cljs.core.seq_QMARK_.call(null,map__19735))?cljs.core.apply.call(null,cljs.core.hash_map,map__19735):map__19735);
var d = map__19735__$1;
var file = cljs.core.get.call(null,map__19735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__19737,p__19738){
var map__19792 = p__19737;
var map__19792__$1 = ((cljs.core.seq_QMARK_.call(null,map__19792))?cljs.core.apply.call(null,cljs.core.hash_map,map__19792):map__19792);
var opts = map__19792__$1;
var on_jsload = cljs.core.get.call(null,map__19792__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__19792__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__19793 = p__19738;
var map__19793__$1 = ((cljs.core.seq_QMARK_.call(null,map__19793))?cljs.core.apply.call(null,cljs.core.hash_map,map__19793):map__19793);
var msg = map__19793__$1;
var files = cljs.core.get.call(null,map__19793__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files){
return (function (state_19823){
var state_val_19824 = (state_19823[(1)]);
if((state_val_19824 === (8))){
var inst_19821 = (state_19823[(2)]);
var state_19823__$1 = state_19823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19823__$1,inst_19821);
} else {
if((state_val_19824 === (7))){
var state_19823__$1 = state_19823;
var statearr_19825_19845 = state_19823__$1;
(statearr_19825_19845[(2)] = null);

(statearr_19825_19845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19824 === (6))){
var inst_19801 = (state_19823[(7)]);
var inst_19815 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_19816 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19801);
var inst_19817 = cljs.core.pr_str.call(null,inst_19816);
var inst_19818 = console.log("not required:",inst_19817);
var state_19823__$1 = (function (){var statearr_19826 = state_19823;
(statearr_19826[(8)] = inst_19815);

return statearr_19826;
})();
var statearr_19827_19846 = state_19823__$1;
(statearr_19827_19846[(2)] = inst_19818);

(statearr_19827_19846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19824 === (5))){
var inst_19801 = (state_19823[(7)]);
var inst_19812 = (state_19823[(2)]);
var inst_19813 = cljs.core.not_empty.call(null,inst_19801);
var state_19823__$1 = (function (){var statearr_19828 = state_19823;
(statearr_19828[(9)] = inst_19812);

return statearr_19828;
})();
if(cljs.core.truth_(inst_19813)){
var statearr_19829_19847 = state_19823__$1;
(statearr_19829_19847[(1)] = (6));

} else {
var statearr_19830_19848 = state_19823__$1;
(statearr_19830_19848[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19824 === (4))){
var state_19823__$1 = state_19823;
var statearr_19831_19849 = state_19823__$1;
(statearr_19831_19849[(2)] = null);

(statearr_19831_19849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19824 === (3))){
var inst_19799 = (state_19823[(10)]);
var inst_19795 = (state_19823[(11)]);
var inst_19801 = (state_19823[(7)]);
var inst_19798 = (state_19823[(12)]);
var inst_19804 = console.debug("Figwheel: loaded these files");
var inst_19805 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19799);
var inst_19806 = cljs.core.pr_str.call(null,inst_19805);
var inst_19807 = console.log(inst_19806);
var inst_19808 = (function (){var files_not_loaded = inst_19801;
var res = inst_19799;
var res_SINGLEQUOTE_ = inst_19798;
var files_SINGLEQUOTE_ = inst_19795;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_19799,inst_19795,inst_19801,inst_19798,inst_19804,inst_19805,inst_19806,inst_19807,state_val_19824,c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_19799,inst_19795,inst_19801,inst_19798,inst_19804,inst_19805,inst_19806,inst_19807,state_val_19824,c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files))
})();
var inst_19809 = setTimeout(inst_19808,(10));
var state_19823__$1 = (function (){var statearr_19832 = state_19823;
(statearr_19832[(13)] = inst_19807);

(statearr_19832[(14)] = inst_19804);

return statearr_19832;
})();
var statearr_19833_19850 = state_19823__$1;
(statearr_19833_19850[(2)] = inst_19809);

(statearr_19833_19850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19824 === (2))){
var inst_19799 = (state_19823[(10)]);
var inst_19795 = (state_19823[(11)]);
var inst_19798 = (state_19823[(12)]);
var inst_19798__$1 = (state_19823[(2)]);
var inst_19799__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_19798__$1);
var inst_19800 = (function (){var res = inst_19799__$1;
var res_SINGLEQUOTE_ = inst_19798__$1;
var files_SINGLEQUOTE_ = inst_19795;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_19799,inst_19795,inst_19798,inst_19798__$1,inst_19799__$1,state_val_19824,c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files){
return (function (p1__19736_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__19736_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_19799,inst_19795,inst_19798,inst_19798__$1,inst_19799__$1,state_val_19824,c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files))
})();
var inst_19801 = cljs.core.filter.call(null,inst_19800,inst_19798__$1);
var inst_19802 = cljs.core.not_empty.call(null,inst_19799__$1);
var state_19823__$1 = (function (){var statearr_19834 = state_19823;
(statearr_19834[(10)] = inst_19799__$1);

(statearr_19834[(7)] = inst_19801);

(statearr_19834[(12)] = inst_19798__$1);

return statearr_19834;
})();
if(cljs.core.truth_(inst_19802)){
var statearr_19835_19851 = state_19823__$1;
(statearr_19835_19851[(1)] = (3));

} else {
var statearr_19836_19852 = state_19823__$1;
(statearr_19836_19852[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19824 === (1))){
var inst_19795 = (state_19823[(11)]);
var inst_19794 = before_jsload.call(null,files);
var inst_19795__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_19796 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_19795__$1);
var state_19823__$1 = (function (){var statearr_19837 = state_19823;
(statearr_19837[(15)] = inst_19794);

(statearr_19837[(11)] = inst_19795__$1);

return statearr_19837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19823__$1,(2),inst_19796);
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
});})(c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files))
;
return ((function (switch__12919__auto__,c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19841[(0)] = state_machine__12920__auto__);

(statearr_19841[(1)] = (1));

return statearr_19841;
});
var state_machine__12920__auto____1 = (function (state_19823){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19842){if((e19842 instanceof Object)){
var ex__12923__auto__ = e19842;
var statearr_19843_19853 = state_19823;
(statearr_19843_19853[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19854 = state_19823;
state_19823 = G__19854;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19823){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files))
})();
var state__12977__auto__ = (function (){var statearr_19844 = f__12976__auto__.call(null);
(statearr_19844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__,map__19792,map__19792__$1,opts,on_jsload,before_jsload,map__19793,map__19793__$1,msg,files))
);

return c__12975__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__19855,link_href){
var map__19857 = p__19855;
var map__19857__$1 = ((cljs.core.seq_QMARK_.call(null,map__19857))?cljs.core.apply.call(null,cljs.core.hash_map,map__19857):map__19857);
var request_url = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__,parent){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__,parent){
return (function (state_19878){
var state_val_19879 = (state_19878[(1)]);
if((state_val_19879 === (2))){
var inst_19875 = (state_19878[(2)]);
var inst_19876 = parent.removeChild(orig_link);
var state_19878__$1 = (function (){var statearr_19880 = state_19878;
(statearr_19880[(7)] = inst_19875);

return statearr_19880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19878__$1,inst_19876);
} else {
if((state_val_19879 === (1))){
var inst_19873 = cljs.core.async.timeout.call(null,(200));
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19878__$1,(2),inst_19873);
} else {
return null;
}
}
});})(c__12975__auto__,parent))
;
return ((function (switch__12919__auto__,c__12975__auto__,parent){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19884 = [null,null,null,null,null,null,null,null];
(statearr_19884[(0)] = state_machine__12920__auto__);

(statearr_19884[(1)] = (1));

return statearr_19884;
});
var state_machine__12920__auto____1 = (function (state_19878){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19885){if((e19885 instanceof Object)){
var ex__12923__auto__ = e19885;
var statearr_19886_19888 = state_19878;
(statearr_19886_19888[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19889 = state_19878;
state_19878 = G__19889;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19878){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__,parent))
})();
var state__12977__auto__ = (function (){var statearr_19887 = f__12976__auto__.call(null);
(statearr_19887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__,parent))
);

return c__12975__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__19890){
var map__19892 = p__19890;
var map__19892__$1 = ((cljs.core.seq_QMARK_.call(null,map__19892))?cljs.core.apply.call(null,cljs.core.hash_map,map__19892):map__19892);
var f_data = map__19892__$1;
var request_url = cljs.core.get.call(null,map__19892__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__19892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4386__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4386__auto__)){
var link = temp__4386__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__19893,files_msg){
var map__19915 = p__19893;
var map__19915__$1 = ((cljs.core.seq_QMARK_.call(null,map__19915))?cljs.core.apply.call(null,cljs.core.hash_map,map__19915):map__19915);
var opts = map__19915__$1;
var on_cssload = cljs.core.get.call(null,map__19915__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__19916_19936 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__19917_19937 = null;
var count__19918_19938 = (0);
var i__19919_19939 = (0);
while(true){
if((i__19919_19939 < count__19918_19938)){
var f_19940 = cljs.core._nth.call(null,chunk__19917_19937,i__19919_19939);
figwheel.client.file_reloading.reload_css_file.call(null,f_19940);

var G__19941 = seq__19916_19936;
var G__19942 = chunk__19917_19937;
var G__19943 = count__19918_19938;
var G__19944 = (i__19919_19939 + (1));
seq__19916_19936 = G__19941;
chunk__19917_19937 = G__19942;
count__19918_19938 = G__19943;
i__19919_19939 = G__19944;
continue;
} else {
var temp__4388__auto___19945 = cljs.core.seq.call(null,seq__19916_19936);
if(temp__4388__auto___19945){
var seq__19916_19946__$1 = temp__4388__auto___19945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19916_19946__$1)){
var c__9979__auto___19947 = cljs.core.chunk_first.call(null,seq__19916_19946__$1);
var G__19948 = cljs.core.chunk_rest.call(null,seq__19916_19946__$1);
var G__19949 = c__9979__auto___19947;
var G__19950 = cljs.core.count.call(null,c__9979__auto___19947);
var G__19951 = (0);
seq__19916_19936 = G__19948;
chunk__19917_19937 = G__19949;
count__19918_19938 = G__19950;
i__19919_19939 = G__19951;
continue;
} else {
var f_19952 = cljs.core.first.call(null,seq__19916_19946__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_19952);

var G__19953 = cljs.core.next.call(null,seq__19916_19946__$1);
var G__19954 = null;
var G__19955 = (0);
var G__19956 = (0);
seq__19916_19936 = G__19953;
chunk__19917_19937 = G__19954;
count__19918_19938 = G__19955;
i__19919_19939 = G__19956;
continue;
}
} else {
}
}
break;
}

var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__,map__19915,map__19915__$1,opts,on_cssload){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__,map__19915,map__19915__$1,opts,on_cssload){
return (function (state_19926){
var state_val_19927 = (state_19926[(1)]);
if((state_val_19927 === (2))){
var inst_19922 = (state_19926[(2)]);
var inst_19923 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_19924 = on_cssload.call(null,inst_19923);
var state_19926__$1 = (function (){var statearr_19928 = state_19926;
(statearr_19928[(7)] = inst_19922);

return statearr_19928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19926__$1,inst_19924);
} else {
if((state_val_19927 === (1))){
var inst_19920 = cljs.core.async.timeout.call(null,(100));
var state_19926__$1 = state_19926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19926__$1,(2),inst_19920);
} else {
return null;
}
}
});})(c__12975__auto__,map__19915,map__19915__$1,opts,on_cssload))
;
return ((function (switch__12919__auto__,c__12975__auto__,map__19915,map__19915__$1,opts,on_cssload){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19932 = [null,null,null,null,null,null,null,null];
(statearr_19932[(0)] = state_machine__12920__auto__);

(statearr_19932[(1)] = (1));

return statearr_19932;
});
var state_machine__12920__auto____1 = (function (state_19926){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19933){if((e19933 instanceof Object)){
var ex__12923__auto__ = e19933;
var statearr_19934_19957 = state_19926;
(statearr_19934_19957[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19958 = state_19926;
state_19926 = G__19958;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19926){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__,map__19915,map__19915__$1,opts,on_cssload))
})();
var state__12977__auto__ = (function (){var statearr_19935 = f__12976__auto__.call(null);
(statearr_19935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__,map__19915,map__19915__$1,opts,on_cssload))
);

return c__12975__auto__;
});
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});

//# sourceMappingURL=file_reloading.js.map?rel=1420461352746