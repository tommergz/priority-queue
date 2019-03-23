class Node {
	constructor(data, priority) {
		this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
			this.left.parent = this;
		}
		else if (this.right == null) {
			this.right = node;
			this.right.parent = this;
		}
		
	}

	

	removeChild(node) {
		try {
			if (Object.is(this.left, node)) {
				this.left.parent = null;
				this.left = null;				
			}
			else if (Object.is(this.right, node)) {
				this.right.parent = null;
				this.right = null;
			}
			else throw new Error("passed node is not a child of this node")
		} catch (e) {
			alert( "passed node is not a child of this node" );
		  }
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		
		if (this.parent == null) {
			return
    }

		else if (this == this.parent.left) {			
			if (this.parent.parent) {
				
				if (this.parent == this.parent.parent.left) {
					this.parent.parent.left = this;					
				}
				else if (this.parent == this.parent.parent.right) {
					this.parent.parent.right = this;
				}	

				if (this.left) {
					this.parent.left = this.left;
				} 
				if (this.right) {
					this.parent.right = this.right;
				} 

        if (this.parent.right) {
					this.parent.right.parent = this;
					this.right = this.parent.right;
					this.left = this.parent;
        }				
        var three_node = this.parent.parent;
        this.parent.parent = this;
        this.parent = three_node;
        return;
			}


			if (this.left) {
				this.parent.left = this.left;
			} 
			if (this.right) {
				this.parent.right = this.right;
			} 
			if (this.parent.right) {
				this.parent.right.parent = this;
				this.right = this.parent.right;
				this.left = this.parent;
      }	
      var up = this.parent.parent;
			this.parent.parent = this;    
      this.parent = up;    
		} 

		else if (this == this.parent.right) {			
			if (this.parent.parent) {

				if (this.parent == this.parent.parent.left) {
					this.parent.parent.left = this;
				}
				else if (this.parent == this.parent.parent.right) {
					this.parent.parent.right = this;
				}	

				if (this.left) {
					this.parent.left = this.left;
				} 
				if (this.right) {
					this.parent.right = this.right;
				} 

				if (this.parent.left) {
					this.parent.left.parent = this;
					this.left = this.parent.left;
					this.right = this.parent;
				}	
        var three_node = this.parent.parent;
        this.parent.parent = this;
        this.parent = three_node;
        return;
			}
			
			if (this.left) {
				this.parent.left = this.left;
			} 
			if (this.right) {
				this.parent.right = this.right;
			} 

			if (this.parent.left) {
				this.parent.left.parent = this;
        this.left = this.parent.left;
        this.right = this.parent;
      }	
      var up = this.parent.parent;
			this.parent.parent = this;     
      this.parent = up;
    } 		
	}
}

module.exports = Node;
