import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  basicFill(items: string[]): string {
    let boxCapacity = 10
    return items.reduce((acc: string, size: string) => {
      if (boxCapacity - parseInt(size, 10) < 0) {
        acc += '/'
        boxCapacity = 10
      }
      boxCapacity -= parseInt(size, 10)
      return (acc += size)
    }, '')
  }
}