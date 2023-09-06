// Iteration 1: Names and Input

/*const hacker1 = "Kerem";
console.log("The driver's name is " + hacker1);
const hacker2 = "Kerem";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker2.length + " characters!"
  );
}

// Iteration 3: Loops

let hacker1WithSpace = "";
let hacker2WithSpace = "";
let index = 0;

do {
  hacker1WithSpace += hacker1[index] + " ";
  index++;
} while (index < hacker1.length);

index2 = hacker2.length - 1;

do {
  hacker2WithSpace += hacker2[index2];
  index2--;
} while (index2 >= 0);

console.log(hacker1WithSpace, hacker2WithSpace);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}*/

//BONUS

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies est sit amet orci vestibulum rutrum. In mollis quam at sodales egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate aliquam sem et aliquet. Nam consequat metus ac suscipit sagittis. Nunc cursus feugiat congue. Praesent consequat vestibulum ipsum non fringilla. Quisque tristique mi at lacus fermentum, bibendum congue ex malesuada. Donec in elit quis massa fermentum scelerisque eget at sem. Phasellus tempus, neque nec ultricies feugiat, eros leo efficitur nisi, eget commodo enim elit nec sapien. Mauris gravida egestas convallis." +
  " Vivamus id sapien eget risus rutrum feugiat. Donec cursus tellus lobortis nunc ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris at pharetra velit. Donec venenatis convallis urna eget porttitor. Phasellus feugiat, nunc quis ultricies tempor, augue nisl pulvinar massa, sit amet dignissim arcu mi vitae felis. Ut magna ex, pharetra eget rutrum id, dictum nec quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pellentesque varius risus quis semper. Etiam vel ante vel purus euismod congue. Donec fermentum aliquet nulla eu hendrerit. Sed nec enim erat. Praesent purus mauris, vestibulum et erat et, placerat dictum metus. In metus eros, eleifend non lorem sodales, euismod elementum nunc." +
  " Pellentesque nec feugiat dolor. Fusce malesuada lacinia lacus, at ultricies erat lacinia eu. Fusce eget tellus justo. In sed odio ac arcu pellentesque blandit. Pellentesque congue ligula quis dolor dictum, vitae molestie ipsum vestibulum. Aliquam at porta libero, id interdum quam. Ut ullamcorper pulvinar massa, in sollicitudin risus. Etiam eget sapien bibendum, commodo magna id, ullamcorper eros. Pellentesque hendrerit tincidunt ex, nec tempor eros vestibulum vel. Maecenas finibus dignissim magna a aliquet. Phasellus ornare, lacus non efficitur sodales, tortor enim volutpat risus, ut convallis diam lacus a eros. Sed ullamcorper sodales diam, vitae ullamcorper orci scelerisque quis.";

/* let numberOfSpace = longText.split(" ").length + 1;

console.log(numberOfSpace);

let numberOfEt = longText.split(" et ").length;

console.log(numberOfEt); */

//BONUS 2

let phraseToCheck = "A man, a plan, a canal, Panama!a";

const replaced = phraseToCheck.replace(/[^a-z]/gi, "");

//console.log(replaced);

for (let index = 0; index <= replaced.length / 2; index++) {
  const fromTheTop = replaced[index].toLowerCase();
  const fromTheBottom = replaced[replaced.length - index - 1].toLowerCase();

  if (fromTheTop === fromTheBottom) {
    continue;
  } else {
    console.log("Not a Pandomime");
    break;
  }
}
