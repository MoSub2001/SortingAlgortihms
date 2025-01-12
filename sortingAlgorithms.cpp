#include <iostream>

using namespace std;

void merge(int  arr[] , int low , int mid , int high ){
    int *arr1 = new  int [ mid - low+1];
    int  *arr2 = new int[high - mid];
     int s1 = mid - low + 1; 
    int s2 = high - mid;  
    for (int i = 0; i < s1; i++) {
        arr1[i] = arr[i+low];
    }
    for (int i = 0; i < s2; i++) {
        arr2[i] = arr[i+mid+1];
    }
    int i = 0, j = 0, k = low;
    while(i<(mid - low+1) && j<(high-mid)){
        if(arr1[i]<=arr2[j]){
            arr[k]=arr1[i];
            i++;
        }
        else{
            arr[k]=arr2[j];
            j++;
        }
        k++;            
        }
        while(i<(mid-low+1)){
            arr[k]=arr1[i];
            i++;
            k++;
        }
        while(j<(high-mid)){
            arr[k]=arr2[j];
            j++;
            k++;
        }

    }

void swap (int arr[] , int i , int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
}

int partition(int array[] , int low, int high) {
        int pivot = array[low]; // Choose the first element as the pivot
        int i = low + 1; // Start from the next element
        int j = high; // Start from the last element

        while (i <= j) {
            while (i <= j && array[i] <= pivot) { // Find element > pivot
                i++;
            }
            while (i <= j && array[j] > pivot) { // Find element <= pivot
                j--;
            }
            if (i < j) { // Swap out-of-place elements
               swap(array, i, j);
            }
        }

        // Place the pivot in its correct position
        swap(array , low , j);
        return j; // Return the final pivot position
    }

void quickSort(int arr[], int low, int high){
    if(low < high){
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}

void bubbleSort(int arr[],int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n - 1; j++){
                if(arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

void mergeSort(int arr[],int low ,int high){
    if(low<high){
        int mid =(int) ((low+high)/2);
        mergeSort(arr, low , mid);
        mergeSort(arr, mid+1 , high);
        merge(arr, low , mid ,high);
    }

}

void insetSort(int arr[] , int n){
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i-1;
        while (j >= 0 && key < arr[j]) {
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1]=key;
    }
}    

int main()
{
    int arr [] = {4, 11, 9, 3, 7 , 2};
    int n = sizeof(arr) / sizeof(*arr);
    insetSort(arr, n);
    for (int i = 0; i < n; i++)
    {
        cout<<arr[i]<<" ";
    }
    
}
