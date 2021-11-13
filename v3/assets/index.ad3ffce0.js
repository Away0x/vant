import{c as C,t as A,a as S}from"./use-translate.aef3085b.js";import{n as F,t as I,w as E}from"./with-install.796b4cad.js";import{H as m,f as R}from"./constant.80c6de18.js";import{u as z}from"./use-placeholder.46f6ed8e.js";import{I as x}from"./index.c480cbe8.js";import{z as p,C as D,e,r as N,o as P,a as y,w as c,A as r,F as L}from"./vue-libs.f710b8ed.js";import{T as g}from"./function-call.aaae010c.js";import"./use-height.dcf9414b.js";import"./mount-component.e03afee0.js";import"./use-expose.b82056d2.js";import"./index.590c19a0.js";import"./interceptor.3dc21389.js";import"./use-touch.8e5a0907.js";import"./use-lazy-render.c4d421a8.js";import"./on-popup-reopen.4b166a39.js";import"./index.bd451b43.js";import"./index.88eab4b6.js";const[O,n]=C("nav-bar"),U={title:String,fixed:Boolean,zIndex:F,border:I,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var H=p({name:O,props:U,emits:["click-left","click-right"],setup(a,{emit:t,slots:l}){const i=D(),u=z(i,n),d=s=>t("click-left",s),o=s=>t("click-right",s),b=()=>l.left?l.left():[a.leftArrow&&e(x,{class:n("arrow"),name:"arrow-left"},null),a.leftText&&e("span",{class:n("text")},[a.leftText])],k=()=>l.right?l.right():e("span",{class:n("text")},[a.rightText]),h=()=>{const{title:s,fixed:B,border:j,zIndex:_}=a,w=A(_),v=a.leftArrow||a.leftText||l.left,T=a.rightText||l.right;return e("div",{ref:i,style:w,class:[n({fixed:B,"safe-area-inset-top":a.safeAreaInsetTop}),{[R]:j}]},[e("div",{class:n("content")},[v&&e("div",{class:[n("left"),m],onClick:d},[b()]),e("div",{class:[n("title"),"van-ellipsis"]},[l.title?l.title():s]),T&&e("div",{class:[n("right"),m],onClick:o},[k()])])])};return()=>a.fixed&&a.placeholder?u(h):h()}});const f=E(H),nt=p({setup(a){const t=S({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>g(t("back")),i=()=>g(t("button"));return(u,d)=>{const o=N("demo-block");return P(),y(L,null,[e(o,{title:r(t)("basicUsage")},{default:c(()=>[e(r(f),{title:r(t)("title")},null,8,["title"])]),_:1},8,["title"]),e(o,{title:r(t)("showBack")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"left-arrow":"",onClickRight:i},null,8,["title","left-text"])]),_:1},8,["title"]),e(o,{title:r(t)("rightButton")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"right-text":r(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:i},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),e(o,{title:r(t)("useSlot")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"left-arrow":""},{right:c(()=>[e(r(x),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{nt as default};