// ==UserScript==
// @name         Add Rave links to Viewpoint
// @namespace    http://support.office.net/123*
// @version      0.2
// @description  Add Rave links to Viewpoint pages
// @author       Ricardo Havranek Garcia
// @match        https://support.office.net/*
// ==/UserScript==

(function() {
    'use strict';
    console.log("Running Script...");

    var checkExist = setInterval(function() {
        if ($('.caseHistoryAccordionHeaderColumn4').length) {
           console.log("Class with support cases is rendered...");
           actionFunction();
           clearInterval(checkExist);
        }
           console.log("Waiting for support cases...");
     }, 3000);

     function actionFunction(){
        console.log("Entering actionFunction...");
        var allCases = document.getElementsByClassName("caseHistoryAccordionHeaderColumn4");
        for(let i=0; i < allCases.length; i++) {
            var caseCell = allCases[i];
            var caseNumber = caseCell.innerText;
            var url = '"https://rave.office.net/search?query=' + caseNumber + '"';
            caseCell.innerHTML = "<em><a href=" + url + " class='standardLink'>" + caseNumber + "</a></em>";
        }
        console.log("Finishing Script...");
    }

})();