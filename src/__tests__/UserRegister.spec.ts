import { sequelize } from '../config/database';
import { UserModel } from '../modules/users/model/UserModel';
import * as request from 'supertest';
import { app } from '../app';


beforeAll(() => {
  return sequelize.sync();
});

beforeEach(() => {
  return UserModel.destroy({ truncate: true });
});

describe('User Registration', () => {
  const postValidator = () => {
    return request(app).post('/api/v1/signup').send({
      username: 'user1',
      email: 'user1@gmail.com',
      password: 'password',
    });
  };

  it('should return 200 OK when signup request is valid', async () => {
    const response = await postValidator();
    expect(response.status).toBe(200);
  });

  it('should return success message when signup request is valid', async () => {
    const response = await postValidator();
    expect(response.body.message).toBe('User created');
  });

  it('should save the user to database', async () => {
    await postValidator();
    const result = await UserModel.findAll();
    expect(result.length).toBe(1);
  });

  it('should save the username and email to database', async () => {
    await postValidator();
    const result = await UserModel.findAll();
    const savedUser = result[0];
    expect(savedUser.username).toBe('user1');
    expect(savedUser.email).toBe('user1@gmail.com');
  });

  it('should hashed the password in database', async () => {
    await postValidator();
    const result = await UserModel.findAll();
    const saveUser = result[0];
    expect(saveUser.password).not.toBe('password');
  });
});
