function task4(arr) {
    max = arr[1];
    for (let i=0; i<=arr.length; ++i) {
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    return arr.indexOf(max)
}
