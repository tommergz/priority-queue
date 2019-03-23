const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		const new_node = new Node(data, priority);
		this.insertNode(new_node);
		this.shiftNodeUp(new_node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (Object.is(this.root, null)) {
			this.root = node;
			this.parentNodes.push(node);
		}
		else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if (Object.is(this.parentNodes[this.parentNodes.length-1], this.parentNodes[this.parentNodes.length-1].parent.right)) {
				this.parentNodes.splice(0, 1);
			}
		}		
	}

	shiftNodeUp(node) {
		if (node.parent) {
			if (Object.is(node.parent.left, node)) {
				if (node.parent.right) {
					if (node.priority > node.parent.priority && node > node.parent.right.priority) {
						var place = this.parentNodes.indexOf(node);
						var node_place = this.parentNodes[place];
						var parent_place = this.parentNodes.indexOf(node.parent);
						if (parent_place !== -1) {
							this.parentNodes[place] = this.parentNodes[parent_place];
							this.parentNodes[parent_place] = node_place;
						}
						else {
							this.parentNodes[place] = node.parent;
						}	
						node.swapWithParent();
						this.shiftNodeUp(node);
					}
				}		
				if (node.priority > node.parent.priority) {
					var place = this.parentNodes.indexOf(node);
					var node_place = this.parentNodes[place];
					var parent_place = this.parentNodes.indexOf(node.parent);
					if (parent_place !== -1) {
						this.parentNodes[place] = this.parentNodes[parent_place];
						this.parentNodes[parent_place] = node_place;
					}
					else {
						this.parentNodes[place] = node.parent;
					}	
					node.swapWithParent();
					this.shiftNodeUp(node);
				}
			}
			else if (Object.is(node.parent.right, node)) {	
				if (node.priority > node.parent.priority) {
					var place = this.parentNodes.indexOf(node);
					var node_place = this.parentNodes[place];
					var parent_place = this.parentNodes.indexOf(node.parent);
					if (parent_place !== -1) {
						this.parentNodes[place] = this.parentNodes[parent_place];
						this.parentNodes[parent_place] = node_place;
					}
					else {
						this.parentNodes[place] = node.parent;
					}	
					node.swapWithParent();	
					this.shiftNodeUp(node);
				}
			}
			
		}
		this.root = node;
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
