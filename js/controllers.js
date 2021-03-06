EllaApp.controller('homeCtrl', [
	'$scope',
	function($scope) {
		$('.ella').textillate({
		  // the default selector to use when detecting multiple texts to animate
		  selector: '.texts',

		  // enable looping
		  loop: false,

		  // sets the minimum display time for each text before it is replaced
		  minDisplayTime: 2000,

		  // sets the initial delay before starting the animation
		  // (note that depending on the in effect you may need to manually apply 
		  // visibility: hidden to the element before running this plugin)
		  initialDelay: 0,

		  // set whether or not to automatically start animating
		  autoStart: true,

		  // custom set of 'in' effects. This effects whether or not the 
		  // character is shown/hidden before or after an animation  
		  inEffects: [],

		  // custom set of 'out' effects
		  outEffects: [ 'hinge' ],

		  // in animation settings
		  in: {
		    // set the effect name
		    effect: 'fadeInDownBig',

		    // set the delay factor applied to each consecutive character
		    delayScale: 1.5,

		    // set the delay between each character
		    delay: 100,

		    // set to true to animate all the characters at the same time
		    sync: false,

		    // randomize the character sequence 
		    // (note that shuffle doesn't make sense with sync = true)
		    shuffle: true,

		    // reverse the character sequence 
		    // (note that reverse doesn't make sense with sync = true)
		    reverse: false,

		    // callback that executes once the animation has finished
		    callback: function () {}
		  },

		  // out animation settings.
		  out: {
		    effect: 'hinge',
		    delayScale: 1.5,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
		  },

		  // callback that executes once textillate has finished 
		  callback: function () {},

		  // set the type of token to animate (available types: 'char' and 'word')
		  type: 'char'
		});

				$('.hello').textillate({
		  // the default selector to use when detecting multiple texts to animate
		  selector: '.texts',
		  loop: false,
		  minDisplayTime: 4000,
		  initialDelay: 0,
		  autoStart: true,
		  inEffects: [],
		  outEffects: [ 'hinge' ],
		  in: {
		    effect: 'rollIn',
		    delayScale: 1,
		    delay: 10,
		    sync: false,
		    shuffle: true,
		    reverse: false,
		    callback: function () {}
		  },
		  out: {
		    effect: 'hinge',
		    delayScale: 1.5,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
		  },
		  callback: function () {},


		  type: 'char'
		});
		$('.fewd').textillate({
		  // the default selector to use when detecting multiple texts to animate
		  selector: '.texts',
		  loop: false,
		  minDisplayTime: 4000,
		  initialDelay: 0,
		  autoStart: true,
		  inEffects: [],
		  outEffects: [ 'hinge' ],
		  in: {
		    effect: 'rollIn',
		    delayScale: 1,
		    delay: 10,
		    sync: false,
		    shuffle: true,
		    reverse: false,
		    callback: function () {}
		  },
		  out: {
		    effect: 'hinge',
		    delayScale: 1.5,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    callback: function () {}
		  },
		  callback: function () {},


		  type: 'char'
		});		
		// $('.spinning').textillate({
		//   // the default selector to use when detecting multiple texts to animate
		//   selector: '.texts',
		//   loop: true,
		//   minDisplayTime: 0,
		//   initialDelay: 0,
		//   autoStart: true,
		//   inEffects: [],
		//   outEffects: [ 'rollOut' ],
		//   in: {
		//     effect: 'rollIn',
		//     delayScale: 0,
		//     delay: 0,
		//     sync: false,
		//     shuffle: false,
		//     reverse: false,
		//     callback: function () {}
		//   },
		//   out: {
		//     effect: 'rollOut',
		//     delayScale: 0,
		//     delay: 0,
		//     sync: false,
		//     shuffle: false,
		//     reverse: false,
		//     callback: function () {}
		//   },
		//   callback: function () {},


		//   type: 'char'
		// });	
	}
]);
