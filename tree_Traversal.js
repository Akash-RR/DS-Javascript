const { log } = console;
class treeNode {
    constructor(data, treeNodeLeft, treeNodeRight) {
        this.data = data;
        this.leftNode = treeNodeLeft;
        this.rightNode = treeNodeRight;
    }
}

function traverse(rootNode, iterOrder) {
    let current = 0;
    let stack = [];
    const iterInOrder = (cNode) => {
        if(cNode.leftNode != null){
            iterInOrder(cNode.leftNode);
        }
        stack.push(cNode);
        if(cNode.rightNode != null){
            iterInOrder(cNode.rightNode);
        }
    }
    const iterPreOrder = (cNode) => {
        stack.push(cNode);
        if(cNode.leftNode != null){
            iterPreOrder(cNode.leftNode);
        }
        if(cNode.rightNode != null){
            iterPreOrder(cNode.rightNode);
        }
    }
    const iterPostOrder = (cNode) => {
        if(cNode.leftNode != null){
            iterPostOrder(cNode.leftNode);
        }
        if(cNode.rightNode != null){
            iterPostOrder(cNode.rightNode);
        }
        stack.push(cNode);
    }
    eval(iterOrder)(rootNode);
    const iterable = {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if(stack.length > current){
                return { value : stack[current++].data }
            }
            else{
                return { done: true }
            }                       
        }
    };
    return iterable;
}

const tree = new treeNode("1", 
                new treeNode("2", 
                    new treeNode("4", null, null), 
                    new treeNode("5", null, null)), 
                new treeNode("3", 
                    new treeNode("6", null, null), 
                    new treeNode("7", null, null)));

const iterInOrder = traverse(tree, "iterInOrder");
log("In Order")
for(const x of iterInOrder){
    log(x);
}

const iterPreOrder = traverse(tree, "iterPreOrder");
log("Pre Order")
for(const x of iterPreOrder){
    log(x);
}

const iterPostOrder = traverse(tree, "iterPostOrder");
log("Post Order")
for(const x of iterPostOrder){
    log(x);
}
