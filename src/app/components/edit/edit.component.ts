import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  item: Item = new Item();

  constructor(private itemService: ItemService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.itemService.detail(id).subscribe(data => {
      this.item = data;
    })
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.itemService.update(id, this.item).subscribe(data => {
      this.router.navigate(['/']);
    }, err => {
      console.log('*** Update Error ***');
    })
    
  }
}
