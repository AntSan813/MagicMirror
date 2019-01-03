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
			position: "lower_third",
      config: {
        compliments: {
          anytime: [
            "Welcome to Winthrop University! You are currently in Thurmond Building!"
          ],
          morning: [
            "Good morning!",
            "Who needs coffee when you have your smile?",
            "Go get em, Tiger!"
          ],
          afternoon: [
            "Hitting your stride!",
            "You are making a difference!",
            "You're more fun than bubble wrap!"
          ],
          evening: [
            "You made someone smile today, I know it.",
            "You are making a difference.",
            "The day was better for your efforts."
          ]
        }
      }
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
				appid: "86d4a892d3b19b114455325dc518c7b8",
        units: "imperial"
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
      module: 'MMM-SlackAnnouncements',
      position: 'top_center',
      config: {
        channel: 'CF5KNP329',
        slackToken: 'xoxp-515668778725-515362936979-514892401553-3a2cd192463a729cbb6a8b6701dcb65d' // See 'Configuration options' for more information.
      }
    },
    {
	    module: 'MMM-Globe',
    	position: 'center',
    	config: {
	    	style: 'geoColor',
		    imageSize: 600,
		    ownImagePath:'',
	    	updateInterval: 10*60*1000
	    }
    },
    {
      module: 'MMM-nasaastropic',
      position: 'center',
      config: {
        updateInterval: 6*60*60*1000,
        animationSpeed: 0,
        header: 'NASA Astronomy Picture',
        maxlongedge: 300
      }
    },
    {
      module: "MMM-NowPlayingOnSpotify",
      position: "center",

      config: {
        clientID: "7f90bd2066f94351a6caf04a3e3114a3",
        clientSecret: "6adaa569458c4876a25e1f45311018d8",
        accessToken: "BQB9XNjd9O6GF6vcx1tDY-n_gWiJ03MR7gedpT-gqj7VSyun1MDst7KoRPvR-cmKPeS3ngCdFXuaySnF_n0h9BEV1q7IYNUGfTk7b5sJgV_3FHrZn25_bGW2mp1oYPpBbp_Hlbnz8AHCQoz8A8FcayjADn4",
        refreshToken: "AQCVoLihs8p_25JqyfrD1X82oq3wffO8taueaWtm9ksGblqv7LRqB5HjKgRKsDAMXdClCrmsutqskhLcicuIkTDW2TNwHwwJGSlPfTouX8zCoOn_-mq2Dl2apkMYsw8yDPWX0A",
        showCoverArt: true
      }
    },
    {
		  module: 'MMM-Snow',
		  position: 'fullscreen_above',
		  config: { // See 'Configuration options' for more information.
			  flakeCount: 100,
			  theme: "winter"			
      }
    },
    {
      module: 'MMM-Carousel',
      position: 'bottom_bar', // Required only for navigation controls
      config: {
          transitionInterval: 30000,
          ignoreModules: ['clock', 'alert','MMM-Snow'],
          mode: 'slides',
          showPageIndicators: true,
          showPageControls: true,
          slides: [
              ['compliments'],
              ['calendar','MMM-GoogleTasks','MMM-SlackAnnouncements'],
              ['weatherforecast', 'currentweather', 'newsfeed'],
              ['MMM-cryptocurrency'],
              ['MMM-Globe'],
              ['MMM-nasaastropic'],
              ['MMM-NowPlayingOnSpotify']
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
