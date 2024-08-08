import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  itemForm: FormGroup;
  itemId?: number;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      if (this.itemId) {
        this.itemService.getItem(this.itemId).subscribe(item => {
          this.itemForm.patchValue(item);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      if (this.itemId) {
        this.itemService.updateItem(this.itemId, this.itemForm.value).subscribe(() => {
          this.router.navigate(['/items']);
        });
      } else {
        this.itemService.addItem(this.itemForm.value).subscribe(() => {
          this.router.navigate(['/items']);
        });
      }
    }
  }
}
