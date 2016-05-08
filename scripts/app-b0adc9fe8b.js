(function(){angular.module("FanTuan.services",[]),angular.module("FanTuan",["FanTuan.services","flow","ngAnimate","ngTouch","ui.router","ngMaterial"])}).call(this),function(){var e;e=function(){function e(e){var t;t=this,this.user={email:"uuu@hotmail.com",username:"uuudddd",password:""},this.showPassword=!1,this.signup=function(e,t,a){return console.log("signup: "+e(0+t(0+a)))},this.login=function(e,t,a){return console.log("login: "+e(0+t(0+a)))}}return e}(),e.$inject=["$scope"],angular.module("FanTuan").controller("UserController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.thisYear=(new Date).getYear(),this.features=[{image:"",icon:"",title:"",text:""},{image:"https://drive.google.com/thumbnail?id=0B8T5ed7Ljy_gTEdUTzR4b196enM",icon:"",title:"美食周刊",text:"在伦敦,每周推出三个跟美食,艺术,城市和人有关的专题,希望给在这个繁杂城市里面生活的人们带来些许趣味。"},{image:"",icon:"",title:"",text:""},{image:"https://drive.google.com/thumbnail?id=0B8T5ed7Ljy_gTEdUTzR4b196enM",icon:"",title:"寻找餐馆",text:"包含了大部分我们认为值得推荐的伦敦中餐馆,用一种直观简约的方式供你浏览,搜索和收藏。"},{image:"https://drive.google.com/thumbnail?id=0B8T5ed7Ljy_gQmx4Z2wxa3hha00",icon:"",title:"公共饭团",text:"我们希望生活在这座城市 的人们不要只是禁锢在自 己圈子,去看看其他圈 子发生了什么,有什么好 玩的人,好玩的事。让食 物成为打开其他圈子的桥 梁。 浏览其他圈子的人组织的 公共饭团,加入他们,认 识新的人和事。"},{image:"https://drive.google.com/thumbnail?id=0B8T5ed7Ljy_gTEdUTzR4b196enM",icon:"",title:"组织饭团",text:"我们希望用一种最简单的方式来组织日常凌乱的饭局之约。饭局可能是朋友之间的,也可以欢迎陌生朋友的加入。"}]}return e}(),angular.module("FanTuan").controller("HomeController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this}return e}(),angular.module("FanTuan").controller("GroupController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this}return e}(),angular.module("FanTuan").controller("AdminUserController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this}return e}(),angular.module("FanTuan").controller("AdminRestaurantController",e)}.call(this),function(){var e;e=function(){function e(e){var t;t=this,t.magazines=e.magazines}return e}(),angular.module("FanTuan").controller("AdminMagazineController",["Magazines",e])}.call(this),function(){var e;e=function(){function e(){var e;e=this}return e}(),angular.module("FanTuan").controller("AdminGroupController",e)}.call(this),function(){var e;e=function(){function e(e,t){var a;a=this,e.selectedIndex=0,e.$watch("selectedIndex",function(e,a){switch(e){case 0:return t.go("admin.restaurant");case 1:return t.go("admin.user");case 2:return t.go("admin.group");case 3:return t.go("admin.magazine")}})}return e}(),e.$inject=["$scope","$state"],angular.module("FanTuan").controller("AdminController",e)}.call(this),function(){var e;e=function(){function e(e){return{all:magazines}}return e.$inject=["$http"],e}(),angular.module("FanTuan.services").factory("User",["$http",e])}.call(this),function(){var e;e=function(){function e(e){var t;return t=[{vol:3,pages:[{image:"lib/FanTuanDemoResources/resources/poster/homepage_1.jpg",restaurantIDs:["0","1","2"]},{image:"lib/FanTuanDemoResources/resources/poster/homepage_2.jpg",restaurantIDs:["0","1","2"]},{image:"lib/FanTuanDemoResources/resources/poster/homepage_3.jpg",restaurantIDs:["0","1","2"]}]},{vol:2,pages:[{image:"lib/FanTuanDemoResources/resources/poster/homepage_1.jpg",restaurantIDs:["0","1","2"]},{image:"lib/FanTuanDemoResources/resources/poster/homepage_2.jpg",restaurantIDs:["0","1","2"]},{image:"lib/FanTuanDemoResources/resources/poster/homepage_3.jpg",restaurantIDs:["0","1","2"]}]},{vol:1,pages:[{image:"lib/FanTuanDemoResources/resources/poster/homepage_1.jpg",restaurantIDs:["0","1","2"]},{image:"lib/FanTuanDemoResources/resources/poster/homepage_2.jpg",restaurantIDs:["0","1","2"]},{image:"lib/FanTuanDemoResources/resources/poster/homepage_3.jpg",restaurantIDs:["0","1","2"]}]}],{magazines:t}}return e.$inject=["$http"],e}(),angular.module("FanTuan.services").factory("Magazines",["$http",e])}.call(this),function(){angular.module("FanTuan").config(["$stateProvider","$urlRouterProvider",function(e,t){return e.state("home",{url:"/",views:{root:{templateUrl:"app/pages/home/template.html",controller:"HomeController",controllerAs:"vm"}}}).state("user",{url:"/user",views:{root:{templateUrl:"app/pages/user/template.html",controller:"UserController",controllerAs:"vm"}}}).state("admin",{url:"/admin",views:{root:{templateUrl:"app/pages/admin/template.html",controller:"AdminController",controllerAs:"vm"}}}).state("admin.restaurant",{url:"/restaurant",views:{"admin-content":{templateUrl:"app/pages/adminRestaurant/template.html",controller:"AdminRestaurantController",controllerAs:"vm"}}}).state("admin.user",{url:"/user",views:{"admin-content":{templateUrl:"app/pages/adminUser/template.html",controller:"AdminUserController",controllerAs:"vm"}}}).state("admin.group",{views:{"admin-content":{url:"/group",templateUrl:"app/pages/adminGroup/template.html",controller:"AdminGroupController",controllerAs:"vm"}}}).state("admin.magazine",{views:{"admin-content":{url:"/magazine",templateUrl:"app/pages/adminMagazine/template.html",controller:"AdminMagazineController",controllerAs:"vm"}}})}])}.call(this),function(){angular.module("FanTuan").config(["$logProvider","toastr",function(e,t){return e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}])}.call(this),function(){}.call(this),function(){angular.module("FanTuan").run(["$log",function(e){return e.debug("runBlock end")}])}.call(this),function(){angular.module("FanTuan").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}.call(this),angular.module("FanTuan").run(["$templateCache",function(e){e.put("app/pages/adminGroup/template.html","Admin Group"),e.put("app/pages/admin/template.html",'<div ng-cloak=""><md-content><md-tabs md-stretch-tabs="" md-selected="selectedIndex"><md-tab label="餐馆信息管理"></md-tab><md-tab label="用户数据管理"></md-tab><md-tab label="饭团信息管理"></md-tab><md-tab label="周刊信息管理"></md-tab></md-tabs><div id="content" ui-view="admin-content" flex=""></div></md-content></div>'),e.put("app/pages/adminMagazine/template.html",'<div layout="row"><md-list class="magazines-list"><md-list-item><md-button>NEW ISSUE</md-button></md-list-item><md-list-item class="md-3-line" ng-repeat="magazine in vm.magazines"><md-button>Vol. {{magazine.vol}}</md-button></md-list-item></md-list><div flex="" class="magazine-detail"><div layout="“row”"><div flex="1"></div><div flex="1"><md-button>编辑</md-button></div><div flex="1"><md-button>保存</md-button></div></div><div layout="“row”"><div flex="">发行时间：</div><div flex="1">{{magazine.release-data}}</div></div><div layout="“row”"><div flex="">周刊图片：</div><div flex="" ng-repeat="page in [1,2,3]"><div flow-init="{target: \'/upload/magazine-id/rest-image-{{page}}\'}" flow-files-submitted="$flow.upload()" flow-file-success="$file.msg = $message"><div class="alert" flow-drop="" flow-drag-enter="style={border:\'4px solid green\'}" flow-drag-leave="style={}" ng-style="style"><div><p>Drag And Drop your file here</p><p>Only PNG,GIF,JPG files allowed.</p><div class="magazine-image-preview" ng-hide="$flow.files.length"><img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image"></div><div class="magazine-image-preview" ng-show="$flow.files.length"><img flow-img="$flow.files[0]"></div></div></div><div><a class="btn btn-danger" ng-show="$flow.files.length" ng-click="$flow.cancel()">Remove</a></div></div></div></div><div layout="“row”"><div flex="">推荐餐馆：</div><div flex="" ng-repeat="page in [1,2,3]"><div flex="" ng-repeat="rest in [1,2,3,4,5]"><div>川香阁 {{rest}}</div></div></div></div><div class="restaurant-group-stats" layout="row"><div flex="">餐馆组团统计：</div><div flex="">我是漂亮的直线图</div></div></div></div>'),e.put("app/pages/adminRestaurant/template.html","Admin restaurant"),e.put("app/pages/adminUser/template.html","Admin USER"),e.put("app/pages/home/template.html",'<div layout="vertical" layout-fill=""><md-content id="home"><div class="header"><img ng-src="https://doc-14-ac-docs.googleusercontent.com/docs/securesc/p0uqbgvcmtp6bjli0h3jlcukp6km6pq7/d3pfkqv3k778c5ukv1hhivmhv0eoh2nb/1444413600000/12204149142423311068/12204149142423311068/0B8T5ed7Ljy_gc3RqaHNvVWFCWnM"></div><div class="content"><div layout="row" layout-wrap=""><div ng-repeat="feature in vm.features" flex="33" layout="row" layout-align="center"><div class="feature"><img ng-src="{{feature.image}}" style="width: 100%;"> <img ng-src="{{feature.icon}}"><div>{{feature.title}}</div><div class="feature-text">{{feature.text}}</div></div></div></div></div><div class="join"><div>Join Us On</div><div><i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-google-plus"></i></div></div><div class="footer"><div>Copyright © 2015 - {{vm.thisYear+1900}} MY&amp;HEs Limited. All rights reserved.</div></div></md-content></div>'),e.put("app/pages/user/template.html",'<div layout="vertical" layout-fill=""><md-content id="user"><form name="userInfoForm"><md-input-container class="md-block"><label>Email</label> <input required="" type="email" name="email" ng-model="vm.user.email" minlength="10" maxlength="100" ng-pattern="/^.+@.+\\..+$/"><div ng-messages="userInfoForm.email.$error" role="alert"><div ng-message-exp="[\'required\', \'minlength\', \'maxlength\', \'pattern\']">Your email must be between 10 and 100 characters long and look like an e-mail address.</div></div></md-input-container><md-input-container class="md-block"><label>Username</label> <input name="username" ng-model="vm.user.username" required="" minlength="6"><div ng-messages="userInfoForm.username.$error"><div ng-message-exp="[\'required\', \'minlength\']"><div ng-message="required">username is required and it must be at least 6 characters long.</div></div></div></md-input-container><md-input-container class="md-block"><label>Password</label> <input type="{{vm.showPassword ? \'text\' : \'password\'}}" name="password" ng-model="vm.user.password" required="" minlength="6"><div ng-messages="userInfoForm.password.$error" role="alert"><div ng-message-exp="[\'required\', \'minlength\']">password is requried to protect your data and it must be at least 6 characters long.</div></div></md-input-container><md-input-container class="md-block"><md-checkbox class="md-primary" ng-model="vm.showPassword" aria-label="show password">show password</md-checkbox></md-input-container><md-input-container class="md-block"><md-button ng-disabled="!userInfoForm.$valid" class="md-raised md-primary">sign up</md-button><md-button ng-disabled="!userInfoForm.$valid" class="md-raised md-primary">log in</md-button></md-input-container></form><div class="footer"><div>Copyright © 2015-{{thisYear}} MY&amp;HEs Limited. All rights reserved.</div></div></md-content></div>')}]);