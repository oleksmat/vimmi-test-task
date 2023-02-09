import type { ResponseMessage } from './response-message';
import type { User, UserListItem } from './user';

export class UserService {
  async getAllUsers(): Promise<UserListItem[]> {
    const response = await fetch('/api/users');

    return this.unwrapResponse(response);
  }

  async getUserDetailById(userId: string): Promise<User> {
    const response = await fetch(`/api/users/${userId}`);

    return this.unwrapResponse(response);
  }

  private async unwrapResponse<Data>(response: Response): Promise<Data> {
    const message = await response.json() as ResponseMessage<Data>;

    if (message.error) {
      return Promise.reject(message.message);
    }

    return message.data;
  }
}
