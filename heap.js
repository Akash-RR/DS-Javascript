const { log } = console;
class maxHeap{
    constructor(){
        this.insert = function(node){
            store.push(node);
            bottomUpHeapify(store);    
        }
        this.remove = function(){
            let element = store[0];
            store[0]=store.pop();
            topDownHeapify(store, 0);
            return element;
        }
        this.print = function(){
            let str = ""
            for(const x of store){
                str += x + " ";
            }
            log("Heap => ", str);
        }
        let store = [];
        let bottomUpHeapify = function (store){
            let current = store.length-1;
            let previous = prev(current);
            while(store[current]>store[previous]){
                let temp = store[previous];
                store[previous] = store[current];
                store[current] = temp;
                current=previous;
                previous = prev(current);
            }
        }
        let prev = function(current){
            if (current%2==0){
                return (current/2)-1;
            }
            else{
                return Math.floor(current/2);
            }
        }
        let topDownHeapify = function (store, pos){
            let [max, dir] = store[pos*2+1]>store[pos*2+2] ? [store[pos*2+1], 1] : [store[pos*2+2], 2]
            if(max > store[pos]){
                let temp = store[pos*2+dir];
                store[pos*2+dir] = store[pos];
                store[pos] = temp;
                topDownHeapify(pos*2+dir);
            }
        }
    }
}


const myHeap = new maxHeap();
myHeap.insert(2);
myHeap.insert(3);
myHeap.insert(4);
myHeap.insert(5);
myHeap.insert(8);
myHeap.insert(9);
myHeap.insert(6);
myHeap.insert(7);
myHeap.print()
log(myHeap.remove())
myHeap.print()
myHeap.insert(10);
log(myHeap.remove())