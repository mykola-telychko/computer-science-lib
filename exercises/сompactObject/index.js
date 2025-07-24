var compactObject = function(obj) {
    if (obj === null) {
        return null;
    }

    if (Array.isArray(obj)) {
        const newArr = [];
        for (let i = 0; i < obj.length; i++) {
            const compactedValue = compactObject(obj[i]);
            if (Boolean(compactedValue)) {
                newArr.push(compactedValue);
            }
        }
        return newArr;
    }

    if (typeof obj === 'object') {
        const newObj = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const compactedValue = compactObject(obj[key]);
                if (Boolean(compactedValue)) {
                    newObj[key] = compactedValue;
                }
            }
        }
        return newObj;
    }

    return obj;
};

const obj1 = [null, 0, false, 1];
const result1 = compactObject(obj1);
console.log(`input: ${JSON.stringify(obj1)}`);
console.log(`output: ${JSON.stringify(result1)}`);

const obj2 = {"a": null, "b": [false, 1]};
const result2 = compactObject(obj2);
console.log(`input: ${JSON.stringify(obj2)}`);
console.log(`output: ${JSON.stringify(result2)}`);

const obj3 = [null, 0, 5, [0], [false, 16]];
const result3 = compactObject(obj3);
console.log(`input: ${JSON.stringify(obj3)}`);
console.log(`output: ${JSON.stringify(result3)}`);

const obj4 = {a: 1, b: 0, c: "", d: null, e: undefined, f: NaN, g: true};
const result4 = compactObject(obj4);
console.log(`input: ${JSON.stringify(obj4)}`);
console.log(`output: ${JSON.stringify(result4)}`);

const obj5 = [0, "", {a: 0, b: "hello"}, [null, 5]];
const result5 = compactObject(obj5);
console.log(`input: ${JSON.stringify(obj5)}`);
console.log(`output: ${JSON.stringify(result5)}`);

const obj6 = {};
const result6 = compactObject(obj6);
console.log(`input: ${JSON.stringify(obj6)}`);
console.log(`output: ${JSON.stringify(result6)}`);

const obj7 = [];
const result7 = compactObject(obj7);
console.log(`input: ${JSON.stringify(obj7)}`);
console.log(`output: ${JSON.stringify(result7)}`);

const obj8 = 123;
const result8 = compactObject(obj8);
console.log(`input: ${JSON.stringify(obj8)}`);
console.log(`output: ${JSON.stringify(result8)}`);

const obj9 = 0;
const result9 = compactObject(obj9);
console.log(`input: ${JSON.stringify(obj9)}`);
console.log(`output: ${JSON.stringify(result9)}`);
