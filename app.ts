let guest_list : string[] = ['ayesha','bilal','burhan','mantisha'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n')
}
let not_present : string = 'Burhan';
 let new_guest : string = 'Feroz Khaan';
 guest_list[2] = new_guest;
 for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n')
}
console.log(`Mr, ${not_present} will not coming tomorrow dinner. `)