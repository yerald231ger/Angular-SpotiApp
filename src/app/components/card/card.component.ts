import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtist(item: any) {
    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId]);
  }

  ngOnInit(): void {
  }


}
