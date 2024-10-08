import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateGameListRequest,
  CreateGameRequest,
} from './requests/create-game.request';
import { Games, GamesDocument } from './schemas/game.schema';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(Games.name) private readonly gamesModel: Model<GamesDocument>,
  ) {}

  async createGame(createGameListRequest: CreateGameListRequest) {
    const createdGame = await this.gamesModel.insertMany(
      createGameListRequest.data,
    );
    return createdGame;
  }

  async findAllGame() {
    const findedGames = await this.gamesModel.find();
    return findedGames;
  }

  async findGameById(id: string) {
    return `This action returns a #${id} game`;
  }

  async updateGameById(id: string, updateGameRequest: CreateGameRequest) {
    return updateGameRequest;
  }

  async deleteGameById(id: string) {
    return `This action removes a #${id} game`;
  }
}
