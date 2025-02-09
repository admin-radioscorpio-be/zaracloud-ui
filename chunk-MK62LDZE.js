import{b as j}from"./chunk-UFTR7SYY.js";import{Aa as t,Bc as D,E as u,Eb as b,H as v,Ha as m,Ra as e,Sa as c,Ta as s,Ua as _,Wd as $,ca as a,da as E,ga as f,hd as w,i as h,id as F,la as x,nb as g,oa as d,ob as C,q as S,ub as I,xc as T,yc as y,za as i}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var z=(()=>{class r{constructor(n,o){this.http=n,this.router=o,this.apiUrl="https://zaracloud.radioscorpio.be/api/scheduler/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getSchedulerData(){return this.http.get(this.apiUrl).pipe(S(n=>this.handleError(n)))}handleError(n){return n.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),h(()=>new Error(n.message))}static{this.\u0275fac=function(o){return new(o||r)(v(I),v(b))}}static{this.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function R(r,l){if(r&1&&(i(0,"tr"),e(1,`
                  `),i(2,"th",5),e(3),t(),e(4,`
                  `),i(5,"td",8),e(6),t(),e(7,`
                  `),i(8,"td"),e(9),t(),e(10,`
                  `),i(11,"td"),e(12),t(),e(13,`
                `),t()),r&2){let n=m(),o=n.$implicit,p=n.index;a(3),c(p+1),a(3),c(o.timestamp_iso),a(3),c(o.event.name),a(3),c(o.event.fichero)}}function U(r,l){if(r&1&&(i(0,"tr"),e(1,`
                  `),i(2,"th",5),e(3),t(),e(4,`
                  `),i(5,"td",8),e(6),t(),e(7,`
                  `),i(8,"td"),e(9),t(),e(10,`
                  `),i(11,"td"),e(12),t(),e(13,`
                `),t()),r&2){let n=m(),o=n.$implicit,p=n.index;a(3),c(p+1),a(3),c(o.timestamp_iso),a(3),c(o.event.name),a(3),_("",o.event.target_method,"  ",o.event.args,"")}}function A(r,l){if(r&1&&(i(0,"div"),e(1,`
                `),x(2,R,14,4,"tr",7),e(3,`
                `),x(4,U,14,5,"tr",7),e(5,`
            `),t()),r&2){let n=l.$implicit,o=m();a(2),d("ngIf",o.isScheduledEvent(n.event)),a(2),d("ngIf",!o.isScheduledEvent(n.event))}}function k(r,l){if(r&1&&(i(0,"div")(1,"h3"),e(2,"Event:"),t(),i(3,"p")(4,"strong"),e(5,"Fichero:"),t(),e(6),t()()),r&2){let n=m().$implicit;a(6),s(" ",n.event.fichero,"")}}function N(r,l){if(r&1&&(i(0,"div")(1,"h3"),e(2,"Task:"),t(),i(3,"p")(4,"strong"),e(5,"Method:"),t(),e(6),t(),i(7,"p")(8,"strong"),e(9,"Args:"),t(),e(10),t()()),r&2){let n=m().$implicit;a(6),s(" ",n.event.target_method,""),a(4),s(" ",n.event.args,"")}}function B(r,l){if(r&1&&(i(0,"div"),x(1,k,7,1,"div",7)(2,N,11,2,"div",7),t()),r&2){let n=l.$implicit,o=m(2);a(),d("ngIf",o.isScheduledEvent(n.event)),a(),d("ngIf",!o.isScheduledEvent(n.event))}}function H(r,l){if(r&1&&(i(0,"div")(1,"h3"),e(2,"--- Event Metadata"),t(),i(3,"p"),e(4),t(),i(5,"p"),e(6),t(),i(7,"h3"),e(8,"--- Events"),t(),x(9,B,3,2,"div",6),t()),r&2){let n=m();a(4),s("Size: ",n.schedulerData.event_meta.size,""),a(2),s("Tag: ",n.schedulerData.event_meta.tag,""),a(3),d("ngForOf",n.events)}}var ee=(()=>{class r{constructor(n){this.schedulerService=n,this.events=[]}ngOnInit(){this.schedulerService.getSchedulerData().subscribe({next:n=>{this.schedulerData=n,this.events=n.events,console.log(n)},error:n=>console.error("Error fetching scheduler data",n)})}isScheduledEvent(n){return n.fichero!==void 0}static{this.\u0275fac=function(o){return new(o||r)(E(z))}}static{this.\u0275cmp=f({type:r,selectors:[["scheduler-tables"]],decls:61,vars:2,consts:[["xs","12"],[1,"mb-4"],["href","components/table/scheduler"],["cTable",""],["scope","col"],["scope","row"],[4,"ngFor","ngForOf"],[4,"ngIf"],["colSpan","2"]],template:function(o,p){o&1&&(i(0,"h1"),e(1,"Scheduler"),t(),i(2,"c-row"),e(3,`
  `),i(4,"c-col",0),e(5,`
    `),i(6,"c-card",1),e(7,`
      `),i(8,"c-card-header"),e(9,`
      `),t(),e(10,`
      `),i(11,"c-card-body"),e(12,`
        `),i(13,"app-docs-example",2),e(14,`
          `),i(15,"table",3),e(16,`
            `),i(17,"thead"),e(18,`
            `),i(19,"tr"),e(20,`
              `),i(21,"th",4),e(22,"#"),t(),e(23,`
              `),i(24,"th",4),e(25,"Time"),t(),e(26,`
              `),i(27,"th",4),e(28,"Name"),t(),e(29,`
              `),i(30,"th",4),e(31,"Action"),t(),e(32,`
            `),t(),e(33,`
            `),t(),e(34,`
            `),i(35,"tbody"),e(36,`
            `),i(37,"tr"),e(38,`
              `),i(39,"th",5),e(40,"1"),t(),e(41,`
              `),i(42,"td"),e(43,"Mark"),t(),e(44,`
              `),i(45,"td"),e(46,"Otto"),t(),e(47,`
              `),i(48,"td"),e(49,"@mdo"),t(),e(50,`
            `),t(),e(51,`
            `),x(52,A,6,2,"div",6),e(53,`
            `),t(),e(54,`
          `),t(),e(55,`
        `),t(),e(56,`
      `),t(),e(57,`
    `),t(),e(58,`
  `),t(),e(59,`
`),t(),x(60,H,10,3,"div",7)),o&2&&(a(52),d("ngForOf",p.events),a(8),d("ngIf",p.schedulerData))},dependencies:[C,g,F,w,T,D,y,j,$],encapsulation:2})}}return r})();export{ee as SchedulerComponent};
