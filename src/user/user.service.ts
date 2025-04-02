import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(data: Partial<User>): Promise<User> {
    return this.userRepository.createUser(data);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  update(id: string, data: Partial<User>): Promise<User | null> {
    return this.userRepository.updateUser(id, data);
  }

  delete(id: string): Promise<void> {
    return this.userRepository.deleteUser(id);
  }
}
