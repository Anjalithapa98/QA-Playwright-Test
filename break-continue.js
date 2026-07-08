for (let i = 0; i < 10; i++) {
    if (i===3)break;
    console.log(i);
}
//0,1,2

for (let i = 0; i < 10; i++) {
    if (i===3)continue;
    console.log(i);
}
//0,1,2,4,5,6,7,8,9