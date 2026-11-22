class Report{
    generate(data){
        console.log("Raw Data:" + data);
        
    }
}
class HTMLReports extends Report{
    generate(data){
        console.log("<html><body" + data + "<body></html>");
        
    }
}

class JSONReport extends Report{
    generate(data){
        console.log("{report:" + data + "}");
    }
}
class TextReport extends Report{
    generate(data){
        console.log("===Report===\n" + data + "\n====");
    }
}

let repots =[ new HTMLReports(), new JSONReport(), new TextReport()]

for (let i=0 ; i<repots.length; i++){
    repots[i].generate("5 test Passed, 1 test failed")
}