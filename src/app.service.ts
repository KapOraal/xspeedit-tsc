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

  optimizedFill(items: string[]) {
    const boxes: string[] = []
    let leftoverItems = this.fillBox(items, boxes)
    while (leftoverItems.length > 0) {
      const others = this.fillBox(leftoverItems, boxes)
      leftoverItems = [...others]
    }
    return boxes.join('/')
  }

  fillBox(items: string[], boxes: string[]): string[] {
    let [boxItems, ...otherItems] = items.sort(
      (a: string, b: string) => parseInt(b) - parseInt(a)
    )
    const leftoverItems = [...otherItems]

    while (otherItems.length > 0) {
      const [firstFit, ...otherFits] = otherItems.filter(
        this.filterItems(boxItems)
      )
      if (firstFit) {
        boxItems += firstFit
        leftoverItems.splice(leftoverItems.indexOf(firstFit), 1)
      }
      otherItems = otherFits
    }
    boxes.push(boxItems)

    return leftoverItems
  }

  filterItems(boxItems: string) {
    const [...items] = boxItems
    return (item: string) =>
      parseInt(item) +
      items.reduce(
        (acc: number, value: string) => acc + parseInt(value),
        0
      ) <=
      10
  }
}