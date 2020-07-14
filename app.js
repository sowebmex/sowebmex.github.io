    console.log("Entra*");
    let updateButton = document.getElementById('updateDetails');
    let cancelButton = document.getElementById('cancel');
    let favDialog = document.getElementById('favDialog');
    console.log(updateButton);
    console.log(screen);
    alert(screen.width);
    if(screen.width<600){
      document.querySelectorAll("h1").forEach(p=>p.innerHTML="SOWEBMEX");
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
let menuOpen = false;
if(null!==menuBtn){
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      favDialog.showModal();
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      favDialog.close();
    }
  });
}
