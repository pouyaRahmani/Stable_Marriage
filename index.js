// Define men and women with necessary properties
const men = {
  A: {
    preferences: ["Y", "X", "Z", "H"],
    marriedTo: null,
    isMarried: false,
    proposalIndex: 0,
  },
  B: {
    preferences: ["Z", "H", "Y", "X"],
    marriedTo: null,
    isMarried: false,
    proposalIndex: 0,
  },
  C: {
    preferences: ["Y", "Z", "H", "X"],
    marriedTo: null,
    isMarried: false,
    proposalIndex: 0,
  },
  D: {
    preferences: ["Z", "H", "Y", "X"],
    marriedTo: null,
    isMarried: false,
    proposalIndex: 0,
  },
};

const women = {
  X: { preferences: ["A", "B", "C", "D"], marriedTo: null, isMarried: false },
  Y: { preferences: ["B", "A", "C", "D"], marriedTo: null, isMarried: false },
  Z: { preferences: ["A", "B", "C", "D"], marriedTo: null, isMarried: false },
  H: { preferences: ["D", "C", "B", "A"], marriedTo: null, isMarried: false },
};

const stableMarriage = (men, women) => {
  let freeMen = Object.keys(men); // List of free men

  // Function to check if a woman prefers a new man over her current partner
  const prefersNewMan = (woman, newMan) => {
    const womanPref = women[woman].preferences;
    const currentMan = women[woman].marriedTo;
    return womanPref.indexOf(newMan) < womanPref.indexOf(currentMan);
  };

  // Loop until all men are married
  while (freeMen.length > 0) {
    let man = freeMen[0];
    let manObj = men[man];
    let woman = manObj.preferences[manObj.proposalIndex]; // The woman he proposes to based on proposalIndex
    let womanObj = women[woman];

    if (!womanObj.isMarried) {
      // If the woman is free, engage them
      manObj.isMarried = true;
      manObj.marriedTo = woman;
      womanObj.isMarried = true;
      womanObj.marriedTo = man;
      freeMen.shift();
    } else {
      // Woman is already engaged, check her preferences
      if (prefersNewMan(woman, man)) {
        let currentMan = womanObj.marriedTo;
        // The woman prefers the new man, switch engagement
        men[currentMan].isMarried = false;
        men[currentMan].marriedTo = null;
        freeMen.push(currentMan); // Previous partner becomes free

        manObj.isMarried = true;
        manObj.marriedTo = woman;
        womanObj.marriedTo = man;
        freeMen.shift();
      }
    }
    manObj.proposalIndex++;
  }

  console.log("Stable matches:");
  for (const woman in women) {
    console.log(`${woman} is married to ${women[woman].marriedTo}`);
  }
};

stableMarriage(men, women);
