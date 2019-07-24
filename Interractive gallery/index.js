function onClick(element) {
    var inputelement = document.getElementById("img01");
    var alttext = element.getAttribute("alt");
    var textbox = document.getElementById('alttext');
    inputelement.src = element.src;
    textbox.innerHTML = alttext;
    document.getElementById("modal01").style.display = "block";
  }