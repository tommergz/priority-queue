const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		try {
			if ((Object.is(this.heap, this.maxSize))) { 
				throw new Error("max size")
			}
			else
		 	{
			this.heap.push(data, priority);
		}
		} catch (e) {
			alert( "max size" );
		  }
	}

	shift() {

	}

	size() {

	}

	isEmpty() {

	}
}

module.exports = PriorityQueue;
