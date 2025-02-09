import{b as w}from"./chunk-UFTR7SYY.js";import{Aa as n,Bc as y,E as f,Eb as C,H as d,Ha as S,Ra as e,Sa as u,Ta as l,Wd as k,ca as o,da as v,ga as E,hd as D,i as x,id as I,la as p,oa as s,q as h,ub as g,xc as b,yc as _,za as i}from"./chunk-B34ZBDND.js";import"./chunk-Q7L6LLAK.js";var Q=(()=>{class r{constructor(t,a){this.http=t,this.router=a,this.apiUrl="https://zaracloud.radioscorpio.be/api/playqueue/status",this.authRedirectUrl="https://zaracloud.radioscorpio.be/api/login"}getQueueData(){return this.http.get(this.apiUrl).pipe(h(t=>this.handleError(t)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),x(()=>new Error(t.message))}static{this.\u0275fac=function(a){return new(a||r)(d(g),d(C))}}static{this.\u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function j(r,c){if(r&1&&(i(0,"tr"),e(1,`
                `),i(2,"th",7),e(3),n(),e(4,`
                `),i(5,"td"),e(6),n(),e(7,`
              `),n()),r&2){let t=c.$implicit,a=c.index;o(3),u(a+1),o(3),u(t.data.filename)}}function z(r,c){if(r&1&&(i(0,"div")(1,"p"),e(2),n(),i(3,"p"),e(4),n(),i(5,"c-row"),e(6,`
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
              `),p(34,j,8,2,"tr",6),e(35,`
              
              `),n(),e(36,`
            `),n(),e(37,`
          `),n(),e(38,`
        `),n(),e(39,`
      `),n(),e(40,`
    `),n(),e(41,`
  `),n()()),r&2){let t=S();o(2),l("Size: ",t.queueData.length,""),o(2),l("Currently playing : ",t.current_track.data.filename,""),o(30),s("ngForOf",t.tracks)}}var J=(()=>{class r{constructor(t){this.queueService=t,this.tracks=[],this.current_track={data:{fade_duration:0,filename:"",prefix:""},name:"",next:""}}ngOnInit(){this.queueService.getQueueData().subscribe({next:t=>{this.queueData=t,this.current_track=t.current,this.tracks=t.first_10_tracks,console.log("Beire"),console.log(t),console.log("Queue")},error:t=>console.error("Error fetching scheduler data",t)})}static{this.\u0275fac=function(a){return new(a||r)(v(Q))}}static{this.\u0275cmp=E({type:r,selectors:[["queue-tables"]],decls:7,vars:3,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],["href","components/table/queue"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(a,m){a&1&&(i(0,"h1"),e(1,"Queue"),n(),i(2,"p"),e(3),n(),i(4,"p"),e(5),n(),p(6,z,42,3,"div",0)),a&2&&(o(3),l("Currently playing : ",m.current_track.data.filename,""),o(2),l("Size: ",m.queueData.length,""),o(),s("ngIf",m.tracks))},dependencies:[I,D,b,y,_,w,k],encapsulation:2})}}return r})();export{J as QueueComponent};
