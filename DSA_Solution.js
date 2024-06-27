//Calculating distance between two locations
function calculateDistance(loc1, loc2) {
    const [x1, y1] = loc1;
    const [x2, y2] = loc2;
    const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distance;
}

//Function to assign deliveries
function assignDeliveries(orders) {
    //Creating two arrays for Priority orders and Express orders
    let pOrders = orders.filter(order => order.type === "Priority");
    let eOrders = orders.filter(order => order.type === "Express");
    
    // Sorting orders by distance to priority orders
    eOrders.sort((a, b) => {
        let closestP1 = pOrders.reduce((minDist, pOrder) => {
            const dist = calculateDistance(a.location, pOrder.location);
            return Math.min(minDist, dist);
        }, Infinity);

        let closestP2 = pOrders.reduce((minDist, pOrder) => {
            const dist = calculateDistance(b.location, pOrder.location);
            return Math.min(minDist, dist);
        }, Infinity);

        return closestP1 - closestP2;
    });
    
    let deliveryAssignments = [];
    let deliveryBoy = [];

//Checking if order length is not -ve
    while (pOrders.length > 0 || eOrders.length > 0) {
        if (deliveryBoy.length < 3) {
            if (deliveryBoy.filter(order => order.type === "Priority").length < 1 && pOrders.length > 0) {
                deliveryBoy.push(pOrders.shift());
            } else if (deliveryBoy.length < 3 && eOrders.length > 0) {
                deliveryBoy.push(eOrders.shift());
            }
        } else {
            deliveryAssignments.push([...deliveryBoy]);
            deliveryBoy = [];
        }
    }

// Adding delivery boy to assignment array
    if (deliveryBoy.length > 0) {
        deliveryAssignments.push([...deliveryBoy]);
    }

    return deliveryAssignments;
}

const orders = [
  { type: "Express", location: [5, 3] },
  { type: "Express", location: [1, 2] },
  { type: "Express", location: [7, 8] },
  { type: "Priority", location: [4, 5] },
  { type: "Express", location: [2, 4] },
  { type: "Priority", location: [6, 6] },
];

const assignments = assignDeliveries(orders);
console.log(JSON.stringify(assignments));
