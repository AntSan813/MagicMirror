/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.1/120", "192.168.0.1/24"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_bar",
			config: {
				timeFormat: "12",
				timezone: "America/New_York"
			}
		},
		{	
			disabled: false,
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
		},
		{	
			disabled: false,
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Rock Hill",
				locationID: "4593142",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "86d4a892d3b19b114455325dc518c7b8"
			}
		},
		{	
			disabled: false,
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Rock Hill",
				locationID: "4593142",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "86d4a892d3b19b114455325dc518c7b8"
			}
		},
		{	
			disabled: false,
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{	
			disabled: true,
			module: "MMM-EasyPix",
			position: "middle_center",
			config: {
				picName: "jj.jpg", // Enter the picture file name.
				maxWidth: "50%",        // Size picture precisely. Retains aspect ratio.
				//sounds: ["1.mp3", "me2.mp3"]  // mp3 sound file names in quotes seperated by commas for Hello-Lucy
			}

		},
		{
			module: "MMM-NetworkConnection",
			header: "internet Connection",
			position: "top_left",
			config:{
				displayTextStatus: false
			}
		},
		{
			module: "MMM-Remote-Control",
			// uncomment the following line to show the url of the remote control on the mirror
			// position: "bottom_left"
			// You can hide this module afterwards from the remote control itself
		},
		{
			module: "MMM-cryptocurrency",
			position: "top_right",
			config: {
				currency: ['ethereum', 'bitcoin', 'bitcoin-cash', 'litecoin'],
				conversion: 'USD',
				showUSD: true,
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logo',
				showGraphs: true,
				coloredLogos: true,
				fontSize: "large"
			}

		},
		{
			module: "MMM-socialbicycles",
			position: "top_left",
			config: {
				stationID: "3884",
				sobiAccessToken: "54c95f158ff5f82852caa6a36d56e10f572aab7a625f8708b61527c46b3e1c61"
			}

		},
		{
			module: 'MMM-pages',
			config: {
                		modules:
                    			[[ "alert", "updatenotification", "clock", "calendar", "compliments", "currentweather", "weatherforcast", "newsfeed"],
                     			[ "MMM-EasyPix","MMM-NetworkConnection", "MMM-RemoteControl", "MMM-cryptocurrency", "MMM-socialbicycles", "MMM-pages", "MMM-page-indicator","MMM-CountDown","MMM-RSS-FEED","MMM-Events"]],
                		excludes: ["clock", "MMM-page-indicator", "internet-monitor"],
				rotationTime: 60000 ,
        		}

		},
		{
			module: 'MMM-page-indicator',
        		position: 'bottom_bar',
        		config: {
            			pages: 2,
        		}
		},
		{
			module: 'MMM-CountDown',
			position: "top_left",
            		config: {
               			 event: "Fall Semester",
                		 date: "2018-08-20"
            		}
		},
		{
			module: 'MMM-RSS-FEED',
			position: 'middle_center',
			config: {
				url: 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss'
			}


	
		},
		{
			disabled: true,
			module: 'MMM-Events',
    			position: 'top_left',
    			config: {
				city: "Winthrop University",	           // Your City
				eventType: "community",		   // Choose from Events List below
				when: "This Week",                 // "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name, e.g. "October"
				mode: "noFrame",                   // "Frame" or "noFrame" (around picture)
				apikey: "FLvg2gJWkbQQ6ZcX",
				rotateInterval: 5 * 60 * 1000,     // New Event Appears every 5 minutes
				useHeader: false,	           // Set to true if you want a header
				header: "",
				animationSpeed: 3000,              // Event fades in and out
				picture: true,                     // true, false = no image
    			}
		},
		{
			module: 'internet-monitor',
            		position: 'top_center',
           		header: 'Internet Monitor',
            		config:{
                		type: '',
                		maxTime: 20000,
                		updateInterval: 0,
                		verbose: false,
                		displayStrength: true,
                		displaySpeed: true,
                		strengthIconSize: 80,
                		maxGaugeScale: 100,
				wifiSymbol:{
                  			size: 50,
                    			fullColor: '#3afc25',
                    			almostColor: '#ffff0c',
                    			halfColor: '#ff8c00',
	            			noneColor: '#ff1111'
				},
            		},
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
