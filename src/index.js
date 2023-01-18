class App {
  start() {
    // Helping function 
    function swap(arr, small, big) {
      let temp = arr[small];
      arr[small] = arr[big];
      arr[big] = temp;
    }

    // Bubble Sort implementation
    function bubbleSort(arr) {
      let n = arr.length;
      let i, j;
      for (i = 0; i < n-1; i++)
      {
        for (j = 0; j < n-i-1; j++)
        {
          if (arr[j] > arr[j+1])
          {
            setTimeout(helper(arr, j), 6000);
          }
        }
      }
    }

    function helper(arr, j){
      swap(arr,j,j+1);
            let first = document.getElementById(arr[j]);
            let second = document.getElementById(arr[j+1]);
            first.id = arr[j+1];
            second.id = arr[j];
            first.style.height = arr[j+1]*20 + "px";
            second.style.height = arr[j]*20 + "px";
    }

    // Merge Sort implementation
    function partition(arr, low, high) {
      let pivot = arr[high];
      let i = (low - 1);
      for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
          i++;
          swap(arr, i, j);
        }
      }
      swap(arr, i + 1, high);
      return (i + 1);
    }

    function quickSort(arr, low, high) {
      if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
      }
    }

    // Selection Sort implementation
    function selectionSort(arr) {
      let n = arr.length;
      let i, j, min_idx;
      for (i = 0; i < n-1; i++)
      {
        min_idx = i;
        for (j = i + 1; j < n; j++)
          if (arr[j] < arr[min_idx])
            min_idx = j;
          swap(arr,min_idx, i);
      }
    }

    // example array 
    const testArray = [10, 2, 7, 9, 1, 5, 3, 8, 4, 6];

    // Display initial array
    function displayArray(arr) {
      const containerArr = document.getElementById("arrayDisplay");
      for (let i=0; i<arr.length; i++) {
        let elem = document.createElement("div"); 
        elem.id = arr[i];
        elem.className = "arrayElem";
        elem.style.height = arr[i]*20 + "px";
        containerArr.appendChild(elem);
        let space = document.createElement("div");
        space.className = "spaceWhite";
        containerArr.appendChild(space);
      }
    }
    displayArray(testArray);
  }
}

window.onload = () => new App().start();