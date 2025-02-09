import{b as M}from"./chunk-UFTR7SYY.js";import{Aa as n,Bc as F,Ca as v,Da as u,E,Eb as y,H as h,Ha as d,Ra as e,Sa as x,Ta as p,Ua as C,Wd as z,ca as o,da as _,ga as g,hd as $,i as S,id as j,la as c,nb as I,oa as m,ob as b,q as f,ub as T,xc as D,yc as w,za as i}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var O=(()=>{class r{constructor(t,a){this.http=t,this.router=a,this.apiUrl="https://zaracloud.radioscorpio.be/api/scheduler/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getSchedulerData(){return this.http.get(this.apiUrl).pipe(f(t=>this.handleError(t)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),S(()=>new Error(t.message))}static{this.\u0275fac=function(a){return new(a||r)(h(T),h(y))}}static{this.\u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function A(r,l){if(r&1&&(v(0),e(1),u()),r&2){let t=d().$implicit;o(),p(`
                  `,t.event.fichero,`
                `)}}function k(r,l){if(r&1&&(v(0),e(1),u()),r&2){let t=d().$implicit;o(),C(`
                  `,t.event.target_method," ",t.event.args,`
                `)}}function N(r,l){if(r&1&&(i(0,"tr"),e(1,`
              `),i(2,"th",5),e(3),n(),e(4,`
              `),i(5,"td"),e(6),n(),e(7,`
              `),i(8,"td"),e(9),n(),e(10,`
              `),i(11,"td"),e(12,`
                `),c(13,A,2,1,"ng-container",7),e(14,`
                `),c(15,k,2,2,"ng-container",7),e(16,`
              `),n(),e(17,`
            `),n()),r&2){let t=l.$implicit,a=l.index,s=d();o(3),x(a+1),o(3),x(t.timestamp_iso),o(3),x(t.event.name),o(4),m("ngIf",s.isScheduledEvent(t.event)),o(2),m("ngIf",!s.isScheduledEvent(t.event))}}function B(r,l){if(r&1&&(i(0,"div")(1,"h3"),e(2,"Event:"),n(),i(3,"p")(4,"strong"),e(5,"Fichero:"),n(),e(6),n()()),r&2){let t=d().$implicit;o(6),p(" ",t.event.fichero,"")}}function H(r,l){if(r&1&&(i(0,"div")(1,"h3"),e(2,"Task:"),n(),i(3,"p")(4,"strong"),e(5,"Method:"),n(),e(6),n(),i(7,"p")(8,"strong"),e(9,"Args:"),n(),e(10),n()()),r&2){let t=d().$implicit;o(6),p(" ",t.event.target_method,""),o(4),p(" ",t.event.args,"")}}function q(r,l){if(r&1&&(i(0,"div"),c(1,B,7,1,"div",7)(2,H,11,2,"div",7),n()),r&2){let t=l.$implicit,a=d(2);o(),m("ngIf",a.isScheduledEvent(t.event)),o(),m("ngIf",!a.isScheduledEvent(t.event))}}function G(r,l){if(r&1&&(i(0,"div")(1,"h3"),e(2,"--- Event Metadata"),n(),i(3,"p"),e(4),n(),i(5,"p"),e(6),n(),i(7,"h3"),e(8,"--- Events"),n(),c(9,q,3,2,"div",6),n()),r&2){let t=d();o(4),p("Size: ",t.schedulerData.event_meta.size,""),o(2),p("Tag: ",t.schedulerData.event_meta.tag,""),o(3),m("ngForOf",t.events)}}var ne=(()=>{class r{constructor(t){this.schedulerService=t,this.events=[]}ngOnInit(){this.schedulerService.getSchedulerData().subscribe({next:t=>{this.schedulerData=t,this.events=t.events,console.log(t)},error:t=>console.error("Error fetching scheduler data",t)})}isScheduledEvent(t){return t.fichero!==void 0}static{this.\u0275fac=function(a){return new(a||r)(_(O))}}static{this.\u0275cmp=g({type:r,selectors:[["scheduler-tables"]],decls:61,vars:2,consts:[["xs","12"],[1,"mb-4"],["href","components/table/scheduler"],["cTable",""],["scope","col"],["scope","row"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(a,s){a&1&&(i(0,"h1"),e(1,"Scheduler"),n(),i(2,"c-row"),e(3,`
  `),i(4,"c-col",0),e(5,`
    `),i(6,"c-card",1),e(7,`
      `),i(8,"c-card-header"),e(9,`
      `),n(),e(10,`
      `),i(11,"c-card-body"),e(12,`
        `),i(13,"app-docs-example",2),e(14,`
          `),i(15,"table",3),e(16,`
            `),i(17,"thead"),e(18,`
            `),i(19,"tr"),e(20,`
              `),i(21,"th",4),e(22,"#"),n(),e(23,`
              `),i(24,"th",4),e(25,"Time"),n(),e(26,`
              `),i(27,"th",4),e(28,"Name"),n(),e(29,`
              `),i(30,"th",4),e(31,"Action"),n(),e(32,`
            `),n(),e(33,`
            `),n(),e(34,`
            `),i(35,"tbody"),e(36,`
            `),i(37,"tr"),e(38,`
              `),i(39,"th",5),e(40,"1"),n(),e(41,`
              `),i(42,"td"),e(43,"Mark"),n(),e(44,`
              `),i(45,"td"),e(46,"Otto"),n(),e(47,`
              `),i(48,"td"),e(49,"@mdo"),n(),e(50,`
            `),n(),e(51,`
          
            `),c(52,N,18,5,"tr",6),e(53,`
            
            `),n(),e(54,`
          `),n(),e(55,`
        `),n(),e(56,`
      `),n(),e(57,`
    `),n(),e(58,`
  `),n(),e(59,`
`),n(),c(60,G,10,3,"div",7)),a&2&&(o(52),m("ngForOf",s.events),o(8),m("ngIf",s.schedulerData))},dependencies:[b,I,j,$,D,F,w,M,z],encapsulation:2})}}return r})();export{ne as SchedulerComponent};
