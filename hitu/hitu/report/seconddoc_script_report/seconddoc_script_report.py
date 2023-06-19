# Copyright (c) 2023, Hitanshu and contributors
# For license information, please see license.txt

import frappe
from frappe import _

def execute(filters=None):
	if not filters: filters = {}

	columns, data = [], []

	columns = get_columns()
	second_doctype_data = get_second_doctype_data(filters)

	if not second_doctype_data:
		frappe.msgprint(_("No Record Found"))
		return columns, second_doctype_data
	
	data = []
	for d in second_doctype_data:
		row = frappe._dict({
			"firstname": d.firstname,
			"last_name": d.last_name,
			"phone_number": d.phone_number,
			"check": d.check
		})
		data.append(row)

	return columns, data


def get_columns():
	return [
		{
			"fieldname": "firstname",
			"label": _("First Name"),
			"fieldtype": "Data",
			"width": 120
		},
		{
			"fieldname": "last_name",
			"label": _("Last Name"),
			"fieldtype": "Data",
			"width": 120
		},
		{
			"fieldname": "phone_number",
			"label": _("Phone Number"),
			"fieldtype": "Phone",
			"width": 150
		},
		{
			"fieldname": "check",
			"label": _("Checked ?"),
			"fieldtype": "check",
			"width": 100
		}
	]

def get_second_doctype_data(filters):
	conditions = get_conditions(filters)
	data = frappe.get_all(
		doctype = "SecondDoc",
		fields = ["firstname", "last_name", "phone_number", "check"],
		filters = conditions,
		order_by = "firstname desc"
	)
	return data

def get_conditions(filters):
	conditions = {}
	for key, value in filters.items():
		if filters.get(key):
			conditions[key] = value

	return conditions