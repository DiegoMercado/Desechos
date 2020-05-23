function registrar() {
  var emailRe = document.getElementById('emailRe').value;
  var passwordRe = document.getElementById('passwordRe').value;
  
  firebase.auth().createUserWithEmailAndPassword(emailRe, passwordRe).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
  });
}

function ingreso() {
  var emailIn = document.getElementById('emailIn').value;
  var passwordIn = document.getElementById('passwordIn').value;

  firebase.auth().signInWithEmailAndPassword(emailIn, passwordIn).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Existe Usuario');
        aparece();
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      } else {
        console.log('No existe el Usuario');
      }
    });
}
observador();

function aparece() {
  var contenido=document.getElementById('contenido');
  contenido.innerHTML="solo lo ve el usuario activo";
}