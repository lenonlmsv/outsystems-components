/* Change stylesheet according to parameters */
var linkTags = document.querySelector('head').querySelectorAll('link');
var linkIndex;

for (i = 0; i < linkTags.length; i++) {
    var linkString = linkTags[i].href;
    if (linkString.includes('DCSS_')) {
        var linkIndex = i;
    }
}

var linkTrim = linkTags[linkIndex].href;
var currStyle = linkTrim.match('DCSS_(.*).css?')[1];

var newCSS = linkTags[linkIndex].href.replace('DCSS_' + currStyle, $parameters.NewStyleSheet);

linkTags[linkIndex].href = newCSS; /* Set the new stylesheet passed as parameter */