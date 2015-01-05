// Compiled by ClojureScript 0.0-2411
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.socket');
goog.require('clojure.string');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__19495_19503 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__19496_19504 = null;
var count__19497_19505 = (0);
var i__19498_19506 = (0);
while(true){
if((i__19498_19506 < count__19497_19505)){
var k_19507 = cljs.core._nth.call(null,chunk__19496_19504,i__19498_19506);
e.setAttribute(cljs.core.name.call(null,k_19507),cljs.core.get.call(null,attrs,k_19507));

var G__19508 = seq__19495_19503;
var G__19509 = chunk__19496_19504;
var G__19510 = count__19497_19505;
var G__19511 = (i__19498_19506 + (1));
seq__19495_19503 = G__19508;
chunk__19496_19504 = G__19509;
count__19497_19505 = G__19510;
i__19498_19506 = G__19511;
continue;
} else {
var temp__4388__auto___19512 = cljs.core.seq.call(null,seq__19495_19503);
if(temp__4388__auto___19512){
var seq__19495_19513__$1 = temp__4388__auto___19512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19495_19513__$1)){
var c__9979__auto___19514 = cljs.core.chunk_first.call(null,seq__19495_19513__$1);
var G__19515 = cljs.core.chunk_rest.call(null,seq__19495_19513__$1);
var G__19516 = c__9979__auto___19514;
var G__19517 = cljs.core.count.call(null,c__9979__auto___19514);
var G__19518 = (0);
seq__19495_19503 = G__19515;
chunk__19496_19504 = G__19516;
count__19497_19505 = G__19517;
i__19498_19506 = G__19518;
continue;
} else {
var k_19519 = cljs.core.first.call(null,seq__19495_19513__$1);
e.setAttribute(cljs.core.name.call(null,k_19519),cljs.core.get.call(null,attrs,k_19519));

var G__19520 = cljs.core.next.call(null,seq__19495_19513__$1);
var G__19521 = null;
var G__19522 = (0);
var G__19523 = (0);
seq__19495_19503 = G__19520;
chunk__19496_19504 = G__19521;
count__19497_19505 = G__19522;
i__19498_19506 = G__19523;
continue;
}
} else {
}
}
break;
}

var seq__19499_19524 = cljs.core.seq.call(null,children);
var chunk__19500_19525 = null;
var count__19501_19526 = (0);
var i__19502_19527 = (0);
while(true){
if((i__19502_19527 < count__19501_19526)){
var ch_19528 = cljs.core._nth.call(null,chunk__19500_19525,i__19502_19527);
e.appendChild(ch_19528);

var G__19529 = seq__19499_19524;
var G__19530 = chunk__19500_19525;
var G__19531 = count__19501_19526;
var G__19532 = (i__19502_19527 + (1));
seq__19499_19524 = G__19529;
chunk__19500_19525 = G__19530;
count__19501_19526 = G__19531;
i__19502_19527 = G__19532;
continue;
} else {
var temp__4388__auto___19533 = cljs.core.seq.call(null,seq__19499_19524);
if(temp__4388__auto___19533){
var seq__19499_19534__$1 = temp__4388__auto___19533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19499_19534__$1)){
var c__9979__auto___19535 = cljs.core.chunk_first.call(null,seq__19499_19534__$1);
var G__19536 = cljs.core.chunk_rest.call(null,seq__19499_19534__$1);
var G__19537 = c__9979__auto___19535;
var G__19538 = cljs.core.count.call(null,c__9979__auto___19535);
var G__19539 = (0);
seq__19499_19524 = G__19536;
chunk__19500_19525 = G__19537;
count__19501_19526 = G__19538;
i__19502_19527 = G__19539;
continue;
} else {
var ch_19540 = cljs.core.first.call(null,seq__19499_19534__$1);
e.appendChild(ch_19540);

var G__19541 = cljs.core.next.call(null,seq__19499_19534__$1);
var G__19542 = null;
var G__19543 = (0);
var G__19544 = (0);
seq__19499_19524 = G__19541;
chunk__19500_19525 = G__19542;
count__19501_19526 = G__19543;
i__19502_19527 = G__19544;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__19545){
var t = cljs.core.first(arglist__19545);
arglist__19545 = cljs.core.next(arglist__19545);
var attrs = cljs.core.first(arglist__19545);
var children = cljs.core.rest(arglist__19545);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__10089__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10090__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10091__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10092__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10093__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__10089__auto__,prefer_table__10090__auto__,method_cache__10091__auto__,cached_hierarchy__10092__auto__,hierarchy__10093__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__10089__auto__,prefer_table__10090__auto__,method_cache__10091__auto__,cached_hierarchy__10092__auto__,hierarchy__10093__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10093__auto__,method_table__10089__auto__,prefer_table__10090__auto__,method_cache__10091__auto__,cached_hierarchy__10092__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__19546,st_map){
var map__19550 = p__19546;
var map__19550__$1 = ((cljs.core.seq_QMARK_.call(null,map__19550))?cljs.core.apply.call(null,cljs.core.hash_map,map__19550):map__19550);
var container_el = cljs.core.get.call(null,map__19550__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__19550,map__19550__$1,container_el){
return (function (p__19551){
var vec__19552 = p__19551;
var k = cljs.core.nth.call(null,vec__19552,(0),null);
var v = cljs.core.nth.call(null,vec__19552,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__19550,map__19550__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__19553,dom_str){
var map__19555 = p__19553;
var map__19555__$1 = ((cljs.core.seq_QMARK_.call(null,map__19555))?cljs.core.apply.call(null,cljs.core.hash_map,map__19555):map__19555);
var c = map__19555__$1;
var content_area_el = cljs.core.get.call(null,map__19555__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__19556){
var map__19558 = p__19556;
var map__19558__$1 = ((cljs.core.seq_QMARK_.call(null,map__19558))?cljs.core.apply.call(null,cljs.core.hash_map,map__19558):map__19558);
var content_area_el = cljs.core.get.call(null,map__19558__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__){
return (function (state_19600){
var state_val_19601 = (state_19600[(1)]);
if((state_val_19601 === (2))){
var inst_19585 = (state_19600[(7)]);
var inst_19594 = (state_19600[(2)]);
var inst_19595 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_19596 = ["auto"];
var inst_19597 = cljs.core.PersistentHashMap.fromArrays(inst_19595,inst_19596);
var inst_19598 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19585,inst_19597);
var state_19600__$1 = (function (){var statearr_19602 = state_19600;
(statearr_19602[(8)] = inst_19594);

return statearr_19602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19600__$1,inst_19598);
} else {
if((state_val_19601 === (1))){
var inst_19585 = (state_19600[(7)]);
var inst_19585__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_19586 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_19587 = ["10px","10px","100%","68px","1.0"];
var inst_19588 = cljs.core.PersistentHashMap.fromArrays(inst_19586,inst_19587);
var inst_19589 = cljs.core.merge.call(null,inst_19588,style);
var inst_19590 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19585__$1,inst_19589);
var inst_19591 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_19585__$1,msg);
var inst_19592 = cljs.core.async.timeout.call(null,(300));
var state_19600__$1 = (function (){var statearr_19603 = state_19600;
(statearr_19603[(9)] = inst_19591);

(statearr_19603[(10)] = inst_19590);

(statearr_19603[(7)] = inst_19585__$1);

return statearr_19603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19600__$1,(2),inst_19592);
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
var statearr_19607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19607[(0)] = state_machine__12920__auto__);

(statearr_19607[(1)] = (1));

return statearr_19607;
});
var state_machine__12920__auto____1 = (function (state_19600){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19608){if((e19608 instanceof Object)){
var ex__12923__auto__ = e19608;
var statearr_19609_19611 = state_19600;
(statearr_19609_19611[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19612 = state_19600;
state_19600 = G__19612;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19600){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__))
})();
var state__12977__auto__ = (function (){var statearr_19610 = f__12976__auto__.call(null);
(statearr_19610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__))
);

return c__12975__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4386__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4386__auto__)){
var vec__19614 = temp__4386__auto__;
var f = cljs.core.nth.call(null,vec__19614,(0),null);
var ln = cljs.core.nth.call(null,vec__19614,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__19617 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__19617,(0),null);
var file_line = cljs.core.nth.call(null,vec__19617,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__19617,file_name,file_line){
return (function (p1__19615_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__19615_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__19617,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__19619 = figwheel.client.heads_up.ensure_container.call(null);
var map__19619__$1 = ((cljs.core.seq_QMARK_.call(null,map__19619))?cljs.core.apply.call(null,cljs.core.hash_map,map__19619):map__19619);
var content_area_el = cljs.core.get.call(null,map__19619__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__){
return (function (state_19666){
var state_val_19667 = (state_19666[(1)]);
if((state_val_19667 === (3))){
var inst_19649 = (state_19666[(7)]);
var inst_19663 = (state_19666[(2)]);
var inst_19664 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_19649,"");
var state_19666__$1 = (function (){var statearr_19668 = state_19666;
(statearr_19668[(8)] = inst_19663);

return statearr_19668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19666__$1,inst_19664);
} else {
if((state_val_19667 === (2))){
var inst_19649 = (state_19666[(7)]);
var inst_19656 = (state_19666[(2)]);
var inst_19657 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_19658 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_19659 = cljs.core.PersistentHashMap.fromArrays(inst_19657,inst_19658);
var inst_19660 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19649,inst_19659);
var inst_19661 = cljs.core.async.timeout.call(null,(200));
var state_19666__$1 = (function (){var statearr_19669 = state_19666;
(statearr_19669[(9)] = inst_19660);

(statearr_19669[(10)] = inst_19656);

return statearr_19669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19666__$1,(3),inst_19661);
} else {
if((state_val_19667 === (1))){
var inst_19649 = (state_19666[(7)]);
var inst_19649__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_19650 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_19651 = ["0.0"];
var inst_19652 = cljs.core.PersistentHashMap.fromArrays(inst_19650,inst_19651);
var inst_19653 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19649__$1,inst_19652);
var inst_19654 = cljs.core.async.timeout.call(null,(300));
var state_19666__$1 = (function (){var statearr_19670 = state_19666;
(statearr_19670[(11)] = inst_19653);

(statearr_19670[(7)] = inst_19649__$1);

return statearr_19670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19666__$1,(2),inst_19654);
} else {
return null;
}
}
}
});})(c__12975__auto__))
;
return ((function (switch__12919__auto__,c__12975__auto__){
return (function() {
var state_machine__12920__auto__ = null;
var state_machine__12920__auto____0 = (function (){
var statearr_19674 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19674[(0)] = state_machine__12920__auto__);

(statearr_19674[(1)] = (1));

return statearr_19674;
});
var state_machine__12920__auto____1 = (function (state_19666){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19675){if((e19675 instanceof Object)){
var ex__12923__auto__ = e19675;
var statearr_19676_19678 = state_19666;
(statearr_19676_19678[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19679 = state_19666;
state_19666 = G__19679;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19666){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__))
})();
var state__12977__auto__ = (function (){var statearr_19677 = f__12976__auto__.call(null);
(statearr_19677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__))
);

return c__12975__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__12975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12975__auto__){
return (function (){
var f__12976__auto__ = (function (){var switch__12919__auto__ = ((function (c__12975__auto__){
return (function (state_19711){
var state_val_19712 = (state_19711[(1)]);
if((state_val_19712 === (4))){
var inst_19709 = (state_19711[(2)]);
var state_19711__$1 = state_19711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19711__$1,inst_19709);
} else {
if((state_val_19712 === (3))){
var inst_19706 = (state_19711[(2)]);
var inst_19707 = figwheel.client.heads_up.clear.call(null);
var state_19711__$1 = (function (){var statearr_19713 = state_19711;
(statearr_19713[(7)] = inst_19706);

return statearr_19713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19711__$1,(4),inst_19707);
} else {
if((state_val_19712 === (2))){
var inst_19703 = (state_19711[(2)]);
var inst_19704 = cljs.core.async.timeout.call(null,(400));
var state_19711__$1 = (function (){var statearr_19714 = state_19711;
(statearr_19714[(8)] = inst_19703);

return statearr_19714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19711__$1,(3),inst_19704);
} else {
if((state_val_19712 === (1))){
var inst_19701 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_19711__$1 = state_19711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19711__$1,(2),inst_19701);
} else {
return null;
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
var statearr_19718 = [null,null,null,null,null,null,null,null,null];
(statearr_19718[(0)] = state_machine__12920__auto__);

(statearr_19718[(1)] = (1));

return statearr_19718;
});
var state_machine__12920__auto____1 = (function (state_19711){
while(true){
var ret_value__12921__auto__ = (function (){try{while(true){
var result__12922__auto__ = switch__12919__auto__.call(null,state_19711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12922__auto__;
}
break;
}
}catch (e19719){if((e19719 instanceof Object)){
var ex__12923__auto__ = e19719;
var statearr_19720_19722 = state_19711;
(statearr_19720_19722[(5)] = ex__12923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19723 = state_19711;
state_19711 = G__19723;
continue;
} else {
return ret_value__12921__auto__;
}
break;
}
});
state_machine__12920__auto__ = function(state_19711){
switch(arguments.length){
case 0:
return state_machine__12920__auto____0.call(this);
case 1:
return state_machine__12920__auto____1.call(this,state_19711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12920__auto____0;
state_machine__12920__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12920__auto____1;
return state_machine__12920__auto__;
})()
;})(switch__12919__auto__,c__12975__auto__))
})();
var state__12977__auto__ = (function (){var statearr_19721 = f__12976__auto__.call(null);
(statearr_19721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12975__auto__);

return statearr_19721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12977__auto__);
});})(c__12975__auto__))
);

return c__12975__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1420461352389