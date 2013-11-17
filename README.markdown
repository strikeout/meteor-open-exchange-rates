A wrapper for the excellent open-exchange-rates and money.js npm libraries 
----
This package lets you convert any currency into any other currency with the most recent exchange rates fetched from https://openexchangerates.org

(https://github.com/josscrowcroft/npm-exchange-rates)
(https://github.com/josscrowcroft/money.js)




Setup and usage
----

Init open-exchange-rates api with your api_key (registration required at their site https://openexchangerates.org)

```js
// init open-exchange-rates api with api_key
	if (Meteor.isServer) {
            Oxr.setAppId("123456789abcdefghijklmnopqrstuvwxyz"); // insert your app_id!
	}
```

then you can call on the client:
```js
// converts amount x of euros into usd, rounds result to two decimal digits  
        Meteor.call('currency_convert', amount, 'EUR', 'USD', function(err, result) {
            Session.set('usd', result.toFixed(2))
        });
```
