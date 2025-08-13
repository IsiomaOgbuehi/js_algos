class _Node {
    value: number
    nextNode: _Node | null

    // dual
    prevNode: _Node | null

  constructor(value: number) {
    this.value = value
    this.nextNode = null
    this.prevNode = null
  }
}

class LinkedNode {
  private headNode: _Node | null
  private tailNode: _Node | null

  constructor() {
    this.headNode = null
    this.tailNode = null
  }

  // Add a node at the end
  append = (value: number) => {
    const newNode = new _Node(value)
    if (!this.headNode) {
      this.headNode = newNode
      this.tailNode = newNode
    //   this.tailNode.prevNode = newNode
    } else {
      this.tailNode!.nextNode = newNode
      newNode.prevNode = this.tailNode //
      
      this.tailNode = newNode
    }
  }

   prepend = (value: number) => {
    const newNode = new _Node(value)
    newNode.nextNode = this.headNode
    this.headNode = newNode
    if(!this.tailNode) {
        this.tailNode = newNode
    }
   }

   insertAt = (value: number, index: number) => {
    if (index < 0) {
        throw new Error('Insert an index greater than or equal to zero')
    }

    const newNode = new _Node(value)

    if(index === 0) {
        this.prepend(value)
        return
    }

    let currentNode = this.headNode
    let currentIndex = 0

    while (currentNode && currentIndex < index - 1) {
      currentNode = currentNode.nextNode
      currentIndex++
    }

    if (!currentNode) {
      throw new Error('Index out of bounds')
    }

    newNode.nextNode = currentNode.nextNode
    currentNode.nextNode = newNode

    if (!newNode.nextNode) {
      this.tailNode = newNode
    }
   }

   toArray = (): number[] => {
    let arrayValue: number[] = []
    let currentNode = this.headNode
    while(currentNode && currentNode.value) {
        arrayValue.push(currentNode.value)
        currentNode = currentNode.nextNode
    }

    return arrayValue
   }
}

const customLinkedNode = new LinkedNode()
console.log(customLinkedNode)

customLinkedNode.append(100)
customLinkedNode.append(200)
customLinkedNode.append(300)
customLinkedNode.append(400)
customLinkedNode.append(500)
// customLinkedNode.prepend(50)
// customLinkedNode.prepend(950)
// customLinkedNode.insertAt(150, 2)

console.log(customLinkedNode)

console.log('TO ARRAR=========')
console.log(customLinkedNode.toArray())