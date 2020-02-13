// ==UserScript==
// @name         Add ASC links to Rave
// @namespace    http://rave.office.net/*
// @version      0.1
// @description  try to take over the world!
// @author       Ricardo Havranek Garcia
// @match        https://rave.office.net/*
// @grant        none
// @run-at       document_end
// ==/UserScript==

(function() {
    'use strict';
    console.log("Running Script...");

    var checkExist = setInterval(function() {
        if ($('rct-case-summary').length) {
           console.log("Case Summary Loaded...");
           actionFunction();
           clearInterval(checkExist);
        }
        else
        {
           console.log("Waiting for case summary...");
        }
     }, 3000);

     function actionFunction(){
        console.log("Looking for Secondary case...");
        var secondary = $( "label:contains('Secondary ticket')" );
        console.log(secondary[0].parentElement.innerText);
        var caseHtml = secondary[0].parentElement;
        var caseNumber = secondary[0].parentElement.innerText.substring(18);
        var url = 'https://azuresupportcenter.msftcloudes.com/tenantexplorer?srId=' + caseNumber;
        console.log("URL: " + url);
        console.log("caseHtml: " + caseHtml);
        var lineBreak = document.createElement("br");
        var ascLink = document.createElement("a");
        ascLink.setAttribute('href', url);
        ascLink.innerText = "Open in ASC";
        caseHtml.appendChild(lineBreak);
        caseHtml.appendChild(ascLink);

        console.log("Finishing Script...");
      }
    }

)();
