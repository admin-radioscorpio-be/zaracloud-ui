import{b as w}from"./chunk-UFTR7SYY.js";import{Aa as n,Bc as _,E as x,Eb as g,H as l,Ha as v,Ra as e,Sa as d,Ta as E,Wd as k,ca as a,da as f,ga as h,hd as y,i as p,id as D,la as m,oa as s,q as u,ub as C,xc as S,yc as b,za as i}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var I=(()=>{class r{constructor(t,o){this.http=t,this.router=o,this.apiUrl="https://zaracloud.radioscorpio.be/api/queue/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getQueueData(){return this.http.get(this.apiUrl).pipe(u(t=>this.handleError(t)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),p(()=>new Error(t.message))}static{this.\u0275fac=function(o){return new(o||r)(l(C),l(g))}}static{this.\u0275prov=x({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function q(r,c){if(r&1&&(i(0,"tr"),e(1,`
                `),i(2,"th",7),e(3),n(),e(4,`
                `),i(5,"td"),e(6),n(),e(7,`
              `),n()),r&2){let t=c.$implicit,o=c.index;a(3),d(o+1),a(3),d(t.data.filename)}}function F(r,c){if(r&1&&(i(0,"div")(1,"p"),e(2),n(),i(3,"c-row"),e(4,`
    `),i(5,"c-col",1),e(6,`
      `),i(7,"c-card",2),e(8,`
        `),i(9,"c-card-header"),e(10,`
        `),n(),e(11,`
        `),i(12,"c-card-body"),e(13,`
          `),i(14,"app-docs-example",3),e(15,`
            `),i(16,"table",4),e(17,`
              `),i(18,"thead"),e(19,`
              `),i(20,"tr"),e(21,`
                `),i(22,"th",5),e(23,"#"),n(),e(24,`
                `),i(25,"th",5),e(26,"Track"),n(),e(27,`
              `),n(),e(28,`
              `),n(),e(29,`
              `),i(30,"tbody"),e(31,`
              `),m(32,q,8,2,"tr",6),e(33,`
              
              `),n(),e(34,`
            `),n(),e(35,`
          `),n(),e(36,`
        `),n(),e(37,`
      `),n(),e(38,`
    `),n(),e(39,`
  `),n()()),r&2){let t=v();a(2),E("Currently playing : ",t.current_track.data.filename,""),a(30),s("ngForOf",t.tracks)}}var J=(()=>{class r{constructor(t){this.queueService=t,this.tracks=[],this.current_track={data:{fade_duration:0,filename:"",prefix:""},name:"",next:""}}ngOnInit(){this.queueService.getQueueData().subscribe({next:t=>{this.queueData=t,this.current_track=t.current,this.tracks=t.first_10_tracks,console.log(t)},error:t=>console.error("Error fetching scheduler data",t)})}static{this.\u0275fac=function(o){return new(o||r)(f(I))}}static{this.\u0275cmp=h({type:r,selectors:[["queue-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],["href","components/table/log"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,T){o&1&&(i(0,"h1"),e(1,"Queue"),n(),m(2,F,40,2,"div",0)),o&2&&(a(2),s("ngIf",T.tracks))},dependencies:[D,y,S,_,b,w,k],encapsulation:2})}}return r})();export{J as QueueComponent};
