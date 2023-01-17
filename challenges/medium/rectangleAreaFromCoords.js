/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/

function rectangleAreaFromCoords(points) {
  let height = []
  let width = []
  for (let i in points) {
   
      height.push(points[i].x)
      width.push(points[i].y)
    
  } return (Math.max(...height) - Math.min(...height))*(Math.max(...width) - Math.min(...width))
  }

module.exports = rectangleAreaFromCoords
