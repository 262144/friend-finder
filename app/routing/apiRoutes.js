var friends = require('../data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		var newFriend = req.body;
		var diffArray = [];
		var goodFriends = [];
		for (var i = 0; i<friends.length; i++){
			var diffSum = 0;
			for (var j = 0; j<10; j++){
				diffSum += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
				console.log('diffSum ' + i + ' = ' + diffSum);
			}
			diffArray.push(diffSum);
		} // end of loop
		console.log('diffArray = ' + diffArray);
		// now find the indices of the smallest element(s)
		// here

		var minDiff = Math.min.apply(Math, diffArray);
        for (var i = 0; i < diffArray.length; i++) {
                if (diffArray[i] === minDiff) {
                    goodFriends.push(friends[i]);
                    console.log('goodFriends are these: ' + JSON.stringify(goodFriends[0]) + ' ' + JSON.stringify(goodFriends[1]));
                }
            }

		// here
		res.json(goodFriends);
		friends.push(newFriend);
	});
}