import { UserRepository } from "../src/userRepository.js";
import { UserService } from "../src/userService.js";


jest.mock('../src/userRepository.js');

const repository = new UserRepository();
const service = new UserService(repository);



test('test mock user save', () => {

    const user = {
        id: 1,
        name: 'Laksa'
    }
    // console.info(user)

    service.save(user);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
})


test('test mock class findById', () => {
    const user = {
        id: 2,
        name: 'Aji'
    };

    // repository.findById.mockReturnValueOnce(user) //tidak pakek ini gpp

    // expect(service.findById(2)).toEqual(user) // bisa pakek ini
    service.findById(2) //bisa pakek ini

    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(2);
})


test('test mock class findAll', () => {
    const users = [
        {
            id: 2,
            name: 'Aji'
        },
        {
            id: 3,
            name: 'Trie'
        }
    ]

    repository.findAll.mockReturnValueOnce(users)

    expect(service.findAll()).toEqual(users)
    expect(repository.findAll).toHaveBeenCalled();
})