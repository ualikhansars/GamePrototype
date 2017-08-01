export const unitsStore = {
  units: [],
  currentlyChosenUnit: null
}

export const assignCurrentlyChosenUnit = (unit) => {
  // check unit
  if(unit) {
      unitsStore.currentlyChosenUnit = unit;
  } else {
    unitsStore.currentlyChosenUnit = null;
  }

}
