import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'

describe('AppService', () => {
  let service: AppService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService]
    }).compile()

    service = module.get<AppService>(AppService)
  })

  describe('basicFilledBoxes', () => {
    it('should return a basic filled boxes', () => {
      expect(
        service.basicFilling([
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9'
        ])
      ).toBe('01234/5/6/7/8/9')
    })
  })

  describe('optimizedFilledBoxes', () => {
    it('should return optimized filled boxes', () => {
      expect(
        service.optimizedFilling([
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9'
        ])
      ).toBe('910/82/73/64/5')
    })
  })
})