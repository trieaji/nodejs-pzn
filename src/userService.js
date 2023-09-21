import { UserRepository } from "./userRepository.js";

export class UserService {

    constructor(repositoryUser) {
        if(repositoryUser) {
            this.repositoryUser = repositoryUser
        } else {
            this.repositoryUser = new UserRepository();
        }
    }

    save(user) {
        this.repositoryUser.save(user)
    }

    findById(id) {
        return this.repositoryUser.findById(id)
    }

    findAll() {
        return this.repositoryUser.findAll();
    }
}