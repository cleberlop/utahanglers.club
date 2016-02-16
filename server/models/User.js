var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var q = require('q');


var userSchema = mongoose.Schema({
  email: {type: String, required: true, minlength: 4, maxlength: 100},
  password: {type: String},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  gender: [{type: String}],
  fishingStyle: [{type: String}],
  city: {type: String},
  region: [{type: String}],
  profilePic: {type: String, required: false, default: 'https://beardownchallenge.com/assets/no-user-image-square-9f6a473a32ad639f619216331d10d61ce1b35c9271d5683920960e1a5ee45bb8.jpg'},
  coverPic: {type: String, required: false, default: 'https://images.unsplash.com/photo-1432375252447-8f90cd499157?crop=entropy&dpr=2&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300'},
  following: [{type: String, default: 0}],
  followers: [{type: String, default: 0}],
});

userSchema.pre('save', function (next) {
  var user = this;
	if (!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(10, function (err, salt) {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, function (err, hash) {
			user.password = hash;
			return next();
		});
	});
});

userSchema.methods.verifyPassword = function (password) {
	var dfd = q.defer();

	bcrypt.compare(password, this.password, function (err, isMatch) {
		if (err) {
			dfd.reject(err);
		}
		else {
			dfd.resolve(isMatch);
		}
	});

	return dfd.promise;
};

userSchema.options.toJSON = {
	transform: function (doc, ret) {
		delete ret.__v;
		delete ret.password;
		return ret;
	}
};

module.exports = mongoose.model("User", userSchema);
