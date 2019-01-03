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
	ipWhitelist: [],  //["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

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
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Upcoming Events",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://calendar.google.com/calendar/ical/santosa4%40mailbox.winthrop.edu/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Rock Hill",
				locationID: "4593142",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "86d4a892d3b19b114455325dc518c7b8",
        units: "imperial",

			}
		},
		{
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
      module: 'MMM-NetworkConnection',
      position: 'top_right',
      config: {
      }
    },
//    {
//      module: 'MMM-Remote-Control',
//      // uncomment the following line to show the URL of the remote control on the mirror
//      position: 'bottom_left'
//      // you can hide this module afterwards from the remote control itself
//    },
    {
    	module: "MMM-cryptocurrency",
    	position: "top_right",
    	config: {
    		currency: ['ethereum', 'bitcoin'],
    		conversion: 'USD',
    		showUSD: false,
    		headers: ['change24h', 'change1h', 'change7d'],
    		displayType: 'logoWithChanges',
        coloredLogos: true,
    		showGraphs: true
    	}
    },

    {
      module: 'MMM-GoogleTasks',
      header: "Tasks",
      position: "top_right",
      config: {
        listID: "MTM5MzUxMjcyNzAyMjI0Nzg4NzA6ODA1ODMxMzY0MzM5MTg5Njow"
      }
     },
     {
      module: 'MMM-Carousel',
      position: 'bottom_bar', // Required only for navigation controls
      config: {
          transitionInterval: 30000,
          ignoreModules: ['clock', 'alert'],
          mode: 'slides',
          showPageIndicators: true,
          showPageControls: true,
          slides: [
              ['calendar', 'compliments','MMM-GoogleTasks'],
              ['weatherforecast', 'currentweather', 'newsfeed'],
              ['MMM-cryptocurrency']
          ],
          keyBindingsMode: "DEFAULT",
          keyBindings: {
              NextSlide: "ArrowRight",
              PrevSlide: "ArrowLeft",
              Slide0:    "Home"
          }
      }
    },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
