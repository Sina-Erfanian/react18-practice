let friends_list = [
  "sina",
  {
    friends: ["mmd", "ali", "hasan"],
  },
];

console.log("Original", friends_list);

let friends_list_copy = JSON.parse(JSON.stringify(friends_list));

friends_list_copy[1].friends = ["adel", "puri"];

console.log("Copy", friends_list_copy);
