class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

	/// WRITE ADDVERTEX METHOD HERE ///
    addVertex(vertex){
        if (this.adjacencyList[vertex] == null){ //havent been taken
            this.adjacencyList[vertex]=[];  //create new empty [] inside that vertex
            return true

        }return false; //already has the vertex stored
    }
	///////////////////////////////////

}



function test() {
    let myGraph = new Graph();
    myGraph.printGraph();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    {}

*/   