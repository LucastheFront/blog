import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bg-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
    postImage = 'https://images.daznservices.com/di/library/GOAL/9/4f/jorge-jesus-flamengo-botafogo-carioca-07-03-2020_195az3ietwmc51bkgx8rpe1033.jpg?t=-1216696048&quality=100';
    postTitle = 'Jorge Jesus, nouvel entraîneur du Benfica';
    postDescription = `Après avoir quitté le Benfica Lisbonne à l'été 2015 pour rejoindre les rangs du rival du Sporting Portugal, Jorge Jesus est de retour au SLB. Si l'entraîneur portugais a pris quelques galons supplémentaires avec son passage réussi à Flamengo, les supporters du Benfica n'ont pas oublié l'acte de trahison du double J.`;
    postAuthor = 'Thomas';

    constructor() {}

    ngOnInit(): void {}
}
