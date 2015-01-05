// Compiled by ClojureScript 0.0-2411
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('figwheel.client.file_reloading');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.heads_up');
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__18903){
var map__18905 = p__18903;
var map__18905__$1 = ((cljs.core.seq_QMARK_.call(null,map__18905))?cljs.core.apply.call(null,cljs.core.hash_map,map__18905):map__18905);
var class$ = cljs.core.get.call(null,map__18905__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__18905__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__9197__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9197__auto__)){
return or__9197__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__9185__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__9185__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__9185__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__12975__auto___19026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___19026,ch){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___19026,ch){
return (function (state_19000){
var state_val_19001 = (state_19000[(1)]);
if((state_val_19001 === (7))){
var inst_18996 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19002_19027 = state_19000__$1;
(statearr_19002_19027[(2)] = inst_18996);

(statearr_19002_19027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (1))){
var state_19000__$1 = state_19000;
var statearr_19003_19028 = state_19000__$1;
(statearr_19003_19028[(2)] = null);

(statearr_19003_19028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (4))){
var inst_18968 = (state_19000[(7)]);
var inst_18968__$1 = (state_19000[(2)]);
var state_19000__$1 = (function (){var statearr_19004 = state_19000;
(statearr_19004[(7)] = inst_18968__$1);

return statearr_19004;
})();
if(cljs.core.truth_(inst_18968__$1)){
var statearr_19005_19029 = state_19000__$1;
(statearr_19005_19029[(1)] = (5));

} else {
var statearr_19006_19030 = state_19000__$1;
(statearr_19006_19030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (13))){
var state_19000__$1 = state_19000;
var statearr_19007_19031 = state_19000__$1;
(statearr_19007_19031[(2)] = null);

(statearr_19007_19031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (6))){
var state_19000__$1 = state_19000;
var statearr_19008_19032 = state_19000__$1;
(statearr_19008_19032[(2)] = null);

(statearr_19008_19032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (3))){
var inst_18998 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19000__$1,inst_18998);
} else {
if((state_val_19001 === (12))){
var inst_18975 = (state_19000[(8)]);
var inst_18984 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_18975);
var inst_18985 = cljs.core.first.call(null,inst_18984);
var inst_18986 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_18985);
var inst_18987 = console.warn("Figwheel: Not loading code with warnings - ",inst_18986);
var state_19000__$1 = state_19000;
var statearr_19009_19033 = state_19000__$1;
(statearr_19009_19033[(2)] = inst_18987);

(statearr_19009_19033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (2))){
var state_19000__$1 = state_19000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19000__$1,(4),ch);
} else {
if((state_val_19001 === (11))){
var inst_18980 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19010_19034 = state_19000__$1;
(statearr_19010_19034[(2)] = inst_18980);

(statearr_19010_19034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (9))){
var inst_18974 = (state_19000[(9)]);
var inst_18982 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_18974,opts);
var state_19000__$1 = state_19000;
if(inst_18982){
var statearr_19011_19035 = state_19000__$1;
(statearr_19011_19035[(1)] = (12));

} else {
var statearr_19012_19036 = state_19000__$1;
(statearr_19012_19036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (5))){
var inst_18974 = (state_19000[(9)]);
var inst_18968 = (state_19000[(7)]);
var inst_18970 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_18971 = (new cljs.core.PersistentArrayMap(null,2,inst_18970,null));
var inst_18972 = (new cljs.core.PersistentHashSet(null,inst_18971,null));
var inst_18973 = figwheel.client.focus_msgs.call(null,inst_18972,inst_18968);
var inst_18974__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_18973);
var inst_18975 = cljs.core.first.call(null,inst_18973);
var inst_18976 = figwheel.client.reload_file_state_QMARK_.call(null,inst_18974__$1,opts);
var state_19000__$1 = (function (){var statearr_19013 = state_19000;
(statearr_19013[(9)] = inst_18974__$1);

(statearr_19013[(8)] = inst_18975);

return statearr_19013;
})();
if(cljs.core.truth_(inst_18976)){
var statearr_19014_19037 = state_19000__$1;
(statearr_19014_19037[(1)] = (8));

} else {
var statearr_19015_19038 = state_19000__$1;
(statearr_19015_19038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (14))){
var inst_18990 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19016_19039 = state_19000__$1;
(statearr_19016_19039[(2)] = inst_18990);

(statearr_19016_19039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (10))){
var inst_18992 = (state_19000[(2)]);
var state_19000__$1 = (function (){var statearr_19017 = state_19000;
(statearr_19017[(10)] = inst_18992);

return statearr_19017;
})();
var statearr_19018_19040 = state_19000__$1;
(statearr_19018_19040[(2)] = null);

(statearr_19018_19040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (8))){
var inst_18975 = (state_19000[(8)]);
var inst_18978 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_18975);
var state_19000__$1 = state_19000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19000__$1,(11),inst_18978);
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
});})(c__12975__auto___19026,ch))
;
return ((function (switch__12919__auto__,c__12975__auto___19026,ch){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19022[(0)] = state_machine__12920__auto__);

(statearr_19022[(1)] = (1));

return statearr_19022;
});
var state_machine__12920__auto____1 = (function (state_19000){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19023){if((e19023 instanceof Object)){
var ex__12923__auto__ = e19023;
var statearr_19024_19041 = state_19000;
(statearr_19024_19041[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19042 = state_19000;
state_19000 = G__19042;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19000){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___19026,ch))
})();
var state__12977__auto__ = (function (){var statearr_19025 = f__12976__auto__.call(null);
(statearr_19025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___19026);

return statearr_19025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___19026,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__19046){
var vec__19047 = p__19046;
var map__19048 = cljs.core.nth.call(null,vec__19047,(0),null);
var map__19048__$1 = ((cljs.core.seq_QMARK_.call(null,map__19048))?cljs.core.apply.call(null,cljs.core.hash_map,map__19048):map__19048);
var msg = map__19048__$1;
var msg_name = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19047,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__19049){
var map__19057 = p__19049;
var map__19057__$1 = ((cljs.core.seq_QMARK_.call(null,map__19057))?cljs.core.apply.call(null,cljs.core.hash_map,map__19057):map__19057);
var on_compile_fail = cljs.core.get.call(null,map__19057__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__19057__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__19057,map__19057__$1,on_compile_fail,on_compile_warning){
return (function (p__19058){
var vec__19059 = p__19058;
var map__19060 = cljs.core.nth.call(null,vec__19059,(0),null);
var map__19060__$1 = ((cljs.core.seq_QMARK_.call(null,map__19060))?cljs.core.apply.call(null,cljs.core.hash_map,map__19060):map__19060);
var msg = map__19060__$1;
var msg_name = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19059,(1));
var pred__19061 = cljs.core._EQ_;
var expr__19062 = msg_name;
if(cljs.core.truth_(pred__19061.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__19062))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__19061.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19062))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__19057,map__19057__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__,msg_hist,msg_names,msg){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__,msg_hist,msg_names,msg){
return (function (state_19239){
var state_val_19240 = (state_19239[(1)]);
if((state_val_19240 === (7))){
var inst_19188 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_19239__$1 = state_19239;
if(inst_19188){
var statearr_19241_19278 = state_19239__$1;
(statearr_19241_19278[(1)] = (11));

} else {
var statearr_19242_19279 = state_19239__$1;
(statearr_19242_19279[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (20))){
var inst_19229 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19243_19280 = state_19239__$1;
(statearr_19243_19280[(2)] = inst_19229);

(statearr_19243_19280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (27))){
var inst_19220 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(30),inst_19220);
} else {
if((state_val_19240 === (1))){
var inst_19171 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19171)){
var statearr_19244_19281 = state_19239__$1;
(statearr_19244_19281[(1)] = (2));

} else {
var statearr_19245_19282 = state_19239__$1;
(statearr_19245_19282[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (24))){
var inst_19218 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_19239__$1 = state_19239;
if(inst_19218){
var statearr_19246_19283 = state_19239__$1;
(statearr_19246_19283[(1)] = (27));

} else {
var statearr_19247_19284 = state_19239__$1;
(statearr_19247_19284[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (4))){
var inst_19237 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19239__$1,inst_19237);
} else {
if((state_val_19240 === (15))){
var inst_19198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19199 = figwheel.client.heads_up.append_message.call(null,inst_19198);
var state_19239__$1 = state_19239;
var statearr_19248_19285 = state_19239__$1;
(statearr_19248_19285[(2)] = inst_19199);

(statearr_19248_19285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (21))){
var inst_19205 = (state_19239[(2)]);
var inst_19206 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19207 = figwheel.client.heads_up.display_warning.call(null,inst_19206);
var state_19239__$1 = (function (){var statearr_19249 = state_19239;
(statearr_19249[(7)] = inst_19205);

return statearr_19249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(22),inst_19207);
} else {
if((state_val_19240 === (13))){
var inst_19233 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19250_19286 = state_19239__$1;
(statearr_19250_19286[(2)] = inst_19233);

(statearr_19250_19286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (22))){
var inst_19209 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19251_19287 = state_19239__$1;
(statearr_19251_19287[(2)] = inst_19209);

(statearr_19251_19287[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (29))){
var inst_19225 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19252_19288 = state_19239__$1;
(statearr_19252_19288[(2)] = inst_19225);

(statearr_19252_19288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (6))){
var inst_19179 = figwheel.client.heads_up.clear.call(null);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(9),inst_19179);
} else {
if((state_val_19240 === (28))){
var state_19239__$1 = state_19239;
var statearr_19253_19289 = state_19239__$1;
(statearr_19253_19289[(2)] = null);

(statearr_19253_19289[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (25))){
var inst_19227 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19254_19290 = state_19239__$1;
(statearr_19254_19290[(2)] = inst_19227);

(statearr_19254_19290[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (17))){
var inst_19231 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19255_19291 = state_19239__$1;
(statearr_19255_19291[(2)] = inst_19231);

(statearr_19255_19291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (3))){
var inst_19177 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_19239__$1 = state_19239;
if(inst_19177){
var statearr_19256_19292 = state_19239__$1;
(statearr_19256_19292[(1)] = (6));

} else {
var statearr_19257_19293 = state_19239__$1;
(statearr_19257_19293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (12))){
var inst_19196 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_19239__$1 = state_19239;
if(inst_19196){
var statearr_19258_19294 = state_19239__$1;
(statearr_19258_19294[(1)] = (15));

} else {
var statearr_19259_19295 = state_19239__$1;
(statearr_19259_19295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (2))){
var inst_19173 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(5),inst_19173);
} else {
if((state_val_19240 === (23))){
var inst_19213 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19214 = figwheel.client.heads_up.display_warning.call(null,inst_19213);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(26),inst_19214);
} else {
if((state_val_19240 === (19))){
var inst_19211 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_19239__$1 = state_19239;
if(inst_19211){
var statearr_19260_19296 = state_19239__$1;
(statearr_19260_19296[(1)] = (23));

} else {
var statearr_19261_19297 = state_19239__$1;
(statearr_19261_19297[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (11))){
var inst_19190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19191 = figwheel.client.format_messages.call(null,inst_19190);
var inst_19192 = figwheel.client.heads_up.display_error.call(null,inst_19191);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(14),inst_19192);
} else {
if((state_val_19240 === (9))){
var inst_19181 = (state_19239[(2)]);
var inst_19182 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19183 = figwheel.client.format_messages.call(null,inst_19182);
var inst_19184 = figwheel.client.heads_up.display_error.call(null,inst_19183);
var state_19239__$1 = (function (){var statearr_19262 = state_19239;
(statearr_19262[(8)] = inst_19181);

return statearr_19262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(10),inst_19184);
} else {
if((state_val_19240 === (5))){
var inst_19175 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19263_19298 = state_19239__$1;
(statearr_19263_19298[(2)] = inst_19175);

(statearr_19263_19298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (14))){
var inst_19194 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19264_19299 = state_19239__$1;
(statearr_19264_19299[(2)] = inst_19194);

(statearr_19264_19299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (26))){
var inst_19216 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19265_19300 = state_19239__$1;
(statearr_19265_19300[(2)] = inst_19216);

(statearr_19265_19300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (16))){
var inst_19201 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_19239__$1 = state_19239;
if(inst_19201){
var statearr_19266_19301 = state_19239__$1;
(statearr_19266_19301[(1)] = (18));

} else {
var statearr_19267_19302 = state_19239__$1;
(statearr_19267_19302[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (30))){
var inst_19222 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19268_19303 = state_19239__$1;
(statearr_19268_19303[(2)] = inst_19222);

(statearr_19268_19303[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (10))){
var inst_19186 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19269_19304 = state_19239__$1;
(statearr_19269_19304[(2)] = inst_19186);

(statearr_19269_19304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (18))){
var inst_19203 = figwheel.client.heads_up.clear.call(null);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19239__$1,(21),inst_19203);
} else {
if((state_val_19240 === (8))){
var inst_19235 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19270_19305 = state_19239__$1;
(statearr_19270_19305[(2)] = inst_19235);

(statearr_19270_19305[(1)] = (4));


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
});})(c__12975__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__12919__auto__,c__12975__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19274 = [null,null,null,null,null,null,null,null,null];
(statearr_19274[(0)] = state_machine__12920__auto__);

(statearr_19274[(1)] = (1));

return statearr_19274;
});
var state_machine__12920__auto____1 = (function (state_19239){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19275){if((e19275 instanceof Object)){
var ex__12923__auto__ = e19275;
var statearr_19276_19306 = state_19239;
(statearr_19276_19306[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19307 = state_19239;
state_19239 = G__19307;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19239){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__,msg_hist,msg_names,msg))
})();
var state__12977__auto__ = (function (){var statearr_19277 = f__12976__auto__.call(null);
(statearr_19277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__,msg_hist,msg_names,msg))
);

return c__12975__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__12975__auto___19370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto___19370,ch){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto___19370,ch){
return (function (state_19353){
var state_val_19354 = (state_19353[(1)]);
if((state_val_19354 === (8))){
var inst_19345 = (state_19353[(2)]);
var state_19353__$1 = (function (){var statearr_19355 = state_19353;
(statearr_19355[(7)] = inst_19345);

return statearr_19355;
})();
var statearr_19356_19371 = state_19353__$1;
(statearr_19356_19371[(2)] = null);

(statearr_19356_19371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (7))){
var inst_19349 = (state_19353[(2)]);
var state_19353__$1 = state_19353;
var statearr_19357_19372 = state_19353__$1;
(statearr_19357_19372[(2)] = inst_19349);

(statearr_19357_19372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (6))){
var state_19353__$1 = state_19353;
var statearr_19358_19373 = state_19353__$1;
(statearr_19358_19373[(2)] = null);

(statearr_19358_19373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (5))){
var inst_19341 = (state_19353[(8)]);
var inst_19343 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_19341);
var state_19353__$1 = state_19353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19353__$1,(8),inst_19343);
} else {
if((state_val_19354 === (4))){
var inst_19341 = (state_19353[(8)]);
var inst_19341__$1 = (state_19353[(2)]);
var state_19353__$1 = (function (){var statearr_19359 = state_19353;
(statearr_19359[(8)] = inst_19341__$1);

return statearr_19359;
})();
if(cljs.core.truth_(inst_19341__$1)){
var statearr_19360_19374 = state_19353__$1;
(statearr_19360_19374[(1)] = (5));

} else {
var statearr_19361_19375 = state_19353__$1;
(statearr_19361_19375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (3))){
var inst_19351 = (state_19353[(2)]);
var state_19353__$1 = state_19353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19353__$1,inst_19351);
} else {
if((state_val_19354 === (2))){
var state_19353__$1 = state_19353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19353__$1,(4),ch);
} else {
if((state_val_19354 === (1))){
var state_19353__$1 = state_19353;
var statearr_19362_19376 = state_19353__$1;
(statearr_19362_19376[(2)] = null);

(statearr_19362_19376[(1)] = (2));


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
});})(c__12975__auto___19370,ch))
;
return ((function (switch__12919__auto__,c__12975__auto___19370,ch){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19366 = [null,null,null,null,null,null,null,null,null];
(statearr_19366[(0)] = state_machine__12920__auto__);

(statearr_19366[(1)] = (1));

return statearr_19366;
});
var state_machine__12920__auto____1 = (function (state_19353){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19367){if((e19367 instanceof Object)){
var ex__12923__auto__ = e19367;
var statearr_19368_19377 = state_19353;
(statearr_19368_19377[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19378 = state_19353;
state_19353 = G__19378;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19353){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto___19370,ch))
})();
var state__12977__auto__ = (function (){var statearr_19369 = f__12976__auto__.call(null);
(statearr_19369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto___19370);

return statearr_19369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto___19370,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__){
return (function (state_19399){
var state_val_19400 = (state_19399[(1)]);
if((state_val_19400 === (2))){
var inst_19396 = (state_19399[(2)]);
var inst_19397 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_19399__$1 = (function (){var statearr_19401 = state_19399;
(statearr_19401[(7)] = inst_19396);

return statearr_19401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19399__$1,inst_19397);
} else {
if((state_val_19400 === (1))){
var inst_19394 = cljs.core.async.timeout.call(null,(3000));
var state_19399__$1 = state_19399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19399__$1,(2),inst_19394);
} else {
return null;
}
}
});})(c__12975__auto__))
;
return ((function (switch__12919__auto__,c__12975__auto__){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19405 = [null,null,null,null,null,null,null,null];
(statearr_19405[(0)] = state_machine__12920__auto__);

(statearr_19405[(1)] = (1));

return statearr_19405;
});
var state_machine__12920__auto____1 = (function (state_19399){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19406){if((e19406 instanceof Object)){
var ex__12923__auto__ = e19406;
var statearr_19407_19409 = state_19399;
(statearr_19407_19409[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19410 = state_19399;
state_19399 = G__19410;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19399){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__))
})();
var state__12977__auto__ = (function (){var statearr_19408 = f__12976__auto__.call(null);
(statearr_19408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__))
);

return c__12975__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19414 = {"detail":url};
return obj19414;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19415){
var map__19421 = p__19415;
var map__19421__$1 = ((cljs.core.seq_QMARK_.call(null,map__19421))?cljs.core.apply.call(null,cljs.core.hash_map,map__19421):map__19421);
var ed = map__19421__$1;
var exception_data = cljs.core.get.call(null,map__19421__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__19421__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__19422_19426 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__19423_19427 = null;
var count__19424_19428 = (0);
var i__19425_19429 = (0);
while(true){
if((i__19425_19429 < count__19424_19428)){
var msg_19430 = cljs.core._nth.call(null,chunk__19423_19427,i__19425_19429);
console.log(msg_19430);

var G__19431 = seq__19422_19426;
var G__19432 = chunk__19423_19427;
var G__19433 = count__19424_19428;
var G__19434 = (i__19425_19429 + (1));
seq__19422_19426 = G__19431;
chunk__19423_19427 = G__19432;
count__19424_19428 = G__19433;
i__19425_19429 = G__19434;
continue;
} else {
var temp__4388__auto___19435 = cljs.core.seq.call(null,seq__19422_19426);
if(temp__4388__auto___19435){
var seq__19422_19436__$1 = temp__4388__auto___19435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19422_19436__$1)){
var c__9979__auto___19437 = cljs.core.chunk_first.call(null,seq__19422_19436__$1);
var G__19438 = cljs.core.chunk_rest.call(null,seq__19422_19436__$1);
var G__19439 = c__9979__auto___19437;
var G__19440 = cljs.core.count.call(null,c__9979__auto___19437);
var G__19441 = (0);
seq__19422_19426 = G__19438;
chunk__19423_19427 = G__19439;
count__19424_19428 = G__19440;
i__19425_19429 = G__19441;
continue;
} else {
var msg_19442 = cljs.core.first.call(null,seq__19422_19436__$1);
console.log(msg_19442);

var G__19443 = cljs.core.next.call(null,seq__19422_19436__$1);
var G__19444 = null;
var G__19445 = (0);
var G__19446 = (0);
seq__19422_19426 = G__19443;
chunk__19423_19427 = G__19444;
count__19424_19428 = G__19445;
i__19425_19429 = G__19446;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__19447){
var map__19449 = p__19447;
var map__19449__$1 = ((cljs.core.seq_QMARK_.call(null,map__19449))?cljs.core.apply.call(null,cljs.core.hash_map,map__19449):map__19449);
var w = map__19449__$1;
var message = cljs.core.get.call(null,map__19449__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__19456 = cljs.core.seq.call(null,plugins);
var chunk__19457 = null;
var count__19458 = (0);
var i__19459 = (0);
while(true){
if((i__19459 < count__19458)){
var vec__19460 = cljs.core._nth.call(null,chunk__19457,i__19459);
var k = cljs.core.nth.call(null,vec__19460,(0),null);
var plugin = cljs.core.nth.call(null,vec__19460,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19462 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__19456,chunk__19457,count__19458,i__19459,pl_19462,vec__19460,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_19462.call(null,msg_hist);
});})(seq__19456,chunk__19457,count__19458,i__19459,pl_19462,vec__19460,k,plugin))
);
} else {
}

var G__19463 = seq__19456;
var G__19464 = chunk__19457;
var G__19465 = count__19458;
var G__19466 = (i__19459 + (1));
seq__19456 = G__19463;
chunk__19457 = G__19464;
count__19458 = G__19465;
i__19459 = G__19466;
continue;
} else {
var temp__4388__auto__ = cljs.core.seq.call(null,seq__19456);
if(temp__4388__auto__){
var seq__19456__$1 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19456__$1)){
var c__9979__auto__ = cljs.core.chunk_first.call(null,seq__19456__$1);
var G__19467 = cljs.core.chunk_rest.call(null,seq__19456__$1);
var G__19468 = c__9979__auto__;
var G__19469 = cljs.core.count.call(null,c__9979__auto__);
var G__19470 = (0);
seq__19456 = G__19467;
chunk__19457 = G__19468;
count__19458 = G__19469;
i__19459 = G__19470;
continue;
} else {
var vec__19461 = cljs.core.first.call(null,seq__19456__$1);
var k = cljs.core.nth.call(null,vec__19461,(0),null);
var plugin = cljs.core.nth.call(null,vec__19461,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19471 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__19456,chunk__19457,count__19458,i__19459,pl_19471,vec__19461,k,plugin,seq__19456__$1,temp__4388__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_19471.call(null,msg_hist);
});})(seq__19456,chunk__19457,count__19458,i__19459,pl_19471,vec__19461,k,plugin,seq__19456__$1,temp__4388__auto__))
);
} else {
}

var G__19472 = cljs.core.next.call(null,seq__19456__$1);
var G__19473 = null;
var G__19474 = (0);
var G__19475 = (0);
seq__19456 = G__19472;
chunk__19457 = G__19473;
count__19458 = G__19474;
i__19459 = G__19475;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__19476){
var map__19478 = p__19476;
var map__19478__$1 = ((cljs.core.seq_QMARK_.call(null,map__19478))?cljs.core.apply.call(null,cljs.core.hash_map,map__19478):map__19478);
var opts = map__19478__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19476 = null;
if (arguments.length > 0) {
  p__19476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__19476);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19479){
var p__19476 = cljs.core.seq(arglist__19479);
return watch_and_reload__delegate(p__19476);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1420461351914