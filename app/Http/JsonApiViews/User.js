const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class User extends JsonApiView {
    getAttributes() {
        return ['first-name', 'last-name', 'address'];
    }
}

module.exports = User;