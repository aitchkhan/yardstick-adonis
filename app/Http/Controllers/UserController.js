const User = require('../JsonApiViews/User');
class UserController {
    * index(request, response) {
        const user = yield User.all()
        response.jsonApi('User', user)
    }
}

module.exports = UserController