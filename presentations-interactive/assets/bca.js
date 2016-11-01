module.exports = `var obj = {
    name: "MJ"
};

function getName() {
    return this.name
}

//How to call the function with context that have "name" property?
//Obviously obj.getName() is not going to work`