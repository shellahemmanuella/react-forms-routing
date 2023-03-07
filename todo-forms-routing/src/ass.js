import React from 'react';

import { MyForm } from './form1';
import { Form } from './form2';
import { MyForm1 } from './form3';
import './ass.css'

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

export function FormsDashboard() {
  return (
    <div>
      <div class="tab">
      <button class="tablinks" onClick={event => openCity(event, 'form1')}>Form 1</button>
      <button class="tablinks" onClick={event => openCity(event, 'form2')}>Form 2</button>
      <button class="tablinks" onClick={event => openCity(event, 'form3')}>Form 3</button>
    </div>

    <div id="form1" class="tabcontent">
      <MyForm />
    </div>

    <div id="form2" class="tabcontent">
      <Form />
    </div>

    <div id="form3" class="tabcontent">
      <MyForm1 />
    </div>
    </div>
  )
}