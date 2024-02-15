/*alert( null || 2 || undefined ); // it will show us 2
alert( alert(1) || 2 || alert(3) ); // it will show us 1, then 2
alert(1 && null && 2); // it will show null
alert( alert(1) && alert(2) ); // it will show 1, and unidentified*/
/*alert( null || 2 && 3 || 4 ); // it iwll show 3
if (age >= 14 && age <= 90)
if (age < 14 || age > 90)*/
if (-1 || 0) alert( 'first' ); // this one will show with the word first
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); // and this one will show with the word third
