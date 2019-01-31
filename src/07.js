
try {
   console.log(1);
   return;
   throw new Error();
}catch (e){

}finally {
    console.log(2);
}

// 1, 2