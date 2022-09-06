function doGet(){
  var template = HtmlService.createTemplateFromFile('index');
  var output = template.evaluate();
  return output;
}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}