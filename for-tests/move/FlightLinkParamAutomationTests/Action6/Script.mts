WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set
WpfWindow("Micro Focus MyFlight Sample_2").WpfEdit("byNumberWatermark").Set Parameter("Order_Number")
If Parameter("Order_Number") > 0 Then
	Reporter.ReportEvent micPass, "Passed Test", "Link to parameters Order_Number work properly"
	else
	Reporter.ReportEvent micFail, "Failed Test", "Link to parameters Order_Number Failed"
End If
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
Reporter.ReportEvent micDone, "Test Done","the Flight App Done Link parameters Order_Number Test"
systemUtil.CloseProcessByName ("FlightsGUI.exe")

