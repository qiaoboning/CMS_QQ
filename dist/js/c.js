function setCookie(e,o,t,n){t=t||0,n=n||"/";var i=new Date;i.setDate(i.getDate()+t),document.cookie=e+"="+encodeURIComponent(o)+";expires="+i+";path="+n}function getCookie(e){for(var o=document.cookie.split("; "),t=0;t<o.length;t++){var n=o[t].split("=");if(n[0]===e)return decodeURIComponent(n[1])}}function removeCookie(e,o){o=o||"/",document.cookie=e+"=;expires=-1;path="+o}