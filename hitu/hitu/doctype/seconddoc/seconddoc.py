# Copyright (c) 2023, Hitanshu and contributors
# For license information, please see license.txt

# import frappe
from frappe import _
from frappe.model.document import Document


class SecondDoc(Document):
    
	pass

	# def validate(self):

	# 	frappe.msgprint("validated")
	# 	frappe.msgprint(_("Your full name is {0}").format( self.firstname + " " + self.middle_name + " " + self.last_name))
	# 	self.get_document()
	# 	self.new_document()
	# 	frappe.delete_doc("FirstDoc","USER-00005")
	# 	if frappe.db.exists("FirstDoc","USER-00009"):
	# 		frappe.msgprint("database USER-00009 exists")
	# 	else:
	# 		frappe.msgprint("database USER-00009 does not exists")
	# 	doc_count = frappe.db.count("FirstDoc",{"check":1})
	# 	frappe.msgprint(_("{0} documents have checked the checkbox").format(doc_count))

	# def before_save(self):
	# 	frappe.msgprint("are you sure you want to save")

	# def before_insert(self):
	# 	frappe.msgprint("you are enterint the field")

	# def after_insert(self):
	# 	frappe.msgprint("you saved the document")

	# def on_update(self):
	# 	frappe.msgprint("you updated the doc")

	# def before_submit(self):
	# 	frappe.msgprint("are you sure you want to submit")

	# def on_submit(self):
	# 	frappe.msgprint("document submited")

	# def on_cancel(self):
	# 	frappe.msgprint("canceled")

	# def on_trash(self):
	# 	frappe.msgprint("moved to trash")	

	# def after_delete(self):
	# 	frappe.msgprint("document deleted")

	# def get_document(self):
	# 	doc = frappe.get_doc("FirstDoc",self.firstdoc)
	# 	frappe.msgprint(_("your name in document is {0}").format(doc.firstname))

	# def new_document(self):
	# 	doc = frappe.new_doc("FirstDoc")
		
	# 	doc.firstname = "Hitanshu"
	# 	doc.last_name = "Machhi"

	# 	doc.insert()
		
	# 	doc.insert(
	# 		ignore_if_duplicate=True,
	# 		ignore_links=True,
	# 		ignore_mandatory=True,
	# 		ignore_permissions=True
	# 	)
	
	# def save_document(self):
	# 	doc = frappe.new_doc("FirstDoc")
		
	# 	doc.firstname = "Hitanshu"
	# 	doc.last_name = "Machhi"

	# 	doc.save()

	# 	doc.save(
	# 		ignore_permissions = True,
	# 		ignore_version = True
	# 	)

	# def delete_document(self):
	# 	doc = frappe.get_doc("FirstDoc" , "USER-00001")
	# 	doc.delete()

	# def db_set_document(self):
	# 	doc = frappe.get_doc("FirstDoc" , "USER-00009")
	# 	doc.db_set("firstname","Hitanshu")

	# def get_list(self):
	# 	doc = frappe.db.get_list("FirstDoc",
	# 		   filters={
	# 			   "check" : 1,
	# 		   },
	# 		   fields = ["firstname","last_name"]
	# 	)

	# 	for each_doc in doc:
	# 		frappe.msgprint(_("your name is {0} {1}").format(each_doc.firstname,each_doc.last_name))

	# def get_value(self):
	# 	firstname, last_name = frappe.db.get_value("FirstDoc","USER-00009", ["firstname","last_name"])
	# 	frappe.msgprint(_("your name is {0} {1}").format(firstname,last_name))

	# def set_value(self):
	# 	frappe.db.set_value("FirstDoc","USER-00009","middle_name","Ramesh")
	# 	firstname, middle_name, last_name = frappe.db.get_value("FirstDoc","USER-00009", ["firstname","middle_name","last_name"])
	# 	frappe.msgprint(_("your name is {0} {1} {2}").format(firstname,middle_name,last_name))

	# @frappe.whitelist()
	# def frm_call(self,msg):
	# 	import time
	# 	time.sleep(5)
	# 	frappe.msgprint(msg)
	# 	self.gender = "Male"
	# 	return "called method frm_call"

