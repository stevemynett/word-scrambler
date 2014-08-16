$(function() {


	/*
		Shuffles the letters in a word
		http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
		@usage console.log("the quick brown fox jumps over the lazy dog".shuffle());
	*/
	String.prototype.shuffle = function () {
	    var a = this.split(""),
		    n = a.length;

	    for(var i = n - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var tmp = a[i];
	        a[i] = a[j];
	        a[j] = tmp;
	    }
	    return a.join("");
	}

	// Lets get a list of long words
	var wordList = ['Allegator', 'Blunderbuss', 'Brouhaha', 'Bumbershoot', 'Cantankerous', 'Cockamamie', 'Crapulence', 'Donnybrook', 'Doozy', 'Dudgeon', 'Filibuster', 'Formication', 'Gastromancy', 'Kerfuffle', 'Klutz', 'Malarkey', 'Maverick', 'Nincompoop', 'Ornery', 'Panjandrum', 'Pettifogger', 'Pratfall', 'Rambunctious', 'Shenanigan', 'Skedaddle', 'Troglodyte', 'Vomitory', 'Wabbit', 'Yahoo'];
	
	// randomly generate the word
	var word = wordList[Math.floor(Math.random()*wordList.length)];
	var scrambledWord = word.shuffle().toLowerCase();
	$('.scrambledNewWord').append(scrambledWord);

	// read input from dom on submit
	$('#submit').on('click', function() {
		var submittedWord = $('.answer').val();
		var body = $('body');

		// evaluate the word
		if (word.toLowerCase() == submittedWord.toLowerCase()) {
			body.addClass('correct');
			body.removeClass('incorrect');
		} else { 
			body.addClass('incorrect');
			body.removeClass('correct');
		}
	})

	// refresh the word

	// $('#reset').on('click', generateWord());
});