const LinkedList = require('../linked-list')
const fromTail = require('../from-tails')
const withCounter = require('../from-tails')
describe ("Creates a linked list", () => {
    it("creates a linked list with head data of 1", () => {
        const list = new LinkedList();
        list.insertHead(1)

        expect(list.head.data).toBe(1);
    });
});

// interview question
describe ("From tail of linkedlist", () => {
    it("should step from tail of linkedlist", () => {
        // initialze list 
        const list = new LinkedList()
        list.insertHead(1)
        list.insertHead(2)
        list.insertHead(3)
        list.insertHead(4)
        list.insertHead(5)
// to from the tail should be 3 
        expect(fromTail(list, 2).data.toBe(3));
    });
});

// not always needed
    // edge case
describe ("Fail attempt", () => {
    it ("position is grater than length", () => {
        const list = new LinkedList()
        list.insertHead(1)
        list.insertHead(2)
        list.insertHead(3)
        list.insertHead(4)
        list.insertHead(5)

        expect(fromTail(list, 8).toBe(null))
    });
});

// counter 
describe ("with counter", () => {
    it ("should step from tail ", () => {
        const list = new LinkedList()
        list.insertHead(1)
        list.insertHead(2)
        list.insertHead(3)
        list.insertHead(4)
        list.insertHead(5)

        expect(withCounter(list, 2).data).toBe(3)
    });
});

describe ("with counter random test", () => {
    it ("should step from tail ", () => {
        const list = new LinkedList()
        list.insertHead(1)
        list.insertHead(2)
        list.insertHead(3)
        list.insertHead(4)
        list.insertHead(5)

        expect(withCounter(list, 1).data).toBe(4)
        expect(withCounter(list, 4).data).toBe(1)
    });
});

describe ("with counter random test", () => {
    it ("should step from tail ", () => {
        const list = new LinkedList()
        for (let i = 0; i< 10; i++) {
            list.insertHead(i * 3);
        }

        expect(withCounter(list, 0).data).toBe(null)
    });
});