import{b as Q}from"./chunk-UFTR7SYY.js";import{Aa as n,Bc as y,E as f,Eb as b,H as l,Ha as E,Ra as e,Sa as p,Ta as d,Wd as k,ca as a,da as h,ga as v,hd as I,i as u,id as w,la as m,nb as g,oa as s,ob as S,q as x,ub as C,xc as _,yc as D,za as i}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var T=(()=>{class r{constructor(t,o){this.http=t,this.router=o,this.apiUrl="https://zaracloud.radioscorpio.be/api/playqueue/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getQueueData(){return this.http.get(this.apiUrl).pipe(x(t=>this.handleError(t)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),u(()=>new Error(t.message))}static{this.\u0275fac=function(o){return new(o||r)(l(C),l(b))}}static{this.\u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function R(r,c){if(r&1&&(i(0,"tr"),e(1,`
                `),i(2,"th",7),e(3),n(),e(4,`
                `),i(5,"td"),e(6),n(),e(7,`
              `),n()),r&2){let t=c.$implicit,o=c.index;a(3),p(o+1),a(3),p(t.data.filename)}}function U(r,c){if(r&1&&(i(0,"div")(1,"p"),e(2),n(),i(3,"p"),e(4),n(),i(5,"c-row"),e(6,`
    `),i(7,"c-col",1),e(8,`
      `),i(9,"c-card",2),e(10,`
        `),i(11,"c-card-header"),e(12,`
        `),n(),e(13,`
        `),i(14,"c-card-body"),e(15,`
          `),i(16,"app-docs-example",3),e(17,`
            `),i(18,"table",4),e(19,`
              `),i(20,"thead"),e(21,`
              `),i(22,"tr"),e(23,`
                `),i(24,"th",5),e(25,"#"),n(),e(26,`
                `),i(27,"th",5),e(28,"Track"),n(),e(29,`
              `),n(),e(30,`
              `),n(),e(31,`
              `),i(32,"tbody"),e(33,`
              `),m(34,R,8,2,"tr",6),e(35,`
              
              `),n(),e(36,`
            `),n(),e(37,`
          `),n(),e(38,`
        `),n(),e(39,`
      `),n(),e(40,`
    `),n(),e(41,`
  `),n()()),r&2){let t=E();a(2),d("Size: ",t.queueData.length,""),a(2),d("Currently playing : ",t.current_track.data.filename,""),a(30),s("ngForOf",t.tracks)}}var P=(()=>{class r{constructor(t){this.queueService=t,this.tracks=[],this.current_track={data:{fade_duration:0,filename:"",prefix:""},name:"",next:""}}ngOnInit(){this.queueService.getQueueData().subscribe({next:t=>{this.queueData=t,this.current_track=t.current,this.tracks=t.first_10_tracks,console.log("Beire"),console.log(t),console.log("Queue")},error:t=>console.error("Error fetching scheduler data",t)})}static{this.\u0275fac=function(o){return new(o||r)(h(T))}}static{this.\u0275cmp=v({type:r,selectors:[["queue-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],["href","components/table/queue"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,q){o&1&&(i(0,"h1"),e(1,"Queue"),n(),m(2,U,42,3,"div",0)),o&2&&(a(2),s("ngIf",q.queueData))},dependencies:[g,S,w,I,_,y,D,Q,k],encapsulation:2})}}return r})();export{P as QueueComponent};
