import{b as R}from"./chunk-UFTR7SYY.js";import{Aa as n,Bc as F,Ca as v,Da as u,E,Eb as y,H as h,Ha as m,Ra as e,Sa as x,Ta as p,Ua as C,Wd as z,ca as o,da as _,ga as g,hd as $,i as f,id as j,la as d,nb as I,oa as c,ob as b,q as S,ub as T,xc as D,yc as w,za as r}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var U=(()=>{class i{constructor(t,a){this.http=t,this.router=a,this.apiUrl="https://zaracloud.radioscorpio.be/api/scheduler/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getSchedulerData(){return this.http.get(this.apiUrl).pipe(S(t=>this.handleError(t)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),f(()=>new Error(t.message))}static{this.\u0275fac=function(a){return new(a||i)(h(T),h(y))}}static{this.\u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function O(i,l){if(i&1&&(v(0),e(1),u()),i&2){let t=m().$implicit;o(),p(`
                  `,t.event.fichero,`
                `)}}function N(i,l){if(i&1&&(v(0),e(1),u()),i&2){let t=m().$implicit;o(),C(`
                  `,t.event.target_method," ",t.event.args,`
                `)}}function k(i,l){if(i&1&&(r(0,"tr"),e(1,`
              `),r(2,"th",7),e(3),n(),e(4,`
              `),r(5,"td"),e(6),n(),e(7,`
              `),r(8,"td"),e(9),n(),e(10,`
              `),r(11,"td"),e(12,`
                `),d(13,O,2,1,"ng-container",6),e(14,`
                `),d(15,N,2,2,"ng-container",6),e(16,`
              `),n(),e(17,`
            `),n()),i&2){let t=l.$implicit,a=l.index,s=m();o(3),x(a+1),o(3),x(t.timestamp_iso),o(3),x(t.event.name),o(4),c("ngIf",s.isScheduledEvent(t.event)),o(2),c("ngIf",!s.isScheduledEvent(t.event))}}function B(i,l){if(i&1&&(r(0,"div")(1,"h3"),e(2,"Event:"),n(),r(3,"p")(4,"strong"),e(5,"Fichero:"),n(),e(6),n()()),i&2){let t=m().$implicit;o(6),p(" ",t.event.fichero,"")}}function H(i,l){if(i&1&&(r(0,"div")(1,"h3"),e(2,"Task:"),n(),r(3,"p")(4,"strong"),e(5,"Method:"),n(),e(6),n(),r(7,"p")(8,"strong"),e(9,"Args:"),n(),e(10),n()()),i&2){let t=m().$implicit;o(6),p(" ",t.event.target_method,""),o(4),p(" ",t.event.args,"")}}function q(i,l){if(i&1&&(r(0,"div"),d(1,B,7,1,"div",6)(2,H,11,2,"div",6),n()),i&2){let t=l.$implicit,a=m(2);o(),c("ngIf",a.isScheduledEvent(t.event)),o(),c("ngIf",!a.isScheduledEvent(t.event))}}function G(i,l){if(i&1&&(r(0,"div")(1,"h3"),e(2,"--- Event Metadata"),n(),r(3,"p"),e(4),n(),r(5,"p"),e(6),n(),r(7,"h3"),e(8,"--- Events"),n(),d(9,q,3,2,"div",5),n()),i&2){let t=m();o(4),p("Size: ",t.schedulerData.event_meta.size,""),o(2),p("Tag: ",t.schedulerData.event_meta.tag,""),o(3),c("ngForOf",t.events)}}var ne=(()=>{class i{constructor(t){this.schedulerService=t,this.events=[]}ngOnInit(){this.schedulerService.getSchedulerData().subscribe({next:t=>{this.schedulerData=t,this.events=t.events,console.log(t)},error:t=>console.error("Error fetching scheduler data",t)})}isScheduledEvent(t){return t.fichero!==void 0}static{this.\u0275fac=function(a){return new(a||i)(_(U))}}static{this.\u0275cmp=g({type:i,selectors:[["scheduler-tables"]],decls:46,vars:2,consts:[["xs","12"],[1,"mb-4"],["href","components/table/scheduler"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","row"]],template:function(a,s){a&1&&(r(0,"h1"),e(1,"Scheduler"),n(),r(2,"c-row"),e(3,`
  `),r(4,"c-col",0),e(5,`
    `),r(6,"c-card",1),e(7,`
      `),r(8,"c-card-header"),e(9,`
      `),n(),e(10,`
      `),r(11,"c-card-body"),e(12,`
        `),r(13,"app-docs-example",2),e(14,`
          `),r(15,"table",3),e(16,`
            `),r(17,"thead"),e(18,`
            `),r(19,"tr"),e(20,`
              `),r(21,"th",4),e(22,"#"),n(),e(23,`
              `),r(24,"th",4),e(25,"Time"),n(),e(26,`
              `),r(27,"th",4),e(28,"Name"),n(),e(29,`
              `),r(30,"th",4),e(31,"Action"),n(),e(32,`
            `),n(),e(33,`
            `),n(),e(34,`
            `),r(35,"tbody"),e(36,`
            `),d(37,k,18,5,"tr",5),e(38,`
            
            `),n(),e(39,`
          `),n(),e(40,`
        `),n(),e(41,`
      `),n(),e(42,`
    `),n(),e(43,`
  `),n(),e(44,`
`),n(),d(45,G,10,3,"div",6)),a&2&&(o(37),c("ngForOf",s.events),o(8),c("ngIf",s.schedulerData))},dependencies:[b,I,j,$,D,F,w,R,z],encapsulation:2})}}return i})();export{ne as SchedulerComponent};
