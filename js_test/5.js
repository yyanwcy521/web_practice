Array.prototype.dictinct = function() {
    let afrer_arr = [];
    for(var i=0;i<this.length;i++){
        for(var j=i+1;j<this.length;){
            if(this[i] === this[j]){
                // console.log(this.splice[j,1]);
                afrer_arr.push(this.splice(j,1)[0]);
            }
            else{
                j++;
            }
        }
    }
    return afrer_arr;
}
console.log([2,1,3,4,5,2,2,2,6,7,8].dictinct());