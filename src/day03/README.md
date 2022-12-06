# 🎄 Advent of Code 2022 - day 3 🎄

## Info

Task description: [link](https://adventofcode.com/2022/day/3)

## Notes

- When implementing part 2, I kept getting an error:
  `TypeError: 'sack1' is not iterable` which had me scratching my head over whether using `Array.from()` to create the `groups` array had some weird effect causing TypeScript to complain. It turns out that I had forgotten to limit the length of that array to the input divided by 3, so that loop was creating a bunch of empty sub-arrays inside of `groups`. Doh!
- My test data for part 2 was returning `88` instead of `70` and the culprit was because `r` appears twice in the first group's `sack1`. I had forgotten to add a `break` after meeting the `true` condition in that loop.
