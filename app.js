    const dateToYMD = function (date) {
      var strArray=['Enero'
                   ,'Febrero'
                   ,'Marzo'
                   ,'Abril'
                   ,'Mayo'
                   ,'Junio'
                   ,'Julio'
                   ,'Agosto'
                   ,'Septiembre'
                   ,'Octubre'
                   ,'Noviembre'
                   ,'Diciembre'];
      var d = date.getDate();
      var m = strArray[date.getMonth()];
      var y = date.getFullYear();
      return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
  }
    console.log("Entra*");
    let sysdate = new Date();
    let updateButton = document.getElementById('updateDetails');
    let cancelButton = document.getElementById('cancel');
    let favDialog = document.getElementById('favDialog');
    let divfooter = document.getElementById("divfooter");
    let closeDialogBtn = document.getElementById("closeDialogBtn"); 

    if(!!divfooter){
      divfooter.innerHTML="SOWEBMEX desde 2020 | "+dateToYMD(sysdate);
    }
    console.log(sysdate);
    console.log(updateButton);
    console.log(screen);
    console.log(divfooter);

    if(screen.width<600){
      document.querySelectorAll("h1").forEach(p=>{p.innerHTML="SOWEBMEX";p.style.marginLeft="15px";});
    }else{
      document.querySelectorAll("h1").forEach(p=>p.innerHTML="Soluciones Web Mexicanas");
    }
    
    // Update button opens a modal dialog
    if(null!==updateButton){
      updateButton.addEventListener('click', function() {
        favDialog.showModal();
      });  
    }
    
    // Form cancel button closes the dialog box
    if(null!==cancelButton){
    cancelButton.addEventListener('click', function() {
      favDialog.close();
    });
   }

  console.log("Entra**");

const menuBtn = document.querySelector('.menu-btn');
const dialogOpenClose = function (){
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    favDialog.showModal();
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    favDialog.close();
  }
}; 

let menuOpen = false;
if(null!==menuBtn){
  menuBtn.addEventListener('click', dialogOpenClose);
}

if(!!closeDialogBtn){
  closeDialogBtn.addEventListener('click', dialogOpenClose);
}
