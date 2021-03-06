"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var backend_service_1 = require("./services/backend.service");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    //persist should be set to false as otherwise numbers aren't returned during livesync
    persist: false,
    //storageBucket: 'gs://giftler-f48c4.appspot.com',
    storageBucket: 'gs://pedometergroupmapcompetition.appspot.com',
    onAuthStateChanged: function (data) {
        console.log(JSON.stringify(data));
        if (data.loggedIn) {
            backend_service_1.BackendService.token = data.user.uid;
        }
        else {
            backend_service_1.BackendService.token = "";
        }
    }
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLDJDQUF5QztBQUN6Qyw4REFBNEQ7QUFFNUQsdURBQTBEO0FBRTFELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDWixxRkFBcUY7SUFDckYsT0FBTyxFQUFFLEtBQUs7SUFDZCxrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLCtDQUErQztJQUM5RCxrQkFBa0IsRUFBRSxVQUFDLElBQVM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdkMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFVLFFBQVE7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFDRCxVQUFVLEtBQUs7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDQSxDQUFDO0FBRUosc0NBQTJCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XG5cbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5maXJlYmFzZS5pbml0KHtcbiAgLy9wZXJzaXN0IHNob3VsZCBiZSBzZXQgdG8gZmFsc2UgYXMgb3RoZXJ3aXNlIG51bWJlcnMgYXJlbid0IHJldHVybmVkIGR1cmluZyBsaXZlc3luY1xuICBwZXJzaXN0OiBmYWxzZSxcbiAgLy9zdG9yYWdlQnVja2V0OiAnZ3M6Ly9naWZ0bGVyLWY0OGM0LmFwcHNwb3QuY29tJyxcbiAgc3RvcmFnZUJ1Y2tldDogJ2dzOi8vcGVkb21ldGVyZ3JvdXBtYXBjb21wZXRpdGlvbi5hcHBzcG90LmNvbScsXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEudXNlci51aWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICAgIH1cbiAgfVxufSkudGhlbihcbiAgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gIH0sXG4gIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gIH1cbiAgKTtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=