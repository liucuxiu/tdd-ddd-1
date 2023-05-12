import { SignUpController } from './controller/SignUpController';
import { SignUpService } from './service/SignUpService';
import { userRepo } from './repo';

const signUpService = new SignUpService(userRepo);
const signUpController = new SignUpController(signUpService);

export { signUpService, signUpController };