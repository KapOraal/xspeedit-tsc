import { Test, TestingModule } from '@nestjs/testing'
import { ConsoleModule } from 'nestjs-console'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [ConsoleModule],
      providers: [AppService],
      exports: [AppService]
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('basicFilledBoxes', () => {
    it('should return boxes filled basically', () => {
      expect(appController.basicFilledBoxes('0123456789')).toBe(
        '01234/5/6/7/8/9'
      )
    })
  })
})