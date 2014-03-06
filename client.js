'use strict';

var counterpart = require('counterpart');
var React		= require('react');
var Translate	= require('react-translate-component');

var MyApp = React.createClass({
	displayName: 'MyApp',

	render: function() {
		return(
			React.DOM.html(null,
				React.DOM.head(null,
					React.DOM.meta({ charSet: 'utf-8' }),
					React.DOM.title(null, 'React Translate Quick-Start'),
					React.DOM.script({ src: '/bundle.js' })
				),

				React.DOM.body(null,
					LocaleSwitcher(),
					Greeter({ name: 'Brad', component: React.DOM.h1 })
				)
			)

		);
	}
});

if (typeof window !== 'undefined') {
	window.onload = function() {
		React.renderComponent(MyApp(), document);
	};
}

module.exports = MyApp;

var LocaleSwitcher = React.createClass({
	handleChange: function(e) {
		counterpart.setLocale(e.target.value);
	},

	render: function() {
		return (
			React.DOM.p(null,
				React.DOM.span(null, 'Switch Locale: '),

				React.DOM.select( 
					{
						defaultValue: counterpart.getLocale(),
						onChange: 	  this.handleChange
					},
					React.DOM.option(null, 'en'),
					React.DOM.option(null, 'de')
				)
			)
		);
	}
});

var Greeter = React.createClass({
	render: function() {
		return this.transferPropsTo(
			Translate(null, 'example.greeting')
		);
	}
});

counterpart.registerTranslations('en', {
	example: {
		greeting: 'Hello %(name)s! How are you today?'
	}
});

counterpart.registerTranslations('de', {
	example: {
		greeting: 'Hallo, %(name)s! Wie geht\'s dir heute so?'
	}
});