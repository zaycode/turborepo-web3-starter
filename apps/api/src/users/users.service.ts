import { Injectable, NotFoundException } from "@nestjs/common"
import type { User } from "./user.interface"

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: "1",
      address: "0x1234...5678",
      username: "alice",
      avatar: "https://example.com/avatar1.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      address: "0x5678...9012",
      username: "bob",
      avatar: "https://example.com/avatar2.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      address: "0x9012...3456",
      username: "charlie",
      avatar: "https://example.com/avatar3.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  findAll(): User[] {
    return this.users
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === id)
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return user
  }
}
