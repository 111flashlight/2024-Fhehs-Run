function doGet(e) {
    var params = e.parameter;                           // 讀取網址參數
    var name = params.name;                             // 如果有 name 就使用，否則 name 等於「工作表1」

    var SpreadSheet = SpreadsheetApp.getActive();       // 讀取目前的試算表
    var SheetName = SpreadSheet.getSheetByName(name);   // 開啟工作表1
    var data = SheetName.getSheetValues(2,1,SheetName.getLastRow(),SheetName.getLastColumn());
    
    Logger.log(data)                                    // 印出資料 ( 第一次執行時必須有這一行 )

    return ContentService.createTextOutput(

        JSON.stringify(data)

    ).setMimeType(ContentService.MimeType.JSON);
}