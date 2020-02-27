/*This program adds commas to an integer in the appropriate positions.*/

function addCommas(stringArr)
{

    let finalString = '';
    let count = 1;

    for(i = stringArr.length - 1; i >=0;i--)
    {
        finalString = stringArr[i] + finalString;
        console.log(finalString);

        if(count % 3 === 0)
        {
            finalString = "," + finalString;
        }

        count++;

    }

    return finalString;

}

let result = addCommas('83456278941');

console.log(`The result is ${result}`);

/*
1
41 
941
8,941
78,941
278,941
6,278,941
56,278,941
456,278,941
3,456,278,941
83,456,278,941
The result is 83,456,278,941
*/
