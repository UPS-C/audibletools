(this["webpackJsonpmaterial-pg-01"]=this["webpackJsonpmaterial-pg-01"]||[]).push([[0],{104:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i);a(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(67),s=a(15),l=a.n(s),u=a(31),d=a(21),p=a(22),h=a(30),m=a(29),f=a(6),j=a(179),b=a(173),v=a(172),x=a(174),y=a(170),O=a(176),g=a(83),k=a.n(g),C=a(87),_=a(171),w=a(85),S=a(133),B=a(66),A=a.n(B),F=a(84),I=a.n(F),N=a(40),D=a(5),T=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e))._handleUpload=n._handleUpload.bind(Object(N.a)(n)),n}return Object(p.a)(a,[{key:"_handleUpload",value:function(e){var t=e.target.files[0];this.props.onChange(t),this.fileInput.value=null}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{style:this.props.style,children:[Object(D.jsx)("input",{accept:this.props.accept,type:"file",style:{display:"none"},onChange:this._handleUpload,ref:function(t){return e.fileInput=t}}),r.a.cloneElement(this.props.children,{onClick:function(){return e.fileInput.click()}})]})}}]),a}(r.a.Component),R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e))._validate=n._validate.bind(Object(N.a)(n)),n}return Object(p.a)(a,[{key:"_validate",value:function(e){var t=this.props,a=t.onError,n=t.onChange,r=t.maxSize,i=t.extensions;if(e){if(i){var c=e.name.split(".").pop().toLowerCase();if(!i.map((function(e){return e.toLowerCase()})).includes(c))return void a("Must upload a file of type: ".concat(i.join(" or ")))}var o=1e6*r;e.size>o?a("File size must be less than ".concat(r," MB.")):n(e)}else a("Failed to upload a file.")}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.style,n=this.props.extensions.map((function(e){return".".concat(e)})).join(",");return Object(D.jsx)(T,{onChange:this._validate,style:a,accept:n,children:t})}}]),a}(r.a.Component);R.defaultProps={maxSize:2};var z=R,H=a(56),U=a(178),W=a(168),E=a(169),M=a(82),P=a.n(M),q=a(177),L=a(181),V=a(166),J=a(162),X=a(165);function G(e){var t=e.outputFormat,a=e.setOutputFormat,n=e.style;return Object(D.jsxs)(J.a,{component:"fieldset",style:n,children:[Object(D.jsx)(X.a,{component:"legend",children:"Output Format"}),Object(D.jsxs)(L.a,{"aria-label":"format",name:"format",value:t,onChange:function(e){a(e.target.value)},children:[Object(D.jsx)(V.a,{value:"m4b",control:Object(D.jsx)(q.a,{}),label:"AAC m4b"}),Object(D.jsx)(V.a,{value:"flac",control:Object(D.jsx)(q.a,{}),label:"FLAC hq"}),Object(D.jsx)(V.a,{value:"mp3",control:Object(D.jsx)(q.a,{}),label:"Lame mp3"})]})]})}function K(e){var t=e.operatingSystem,a=e.setOperatingSystem,n=e.style;return Object(D.jsxs)(J.a,{component:"fieldset",style:n,children:[Object(D.jsx)(X.a,{component:"legend",children:"Operating System"}),Object(D.jsxs)(L.a,{"aria-label":"format",name:"format",value:t,onChange:function(e){return a(e.target.value)},children:[Object(D.jsx)(V.a,{value:"win",control:Object(D.jsx)(q.a,{}),label:"Windows"}),Object(D.jsx)(V.a,{value:"linux",control:Object(D.jsx)(q.a,{}),label:"Linux"}),Object(D.jsx)(V.a,{value:"osx",control:Object(D.jsx)(q.a,{}),label:"Mac"})]})]})}var Y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).DarkerDisabledTextField=Object(f.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(x.a),n.setExpanded=function(e){return n.setState({expanded:e})},n.handleChange=function(e){return function(t,a){n.setExpanded(!!a&&e)}},n.getCommand=function(){var e,t=n.state,a=t.outputFormat,r=t.operatingSystem,i=n.props,c=i.fileName,o=i.activationBytes;o=null!==(e=o)&&void 0!==e?e:"00000000";var s=c.split(".")[0];s="input"==s?"output":s;var l=[{os:"win",cmd:"ffmpeg.exe",discriminator:'"'},{os:"linux",cmd:"./ffmpeg",discriminator:"'"},{os:"osx",cmd:"./ffmpeg",discriminator:"'"}].filter((function(e){return e.os==r}))[0],u=[{format:"m4b",codec:"copy"},{format:"flac",codec:"flac"},{format:"mp3",codec:"libmp3lame"}].filter((function(e){return e.format==a}))[0].codec,d=l.cmd,p=l.discriminator;return"".concat(d," -y")+" -activation_bytes ".concat(o," -i  ").concat(p,".\\").concat(c).concat(p)+" -map_metadata 0 -id3v2_version 3"+" -codec:a ".concat(u)+" -vn ".concat(p).concat(s,".").concat(a).concat(p)},n.state={expanded:"",outputFormat:"m4b",operatingSystem:"win"},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.expanded,r=a.outputFormat,i=a.operatingSystem;return Object(D.jsx)("div",{className:t.root,children:Object(D.jsxs)(U.a,{expanded:"panel2"===n,onChange:this.handleChange("panel2"),children:[Object(D.jsxs)(W.a,{expandIcon:Object(D.jsx)(P.a,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[Object(D.jsx)(C.a,{className:t.heading,children:"Command"}),Object(D.jsx)(C.a,{className:t.secondaryHeading,children:"Generate ffmpeg command"})]}),Object(D.jsxs)(E.a,{style:{display:"block"},children:[Object(D.jsx)(G,{outputFormat:r,setOutputFormat:function(t){return e.setState({outputFormat:t})}}),Object(D.jsx)(K,{operatingSystem:i,setOperatingSystem:function(t){return e.setState({operatingSystem:t})},style:{paddingLeft:"20px"}}),Object(D.jsx)(this.DarkerDisabledTextField,{value:this.getCommand(),disabled:!0,multiline:!0,variant:"outlined",margin:"normal",fullWidth:!0,id:"activationBytes",label:"cmd",name:"activationBytes",autoComplete:"activationBytes","aria-readonly":!0,fontSize:5,InputProps:{readOnly:!0,endAdornment:Object(D.jsx)(H.CopyToClipboard,{text:this.getCommand(),children:Object(D.jsx)(S.a,{children:Object(D.jsx)(A.a,{})})})}})]})]})})}}]),a}(r.a.Component),$=Object(f.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}))(Y),Q=(a(114),a(47)),Z=a.n(Q),ee=function(){function e(){Object(d.a)(this,e),this.__fixed_key=[119,33,77,75,25,106,135,205,82,0,69,253,32,165,29,103]}return Object(p.a)(e,[{key:"__hexToBytes",value:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t}},{key:"__bytesToHex",value:function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a]<0?e[a]+256:e[a];t.push((n>>>4).toString(16)),t.push((15&n).toString(16))}return t.join("")}},{key:"__HashData",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Uint8Array(t),e.next=3,crypto.subtle.digest("SHA-1",a);case 3:return n=e.sent,e.abrupt("return",Array.from(new Uint8Array(n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"CalculateChecksum",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.__hexToBytes(t),e.next=3,this.__HashData(this.__fixed_key.concat(a));case 3:return n=e.sent,e.next=6,this.__HashData(this.__fixed_key.concat(n).concat(a));case 6:return r=e.sent,e.next=9,this.__HashData(n.slice(0,16).concat(r.slice(0,16)));case 9:return i=e.sent,e.abrupt("return",this.__bytesToHex(i));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"CalculateChecksum",value:function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.Instance.CalculateChecksum(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}();ee.Instance=new ee;var te=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).DarkerDisabledTextField=Object(f.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(x.a),n.Copyright=function(){return Object(D.jsxs)(C.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(D.jsx)(y.a,{color:"inherit",href:"https://audible-tools.github.io/",children:"audible-tools"})," ",(new Date).getFullYear(),"."]})},n.setChecksum=function(e){e.length>40||n.setState({checksum:e})},n.isChecksumValid=function(){var e=n.state.checksum;return RegExp("[a-f0-9]{40}").test(e)},n.isInputInvalid=function(){var e=n.state.checksum;return!(!e||""===e)&&!n.isChecksumValid()},n.addNotification=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Q.store.addNotification({message:e,type:t?"success":"danger",insert:"bottom-left",container:"top-full",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:3e3,onScreen:!1}})},n.requestActivationBytes=Object(u.a)(l.a.mark((function e(){var t,a,r,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.checksum,e.prev=1,e.next=4,fetch("https://aax.api.j-kit.me/api/v2/activation/"+t);case 4:return a=e.sent,e.next=7,a.json();case 7:if(r=e.sent,i=r.success,c=r.activationBytes,!0===i){e.next=13;break}return n.setState({activationBytes:"UNKNOWN"}),n.addNotification("An error occured while resolving the activation bytes, please check your inputs",!1),e.abrupt("return");case 13:if(!0!==i){e.next=23;break}return e.next=16,ee.CalculateChecksum(c);case 16:if(e.sent!=t){e.next=21;break}return n.setState({activationBytes:c}),n.addNotification("Successfully resolved the activation bytes"),e.abrupt("return");case 21:n.setState({activationBytes:"API ERROR"}),n.addNotification("An unexpected error occured while resolving the activation bytes, please try again",!1);case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(1),n.setState({activationBytes:e.t0}),n.addNotification("An error occured while resolving the activation bytes, please check your inputs",!1);case 29:case"end":return e.stop()}}),e,null,[[1,25]])}))),n.acceptFiles=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t[0],e.next=3,n.acceptFile(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.acceptFile=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({fileName:t.name}),a=t.slice(653,673),e.t0=n,e.next=5,a.arrayBuffer();case 5:e.t1=e.sent,r=e.t0.buf2hex.call(e.t0,e.t1),n.setChecksum(r),n.requestActivationBytes();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={checksum:"",fileName:"input.aax"},n}return Object(p.a)(a,[{key:"buf2hex",value:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.checksum,r=a.activationBytes,i=a.fileName;return Object(D.jsxs)(_.a,{component:"main",maxWidth:"md",children:[Object(D.jsx)(v.a,{}),Object(D.jsxs)("div",{className:t.paper,children:[Object(D.jsx)(j.a,{className:t.avatar,children:Object(D.jsx)(k.a,{})}),Object(D.jsx)(C.a,{component:"h1",variant:"h5",children:"AAX Checksum Resolver"}),Object(D.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(D.jsx)(w.a,{noClick:!0,onDrop:function(t){console.log(t),e.acceptFiles(t)},children:function(t){var a=t.getRootProps,r=t.getInputProps;return Object(D.jsx)("section",{children:Object(D.jsxs)("div",Object(o.a)(Object(o.a)({},a()),{},{children:[Object(D.jsx)("input",Object(o.a)({},r())),Object(D.jsx)(x.a,{error:e.isInputInvalid(),variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"checksum",label:"Checksum or Drag&Drop .aax file -",name:"checksum",autoComplete:"checksum",autoFocus:!0,onChange:function(t){return e.setChecksum(t.target.value)},value:n,InputProps:{readOnly:!1,endAdornment:Object(D.jsx)(z,{extensions:["aax","AAX"],maxSize:99999,onChange:e.acceptFile,children:Object(D.jsx)(S.a,{children:Object(D.jsx)(I.a,{})})})}})]}))})}}),Object(D.jsx)(b.a,{fullWidth:!0,variant:"contained",onClick:function(){e.requestActivationBytes()},disabled:!this.isChecksumValid(),children:"Request Activation Bytes"}),Object(D.jsx)(this.DarkerDisabledTextField,{value:r,disabled:!0,variant:"outlined",margin:"normal",fullWidth:!0,id:"activationBytes",label:r?"":"Activation Bytes",name:"activationBytes",autoComplete:"activationBytes","aria-readonly":!0,InputProps:{readOnly:!0,endAdornment:Object(D.jsx)(H.CopyToClipboard,{text:r,children:Object(D.jsx)(S.a,{children:Object(D.jsx)(A.a,{})})})}})]})]}),Object(D.jsx)($,{fileName:i,activationBytes:r}),Object(D.jsx)(O.a,{mt:1,children:Object(D.jsx)(this.Copyright,{})})]})}}]),a}(r.a.Component),ae=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}))(te),ne=a(71);ne.a.initialize("UA-174657678-1"),ne.a.pageview(window.location.pathname+window.location.search),c.a.render(Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{style:{display:"flex"},children:Object(D.jsx)(Z.a,{})}),Object(D.jsx)(ae,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.d9c7dd6c.chunk.js.map