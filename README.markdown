A wrapper for the excellent open-exchange-rates and money.js npm librarys (https://github.com/josscrowcroft/npm-exchange-rates)

Init open-exchange-rates api with your api_key (registration required at their site)

```js
// init open-exchange-rates api with api_key
		if (Meteor.isServer) {
        	Oxr.setAppId("3164dc5a975441e18a6f64d4f7e4131d");
		}
```

then you can call on the client:
```js
// init open-exchange-rates api with api_key
        Meteor.call('currency_convert', val, 'EUR', 'USD', function(err, result) {
            Session.set('usd', result.toFixed(2))
        });
```
