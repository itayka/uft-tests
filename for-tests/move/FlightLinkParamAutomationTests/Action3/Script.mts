WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco"
'WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 5,13
'wait(5)
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "8-Dec-2025"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "John Smith"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
 
WpfWindow("Micro Focus MyFlight Sample_2").WpfObject("Order # completed").WaitProperty "visible",true,10000
strOrder=WpfWindow("Micro Focus MyFlight Sample_2").WpfObject("Order # completed").GetROProperty("text")
arrValues=split(strOrder," ")
OrderNum=arrValues(1)
Parameter("Order_Number")=cint(OrderNum)
print OrderNum

str = Parameter.Item("Order_Number")
Set RegEx = New RegExp
RegEx.Pattern = "[^\d*]"
RegEx.IgnoreCase = True 
RegEx.Global = True 
Parameter.Item("Order_Number") = RegEx.Replace(str, "")

For i=0 to 1
    Set a=createobject("wscript.shell") 'Creat one object
    msgbox_message=Parameter.Item("Order_Number") 
    msgbox_time=2
    msgbox_title=""
    a.popup msgbox_message,msgbox_time,msgbox_title  
    Set a=Nothing
Next
print Parameter.Item("Order_Number")  ' this concatenates it to the end of the output window

Reporter.ReportEvent micPass, Parameter.Item("Order_Number") , "order numbe is " +Parameter.Item("Order_Number")

