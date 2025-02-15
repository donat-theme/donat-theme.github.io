gebi=function(id) { return document.getElementById(id);};
log=console.log.bind(window.console);

ref={
  setls:function(nama,arr) {return window.localStorage.setItem(nama, JSON.stringify(arr));},
  getls:function(nama) {return window.localStorage.getItem(nama);},
  remls:function(nama) {return window.localStorage.removeItem(nama);},
  getURL:function(arr){var url=new URL(window.location.href); return url.searchParams.get(arr);},
  setURL:function(arr){ window.open('?m='+arr,'_self');},

  setAfi:function() { afi={};
  afi.kode= ref.getURL('ref');
  if(afi.kode){
  ref.setls('ref',afi);
  }
  },

getAfi:function() { res=ref.getls('ref');
if(res){ afi=JSON.parse(res); res=`https://afiliasi.piawai.id/web/?ref=${afi.kode}`;}
else { res=`anda belum punya kode Afiliasi`;}
log(res)
},




}
