(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){e.exports=a(360)},141:function(e,t,a){},147:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},194:function(e,t){},195:function(e,t){},198:function(e,t){},200:function(e,t){},243:function(e,t){},248:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=248},286:function(e,t){},287:function(e,t){},358:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(134),s=a.n(i),c=(a(141),a(11)),o=a(12),l=a(14),u=a(13),d=a(15);a(143);var m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link "+("home"===this.props.selectedTab?"active":""),onClick:function(){return e.props.onClick("home")},id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"home"===this.props.selectedTab},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link "+("shipping-requests"===this.props.selectedTab?"active":""),onClick:function(){return e.props.onClick("shipping-requests")},id:"shipping-requests-tab","data-toggle":"tab",href:"#shipping-requests",role:"tab","aria-controls":"shipping-requests","aria-selected":"shipping-requests"===this.props.selectedTab},"Shipping Requests")))}}]),t}(r.a.Component),p=a(53),h=(a(145),a(147),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=["Card"];return"backlog"===this.props.status?e.push("Card-grey"):"in-progress"===this.props.status?e.push("Card-blue"):"complete"===this.props.status&&e.push("Card-green"),r.a.createElement("div",{className:e.join(" "),id:this.props.id,"data-status":this.props.status},r.a.createElement("div",{className:"Card-title"},this.props.name))}}]),t}(r.a.Component)),g=(a(149),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).cardsRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.clients.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,description:e.description,status:e.status})});return r.a.createElement("div",{className:"Swimlane-column"},r.a.createElement("div",{className:"Swimlane-title"},this.props.name),r.a.createElement("div",{className:"Swimlane-dragColumn",id:this.props.id,ref:this.cardsRef},e))}}]),t}(r.a.Component)),f=(a(151),a(135)),b=a.n(f),v=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getClients();return a.state={clients:{backlog:n.filter(function(e){return!e.status||"backlog"===e.status}),inProgress:n.filter(function(e){return e.status&&"in-progress"===e.status}),complete:n.filter(function(e){return e.status&&"complete"===e.status})}},a.swimlanes={backlog:r.a.createRef(),inProgress:r.a.createRef(),complete:r.a.createRef()},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getClients",value:function(){return[["1","Stark, White and Abbott","Cloned Optimal Architecture","in-progress"],["2","Wiza LLC","Exclusive Bandwidth-Monitored Implementation","complete"],["3","Nolan LLC","Vision-Oriented 4Thgeneration Graphicaluserinterface","backlog"],["4","Thompson PLC","Streamlined Regional Knowledgeuser","in-progress"],["5","Walker-Williamson","Team-Oriented 6Thgeneration Matrix","in-progress"],["6","Boehm and Sons","Automated Systematic Paradigm","backlog"],["7","Runolfsson, Hegmann and Block","Integrated Transitional Strategy","backlog"],["8","Schumm-Labadie","Operative Heuristic Challenge","backlog"],["9","Kohler Group","Re-Contextualized Multi-Tasking Attitude","backlog"],["10","Romaguera Inc","Managed Foreground Toolset","backlog"],["11","Reilly-King","Future-Proofed Interactive Toolset","complete"],["12","Emard, Champlin and Runolfsdottir","Devolved Needs-Based Capability","backlog"],["13","Fritsch, Cronin and Wolff","Open-Source 3Rdgeneration Website","complete"],["14","Borer LLC","Profit-Focused Incremental Orchestration","backlog"],["15","Emmerich-Ankunding","User-Centric Stable Extranet","in-progress"],["16","Willms-Abbott","Progressive Bandwidth-Monitored Access","in-progress"],["17","Brekke PLC","Intuitive User-Facing Customerloyalty","complete"],["18","Bins, Toy and Klocko","Integrated Assymetric Software","backlog"],["19","Hodkiewicz-Hayes","Programmable Systematic Securedline","backlog"],["20","Murphy, Lang and Ferry","Organized Explicit Access","backlog"]].map(function(e){return{id:e[0],name:e[1],description:e[2],status:e[3]}})}},{key:"renderSwimlane",value:function(e,t,a,n){return r.a.createElement("div",null,r.a.createElement(g,{name:e,clients:t,id:n,ref:a}))}},{key:"render",value:function(){var e=a(162)();return e.get("/",function(e,t){return t.send("Hello World!")}),e.listen(3e3,function(){return console.log("Example app listening on port ".concat(3e3,"!"))}),r.a.createElement("div",{className:"Board"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},this.renderSwimlane("Backlog",this.state.clients.backlog,this.swimlanes.backlog,"backlog")),r.a.createElement("div",{className:"col-md-4"},this.renderSwimlane("In Progress",this.state.clients.inProgress,this.swimlanes.inProgress,"in-progress")),r.a.createElement("div",{className:"col-md-4"},this.renderSwimlane("Complete",this.state.clients.complete,this.swimlanes.complete,"complete")))))}},{key:"componentDidMount",value:function(){var e=this,t=this.swimlanes.backlog.current.cardsRef.current,a=this.swimlanes.inProgress.current.cardsRef.current,n=this.swimlanes.complete.current.cardsRef.current,r=b()([t,a,n]).on("drop",function(t,a,n){var i=Array.from(a.children).findIndex(function(e){return e.id===t.id});r.cancel(!0),e.updateCardIntoSwimlane(t.id,i,n.id,a.id)})}},{key:"updateCardIntoSwimlane",value:function(e,t,a,n){var r=this.getSwimlaneStateFromId(a),i=r.find(function(t){return t.id===e});i.status=n,r=r.filter(function(t){return t.id!==e}),this.updateSwimlaneData(a,r);var s=this.getSwimlaneStateFromId(n);s.splice(t,0,i),this.updateSwimlaneData(n,s)}},{key:"getSwimlaneStateFromId",value:function(e){switch(e){case"backlog":return this.state.clients.backlog;case"in-progress":return this.state.clients.inProgress;case"complete":return this.state.clients.complete;default:console.error("Unrecognized swimlane!")}}},{key:"updateSwimlaneData",value:function(e,t){switch(e){case"backlog":return void this.setState({clients:Object(p.a)({},this.state.clients,{backlog:t})});case"in-progress":return void this.setState({clients:Object(p.a)({},this.state.clients,{inProgress:t})});case"complete":return void this.setState({clients:Object(p.a)({},this.state.clients,{complete:t})});default:console.error("Unrecognized swimlane!")}}}]),t}(r.a.Component),k=(a(358),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={selectedTab:"home"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderShippingRequests",value:function(){return r.a.createElement(v,null)}},{key:"renderNavigation",value:function(){var e=this;return r.a.createElement(m,{onClick:function(t){return e.changeTab(t)},selectedTab:this.state.selectedTab})}},{key:"renderTabContent",value:function(){switch(this.state.selectedTab){case"home":default:return r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"App-title"},r.a.createElement("h1",null,"SHIPTIVITAS"),r.a.createElement("div",{className:"App-icon"},r.a.createElement("div",{className:"Circle"}))));case"shipping-requests":return this.renderShippingRequests()}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.renderNavigation(),r.a.createElement("div",{className:"App-body"},this.renderTabContent()))}},{key:"changeTab",value:function(e){this.setState({selectedTab:e})}}]),t}(n.Component));s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[136,2,1]]]);
//# sourceMappingURL=main.3b2a189d.chunk.js.map