function stack(plate){
    this.id = "";
    this.plates = [];

    this.stack = () => {
        this.plates.push(plate);
    };
    // Last in First out (LIFO)
    this.unstack = () => {
        this.plates.pop();
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