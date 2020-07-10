(function() {
    console.log("Entra");
    let updateButton = document.getElementById('updateDetails');
    let cancelButton = document.getElementById('cancel');
    let favDialog = document.getElementById('favDialog');
    console.log(updateButton);
    
    // Update button opens a modal dialog
    updateButton.addEventListener('click', function() {
      favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function() {
      favDialog.close();
    });

  })();