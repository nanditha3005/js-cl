let employees = [
    { eid: 1, ename: "Rahul", gender: "male" },
    { eid: 2, ename: "Priya", gender: "female" },
    { eid: 3, ename: "Amit", gender: "male" },
    {}, 
    { eid: 5, ename: "Sneha", gender: "female" }
];

for (let emp of employees) {
    if (Object.keys(emp).length === 0) {
        console.log("object is empty");
    } else {
        console.log("object is not empty");
    }
}

