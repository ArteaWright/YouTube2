//service to resolve Ip to a Location.
import Api from './api';

class Email extends Api {
    constructor(session) {
        super('/email');
        this.session = session;
    }
}
export default Email;