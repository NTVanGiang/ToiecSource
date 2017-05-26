function getPart(partNumber) {
    //display: none all parts
    for (i = 1; i <= 7; i++) {
        var id = 'part' + i;
        document.getElementById(id).style.display = "none";
    }
    //display select part
    var _id = 'part' + partNumber;
    document.getElementById(_id).style.display = "block";
}
