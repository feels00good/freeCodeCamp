/* JavaScript Algorithms and Data Structures Projects: 
* Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

// This is probably the ugliest solution anyone could ever come up with:)

 
 function checkCashRegister(price, cash, cid) {
    let chkchg = 0; 
  
    let resArr = [];
    let myArr = [];
    let message;
    let count = 0;
    let changedue = cash - price;
    let cashback = 0,
        total = 0,
        q100s = cid[8][1] / 100,
        q20s = cid[7][1] / 20,
        q10s = cid[6][1] / 10,
        q5s = cid[5][1] / 5,
        q1s = cid[4][1]/ 1,
        q025s = cid[3][1] / 0.25,
        q010s = cid[2][1] / 0.10,
         // Math.round used to get rid of random rounding errors due to floating point weirdness in javascript 
        q005s = Math.round(cid[1][1] / 0.05),
        q001s = cid[0][1] / 0.01,
        curr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
 
        // Total cid
            for (let x = cid.length-1; x >= 0; x--) {
                total += cid[x][1];  
            }
        // Check if amount of cid is insufficient or exactly equals to change due, show appropriate message
            if (changedue > total) {
                message = {status: "INSUFFICIENT_FUNDS", change: []};
                return(message);
                console.log(message);
                
            } else if (changedue == total) {
                message = {status: "CLOSED", change: cid};
                return(message);
                console.log(message);

        // Otherwise check the maximum amount for every given bill/coin that is less than  total change due and push that amount to an array
            } else {
                // I am pretty sure there is more elegant solution for this whole part...
                for(let t = 0; t < q100s; t++){
                    count = 0;
                    cashback = cashback + curr[8];
                    if (cashback > changedue) {
                        cashback = cashback - curr[8];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
              
                if (count != 0) {
                    resArr.push([ cid[8][0], curr[8] * count ]);
                    chkchg = chkchg + curr[8] * count; // You also need to keep track of total amount pushed to an array
                }
                
                for(let t = 0; t < q20s; t++){
                    count = 0;
                    cashback = cashback + curr[7];
                    if (cashback > changedue) {
                        cashback = cashback - curr[7];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[7][0], curr[7] * count ]);
                    chkchg = chkchg + curr[7] * count;
                }

                for(let t = 0; t < q10s; t++){
                    count = 0;
                    cashback = cashback + curr[6];
                    if (cashback > changedue) {
                        cashback = cashback - curr[6];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[6][0], curr[6] * count ]);
                    chkchg = chkchg + curr[6] * count;
                }
                
                for(let t = 0; t < q5s; t++){
                    count = 0;
                    cashback = cashback + curr[5];
                    if (cashback > changedue) {
                        cashback = cashback - curr[5];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[5][0], curr[5] * count ]);
                    chkchg = chkchg + curr[5] * count;
                }

                for(let t = 0; t < q1s; t++){
                    count = 0;
                    cashback = cashback + curr[4];
                    if (cashback > changedue) {
                        cashback = cashback - curr[4];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[4][0], curr[4] * count]);
                    chkchg = chkchg + curr[4] * count;
                }

                for(let t = 0; t < q025s; t++){
                    count = 0;
                    cashback = cashback + curr[3];
                    
                    if (cashback > changedue) {
                        cashback = cashback - curr[3];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[3][0], curr[3] * count]);
                    chkchg = chkchg + curr[3] * count;
                }


                for(let t = 0; t < q010s; t++){
                    count = 0;
                    cashback = cashback + curr[2];
               
                    if (cashback > changedue) {
                        cashback = cashback - curr[2];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[2][0], curr[2] * count ]);
                    chkchg = chkchg + curr[2] * count;
                }

                for(let t = 0; t < q005s; t++){
                    count = 0;
                    cashback = cashback + curr[1];
                    if (cashback > changedue) {
                        cashback = cashback - curr[1];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[1][0], curr[1] * count ]);
                    chkchg = chkchg + curr[1] * count;
                }
                
                for(let t = 0; t < q001s; t++){
                    count = 0;
                    cashback = cashback + curr[0];
                    // Math.round used to get rid of random rounding errors due to floating point weirdness in javascript 
                    if ((Math.round(cashback * 100) / 100) > changedue) { 
                        cashback = cashback - curr[0];
                        count = t;
                        break;
                    } else {
                        count = t+1;
                    }
                }
                if (count != 0) {
                    resArr.push([ cid[0][0], curr[0] * count ]);
                    chkchg = chkchg + curr[0] * count;
                     // Math.round used to get rid of random rounding errors due to floating point weirdness in javascript 
                    chkchg = Math.round(chkchg * 100) / 100;
                }
               // Here is where we compare amount we pushed to an array with change due
               // Inequality means we are unable to find exact change
               if (chkchg == changedue) { 
                message = {status: "OPEN", change: resArr};

                    } else {
                        message = {status: "INSUFFICIENT_FUNDS", change: []};
                    }  
                return(message);
                console.log(message);
            }   
  }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);