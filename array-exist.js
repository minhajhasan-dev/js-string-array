function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "Please provide an array of string";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = [
  "kamrul hasan khan",
  "kamal ibne yousuf",
  "sima sima sima sima sima sima sima",
  "lion",
];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

if (friends.indexOf("lion") != -1) {
  //   console.log("lion exist");
}
if (friends.includes("lion") == true) {
  //   console.log("Lion Exist using includes");
}

// concat
const first = [1, 2, 3];
const second = [4, 5, 6, 7];
const combined = first.concat(second);
console.log(combined);
