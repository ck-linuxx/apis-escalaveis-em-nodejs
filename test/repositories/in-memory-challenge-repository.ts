import { ChallengesRepository } from "../../src/applications/repositories/ChallengesRepository"
import { Challenge } from "../../src/domain/entities/challenge"


export class InMemoryChallengeRepository implements ChallengesRepository {
  public items: Challenge[] = []

  async findById(id: string): Promise<Challenge | null> {
    const challenges = this.items.find(student => student.id === id)

    if(!challenges) {
      return null
    }

    return challenges
  }
}