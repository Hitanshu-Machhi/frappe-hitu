// Copyright (c) 2023, Hitanshu and contributors
// For license information, please see license.txt

frappe.ui.form.on("FirstDoc", {

    

	refresh: function(frm) {
        // frappe.msgprint("You refreshed the page")
        // frm.set_intro("Now you can create new doctype")
        if(frm.is_new()){
            frm.set_intro("Now you can create new doctype")
        }

        frm.add_custom_button("click Me", () => {
            frappe.msgprint(__("You clicked Button"));
        })


        // frm.add_custom_button("Click Me" , () => {
        //     frappe.msgprint(__("You clicked Button"));
        // },"Click")
        // frm.add_custom_button("Dont Click Me" , () => {
        //     frappe.msgprint(__("Why You clicked Button?"));
        // },"Click")
	},

    // onload: function(frm) {
    //     // frappe.msgprint("page is loaded")
    // },

    // validate: function(frm){
    //     // frappe.throw("validated")
    //     frm.set_value("full_name", frm.doc.firstname + " " + frm.doc.middle_name + " " + frm.doc.last_name )
    // },

    // before_save: function(frm){
    //     // frappe.throw("are you sure")
    //     frappe.throw(__("your full name is '{0}'" , [frm.doc.firstname + " " + frm.doc.middle_name + " " + frm.doc.last_name]))
    // },

    // after_save: function(frm){
    //     // frappe.throw("document is saved")
    //     frappe.msgprint(_("your full name is '{0}'" , 
    //         [frm.doc.firstname + " " + frm.doc.middle_name + " " + frm.doc.last_name]))
    // },

    // check: function(frm){
    //     // frappe.msgprint("you enabled/disabled it")
    //     frm.set_df_property("firstname","reqd",1)
    //     frm.refresh_field("firstname")

    //     frm.set_df_property("gender","read_only",1)
    //     frm.refresh_field("firstname")

    //     frm.toggle_reqd("phone_number",true)
    // },

    // before_submit: function(frm){
    //     frappe.msgprint("you are submiting the document")
    // },

    // on_submit: function(frm){
    //     frappe.throw("you are submitted the document")
    // },

    // before_cancel: function(frm){
    //     frappe.throw("you are canceling")
    // },

    // after_cancel: function(frm){
    //     frappe.msgprint("canceled")
    // },

});
