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
      expect(appController.basicBoxFilling('0123456789')).toBe(
        '01234/5/6/7/8/9'
      )
    })

    it('should fail when input contains a letter', () => {
        expect(appController.basicBoxFilling('1234a56789')).toBe(undefined)
      })
  })

  describe('optimizedFilledBoxes', () => {
    it('should return optimized filled boxes', () => {
      expect(appController.optimisedBoxFilling('0123456789')).toBe(
        '910/82/73/64/5'
      )
    })

    it('should fail when input contains a letter', () => {
        expect(appController.optimisedBoxFilling('1234a56789')).toBe(undefined)
      })
  })
})