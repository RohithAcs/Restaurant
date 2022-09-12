import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.scss']
})
export class RestaurantDashComponent implements OnInit {

  formValue!: FormGroup;
  restaurantModelObject : RestaurantData = new RestaurantData;
  allRestaurantData: any;
  showAddResto: boolean;

  constructor(private formBuilder: FormBuilder,private api:ApiService) {
    this.showAddResto = true;
   }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    });

    this.getAllData();
  }

  clickAddResto(){
    this.formValue.reset();
    this.showAddResto = true;
  }

  addRestaurant(){
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.mobile = this.formValue.value.mobile;
    this.restaurantModelObject.address = this.formValue.value.address;
    this.restaurantModelObject.services = this.formValue.value.services;

    this.api.postRestaurant(this.restaurantModelObject).subscribe({next : (res:any )=>{
      this.formValue.reset();
      this.getAllData();
    },
    error: (err : any) => {
      alert(err.message);
    }
  })
  }

  getAllData(){
    this.api.getRestaurant().subscribe({next : (res: any) =>{
      this.allRestaurantData = res;
    }})
  }

  deleteRestaurant(data:any){
    this.api.deleteRestaurant(data.id).subscribe({next : (res: any) => {
      alert("Restaurent Record has been deleted");
      this.getAllData();
    },
    error(err: any){
      alert(err.message);
    }
  })
  }

  onEditRestaurant(data: any){
    this.showAddResto = false;
    this.restaurantModelObject.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

  updateRestaurant(){
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.mobile = this.formValue.value.mobile;
    this.restaurantModelObject.address = this.formValue.value.address;
    this.restaurantModelObject.services = this.formValue.value.services;

    this.api.updateRestaurant(this.restaurantModelObject,this.restaurantModelObject.id).subscribe({ next: (res:any) => {
      alert("Restaurant has updated");
      this.getAllData();
    },
    error(err: any){
      alert(err.message);
    }
    })
  }

}
