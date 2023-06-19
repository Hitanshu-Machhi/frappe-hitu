import frappe
# from frappe import exceptions
# from frappe import db
# from frappe.utils.background_jobs import enqueue
# from datetime import datetime, timedelta
# import time
# import schedule
# import threading
# from apscheduler.schedulers.background import BackgroundScheduler
# from frappe.utils import get_datetime, now_datetime
# from frappe.utils.background_jobs import enqueue, is_job_enqueued

# from croniter import croniter
# from datetime import datetime


# scheduler = BackgroundScheduler(timezone = 'Asia/Kolkata')
# scheduler.start()



# import multiprocessing
# from datetime import datetime, timedelta
# import time

# def day_change_checker(previous_day):
#     while True:
#         current_day = datetime.now().day
#         frappe.msgprint("qwertyuiop")

#         if current_day != previous_day.value:
#             # Day has changed, perform the desired action here
#             print("Day has changed!")

#             # Update previous_day to the current day
#             previous_day.value = current_day

#         # Sleep for a short interval before checking again
#         # time.sleep(1)  # Adjust the interval as needed

# # Create a shared variable to store the previous day
# manager = multiprocessing.Manager()
# previous_day = manager.Value('i', datetime.now().day)

# # Create a new process for the day_change_checker function
# background_process = multiprocessing.Process(target=day_change_checker, args=(previous_day))

# # Start the background process
# background_process.start()

# # Other code or tasks can continue running here

# # Wait for the background process to complete (optional)
# background_process.join()


# Other code or tasks can continue running here





# import threading
# from datetime import datetime, timedelta

# def day_change_checker():
#     previous_day = datetime.now().day
#     frappe.msgprint("qwertyuiop")

#     while True:
#         frappe.msgprint('qwer')
#         current_day = datetime.now().day

#         if current_day != previous_day:
#             # Day has changed, perform the desired action here
#             print("Day has changed!")

#             # Update previous_day to the current day
#             previous_day = current_day

#         # Sleep for a short interval before checking again
#         time.sleep(60)  # Adjust the interval as needed

# day_change_checker()

# # Create a background thread for the day_change_checker function
# background_thread = threading.Thread(target=day_change_checker)

# # Start the background thread
# background_thread.start()

# Other code or tasks can continue running here

# Wait for the background thread to complete (optional)
# background_thread.join()


# current_date = datetime.now().date()

# next_7th_day_date = current_date + timedelta(days=7)
# prev_7th_day_date = current_date - timedelta(days=7)
# yesterday_date = current_date - timedelta(days=1)


# row = 0
# column = 0
# availibility = ''
# emp_id = 0


# @frappe.whitelist()
# def add_next_document():
#     doc_count = frappe.db.count("Seating System",{"date":next_7th_day_date})
#     if doc_count == 0:
#         doc = frappe.new_doc("Seating System")

#         current_date = datetime.now().date()
#         next_7th_day_date = current_date + timedelta(days=7)
#         doc.date = next_7th_day_date
#         doc.seat_1 = [
#             {row: 1, column: 1, availibility: 'available', emp_id: ''},
#             {row: 1, column: 2, availibility: 'available', emp_id: ''},
#             {row: 1, column: 3, availibility: 'available', emp_id: ''},
#             {row: 1, column: 4, availibility: 'available', emp_id: ''},
#             {row: 1, column: 5, availibility: 'available', emp_id: ''},
#             {row: 1, column: 6, availibility: 'available', emp_id: ''},
#             {row: 1, column: 7, availibility: 'available', emp_id: ''},
#             {row: 1, column: 8, availibility: 'available', emp_id: ''},
#             {row: 1, column: 9, availibility: 'available', emp_id: ''},
#             {row: 1, column: 10, availibility: 'available', emp_id: ''},
#             {row: 2, column: 1, availibility: 'available', emp_id: ''},
#             {row: 2, column: 2, availibility: 'available', emp_id: ''},
#             {row: 2, column: 3, availibility: 'available', emp_id: ''},
#             {row: 2, column: 4, availibility: 'available', emp_id: ''},
#             {row: 2, column: 5, availibility: 'available', emp_id: ''},
#             {row: 2, column: 6, availibility: 'available', emp_id: ''},
#             {row: 2, column: 7, availibility: 'available', emp_id: ''},
#             {row: 2, column: 8, availibility: 'available', emp_id: ''},
#             {row: 2, column: 9, availibility: 'available', emp_id: ''},
#             {row: 2, column: 10, availibility: 'available', emp_id: ''},
#             {row: 3, column: 1, availibility: 'available', emp_id: ''},
#             {row: 3, column: 2, availibility: 'available', emp_id: ''},
#             {row: 3, column: 3, availibility: 'available', emp_id: ''},
#             {row: 3, column: 4, availibility: 'available', emp_id: ''},
#             {row: 3, column: 5, availibility: 'available', emp_id: ''},
#             {row: 3, column: 6, availibility: 'available', emp_id: ''},
#             {row: 3, column: 7, availibility: 'available', emp_id: ''},
#             {row: 3, column: 8, availibility: 'available', emp_id: ''},
#             {row: 3, column: 9, availibility: 'available', emp_id: ''},
#             {row: 3, column: 10, availibility: 'available', emp_id: ''},
#             {row: 4, column: 1, availibility: 'available', emp_id: ''},
#             {row: 4, column: 2, availibility: 'available', emp_id: ''},
#             {row: 4, column: 3, availibility: 'available', emp_id: ''},
#             {row: 4, column: 4, availibility: 'available', emp_id: ''},
#             {row: 4, column: 5, availibility: 'available', emp_id: ''},
#             {row: 4, column: 6, availibility: 'available', emp_id: ''},
#             {row: 4, column: 7, availibility: 'available', emp_id: ''},
#             {row: 4, column: 8, availibility: 'available', emp_id: ''},
#             {row: 4, column: 9, availibility: 'available', emp_id: ''},
#             {row: 4, column: 10, availibility: 'available', emp_id: ''},
#             {row: 5, column: 1, availibility: 'available', emp_id: ''},
#             {row: 5, column: 2, availibility: 'available', emp_id: ''},
#             {row: 5, column: 3, availibility: 'available', emp_id: ''},
#             {row: 5, column: 4, availibility: 'available', emp_id: ''},
#             {row: 5, column: 5, availibility: 'available', emp_id: ''},
#             {row: 5, column: 6, availibility: 'available', emp_id: ''},
#             {row: 5, column: 7, availibility: 'available', emp_id: ''},
#             {row: 5, column: 8, availibility: 'available', emp_id: ''},
#             {row: 5, column: 9, availibility: 'available', emp_id: ''},
#             {row: 5, column: 10, availibility: 'available', emp_id: ''}
#         ]
#         doc.insert()
#         doc.save()


# @frappe.whitelist()
# def delete_prev_document():
#     current_date = datetime.now().date()
#     prev_7th_day_date = current_date - timedelta(days=7)


#     doc = frappe.db.get_list("Seating System",
#                              filters={
#                                  "date": prev_7th_day_date,
#                              }
#                              )

#     for each_doc in doc:
#         each_doc.delete()


# last_run_date = None


# def schedule_date_change_event():
#     global last_run_date
#     frappe.msgprint("hii")
#     today = datetime.now().date()
#     if last_run_date != today:
#         # Date has changed, execute your code here
#         # print("Date has changed!")
#         doc_count = frappe.db.count(
#             "Seating System", {"date": next_7th_day_date})
#         frappe.msgprint("day changed")
#         if doc_count == 0:
#             add_next_document()
#             delete_prev_document()
#         last_run_date = today

#     enqueue('hitu.hitu.page.second_doc_new_page.second_doc_new_page.add_next_document',
#             enqueue_after_commit=True)
#     enqueue('hitu.hitu.page.second_doc_new_page.second_doc_new_page.delete_prev_document',
#             enqueue_after_commit=True)
# # Schedule the date change event
# frappe.schedule('cron', hour='0', minute='0', day_of_week='*',
#                 function=schedule_date_change_event)

# seatData = []

@frappe.whitelist()
def get_user_roles(user):
    arr = []
    arr = frappe.get_roles(frappe.session.user)
    return arr

@frappe.whitelist()
def get_seat_data(selected_date):
    # multiprocessing.Process(target=day_change_checker, args=(previous_day))
    # frappe.msgprint(str(frappe.utils.getdate()))
    # a = frappe.utils.getdate()
    # b = frappe.utils.add_to_date(a,days = 28)
    # c = frappe.utils.add_to_date(a,days = -7)
    # frappe.msgprint(str(frappe.get_roles(frappe.session.user)))
    # frappe.msgprint(str(frappe.get_list("Seating System", filters={
    #                            "date": str(c)})[0].name))
    
    seat_data = []
    response = frappe.get_list("Seating System", filters={
                               "date": selected_date})
    if response:
        for doc in response:
            seat_doc = frappe.get_doc("Seating System", doc.name)
            seat_1 = seat_doc.get("seat_1")
            if seat_1:
                for child in seat_1:
                    temp = {
                        "parent": seat_doc.name,
                        "row": child.row,
                        "column": child.column,
                        "availibility": child.availibility,
                        "emp_id": child.emp_id,
                        "booked_by": child.booked_by,
                    }
                    seat_data.append(temp)
            return {'seat_data': seat_data, 'status': seat_doc.docstatus}

def send_email(email_booked_by,email_booked_for,name_booked_by,name_booked_for, seat):
    recipients = [email_booked_by, email_booked_for]
    subject = "Seat Booking Confirmation"
    message = "Congratulations! " + name_booked_for + " Your seat has been booked by " + name_booked_by + " at " + seat

    frappe.sendmail(recipients=recipients, subject=subject, message=message)

def check_emp_id_exists(seat_data, emp_id):
    for seat in seat_data:
        if seat.get("emp_id") == emp_id:
            return False
    return True

# def submit_yesterday_doc():
#     current_date = datetime.now().date()
#     yesterday_date = current_date - timedelta(days=1)
#     yesterday_docs = frappe.db.get_list("Seating System",
#                              filters={
#                                  "date": yesterday_date,
#                              }
#                              )
#     for yesterday_doc in yesterday_docs:
#         yesterday_doc.submit()
        
# scheduler.add_job(add_next_document, 'cron', [] , hour = '21', minute = '20')
# scheduler.add_job(delete_prev_document, 'cron', [] , hour = '21', minute = '20')


@frappe.whitelist()
def save_employee_id(document_name, row, column, emp_id, availibility,user):
    
    # doc = frappe.get_doc("Seating System", document_name)
    # seat_1 = doc.get("seat_1")
    # if seat_1:
    #     for child in seat_1:
    #         if child.get("row") == int(row) and child.get("column") == int(column):
    #             child.emp_id = int(emp_id)
    #             child.availibility = "booked"
    #             break
    # doc.save()
    # frappe.msgprint(frappe.session.user)
    # c4daa547ac


    # if check_emp_id_exists(seat_data,)
    # frappe.msgprint("qwerty12345678")

    

    doc_count = frappe.db.count("Employee",{"employee_number": str(emp_id)})


    if doc_count>0 or int(emp_id) == 0:

        # get_seat_data()

        name = frappe.db.sql("select name from `tabseeting table child` where `row`=%s and `column`=%s and `parent`=%s;",(int(row),int(column),document_name))
        table_name = name[0][0]
        frappe.db.sql("update `tabseeting table child` set `emp_id`=%s , `availibility` = %s , booked_by = %s where `name`=%s;",values=(int(emp_id), availibility, user, table_name),as_dict=True)
        # frappe.msgprint(str(name))
        if int(emp_id) != 0:
            response = frappe.get_list("Employee", filters={
                                "employee_number": str(emp_id)}, ignore_permissions = True)
            # frappe.msgprint(str(response))
            email_for, full_name = frappe.db.get_value("Employee",response[0].name, ["company_email","employee_name"])
            frappe.msgprint(email_for)
            send_email("hitanshu.machhi@mindstix.com",email_for,"Hitanshu Machhi",full_name, chr(64 + int(row)) + '-' + str(column)
)
    else:
        frappe.throw('employee does not exist with employee id ' + str(emp_id))
        # pass

    
    
    
    
    
    
    # frappe.msgprint(str(result)+str(table_name)+document_name)
    # frappe.msgprint(str(name[0][0]))
    # frappe.msgprint(frappe.session.user)
    #     row = (int(row)-1)*10 + int(column)
    #     frappe.db.sql(
    #     """
    #     UPDATE `tabSeating System` SET `seat_1` = JSON_SET(
    #         `seat_1`,
    #         CONCAT('$[', CAST(%s AS CHAR), '].emp_id'), CAST(%s AS CHAR),
    #         CONCAT('$[', CAST(%s AS CHAR), '].availibility'), 'booked'
    #     ) WHERE `name` = %s
    #     """,
    #     (row - 1, emp_id, row - 1, document_name)

# Query OK, 0 rows affected (0.002 sec)
# Rows matched: 1  Changed: 0  Warnings: 0

# UPDATE `tabSeeting table child`
# SET `emp_id` = '123' AND `availibility` = 'booked'
# WHERE `parent` = 'c6bd4562fe' AND `row` = '1' AND `column` = '1';

# SELECT TABLE_NAME
# FROM INFORMATION_SCHEMA.COLUMNS
# WHERE COLUMN_NAME IN (1, 1, 'c6bd4562fe');

    # )

    # emp_id_int = int(emp_id)
    # row_int = int(row)
    # column_int = int(column)
    # table_name = "Seeting table child"
    # query = f"""
    #     UPDATE `tab{table_name}`
    #     SET `emp_id` = %s AND `availibility` = %s
    #     WHERE `parent` = %s AND `row` = %s AND `column` = %s
    # """
    # # Execute the SQL query with the necessary parameters
    # frappe.db.sql(query, (emp_id_int,"booked", document_name, row_int, column_int))
    # frappe.msgprint("query exicuted")


# while True:
#     schedule_date_change_event()
#     time.sleep(60)

# def schedule_events():
#     # schedule_date_change_event()
#     frappe.msgprint("day changed")
#     add_next_document()
#     delete_prev_document()
    # submit_yesterday_doc()

# def schedule_daily_function():
#     if not is_job_enqueued(schedule_events):
#         # Calculate the next execution time as 00:00 hours of the next day
#         next_execution = get_datetime(now_datetime()).replace(hour=11, minute=25, second=0) + timedelta(days=0)

#         # Enqueue the function to run at the next execution time
#         enqueue(schedule_events, enqueue_after_commit=True, enqueue_after_commit_options={"job_name": "Daily schedule_events"}, schedule_time=next_execution)

# # Call the `schedule_daily_function` to schedule the daily function
# schedule_daily_function()

# current_datetime = datetime.now()

# # Set the starting datetime to the current date and time
# start_time = datetime(current_datetime.year, current_datetime.month, current_datetime.day)

# # Create a cron expression to trigger the function at 00:00:00 every day
# cron_expression = '0 0 * * *'

# # Create a croniter object
# cron = croniter(cron_expression, start_time=start_time)

# # Get the next datetime when the cron expression will trigger
# next_datetime = cron.get_next(datetime)

# # Calculate the time difference to the next day change
# time_difference = next_datetime - current_datetime

# # Start an infinite loop to check for the day change
# while True:
#     # Sleep until the next day change
#     frappe.msgprint("sdfghjkll")
#     time.sleep(time_difference.total_seconds())

#     # Execute the function when the day changes
#     schedule_events()

#     # Get the next datetime when the cron expression will trigger
#     next_datetime = cron.get_next(datetime)

#     # Calculate the time difference to the next day change
#     time_difference = next_datetime - datetime.now()


# frappe.schedule("daily", add_next_document, "all")
# frappe.schedule("daily", delete_prev_document, "all")

# @frappe.whitelist()
# def save_doc(document_name, row, column, emp_id):

#     document = frappe.get_doc("Seating System", document_name)
#     # document.reload()
#     # aid = -1
#     # if document.seat_1:
#     # return document.seat_1
#     for ro in document.seat_1:
#         # return row
#         if ro.row == int(row) and ro.column == int(column):
#             ro.emp_id = int(emp_id)
#             ro.availibility = 'booked'
#             # aid = ro.emp_id
#             # return aid

#             break
#     # try:
    # emp_id_int = int(emp_id)
    # row_int = int(row)
    # column_int = int(column)
    # table_name = "Seeting table child"
    # query = f"""
    #     UPDATE `tab{table_name}`
    #     SET `emp_id` = %s AND `availibility` = %s
    #     WHERE `parent` = %s AND `row` = %s AND `column` = %s
    # """
    # # Execute the SQL query with the necessary parameters
    # db.sql(query, (emp_id_int,"booked", document_name, row_int, column_int))
#     try:
#         # document.reload()
#         # for ro in document.seat_1:
#         # # return row
#         #     if ro.row == int(row) and ro.column == int(column):
#         #         ro.emp_id = int(emp_id)
#         #         ro.availibility = 'booked'
#         #         # aid = ro.emp_id
#         #         # return aid

#         #         break

#         document.flags.ignore_validate_update_after_save = True
#         document.save()
#         # document.
#         print("Table field updated successfully.")
#     except exceptions.TimestampMismatchError:
#         # Document has been modified, refresh and retry
#         document.reload()
#         # document.seat_1.refresh_from_db()
#         # document = frappe.get_doc("Seating System", document_name)
#         # for ro in document.seat_1:
#         # # return row
#         #     if ro.row == int(row) and ro.column == int(column):
#         #         ro.emp_id = int(emp_id)
#         #         ro.availibility = 'booked'
#         #         # aid = ro.emp_id
#         #         # return aid

#         #         break
#         document.flags.ignore_validate_update_after_save = True
#         document.save()

#     # document.save(
#     #     ignore_permissions = True,
#     #     ignore_version = True
#     # )
#     return document.seat_1
#     # return ro
#     # print("Table field updated successfully.")

#     # return aid
#     # except Document.TimestampMismatchError:
#     #     # Document has been modified, refresh and retry
#     #     document.reload()
#     #     document.your_table_fieldname.refresh_from_db()
#     #     document.save()
#     #     print("Table field updated successfully after refreshing the document.")
#     # except Exception as e:
#     # print("An error occurred while updating the table field:", str(e))


# # schedule.every(60).seconds.do(schedule_date_change_event)

# # # Keep the script running continuously
# # while True:
# #     schedule.run_pending()
# #     time.sleep(1)

# # event_name = 'Date Change Event'  # Specify a unique event name
# # existing_events = frappe.get_all('Scheduler Event', filters={'event': event_name})

# # if not existing_events:
# #     # Schedule the event if it doesn't exist already
# #     frappe.get_doc({
# #         'doctype': 'Scheduler Event',
# #         'event': event_name,
# #         'handler': 'hitu.hitu.page.second_doc_new_page.second_doc_new_page.schedule_date_change_event',
# #         'event_type': 'Cron',
# #         'cron_string': '0 0 * * *',  # Schedule to run every day at midnight
# #         'enabled': 1
# #     }).insert()




# # Wait for the background process to complete (optional)
# background_process.join()