// Copyright 2013 Google Inc.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

suite('Path Benchmarks', function() {
  test('Path Benchmark - 0% Changed', function() {
    createAndObservePaths();
    mutatePathsAndDeliver(0);
  });

  test('Path Benchmark - 1% Changed', function() {
    createAndObservePaths();
    mutatePathsAndDeliver(1);
  });

  test('Path Benchmark - 5% Changed', function() {
    createAndObservePaths();
    mutatePathsAndDeliver(5);
  });

  test('Path Benchmark - 10% Changed', function() {
    createAndObservePaths();
    mutatePathsAndDeliver(10);
  });

  test('Path Benchmark - 20% Changed', function() {
    createAndObservePaths();
    mutatePathsAndDeliver(20);
  });
});

suite('Object Benchmarks', function() {
  test('Object Benchmark - 0% Changed', function() {
    createAndObserveObjects();
    mutateObjectsAndDeliver(0);
  });

  test('Object Benchmark - 1% Changed', function() {
    createAndObserveObjects();
    mutateObjectsAndDeliver(1);
  });

  test('Object Benchmark - 5% Changed', function() {
    createAndObserveObjects();
    mutateObjectsAndDeliver(5);
  });

  test('Object Benchmark - 10% Changed', function() {
    createAndObserveObjects();
    mutateObjectsAndDeliver(10);
  });

  test('Object Benchmark - 20% Changed', function() {
    createAndObserveObjects();
    mutateObjectsAndDeliver(20);
  });
});

suite('Array Benchmarks', function() {
  test('Array Benchmark - Push/Pop - 0% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(0, 'push', 'pop');
  });

  test('Array Benchmark - Push/Pop - 1% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(1, 'push', 'pop');
  });

  test('Array Benchmark - Push/Pop - 5% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(5, 'push', 'pop');
  });

  test('Array Benchmark - Push/Pop - 10% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(10, 'push', 'pop');
  });

  test('Array Benchmark - Push/Pop - 20% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(20, 'push', 'pop');
  });

  test('Array Benchmark - Unshift/Shift - 0% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(0, 'unshift', 'shift');
  });

  test('Array Benchmark - Unshift/Shift - 1% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(1, 'unshift', 'shift');
  });

  test('Array Benchmark - Unshift/Shift - 5% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(5, 'unshift', 'shift');
  });

  test('Array Benchmark - Unshift/Shift - 10% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(10, 'unshift', 'shift');
  });

  test('Array Benchmark - Unshift/Shift - 20% Changed', function() {
    createAndObserveArrays();
    mutateArraysAndDeliver(20, 'unshift', 'shift');
  });
});