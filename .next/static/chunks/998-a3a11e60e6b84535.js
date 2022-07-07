(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{3998:function(e,t,s){"use strict";s.d(t,{A:function(){return G}});var r=s(5893),n=s(9583),a=s(3750),i=s(1872),l=s(7294),c=s(1163),o=s(9473),d=s(4051),x=s.n(d),u=s(1901),h=s(9669),p=s.n(h),m=s(3742),f=s(9185);function b(e,t,s,r,n,a,i){try{var l=e[a](i),c=l.value}catch(o){return void s(o)}l.done?t(c):Promise.resolve(c).then(r,n)}function v(e){return function(){var t=this,s=arguments;return new Promise((function(r,n){var a=e.apply(t,s);function i(e){b(a,r,n,i,l,"next",e)}function l(e){b(a,r,n,i,l,"throw",e)}i(void 0)}))}}function g(){var e=(0,o.I0)(),t=(new Date).getFullYear(),s=function(){for(var e=(new Date).getFullYear(),t=e-10,s=[];t<=e+10;)s.push(t++);return s}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-3xl px-1 py-5",children:"Create a new Class"}),(0,r.jsx)("form",{onSubmit:function(e){return n.apply(this,arguments)},children:(0,r.jsxs)("div",{className:"flex flex-col text-sm space-y-1",children:[(0,r.jsx)("label",{className:"text-white px-1",children:"name"}),(0,r.jsx)("input",{className:"text-white bg-stone-800 px-1 rounded-lg",type:"text",required:!0,id:"class_name",name:"class_name"}),(0,r.jsx)("label",{className:"text-white px-1",children:"school"}),(0,r.jsx)("input",{className:"text-white bg-stone-800 px-1 rounded-lg",type:"text",required:!0,id:"school_name",name:"school_name"}),(0,r.jsx)("label",{className:"text-white px-1",children:"semester"}),(0,r.jsx)("select",{className:"text-white bg-stone-800 px-1 rounded-lg",required:!0,id:"semester",name:"semester",defaultValue:"NA",children:Object.keys(u.h).map((function(e,t){return(0,r.jsx)("option",{value:e,children:e},e)}))}),(0,r.jsx)("label",{className:"text-white px-1",children:"year"}),(0,r.jsx)("select",{className:"text-white bg-stone-800 px-1 rounded-lg",required:!0,id:"year",name:"year",defaultValue:t,children:s.map((function(e){return(0,r.jsx)("option",{value:e,children:e},e)}))}),(0,r.jsx)("label",{className:"text-white px-1",children:"description"}),(0,r.jsx)("textarea",{className:"text-white bg-stone-800 px-1 rounded-lg",required:!0,id:"description",name:"description"}),(0,r.jsx)("label",{className:"text-white px-1",children:"passcode"}),(0,r.jsx)("input",{className:"text-white bg-stone-800 px-1 rounded-lg",type:"password",required:!0,id:"passcode",name:"passcode"}),(0,r.jsx)("label",{className:"text-white px-1",children:"confirm passcode"}),(0,r.jsx)("input",{className:"text-white bg-stone-800 px-1 rounded-lg",type:"password",required:!0,id:"confirm_passcode",name:"confirm_passcode"}),(0,r.jsxs)("div",{className:"flex flex-row py-5 justify-start text-center text-sm space-x-2",children:[(0,r.jsx)("div",{className:"bg-black border-2 border-white hover:bg-gray-900 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer",onClick:function(){return e((0,f.uf)(!1))},children:(0,r.jsx)("span",{children:"Cancel"})}),(0,r.jsx)("button",{type:"submit",className:"bg-blue-700 hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600 px-3 rounded-lg text-white",children:"Create"})]})]})})]});function n(){return(n=v(x().mark((function t(s){var r,n;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),r=s.currentTarget,n={name:r.class_name.value,school_name:r.school_name.value,description:r.description.value,passcode:r.passcode.value,semester:u.h[r.semester.value]},t.prev=3,t.next=6,p()({method:"post",url:"/api/classroom/new",data:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){e((0,m.Z6)(t.data))}));case 6:return t.next=8,p()({method:"get",url:"/api/classroom/class"}).then((function(t){e((0,m.qe)(t.data))}));case 8:r.reset(),e((0,f.uf)(!1)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))).apply(this,arguments)}}var j,w=s(710);function N(e,t,s,r,n,a,i){try{var l=e[a](i),c=l.value}catch(o){return void s(o)}l.done?t(c):Promise.resolve(c).then(r,n)}function y(e){return function(){var t=this,s=arguments;return new Promise((function(r,n){var a=e.apply(t,s);function i(e){N(a,r,n,i,l,"next",e)}function l(e){N(a,r,n,i,l,"throw",e)}i(void 0)}))}}function k(){var e=(0,o.v9)((function(e){return e.user_store.user})),t=(0,o.I0)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-3xl px-1 py-5",children:"Create a new Group"}),(0,r.jsx)("form",{onSubmit:function(e){return s.apply(this,arguments)},children:(0,r.jsxs)("div",{className:"flex flex-col text-sm space-y-1",children:[(0,r.jsx)("label",{className:"text-white px-1",children:"name"}),(0,r.jsx)("input",{className:"text-white bg-stone-800 p-1 rounded-lg",type:"text",required:!0,id:"group_name",name:"group_name"}),(0,r.jsx)("label",{className:"text-white px-1",children:"passcode"}),(0,r.jsx)("input",{className:"text-white bg-stone-800 p-1 rounded-lg",type:"password",required:!0,id:"passcode",name:"passcode"}),(0,r.jsx)("label",{className:"text-white px-1",children:"confirm passcode"}),(0,r.jsx)("input",{className:"text-white bg-stone-800 p-1 rounded-lg",type:"password",required:!0,id:"confirm_passcode",name:"confirm_passcode"}),(0,r.jsx)("label",{className:"text-white px-1",children:"description"}),(0,r.jsx)("textarea",{className:"text-white bg-stone-800 px-1 rounded-lg",required:!0,id:"description",name:"description"}),(0,r.jsxs)("div",{className:"flex flex-row py-5 justify-start text-center text-sm space-x-2",children:[(0,r.jsx)("div",{className:"bg-black border-2 border-white hover:bg-gray-800 hover:border-gray-300 text-white rounded-lg px-2 cursor-pointer",onClick:function(){return t((0,f.uf)(!1))},children:(0,r.jsx)("span",{children:"Cancel"})}),(0,r.jsx)("button",{type:"submit",className:"bg-blue-700 hover:bg-blue-600 border-2 border-blue-700 hover:border-blue-600 px-3 rounded-lg text-white",children:"Create"})]})]})})]});function s(){return(s=y(x().mark((function s(r){var n,a;return x().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r.preventDefault(),n=r.currentTarget,a={name:n.group_name.value,description:n.description.value,owner_id:e.id,passcode:n.passcode.value},s.prev=3,s.next=6,p()({method:"post",url:"/api/group/new",data:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){t((0,w.g6)(e.data))}));case 6:return s.next=8,p()({method:"get",url:"/api/group/group"}).then((function(e){t((0,w.fb)(e.data))}));case 8:n.reset(),t((0,f.uf)(!1)),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(3),console.log(s.t0);case 15:case"end":return s.stop()}}),s,null,[[3,12]])})))).apply(this,arguments)}}!function(e){e.CLASS="classes",e.GROUP="groups",e.USER="user",e.HOME=""}(j||(j={}));var C=s(7702),_=s(1472);function S(e,t,s,r,n,a,i){try{var l=e[a](i),c=l.value}catch(o){return void s(o)}l.done?t(c):Promise.resolve(c).then(r,n)}function T(e){return function(){var t=this,s=arguments;return new Promise((function(r,n){var a=e.apply(t,s);function i(e){S(a,r,n,i,l,"next",e)}function l(e){S(a,r,n,i,l,"throw",e)}i(void 0)}))}}function L(e){var t=(0,o.I0)(),s=(0,_.useSpring)({from:{opacity:0},to:{opacity:1},config:{duration:250}});return(0,r.jsxs)(_.animated.div,{style:s,className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"text-white text-center text-2xl mb-5",children:["Log in to ",(0,r.jsx)("span",{className:"text-blue-700",children:"kollab"})]}),(0,r.jsx)("div",{className:"px-1",children:(0,r.jsx)("form",{onSubmit:function(e){return n.apply(this,arguments)},children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"text-white",children:"email"}),(0,r.jsx)("input",{className:"text-black rounded-xl px-2",type:"text",required:!0,id:"email",name:"email"}),(0,r.jsx)("label",{className:"text-white",children:"password"}),(0,r.jsx)("input",{className:"text-black rounded-xl px-2",type:"password",required:!0,id:"password",name:"password"}),(0,r.jsxs)("div",{className:"flex flex-row py-5 text-center space-x-1",children:[(0,r.jsx)("div",{onClick:function(){return e.setSelection("")},className:"basis-2/5 bg-black border-2 border-white hover:bg-gray-800 text-white rounded-xl px-1 cursor-pointer",children:(0,r.jsx)("span",{children:"back"})}),(0,r.jsx)("button",{type:"submit",className:"basis-3/5 bg-blue-700 hover:bg-blue-600 w-full rounded-xl text-white",children:"Log in"})]})]})})})]});function n(){return(n=T(x().mark((function e(s){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),r={email:s.currentTarget.email.value,password:s.currentTarget.password.value},e.prev=2,e.next=5,p()({method:"post",url:"/api/login",data:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){t((0,f.Q_)(e.data))}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}}function O(e,t,s,r,n,a,i){try{var l=e[a](i),c=l.value}catch(o){return void s(o)}l.done?t(c):Promise.resolve(c).then(r,n)}function R(e){return function(){var t=this,s=arguments;return new Promise((function(r,n){var a=e.apply(t,s);function i(e){O(a,r,n,i,l,"next",e)}function l(e){O(a,r,n,i,l,"throw",e)}i(void 0)}))}}function q(e){var t=(0,o.I0)(),s=(0,_.useSpring)({from:{opacity:0},to:{opacity:1},config:{duration:250}});return(0,r.jsxs)(_.animated.div,{style:s,className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"text-white text-center text-2xl mb-5",children:["Create a ",(0,r.jsx)("span",{className:"text-blue-700",children:"kollab"})," account"]}),(0,r.jsx)("div",{className:"px-1",children:(0,r.jsx)("form",{onSubmit:function(e){return n.apply(this,arguments)},children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"text-white",children:"first name"}),(0,r.jsx)("input",{className:"text-black rounded-xl px-2",type:"text",required:!0,id:"first_name",name:"first_name"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"text-white",children:"last name"}),(0,r.jsx)("input",{className:"text-black rounded-xl px-2",type:"text",required:!0,id:"last_name",name:"last_name"})]})]}),(0,r.jsx)("label",{className:"text-white",children:"email"}),(0,r.jsx)("input",{className:"text-black rounded-xl px-2",type:"text",required:!0,id:"email",name:"email"}),(0,r.jsx)("label",{className:"text-white",children:"password"}),(0,r.jsx)("input",{className:"text-black rounded-xl px-2",type:"password",required:!0,id:"password",name:"password"}),(0,r.jsx)("label",{className:"text-white",children:"confirm password"}),(0,r.jsx)("input",{className:"text-black rounded-xl px-2",type:"password",required:!0,id:"confirm_password",name:"confirm_password"}),(0,r.jsxs)("div",{className:"flex flex-row py-5 text-center space-x-1",children:[(0,r.jsx)("div",{onClick:function(){return e.setSelection("")},className:"basis-2/5 bg-black border-2 border-white hover:bg-gray-800 text-white rounded-xl px-1 cursor-pointer",children:(0,r.jsx)("span",{children:"back"})}),(0,r.jsx)("button",{type:"submit",className:"basis-3/5 bg-blue-700 hover:bg-blue-600 w-full rounded-xl text-white",children:"Create Account"})]})]})})})]});function n(){return(n=R(x().mark((function e(s){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),r={first_name:s.currentTarget.first_name.value,last_name:s.currentTarget.last_name.value,email:s.currentTarget.email.value,password:s.currentTarget.password.value},e.prev=2,e.next=5,p()({method:"post",url:"/api/register",data:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){"Email already exists"!==e.data.message&&t((0,f.Q_)(e.data))}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}}var E=s(7106);function P(){var e=function(e){t.currentTab.toLowerCase()!=e.toLowerCase()&&(s((0,f.Lw)(e)),a.push("/"+e.toLowerCase()))},t=(0,o.v9)((function(e){return e.user_store.user})),s=(0,o.I0)(),a=(0,c.useRouter)();return(0,l.useEffect)((function(){console.log("in side bar")}),[]),(0,r.jsxs)("div",{className:"flex flex-col py-5 space-y-5",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center font-semibold text-blue-700 text-2xl cursor-pointer p-1",children:[(0,r.jsx)(n.s1w,{size:32}),(0,r.jsx)("div",{className:"hidden md:block",children:"kollab"})]}),(0,r.jsxs)("div",{onClick:function(){e(j.HOME)},className:"".concat(t.currentTab==j.HOME?"text-white font-light":"text-gray-400 font-extralight"," flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800"),children:[(0,r.jsx)(E.MXJ,{size:32,strokeWidth:"1"}),(0,r.jsx)("div",{className:"hidden md:block",children:"home"})]}),(0,r.jsxs)("div",{onClick:function(){e(j.USER)},className:"".concat(t.currentTab==j.USER?"text-white font-light":"text-gray-400 font-extralight"," flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800"),children:[(0,r.jsx)(E.S8z,{size:32,strokeWidth:"1"}),(0,r.jsx)("div",{className:"hidden md:block",children:j.USER})]}),!1,(0,r.jsxs)("div",{onClick:function(){e(j.GROUP)},className:"".concat(t.currentTab==j.GROUP?"text-white font-light":"text-gray-400 font-extralight"," flex flex-row items-center text-lg cursor-pointer p-1 hover:text-white  rounded-3xl hover:bg-stone-800"),children:[(0,r.jsx)(E.HLl,{size:32,strokeWidth:"1"}),(0,r.jsx)("div",{className:"hidden md:block",children:j.GROUP})]})]})}function I(e,t,s,r,n,a,i){try{var l=e[a](i),c=l.value}catch(o){return void s(o)}l.done?t(c):Promise.resolve(c).then(r,n)}function U(e){return function(){var t=this,s=arguments;return new Promise((function(r,n){var a=e.apply(t,s);function i(e){I(a,r,n,i,l,"next",e)}function l(e){I(a,r,n,i,l,"throw",e)}i(void 0)}))}}function z(){var e=(0,o.v9)((function(e){return e.user_store.user})),t=((0,o.v9)((function(e){return e.user_store.createNewTypeMode})),(0,o.I0)()),s=(0,c.useRouter)();return(0,r.jsxs)("div",{className:"flex items-center flex-wrap justify-between p-5 bg-black rounded-3xl text-white text-2xl font-bold",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center space-x-1",children:[(0,r.jsx)("div",{children:e.currentTab==j.HOME?"home":e.currentTab}),(e.currentTab==j.CLASS||e.currentTab==j.GROUP)&&(0,r.jsx)(E.rIf,{onClick:function(){return t((0,f.uf)(!0))},className:"hover:bg-stone-800 rounded-xl cursor-pointer"})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center space-x-2 font-medium text-sm",children:[!e.isLoggedIn&&(0,r.jsxs)("div",{onClick:function(){return s.push("/login")},className:"flex flex-row items-center bg-stone-800 p-1 space-x-1 rounded cursor-pointer",children:[(0,r.jsx)(E.V5F,{}),(0,r.jsx)("div",{children:"Login"})]}),!e.isLoggedIn&&(0,r.jsxs)("div",{onClick:function(){return s.push("/register")},className:"flex flex-row items-center bg-stone-800 p-1 space-x-1 rounded cursor-pointer",children:[(0,r.jsx)(E.xv7,{}),(0,r.jsx)("div",{children:"Register"})]}),e.isLoggedIn&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{onClick:function(){return function(){return n.apply(this,arguments)}()},className:"flex flex-row items-center hover:bg-stone-800 space-x-1 p-1 rounded-3xl cursor-pointer",children:(0,r.jsx)(E.VUx,{})})})]})]});function n(){return(n=U(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()({method:"get",url:"/api/logout"}).then((function(e){t((0,f.Q_)(e.data))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}}function M(){var e=function(e){t.currentTab.toLowerCase()!=e.toLowerCase()&&(s((0,f.Lw)(e)),a.push("/"+e.toLowerCase()))},t=(0,o.v9)((function(e){return e.user_store.user})),s=(0,o.I0)(),a=(0,c.useRouter)();return(0,r.jsxs)("div",{className:"flex flex-row justify-between fixed bottom-0 px-20 w-full sm:hidden text-white bg-black py-2",children:[(0,r.jsx)(n.s1w,{onClick:function(){e(j.HOME)},className:"text-blue-700",size:32}),(0,r.jsx)(E.MXJ,{onClick:function(){e(j.HOME)},size:32,strokeWidth:1,className:t.currentTab==j.HOME?"text-white font-light":"text-gray-400 font-extralight"}),(0,r.jsx)(E.S8z,{onClick:function(){e(j.USER)},size:32,strokeWidth:1,className:t.currentTab==j.USER?"text-white font-light":"text-gray-400 font-extralight"}),(0,r.jsx)(E.K99,{onClick:function(){e(j.CLASS)},size:32,strokeWidth:1,className:t.currentTab==j.CLASS?"text-white font-light":"text-gray-400 font-extralight"}),(0,r.jsx)(E.HLl,{onClick:function(){e(j.GROUP)},size:32,strokeWidth:1,className:t.currentTab==j.GROUP?"text-white font-light":"text-gray-400 font-extralight"})]})}function G(e){var t=e.children,s=(0,o.v9)((function(e){return e.user_store.user})),d=(0,o.v9)((function(e){return e.user_store.createNewTypeMode})),x=(0,c.useRouter)(),u=(0,l.useState)(""),h=u[0],p=u[1];return(0,r.jsxs)("div",{children:[!s.isLoggedIn&&(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("div",{className:"px-5 pb-2 basis-3/5 md:basis-2/5 lg:basis-1/5 bg-black shadow-xl shadow-black rounded-3xl",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex flex-col items-center mt-10 space-y-3 text-blue-700",children:(0,r.jsx)(n.s1w,{size:100})}),""===h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-blue-700 text-3xl text-center mb-5",children:"kollab"}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center cursor-pointer space-x-1 py-1 my-2 text-sm text-black bg-white hover:bg-gray-200 rounded-xl",children:[(0,r.jsx)(i.JM8,{}),(0,r.jsx)("div",{children:"Sign up with Google"})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center cursor-pointer space-x-1 py-1 my-2 text-sm text-black bg-white hover:bg-gray-200 rounded-xl",children:[(0,r.jsx)(a.rFR,{}),(0,r.jsx)("div",{children:"Sign up with Github"})]}),(0,r.jsx)("div",{className:"flex justify-center py-1 my-2 text-sm cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl",onClick:function(){return p("register")},children:(0,r.jsx)("div",{className:"text-white",children:"Sign up with Email"})}),(0,r.jsx)("div",{className:"py-1 my-2 text-sm text-white mt-5",children:"Already have an account?"}),(0,r.jsx)("div",{className:"flex justify-center py-1 text-sm cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-xl",onClick:function(){return p("login")},children:(0,r.jsx)("div",{className:"text-white",children:"Log in"})}),(0,r.jsxs)("div",{className:"text-center text-white text-sm",children:["forgot password?",(0,r.jsx)("span",{className:"underline cursor-pointer",onClick:function(){return x.push("/reset")},children:"reset"})]})]}),"login"===h&&(0,r.jsx)(L,{setSelection:p}),"register"===h&&(0,r.jsx)(q,{setSelection:p})]})})}),s.isLoggedIn&&(0,r.jsx)("div",{className:"mb-10",children:(0,r.jsxs)("div",{className:"flex container mx-auto",children:[(0,r.jsx)("div",{className:"hidden sm:block sm:w-1/12 md:w-2/12 md:px-5 lg:px-10 pt-5",children:(0,r.jsx)(P,{})}),(0,r.jsxs)("div",{className:"w-full sm:w-11/12 md:w-10/12 pt-5 space-y-2",children:[(0,r.jsx)(z,{}),(0,r.jsx)("div",{className:"bg-black rounded-3xl p-5 text-white text-2xl font-bold mt-2",children:(0,r.jsx)("main",{children:t})})]}),(0,r.jsx)(M,{}),s.currentTab==j.CLASS&&d&&(0,r.jsx)(C.Z,{modalId:"create_class_modal",modalOpen:f.uf,children:(0,r.jsx)(g,{})}),s.currentTab==j.GROUP&&d&&(0,r.jsx)(C.Z,{modalId:"create_group_modal",modalOpen:f.uf,children:(0,r.jsx)(k,{})})]})})]})}},7702:function(e,t,s){"use strict";var r=s(5893),n=s(1472),a=s(7106),i=s(9473),l=s(2417),c=s.n(l);t.Z=function(e){var t=(0,i.I0)(),s=(0,n.useSpring)({from:{opacity:0},to:{opacity:1},config:{duration:250}});return(0,r.jsx)(n.animated.div,{style:s,id:e.modalId,className:"fixed bg-black inset-0 bg-opacity-20 backdrop-blur-lg",children:(0,r.jsx)("div",{id:"innerContainer",className:"flex justify-center items-center h-full",children:(0,r.jsxs)("div",{className:"flex flex-col sm:basis-3/6 md:basis-2/6 space-y-2 bg-black text-white p-5 rounded-2xl ".concat(c().modalchildren),children:[(0,r.jsx)("div",{onClick:function(){return t(e.modalOpen(!1))},className:"flex justify-end",children:(0,r.jsx)(a.lhV,{className:"hover:bg-stone-700 rounded-2xl cursor-pointer"})}),(0,r.jsx)("div",{children:e.children})]})})})}},2417:function(e){e.exports={modalchildren:"modal_modalchildren__W9pwe"}}}]);