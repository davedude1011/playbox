import{d as f}from"./Firebase-DYOYMPzY.js";function c(e,l,d){const r=localStorage.getItem("username");console.log(l),r&&f.ref("Leaderboard").once("value",n=>{const o=n.val();(o[e]==null||o[e]==null)&&(o[e]={}),(o[e][r]==null||o[e][r]==null)&&(o[e][r]=l),o[e][r][d]<=l[d]&&(o[e][r]=l,f.ref("Leaderboard").set(o))})}export{c as S};