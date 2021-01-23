(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb3d05c6"],{"0798":function(t,e,s){"use strict";s("caad");var r=s("5530"),i=s("ade3"),o=(s("0c18"),s("10d2")),n=s("afdd"),a=s("9d26"),l=s("f2e7"),c=s("7560"),u=s("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=s("58df"),p=s("d9bd");e["a"]=Object(h["a"])(o["a"],l["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(i["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},a990:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grey lighten-3 fill-height d-flex  align-center justify-center"},[s("v-card",{staticClass:"pa-10 text-sm-h6 col-sm-7 col-md-5 col-10",attrs:{shaped:"",elevation:"24"}},[s("v-alert",{attrs:{dense:"",outlined:"",shaped:"",dismissible:"",type:"error"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(" Authentication failed!! ")]),s("v-alert",{attrs:{type:"success",dense:"",outlines:"",sheped:""},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t._v(" Login Successfully ")]),s("h2",{staticClass:"text-center"},[t._v("Log in to JobHunt")]),s("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("v-text-field",{attrs:{label:"Email",rules:[t.required("email"),t.emailPattern()],required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{type:"password",rules:[t.required("password"),t.passwordPattern()],label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-btn",{staticClass:"my-4",attrs:{depressed:"",color:"primary",type:"submit"}},[t._v(" Login ")])],1),s("div",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/register",tag:"a"}},[t._v("Sign up")])],1)],1)],1)},i=[],o=s("5530"),n=s("56d7"),a=s("b8d3"),l={data:function(){return Object(o["a"])(Object(o["a"])({email:"",password:""},a["a"]),{},{alert:!1,success:!1})},methods:{submit:function(){var t=this,e=this.$refs.form.validate();if(e){var s=JSON.parse(localStorage.getItem(this.email));s&&s.password==this.password?(localStorage.setItem("user",this.email),n["eventBus"].$emit("userLogin",this.email),this.success=!0,this.alert=!1,setTimeout((function(){t.$router.push("/")}),1500)):this.alert=!0}}},beforeRouteEnter:function(t,e,s){var r=localStorage.getItem("user");s(!r||"/")}},c=l,u=(s("ab21"),s("2877")),d=s("6544"),h=s.n(d),p=s("0798"),f=s("8336"),m=s("b0af"),v=s("4bd4"),b=s("8654"),g=Object(u["a"])(c,r,i,!1,null,"d4e74ad4",null);e["default"]=g.exports;h()(g,{VAlert:p["a"],VBtn:f["a"],VCard:m["a"],VForm:v["a"],VTextField:b["a"]})},ab21:function(t,e,s){"use strict";s("b808")},afdd:function(t,e,s){"use strict";var r=s("8336");e["a"]=r["a"]},b808:function(t,e,s){},b8d3:function(t,e,s){"use strict";var r=function(t){return function(e){return e&&e.length>0||"".concat(t," is required")}},i=function(){return function(t){return/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(t)||"Email is not valid"}},o=function(){return function(t){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(t)||"Password must contain at least 1 upper, 1 lower, 1 special char and numbers"}};e["a"]={required:r,emailPattern:i,passwordPattern:o}}}]);
//# sourceMappingURL=chunk-cb3d05c6.52e36620.js.map