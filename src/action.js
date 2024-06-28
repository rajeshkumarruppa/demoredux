export const deposit=(amount)=>{
    return{ type: "deposit", payload: amount }
}
export const withdraw=(amount)=>{
    return{ type: "withdraw", payload: amount }
}
export const updateName=(fullName)=>{
    return{ type: "nameUpdate", payload: fullName }
}
export const mobileUpdate=(mobile)=>{
    return {type:"mobileUpdate",payload:mobile}
}
