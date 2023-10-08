function stack(){
    this.id = "";
    this.plates = [];

    this.add = () => {
        this.plates.push("hello");
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