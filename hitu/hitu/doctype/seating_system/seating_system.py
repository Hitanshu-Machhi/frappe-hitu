# Copyright (c) 2023, Hitanshu and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document



class SeatingSystem(Document):
	pass

# 	def get_seatdata(self,date):
# 		doc = frappe.db.get_list("Seating System",
# 			   filters={
# 				   "date" : date,
# 				   },
# 				   fields = ["seat_1","seat_2"]
# 				   )
# 		seatdata = []
# 		for each_doc in doc:
# 			for seat in each_doc.seat1:
# 				temp = {"row": 0, "column": 0, "availibility": "available", "emp_id": 0}
# 				temp["row"] = seat.row
# 				temp["column"] = seat.column
# 				temp["availibility"] = seat.availibility
# 				temp["emp_id"] = seat.emp_id
# 				seatdata.append(temp)

# 		return seatdata
	

# def get_seatdata1(date):
# 	doc = frappe.db.get_list("Seating System",
# 			filters={
# 				"date" : date,
# 				},
# 				fields = ["seat_1","seat_2"]
# 				)
# 	seatdata = []
# 	for each_doc in doc:
# 		for seat in each_doc.seat1:
# 			temp = {"row": 0, "column": 0, "availibility": "available", "emp_id": 0}
# 			temp["row"] = seat.row
# 			temp["column"] = seat.column
# 			temp["availibility"] = seat.availibility
# 			temp["emp_id"] = seat.emp_id
# 			seatdata.append(temp)

# 	return seatdata
	

