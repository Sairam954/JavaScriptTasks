function partitionOn(pred, items) {
   let trueItems=items.filter(pred);
   let falseItems=[];
   for(let i=0; i < items.length ;i++){
     if(!pred(items[i])){
         falseItems.push(items[i]);
        } 
      }
     items.length=0;
     items.push.apply(items,falseItems.concat(trueItems));
    
     return falseItems.length;
}