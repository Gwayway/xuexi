export default function parseAttrsString(str) {
    if (str===undefined) return [];
    let check=true;
    let index=0;
    let result=[];
    for (let i = 0; i < str.length; i++) {
        if(str[i]==='"'){
            check=!check;
        }
        if(check){
            let attrStr=str.substring(index,i+1).split('=')
            result.push({name:attrStr[0]||undefined,values:attrStr[1]||undefined})
            index=i;
        }
        
    }
    return result;
};
