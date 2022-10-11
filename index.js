let animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

let food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

let universes = [
	['🖤', 'DC',
   ['Superman', 'Batman', 'Wonder Woman']
  ],
	['❤️', 'Marvel',
   ['Iron Man', 'the Hulk', 'Black Widow']
  ]
]


function getInfo(array,title) {
  let copyArray = '';

  for (let i = 0; i < array.length; i++) {
    copyArray += `
                <tr>

                        <td>${array[i][0]}</td>
                        <td>${array[i][1]}</td>
                        <td>${array[i][2]}</td>
                  
                </tr>`
 }

 let ressult =  `
  <table>

        <caption>${title} info</caption>
        <tbody>
            ${copyArray}
        </tbody>

  <table>
  <br>`;

return  ressult.replaceAll(",","; ");
 
}



document.write( getInfo(animals, `Animals`));
document.write( getInfo(food, `Food`));
document.write( getInfo(universes, `Universes`));
