# Stable Marriage Problem

This repository contains an implementation of the **Stable Marriage Problem** using the Gale-Shapley algorithm. The problem is solved by matching men and women based on their preference lists, ensuring that no two individuals would prefer each other over their current partners.

## Table of Contents

- [Introduction](#introduction)
- [Algorithm Overview](#algorithm-overview)
- [How to Run](#how-to-run)
- [Example](#code-overview)

## Introduction

The Stable Marriage Problem is a classic algorithmic problem that attempts to find a stable matching between two sets of individuals—typically, men and women—where each individual has ranked the members of the opposite set based on their preferences. A matching is considered "stable" when there are no two people who would both prefer each other over their current partners.

## Algorithm Overview

The algorithm follows these steps:

1. Every man proposes to the woman they prefer the most (according to their preference list).
2. Each woman either accepts the proposal if she is not currently engaged, or rejects it if she prefers her current partner.
3. If a woman receives multiple proposals, she will accept the proposal from the man she prefers the most.
4. The process continues until all individuals are married.

This implementation ensures that the solution is stable, meaning no one can break the pairing by swapping partners.

## Code Overview

### Men and Women Definition

In the code, `men` and `women` are defined as JavaScript objects. Each man has a list of preferences and a record of whether he is married. Similarly, each woman has her own preferences and marriage status.

```javascript
const men = {
    'A': { preferences: ['Y', 'X', 'Z', 'H'], marriedTo: null, isMarried: false, proposalIndex: 0 },
    'B': { preferences: ['Z', 'H','Y', 'X'], marriedTo: null, isMarried: false, proposalIndex: 0 },
    'C': { preferences: ['Y', 'Z' , 'H', 'X'], marriedTo: null, isMarried: false, proposalIndex: 0 },
    'D': { preferences: ['Z', 'H' , 'Y', 'X'], marriedTo: null, isMarried: false, proposalIndex: 0 }    
};

const women = {
    'X': { preferences: ['A', 'B', 'C', 'D'], marriedTo: null, isMarried: false },
    'Y': { preferences: ['B', 'A', 'C', 'D'], marriedTo: null, isMarried: false },
    'Z': { preferences: ['A', 'B', 'C', 'D'], marriedTo: null, isMarried: false },
    'H': { preferences: ['D', 'C', 'B', 'A'], marriedTo: null, isMarried: false }
};
```

## How to Run

To run the algorithm, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/pouyarahmani/stable-marriage-problem-js.git
   ```
