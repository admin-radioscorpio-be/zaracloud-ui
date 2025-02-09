import{b as k}from"./chunk-UFTR7SYY.js";import{Aa as n,Bc as _,E as h,Eb as g,H as l,Ha as E,Ra as e,Sa as d,Ta as p,Wd as I,ca as a,da as f,ga as v,hd as y,i as u,id as D,la as m,oa as s,q as x,ub as S,xc as C,yc as b,za as i}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var w=(()=>{class r{constructor(t,o){this.http=t,this.router=o,this.apiUrl="https://zaracloud.radioscorpio.be/api/playqueue/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getQueueData(){return this.http.get(this.apiUrl).pipe(x(t=>this.handleError(t)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),u(()=>new Error(t.message))}static{this.\u0275fac=function(o){return new(o||r)(l(S),l(g))}}static{this.\u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function j(r,c){if(r&1&&(i(0,"tr"),e(1,`
                `),i(2,"th",7),e(3),n(),e(4,`
                `),i(5,"td"),e(6),n(),e(7,`
              `),n()),r&2){let t=c.$implicit,o=c.index;a(3),d(o+1),a(3),d(t.data.filename)}}function F(r,c){if(r&1&&(i(0,"div")(1,"p"),e(2),n(),i(3,"p"),e(4),n(),i(5,"c-row"),e(6,`
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
              `),m(34,j,8,2,"tr",6),e(35,`
              
              `),n(),e(36,`
            `),n(),e(37,`
          `),n(),e(38,`
        `),n(),e(39,`
      `),n(),e(40,`
    `),n(),e(41,`
  `),n()()),r&2){let t=E();a(2),p("Currently playing : ",t.current_track.data.filename,""),a(2),p("Size: ",t.queueData.length,""),a(30),s("ngForOf",t.tracks)}}var J=(()=>{class r{constructor(t){this.queueService=t,this.tracks=[],this.current_track={data:{fade_duration:0,filename:"",prefix:""},name:"",next:""}}ngOnInit(){this.queueService.getQueueData().subscribe({next:t=>{this.queueData=t,this.current_track=t.current,this.tracks=t.first_10_tracks,console.log(t)},error:t=>console.error("Error fetching scheduler data",t)})}static{this.\u0275fac=function(o){return new(o||r)(f(w))}}static{this.\u0275cmp=v({type:r,selectors:[["queue-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],["href","components/table/log"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,T){o&1&&(i(0,"h1"),e(1,"Queue"),n(),m(2,F,42,3,"div",0)),o&2&&(a(2),s("ngIf",T.tracks))},dependencies:[D,y,C,_,b,k,I],encapsulation:2})}}return r})();export{J as QueueComponent};
