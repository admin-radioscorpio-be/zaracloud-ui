import{b as j}from"./chunk-D47ZVGSA.js";import{Ia as $,Ja as F,Y as I,Z as T,a as M,aa as w,k as D,vb as R}from"./chunk-5N3J46XI.js";import{$c as b,A as C,Hb as p,Sb as n,Tb as r,Vb as d,Wb as s,Y as v,ad as y,ba as h,bc as m,db as a,eb as u,m as _,oc as t,pc as E,qb as S,qc as f,xb as c}from"./chunk-CTTX4CO2.js";import"./chunk-Q7L6LLAK.js";var U=(()=>{class i{constructor(e,o){this.http=e,this.router=o,this.apiUrl="https://zaracloud.radioscorpio.be/api/mixer/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getMixerData(){return this.http.get(this.apiUrl).pipe(C(e=>this.handleError(e)))}handleError(e){return e.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),_(()=>new Error(e.message))}static{this.\u0275fac=function(o){return new(o||i)(h(M),h(D))}}static{this.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function k(i,l){if(i&1&&(d(0),t(1),s()),i&2){let e=m().$implicit;a(),f(`
                    `,e.filename,`
                  `)}}function A(i,l){if(i&1&&(d(0),t(1),s()),i&2){let e=m().$implicit,o=m(2);a(),f(`
                    `,o.formatTime(e.elapsed_time),`
                  `)}}function B(i,l){if(i&1&&(d(0),t(1),s()),i&2){let e=m().$implicit,o=m(2);a(),f(`
                    `,o.formatTime(e.remaining_time),`
                  `)}}function H(i,l){if(i&1&&(n(0,"tr"),t(1,`
                `),n(2,"th",7),t(3),r(),t(4,`
                `),n(5,"td"),t(6,`
                  `),c(7,k,2,1,"ng-container",0),t(8,` 
                `),r(),t(9,`
                `),n(10,"td"),t(11,`
                  `),c(12,A,2,1,"ng-container",0),t(13,` 
                `),r(),t(14,`
                `),n(15,"td"),t(16,`
                  `),c(17,B,2,1,"ng-container",0),t(18,` 
                `),r(),t(19,`
              `),r()),i&2){let e=l.$implicit,o=l.index;a(3),E(o+1),a(4),p("ngIf",e.playing==1),a(5),p("ngIf",e.playing==1),a(5),p("ngIf",e.playing==1)}}function N(i,l){if(i&1&&(n(0,"div")(1,"c-row"),t(2,`
    `),n(3,"c-col",1),t(4,`
      `),n(5,"c-card",2),t(6,`
        `),n(7,"c-card-header"),t(8,`
        `),r(),t(9,`
        `),n(10,"c-card-body"),t(11,`
          `),n(12,"app-docs-example",3),t(13,`
            `),n(14,"table",4),t(15,`
              `),n(16,"thead"),t(17,`
              `),n(18,"tr"),t(19,`
                `),n(20,"th",5),t(21,"#"),r(),t(22,`
                `),n(23,"th",5),t(24,"Track"),r(),t(25,`
                `),n(26,"th",5),t(27,"Elapsed"),r(),t(28,`
                `),n(29,"th",5),t(30,"Remaining"),r(),t(31,`
                
              `),r(),t(32,`
              `),r(),t(33,`
              `),n(34,"tbody"),t(35,`
              `),c(36,H,20,4,"tr",6),t(37,`
              `),r(),t(38,`
            `),r(),t(39,`
          `),r(),t(40,`
        `),r(),t(41,`
      `),r(),t(42,`
    `),r(),t(43,`
  `),r()()),i&2){let e=m();a(36),p("ngForOf",e.mixerData.statuses)}}var tt=(()=>{class i{constructor(e){this.mixerService=e}ngOnInit(){this.mixerService.getMixerData().subscribe({next:e=>{this.mixerData=e,console.log("beire"),console.log(this.mixerData),console.log("pap")},error:e=>console.error("Error fetching logger data",e)})}formatTime(e){if(e===null)return"";let o=Math.floor(e/3600),x=Math.floor(e%3600/60),g=Math.floor(e%60);return o>0?`${o}:${x.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`:`${x}:${g.toString().padStart(2,"0")}`}static{this.\u0275fac=function(o){return new(o||i)(u(U))}}static{this.\u0275cmp=S({type:i,selectors:[["mixer-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],["href","components/table/mixer"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,x){o&1&&(n(0,"h1"),t(1,"Mixer"),r(),c(2,N,44,1,"div",0)),o&2&&(a(2),p("ngIf",x.mixerData))},dependencies:[y,b,F,$,I,w,T,j,R],encapsulation:2})}}return i})();export{tt as MixerComponent};
