    function sort(arrays) {
        for(var i=0; i<arrays.length - 1; i++){
            let isSwap = false;
            for(var j=0; j<arrays.length - i - 1; j++){
                // exchange
                if(arrays[j] > arrays[j+1]){
                    const tmp = arrays[j];
                    arrays[j] = arrays[j+1];
                    arrays[j+1] = tmp;
                    isSwap=true;
                }
            }
            if(!isSwap) break; //end of swap
        }
        return arrays;
    }


