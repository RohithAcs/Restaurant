import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.scss']
})
export class RestaurantDashComponent implements OnInit {

  // formValue!: FormGroup;
  // restaurantModelObject: RestaurantData = new RestaurantData;
  // allRestaurantData: any;
  // showAddResto: boolean;
  // public count: number = 0;
  // public restaurantId: any = [];

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = foodService.getAll();
    })

  }



  // constructor(private formBuilder: FormBuilder, private api: ApiService) {
  //   this.showAddResto = true;
  // }

  ngOnInit(): void {
    // this.formValue = this.formBuilder.group({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required]),
    //   mobile: new FormControl('', [Validators.required]),
    //   address: new FormControl('', [Validators.required]),
    //   services: new FormControl('', [Validators.required])
    // });

    // this.getAllData();
  }

  // clickAddResto() {
  //   this.formValue.reset();
  //   this.showAddResto = true;
  // }

  // addRestaurant() {
  //   this.restaurantModelObject.name = this.formValue.value.name;
  //   this.restaurantModelObject.email = this.formValue.value.email;
  //   this.restaurantModelObject.mobile = this.formValue.value.mobile;
  //   this.restaurantModelObject.address = this.formValue.value.address;
  //   this.restaurantModelObject.services = this.formValue.value.services;

  //   this.api.postRestaurant(this.restaurantModelObject).subscribe({
  //     next: (res: any) => {
  //       this.formValue.reset();
  //       this.getAllData();
  //     },
  //     error: (err: any) => {
  //       alert(err.message);
  //     }
  //   })
  // }

  // getAllData() {
  //   this.api.getRestaurant().subscribe({
  //     next: (res: any) => {
  //       this.allRestaurantData = res;
  //     }
  //   })
  // }

  // deleteRestaurant(data: any) {
  //   this.api.deleteRestaurant(data.id).subscribe({
  //     next: (res: any) => {
  //       alert("Restaurent Record has been deleted");
  //       this.getAllData();
  //     },
  //     error(err: any) {
  //       alert(err.message);
  //     }
  //   })
  // }

  // onEditRestaurant(data: any) {
  //   this.showAddResto = false;
  //   this.restaurantModelObject.id = data.id;
  //   this.formValue.controls['name'].setValue(data.name);
  //   this.formValue.controls['email'].setValue(data.email);
  //   this.formValue.controls['mobile'].setValue(data.mobile);
  //   this.formValue.controls['address'].setValue(data.address);
  //   this.formValue.controls['services'].setValue(data.services);
  // }

  // updateRestaurant() {
  //   this.restaurantModelObject.name = this.formValue.value.name;
  //   this.restaurantModelObject.email = this.formValue.value.email;
  //   this.restaurantModelObject.mobile = this.formValue.value.mobile;
  //   this.restaurantModelObject.address = this.formValue.value.address;
  //   this.restaurantModelObject.services = this.formValue.value.services;

  //   this.api.updateRestaurant(this.restaurantModelObject, this.restaurantModelObject.id).subscribe({
  //     next: (res: any) => {
  //       alert("Restaurant has updated");
  //       this.getAllData();
  //     },
  //     error(err: any) {
  //       alert(err.message);
  //     }
  //   })
  // }

  // addToCart(data: any) {
  //   if (data) {
  //     this.restaurantId.lenght === 0 ? this.restaurantId.push(data.id) : "eji"
      
  //     // let filtered : any[]= this.restaurantId.push(data.id);
  //     //   filtered.length > 1 ?  this.restaurantId =  [filtered].filter((val : any, i : number) => { 
  //     //     [filtered].indexOf(val) === i
  //     //   })  : [filtered].push(data.id);
  //   }
  //   console.log(this.restaurantId)

  // }

}
