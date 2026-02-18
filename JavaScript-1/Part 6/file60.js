// const cart = {
//     items: [],

//     addItems: function(item) {
//         this.items.push(item);
//     },

//     showItems: function() {
//         console.log(this.items);
//     }
// };

// cart.addItems("Laptop");
// cart.addItems("Desktop");
// cart.showItems();


const cart = {
    items: [],

    addItems(item) {
        this.items.push(item);
    },

    showItems() {
        console.log(this.items);
    }
};
cart.addItems("Laptop");
cart.addItems("Desktop");
cart.showItems();
