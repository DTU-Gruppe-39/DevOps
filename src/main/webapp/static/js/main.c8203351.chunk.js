(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),i=(a(72),a(55)),c=a.n(i),o=(a(73),a(18)),u=a(20),m=a(12),p=(a(74),a(75),a(7)),d=a(10),h=a(1),E=function(){function e(){Object(p.a)(this,e),this.stakeholderList=[{name:"",contact_person:"",email:"",stakeholder_type:!0}],this.inputStakeholder={name:"",contact_person:"",email:"",stakeholder_type:!0},this.getStakeholders()}return Object(d.a)(e,[{key:"getStakeholders",value:function(){var e=this;console.log("Getting stakeholders"),fetch("https://test-devops69.herokuapp.com/api/stakeholder").then((function(t){return t.json().then((function(t){console.log(t),e.stakeholderList=t}))}))}}]),e}();Object(h.g)(E,{stakeholderList:h.l,inputStakeholder:h.l});var g=new E,v=a(22),f=a.n(v),b=a(29),A=function(e){return console.log("This task will be posted: "+JSON.stringify(e)),k(e,"https://test-devops69.herokuapp.com")},k=function(){var e=Object(b.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/task",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(e){return console.log("This task will be posted: "+JSON.stringify(e)),w(e,"https://test-devops69.herokuapp.com")},w=function(){var e=Object(b.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/stakeholder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=function(e){return console.log("This task will be posted: "+JSON.stringify(e)),N(e,"https://test-devops69.herokuapp.com")},N=function(){var e=Object(b.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/usecase",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var S=Object(m.a)((function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"stakeholder-form"},r.a.createElement("form",{className:"stakeinput",onSubmit:function(e){e.preventDefault(),g.stakeholderList.push(g.inputStakeholder),y(g.inputStakeholder),g.inputStakeholder={name:"",contact_person:"",email:"",stakeholder_type:!0}}},r.a.createElement("label",null,r.a.createElement("input",{name:"name",type:"text",placeholder:"Name",value:g.inputStakeholder.name,onChange:function(e){return g.inputStakeholder.name=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"contactperson",type:"text",placeholder:"Contact person",value:g.inputStakeholder.contact_person,onChange:function(e){return g.inputStakeholder.contact_person=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:g.inputStakeholder.email,onChange:function(e){return g.inputStakeholder.email=e.target.value},required:!0})),r.a.createElement("label",null,"Direct stakeholder:",r.a.createElement("input",{name:"direct",type:"checkbox",checked:g.inputStakeholder.stakeholder_type,onChange:function(e){g.inputStakeholder.stakeholder_type^=!0}})),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement("div",{className:"stakeholderList d-flex justify-content-center"},r.a.createElement("ul",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Stakeholders"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Contact Person"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Direct Stakeholder")),g.stakeholderList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{key:t},e.name),r.a.createElement("td",{key:t},e.contact_person),r.a.createElement("td",{key:t},e.email),r.a.createElement("td",{key:t},e.stakeholder_type?"Direct stakeholder":"Indirect stakeholder"))})))))))})),O=function(){function e(){Object(p.a)(this,e),this.usecasesList=[{id:"",userStory:"",priority:"",responsible:""}],this.inputUsecases={id:null,userStory:"",priority:"",responsible:""},this.getUsecases()}return Object(d.a)(e,[{key:"getUsecases",value:function(){var e=this;console.log("Getting usecases"),fetch("https://test-devops69.herokuapp.com/api/usecase").then((function(t){return t.json().then((function(t){console.log(t),e.usecasesList=t}))}))}}]),e}();Object(h.g)(O,{usecasesList:h.l,inputUsecases:h.l});var D=new O;a(77);var C=Object(m.a)((function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{className:"usecase-form"},r.a.createElement("form",{className:"usecaseinput",onSubmit:function(e){e.preventDefault(),D.inputUsecases.id=D.usecasesList.length+1,D.usecasesList.push(D.inputUsecases),j(D.inputUsecases),D.inputUsecases={id:null,userStory:"",priority:"",responsible:""}}},r.a.createElement("label",null,r.a.createElement("input",{name:"userStory",type:"text",placeholder:"User story",value:D.inputUsecases.userStory,onChange:function(e){return D.inputUsecases.userStory=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"priority",type:"number",placeholder:"Priority",value:D.inputUsecases.priority,onChange:function(e){return D.inputUsecases.priority=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"name",type:"text",placeholder:"Responsible",value:D.inputUsecases.responsible,onChange:function(e){return D.inputUsecases.responsible=e.target.value},required:!0})),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement("div",{className:"usecaseList d-flex justify-content-center"},r.a.createElement("ul",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Usecases"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"User story"),r.a.createElement("th",null,"Priority (1-5)"),r.a.createElement("th",null,"Responsible")),D.usecasesList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{key:t},"U"+e.id),r.a.createElement("td",{key:t},e.userStory),r.a.createElement("td",{key:t},e.priority),r.a.createElement("td",{key:t},e.responsible))})))))))})),T=a(119),B=function e(){Object(p.a)(this,e),this.progress=0,this.inputProgress=""};Object(h.g)(B,{progress:h.l,inputProgress:h.l});var x=new B;a(78);var P=Object(m.a)((function(){return r.a.createElement("div",{className:"dashboard-progress"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",null,"Project progress")),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{class:"col-10"},r.a.createElement(T.a,{now:x.progress,label:"".concat(x.progress,"%"),style:{height:40}}))),r.a.createElement("div",{className:"progress-input"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("form",{className:"progressinputform",onSubmit:function(e){e.preventDefault(),x.progress=x.inputProgress,x.inputProgress=""}},r.a.createElement("label",null,r.a.createElement("input",{name:"progress",type:"number",placeholder:"Update progress",onFocus:function(){return 0!==x.progress?x.inputProgress=x.progress:null},value:x.inputProgress,onChange:function(e){return x.inputProgress=e.target.value},required:!0})),r.a.createElement("input",{type:"submit",value:"Save"})))))))})),R=(a(45),a(58)),L=a.n(R),q=a(19),M=a.n(q),U=a(13),J=a.n(U),K=function(){function e(){Object(p.a)(this,e),this.viewmode="List",this.taskList=[{name:"",description:"",id:"",responsible:"",status:""}],this.inputTask={name:"",description:"",id:"",responsible:"",status:""},this.getTasks()}return Object(d.a)(e,[{key:"getTasks",value:function(){var e=this;console.log("Getting tasks"),fetch("https://test-devops69.herokuapp.com/api/task").then((function(t){return t.json().then((function(t){console.log(t),e.taskList=t}))}))}}]),e}();Object(h.g)(K,{viewmode:h.l,taskList:h.l,inputTask:h.l});var G=new K,I=a(25),Q=a(24),F=a(26),Z=a(35),Y=a(36),z=a(15),H=a.n(z),V=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).drop=function(e){e.preventDefault();var t=e.dataTransfer.getData("transfer");e.target.appendChild(document.getElementById(t))},a.allowDrop=function(e){e.preventDefault()},a}return Object(F.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,onDrop:this.drop,onDragOver:this.allowDrop,style:this.props.style},this.props.children)}}]),t}(r.a.Component),X=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).drag=function(e){e.dataTransfer.setData("transfer",e.target.id)},a.noAllowDrop=function(e){e.stopPropagation()},a}return Object(F.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,draggable:"true",onDragStart:this.drag,onDragOver:this.noAllowDrop,style:this.props.style},this.props.children)}}]),t}(r.a.Component);function W(){var e=Object(Z.a)(["\n    padding: 16px;\n    color: #555;\n    margin: 8px;\n    background-color: white;\n    border-radius: 3px;\n"]);return W=function(){return e},e}function _(){var e=Object(Z.a)(["\n    // width: 100%;\n    padding-top: 32px;\n    display: flex;\n    justify-content: center;\n    "]);return _=function(){return e},e}V.propTypes={id:H.a.string,style:H.a.object,children:H.a.node};var $=Y.a.div(_()),ee=Y.a.div(W()),te={backgroundColor:"#555",height:"550px",padding:"4px"};var ae=function(e){function t(){return Object(p.a)(this,t),Object(I.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spacer"},r.a.createElement(M.a,{className:"justify-content-center col-11"},r.a.createElement($,{className:"col-12"},r.a.createElement(J.a,{className:"col-3"},r.a.createElement("h3",null,r.a.createElement("center",null,"To-Do")),r.a.createElement(V,{id:"drop1",style:te},r.a.createElement(X,{id:"item1"},G.taskList.map((function(e,t){return G.taskList.map((function(e,t){return console.log(e.name.toString()),r.a.createElement(ee,null,r.a.createElement("p",{key:t},r.a.createElement("b",null,e.name)," ",r.a.createElement("br",null),e.description))}))}))),r.a.createElement(X,{id:"item2"},r.a.createElement(ee,null,"Dette er en case")))),r.a.createElement(J.a,{className:"col-3"},r.a.createElement("h3",null,r.a.createElement("center",null,"In-Progress")),r.a.createElement(V,{id:"drop2",style:te})),r.a.createElement(J.a,{className:"col-3"},r.a.createElement("h3",null,r.a.createElement("center",null,"Completed")),r.a.createElement(V,{id:"drop3",style:te})),r.a.createElement(J.a,{className:"col-3"},r.a.createElement("h3",null,r.a.createElement("center",null,"Add Task")),r.a.createElement("form",{className:"justify-content-center",onSubmit:ne},r.a.createElement("label",null,r.a.createElement("input",{className:"form-control",type:"",placeholder:"Task title",onChange:function(e){return G.inputTask.name=e.target.value},required:!0})),r.a.createElement("textarea",{className:"form-control",rows:"3",id:"taskDescription",placeholder:"Task description",onChange:function(e){return G.inputTask.description=e.target.value},required:!0}),r.a.createElement("label",null,r.a.createElement("select",{className:"browser-default custom-select",required:!0},r.a.createElement("option",{value:""},"Select state"),r.a.createElement("option",{value:"1"},"To-Do"),r.a.createElement("option",{value:"2"},"In-Progress"),r.a.createElement("option",{value:"3"},"Completed"))),r.a.createElement("input",{className:"btn btn-success",id:"submit",type:"submit",value:"Submit"}))))))}}]),t}(r.a.Component);function ne(){return function(e){e.preventDefault(),G.inputTask.status="NotStarted",G.inputTask.id=G.taskList.length+1+"",G.taskList.push(G.inputTask),G.inputTask={name:"",description:"",id:"",responsible:"",status:""}}}var re=Object(m.a)((function(){return r.a.createElement(L.a,null,r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"btn-group ",id:"overview",role:"group"},r.a.createElement("button",{type:"button overviewBtn",className:"btn btn-secondary",onClick:e("List")},"List"),r.a.createElement("button",{type:"button overviewBtn",className:"btn btn-secondary",onClick:e("Kanban")},"Kanban")),r.a.createElement("div",null,r.a.createElement("form",{className:"taskinput",onSubmit:function(e){e.preventDefault(),G.inputTask.status="NotStarted",G.inputTask.id=G.taskList.length+1+"",G.taskList.push(G.inputTask),A(G.inputTask),G.inputTask={name:"",description:"",id:"",responsible:"",status:""}}},r.a.createElement("label",null,r.a.createElement("input",{name:"name",type:"text",placeholder:"Name",value:G.inputTask.name,onChange:function(e){return G.inputTask.name=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"description",type:"text",placeholder:"Description",value:G.inputTask.description,onChange:function(e){return G.inputTask.description=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"responsible",type:"text",placeholder:"Task Responsible name",value:G.inputTask.responsible,onChange:function(e){return G.inputTask.responsible=e.target.value},required:!0})),r.a.createElement("input",{type:"submit",value:"Submit"}))),"Kanban"===G.viewmode&&r.a.createElement("div",{id:"KanbanView"},r.a.createElement(ae,null)),"List"===G.viewmode&&r.a.createElement("div",{id:"ListView"},r.a.createElement(M.a,{className:"justify-content-md-center col-lg-12 col-md-12"},r.a.createElement(J.a,{md:"auto"},r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Task name"),r.a.createElement("th",null,"Task Description"),r.a.createElement("th",null,"TaskId"),r.a.createElement("th",null,"TaskResponsible"),r.a.createElement("th",null,"Status")),G.taskList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.responsible),r.a.createElement("td",null,e.status))}))))))));function e(e){return function(t){t.preventDefault(),G.viewmode=e}}})),se=function e(){Object(p.a)(this,e),this.vision="",this.inputVision=""};Object(h.g)(se,{vision:h.l,inputVision:h.l});var le=new se;a(82);var ie=Object(m.a)((function(){return r.a.createElement("div",{className:"vision-input"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",null,"Vision")),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("form",{className:"visioninputform",onSubmit:function(e){e.preventDefault(),le.vision=le.inputVision,le.inputVision=""}},r.a.createElement("div",{class:"col-12"},r.a.createElement("label",null,r.a.createElement("textarea",{class:"form-control z-depth-1",rows:"5",cols:"50",name:"vision",type:"text",placeholder:"Click to add/edit vision",onFocus:function(){return le.inputVision=le.vision},value:le.inputVision,onChange:function(e){return le.inputVision=e.target.value},required:!0})),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{class:"col-2"},r.a.createElement("input",{type:"submit",value:"Save"}))))),r.a.createElement("div",{className:"w-100"}),r.a.createElement("div",{className:"vision"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{class:"col-6"},r.a.createElement("h6",null,le.vision)))))))})),ce=function(){function e(){Object(p.a)(this,e),this.inputMusic="",this.showResult=[],this.searchResult=[{id:"",songName:"",artistName:"",image_small_url:"",image_medium_url:"",image_large_url:"",webplayerLink:""}],this.showToast=!1,this.toastName=""}return Object(d.a)(e,[{key:"getSearch",value:function(e){var t=this;if(""===e)this.showResult=[];else{var a="http://localhost:5005/api/music/search/"+e;console.log("Getting search results"),fetch(a).then((function(e){return e.json().then((function(e){t.searchResult=e,t.showResult=e}))}))}}}]),e}();Object(h.g)(ce,{inputMusic:h.l,searchResult:h.l,showResult:h.l,showToast:h.l,toastName:h.l});var oe=new ce,ue=function(){function e(){Object(p.a)(this,e),this.requestList=[{name:"bad guy",artist:"Billie Eilish",timerequested:"19:45",upvotes:5,webplayerLink:"https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m"},{name:"Mad Love",artist:"MOTi, Vigiland",timerequested:"18:55",upvotes:2,webplayerLink:"https://open.spotify.com/track/6P7Qezj2LV5kHc2VihAJWp"},{name:"Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy) - Ti\xebsto Remix",artist:"Martin Garrix, Macklemore, Fall Out Boy, Ti\xebsto",timerequested:"19:11",upvotes:0,webplayerLink:"https://open.spotify.com/track/1sI9LpIHEEzQwSVnp8oyfD"}]}return Object(d.a)(e,[{key:"getRequested",value:function(){var e=this;console.log("Getting music requests"),fetch("http://localhost:5005/api/music/").then((function(t){return t.json().then((function(t){e.requestList=t}))}))}},{key:"postRequest",value:function(e){var t=this;console.log("Posting music request"),fetch("http://localhost:5005/api/music/search/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json().then((function(e){t.requestList=e}))}))}}]),e}();Object(h.g)(ue,{requestList:h.l});var me=new ue,pe=a(40),de=a.n(pe),he=(a(83),a(30)),Ee=a.n(he),ge=a(62),ve=a.n(ge),fe=a(59),be=a.n(fe),Ae=a(60),ke=a.n(Ae),ye=a(61),we=a.n(ye),je=a(39),Ne=a.n(je);var Se=Object(m.a)((function(){return r.a.createElement("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"0px"}},r.a.createElement(M.a,null,r.a.createElement(J.a,{xs:12},r.a.createElement(Ee.a,{onClose:function(){oe.showToast=!1},show:oe.showToast,delay:3e3,autohide:!0,style:{position:"absolute",top:0,right:0}},r.a.createElement(Ee.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Music request"),r.a.createElement("small",null,"Just now")),r.a.createElement(Ee.a.Body,null,oe.toastName," was requested")))))})),Oe=Object(m.a)((function(){return r.a.createElement("div",{className:"music"},r.a.createElement(Se,null),r.a.createElement("div",{className:"container"},r.a.createElement(M.a,null,r.a.createElement(J.a,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",null,"Music")))),r.a.createElement(M.a,{className:"content"},r.a.createElement(J.a,null,r.a.createElement("div",{className:"music-search"},r.a.createElement("div",{className:"music-input"},r.a.createElement("div",{className:"row justify-content-start"},r.a.createElement("h3",{className:"d-flex justify-content-center"},"Request music"),r.a.createElement(Ne.a,{className:"musicinputform",onSubmit:function(e){e.preventDefault(),oe.getSearch(oe.inputMusic),oe.inputMusic=""}},r.a.createElement(M.a,null,r.a.createElement(J.a,{xs:8,style:{paddingRight:0}},r.a.createElement(Ne.a.Control,{name:"music",type:"text",placeholder:"Search for a song",value:oe.inputMusic,onChange:function(e){oe.inputMusic=e.target.value,oe.getSearch(oe.inputMusic)}})),r.a.createElement(J.a,{style:{paddingLeft:0}},r.a.createElement(we.a,{type:"submit"},"Search")))))),r.a.createElement("div",{className:"row justify-content-start"},0!==oe.showResult.length&&r.a.createElement(de.a,null,oe.showResult.map((function(e,t){return r.a.createElement(de.a.Item,{action:!0,onClick:function(){return function(e){alert("Not implemented yet"),me.postRequest(oe.showResult[e]),oe.toastName=oe.showResult[e].songName,oe.showToast=!0,oe.showResult=[],oe.inputMusic=""}(t)},className:"result-list",key:t},r.a.createElement("h6",null,e.songName),r.a.createElement("p",null,e.artistName))})))))),r.a.createElement(J.a,{xs:8},r.a.createElement("div",{className:"row justify-content-end"},r.a.createElement("div",{className:"requestList d-flex justify-content-end"},r.a.createElement("ul",null,r.a.createElement("h3",{className:"d-flex justify-content-end"},"Music requests"),r.a.createElement(ve.a,{responsive:!0,striped:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Sang"),r.a.createElement("th",null,"Kunstner"),r.a.createElement("th",null,"Tidspunkt"),r.a.createElement("th",null,"Muligheder"))),r.a.createElement("tbody",null,me.requestList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{key:t},e.name),r.a.createElement("td",{key:t},e.artist),r.a.createElement("td",{key:t},e.timerequested),r.a.createElement("td",{key:t},r.a.createElement("a",{href:e.webplayerLink,target:"_blank"},r.a.createElement("img",{src:be.a,width:"24",height:"24",title:"\xc5ben i spotify"})),r.a.createElement("img",{src:ke.a,width:"24",height:"24",title:"Slet fra listen",onClick:function(){return me.requestList.splice(t,1)}})))})))))))))))}));var De=Object(m.a)((function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"topbar"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light border-bottom"},r.a.createElement("img",{src:c.a,alt:"Company logo"}),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"}))),r.a.createElement("div",{className:"d-flex float-left",id:"sidebar"},r.a.createElement("div",{className:"bg-light border-right"},r.a.createElement("div",{className:"list-group list-group-flush"},r.a.createElement(o.b,{to:"/Dashboard",className:"list-group-item list-group-item-action bg-light"},"Dashboard"),r.a.createElement(o.b,{to:"/Stakeholders",className:"list-group-item list-group-item-action bg-light"},"Stakeholders"),r.a.createElement(o.b,{to:"/Usecases",className:"list-group-item list-group-item-action bg-light"},"Use cases"),r.a.createElement(o.b,{to:"/Vision",className:"list-group-item list-group-item-action bg-light"},"Vision"),r.a.createElement(o.b,{to:"/TaskOverview",className:"list-group-item list-group-item-action bg-light"},"TaskOverview"),r.a.createElement(o.b,{to:"/Music",className:"list-group-item list-group-item-action bg-light"},"Music")))),r.a.createElement("div",{className:"main"},r.a.createElement(u.a,{exact:!0,path:"/Dashboard",component:P}),r.a.createElement(u.a,{exact:!0,path:"/Stakeholders",component:S}),r.a.createElement(u.a,{exact:!0,path:"/Usecases",component:C}),r.a.createElement(u.a,{exact:!0,path:"/Vision",component:ie}),r.a.createElement(u.a,{exact:!0,path:"/TaskOverview",component:re}),r.a.createElement(u.a,{exact:!0,path:"/Music",component:Oe}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null," ",r.a.createElement(De,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){},55:function(e,t){e.exports="data:image/png;base64,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"},59:function(e,t,a){e.exports=a.p+"static/media/spotify-2-logo-png-transparent.6c613680.png"},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABTElEQVR4Ae2agWYDQRgGP0DEvc7BgYO+b1pANahAXqfC9RS26pAgZWlnY5nZF5jhErv/bqQSERERERERkSGvGUMw5i1DYPY5p+QCJIy5pOScPat/SknZEgD9n3XiEnab/jUB0N8Sdoz+MSUFSNj0b9eRSDikpAAJt/rXdci/M2cFEqa7+mvmpF3C9Af9BdevSFjqE3h9PoHX5xN4fTqB10cTeH00Yb6rvwD6iEh9OE/9p8Dr8wm8Pp7A66MJvD6awOtTCcAmsHnCE7ANb5rw1VQfOJzQ+tBsgdfnE3h9PoHX5xPa63MBH0CAnxD6I/ZvFNBnEwD9NZ/NEpgZJzBTdTsNHGg8UnZwqHesgg+2HC32Mdx1vM5fcHjF1MElX4/XrF50AzPOxgkvv+sDCc89PbeZqp7b+ODp8U/OfPS3MeT98c8uRUREREREROQbMt81IL50LnsAAAAASUVORK5CYII="},67:function(e,t,a){e.exports=a(113)},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.c8203351.chunk.js.map