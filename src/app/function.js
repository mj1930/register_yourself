function submitForm() {
    var count = document.getElementsByClassName('formControl').length;
    var inputArray = [];
    for(i = 0; i< count; i++) {
        let tagName = document.getElementById(i).textContent;
        let tagValue = document.getElementById(i).value;
        inputArray.push({
            tagName,
            tagValue
        });
    }
    
    console.log("this", inputArray)
}