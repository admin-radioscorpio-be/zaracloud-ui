import{b as _}from"./chunk-UFTR7SYY.js";import{Aa as n,Bc as I,E as g,Eb as C,H as m,Ha as v,Ra as t,Sa as l,Wd as T,ca as a,da as h,ga as f,hd as w,i as p,id as y,la as s,nb as u,oa as d,ob as E,q as x,ub as S,xc as b,yc as D,za as i}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var k=(()=>{class r{constructor(e,o){this.http=e,this.router=o,this.apiUrl="https://zaracloud.radioscorpio.be/api/tracklogger/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getLoggerData(){return this.http.get(this.apiUrl).pipe(x(e=>this.handleError(e)))}handleError(e){return e.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),p(()=>new Error(e.message))}static{this.\u0275fac=function(o){return new(o||r)(m(S),m(C))}}static{this.\u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function R(r,c){if(r&1&&(i(0,"tr"),t(1,`
              `),i(2,"th",7),t(3),n(),t(4,`
              `),i(5,"td"),t(6),n(),t(7,`
              `),i(8,"td"),t(9),n(),t(10,`
            `),n()),r&2){let e=c.$implicit,o=c.index;a(3),l(o+1),a(3),l(e.time),a(3),l(e.trackname)}}function U(r,c){if(r&1&&(i(0,"div")(1,"c-row"),t(2,`
  `),i(3,"c-col",1),t(4,`
    `),i(5,"c-card",2),t(6,`
      `),i(7,"c-card-header"),t(8,`
      `),n(),t(9,`
      `),i(10,"c-card-body"),t(11,`
        `),i(12,"app-docs-example",3),t(13,`
          `),i(14,"table",4),t(15,`
            `),i(16,"thead"),t(17,`
            `),i(18,"tr"),t(19,`
              `),i(20,"th",5),t(21,"#"),n(),t(22,`
              `),i(23,"th",5),t(24,"Time"),n(),t(25,`
              `),i(26,"th",5),t(27,"Track"),n(),t(28,`
            `),n(),t(29,`
            `),n(),t(30,`
            `),i(31,"tbody"),t(32,`
            `),s(33,R,11,3,"tr",6),t(34,`
            
            `),n(),t(35,`
          `),n(),t(36,`
        `),n(),t(37,`
      `),n(),t(38,`
    `),n(),t(39,`
  `),n(),t(40,`
`),n()()),r&2){let e=v();a(33),d("ngForOf",e.tracks)}}var P=(()=>{class r{constructor(e){this.loggerService=e,this.tracks=[]}ngOnInit(){this.loggerService.getLoggerData().subscribe({next:e=>{this.loggerData=e,this.tracks=e.tracks,console.log(e)},error:e=>console.error("Error fetching logger data",e)})}static{this.\u0275fac=function(o){return new(o||r)(h(k))}}static{this.\u0275cmp=f({type:r,selectors:[["log-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],["href","components/table/log"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,L){o&1&&(i(0,"h1"),t(1,"Log"),n(),s(2,U,41,1,"div",0)),o&2&&(a(2),d("ngIf",L.loggerData))},dependencies:[u,E,y,w,b,I,D,_,T],encapsulation:2})}}return r})();export{P as LogComponent};
