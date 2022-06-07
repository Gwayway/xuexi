
function smartRepeat(str) {
    let rest = str;
    let index = 0;
    let astStack = [];
    const startEx = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/
    const endEx = /^\<\/([a-z]+[1-6]?)\>/
    const textEX = /^\>(\w*\n?\s*)\</
    while (index < str.length - 1) {
        rest = str.substring(index);
        console.log(rest + '\n');
        if (startEx.test(rest)) {

            const tag = rest.match(startEx)[1];
            console.log(`命中<${tag}>`, tag.length);
            const attrs=rest.match(startEx)[2];
            const attrsLen=attrs!=null?attrs.length:0;

            astStack.push({
                tag,
                attrs:parseAttrsString(attrs),
                children: []
            });
            index += tag.length +attrsLen+ 1;



        } else if (endEx.test(rest)) {
            const tag = rest.match(endEx)[1];
            console.log(`命中</${tag}>`, tag.length);
            //标签是否匹配
            if (tag !== astStack[astStack.length - 1].tag) return;
            if (astStack.length > 1) {
                const ch = astStack.pop();
                astStack[astStack.length - 1].children.push(ch);
            }
            index += tag.length + 3;


        } else if (textEX.test(rest)) {
            let text = rest.match(textEX)[1];
            console.log('三', `命中>${text}<`, text.length);
            console.log(text);
            astStack[astStack.length - 1].text = text;


            index += text.length + 1;
        } else {
            console.log('非法', rest);
            return;


        }


    }
    console.log(astStack);
    return astStack;

}

function parseAttrsString(str) {

    if (str===undefined) return [];
    let check=false;
    let index=0;
    let result=[];
    for (let i = 0; i < str.length; i++) {
        let char=str[i];
        if(char==='"'){
            check=!check;
        }else if(char===' ' && !check){
            if(!/^\s*$/.test(str.substring(index,i))){
                result.push(str.substring(index,i).trim())
                index=i;
            }
        }
        
    }
    result.push(str.substring(index).trim());

    return result.map(item=>{
        let o=item.match(/^(.+)=(.+)$/);
        return {
            name:o[1],
            values:o[2]
        }
    });
};

smartRepeat(`<div class="asb fff" type="text">gdgdfgdfgd<ol>fsfsf<li>6557575</li><li>67856858</li></ol></div>`); 