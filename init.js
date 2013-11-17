var Future = Npm.require('fibers/future');


// OXR Class
var _OXR = function(app_id) {
    return this.init()
};

// Constructor
_OXR.prototype.init = function() {
    this.oxr = Npm.require('open-exchange-rates');
    this.fx = Npm.require('money');
    return this;
};

_OXR.prototype.setAppId = function(app_id) {
    var self = this;
    self.oxr.set({app_id: app_id}).latest(function() {
        self.fx.rates = self.oxr.rates;
        self.fx.base = self.oxr.base;
    })
}

_OXR.prototype.convert = function(amount, from, to) {
    return this.fx(amount).from(from).to(to);
};


// export Meteor style
Oxr = new _OXR();

