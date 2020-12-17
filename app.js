var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["SUPERUSER"] = 2] = "SUPERUSER";
})(Role || (Role = {}));
var person = {
    name: "Peter",
    age: 12,
    nickname: "P",
    hobbies: ["swimming", "soccer"],
    roles: Role.ADMIN
};
console.log(person);
