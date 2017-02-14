 var getOGG = function(node, addSpaces) {
   var Result;

        this.getTextFromNode = function(node, addSpaces) {
            var i, result, text, child;
            result = '';
            for (i = 0; i < node.childNodes.length; i++) {
                child = node.childNodes[i];
                text = null;
                if (child.nodeType === 1) {
                    text = getTextFromNode(child, addSpaces);
                } else if (child.nodeType === 3) {
                    text = child.nodeValue;
                }
                if (text) {
                    if (addSpaces && /\S$/.test(result) && /^\S/.test(text)) text = ' ' + text;
                    result += text;
                }
            }
            return result;
        }



        this.callWatson = function() {



          var data = this.getTextFromNode(node, addSpaces);
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=36a74140-1f05-44cd-89c8-c12ab76871c4&password=nmkclW4ZtBVJ&text='+ data)
          xhr.send(null);


          xhr.onreadystatechange = function () {

            var DONE = 4;
            var OK = 200 || 304;
            if (xhr.readyState === DONE) {
              if (xhr.status === OK) {
                console.log(xhr.response);
                Result = xhr.response;
              }
            } else {
              console.log('Error:' + xhr.status);
            }
          }
            return;
        }
      this.callWatson();
      return Result;
} //text to speech
