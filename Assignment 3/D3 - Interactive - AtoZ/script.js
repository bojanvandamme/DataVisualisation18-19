var inputArray = [];
var outputArray = [{}];

function addTo() {
	//Resets the inputArray
	inputArray.length = 0;

	//Creates an array with objects where each letter has a value which i can change when a person types
	outputArray = [
		{
			letter: "A",
			value: "0",
        },
		{
			letter: "B",
			value: "0",
        },
		{
			letter: "C",
			value: "0",
        },
		{
			letter: "D",
			value: "0",
        },
		{
			letter: "E",
			value: "0",
        },
		{
			letter: "F",
			value: "0",
        },
		{
			letter: "G",
			value: "0",
        },
		{
			letter: "H",
			value: "0",
        },
		{
			letter: "I",
			value: "0",
        },
		{
			letter: "J",
			value: "0",
        },
		{
			letter: "K",
			value: "0",
        },
		{
			letter: "L",
			value: "0",
        },
		{
			letter: "M",
			value: "0",
        },
		{
			letter: "N",
			value: "0",
        },
		{
			letter: "O",
			value: "0",
        },
		{
			letter: "P",
			value: "0",
        },
		{
			letter: "Q",
			value: "0",
        },
		{
			letter: "R",
			value: "0",
        },
		{
			letter: "S",
			value: "0",
        },
		{
			letter: "T",
			value: "0",
        },
		{
			letter: "U",
			value: "0",
        },
		{
			letter: "V",
			value: "0",
        },
		{
			letter: "W",
			value: "0",
        },
		{
			letter: "X",
			value: "0",
        },
		{
			letter: "Y",
			value: "0",
        },
		{
			letter: "Z",
			value: "0",
        }
    ];

	//Gets the value of the input of the textbox
	let arr = document.getElementById("userInput").value;

	//Makes an array of the input split by nothing (indicated by the empty string) that way every letter is a seperate array item
	inputArray = arr.split('');

	//Defines the length of the input array, aka amount of letters typed
	var arrayLength = inputArray.length;

	//Loops over the inputarray, and changes the value of each letter depending on if it's typed or not
	for (var i = 0; i < arrayLength; i++) {
		if (inputArray[i] == "a" || inputArray[i] == "A") {
			outputArray[0].value++;
		} else if (inputArray[i] == "b" || inputArray[i] == "B") {
			outputArray[1].value++;
		} else if (inputArray[i] == "c" || inputArray[i] == "C") {
			outputArray[2].value++;
		} else if (inputArray[i] == "d" || inputArray[i] == "D") {
			outputArray[3].value++;
		} else if (inputArray[i] == "e" || inputArray[i] == "E") {
			outputArray[4].value++;
		} else if (inputArray[i] == "f" || inputArray[i] == "F") {
			outputArray[5].value++;
		} else if (inputArray[i] == "g" || inputArray[i] == "G") {
			outputArray[6].value++;
		} else if (inputArray[i] == "h" || inputArray[i] == "H") {
			outputArray[7].value++;
		} else if (inputArray[i] == "i" || inputArray[i] == "I") {
			outputArray[8].value++;
		} else if (inputArray[i] == "j" || inputArray[i] == "J") {
			outputArray[9].value++;
		} else if (inputArray[i] == "k" || inputArray[i] == "K") {
			outputArray[10].value++;
		} else if (inputArray[i] == "l" || inputArray[i] == "L") {
			outputArray[11].value++;
		} else if (inputArray[i] == "m" || inputArray[i] == "M") {
			outputArray[12].value++;
		} else if (inputArray[i] == "n" || inputArray[i] == "N") {
			outputArray[13].value++;
		} else if (inputArray[i] == "o" || inputArray[i] == "O") {
			outputArray[14].value++;
		} else if (inputArray[i] == "p" || inputArray[i] == "P") {
			outputArray[15].value++;
		} else if (inputArray[i] == "q" || inputArray[i] == "Q") {
			outputArray[16].value++;
		} else if (inputArray[i] == "r" || inputArray[i] == "R") {
			outputArray[17].value++;
		} else if (inputArray[i] == "s" || inputArray[i] == "S") {
			outputArray[18].value++;
		} else if (inputArray[i] == "t" || inputArray[i] == "T") {
			outputArray[19].value++;
		} else if (inputArray[i] == "u" || inputArray[i] == "U") {
			outputArray[20].value++;
		} else if (inputArray[i] == "v" || inputArray[i] == "V") {
			outputArray[21].value++;
		} else if (inputArray[i] == "w" || inputArray[i] == "W") {
			outputArray[22].value++;
		} else if (inputArray[i] == "x" || inputArray[i] == "X") {
			outputArray[23].value++;
		} else if (inputArray[i] == "y" || inputArray[i] == "Y") {
			outputArray[24].value++;
		} else if (inputArray[i] == "z" || inputArray[i] == "Z") {
			outputArray[25].value++;
		}
	}

	//Deletes previous created d3 svg element to start fresh
	d3.select("svg").remove();

	//Creates d3 svg element
	var svg = d3.select("#svgElement").append("svg").attr("height", "600").attr("width", "1900");

	//Creates the bars for the "barchart"
	svg.selectAll("rect").data(outputArray).enter().append("rect")
		.attr("fill", "blue")
		.attr("height", function (d, i) {
			return d.value * 15;
		})
		.attr("width", "68.2692307692")
		.attr("x", function (d, i) {
			return 73.2692307692 * i;
		}).attr("y", function (d, i) {
			return 600 - (d.value * 15);
		});

	//Overlays the image for the perforated letters effect
	d3.selectAll('svg')
		.append('image')
		.attr('xlink:href', 'Overlay_White.png')
		.attr('height', '600')
		.attr('width', '1900')
}
