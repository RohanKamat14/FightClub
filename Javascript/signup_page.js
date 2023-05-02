function myFunction() {
    var x = document.getElementById("name").value;
    var text = "";
    var i;
    console.log(x)
    // document.getElementById("demo").innerHTML = text;
    var textFile = null,
    makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    console.log(textFile)
    return textFile;
    
  };
}