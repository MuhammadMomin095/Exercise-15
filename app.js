var guest_list = ['ayesha', 'bilal', 'burhan', 'mantisha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n');
}
var not_present = 'Burhan';
var new_guest = 'Feroz Khaan';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n');
}
console.log("Mr, ".concat(not_present, " will not coming tomorrow dinner. "));
