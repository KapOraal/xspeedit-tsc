import { Controller } from '@nestjs/common'
import { ConsoleService } from 'nestjs-console'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    private readonly consoleService: ConsoleService,
    private readonly appService: AppService
  ) {
    this.consoleService.createCommand(
      {
        command: 'basic-filled <input>',
        description: 'Take items one by one and fill the boxes'
      },
      this.basicFilledBoxes,
      this.consoleService.getCli()
    )
  }

  basicFilledBoxes = (input: string): string => {

    const isNumber = (input: string) => /^\d+$/.test(input)

    if (!isNumber(input)) {
      console.log(`The input mus only contains digits`)
      return
    }

    const [...items] = input
    const basicBoxes = this.appService.basicFill(items)
    console.log('Basic Fill    :  ' + basicBoxes)
    return basicBoxes
  }
}