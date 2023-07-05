

import { report } from "./index1.js";
var arrd = 
[
  ['Shoulder', 'Rectus Femoris', 'Right', 'Flexion', 121, 30],
  ['Knee', 'Vastus Medialis', 'Right', 'Extension', 122, 610],
  // ['Wrist', 'Gastrocnemius', 'Left', 'Flexion', 124, 851],
  // ['Wrist', 'Vastus Medialis', 'Left', 'Extension', 124, 283],
  // ['Knee', 'Biceps Femoris', 'Left', 'Extension', 111, 1587],
  // ['Knee', 'Biceps Femoris', 'Right', 'Extension', 104, 286],
  // ['Hip', 'Gluteus Maximus', 'Right', 'Extension', 15, 434],
  // ['Hip', 'Adductor Longus', 'Right', 'Adduction', 7, 459],
  // ['Wrist', 'Gluteus Maximus', 'Left', 'Extension', 13, 0],
  ['Hip', 'Adductor Longus', 'Left', 'Abduction', 0, 1595],
  ['Hip', 'Adductor Longus', 'Left', 'Extension', 0, 1595],

]

report(arrd, 'female', 'bilateral');


