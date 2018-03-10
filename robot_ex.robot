*** Settings ***
Library		String
Library 	AutomationLibrary
Suite Setup	Start Suite
Suite Teardown	Close Suite

*** Test Cases ***

Set satellite orientation
	Verify Connection 	
	Set Orbital Elements 	10 	20
	Set ADCS 		1 	2	3



Measure particles with payload
	Verify Connection
	Startup payload		10
	Measure particles 	HIGH 	100000
	Store Measurment 	/flash/data/measurment.dat
	Downlink Data 		/flash/data/measurement.dat



