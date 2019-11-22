import { Context, controller, get, inject, provide , post  } from 'midway';
import { IUserResult, IUserService } from '../../interface';
@provide()
@controller('/user')
export class UserController {
  private myList = [];
  @inject()
  ctx: Context;
  @inject('userService')
  service: IUserService;
  @get('/getUsersAll')
  async index(): Promise<void> {
    const users: IUserResult = await this.service.getUser({id: 1});
    console.log(users);
    this.ctx.body = this.myList;
  }
}
