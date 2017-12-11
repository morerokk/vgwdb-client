import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Manufacturer } from '../../../models/manufacturer.model';
import { ManufacturerService } from '../../../services/manufacturer.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-manufacturer-details',
  templateUrl: './manufacturer-details.component.html',
  styleUrls: ['./manufacturer-details.component.css']
})
export class ManufacturerDetailsComponent implements OnInit, OnDestroy {

  manufacturer: Manufacturer;

  subscription: Subscription;

  constructor(private manufacturerService: ManufacturerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params
    .subscribe(
      (params: Params) => {
        try{
          const id = params['id'];
          this.manufacturer = this.manufacturerService.getManufacturer(id);
        }
        catch(e){
          this.onReload();
        }
      }
    );
  }

  ngOnDestroy() {
    
  }
    
  onReload() {
    this.router.navigate(['/weapons']);
  }

}
