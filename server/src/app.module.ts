import { Module } from '@nestjs/common';
import { UserListModule } from './users';

@Module({
  imports: [UserListModule]
})
export class AppModule {}
