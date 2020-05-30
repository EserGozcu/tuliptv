//# sourceURL=application.js

/*
 application.js
 Color TV
 
 Copyright (c) 2017 Eser GOZCU. All rights reserved.
*/

/*
 * This file provides an example skeletal stub for the server-side implementation 
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is 
 * configured in the AppDelegate of the TVML application. Note that  the various 
 * javascript functions here are referenced by name in the AppDelegate. This skeletal 
 * implementation shows the basic entry points that you will want to handle 
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript 
 * has been parsed into a JavaScript context. The handler is passed an object 
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the 
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents 
 * the URL that was used to retrieve the application JavaScript.
 */
var resourceLoader;

App.onLaunch = function(options) {
    // 2
    var javascriptFiles = [
                           `${options.BASEURL}js/ResourceLoader.js`,
                           `${options.BASEURL}js/Presenter.js`
                           ];
    
    evaluateScripts(javascriptFiles, function(success) {
                    if(success) {
                    // 3
                    resourceLoader = new ResourceLoader(options.BASEURL);
                    resourceLoader.loadResource(`${options.BASEURL}templates/Template.xml.js`, function(resource) {
                                                var doc = Presenter.makeDocument(resource);
                                                doc.addEventListener("select", Presenter.load.bind(Presenter)); 
                                                Presenter.pushDocument(doc);
                                                });
                    } else {
                    var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
                    navigationDocument.presentModal(errorDoc);
                    }
                    });
}



/**
 * This convenience funnction returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <alertTemplate>
            <title>${title}</title>
            <description>${description}</description>
          </alertTemplate>
        </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc
}
