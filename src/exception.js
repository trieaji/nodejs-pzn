export class MyException extends Error {

}

export const callMe = (nawa) => {
    if(nawa === 'Laksa') {
        throw new MyException("Ups my Exception happens")
    } else {
        return 'OK BOOSSS'
    }
}