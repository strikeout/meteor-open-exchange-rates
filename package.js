Package.describe({
    summary: "open-exchange-rates smart package for Meteor"
});

Npm.depends({
    "open-exchange-rates": "0.2.0",
    "money": "0.1.3",
})

Package.on_use(function(api, where) {
    var both = ['client', 'server'];

    api.use('livedata', both);
    api.use('underscore', both);

    api.add_files('init.js', "server");
    api.export('Oxr', "server");
});
