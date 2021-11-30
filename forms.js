window.addEventListener( "load", function() {

  // Access the HTML form element
  const form = document.getElementById( "signup" );

  function sendData() {

    const sendRequest = new XMLHttpRequest();

    // Bind FormData object and form element
    const signupInfo = new URLSearchParams( new FormData( form ) );

    // Message for successful data submission
    sendRequest.addEventListener( "load", function( event ) {
      alert( "Submission successful" );
    } );

    // Message for error with data submission
    sendRequest.addEventListener( "error", function( event ) {
      alert( "Submission unsuccessful, please try again" );
    } );

    // Set up request
    sendRequest.open( "POST", "http://localhost:5000/app/new" );

    // Send data
    sendRequest.send( signupInfo );

  }

  // Take over submit event of form element
  form.addEventListener( "submit", function( event ) {
    event.preventDefault();
    sendData();
  } );

} );