export let units = [];
export const assignCurrentlyChosenUnit = (unit) => {
  // check unit
  if(unit) {
      currentlyChosenUnit = unit;
  } else {
    currentlyChosenUnit = null;
  }

}
export let currentlyChosenUnit = null;
