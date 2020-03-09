module.exports=function(e,t){"use strict";var r={};function __webpack_require__(t){if(r[t]){return r[t].exports}var n=r[t]={i:t,l:false,exports:{}};e[t].call(n.exports,n,n.exports,__webpack_require__);n.l=true;return n.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(325)}t(__webpack_require__);return startup()}({87:function(e){e.exports=require("os")},129:function(e){e.exports=require("child_process")},325:function(e,t,r){"use strict";r.r(t);r.d(t,"getNewValue",function(){return s});r.d(t,"run",function(){return a});var n=r(129);var o=r.n(n);var u=r(470);var i=r.n(u);const s=(e,t)=>{if(e.match(/^[a-f0-9]*$/)){return t}const r=/(?<image>.*):(?<tag>[a-f0-9]*)/.exec(e);if(!r){throw new Error(`cannot parse image ${e}`)}return`${r.groups.image}:${t}`};const a=()=>{const e=Object(u.getInput)("tag",{required:true});const t=Object(u.getInput)("target",{required:true});const r=Object(u.getInput)("path",{required:true});const o=Object(n.execSync)(`yq r ${t} ${r}`).toString();const i=s(o,e);Object(u.info)(i);Object(n.execSync)(`yq w -i ${t} ${r} ${i}`)}},431:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(r(87));function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const u="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=u+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${u}${escapeData(this.message)}`;return e}}function escapeData(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return(e||"").replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},470:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r(function(t){t(e)})}return new(r||(r=Promise))(function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const u=r(431);const i=o(r(87));const s=o(r(622));var a;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(a=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;u.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function setSecret(e){u.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){u.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${s.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){u.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=a.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){u.issueCommand("debug",{},e)}t.debug=debug;function error(e){u.issue("error",e)}t.error=error;function warning(e){u.issue("warning",e)}t.warning=warning;function info(e){process.stdout.write(e+i.EOL)}t.info=info;function startGroup(e){u.issue("group",e)}t.startGroup=startGroup;function endGroup(){u.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return n(this,void 0,void 0,function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r})}t.group=group;function saveState(e,t){u.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},622:function(e){e.exports=require("path")}},function(e){"use strict";!function(){e.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}}();!function(){e.n=function(t){var r=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};e.d(r,"a",r);return r}}();!function(){var t=Object.prototype.hasOwnProperty;e.d=function(e,r,n){if(!t.call(e,r)){Object.defineProperty(e,r,{enumerable:true,get:n})}}}()});