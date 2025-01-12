function quickSort(arr, low , high){
    if(low < high){
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}

function bubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n-i-1; j++){
            if(arr[j]> arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }}
}

function mergeSort(arr, low , high){
    if(low < high){
        let mid =Math.floor ((high+low)/2);
        mergeSort(arr,low,mid )
        mergeSort(arr,mid+1, high)
        merge(arr , low , mid , high)
}
}   

function insertSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i-1;
        while (j >= 0 && key < arr[j]) {
            arr[j+1]= arr[j];
            j--;
        }
    arr[j+1]=key;
    }
}

function swap (arr , i , j ){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function merge(arr, low, mid, high) {
    let arr1 = new Array(mid - low + 1); // Temporary array 1
    let arr2 = new Array(high - mid);    // Temporary array 2

    // Copy elements into temporary arrays
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr[low + i];
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = arr[mid + 1 + i];
    }

    let i = 0, j = 0, k = low;

    // Merge the two arrays back into the original array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }

    // Copy any remaining elements from arr1
    while (i < arr1.length) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    // Copy any remaining elements from arr2
    while (j < arr2.length) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}
function partition(arr, low, high) {
    let pivot = arr[low]; // Pivot is the first element
    let i = low + 1;
    let j = high;

    while (i <= j) {
        // Move `i` to the right until we find an element greater than the pivot
        while (i <= j && arr[i] <= pivot) {
            i++;
        }

        // Move `j` to the left until we find an element smaller than or equal to the pivot
        while (i <= j && arr[j] > pivot) {
            j--;
        }

        // Swap out-of-place elements
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Place the pivot in its correct position
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j; // Return the index of the pivot
}



let arr = [5,4,9,32,8,5];
let n = arr.length;
let low = 0;
let high = n-1;
quickSort(arr, low , n-1)
console.log(arr);