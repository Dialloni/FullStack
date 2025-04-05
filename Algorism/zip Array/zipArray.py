"""
-Given two arrays zip them together: Given [1,3,5],[2,4] return [1,3,5,2,4]. Do this without using any built in methods except push and pop()

-Array: Remove At. Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0). Given [1,2,3,4,5], 2 return and  remove the value 3

"""

arr1 = [  1,3,5];
arr2 = [2,4];
zipped_Array = zip(arr1,arr2);
print(zipped_Array);

def zipped_arrays(arr1,arr2):
    result = []
    for i in range (len(arr1)):
        result.append(arr1[i]);
    for i in range(len(arr2)):
        result.append(arr2[i]);
    return result


arr1 = [  1,3,5];
arr2 = [2,4];

NobuiltArray = zipped_arrays(arr1, arr2)

print(NobuiltArray)