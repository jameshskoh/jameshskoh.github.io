import{d as n,c as i,e as l,w as d,r as h,o as a,f as e,t as c,F as _,h as m,i as u,j as g}from"./index.c64c5daf.js";const b={class:"column is-4"},v={class:"card"},f={class:"card-image"},k={class:"image"},p=["src","alt"],x={class:"card-content fixed-height"},$={class:"header py-2"},S={class:"title is-4"},B=["datetime"],C={class:"content"},T=n({__name:"TopicCard",props:{abstract:null,section:null},setup(t){return(o,r)=>{const s=h("router-link");return a(),i("div",b,[l(s,{to:`${t.section.path}/${t.abstract.id}`},{default:d(()=>[e("div",v,[e("div",f,[e("figure",k,[e("img",{src:`/images/${t.abstract.imagePath}`,alt:t.abstract.imageAlt},null,8,p)])]),e("div",x,[e("div",$,[e("h1",S,c(t.abstract.headerTitle),1),e("time",{datetime:t.abstract.date.toISOString().split("T")[0]},c(t.abstract.date.toDateString().split("T")[0]),9,B)]),e("div",C,c(t.abstract.description),1)])])]),_:1},8,["to"])])}}}),y={class:"container is-max-desktop block pb-5"},w={class:"container pb-5"},A={class:"title is-3 has-text-centered h-rule"},D={class:"columns px-4"},N=n({__name:"AppSection",props:{abstracts:null,section:null},setup(t){return(o,r)=>(a(),i("section",y,[e("div",w,[e("h1",A,c(t.section.name),1)]),e("div",D,[(a(!0),i(_,null,m(t.abstracts,s=>(a(),u(T,g({key:s.id},{abstract:s,section:t.section}),null,16))),128))])]))}});export{N as _};
