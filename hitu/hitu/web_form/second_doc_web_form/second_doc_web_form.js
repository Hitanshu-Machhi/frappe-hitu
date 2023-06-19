frappe.ready(function() {
	
	frappe.web_form.after_load = () => {
		frappe.msgprint('fill the form correctly');
	};

	// frappe.web_form.after_load = () => {

	// 	frappe.web_form.on('Check', (field,value) => {
		
	// 		frappe.msgprint("Enabled/Disabled");
		
	// 	});

		// frappe.web_form.validate = () => {
		// 	frappe.web_form.
		// }
	// };
});