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
    // here things were working
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
          navigator.contacts.pickContact(function(contact){
                doThing(contact);
                alert(JSON.stringify(contact));

                // console.log('The following contact has been selected:' + JSON.stringify(contact));
            },function(err){
                alert('Something went awry or amiss or askew or afoul: ' + err);
            });

            function doThing(contact){
              $.ajax({
                type: 'POST',
                // async: false,
                url: 'https://rocky-peak-36243.herokuapp.com/api/v1/locations/',
                data: JSON.stringify({"long": contact}), // or JSON.stringify ({name: 'jonas'}),
                success: function(data) { alert('data: ' + JSON.stringify(contact) ); },
                contentType: "application/json",
                dataType: 'json'
              });
            }
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

// var onSuccess = function(position) {
//     alert('Latitude: '          + position.coords.latitude          + '\n' +
//           'Longitude: '         + position.coords.longitude         + '\n');
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

// var contact = "bullshit";
//  var dansShit = function(callback) {
//    contact = navigator.contacts.pickContact();
//    alert(contact);
//
//    if (typeof callback === 'function') {
//      callback()
//    }
//  }
// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);  // 'deviceready' is an id tag in index.html
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//         $("#select-contact").on('click', function(){
          // dansShit(function() {
          //   $.ajax({
          //     // async: false,
          //     type: 'POST',
          //     url: 'https://rocky-peak-36243.herokuapp.com/api/v1/locations/',
          //     data: contact, // or JSON.stringify ({name: 'jonas'}),
          //     success: function(data) { alert('data: ' + contact ); },
          //     contentType: "application/json",
          //     dataType: 'json'
          //   });
          //   alert("Hooray!")
          // })
          // var lennysPromise = new Promise(function(resolve, reject) {
          //   var contact = navigator.contacts.pickContact();
          //   resolve(contact)
          // })


          // var contact = "IT DIDN'T GET IT"

        //

//         navigator.contacts.pickContact(function(chosenContact){
//                 // alert(JSON.stringify(contact));
//                 contact = chosenContact
//                 // console.log('The following contact has been selected:' + JSON.stringify(contact));
//             },function(err){
//                 console.log('Error: ' + err);
//             });
//             while(contact === "bullshit") {
//
//             };
//             $.ajax({
//               // async: false,
//               type: 'POST',
//               url: 'https://rocky-peak-36243.herokuapp.com/api/v1/locations/',
//               data: contact, // or JSON.stringify ({name: 'jonas'}),
//               success: function(data) { alert('data: ' + contact ); },
//               contentType: "application/json",
//               dataType: 'json'
//             });
//             // var myLocation = navigator.geolocation.getCurrentPosition(onSuccess);
//
//           });
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');
//
//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');
//
//         console.log('Received Event: ' + id);
//     }
// };
