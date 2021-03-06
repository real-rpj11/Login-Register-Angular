import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

  });
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.form.value);
    /**
     * axios [post, get, put, delete ]
     * axios.post(url, data).then(res=>{}).catch(err=>{})
     * axios.get(url).then(res=>{}).catch(err=>{})
     * axios.put(url, data).then(res=>{}).catch(err=>{})
     * axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
     */
    
    axios.post("https://btal-ride.herokuapp.com/api/admin/login", this.form.value).then(res => {
      return this.router.navigate['/dashboard'];
      /**
       * token => res.data.token
       * localStorage.setItem('token', res.data.token)
       */
    }).catch(err => {
      console.log(err)
    })
  }

}
