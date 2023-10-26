import React from 'react'

export function chunkArray(array, size) {
    const chunkedArray = [];

    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
  
    return chunkedArray;
}
