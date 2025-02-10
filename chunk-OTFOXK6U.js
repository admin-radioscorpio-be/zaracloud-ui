import{b as U}from"./chunk-D47ZVGSA.js";import{Ia as j,Ja as z,Y as T,Z as w,a as D,aa as F,k as y,vb as R}from"./chunk-5N3J46XI.js";import{$c as I,A as S,Hb as m,Sb as n,Tb as i,Vb as u,Wb as v,Y as E,ad as b,ba as h,bc as d,db as o,eb as _,m as f,oc as e,pc as p,qb as g,qc as x,rc as C,xb as c}from"./chunk-CTTX4CO2.js";import"./chunk-Q7L6LLAK.js";var A=(()=>{class r{constructor(t,a){this.http=t,this.router=a,this.apiUrl="https://zaracloud.radioscorpio.be/api/scheduler/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getSchedulerData(){return this.http.get(this.apiUrl).pipe(S(t=>this.handleError(t)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),f(()=>new Error(t.message))}static{this.\u0275fac=function(a){return new(a||r)(h(D),h(y))}}static{this.\u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function $(r,l){if(r&1&&(u(0),e(1),v()),r&2){let t=d().$implicit;o(),x(`
                  `,t.event.fichero,`
                `)}}function B(r,l){if(r&1&&(u(0),e(1),v()),r&2){let t=d().$implicit;o(),C(`
                  `,t.event.target_method," ",t.event.args,`
                `)}}function H(r,l){if(r&1&&(n(0,"tr"),e(1,`
              `),n(2,"th",7),e(3),i(),e(4,`
              `),n(5,"td"),e(6),i(),e(7,`
              `),n(8,"td"),e(9),i(),e(10,`
              `),n(11,"td"),e(12,`
                `),c(13,$,2,1,"ng-container",0),e(14,`
                `),c(15,B,2,2,"ng-container",0),e(16,`
              `),i(),e(17,`
            `),i()),r&2){let t=l.$implicit,a=l.index,s=d(2);o(3),p(a+1),o(3),p(t.timestamp_iso),o(3),p(t.event.name),o(4),m("ngIf",s.isScheduledEvent(t.event)),o(2),m("ngIf",!s.isScheduledEvent(t.event))}}function M(r,l){if(r&1&&(n(0,"div")(1,"p"),e(2),i(),n(3,"p"),e(4),i(),n(5,"c-row"),e(6,`
  `),n(7,"c-col",1),e(8,`
    `),n(9,"c-card",2),e(10,`
      `),n(11,"c-card-header"),e(12,`
      `),i(),e(13,`
      `),n(14,"c-card-body"),e(15,`
        `),n(16,"app-docs-example",3),e(17,`
          `),n(18,"table",4),e(19,`
            `),n(20,"thead"),e(21,`
            `),n(22,"tr"),e(23,`
              `),n(24,"th",5),e(25,"#"),i(),e(26,`
              `),n(27,"th",5),e(28,"Time"),i(),e(29,`
              `),n(30,"th",5),e(31,"Name"),i(),e(32,`
              `),n(33,"th",5),e(34,"Action"),i(),e(35,`
            `),i(),e(36,`
            `),i(),e(37,`
            `),n(38,"tbody"),e(39,`
            `),c(40,H,18,5,"tr",6),e(41,`
            
            `),i(),e(42,`
          `),i(),e(43,`
        `),i(),e(44,`
      `),i(),e(45,`
    `),i(),e(46,`
  `),i(),e(47,`
`),i()()),r&2){let t=d();o(2),x("Size: ",t.schedulerData.event_meta.size,""),o(2),x("Tag: ",t.schedulerData.event_meta.tag,""),o(36),m("ngForOf",t.events)}}var Z=(()=>{class r{constructor(t){this.schedulerService=t,this.events=[]}ngOnInit(){this.schedulerService.getSchedulerData().subscribe({next:t=>{this.schedulerData=t,this.events=t.events,console.log(t)},error:t=>console.error("Error fetching scheduler data",t)})}isScheduledEvent(t){return t.fichero!==void 0}static{this.\u0275fac=function(a){return new(a||r)(_(A))}}static{this.\u0275cmp=g({type:r,selectors:[["scheduler-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],["href","components/table/scheduler"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(a,s){a&1&&(n(0,"h1"),e(1,"Scheduler"),i(),c(2,M,48,3,"div",0)),a&2&&(o(2),m("ngIf",s.schedulerData))},dependencies:[b,I,z,j,T,F,w,U,R],encapsulation:2})}}return r})();export{Z as SchedulerComponent};
