(window.webpackJsonp=window.webpackJsonp||[]).push([[20,8,10],{450:function(t,e,n){var content=n(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("65c238dc",content,!0,{sourceMap:!1})},451:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d}));var r=n(454),o=n(0),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");r.a},452:function(t,e,n){"use strict";n(450)},453:function(t,e,n){var r=n(17)(!1);r.push([t.i,".gradient-fill .v-responsive__content{background:#000;background:linear-gradient(90deg,rgba(3,12,41,.7),rgba(5,11,31,.7))}",""]),t.exports=r},454:function(t,e,n){"use strict";n(10),n(11),n(12),n(3),n(14),n(9),n(15);var r=n(1),o=(n(21),n(176),n(177),n(457),n(221)),l=n(222),c=n(98),d=n(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},455:function(t,e,n){"use strict";var r=n(139);e.a=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}})},456:function(t,e,n){"use strict";n.r(e);var r={props:{heroAlt:{type:Array,default:function(){return[]}}}},o=(n(452),n(38)),l=n(49),c=n.n(l),d=n(437),v=n(449),h=n(170),m=n(438),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"hero"}},t._l(t.heroAlt,(function(e,i){return n("v-img",{key:i,staticClass:"gradient-fill",attrs:{width:"100%",height:"30vh",src:e.src,dark:""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",[n("v-col",[n("h1",{staticClass:"\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            "},[t._v("\n            "+t._s(e.heading.toUpperCase())+"\n          ")])])],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:v.a,VImg:h.a,VRow:m.a})},457:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("e23b7040",content,!0,{sourceMap:!1})},458:function(t,e,n){var r=n(17)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},460:function(t,e,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("ff794d24",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n(460)},469:function(t,e,n){var r=n(17)(!1);r.push([t.i,".zoom[data-v-604166f0]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-604166f0],.zoom[data-v-604166f0]{transition:transform .2s}",""]),t.exports=r},470:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("01907af4",content,!0,{sourceMap:!1})},471:function(t,e,n){var r=n(17)(!1);r.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=r},474:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{planDuration:"monthly",plans:[{plan:"Basic",elevation:0,color:"primary darken-1",description:"Best Plan for Small Businesses",monthly:"$10",yearly:"$100",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Silver",elevation:16,color:"green darken-2",description:"Best Plan for Professional Users",monthly:"$40",yearly:"$400",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Gold",elevation:0,color:"orange darken-3",description:"Best Plan for Power Users",monthly:"$100",yearly:"$1000",features:[{icon:"mdi-web",text:"unlimited websites"},{icon:"mdi-harddisk",text:"unlimited storage"},{icon:"mdi-signal",text:"unlimited bandwidth"},{icon:"mdi-account",text:"unlimited addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]}]}}},o=(n(468),n(38)),l=n(49),c=n.n(l),d=n(220),v=n(487),h=n(454),m=n(451),f=n(437),x=n(449),_=n(488),y=n(207),w=n(208),k=n(135),C=n(39),O=n(118),j=n(438),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-16",class:t.$vuetify.theme.dark?"black":"white"},[n("v-container",[n("v-row",[n("v-col",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"text-center"},[n("h2",{staticClass:"\n                text-h4 text-md-h3 text-center\n                font-weight-black\n                text-capitalize\n                mb-4\n              "},[t._v("\n              The most affordable pricing\n            ")]),t._v(" "),n("p",{staticClass:"my-10 title"},[t._v("\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n              diam nonummy nibh euismod tincidunt ut laoreet dolore magna\n              aliquam erat volutpat.\n            ")]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn-toggle",{attrs:{"active-class":"primary darken-1",borderless:"",mandatory:"",light:"",color:"white"},model:{value:t.planDuration,callback:function(e){t.planDuration=e},expression:"planDuration"}},[n("v-btn",{attrs:{value:"monthly"}},[t._v(" Monthly Plan ")]),t._v(" "),n("v-btn",{attrs:{value:"yearly"}},[t._v(" Yearly Plan ")])],1)],1)])],1)],1)],1)],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"}},t._l(t.plans,(function(e,r){return n("v-col",{key:"plan-"+r,attrs:{cols:"12",md:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{staticClass:"mx-auto transition-swing",class:o?"zoom":"notzoom",attrs:{elevation:o?24:e.elevation,color:e.color,"max-width":"400"}},[n("h3",{staticClass:"text-h4 text-center font-weight-black white--text pt-5",domProps:{textContent:t._s(e.plan)}}),t._v(" "),n("v-card-text",{staticClass:"text-center subtitle-1 white--text py-2",domProps:{textContent:t._s(e.description)}}),t._v(" "),n("v-card-subtitle",{staticClass:"text-h5 font-weight-black text-center white--text pt-0"},[t._v(t._s("monthly"===t.planDuration?e.monthly:e.yearly)+"\n              "),n("span",{staticClass:"subtitle-1"},[t._v("per "+t._s("monthly"===t.planDuration?"month":"year"))])]),t._v(" "),n("v-list",[t._l(e.features,(function(e,r){return n("v-list-item",{key:"feature-"+r,attrs:{dense:""}},[n("v-list-item-icon",[n("v-icon",[t._v("\n                    "+t._s(e.icon)+"\n                  ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.text)}})],1)],1)})),t._v(" "),n("v-list-item",[n("v-btn",{staticClass:"mx-auto my-3",attrs:{color:"primary",large:"",block:"",rounded:""}},[t._v("\n                  Buy Now\n                ")])],1)],2)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"604166f0",null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:v.a,VCard:h.a,VCardSubtitle:m.b,VCardText:m.c,VCol:f.a,VContainer:x.a,VHover:_.a,VIcon:y.a,VList:w.a,VListItem:k.a,VListItemContent:C.a,VListItemIcon:O.a,VListItemTitle:C.c,VRow:j.a})},487:function(t,e,n){"use strict";n(10),n(11),n(12),n(3),n(14),n(9),n(15);var r=n(1),o=(n(470),n(455)),l=n(26),c=n(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a,l.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},o.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,v({},o.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},488:function(t,e,n){"use strict";var r=n(143),o=n(54),l=n(6),c=n(8);e.a=Object(l.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},524:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{heroAlt:[{src:"pexels-ekaterina-bolovtsova-4048767.jpg",heading:" Services "}],cards:[{title:"Material Design",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-material-design"},{title:"Powerful template",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-desktop-mac"},{title:"Retina Ready",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-eye"},{title:"Fast Loading",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-speedometer"},{title:"Unlimited Colors",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-infinity"},{title:"Premium Sliders",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-slide"}]}},head:function(){return{title:"Services",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}},o=n(38),l=n(49),c=n.n(l),d=n(212),v=n(437),h=n(449),m=n(207),f=n(438),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("SectionsHeroAlt",{attrs:{"hero-alt":t.heroAlt}}),t._v(" "),n("v-container",{staticClass:"py-16"},[n("h2",{staticClass:"\n            text-h4 text-md-h3 text-center\n            font-weight-black\n            text-capitalize\n          "},[t._v("\n          What we do\n        ")]),t._v(" "),n("p",{staticClass:"text-h6 text-uppercase font-weight-light text-center my-16"},[t._v("\n          Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse\n          condimentum porttitor cursumus.\n        ")]),t._v(" "),n("v-row",t._l(t.cards,(function(e,r){return n("v-col",{key:r,staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4",xl:"2"}},[n("v-avatar",{staticClass:"mb-5",attrs:{size:"80",color:"primary"}},[n("v-icon",{attrs:{dark:"",large:""}},[t._v("\n                "+t._s(e.icon)+"\n              ")])],1),t._v(" "),n("div",{staticClass:"title text-uppercase mt-1 mb-4",domProps:{textContent:t._s(e.title)}}),t._v(" "),n("p",{domProps:{textContent:t._s(e.text)}}),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}})],1)],1)})),1)],1),t._v(" "),n("SectionsPricing")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{SectionsHeroAlt:n(456).default,SectionsPricing:n(474).default}),c()(component,{VAvatar:d.a,VCol:v.a,VContainer:h.a,VIcon:m.a,VRow:f.a})}}]);