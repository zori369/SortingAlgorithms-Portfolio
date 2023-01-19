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

    // Quick Sort implementation
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

    // Get and create initial array
    var arrInitial = [];

    function getArray() {
      const elemCount = document.getElementById("countElements").value;
      let elemAll = document.getElementById("elements").value;

      if (elemCount == 0 || elemAll == 0) {
        alert("Please enter needed information.");
      }
      else if (elemAll/(10**elemCount)>1 || elemAll/(10**(elemCount-1))<1) {
        alert("Please enter the right amount of elements.");
      }
      else {
        for (let i = elemCount-1; i>=0; i--) {
          arrInitial[i] = elemAll%10;
          elemAll = Math.floor(elemAll/10);
        }
      }
    }

    function createArray() {
      const allContainers = document.getElementsByClassName("data-sorting__algorithm");
      for (let i = 0; i < allContainers.length; i++) {
        allContainers[i];
      }
    }

    document.getElementById("submit").addEventListener("click", getArray);
  }
}

window.onload = () => new App().start();