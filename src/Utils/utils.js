const validateObject = async(object) => {
    let objArr = Object.keys(object);
    let result = false;
    if(objArr && objArr.length){
        objArr.forEach((item, index, arr) => {
            if(typeof item == "string"){
                result = isValidString(object[item]);
                if(!result) {
                    arr.length = index + 1;
                }
            }
        })
    }
    return result;
}

function isValidString(itemValue) {
    if(itemValue.trim() === ""){
        return false;
    } else {
        return true;
    }
}

export default validateObject;