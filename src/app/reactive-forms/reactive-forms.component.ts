import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface UserModel{
  email: FormControl<string |null>;
  password: FormControl<string |null>;
  city: FormControl<string |null>;
  address: FormArray<any>;
  address2: FormArray<any>;
  state: FormControl<string |null>;
  zip: FormControl<string |null>;
}





@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

//FormControl
//Maneja el valor de una propiedad en especifico
// Se vinculan directamente con los inputs, selects, textareas del html

emailControl = new FormControl('');
passwordControl = new FormControl('');
cityControl = new FormControl('');
/**
 * FormArray
 * Agrupan  FormControl, FormArray y FormGroup
 * A modo de array []
 */

addressFormArray = new FormArray<any>([
  new FormGroup({
    address: new FormControl(''),
  })
]);

//los FormGroup agrupan a FormControl, FormArray y FormGroup
// A modo de objeto {}
//        { 
//          email: '',
//          password: '',
//                       }

  userModel:FormGroup<UserModel> = new FormGroup<any>({
     email:this.emailControl,
    password:this.passwordControl,
    city:this.cityControl,
     address:this.addressFormArray,
  }); 

 


 // constructor(private fb: FormBuilder){
 //   this.userModel = this.fb.group({
 //     email:[''],
 //     password:[''],
  //    city:[''],
  //    address:[''],
  //    address2:[''],
  //    state:[''],
  //    zip:[''],
  //  })
  //  console.log(this.userModel);  
 // }
}


