let patients = [];
let doctors = [];
let appointments = [];

function showSection(id) {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function registerPatient(event) {
  event.preventDefault();
  const name = document.getElementById('p-name').value;
  const age = document.getElementById('p-age').value;
  const gender = document.getElementById('p-gender').value;
  const contact = document.getElementById('p-contact').value;

  patients.push({ name, age, gender, contact });
  alert("Patient registered!");
  event.target.reset();
}

function addDoctor(event) {
  event.preventDefault();
  const name = document.getElementById('d-name').value;
  const specialty = document.getElementById('d-specialty').value;
  const contact = document.getElementById('d-contact').value;

  doctors.push({ name, specialty, contact });
  alert("Doctor added!");
  event.target.reset();
}

function bookAppointment(event) {
  event.preventDefault();
  const patient = document.getElementById('a-patient').value;
  const doctor = document.getElementById('a-doctor').value;
  const date = document.getElementById('a-date').value;

  appointments.push({ patient, doctor, date });
  alert("Appointment booked!");
  event.target.reset();
}

function showPatients() {
  const div = document.getElementById('records-display');
  div.innerHTML = "<h3>Patients</h3>" + patients.map(p =>
    <p>${p.name}, Age: ${p.age}, Gender: ${p.gender}, Contact: ${p.contact}</p>
  ).join('');
}

function showDoctors() {
  const div = document.getElementById('records-display');
  div.innerHTML = "<h3>Doctors</h3>" + doctors.map(d =>
    <p>${d.name}, Specialty: ${d.specialty}, Contact: ${d.contact}</p>
  ).join('');
}

function showAppointments() {
  const div = document.getElementById('records-display');
  div.innerHTML = "<h3>Appointments</h3>" + appointments.map(a =>
    <p>Patient: ${a.patient}, Doctor: ${a.doctor}, Date: ${a.date}</p>
  ).join('');
}