def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

def merge_sort(arr, low, high):
    if low < high:
        mid = (high + low) // 2
        merge_sort(arr, low, mid)
        merge_sort(arr, mid + 1, high)
        merge(arr, low, mid, high)

def insert_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

def merge(arr, low, mid, high):
    # Create temporary arrays
    arr1 = [0] * (mid - low + 1)
    arr2 = [0] * (high - mid)

    # Copy data to temporary arrays
    for i in range(mid - low + 1):
        arr1[i] = arr[low + i]
    for i in range(high - mid):
        arr2[i] = arr[mid + 1 + i]

    # Merge the temporary arrays back into the original array
    i = 0
    j = 0
    k = low

    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            arr[k] = arr1[i]
            i += 1
        else:
            arr[k] = arr2[j]
            j += 1
        k += 1

    # Copy any remaining elements from arr1
    while i < len(arr1):
        arr[k] = arr1[i]
        i += 1
        k += 1

    # Copy any remaining elements from arr2
    while j < len(arr2):
        arr[k] = arr2[j]
        j += 1
        k += 1

def partition(arr, low, high):
    pivot = arr[low]
    i = low + 1
    j = high

    while i <= j:
        # Find an element on the left that should be on the right
        while i <= j and arr[i] <= pivot:
            i += 1

        # Find an element on the right that should be on the left
        while i <= j and arr[j] > pivot:
            j -= 1

        # Swap out-of-place elements
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]

    # Place the pivot in its correct position
    arr[low], arr[j] = arr[j], arr[low]
    return j  # Return the final pivot position


arr = [5, 4, 9, 32, 8, 5]
n = len(arr)
low = 0 
high = n - 1
merge_sort(arr,low,high)
print(arr)
