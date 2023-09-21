import { UserRepository } from "../src/userRepository.js";
import { UserService } from "../src/userService.js";

const repository = new UserRepository();
const service = new UserService(repository);

test('test mock partial class findById', () => {
    const user = {
        id : 1,
        nawa: 'Aji'
    }

    const findByIdMock = jest.spyOn(repository, 'findById');
    findByIdMock.mockReturnValueOnce(user)

    expect(service.findById(1)).toEqual(user)

    //bisa pakek ini
    expect(findByIdMock).toHaveBeenCalled(); 
    expect(findByIdMock).toHaveBeenCalledWith(1);

    //bisa pakek ini
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
})