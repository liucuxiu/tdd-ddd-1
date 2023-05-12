import { SignUpService } from '../service/SignUpService';
import { CreateUserDTO } from '../dto/CreateUserDTO';

export class SignUpController {
  private service: SignUpService;

  constructor(service: SignUpService) {
    this.service = service;
  }

  async createUser(req: any, res: any): Promise<any> {
    const userDto: CreateUserDTO = req.body;


    try {
      await this.service.createUser(userDto);
      return res.send({ message: 'User created' });
    }
    catch (err) {
      return res.status(500).json({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        message: err.toString()
      });
    }
  }
}