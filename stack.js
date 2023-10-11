function stack(){
    this.id = "";
    this.plates = [];

    this.stack = () => {
        this.plates.push("hello");
    };

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