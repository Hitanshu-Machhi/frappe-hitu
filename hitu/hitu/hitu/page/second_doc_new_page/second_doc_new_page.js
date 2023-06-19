// import frappe
// from frappe import _;

frappe.pages['second-doc-new-page'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Second Doc New Page',
		single_column: true
	});

	page.set_title('New Page')

	page.set_indicator("Done", "green")

	let $btn = page.set_primary_action("New", () => frappe.msgprint("Clicked New"), "octicon octicon-plus")

	let $btnOne = page.set_secondary_action("Secondary Button", () => frappe.msgprint("Clicked Secondary"), "octicon octicon-plus")

	page.add_menu_item("Item 1", () => frappe.msgprint("Clicked Item 1"))
	page.add_menu_item("Item 2", () => frappe.msgprint("Clicked Item 2"))

	page.add_action_item("Save", () => frappe.msgprint("Clicked Save"))
	page.add_action_item("Delete", () => frappe.msgprint("Clicked Delete"))

	let field = page.add_field({
		label: "Status",
		fieldtype: "Select",
		fieldname: "status",
		options: [
			"Option 1",
			"Option 2",
			"Option 3"
		],
		change() {
			frappe.msgprint("Option Changed")
		}
	})

	$(frappe.render_template("second_doc_new_page", {})).appendTo(page.body);

	//   // Add event listeners to seat buttons
	//   const seatButtons = document.querySelectorAll('.seat');
	//   seatButtons.forEach((button) => {
	// 	button.addEventListener('click', () => {
	// 	  const selectedSeat = {
	// 		row: button.getAttribute('data-row'),
	// 		column: button.getAttribute('data-column')
	// 	  };
	// 	  // Update UI to reflect seat selection
	// 	  button.classList.toggle('selected');
	// 	  // Perform additional actions, such as updating hidden form fields
	// 	  document.getElementById('selected_seat_row').value = selectedSeat.row;
	// 	  document.getElementById('selected_seat_column').value = selectedSeat.column;
	// 	});
	//   });

	//   // Handle form submission
	//   const bookButton = document.getElementById('bookButton');
	//   bookButton.addEventListener('click', () => {
	// 	const selectedSeatRow = document.getElementById('selected_seat_row').value;
	// 	const selectedSeatColumn = document.getElementById('selected_seat_column').value;
	// 	// Perform booking logic here, e.g., make an API request to the server
	// 	// to update the seat's availibility status and save the booking details.
	// 	// Display confirmation or error message to the user accordingly.
	//   });

	// var seatContainer = document.getElementById('seatContainer');
	// var popup = document.getElementById('popup');
	// var popupContent = document.getElementById('popupContent');
	// var popupText = document.getElementById('popupText');
	// var employeeIdInput = document.getElementById('employeeId');
	// var submitBtn = document.getElementById('submitBtn');



	// var seatData = []

	// function showSeats(selectedDate) {
	// 	frappe.call({
	// 		method: "frappe.client.get_list",
	// 		args: {
	// 			doctype: "Seating System",
	// 			//   fields: ["seat_1"],
	// 			filters: {
	// 				date: selectedDate
	// 			}
	// 		},
	// 		callback: function (response) {
	// 			data = response.message
	// 			for (var each_data of data) {
	// 				console.log(each_data.name)
	// 				frappe.call({
	// 					method: "frappe.client.get",
	// 					args: {
	// 						doctype: "Seating System",
	// 						name: each_data.name
	// 					},
	// 					callback: function (response) {
	// 						var doc = response.message;
	// 						// Access the required values from the document
	// 						var fieldValue = doc.seat_1;
	// 						seatData = []
	// 						for (each_child of doc.seat_1) {
	// 							console.log(each_child["row"])
	// 							var temp = {
	// 								"row": 0,
	// 								"column": 0,
	// 								"availibility": "available",
	// 								"emp_id": 0
	// 							};
	// 							temp["row"] = each_child["row"];
	// 							temp["column"] = each_child["column"];
	// 							temp["availibility"] = each_child["availibility"];
	// 							temp["emp_id"] = each_child["emp_id"];
	// 							seatData.push(temp);

	// 						}
	// 						for (let row = 1; row <= numRows; row++) {
	// 							for (let column = 1; column <= numColumns; column++) {
	// 								const seat = seatData.find((s) => s.row === row && s.column === column) || { availibility: 'blank' };
	// 								console.log(seat)
	// 								if (seat.availibility != 'blank') {
	// 									const seatBox = document.createElement('div');

	// 									seatBox.classList.add('seat', seat.availibility);

	// 									seatBox.dataset.row = row;
	// 									seatBox.dataset.column = column;
	// 									seatBox.textContent = `${row}-${column}`;
	// 									seatContainer.appendChild(seatBox);
	// 								}
	// 								else {
	// 									const seatBox = document.createElement('div');
	// 									seatContainer.appendChild(seatBox);
	// 									// seatBox.classList.add('seat', seat.status);
	// 								}
	// 							}
	// 						}
	// 						const seatBoxes = document.querySelectorAll('.seat');
	// 						var data_row = 0
	// 						var data_column = 0
	// 						seatBoxes.forEach((box) => {
	// 							box.addEventListener('click', () => {
	// 								// console.log(box)
	// 								// if ()

	// 								const selectedSeat = {
	// 									row: box.getAttribute('data-row'),
	// 									column: box.getAttribute('data-column'),
	// 								};
	// 								data_row = box.getAttribute('data-row')
	// 								data_column = box.getAttribute('data-column')
	// 								// Update UI to reflect seat selection
	// 								seatBoxes.forEach((seat) => seat.classList.remove('selected'));
	// 								box.classList.add('selected');
	// 								// console.log(selectedSeat.row)

	// 								if (box.classList.contains('booked')) {
	// 									// console.log(seatData)
	// 									const seat1 = seatData.find((s) => s.row === parseInt(selectedSeat.row) && s.column === parseInt(selectedSeat.column));
	// 									// console.log(seat1)
	// 									// const emp_id = seat1 ? seat1.emp_id : 'not found';

	// 									popupText.textContent = ('Seat has booked by ' + seat1.emp_id);
	// 									employeeIdInput.style.display = 'none';
	// 									submitBtn.style.display = 'none';
	// 									okBtn.style.display = '';

	// 								} else {
	// 									// Show popup without emp_id field
	// 									popupText.textContent = 'Enter Employee ID:';
	// 									employeeIdInput.style.display = 'block';
	// 									okBtn.style.display = 'none';
	// 									submitBtn.style.display = '';
	// 								}

	// 								popup.style.display = 'flex';
	// 								// Perform additional actions, such as updating hidden form fields
	// 								// document.getElementById('selected_seat_row').value = selectedSeat.row;
	// 								// document.getElementById('selected_seat_column').value = selectedSeat.column;
	// 							});
	// 						});
	// 						okBtn.addEventListener('click', function () {
	// 							popup.style.display = 'none';
	// 						})
	// 						submitBtn.addEventListener('click', function () {
	// 							employeeIdInput = document.getElementById('employeeId');
	// 							console.log(employeeIdInput.value)
	// 							var employeeId = employeeIdInput.value;
	// 							if (!isNaN(parseInt(employeeId))) {
	// 								// employeeIdInput.value = parseInt(employeeId);
	// 							  } else {
	// 								// Handle the case when the input value is not a valid integer
	// 								frappe.throw('Invalid input value. Please enter a valid employee id.');
	// 							  }
	// 							// Do something with the employee ID, e.g., save it or perform further actions
	// 							console.log(employeeId);
	// 							// employeeIdInput.value = undefined;

	// 							// const seat1 = seatData.find((s) => s.row === parseInt(selectedSeat.row) && s.column === parseInt(selectedSeat.column));

	// 							console.log(each_data.name)
	// 							frappe.call({
	// 								method: "frappe.client.get",
	// 								args: {
	// 									doctype: "Seating System",
	// 									name: each_data.name
	// 								},
	// 								callback: function (response) {
	// 									var doc1 = response.message;
	// 									console.log(doc1)
	// 									var tableField = doc1.seat_1;

	// 									if (tableField) {
	// 										// for (var i = 0; i < tableField.length; i++) {
	// 										// 	if (tableField[i].row === parseInt(data_row) && tableField[i].column === parseInt(data_column)) {
	// 										// 		console.log(tableField[i].emp_id);
	// 										// 		tableField[i].emp_id = employeeId;
	// 										// 		tableField[i].availibility = "booked";

	// 										// 		break;
	// 										// 	}
	// 										// }

	// 										// doc1.save();
	// 										// doc1.insert()
	// 										frappe.call({
	// 											method: 'hitu.hitu.page.second_doc_new_page.second_doc_new_page.save_doc',
	// 											args: {
	// 												document_name: each_data.name,
	// 												row: parseInt(data_row),
	// 												column: parseInt(data_column),
	// 												emp_id: employeeId
	// 											},
	// 											callback: function (response) {
	// 												// console.log(Object.values(response))
	// 												const res = Object.values(response)[0]
	// 												console.log(res,"res")
	// 												seatContainer.innerHTML = '';
	// 												// frappe.call({
	// 												// 	method: "frappe.client.get_list",
	// 												// 	args: {
	// 												// 		doctype: "Seating System",
	// 												// 		//   fields: ["seat_1"],
	// 												// 		filters: {
	// 												// 			date: selectedDate
	// 												// 		}
	// 												// 	},
	// 												// 	callback: function (response) {
	// 												// 		var data = response.message;
	// 												// 		console.log(data)
	// 												seatData =
	// 														showSeats(selectedDate)
	// 													// }
	// 												// });
	// 											}

	// 										});

	// 									} else {
	// 										console.log('Table field is not available.');
	// 									}
	// 								}
	// 							})

	// 							// Hide the popup
	// 							popup.style.display = 'none';
	// 							// handleDateChange()


	// 						});
	// 						console.log(seatData, "after changing date");
	// 						console.log(fieldValue); // Just an example to see the retrieved value
	// 					}
	// 				});
	// 			}
	// 		}
	// 	})
	// }

	// // Sample data - seat availibility
	// function handleDateChange(event) {
	// 	const selectedDate = event.target.value;
	// 	console.log(selectedDate)
	// 	console.log(typeof (selectedDate))
	// 	seatContainer.innerHTML = '';
	// 	seatData = []
	// 	// Call your JavaScript function or perform necessary actions based on the selected date
	// 	// console.log(selectedDate,"log");
	// 	frappe.call({
	// 		method: "frappe.client.get_list",
	// 		args: {
	// 			doctype: "Seating System",
	// 			//   fields: ["seat_1"],
	// 			filters: {
	// 				date: selectedDate
	// 			}
	// 		},
	// 		callback: function (response) {
	// 			var data = response.message;
	// 			console.log(data)
	// 			showSeats(selectedDate)
	// 			//   var seatdata = [];




	// 			//   for (var each_data of data) {
	// 			// 	var temp = {
	// 			// 	  "row": 0,
	// 			// 	  "column": 0,
	// 			// 	  "availibility": "available",
	// 			// 	  "emp_id": 0
	// 			// 	};
	// 			// 	temp["row"] = each_data.seat_1.row;
	// 			// 	temp["column"] = each_data.seat_1.column;
	// 			// 	temp["availibility"] = each_data.seat_1.availibility;
	// 			// 	temp["emp_id"] = each_data.seat_1.emp_id;
	// 			// 	seatdata.push(temp);
	// 			//   }
	// 			//   console.log(seatdata); // Just an example to see the resulting data
	// 		}
	// 	});



	// }

	// const bookingDateInput = document.getElementById('booking_date');
	// //   const bookingDateInput = document.getElementById('booking_date');

	// // Get the current date
	// const currentDate = new Date();

	// // Calculate the previous week and next week dates
	// //   const previousWeekDate = new Date();
	// //   previousWeekDate.setDate(currentDate.getDate() - 1);

	// const nextWeekDate = new Date();
	// nextWeekDate.setDate(currentDate.getDate() + 7);

	// const prevWeekDate = new Date();
	// prevWeekDate.setDate(currentDate.getDate() - 7);

	// // Convert the dates to string format (YYYY-MM-DD)
	// // const currentDateString = currentDate.toISOString().split('T')[0];
	// const nextWeekDateString = nextWeekDate.toISOString().split('T')[0];
	// const prevWeekDateString = prevWeekDate.toISOString().split('T')[0];

	// // Set the minimum and maximum date values for the input
	// bookingDateInput.setAttribute('min', prevWeekDateString);
	// bookingDateInput.setAttribute('max', nextWeekDateString);
	// bookingDateInput.addEventListener('change', handleDateChange);
	// //   console.log(bookingDateInput,"log");
	// //   console.log(seatData,"at beging");






	// // const seatData = [
	// //   { row: 1, column: 1, status: 'available' },
	// //   { row: 1, column: 2, status: 'available' },
	// //   { row: 1, column: 3, status: 'booked' },
	// //   { row: 2, column: 1, status: 'available' },
	// //   { row: 2, column: 2, status: 'available' },
	// //   { row: 2, column: 3, status: 'available' },
	// //   { row: 3, column: 5, status: 'blank' },
	// //   { row: 4, column: 5, status: 'blank' },
	// //   { row: 5, column: 5, status: 'blank' },
	// //   { row: 3, column: 6, status: 'unavailable' },
	// // ];

	const numRows = 5; // Specify the number of rows
	const numColumns = 10; // Specify the number of columns


	// for (let row = 1; row <= numRows; row++) {
	//   for (let column = 1; column <= numColumns; column++) {
	// 	const seat = seatData.find((s) => s.row === row && s.column === column) || { status: 'unavailable' };
	// 	if (seat.status != 'blank'){
	// 		const seatBox = document.createElement('div');
	// 		seatBox.classList.add('seat', seat.status);
	// 		seatBox.dataset.row = row;
	// 		seatBox.dataset.column = column;
	// 		seatBox.textContent = `${row}-${column}`;
	// 		seatContainer.appendChild(seatBox);
	// 	}
	// 	else{
	// 		const seatBox = document.createElement('div');
	// 		seatContainer.appendChild(seatBox);
	// 		// seatBox.classList.add('seat', seat.status);
	// 	}
	//   }
	// }

	// Add event listeners to seat boxes
	// const seatBoxes = document.querySelectorAll('.seat');
	// seatBoxes.forEach((box) => {
	//   box.addEventListener('click', () => {
	// 	const selectedSeat = {
	// 	  row: box.getAttribute('data-row'),
	// 	  column: box.getAttribute('data-column'),
	// 	};
	// 	// Update UI to reflect seat selection
	// 	seatBoxes.forEach((seat) => seat.classList.remove('selected'));
	// 	box.classList.add('selected');
	// 	// Perform additional actions, such as updating hidden form fields
	// 	document.getElementById('selected_seat_row').value = selectedSeat.row;
	// 	document.getElementById('selected_seat_column').value = selectedSeat.column;
	//   });
	// });

	// Handle form submission
	// const bookButton = document.getElementById('bookButton');
	// bookButton.addEventListener('click', () => {
	//   const selectedSeatRow = document.getElementById('selected_seat_row').value;
	//   const selectedSeatColumn = document.getElementById('selected_seat_column').value;
	//   // Perform booking logic here, e.g., make an API request to the server
	//   // to update the seat's availibility status and save the booking details.
	//   // Display confirmation or error message to the user accordingly.
	// });

	// var previousDate = new Date(); // Initialize with the current date

	// setInterval(function () {
	// 	var currentDate = new Date();
	// 	console.log(currentDate);
	// 	console.log(currentDate.getDate());
	// 	// const nextDayDate = new Date();
	// 	// nextDayDate.setDate(currentDate.getDate() + 1);
	// 	// // const currentDate = new Date();
	// 	// const year = nextDayDate.getFullYear();
	// 	// const month = String(nextDayDate.getMonth() + 1).padStart(2, '0');
	// 	// const day = String(nextDayDate.getDate()).padStart(2, '0');
	// 	// const formattedDate = `${year}-${month}-${day}`;
	// 	// console.log(typeof(formattedDate))
	// 	// console.log(typeof(previousDate))


	// 	// const currentDate = new Date();

	// 	// Current date minus 7 days


	// 	// console.log(minus7Days.toISOString().split('T')[0]);
	// 	// console.log(typeof(minus7Days.toISOString().split('T')[0]))
	// 	// // Output: 7 days ago in yyyy-mm-dd format
	// 	// console.log(plus7Days.toISOString().split('T')[0]);


	// 	if (currentDate.getDate() !== previousDate.getDate()) {

	// 		const minus7Days = new Date(previousDate);
	// 		minus7Days.setDate(previousDate.getDate() - 7);

	// 		// Current date plus 7 days
	// 		const plus7Days = new Date(currentDate);
	// 		plus7Days.setDate(currentDate.getDate() + 7);

	// 		const prev7thDAy = minus7Days.toISOString().split('T')[0]
	// 		const next7thDay = plus7Days.toISOString().split('T')[0]

	// 		frappe.call({
	// 			method: "frappe.client.get_list",
	// 			args: {
	// 				doctype: "Seating System",
	// 				//   fields: ["seat_1"],
	// 				filters: {
	// 					date: prev7thDAy
	// 				}
	// 			},
	// 			callback: function (response) {
	// 				var data = response.message;
	// 				for (each_data of data) {
	// 					frappe.call({
	// 						method: 'frappe.client.delete',
	// 						args: {
	// 							doctype: 'Seating System',
	// 							name: each_data.name
	// 						},
	// 						callback: function (response) {
	// 							// Handle the response from the server
	// 							if (response.message === 'ok') {
	// 								// Deletion successful
	// 								console.log('Doctype deleted successfully.');
	// 							} else {
	// 								// Error occurred
	// 								console.log('An error occurred while deleting the doctype.');
	// 							}
	// 						}
	// 					});
	// 				}
	// 			}
	// 		});



	// 		frappe.call({
	// 			method: 'frappe.client.insert',
	// 			args: {
	// 				doc: {
	// 					doctype: 'Seating System',
	// 					date: next7thDay,
	// 					seat_1: [
	// 						{ row: 1, column: 1, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 2, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 3, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 4, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 5, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 6, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 7, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 8, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 9, availibility: 'available', emp_id: '' },
	// 						{ row: 1, column: 10, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 1, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 2, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 3, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 4, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 5, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 6, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 7, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 8, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 9, availibility: 'available', emp_id: '' },
	// 						{ row: 2, column: 10, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 1, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 2, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 3, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 4, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 5, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 6, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 7, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 8, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 9, availibility: 'available', emp_id: '' },
	// 						{ row: 3, column: 10, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 1, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 2, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 3, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 4, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 5, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 6, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 7, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 8, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 9, availibility: 'available', emp_id: '' },
	// 						{ row: 4, column: 10, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 1, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 2, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 3, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 4, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 5, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 6, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 7, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 8, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 9, availibility: 'available', emp_id: '' },
	// 						{ row: 5, column: 10, availibility: 'available', emp_id: '' }
	// 					],
	// 					// Add more fields as needed
	// 				}
	// 			},
	// 			callback: function (response) {
	// 				// Handle the response from the server
	// 				if (response.message) {
	// 					var docname = response.message.name;
	// 					console.log('Document created successfully with name:', docname);
	// 				} else {
	// 					console.log('An error occurred while creating the document.');
	// 				}
	// 			}
	// 		});

	// 		previousDate = currentDate;
	// 	}
	// }, 60000);

	$(document).ready(function () {
		const currentDate = new Date();
		var seatContainer = document.getElementById('seatContainer');
		var popup = document.getElementById('popup');
		var popupContent = document.getElementById('popupContent');
		var popupText = document.getElementById('popupText');
		var employeeIdInput = document.getElementById('employeeId');
		var submitBtn = document.getElementById('submitBtn');
		var okBtn = document.getElementById('okBtn');
		// var datee = document.getElementById('booking_date')
		var datee = currentDate.toISOString().split('T')[0];
		var seatData = [];
		var data_row = 0;
		var data_column = 0;
		var docStatus = 0;
		const bookingDateInput = document.getElementById('booking_date');
		showSeats(datee)
		bookingDateInput.value = datee

		var userRoles = []
		frappe.call({
			method: "hitu.hitu.page.second_doc_new_page.second_doc_new_page.get_user_roles",
			args: {
				user: frappe.session.user
			},
			callback: function (response) {

				userRoles = response.message;
				// console.log(userRoles)
			}
		});


		function showSeats(selectedDate) {
			frappe.call({
				method: "hitu.hitu.page.second_doc_new_page.second_doc_new_page.get_seat_data",
				args: {
					selected_date: selectedDate
				},
				callback: function (response) {
					seatData = response.message.seat_data;
					renderSeats();
					datee = selectedDate
					docStatus = response.message.status
				}
			});
		}

		function renderSeats() {
			// Clear seatContainer
			seatContainer.innerHTML = '';

			for (let row = 1; row <= numRows; row++) {
				for (let column = 1; column <= numColumns; column++) {
				  const seat = seatData.find((s) => s.row === row && s.column === column) || { availibility: 'blank' };
			  
				  if (seat.availibility !== 'blank') {
					const seatBox = document.createElement('div');
					seatBox.classList.add('seat', seat.availibility);
					seatBox.dataset.row = row;
					seatBox.dataset.column = column;
					seatBox.textContent = `${String.fromCharCode(64 + row)}-${column}`; // Convert row number to alphabet
			  
					seatContainer.appendChild(seatBox);
				  } else {
					const seatBox = document.createElement('div');
					seatContainer.appendChild(seatBox);
				  }
				}
			  }
			  

			const seatBoxes = document.querySelectorAll('.seat');


			seatBoxes.forEach((box) => {
				box.addEventListener('click', () => {
					const selectedSeat = {
						row: box.getAttribute('data-row'),
						column: box.getAttribute('data-column'),
					};

					data_row = box.getAttribute('data-row');
					data_column = box.getAttribute('data-column');

					seatBoxes.forEach((seat) => seat.classList.remove('selected'));
					box.classList.add('selected');

					if (!(datee < currentDateString)) {

						if (box.classList.contains('booked')) {
							const seat1 = seatData.find((s) => s.row === parseInt(selectedSeat.row) && s.column === parseInt(selectedSeat.column));
							popupText.textContent = ('Seat has been booked for ' + seat1.emp_id + ' by ' + seat1.booked_by);
							employeeIdInput.style.display = 'none';
							submitBtn.style.display = 'none';


							if (frappe.session.user == seat1.booked_by || userRoles.includes('MTS') ) {
								cancelBtn.style.display = 'block';
								editBtn.style.display = 'block';
								okBtn.style.display = 'none';
								popup.style.display = 'flex';
							} else {
								cancelBtn.style.display = 'none';
								editBtn.style.display = 'none';
								okBtn.style.display = 'block';
								popup.style.display = 'flex';
							}


							// cancelBtn.style.display = 'block';
							// editBtn.style.display = 'block';
							// okBtn.style.display = 'block';
							// popup.style.display = 'flex';

						} else if (box.classList.contains('available')) {
							popupText.textContent = 'Enter Employee ID:';
							employeeIdInput.value = null;
							employeeIdInput.style.display = 'block';
							submitBtn.style.display = 'block';
							cancelBtn.style.display = 'none';
							editBtn.style.display = 'none';
							okBtn.style.display = 'none';
							popup.style.display = 'flex';
						}
					}
					else {
						const seat1 = seatData.find((s) => s.row === parseInt(selectedSeat.row) && s.column === parseInt(selectedSeat.column));
						if (seat1.booked_by == null) {
							popupText.textContent = ('Seat was empty');
						} else {
							popupText.textContent = ('Seat has been booked for ' + seat1.emp_id + ' by ' + seat1.booked_by);
						}
						employeeIdInput.style.display = 'none';
						submitBtn.style.display = 'none';
						cancelBtn.style.display = 'none';
						editBtn.style.display = 'none';
						okBtn.style.display = 'block';
						popup.style.display = 'flex';
					}
				});
			});




		}


		editBtn.addEventListener('click', () => {
			popup.style.display = 'none';
			popupText.textContent = 'Enter Employee ID need to change:';
			employeeIdInput.value = null;
			employeeIdInput.style.display = 'block';
			submitBtn.style.display = 'block';
			cancelBtn.style.display = 'none';
			editBtn.style.display = 'none';
			okBtn.style.display = 'none';
			popup.style.display = 'flex';


		});

		okBtn.addEventListener('click', () => {
			popup.style.display = 'none';
		});

		closeBtn.addEventListener('click', () => {
			popup.style.display = 'none';
		});

		cancelBtn.addEventListener('click', () => {
			// user = {{ frappe.session.user }};
			frappe.call({
				method: 'hitu.hitu.page.second_doc_new_page.second_doc_new_page.save_employee_id',
				args: {
					document_name: seatData[0].parent,
					row: parseInt(data_row),
					column: parseInt(data_column),
					emp_id: 0,
					availibility: 'available',
					user: frappe.session.user,
				},
				callback: function (response) {
					popup.style.display = 'none';
					// selectedDate = datee
					console.log(seatData)
					doc = frappe.get_doc('Seating System', seatData[0].parent)
					console.log(datee, "asdfghjkl;")
					showSeats(datee);
				},
			});
		});

		submitBtn.addEventListener('click', () => {

			const employeeId = employeeIdInput.value;


			if (!isNaN(parseInt(employeeId))) {
				employeeIdInput.value = parseInt(employeeId);
			} else {
				// Handle the case when the input value is not a valid integer
				frappe.throw('Invalid input value. Please enter a valid employee id.');
			}
			// console.log(checkEmpIdExists(seatData,employeeId))
			if (checkEmpIdExists(seatData, employeeId).exists) {
				frappe.throw('employee ' + employeeId + ' already booked a seat at seat no: ' + checkEmpIdExists(seatData, employeeId).row + '-' + checkEmpIdExists(seatData, employeeId).column + ' by ' + checkEmpIdExists(seatData, employeeId).booked_by);
				employeeIdInput.value = null;
			}




			if (employeeId.trim() !== '') {
				console.log(employeeId)
				console.log(typeof(employeeId))
				frappe.call({
					method: 'hitu.hitu.page.second_doc_new_page.second_doc_new_page.save_employee_id',
					args: {
						document_name: seatData[0].parent,
						row: parseInt(data_row),
						column: parseInt(data_column),
						emp_id: employeeId,
						availibility: 'booked',
						user: frappe.session.user,
					},
					callback: function (response) {
						popup.style.display = 'none';
						// selectedDate = datee
						console.log(seatData)
						doc = frappe.get_doc('Seating System', seatData[0].parent)
						console.log(datee, "asdfghjkl;")
						showSeats(datee);
					},
				});
			}
		});

		// document.getElementById('booking_date').addEventListener('change', function() {
		// 	const selectedDate = this.value;
		// 	showSeats(selectedDate);
		// });

		// showSeats();
		function handleDateChange(event) {
			const selectedDate = event.target.value;
			showSeats(selectedDate);
		}

		//   const bookingDateInput = document.getElementById('booking_date');

		// Get the current date


		// Calculate the previous week and next week dates
		// const previousWeekDate = new Date();
		// previousWeekDate.setDate(currentDate.getDate() - 1);

		// const nextWeekDate = new Date();
		// nextWeekDate.setDate(currentDate.getDate() + 7);

		// const prevWeekDate = new Date();
		// prevWeekDate.setDate(currentDate.getDate() - 7);

		// // Format dates as "YYYY-MM-DD" in Asia/Kolkata timezone
		// const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };
		// const currentDateString = currentDate.toISOString('en-US', options).split('/').reverse().join('-').split('T')[0];
		// const nextWeekDateString = nextWeekDate.toISOString('en-US', options).split('/').reverse().join('-').split('T')[0];
		// const prevWeekDateString = prevWeekDate.toISOString('en-US', options).split('/').reverse().join('-').split('T')[0];

		// // Set the minimum and maximum date values for the input
		// frappe.msgprint(currentDateString + nextWeekDateString + prevWeekDateString)
		// bookingDateInput.setAttribute('min', prevWeekDateString);
		// bookingDateInput.setAttribute('max', nextWeekDateString);
		// bookingDateInput.addEventListener('change', handleDateChange);

		// const currentDate = new Date();
		const nextWeekDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
		const prevWeekDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

		const formatDateString = (date) => {
			const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };
			return date.toLocaleString('en-IN', options).split(',')[0].split('/').reverse().join('-');
		};

		const currentDateString = formatDateString(currentDate);
		const nextWeekDateString = formatDateString(nextWeekDate);
		const prevWeekDateString = formatDateString(prevWeekDate);
		// frappe.msgprint(currentDateString + nextWeekDateString + prevWeekDateString)
		bookingDateInput.setAttribute('min', prevWeekDateString);
		bookingDateInput.setAttribute('max', nextWeekDateString);
		bookingDateInput.addEventListener('change', handleDateChange);



	});

	function checkEmpIdExists(seatData, empId) {
		for (var i = 0; i < seatData.length; i++) {
			var seat = seatData[i];
			if (seat.emp_id == empId) {
				return {
					exists: true,
					row: seat.row,
					column: seat.column,
					booked_by: seat.booked_by
				};
			}
		}
		return { exists: false, row: null, column: null };
	}




}

