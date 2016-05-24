(function(){angular.module("ElstonSite.services",[]),angular.module("ElstonSite",["ElstonSite.services","flow","ngAnimate","ngTouch","ui.grid","ui.router"])}).call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Term"}return e}(),angular.module("ElstonSite").controller("TermsController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Team"}return e}(),angular.module("ElstonSite").controller("TeamController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Strategy"}return e}(),angular.module("ElstonSite").controller("StrategyController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Solutions"}return e}(),angular.module("ElstonSite").controller("SolutionsController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Research"}return e}(),angular.module("ElstonSite").controller("ResearchController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this}return e}(),angular.module("ElstonSite").controller("OverviewController",e)}.call(this),function(){var e;e=function(){function e(){}return e.prototype.restrict="E",e.prototype.replace=!0,e.prototype.templateUrl="app/pages/navigator/template.html",e.prototype.link=function(e,t,n){var o,i;return i=["Overview","Consulting","ETF","Solutions","Strategy","Research","Team","Media","Terms","Contact"],e.pages=function(){var e,t,n;for(n=[],e=0,t=i.length;t>e;e++)o=i[e],n.push({state:o.toLowerCase(),name:o});return n}()},e}(),angular.module("ElstonSite").directive("navbar",function(){return new e})}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Media"}return e}(),angular.module("ElstonSite").controller("MediaController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this}return e}(),angular.module("ElstonSite").controller("HomeController",e)}.call(this),function(){var e;e=function(){function e(){}return e.prototype.restrict="E",e.prototype.templateUrl="app/pages/footer/template.html",e.prototype.link=function(e,t,n){return e.year=(new Date).getFullYear()},e}(),angular.module("ElstonSite").directive("footer",function(){return new e})}.call(this),function(){var e;e=function(){function e(e,t){var n,o,i;i=this,this.gridOptions={enableColumnMenus:!1,enableColumnResizing:!0,columnDefs:[{field:"mnemonic",displayName:"Mnemonic",width:100},{field:"long-name",displayName:"Long Name",width:130,cellTooltip:!0},{field:"currency",displayName:"Currency"},{field:"issuer-name",displayName:"Issuer Name",width:110,cellTooltip:!0},{field:"isin",displayName:"ISIN",width:130},{field:"sedol",displayName:"SEDOL"},{field:"first-trading-day",displayName:"First Trading Day",width:150,cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity[col.field] | date:"yyyy-MM-dd" }}</div>'},{field:"asset-class",displayName:"Asset Class",width:120},{field:"geography",displayName:"Geography",width:100,cellTooltip:!0},{field:"type",displayName:"Type"},{field:"ter",displayName:"TER"}]},n=[],o=t.get("/resources/lse-eft-securities.json"),o.then(function(e){var t;return Array.prototype.push.apply(n,function(){var n,o,i,a;for(i=e.data,a=[],n=0,o=i.length;o>n;n++)t=i[n],a.push({mnemonic:t.mnemonic,"long-name":t["long-name"],currency:t.currency,"issuer-name":t["issuer-name"],isin:t.isin,sedol:t.sedol,"first-trading-day":t["first-trading-day"],"asset-class":"ASSET CLASS",geography:"GEO",type:"TYPE",ter:"TER"});return a}())}),this.gridOptions.data=n}return e}(),e.$inject=["$scope","$http"],angular.module("ElstonSite").controller("ETFController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Contact"}return e}(),angular.module("ElstonSite").controller("ContactController",e)}.call(this),function(){var e;e=function(){function e(){var e;e=this,this.name="Consulting"}return e}(),angular.module("ElstonSite").controller("ConsultingController",e)}.call(this),function(){}.call(this),function(){angular.module("ElstonSite").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,n){var o,i,a,s,r;for(s=["Overview","Consulting","ETF","Strategy","Solutions","Research","Team","Media","Terms","Contact"],e.state("home",{url:"/",views:{root:{templateUrl:"app/pages/home/template.html",controller:"HomeController",controllerAs:"vm"}},onEnter:["$rootScope",function(e){return e.hideNav=!0}],onExit:["$rootScope",function(e){return delete e.hideNav}]}),o=0,i=s.length;i>o;o++)r=s[o],a=r.toLowerCase(),e.state(a,{url:"/"+a,views:{root:{templateUrl:"app/pages/"+a+"/template.html",controller:r+"Controller",controllerAs:"vm"}}});return n.html5Mode({enabled:!0,requireBase:!1})}])}.call(this),function(){angular.module("ElstonSite").config(["$logProvider","toastr",function(e,t){return e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}])}.call(this),function(){angular.module("ElstonSite").run(["$log",function(e){return e.debug("runBlock end")}])}.call(this),function(){angular.module("ElstonSite").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}.call(this),angular.module("ElstonSite").run(["$templateCache",function(e){e.put("app/pages/consulting/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><h2><strong>Page {{vm.name}} is under construction</strong></h2></div></md-content></div>'),e.put("app/pages/contact/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><h2><strong>Page {{vm.name}} is under construction</strong></h2></div></md-content></div>'),e.put("app/pages/etf/template.html",'<div layout="vertical" layout-fill=""><md-content id="etf"><div class="container"><div ui-grid="vm.gridOptions" class="ETF-Grid"></div></div></md-content></div>'),e.put("app/pages/footer/template.html",'<div class="footer container"><div>Copyright © 2012-{{ year }} Elston Consulting Limited</div><div>All rights reserved.</div></div>'),e.put("app/pages/home/template.html",'<div layout="vertical" layout-fill=""><md-content id="home"><div class=""><div class="row header"><img class="col-xs-3" src="http://elstonconsulting-co-uk.mysmarterwebsite.co.uk/elstonconsulting-co-uk/_img/Elston-Strategy_beta-social-flat.png" style="100%"> <span class="col-xs-9 visible-xs-inline title-phone">Welcome to Elston Consulting</span></div><div class="row col-sm-offset-3 col-sm-9"><h1 class="hidden-xs title-non-phone">Welcome to Elston Consulting</h1><br><p class="content">By pressing ENTER you confirm that you are a professional investor or an FCA authorised individual or entity and agree with our Terms as set out below:</p><div class="termsBox">Please read this important information before proceeding further. It contains legal notices relevant to the information contained on this website.<br><br>This site is designed for professional investors, independent financial advisers and other intermediaries authorised in the UK by the Financial Conduct Authority. If you are not a financial adviser or authorised intermediary you should not proceed. By proceeding please note that we will be treating you as a professional adviser for regulatory purposes and you agree to be bound by our terms and conditions.<br><br>If you do not accept these terms and conditions, please do not continue to use or access any pages of this website.<br><br>The information within this site is issued by Elston Consulting Limited for information only. It does not constitute an offer by Elston Consulting to enter into any contract/agreement nor is it a solicitation to buy or sell any investment.<br><br>Elston Consulting Limited is a private limited company registered in England &amp; Wales (company number 07125478) registered office 20-22 Bedford Row, London WC1R 4JS.<br><br><strong>Content of Web Site</strong><br><br>By proceeding you agree, so far as this is permitted under the provisions of the UK regulatory system, to the exclusion by us of any liability, including without limitation that arising from any loss of profit or any other damage direct or consequential, in respect of any errors and/or omissions by us and/or any relevant third parties in respect of the content. The contents of this website are based upon sources of information believed to be reliable, however, save to the extent required by applicable law or regulations, no guarantee, warranty or representation (express or implied) is given as to its accuracy or completeness and, Elston Consulting, members, officers and employees of the managing member do not accept any liability or responsibility in respect of the information or any views expressed herein. This website may include forward-looking statements that are based upon our current opinions, expectations and projections. We undertake no obligation to update or revise any forward-looking statements. Actual results could differ materially from those anticipated in the forward-looking statements. If you have accessed this site using a link from another site, Elston Consulting does not accept any liability or responsibility for the accuracy of information contained within the sites of other providers who have links to any pages of this site or to whom this site is linked.<br><br><strong>Solicitation</strong><br><br>The site does not constitute an offer by Elston Consulting to enter into any contract/ agreement nor is it a solicitation to buy or sell any investment. It should not be used for the purpose of an offer or solicitation in any jurisdiction or in any circumstances in which such offer or solicitation is unlawful or not authorised.<br><br><strong>United States of America</strong><br><br>The provision of the information in this web site does not constitute an offer of securities to any person in the United States or to any U.S. Person as such term is defined under the Securities Act of 1933, as amended. The information contained in this site about Elston Consulting and/or any of its affiliates is not directed to any person in the United States.<br><br><strong>Advice</strong><br><br>No information contained in this website should be deemed to constitute the provision of financial, investment or other professional advice in any way.<br><br><strong>Taxation</strong><br><br>Taxation will depend on individual financial circumstances and the country of residence. No information contained in this website should be deemed to constitute the provision of tax advice in any way.<br><br><strong>Ownership and Copyright</strong><br><br>The copyright in the website and (unless otherwise indicated) its contents including all information, graphics, code, text and design are owned by Elston Consulting Limited and should not be reproduced or distributed without permission.<br><br>This website is for the user\'s own personal use. The user may not sell, copy, publish, distribute, transfer, modify, display, reproduce and/or create any derivative works from the information or software on this site. The user also may not redeliver any of the pages, text, images, or content of this site using "framing" or similar technology.<br><br>The contents at this site, including text, graphics, links and/or other items, have been prepared based upon sources, materials and systems believed to be reliable and accurate, and are provided to you on an "as is" and "as available" basis. Elston Consulting Limited makes no representations, and disclaims all, express, implied and statutory warranties of any kind to you or any third party, including, but not limited to, representations, and warranties regarding accuracy, timeliness, completeness, merchantability, fitness for any particular purpose, non-infringement of third party rights and/or freedom from computer virus. Elston Consulting Limited assumes no responsibility for the consequences of any errors or omissions. We may change the content at any time without notice and will not be liable for errors or omissions in the content. Certain links in this Site connect to Web sites maintained by third parties. We make no representations or warranties as to any content contained in these third party sites and take no responsibility for such sites. Our link to another site is not an endorsement of that site.<br><br><strong>Damages</strong><br><br>In no event shall Elston Consulting Limited be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with this site or the use thereof or inability to use by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus or line or system failure, even if Elston Consulting Limited or representatives thereof, are advised of the possibility of such damages, losses or expenses. Use of hyperlinks to other internet resources is at your own risk.</div><p class="content">If you are unable to agree to the terms outlined above or you are resident in a jurisdiction where access to the site and information contained therein is not permissable then please click on EXIT below.</p><div class="confirm-button-section"><button type="button" class="btn btn-success" ui-sref="overview">Enter</button> <button type="button" class="btn btn-danger" onclick="document.location.href=\'http://www.google.com/\';">Exit</button></div></div></div></md-content></div>'),e.put("app/pages/media/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><h2><strong>Page {{vm.name}} is under construction</strong></h2></div></md-content></div>'),e.put("app/pages/navigator/template.html",'<nav class="navbar navbar-default navbar-static-top" ng-hide="hideNav"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <img alt="Brand" class="navbar-brand" src="http://elstonconsulting-co-uk.mysmarterwebsite.co.uk/elstonconsulting-co-uk/_img/Elston-Strategy_beta-social-flat.png"></div><div class="collapse navbar-collapse" id="navbar-collapse"><ul class="nav navbar-nav"><li ng-repeat="page in pages"><a ui-sref="{{page.state}}" data-toggle="collapse" data-target="#navbar-collapse">{{page.name}}</a></li></ul></div></div></nav>'),e.put("app/pages/overview/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><div class="page-title">Overview</div><div class="section-title">INVESTMENT STRATEGIES</div><p>We research, develop and stress-test investment strategies for index providers, asset managers and intermediaries.</p><div class="strategies"><a href="/consulting/">ETF Model Portfolios (EMPs)</a> <a href="/algotrading/"><span>Algorithmic Trading Strategies (ATS)</span></a> <a href="/solutions/"><span>Index Design and Development</span></a></div><p><span>We do not offer or advise on investments.</span></p><div class="section-title">PROPOSITION DEVELOPMENT</div><p>We work with providers, asset managers, and intermediaries to help research and develop innovative solutions for the UK investment market.</p><p><span>We can provide strategic consultancy services on proposition development and market trends</span></p><p>We can assist with the research, design and launch of financial products to intermediaries.</p><p>We can prepare bespoke accredited <a href="/cpd/">CPD materials</a>for asset managers to provide to intermediaries</p><p><a href="/Chinese-Clients/">我们为中国企业提供咨询服务。</a></p><br><p>To find out more about how we can help, please <a ui-sref="contact">Contact Us</a></p></div></md-content></div>'),e.put("app/pages/research/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><h2><strong>Page {{vm.name}} is under construction</strong></h2></div></md-content></div>'),e.put("app/pages/solutions/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><h2><strong>Page {{vm.name}} is under construction</strong></h2></div></md-content></div>'),e.put("app/pages/strategy/template.html",'<div layout="vertical" layout-fill=""><md-content id="strategy"><div class="container"><div class="col-xs-12"><h2>Investment strategies</h2><p><span>Elston Consulting is a research boutique with specialist expertise in Exchange Traded Funds.</span></p><p><span>We research and develops innovative asset allocation strategies using proprietary systematic models underpinned by academic research.</span></p><p><span>We offer the following global multi-asset diversified growth&nbsp;strategies in GBP or your specified base currency:</span></p><p><span>Elston Strategic Beta™ Global Max Sharpe</span></p><p><span>Elston Strategic Beta™ Global Min Volatility</span></p><p><span>Elston Strategic Beta™ Global&nbsp;Equal Risk Contribution</span></p><p><span>Elston Strategic Beta™ Global Max&nbsp;Decorrelation</span></p><p><span>Elston Strategic Beta™ Global Max&nbsp;Deconcentration</span></p><p>&nbsp;</p><h3>Delivery</h3><p><span>Our investment strategies are available as indices for institutional clients, or as model portfolios for intermediaries.<br></span></p><p><span>The strategies can be made available from investment banks via a listed product (Exchange Traded Product or ETP) if required.</span>&nbsp;</p><h3><strong>Elston Strategic Beta™ Indices</strong></h3><p><span>To find out more about how we can help, please&nbsp;</span><a href="http://www.elstonconsulting.co.uk/contact-us/">Contact Us</a></p></div></div></md-content></div>'),e.put("app/pages/team/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><h2><strong>Page {{vm.name}} is under construction</strong></h2></div></md-content></div>'),e.put("app/pages/terms/template.html",'<div layout="vertical" layout-fill=""><md-content id="overview"><div class="container"><h2><strong>Page {{vm.name}} is under construction</strong></h2></div></md-content></div>')}]);