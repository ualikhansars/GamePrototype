export const units = [];
export let currentlyChosenUnit = null;
export const assignCurrentlyChosenUnit = (unit) => {
    // check unit
    if (unit) {
        currentlyChosenUnit = unit;
    }
    else {
        currentlyChosenUnit = null;
    }
};
//# sourceMappingURL=unitsStore.js.map