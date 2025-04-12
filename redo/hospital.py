
# Simple Hospital Management System

patients = []

# Function to add a new patient
def add_patient():
    patient = {}
    patient['ID'] = input("Enter patient ID: ")
    patient['Name'] = input("Enter patient name: ")
    patient['Age'] = input("Enter patient age: ")
    patient['Gender'] = input("Enter patient gender: ")
    patient['Disease'] = input("Enter disease or reason for visit: ")  
    patients.append(patient)
    print("Patient added successfully!\n")

# Function to view all patients
def view_patients():
    if not patients: 
        print("No patients in the record.\n")
    else:
        for p in patients:
            print(f"ID: {p['ID']}, Name: {p['Name']}, Age: {p['Age']}, Gender: {p['Gender']}, Disease: {p['Disease']}")
        print()

# Function to search patient by ID
def search_patient():
    pid = input("Enter patient ID to search: ")
    found = False
    for p in patients:
        if p['ID'] == pid:
            print(f"Patient Found: Name: {p['Name']}, Age: {p['Age']}, Gender: {p['Gender']}, Disease: {p['Disease']}\n")
            found = True
            break
    if not found:
        print("Patient not found.\n")

# Main loop
def hospital_system():
    while True:
        print("===== Hospital Management Menu =====")
        print("1. Add New Patient")
        print("2. View All Patients")
        print("3. Search Patient by ID")
        print("4. Exit")
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            add_patient()
        elif choice == '2':
            view_patients()
        elif choice == '3':
            search_patient()
        elif choice == '4':
            print("Exiting system. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.\n")
