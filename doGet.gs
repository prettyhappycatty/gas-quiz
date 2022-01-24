const pageTitle = ''//TODO ページタイトルを入力してください
const spreadSheetId = ''//TODO スプレッドシート IDを入力してください

const myData = SpreadsheetApp.openById(spreadSheetId).getSheetByName("quiz").getDataRange().getValues();
const myDataAns = SpreadsheetApp.openById(spreadSheetId).getSheetByName("ans").getDataRange().getValues();

function doGet() {
  const htmloutput =  HtmlService.createTemplateFromFile("index").evaluate(); 
  htmloutput.setTitle(pageTitle)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmloutput
}
