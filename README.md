# My First PhoneGap Effort

A first encounter with PhoneGap.
This constitutes my first effort with Cordova/PhoneGap.

## Usage

#### PhoneGap CLI

Starting from PhoneGap's hello-world template[http://github.com/phonegap/phonegap-cli] (substantially trimmed and added to)
    This very simple app is designed to interface with a small rails api
    https://rocky-peak-36243.herokuapp.com/api/v1/locations
    https://github.com/TheObtuseAutodidact/the_hotness

    Running android's phonegap developer app,
    https://play.google.com/store/apps/details?id=com.adobe.phonegap.app&hl=en
    a user can:
    open app
    and select contact from device contact directory
    the app with then gather the contact's email(perhaps phone# in the future)
    as well as the longitude and latitude from the device's geolocation system
    and send that to the rails api.
    the contact in question will then receive a link to a google map
    of the sender's location allowing for an easy map from contact to sender exchange

    https://build.phonegap.com/ theoretically offers a way to install a development version of the app for another form of local testing but this approach has not been tried at the time of writing the README.
