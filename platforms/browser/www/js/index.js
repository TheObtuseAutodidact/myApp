/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    // here things
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);  // 'deviceready' is an id tag in index.html
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        $("#select-contact").on('click', function(){
          // var thing = navigator.geolocation.getCurrentPosition(onSuccess,
	        //    function(error){
          //      alert(error.message);
          //    }, {
          //      enableHighAccuracy: true
          //     ,timeout : 5000
          //       });


          navigator.contacts.pickContact(function(contact){
                alert(JSON.stringify(contact));
                navigator.geolocation.getCurrentPosition(function(position){
                    doThing(contact, position);
                },
      	           function(error){
                     alert(error.message);
                   }, {
                     enableHighAccuracy: true
                    ,timeout : 5000
                  })



                // alert(JSON.stringify(myLoc));
                // doOtherThing(postion);
                // console.log('The following contact has been selected:' + JSON.stringify(contact));
            },function(err){
                alert('Something went awry or amiss or askew or afoul: ' + err);
            });

            function doThing(contact, position){
              alert(JSON.stringify(position));
              $.ajax({
                type: 'POST',
                // async: false,
                url: 'http://0d0b2c5a.ngrok.io/api/v1/locations',  //'https://rocky-peak-36243.herokuapp.com/api/v1/locations/',
                data: JSON.stringify({ location: {lat: position.coords.latitude, long: position.coords.longitude}, contact_info: contact }), // or JSON.stringify ({name: 'jonas'}), var contact availible here
                success: function(data) { alert('data: ' + JSON.stringify(data) ); },
                error: function(xhr) {
                  alert('Something went wrong! ' + xhr.responseText)
                },
                contentType: "application/json",
                dataType: 'json'
              }).done(function(resp) {
                alert(JSON.stringify(resp))
              });
            }

            // function doOtherThing(position){
            //   navigator.geolocation.getCurrentPosition(onSuccess);
            // }
            // var myLocation = navigator.geolocation.getCurrentPosition(onSuccess);

          });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// function onSuccess(position) {
//     alert('Latitude: '          + position.coords.latitude          + '\n' +
//           'Longitude: '         + position.coords.longitude         + '\n');
//           // 'stringify: ' + JSON.stringify(position));
//         };

// var contact = navigator.contacts.pickContact(function(contact){
//         console.log('The following contact has been selected:' + JSON.stringify(contact));
//     },function(err){
//         console.log('Error: ' + err);
//     });

// function onResume(resumeEvent) {
//     if(resumeEvent.pendingResult) {
//         if(resumeEvent.pendingResult.pluginStatus === "OK") {
//             var contact = navigator.contacts.create(resumeEvent.pendingResult.result);
//             successCallback(contact);
//         } else {
//             failCallback(resumeEvent.pendingResult.result);
//         }
//     }
// }

// function onResume(resumeEvent) {
//     if(resumeEvent.pendingResult) {
//         if(resumeEvent.pendingResult.pluginStatus === "OK") {
//             var navigator.contacts.pickContact(function(contact){
//                     console.log('The following contact has been selected:' + JSON.stringify(contact));
//                 },function(err){
//                     console.log('Error: ' + err);
//                 });
//         } else {
//             failCallback(resumeEvent.pendingResult.result);
//         }
//     }
// }
