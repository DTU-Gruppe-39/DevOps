(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/spotify-2-logo-png-transparent.6c613680.png"},102:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABTElEQVR4Ae2agWYDQRgGP0DEvc7BgYO+b1pANahAXqfC9RS26pAgZWlnY5nZF5jhErv/bqQSERERERERkSGvGUMw5i1DYPY5p+QCJIy5pOScPat/SknZEgD9n3XiEnab/jUB0N8Sdoz+MSUFSNj0b9eRSDikpAAJt/rXdci/M2cFEqa7+mvmpF3C9Af9BdevSFjqE3h9PoHX5xN4fTqB10cTeH00Yb6rvwD6iEh9OE/9p8Dr8wm8Pp7A66MJvD6awOtTCcAmsHnCE7ANb5rw1VQfOJzQ+tBsgdfnE3h9PoHX5xPa63MBH0CAnxD6I/ZvFNBnEwD9NZ/NEpgZJzBTdTsNHGg8UnZwqHesgg+2HC32Mdx1vM5fcHjF1MElX4/XrF50AzPOxgkvv+sDCc89PbeZqp7b+ODp8U/OfPS3MeT98c8uRUREREREROQbMt81IL50LnsAAAAASUVORK5CYII="},110:function(e,t,a){e.exports=a(176)},115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),i=(a(115),a(96)),o=a.n(i),c=(a(116),a(30)),u=a(34),m=a(21),p=(a(117),a(118),a(7)),d=a(10),h=a(3),g=function(){function e(){Object(p.a)(this,e),this.currentAuthentication={token:"",isAuthenticated:!1,user:{email:"",role:""}},this.inputLogin={username:"",password:""},this.getAuthentication()}return Object(d.a)(e,[{key:"login",value:function(){var e=this;console.log("Trying logging user in"),fetch("https://test-devops69.herokuapp.com/api/authentication/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.inputLogin)}).then((function(t){return t.text().then((function(t){console.log("Login success"),console.log(t),e.setToken(t),e.getAuthentication()})).catch((function(){console.log(t.status),console.log(t),console.log("Error while logging in")}))}))}},{key:"getAuthentication",value:function(){this.getToken(),this.getUser()}},{key:"getToken",value:function(){console.log(localStorage.getItem("secureToken")),this.currentAuthentication.token=localStorage.getItem("secureToken")}},{key:"setToken",value:function(e){localStorage.setItem("secureToken",e)}},{key:"removeToken",value:function(){localStorage.removeItem("secureToken"),this.currentAuthentication=""}},{key:"removeUser",value:function(){this.currentAuthentication.user={email:"",role:""}}},{key:"getUser",value:function(){var e=this;console.log("Getting User"),fetch("https://test-devops69.herokuapp.com/api/authentication/validate",{method:"GET",headers:{Authorization:"Bearer "+this.currentAuthentication.token}}).then((function(t){return t.json().then((function(t){console.log(t),e.currentAuthentication.user=t,e.currentAuthentication.isAuthenticated=!0})).catch((function(){console.log("Validating failed: "+t.status)}))}))}},{key:"logout",value:function(){this.removeToken(),this.setIsAuthenticated(!1),this.removeUser()}}]),e}();Object(h.g)(g,{currentAuthentication:h.l,inputLogin:h.l});var E=new g,f=function(){function e(){Object(p.a)(this,e),this.stakeholderList=[{name:"",contact_person:"",email:"",stakeholder_type:!0}],this.inputStakeholder={name:"",contact_person:"",email:"",stakeholder_type:!0},this.getStakeholders()}return Object(d.a)(e,[{key:"getStakeholders",value:function(){var e=this;console.log("Getting stakeholders"),fetch("https://test-devops69.herokuapp.com/api/stakeholder",{method:"GET",headers:{Authorization:"Bearer "+E.currentAuthentication.token}}).then((function(t){return t.json().then((function(t){console.log(t),e.stakeholderList=t}))}))}}]),e}();Object(h.g)(f,{stakeholderList:h.l,inputStakeholder:h.l});var v=new f,k=a(31),b=a.n(k),A=a(46),y=function(e){return console.log("This task will be posted: "+JSON.stringify(e)),S(e,"https://test-devops69.herokuapp.com")},w=function(e){return console.log("This task will be deleted: "+JSON.stringify(e)),O(e,"https://test-devops69.herokuapp.com")},S=function(){var e=Object(A.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/task",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+E.currentAuthentication.token},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=function(e){return console.log("This task will be posted: "+JSON.stringify(e)),N(e,"https://test-devops69.herokuapp.com")},N=function(){var e=Object(A.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/task",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+E.currentAuthentication.token},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(A.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/task",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+E.currentAuthentication.token},body:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(e){return console.log("This task will be posted: "+JSON.stringify(e)),D(e,"https://test-devops69.herokuapp.com")},D=function(){var e=Object(A.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/stakeholder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+E.currentAuthentication.token},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=function(e){return console.log("This task will be posted: "+JSON.stringify(e)),L(e,"https://test-devops69.herokuapp.com")},L=function(){var e=Object(A.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"/api/usecase",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+E.currentAuthentication.token},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var B=Object(m.a)((function(){return r.a.createElement("div",{class:"container col-10"},r.a.createElement("div",{className:"row justify-content-lg-center"},r.a.createElement("form",{className:"",onSubmit:function(e){e.preventDefault(),v.stakeholderList.push(v.inputStakeholder),T(v.inputStakeholder),v.inputStakeholder={name:"",contact_person:"",email:"",stakeholder_type:!0}}},r.a.createElement("label",null,r.a.createElement("input",{name:"name ",type:"text",placeholder:"Name",value:v.inputStakeholder.name,onChange:function(e){return v.inputStakeholder.name=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"contactperson",type:"text",placeholder:"Contact person",value:v.inputStakeholder.contact_person,onChange:function(e){return v.inputStakeholder.contact_person=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:v.inputStakeholder.email,onChange:function(e){return v.inputStakeholder.email=e.target.value},required:!0})),r.a.createElement("label",null,"Direct stakeholder:",r.a.createElement("input",{name:"direct",type:"checkbox",checked:v.inputStakeholder.stakeholder_type,onChange:function(e){v.inputStakeholder.stakeholder_type^=!0}})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",{className:"stakeholderList justify-content-center"},r.a.createElement("ul",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Stakeholders"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Contact Person"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Direct Stakeholder")),v.stakeholderList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{key:t},e.name),r.a.createElement("td",{key:t},e.contact_person),r.a.createElement("td",{key:t},e.email),r.a.createElement("td",{key:t},e.stakeholder_type?"Direct stakeholder":"Indirect stakeholder"))})))))))})),x=function(){function e(){Object(p.a)(this,e),this.usecasesList=[{id:"",userStory:"",priority:"",responsible:""}],this.inputUsecases={id:null,userStory:"",priority:"",responsible:""},this.getUsecases()}return Object(d.a)(e,[{key:"getUsecases",value:function(){var e=this;console.log("Getting usecases"),fetch("https://test-devops69.herokuapp.com/api/usecase",{method:"GET",headers:{Authorization:"Bearer "+E.currentAuthentication.token}}).then((function(t){return t.json().then((function(t){console.log(t),e.usecasesList=t}))}))}}]),e}();Object(h.g)(x,{usecasesList:h.l,inputUsecases:h.l});var P=new x;a(120);var R=Object(m.a)((function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{className:"usecase-form"},r.a.createElement("form",{className:"usecaseinput",onSubmit:function(e){e.preventDefault(),P.inputUsecases.id=P.usecasesList.length+1,P.usecasesList.push(P.inputUsecases),C(P.inputUsecases),P.inputUsecases={id:null,userStory:"",priority:"",responsible:""}}},r.a.createElement("label",null,r.a.createElement("input",{name:"userStory",type:"text",placeholder:"User story",value:P.inputUsecases.userStory,onChange:function(e){return P.inputUsecases.userStory=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"priority",type:"number",placeholder:"Priority",value:P.inputUsecases.priority,onChange:function(e){return P.inputUsecases.priority=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"name",type:"text",placeholder:"Responsible",value:P.inputUsecases.responsible,onChange:function(e){return P.inputUsecases.responsible=e.target.value},required:!0})),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement("div",{className:"usecaseList d-flex justify-content-center"},r.a.createElement("ul",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Usecases"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"User story"),r.a.createElement("th",null,"Priority (1-5)"),r.a.createElement("th",null,"Responsible")),P.usecasesList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{key:t},"U"+e.id),r.a.createElement("td",{key:t},e.userStory),r.a.createElement("td",{key:t},e.priority),r.a.createElement("td",{key:t},e.responsible))})))))))})),q=a(182),U=function e(){Object(p.a)(this,e),this.progress=0,this.inputProgress=""};Object(h.g)(U,{progress:h.l,inputProgress:h.l});var I=new U;a(121);var K=Object(m.a)((function(){return r.a.createElement("div",{className:"dashboard-progress"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",null,"Project progress")),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{class:"col-10"},r.a.createElement(q.a,{now:I.progress,label:"".concat(I.progress,"%"),style:{height:40}}))),r.a.createElement("div",{className:"progress-input"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("form",{className:"progressinputform",onSubmit:function(e){e.preventDefault(),I.progress=I.inputProgress,I.inputProgress=""}},r.a.createElement("label",null,r.a.createElement("input",{name:"progress",type:"number",placeholder:"Update progress",onFocus:function(){return 0!==I.progress?I.inputProgress=I.progress:null},value:I.inputProgress,onChange:function(e){return I.inputProgress=e.target.value},required:!0})),r.a.createElement("input",{type:"submit",value:"Save"})))))))})),M=(a(79),a(99)),J=a.n(M),G=a(32),Q=a.n(G),z=a(23),F=a.n(z),Z=a(107),Y=a(180),H=a(181),X=function(){function e(){Object(p.a)(this,e),this.viewmode="List",this.modalShow=!1,this.modalDropdown=!1,this.taskList=[{name:"",description:"",id:"",responsible:"",status:""}],this.inputTask={name:"",description:"",id:"",responsible:"",status:""},this.updateTask={name:"",description:"",id:"",responsible:"",status:""},this.currStatus=[{label:"",value:""}],this.statusOption=[{label:"Not Started",value:"NotStarted"},{label:"In Progress",value:"InProgress"},{label:"Done",value:"Done"}],this.getTasks()}return Object(d.a)(e,[{key:"getTasks",value:function(){var e=this;console.log("Getting tasks"),fetch("https://test-devops69.herokuapp.com/api/task",{method:"GET",headers:{Authorization:"Bearer "+E.currentAuthentication.token}}).then((function(t){return t.json().then((function(t){console.log(t),e.taskList=t}))}))}}]),e}();Object(h.g)(X,{viewmode:h.l,taskList:h.l,inputTask:h.l,modalShow:h.l,updateTask:h.l,modalDropdown:h.l,currStatus:h.l});var V=new X,W=a(13),_=a(14),$=a(15),ee=a(43),te=a(71),ae=a(11),ne=a.n(ae),re=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).drop=function(e){e.preventDefault();var t=e.dataTransfer.getData("transfer");console.log(t+"transfered into "+e.target.id),"To-Do"===e.target.id.toString()?V.taskList.map((function(e,a){e.id===t&&(V.taskList[a].status="NotStarted",j(V.taskList[a]),console.log("task status has changed to: "+e.status+"(To-Do)"))})):"In-Progress"===e.target.id.toString()?V.taskList.map((function(e,a){e.id===t&&(V.taskList[a].status="InProgress",j(V.taskList[a]),console.log("task status has changed to: "+e.status+"(In-Progress)"))})):"Completed"===e.target.id.toString()&&V.taskList.map((function(e,a){e.id===t&&(V.taskList[a].status="Done",j(V.taskList[a]),console.log("task status has changed to: "+e.status+"(Completed)"))})),e.target.appendChild(document.getElementById(t))},a.allowDrop=function(e){e.preventDefault()},a}return Object($.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,onDrop:this.drop,onDragOver:this.allowDrop,style:this.props.style},this.props.children)}}]),t}(r.a.Component),se=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).drag=function(e){e.dataTransfer.setData("transfer",e.target.id)},a.noAllowDrop=function(e){e.stopPropagation()},a}return Object($.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,draggable:"true",onDragStart:this.drag,onDragOver:this.noAllowDrop,style:this.props.style},this.props.children)}}]),t}(r.a.Component);function le(){var e=Object(ee.a)(["\n    padding: 16px;\n    color: #555;\n    margin: 8px;\n    background-color: white;\n    border-radius: 3px;\n"]);return le=function(){return e},e}function ie(){var e=Object(ee.a)(["\n    // width: 100%;\n    padding-top: 32px;\n    display: flex;\n    justify-content: center;\n    "]);return ie=function(){return e},e}re.propTypes={id:ne.a.string,style:ne.a.object,children:ne.a.node};var oe=te.a.div(ie()),ce=te.a.div(le()),ue={backgroundColor:"#555",height:"500px",width:"100%",padding:"5px",overflow:"auto"},me=function(e){function t(){return Object(p.a)(this,t),Object(W.a)(this,Object(_.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spacer"},r.a.createElement(Q.a,{className:"justify-content-center col-11"},r.a.createElement(oe,{className:"col-12"},r.a.createElement(F.a,{className:"col-4"},r.a.createElement("h3",null,r.a.createElement("center",null,"To-Do")),r.a.createElement(re,{id:"To-Do",style:ue},V.taskList.map((function(e,t){if("NotStarted"===e.status.toString())return console.log(e.name.toString()),r.a.createElement(se,{id:e.id},r.a.createElement(ce,null,r.a.createElement("p",{key:t},r.a.createElement("b",null,e.name)),r.a.createElement("p",null,e.responsible)," ",r.a.createElement("br",null)," ",r.a.createElement("p",null,e.description)))})))),r.a.createElement(F.a,{className:"col-4"},r.a.createElement("h3",null,r.a.createElement("center",null,"In-Progress")),r.a.createElement(re,{id:"In-Progress",style:ue},V.taskList.map((function(e,t){if("InProgress"===e.status.toString())return console.log(e.name.toString()),r.a.createElement(se,{id:e.id},r.a.createElement(ce,null,r.a.createElement("p",{key:t},r.a.createElement("b",null,e.name)),r.a.createElement("p",null,e.responsible)," ",r.a.createElement("br",null)," ",r.a.createElement("p",null,e.description)))})))),r.a.createElement(F.a,{className:"col-4"},r.a.createElement("h3",null,r.a.createElement("center",null,"Completed")),r.a.createElement(re,{id:"Completed",style:ue},V.taskList.map((function(e,t){if("Done"===e.status.toString())return console.log(e.name.toString()),r.a.createElement(se,{id:e.id},r.a.createElement(ce,null,r.a.createElement("p",{key:t},r.a.createElement("b",null,e.name)),r.a.createElement("p",null,e.responsible)," ",r.a.createElement("br",null)," ",r.a.createElement("p",null,e.description)))})))))))}}]),t}(r.a.Component);var pe=Object(m.a)((function(){return r.a.createElement(J.a,null,r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"btn-group ",id:"overview",role:"group"},r.a.createElement("button",{type:"button overviewBtn",className:"btn btn-secondary",onClick:t("List")},"List"),r.a.createElement("button",{type:"button overviewBtn",className:"btn btn-secondary",onClick:t("Kanban")},"Kanban")),r.a.createElement("div",{className:"row justify-content-lg-center"},r.a.createElement("form",{className:"taskrowinput",onSubmit:function(e){e.preventDefault(),V.inputTask.status="NotStarted",V.inputTask.id=V.taskList.length+1+"",V.taskList.push(V.inputTask),y(V.inputTask),V.inputTask={name:"",description:"",id:"",responsible:"",status:""}}},r.a.createElement("label",null,r.a.createElement("input",{name:"name",type:"text",placeholder:"Name",value:V.inputTask.name,onChange:function(e){return V.inputTask.name=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"description",type:"text",placeholder:"Description",value:V.inputTask.description,onChange:function(e){return V.inputTask.description=e.target.value},required:!0})),r.a.createElement("label",null,r.a.createElement("input",{name:"responsible",type:"text",placeholder:"Task Responsible name",value:V.inputTask.responsible,onChange:function(e){return V.inputTask.responsible=e.target.value},required:!0})),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement("h3",{className:"d-flex justify-content-center"},"Tasks"),"Kanban"===V.viewmode&&r.a.createElement("div",{id:"KanbanView"},r.a.createElement(me,null)),"List"===V.viewmode&&r.a.createElement("div",{id:"ListView"},r.a.createElement(Q.a,{className:"justify-content-md-center col-lg-12 col-md-12"},r.a.createElement(F.a,{md:"auto"},r.a.createElement(Y.a,{show:V.modalShow,size:"lg"},r.a.createElement(Y.a.Header,null,r.a.createElement(Y.a.Title,null," Editing task ")),r.a.createElement(Y.a.Body,null,r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement("b",null," Name "),r.a.createElement("input",{name:"name",type:"text",placeholder:"Name",value:V.updateTask.name,onChange:function(e){return V.updateTask.name=e.target.value},required:!0})),r.a.createElement("li",null,r.a.createElement("b",null," Description "),r.a.createElement("input",{name:"description",type:"text",placeholder:"Description",value:V.updateTask.description,onChange:function(e){return V.updateTask.description=e.target.value},required:!0})),r.a.createElement("li",null,r.a.createElement("b",null," Responsible "),r.a.createElement("input",{name:"responsible",type:"text",placeholder:"Task Responsible name",value:V.updateTask.responsible,onChange:function(e){return V.updateTask.responsible=e.target.value},required:!0})),r.a.createElement("li",null,r.a.createElement("b",null," Status "),r.a.createElement(Z.a,{options:V.statusOption,value:V.currStatus,onChange:function(e){return V.currStatus=e},required:!0})))),r.a.createElement(Y.a.Footer,null,r.a.createElement(H.a,{variant:"secondary",onClick:a(!1)},"Discard changes"),r.a.createElement(H.a,{variant:"primary",onClick:a(!0)},"Save changes"))),r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Task name"),r.a.createElement("th",null,"Task Description"),r.a.createElement("th",null,"TaskResponsible"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Remove")),V.taskList.map((function(t,a){return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.responsible),r.a.createElement("td",null,t.status),r.a.createElement("td",null," ",r.a.createElement(H.a,{variant:"primary",onClick:n(a,t)},"Edit")," "),r.a.createElement("td",null,r.a.createElement("button",{className:"alert-danger",onClick:e(t.id,a)},"Delete")))}))))))));function e(e,t){return function(a){a.preventDefault(),w(e),V.taskList.splice(t,1)}}function t(e){return function(t){t.preventDefault(),V.viewmode=e}}function a(e){return function(t){t.preventDefault(),!0===e&&(V.updateTask.status=V.currStatus.value,V.taskList[V.modalKey].name=V.updateTask.name,V.taskList[V.modalKey].id=V.updateTask.id,V.taskList[V.modalKey].description=V.updateTask.description,V.taskList[V.modalKey].responsible=V.updateTask.responsible,V.taskList[V.modalKey].status=V.updateTask.status,j(V.taskList[V.modalKey])),V.updateTask={name:"",description:"",id:"",responsible:"",status:""},V.modalKey=0,V.modalShow=!1}}function n(e,t){return function(a){a.preventDefault(),V.updateTask.description=t.description,V.updateTask.id=t.id,V.updateTask.name=t.name,V.updateTask.responsible=t.responsible,V.updateTask.status=t.status,V.modalKey=e,V.currStatus.value=t.status,V.currStatus.label=t.status,V.modalShow=!0}}})),de=function e(){Object(p.a)(this,e),this.vision="",this.inputVision=""};Object(h.g)(de,{vision:h.l,inputVision:h.l});var he=new de;a(141);var ge=Object(m.a)((function(){return r.a.createElement("div",{className:"vision-input"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",null,"Vision")),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("form",{className:"visioninputform",onSubmit:function(e){e.preventDefault(),he.vision=he.inputVision,he.inputVision=""}},r.a.createElement("div",{class:"col-12"},r.a.createElement("label",null,r.a.createElement("textarea",{class:"form-control z-depth-1",rows:"5",cols:"50",name:"vision",type:"text",placeholder:"Click to add/edit vision",onFocus:function(){return he.inputVision=he.vision},value:he.inputVision,onChange:function(e){return he.inputVision=e.target.value},required:!0})),r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{class:"col-2"},r.a.createElement("input",{type:"submit",value:"Save"}))))),r.a.createElement("div",{className:"w-100"}),r.a.createElement("div",{className:"vision"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{class:"col-6"},r.a.createElement("h6",null,he.vision)))))))})),Ee=function(){function e(){Object(p.a)(this,e),this.inputMusic="",this.showResult=[],this.searchResult=[{trackId:"",songName:"",artistName:"",image_small_url:"",image_medium_url:"",image_large_url:"",webplayerLink:""}],this.showToast=!1,this.toastName=""}return Object(d.a)(e,[{key:"getSearch",value:function(e){var t=this;if(""===e)this.showResult=[];else{var a="https://test-devops69.herokuapp.com/api/music/search/"+e;console.log("Getting search results"),fetch(a).then((function(e){return e.json().then((function(e){t.searchResult=e,t.showResult=e}))}))}}}]),e}();Object(h.g)(Ee,{inputMusic:h.l,searchResult:h.l,showResult:h.l,showToast:h.l,toastName:h.l});var fe=new Ee,ve=function(){function e(){Object(p.a)(this,e),this.showRequestList=[],this.requestList=[{id:"",track:{trackId:"",songName:"",artistName:"",image_small_url:"",image_medium_url:"",image_large_url:"",webplayerLink:""},timerequested:""}],this.getRequested()}return Object(d.a)(e,[{key:"getRequested",value:function(){var e=this;console.log("Getting music requests"),fetch("https://test-devops69.herokuapp.com/api/music/").then((function(t){return t.json().then((function(t){e.showRequestList=t,e.requestList=t}))}))}},{key:"postRequest",value:function(e){var t=this;console.log("Posting music request"),fetch("https://test-devops69.herokuapp.com/api/music/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json().then((function(e){t.showRequestList=e,t.requestList=e}))}))}}]),e}();Object(h.g)(ve,{requestList:h.l,showRequestList:h.l});var ke=new ve,be=a(74),Ae=a.n(be),ye=(a(142),a(56)),we=a.n(ye),Se=a(103),je=a.n(Se),Ne=a(101),Oe=a.n(Ne),Te=a(102),De=a.n(Te),Ce=a(69),Le=a.n(Ce),Be=a(73),xe=a.n(Be);var Pe=Object(m.a)((function(){return r.a.createElement("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"0px"}},r.a.createElement(Q.a,null,r.a.createElement(F.a,{xs:12},r.a.createElement(we.a,{onClose:function(){fe.showToast=!1},show:fe.showToast,delay:3e3,autohide:!0,style:{position:"absolute",top:0,right:0}},r.a.createElement(we.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Music request"),r.a.createElement("small",null,"Just now")),r.a.createElement(we.a.Body,null,fe.toastName," was requested")))))})),Re=Object(m.a)((function(){return r.a.createElement("div",{className:"music"},r.a.createElement(Pe,null),r.a.createElement("div",{className:"container"},r.a.createElement(Q.a,null,r.a.createElement(F.a,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",null,"Music")))),r.a.createElement(Q.a,{className:"content"},r.a.createElement(F.a,null,r.a.createElement("div",{className:"music-search"},r.a.createElement("div",{className:"music-input"},r.a.createElement("div",{className:"row justify-content-start"},r.a.createElement("h3",{className:"d-flex justify-content-center"},"Request music"),r.a.createElement(xe.a,{className:"musicinputform",onSubmit:function(e){e.preventDefault(),fe.getSearch(fe.inputMusic),fe.inputMusic=""}},r.a.createElement(Q.a,null,r.a.createElement(F.a,{xs:8,style:{paddingRight:0}},r.a.createElement(xe.a.Control,{name:"music",type:"text",placeholder:"Search for a song",value:fe.inputMusic,onChange:function(e){fe.inputMusic=e.target.value,fe.getSearch(fe.inputMusic)}})),r.a.createElement(F.a,{style:{paddingLeft:0}},r.a.createElement(Le.a,{type:"submit"},"Search")))))),r.a.createElement("div",{className:"row justify-content-start"},0!==fe.showResult.length&&r.a.createElement(Ae.a,null,fe.showResult.map((function(e,t){return r.a.createElement(Ae.a.Item,{action:!0,onClick:function(){return function(e){fe.toastName=fe.showResult[e].songName,fe.showToast=!0,ke.postRequest(fe.showResult[e]),fe.showResult=[],fe.inputMusic=""}(t)},className:"result-list",key:t},r.a.createElement("h6",null,e.songName),r.a.createElement("p",null,e.artistName))})))))),r.a.createElement(F.a,{xs:8},r.a.createElement("div",{className:"row justify-content-end"},r.a.createElement("div",{className:"requestList d-flex justify-content-end"},r.a.createElement("ul",null,r.a.createElement("h3",{className:"d-flex justify-content-end"},"Music requests"),r.a.createElement(je.a,{responsive:!0,striped:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Sang"),r.a.createElement("th",null,"Kunstner"),r.a.createElement("th",null,"Tidspunkt"),r.a.createElement("th",null,"Muligheder"))),r.a.createElement("tbody",null,ke.showRequestList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{key:t},e.track.songName),r.a.createElement("td",{key:t},e.track.artistName),r.a.createElement("td",{key:t},e.timerequested),r.a.createElement("td",{key:t},r.a.createElement("a",{href:e.track.webplayerLink,target:"_blank"},r.a.createElement("img",{src:Oe.a,width:"24",height:"24",title:"\xc5ben i spotify"})),r.a.createElement("img",{src:De.a,width:"24",height:"24",title:"Slet fra listen",onClick:function(){return ke.requestList.splice(t,1)}})))})))))))))))})),qe=a(24),Ue=function(e){var t=e.component,a=(e.isAuthenticated,Object(qe.a)(e,["component","isAuthenticated"]));return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return E.currentAuthentication.isAuthenticated?r.a.createElement(t,e):r.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var Ie=Object(m.a)((function(){return r.a.createElement("div",{className:"Login"},E.currentAuthentication.isAuthenticated?r.a.createElement(u.a,{to:"/Dashboard"}):r.a.createElement("form",{className:"loginForm",onSubmit:function(e){e.preventDefault(),E.login(),E.inputLogin={username:"",password:""}}},r.a.createElement("label",null,"Username:",r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:E.inputLogin.username,onChange:function(e){return E.inputLogin.username=e.target.value},required:!0})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",value:E.inputLogin.password,onChange:function(e){E.inputLogin.password=e.target.value},required:!0})),r.a.createElement("input",{type:"submit",value:"Submit"})))})),Ke=a(105),Me=a.n(Ke),Je=a(48),Ge=a.n(Je);var Qe=Object(m.a)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"topbar"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("img",{src:o.a,alt:"Company logo"}),r.a.createElement("div",{className:"collapse navbar-collapse dropdown-menu-left",id:"navbarSupportedContent"}),r.a.createElement(Me.a.Toggle,{"aria-controls":"basic-navbar-nav "}),r.a.createElement("span",{className:"navbar-toggler-icon"},r.a.createElement(Ge.a,{alignRight:!0,id:"dropdown-menu-align-right"},r.a.createElement(Ge.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(Ge.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(Ge.a.Item,{href:"#action/3.3"},"Something"))))),!0===E.currentAuthentication.isAuthenticated&&r.a.createElement("div",{className:"sidebar",id:"sidebar"},r.a.createElement("div",{className:"list-group list-group-flush"},r.a.createElement(c.b,{to:"/Dashboard",className:"list-group-item list-group-item-action bg-light"},"Dashboard"),r.a.createElement(c.b,{to:"/Stakeholders",className:"list-group-item list-group-item-action bg-light"},"Stakeholders"),r.a.createElement(c.b,{to:"/Usecases",className:"list-group-item list-group-item-action bg-light"},"Use cases"),r.a.createElement(c.b,{to:"/Vision",className:"list-group-item list-group-item-action bg-light"},"Vision"),r.a.createElement(c.b,{to:"/TaskOverview",className:"list-group-item list-group-item-action bg-light"},"TaskOverview"),r.a.createElement(c.b,{to:"/Music",className:"list-group-item list-group-item-action bg-light"},"Music"))),r.a.createElement("div",{className:"main"},r.a.createElement(u.d,null,r.a.createElement(Ue,{exact:!0,path:"/Dashboard",component:K}),r.a.createElement(Ue,{exact:!0,path:"/Stakeholders",component:B}),r.a.createElement(Ue,{exact:!0,path:"/Usecases",component:R}),r.a.createElement(Ue,{exact:!0,path:"/Vision",component:ge}),r.a.createElement(Ue,{exact:!0,path:"/TaskOverview",component:pe}),r.a.createElement(Ue,{exact:!0,path:"/Music",component:Re}),r.a.createElement(u.b,{exact:!0,path:"/Login",component:Ie}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,null," ",r.a.createElement(Qe,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,t,a){},96:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAsCAYAAACt4LBeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAHVElEQVR42u2cZ4xVRRTH//Mo0gSFdQVBsa9EQSEgVgwxKBZUohLFiFE0xGAIlqDEEIIaK36wREosMRoL2EAlmEgRVhYLygap1ihgUGNDRYzw88PM4uZ573t35r73bmTf/8vuuzOnzNwz7Zwz1yglgF6SzpR0sqQjJOUkkVfNSPpJ0keSlklqMMbsSiu7ivQwIURAZ0ljJI2UtE3SIkn1kj43xvwdQ9NV0iBJQyWdKmmNpFnGmMasO6GKhAA6A3cB7wBXAh1S8BoIPAXMBwZk3bYqigAYBdQDI0vM9zDgOWCmM7D2wDnAeUDHrNvd4gF0cCN1OtC+jHKGA+8C3/Avvq3ODhkCOBBYDJxbIXkf8V+szbofWiSAXm7KP75C8joTj+5Z90eLAtANWAb0qaDM1sD2iJe/M81mswpPADngTWBwBrKnRRjArKz7pEUBmAKMz0i2AcYDDcB7wGRgRXUGqBCAPsD8rPXI0+lS4MEU9FcCvwJDsm5LoP63AD8Cx5SDfy7v9wOSbsq60c1hjJkrqQ6oC2SxS9Jf7u//EX9L2ilpd1mlAKcBj2Td2hjdTgCezVqPvRrAK8AhKeg7AuOABcBWt3v/BVgF3J9iBDfxfx04OOt+2isBdAdeTUF/OfAdhbEbmA3sGyhjBDA1677aKwFMAEYF0BngXvywJsSx4/wEyyvUH62cL6QrEBQxjdG/1vHNpedYUFZbJ2v/pATzgC4Bgm72fPlNWAW0C5D3vO8y5TpjdoJ6BwC3A+8D67Be0BXAJqw7fBxFYiHAvsBDzX7XAlOBD4FPsM61emC9+zuBIgEvx+OeBPr3doPxY6ARG7FdAWx0y+dlQKsoQgMsDngZxwB/BRoAwB0BMq8HLvekaQdsLlJnvOuoiUBtRPlRrnM3AGcV4FMDbHD/Xw2sBcZGDS6sq/1OJ/fkAjwPBVYWKG+FdaCtA66KMijgWOBhZxyD8gt7A08GvIynU7x8gN/wnHWAwcB9njQFDQB4DJiLTXIpxutwN3uNjSmvcUYyFliapH3AAOAr4LiY8lgDANoArwKPF5udXP2+zigvaP5wGHBbQKf+kdIAAMZ4yu0GvBSg6+aYsluBF/FYk4EuwGpgaERZDbDNGcF+HjzPB+pjygoZwCPAA5790RP4DOjX9GA0cI0nk8ElePkQ4OcHlnrWjzQAbCLKJgKSTrBT6nqgTd7zGteuGwJ4NpA/PSveAICTsPsV7w0lNveiQbKewE6Stnvy6OUrNAZZnusnSppujPndl9AYs1bSSkmXxFSZG6DPS5J88i4mSZpmjPH2EBpjFkr6BRjUZD2+Rx0865ebTwgukvRCCvpnJF0c8XybMWZbAL9VkvolqYgNjp0kaWGo8saY4caYD3Kyo9/XObPZs34cvvapjD2Tp/aJAwdJ+tEY82sKNg2yWc75+DmQ3xZJPRLW7StpdSlS63OSvpdU60nXKMl76ozAu571ayX9UAK5PSRtTcPAGLND0j4l0KUJOyQlzbnsoRINwpykTZKO9mz8TklzUsreLsk39FwnaWMJ2r1bgXci8ruiBDxC+CGpVcK6BZGT9I2k3gG0d8uGWUMxPWAKPl7SJyVo9xZJwYEvac/lGN/Nc6mwNa3+TcgZY5DdESbzGzsYYz6TdEug3PcleTl0HIZKWpq20caY7yS1Aw5IwWaI7EkgC6yR1A9IvQQ1nQIWSRoeQP+opLs8aRoljXDLSGK4xtYE7rCjMEfSVSnor5H0Yol08YIx5k/ZgXBJKA/gjT3eR2zAYV4KZhdjcwAKYRfwaIjjxckYBUwKoItzBHUHviTC95+A5+nYOwwm7/meWEAAz17A6ojncY6g/sCnQKcAWSP+41DD+sMPDVHe0bfHBkBew/q2fwO+x0ak7gSOCOXt+C9wxzdfukKu4KuBJXhEJoGDnQexf0RZxQzAld2NTeRp7SGnDviC/AQd51qcEaJ8ueF0ezyQtlgwaDL2SlrRjTBwKjZ6d15MeaUNwGADQW+RIMcCOAv4PCqO0VRhHilTt8oB18DDA2mThINHON/+Q8CJzUcU9m7k2cAcYCXQtwCfihpAszrXuVF9n1sacs3KOgMXYO961FMouxgb934zpAHlAjAGmJaCvg0wJUG9ttjA2BxsbH09NqrX6EbZsAQ8OoTsUxxtF+DGiOddgQkJ6Dthk1bmO703uNnqY2AGcEZSRW6LUiQLuIjdcp81uoqUcOvKPOC0jPXogE2qKMuFiCoKANgPm1PWNz23IPmt3WmiItfSq4gA0MNNvwMrLLc98DJwRdZ90OLhdrWLKPFnYQrI6wm8DZyfddurcHDHqJnY/LOyfbMHGOlmnEyWnSqKALjQOUwuC8lDK8C3DpvZ+mA5DayKEsDtzG/HXnC4lgSp1DF8jPOnPw+8ABybddtaKkI/FNlR0mjZaNR2SUskLZe0MSrK54ImPfXvhyIHSFoh6QljTCkSPKoIROqMFuBA2Zd6iqQjZdOkopI9t0haLWssjS4PoYqM8Q9EsvJBjwh4WwAAAABJRU5ErkJggg=="}},[[110,1,2]]]);
//# sourceMappingURL=main.57b6511e.chunk.js.map