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
        command: 'basic-filling [input]',
        description: 'Take items one by one and fill the boxes'
      },
      this.basicBoxFilling,
      this.consoleService.getCli()
    )

    this.consoleService.createCommand(
      {
        command: 'optimized-filling [input]',
        description: 'Use the minimum of boxes as possible'
      },
      this.optimisedBoxFilling,
      this.consoleService.getCli()
    )
  }

  basicBoxFilling = (input: string): string => {

    const isNumber = (input: string) => /^\d+$/.test(input)

    if (!isNumber(input)) {
      console.log(`The input mus only contains digits`)
      return
    }

    const [...items] = input
    const basicBoxes = this.appService.basicFilling(items)
    console.log('Basic Filling Box   :  ' + basicBoxes)
    return basicBoxes
  }

  optimisedBoxFilling = (input: string): string => {

    const isDigitString = (input: string) => /^\d+$/.test(input)

    if (!isDigitString(input)) {
      console.log(`The input mus only contains digits`)
      return
    }

    const [...items] = input
    const optimizedBoxes = this.appService.optimizedFilling(items)
    console.log('Optimized Filling Box    :  ' + optimizedBoxes)
    return optimizedBoxes
  }
}