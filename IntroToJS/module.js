import {hello,myVar,myFunc} from './index' // Named Imports
import * as anything from './index' // Not Recommended
import User from './index' // Default Import, no cur

/*
   GFG (parent Folder ../index.js ) ---> IntroToJS (Main Folder ./ ) --> JS (Child Folder ./JS/index.js)
 */

anything.myVar;

hello()