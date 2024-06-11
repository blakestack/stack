function stack(id){
    this.id = id;
    this.plates = [];

    this.stack = (plate) => {
        this.plates.push(plate);
    };
    // Last in First out (LIFO)
    this.unstack = () => {
        this.plates.pop();
    };

    this.peek = () => {
        return this.plates[this.plates.length - 1]
    };

    this.toString = () => {
        let stackString = "";

        this.plates.forEach(element => {
            stackString += element + " ";
        });

        stackString.slice(stackString.length - 1);

        console.log(stackString);
    };
}