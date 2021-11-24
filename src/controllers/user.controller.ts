const Users = require('../models/users');

export class UsersController {
  addUser(inputObject: any) {
    return Users.create(inputObject.input).then((userInfo: any) => {
      return userInfo;
    });
  }

  updateUser(inputObject: any) {
    return Users.findOneAndUpdate({ _id: inputObject.id }, inputObject.input, { new: true }).then(
      (userInfo: any) => {
        return userInfo;
      }
    );
  }
}
